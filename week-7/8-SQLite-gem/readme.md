[Week 7 Home](../)

# U3.W7: BONUS Using the SQLite Gem

## Learning Competencies
- Create a graphical representation of a simple database
- Identify database relationships including one to many, many to many, and one to one
- Adhere to established naming conventions for DB tables and columns


## Summary:
Congratulations!  You have just been hired by Statmaster Solutions Inc!  It is your first day as Database Admin, and they just discovered that the Lead Admin has quit and taken a new position with Oracle with no notice (and left an important project half-finished.)  They need you to finish the project!

Statmaster is supporting a press conference in 2 hours and needs your program to output the data on-the-fly in a nice format.  You will be expected to fix the SQL calls and finish creating methods to easily generate the desired output.

## Release 0: Open the Database
You should have the `congress_poll_results.db` in this challenge directory (It may not show up in the directory structure, but it should be visible in the terminal by typing `ls`. Open it up by typing  `sqlite3 congress_poll_results.db` in the correct local directory. To access a database from within ruby code, you need to install the sqlite3 gem.  Run `gem install sqlite3` from the command line. If you have trouble, try googling the error or ask your cohort-mates for help.

## Release 1: Poke around the Database
Take a look at the schemas included.  Type `.schema`.  There should be 3 tables, `congress_members`, `voters`, and `votes`.  Do a couple `select` statements on the congress_members table. (This is where most of the stats will be coming from).

## Release 2: Run Existing Code
Run your [my_solution.rb](my_solution.rb) file. It should have some existing code that accesses the database, and attempts some queries.  Run the code.  Is there an error?  There should be!

## Release 3: Try Again
Run the ruby file again. What is the output? Take a look at the code. How does it open the database?  How does it execute SQL statements?  See if you can play around with the existing code to change the output in interesting ways. You may want to peek back into the `congress_poll_results.db` file to see the schema.

## Release 4: Implement the missing functionality
The old admin left some things unfinished, but she at least made some notes of the features remaining to be implemented.  Review the comments and one at a time implement the remaining features.  Be methodical and test often.  There are 3 things that the old admin left for you to do.  Get them done before the press conference in 2 hours!

## Release 5: Done already?  
Well there's still two more interesting challenges to tackle.  Take a look at the comments and dive in.  You'll need to do some research, and you'll also have to practice some of the chops you picked up when practicing SQL statements.  Please make ample comments for your fellow students.  What resources can they refer to to understand your solution.

## Release 5: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md) in the reflection section of your [my_solution.md](my_solution.md) file. 

