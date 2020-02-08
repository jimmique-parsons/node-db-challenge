const cleaner = require('knex-cleaner');

exports.seed = function (knex) {
    return cleaner.clean(knex, {
        mode: 'truncate', // For resetting ids
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // WARNING: don't empty migration tables
    });
};