[Week 7 Home](../)

# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Learning Competencies
- Create a graphical representation of a simple database
- Adhere to established naming conventions for DB tables and columns
- Identify database relationships including one to many, many to many, and one to one
- Write simple SELECT statements to extract data from one or more fields on a single table using the SELECT, FROM, WHERE, LIMIT, and ORDER BY keywords


## Summary
In this challenge, you'll take what you know about Twitter's users and tweets to create a schema design that models a real-world database. 

**NOTE:** We do not expect or want you to use the API. We want you to look at twitter's interface, identify some fields they collect for all users, then identify the fields used for tweets, make a schema that shows that information, and write the SQL queries to access it. 

Make sure to commit your changes after each release!

## Release 0: User Fields
Go to [Twitter](https://twitter.com/) and check out your user profile (which you should have created before phase 0)! Identify the fields Twitter stores for each user in your [my_solution.md](my_solution.md) file.

## Release 1: Tweet Fields
Now look at creating a new tweet. What fields are available? Put the fields you've identified in your [my_solution.md](my_solution.md) file.

## Release 2: Explain the Relationship
What is the relationship between `users` and `tweets`? Where do you think they are connected? Explain your answer. 

## Release 3: Make the Schema
Now go to [SQL Designer](http://socrates.devbootcamp.com/sql) and create your tables and fields. Take a screen shot and put it in the [imgs](../imgs) directory and then display it in your solution file.

## Release 4: Create SQL Statements that would access your tables and return:
- all the tweets for a certain user id
- the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you)
- all the tweets associated with a given user's twitter handle
- the twitter handle associated with a given tweet id 

Put your SQL Statements in the appropriate section in your [my_solution.md](my_solution.md) file.

## Release 5: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md) 
...in the reflection section of your [my_solution.md](my_solution.md) file. 


