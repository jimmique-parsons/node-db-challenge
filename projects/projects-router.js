const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Projects.getProject(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects by id' });
        });
});

router.get('/resources', (req, res, next) => {
    Projects.getAllResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

router.get('/:id/resources', (req, res, next) => {
    const { id } = req.params;

    Projects.getResources(id)
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.get('/:id/tasks', (req, res, next) => {
    const { id } = req.params;

    Projects.getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.post('/', (req, res, next) => {
    const project = req.body;

    if (project.hasOwnProperty('completed') === false) {
        project.completed = 0;
    }
    if (!project.name) {
        res.status(400).json({ message: 'Project name required' });
    } else {
        Projects.addProject(project)
            .then(ids => {
                (ids.length > 0)
                    ? res.status(201).json({ message: 'Project successfully added' })
                    : res.status(500).json({ message: 'Failed to add project' });
            })
    }
});

router.post('/resources', (req, res, next) => {
    const resource = req.body;

    if (!resource.name) {
        res.status(400).json({ message: 'Resource name required' });
    } else {
        Projects.addResource(resource)
            .then(ids => {
                (ids.length > 0)
                    ? res.status(201).json({ message: 'Resource successfully added' })
                    : res.status(500).json({ message: 'Failed to add resource' });
            })
    }

});

router.post('/:id/tasks', (req, res, next) => {
    const { id } = req.params;
    const task = req.body;
    task.project_id = id;

    if (task.hasOwnProperty('completed') === false) {
        task.completed = 0;
    }

    if (!task.description) {
        res.status(400).json({ message: 'Task description required' });
    } else {
        Projects.addTask(id, task)
            .then(ids => {
                (ids.length > 0)
                    ? res.status(201).json({ message: 'Task successfully added' })
                    : res.status(500).json({ message: 'Failed to add task' });
            });
    }
});

module.exports = router;