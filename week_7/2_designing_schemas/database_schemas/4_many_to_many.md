# Many to Many Schema Design

Many-to-many relationships are relatively easy to understand, but slightly more complicated to implement.  We recommend that you solve the one-to-many challenge before moving into
the many-to-many relationships.

A newsletter has many subscribers, and a subscriber might subscribe to many newsletters.  A blog post can have many tags ("funny", "politics", etc.), and a given tag can be on many blog posts.  A book can have multiple authors, and an author can write many books.

We model this relationship by creating a **join table**.  It looks like this:

<pre>
+------------+       +---------------+       +--------------+
| authors    |       | authors_books |       | books        |
+------------+       +---------------+       +--------------+
| id         |&lt;--\   | id            |    /-&gt;| id           |
| first_name |    \--| author_id     |   /   | title        |
| last_name  |       | book_id       |--/    | published_at |
| created_at |       +---------------+       | created_at   |
| updated_at |                               | updated_at   |
+------------+                               +--------------+
</pre>

Here `authors_books` is the join table and it tells us which authors wrote which books.  The actual data about each author and each book is stored in one place: the `authors` and `books` tables, respectively.

You might notice a ["Don't repeat yourself" priciple](http://en.wikipedia.org/wiki/Don't_repeat_yourself) at work.  Removing redundancy from a database schema so that each bit of data is stored in one and only one place is called **normalization**.  We'll learn more about that later.

If you want, you can read about [database normalization on Wikipedia](http://en.wikipedia.org/wiki/Database_normalization) or [this decent article from Microsoft](http://support.microsoft.com/kb/283878).  The goal of normalization is to remove data redundancy.
