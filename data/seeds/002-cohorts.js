exports.seed = function(knex) {
    const cohorts = [
        {
            name: "web 1",
            track_id: 1,
        },
        {
            name: "web 2",
            track_id: 1,
        },
        {
            name: "web 3",
            track_id: 1,
        },
        {
            name: "ds 1",
            track_id: 2,
        },
        {
            name: "ds 2",
            track_id: 2,
        },
    ]
    return knex("cohorts").insert(cohorts);
}