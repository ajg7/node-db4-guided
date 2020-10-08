# Node DB 4 Guided Project

Guided project for **Node DB 4** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] **import** and clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to create a multi-table database schema.

## Requirements

Build a system to manage students and cohorts for LS

Manage students.
Manage cohorts.
Add students to cohorts.

- a cohort can have multiple students
- a student can join more than one cohort over time

## Relationships

- one to one: ignore
- one to many: most common
- many to many: a trick

## Principles

- every table must have a primary key
- work on two or three entities (is a noun -> tables) at a time
- one to many --> use a foreign key
- the foreign key goes on the many side
- many to many --> use a third table
- the third table could have additional information

A `track` can have many `cohorts`
A `cohort` belongs to only one `track`

