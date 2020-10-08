
exports.up = function(knex) {
  return knex.schema
    .createTable("tracls", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique();
    })
    .createTable("cohorts", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique();

        // tbl.integer("track_id").unsigned().references("tracks.id")
        tbl.integer("track_id")
            .unsigned()
            .references("id")
            .inTable("tracks")
            .onDelete("RESTRICT") //CASCADE, RESTRICT, SET NULL
            .onUpdate("CASCADE") //Any changes on a primary key will update the foreign keys
    })
    .createTable("students", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().index();
    })
    .createTable("cohort_students", tbl => {
        tbl.increments();

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("cohort_students")
    .dropTableIfExists("students")
    .dropTableIfExists("cohorts")
    .dropTableIfExists("tracks")
};
