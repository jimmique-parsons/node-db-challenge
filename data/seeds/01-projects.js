
exports.seed = function (knex) {
    return knex('projects').insert([
        { id: 1, name: 'Become a web developer', description: 'Find a well paying job in the web development field', completed: 0 },
        { id: 2, name: 'Save and invest', description: 'Build up my retirement and trust funds for my children', completed: 0 },
    ]);
};