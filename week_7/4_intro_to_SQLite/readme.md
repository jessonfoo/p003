[Week 7 Home](../)

# U3.W7: Intro to SQLite

## Learning Competencies
- Write simple SELECT statements to extract data from one or more fields on a single table using the SELECT, FROM, WHERE, LIMIT, and ORDER BY keywords
- Adhere to established naming conventions for DB tables and columns


## Summary
You should already have SQLite installed from the first challenge this week. If you haven't done so yet, please do so. You'll need to do some research, however. We have not given you instructions because it is important to your growth as a developer that you can learn to do some of this on your own. 

[SQLite](http://en.wikipedia.org/wiki/SQLite) is a simple relational database. Every database is a single file, which you can move around.

The default way SQLite displays data is not great, so paste the following into your Terminal to make it look nicer:


```bash
cat << EOF > ~/.sqliterc
.headers on
.mode column
EOF
```

Creating a database in SQLite is simple.

```bash
sqlite3 dummy.db
```

Will put you into the "sqlite" shell prompt, which looks something like this:

```text
SQLite version 3.7.13 2012-06-11 02:05:22
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>
```

Adding a schema is easy too!  If you wanted to create a <code>users</code> table, you can paste the following into the sqlite shell and hit **enter**:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name  VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
```

It should look like this, afterwards:

```bash
SQLite version 3.7.13 2012-06-11 02:05:22
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );
sqlite>
```

Read this article about [SQLite Datatypes](http://www.sqlite.org/datatype3.html) for more information what <code>VARCHAR</code>, <code>DATETIME</code>, etc. mean.

You'll be doing all of this in the console, so after each release you'll want to copy and paste your terminal output into your [my_solution](my_solution.md) file. Commit your changes after each release.

## Release 0: Create a dummy database

Create your own dummy database in SQLite, and create a users schema as shown above.

## Release 1: Insert Data 
You now have a table, so let's insert some data!  Paste the following into the sqlite shell:

```sql
INSERT INTO users
(first_name, last_name, email, created_at, updated_at)
VALUES
('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
```

And go ahead and get the data out of the table!  Run this:

```sql
SELECT * FROM users;
```

Now add a new entry to the database with your own name and email.  Run another select statement to see both entries.

## Release 2: Multi-line commands

The Sqlite3 shell is made to take multiple line commands.  So if you just type in `select * from users` and hit enter, nothing happens.  Only when you end the query with a `;` and hit `return` does the query run.

This allows SQLite to take a multi-line `INSERT` statement like the one above.  This primarily helps with readability, sometimes a more complex query can be hundreds of characters!

Now try adding Kimmy to the database again, with the same data as above.  Did you get an error - `Error: column email is not unique`?  If so, can you track it down?  Make sure all your data is there by running your select statement, and try again.

## Release 3: Add a column

Now add a column to the users table for "nicknames".  You'll need to use the `ALTER` statement. Make sure you add the correct type for the nickname `VARCHAR(64)` and that it is a mandatory field - ie `NOT NULL`. If you make a mistake, don't worry!  Just `.quit` out of SQLite, delete the `dummy.db` file and start over again.

Make sure the schema was updated by typing `.schema`.  Your new `nickname` column should appear last.

Now add a nickname for Kimmy (In elementary school she was called "Kimchee") and one for yourself.  Use the `UPDATE` statement.

Use a select statement to see the database entries, they should include the new nicknames!

Need help?  This [tutorial](http://zetcode.com/databases/sqlitetutorial/) may provide some insight.

## Release 4: Change a value

Oops.  It turns out Kimmy's not so pleased about her new nickname.  She's also not so pleased that her first name was spelled wrong. We need to change all three of these things!
Kimmy's correctly spelled name is "Kimmy Lin" and she'd likely be less perturbed with a nickname like "Ninja Coder".

Check out the [tutorial](http://zetcode.com/databases/sqlitetutorial/) for some help.  You should be able to do this with a single line SQL statement!

And don't forget to update the `updated_at` column.  It should be the current time.  (Hint: Look at the original `INSERT` statements.) BTW, when you get into development with Rails, the `updated_at` column will be managed for you.

Use a select statement to see the database entries, they should include the correct spellings and updated nickname.  Nice work!


## Release 5: [Reflect](../../references/reflection.md) 
...in the reflection section of your [my_solution.md](my_solution.md) file. 



