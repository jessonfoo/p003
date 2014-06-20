# Student Roster Database Introduction

Take a look at the text representation of a database.  It looks similar to an Excel spreadsheet, which is a helpful way of visualizing how databases store information.


| id | first_name | last_name | gender | birthday | email | phone |
|----|------------|-----------|--------|----------|-------|-------|
| 1 | Nikolas| Friesen| female| 1998-12-24| agustina_braun@wintheiser.info| 449.897.7415|
| 2 | Randi| Halvorson| male| 1997-01-29| heber.upton@bechtelarwisozk.biz| (697)436-2633|
| 3 | Sally| Buckridge| female| 1997-10-30| nora@treutel.name| 1-351-672-6358x02502|
| 4 | Morris| Swift| male| 1995-06-27| cordell@sanfordkuhlman.org| (600)142-5639x9380|
| 5 | Sidney| Ortiz| male| 1997-04-04| erling@davis.name| 554.170.3265|
| 6 | Reid| Skiles| male| 1994-10-13| mike_harvey@nikolaus.com| (543)511-2123|
| 7 | Violet| Dickens| female| 1994-11-19| rubye_olson@collins.biz| 1-410-486-1411x5058|
| 8 | Marguerite| Flatley| female| 1995-05-28| wanda_okon@hane.name| 572.978.5828x07860|
| 9 | Cary| Schoen| male| 1996-07-31| fay@runolfon.biz| 1-828-134-7828x66958|
| 10 | Mazie| Gibson| female| 1995-09-23| doug@roberts.biz| 144.038.7351x24117|


Each column (or in DB speak **field**) has a name.  We can describe the structure of this table independently of what data is in it.  We'd write the structure like this:

<pre>
+------------+
| students   |
+------------+
| id         |
| first_name |
| last_name  |
| gender     |
| birthday   |
| email      |
| phone      |
+------------+
</pre>

### Conventions

We can use any field names and table names we want, but there are some conventions that we follow for sanity. 

1. Table names are pluralized, e.g., "students," "products," "todos," etc.
2. Each row is uniquely identified by an automatically-incrementing integer field called <code>id</code>.  [ActiveRecord migrations](http://guides.rubyonrails.org/migrations.html) do this for you automatically, but you'll have to be explicit when designing your tables by hand.
3. We use snake_case_like_this to name fields, rather than camelCaseLikeThis &mdash; the latter looks weird and out of place in Ruby.
4. Fields that involve dates or times end in <code>&#95;at</code> or <code>&#95;on</code> (<code>created&#95;at</code>, <code>updated&#95;at</code>, <code>completed&#95;at</code>, etc.) unless it's really obvious they already refer to something time-related.  We'd say <code>birthday</code> rather than <code>born_on</code>, for example.
5. When in doubt, make your field and table names as self-explanatory as possible.  Avoid field names like <code>type</code>, <code>kind</code>, <code>status</code>, etc.  They could refer to anything!  Err on the side of clarity, even if it seems verbose.  Other coders will appreciate it, and computers don't care if your field name is 20 characters long rather than 5 characters long.
6. Rails includes <code>created&#95;at</code> and <code>updated&#95;at</code> fields by default, which record when a row is first added to a table and when it was last updated.  This is good record-keeping, so we'll generally include the same fields in our tables.


### Primary Keys

Each row in a database table should have a **primary key**.  This is a field (or collection of fields) which uniquely identify that row from all other rows.  Rails defaults to using a **synthetic primary key**, which is just an arbitrary, auto-incrementing integer usually denoted by the field name `id`.  It's called "synthetic" because it doesn't have any inherent meaning.

The assumption that the primary key is an auto-incrementing integer called `id` is baked deeply into Rails.  Most web apps follow this convention, and we will, too.

