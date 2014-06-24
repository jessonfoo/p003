# U3.W7: Intro to SQLite

## Release 0: Create a dummy database
```sql
sqlite3 dummy.db
-- Loading resources from /Users/Jesson/.sqliterc

SQLite version 3.7.13 2012-07-17 17:46:21
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
```

## Release 1: Insert Data
``` sql
sqlite> INSERT INTO users VALUES(1, 'jesson', 'foo', 'jessonfoo@gmail.com','2014-06-24 03:00:00','2014-06-24 05:00:00');
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
## Release 2: Multi-line commands
```sql
sqlite> SELECT * FROM users WHERE id = 1;
id          first_name  last_name   email                created_at           updated_at
----------  ----------  ----------  -------------------  -------------------  -------------------
1           jesson      foo         jessonfoo@gmail.com  2014-06-24 03:00:00  2014-06-24 05:00:00
```
## Release 3: Add a column
CREATE TABLE new_user(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name  VARCHAR(64) NOT NULL,
  new_col VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
) 
sqlite> INSERT INTO new_users VALUES(1, 'jesson', 'foo','a', 'jessonfoo@gmail.com','2014-06-24 03:00:00','2014-06-24 05:00:00');
sqlite> select * from new_users
   ...> ;
id          first_name  last_name   new_col     email                created_at           updated_at
----------  ----------  ----------  ----------  -------------------  -------------------  -------------------
1           jesson      foo         a           jessonfoo@gmail.com  2014-06-24 03:00:00  2014-06-24 05:00:00



## Release 4: Change a value
sqlite> update new_users set new_col='b' where id=1;
sqlite> select * from new_users
   ...> ;
id          first_name  last_name   new_col     email                created_at           updated_at
----------  ----------  ----------  ----------  -------------------  -------------------  -------------------
1           jesson      foo         b           jessonfoo@gmail.com  2014-06-24 03:00:00  2014-06-24 05:00:00


## Release 5: Reflect
This challenge proved to be more difficult than I though it would be. Creating a new column was the most difficult for me. I ended up creating a whole new table that had a new column, which I could then delete the old table and rename the new table, but it seemed altogether too roundabout. I look forward to seeing how others approach this challenge.