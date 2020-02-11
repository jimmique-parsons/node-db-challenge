exports.seed = function (knex) {
    return knex('tasks').insert([
        {
            id: 1,
            description: 'Study Full Stack Web Development',
            notes: 'Use Lambda School curriculum as well as creating side projects',
            completed: 0,
            project_id: 1
        },
        {
            id: 2,
            description: 'Prep for technical interviews',
            notes: `Use websites like freecodecamp.org to prep for interviews`,
            completed: 0,
            project_id: 1
        },
        {
            id: 3,
            description: 'Saving Routine',
            notes: 'Save and transfer $45 a week to IRA fund',
            completed: 1,
            project_id: 2
        },
        {
            id: 4,
            description: 'Draft Trust',
            notes: 'Appoint Trustor and Trustees',
            completed: 0,
            project_id: 2
        }
    ]);

};