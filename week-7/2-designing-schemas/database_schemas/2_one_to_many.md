# One To Many Schema Design

A database with a single table is not that useful &mdash; a database of any complexity will have more than one kind of "thing" it wants to keep track of.

A classroom database, for example, could have separate tables for students, teachers, classes, sections, homework assignments, grades, etc.

These tables are all related to each other through one of three types of **relationships**.  One-to-many relationships are the easiest to understand.

An Amazon user has many orders, but an order belongs to exactly one user.  A movie theater has multiple screens, but each screen belongs to only that movie theater.  A street has many houses on it, but a house belongs to only one street.

We design this by having a **foreign key** on the "many" table which stores the **primary key** of the "one" table.  Remember that a table's primary key uniquely identifies a row.  The `users` and `orders` table would be designed this way:

<pre>
+------------+        +-------------+
| users      |        | orders      |
+------------+        +-------------+
| id         |&lt;---\   | id          |
| first_name |     \--| user_id     |
| last_name  |        | total       |
| email      |        | address     |
| created_at |        | created_at  |
| updated_at |        | updated_at  |
+------------+        +-------------+
</pre>

The **convention** is that the **foreign key** (`user_id`, here) contains the singular version of the foreign table.  Because <tt>user_id</tt> contains an integer that corresponds to a one and only one row in the `users` table, we see that every order only has one users.  However, there could be two rows in the `orders` table with the same values in the `user_id` field.

One user has many orders, but an order has exactly one user.
