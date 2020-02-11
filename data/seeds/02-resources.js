
exports.seed = function (knex) {
    return knex('resources').insert([
        {
            id: 1,
            name: 'Lambda School',
            description: 'A full-time and part-time, online full stack coding school. This immersive online school is dedicated to teaching the most cutting-edge and in-demand technologies focused around JavaScript. Students will learn front end, back end, mobile, and neural network technologies.'
        },
        {
            id: 2,
            name: 'Afrotech',
            description: `One of the largest multicultural tech conferences in the United States, bringing together engineers, venture capitalists, recruiters, technologists, and culture enthusiasts from all over the world. It is the definitive conference that brings leaders in technology and business together to exchange ideas and build a strong black tech community.`
        },
        {
            id: 3,
            name: 'Vanguard',
            description: 'One of the worlds largest investment companies with 30 million investors changing the way the world invests.'
        },
        {
            id: 4,
            name: 'Trust & Will',
            description: 'Trust & Will is the easiest way to create, edit, store, and share your estate plan. Our mission is to help everyone leave a lasting legacy.'
        }
    ]);
};