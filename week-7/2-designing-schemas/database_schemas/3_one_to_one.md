# One to One Schema Design

One-to-one relationships are fairly easy to understand, but hard to see when to use one.  

An example of a one-to-one relationship is my connection to my liver.  I have a liver, and my liver belongs only to me.  We'll ignore the world of conjoined twins, for now.

A more practical example might be a site that optionally lets a user connect their Facebook account.  It might look like this:

<pre>
+---------------------+        +-------------------+
| users               |        | facebook_accounts |
+---------------------+        +-------------------+
| id                  |     /-&gt;| id                |
| first_name          |    /   | fb_username       |
| last_name           |   /    | created_at        |
| email               |  /     | updated_at        |
| facebook_account_id |-/      +-------------------+
| created_at          |
| updated_at          |
+---------------------+
</pre>

The `facebook_account_id` field might be `NULL`, which is a special value that signifies "nothing."  In this case, a `NULL` value in the `facebook_account_id` column means "this user hasn't connected their Facebook account."

You can see from the way this is designed, a user can have at most one Facebook account, and the `facebook_accounts`table doesn't reference the `user` table at all.  This would be an example of a one-to-one relationship.

Of course, you could move all the fields in the `facebook_accounts` table directly into the `user` table.
This is true of any one-to-one relationship, which is why it's hard to see when to use one.
The rule of thumb is this: if you have a logical grouping of fields which can all optionally be `NULL`,
it's a good idea to split those fields out into a separate table in a one-to-one relationship.

