[Week 7 Home](../)

# U3.W7: Designing Schemas 

## Learning Competencies
- Create a graphical representation of a simple database
- Identify database relationships including one to many, many to many, and one to one
- Adhere to established naming conventions for DB tables and columns


## Summary
Databases can be incredibly complex. Have you ever tried to track a bunch of different data in spreadsheets that all references other spreadsheets? Imagine creating a spreadsheet that tracks student data through Phase 0. We would want one table for student information, one for GPS sessions, one for peer-pairing, one for feedback, etc. All of these would relate to one student. This is where database schema design comes in. 

In this challenge, you will design schemas to represent some basic database relationships (one-to-one, one-to-many, and many-to-many). You will use [SQL Designer](https://socrates.devbootcamp.com/sql) on Socrates. When you finish, make sure you take a screenshot of each database schema. Name it appropriately, and save it to your [imgs](../imgs) directory in your local repo. You'll want to display it inline in your [my_solution.md](my_solution.md) file.

**NOTE:** In [SQL Designer](https://socrates.devbootcamp.com/sql), you'll notice that you can pick a "type" for each field.  For example, the birthday field should be a "date" type.  There's a core set of datatypes that all SQL-based databases support, but many have additional types. You can read more about that at [w3schools.com](http://www.w3schools.com/sql/sql_datatypes.asp) or on [Wikipedia](http://en.wikipedia.org/wiki/SQL#Data_types). For now, don't worry about using the perfect datatype (i.e. `varchar` vs. `text`), just use the one that colors it appropriately.

## Release 0: Student Roster Schema
Read through [1_student_roster](database_schemas/1_student_roster.md) in the [database_schemas](database_schemas) directory in this challenge. When you finish reading. Visit [SQL Designer](https://socrates.devbootcamp.com/sql) and recreate the <tt>students</tt> table in a schema format. Display the screenshot in your [my_solution.md](my_solution.md) file and commit your changes.

This is what the [schema](http://f.cl.ly/items/0z3p0i1Y0G3h1A3V1d2p/Screen%20Shot%202012-05-17%20at%205.04.38%20PM.png) should look like, colors and all.

## Release 1: One to Many Schema
Read through [2_one_to_many.md](database_schemas/2_one_to_many.md)

Design the schema based on the users and orders displayed in the file and connect the `users` and `orders` tables together by clicking 'connect foreign key', pointing the `user_id` field in the `orders` table to the `id` field in the `users` table. 

Display the screenshot in your [my_solution.md](my_solution.md) file and commit your changes.

## Release 2: One to One Schema
Read through [3_one_to_one.md](database_schemas/3_one_to_one.md)

Connect the `users` and `facebook_accounts` on your own schema. Display the screenshot in your [my_solution.md](my_solution.md) file and commit your changes. 

## Release 3: Many to Many Schema
Read through [4_many_to_many.md](database_schemas/4_many_to_many.md)

Implement the author/book schema. Connect the tables using the appropriate foreign keys! 

Each book also has one publisher, and a publisher can publish many books.  Add a `publishers` table to the schema above so it and `books` are in a one-to-many relationship.  

Add additional fields. The `publishers` table should have a `name` field, in addition to the fields we include by convention (primary key, timestamps, etc.).

When you are finished. Display the screenshot in your [my_solution.md](my_solution.md) file and commit your changes. 

## Release 4: Design Your Own Schemas!
Based on the different schemas above, design your own one-to-one and many-to-many. Explain what you are modeling in the appropriate section. This is something your cohort-mates should be reviewing and commenting on.

Display the screenshots in your [my_solution.md](my_solution.md) file and commit your changes.

## Release 5: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md) 
in the reflection section of your [my_solution.md](my_solution.md) file. 

## Release 6: [Review](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md)
Look at (at least) 2 other solutions to Release 4: Design Your Own Schema. Based on their description, did they connect the tables appropriately? 
