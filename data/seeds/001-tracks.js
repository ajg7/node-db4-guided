exports.seed = function (knex) {
    const tracks = [
        {
            name: "wev",
        },
        {
            name: "data science",
        },
        {
            name: "artificial intelligence"
        }
    ]

    return knex("tracks").insert(tracks)
}