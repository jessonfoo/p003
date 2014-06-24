# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
name
total_following
total_followers
total_tweets
total_retweets
total_favorites
tagged_tweets


## Release 1: Tweet Fields
times_retweeted
times_favorited
tweet_usertags
tweet_type
tweet_hashtags
tweet_time


## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
	The user's relationship to tweets is simple, emotional connection. The useraccount typically falls under one of 3 categories, corporation, celebrity, or mainstream user. Every tweet is for the sole purpose of publicity, but is composed of mostly text or an image. Each user type's reason to tweet is usually either news, or publicity. Everything is brought together at the emotional level. Each tweet has the potential to cause and illicit an emotional response. 

## Release 3: Schema Design
<img src="../imgs/twitter.png">

## Release 4: SQL Statements
Tweets with hashtag 'Belieber'
```sql
SELECT content FROM tweet
WHERE hashtags = 'Belieber'
```
see amusing image tweets
```sql
SELECT image FROM tweet
JOIN emotion ON emotion_id WHERE content = image AND emotion_id = amusement
```
see sad text tweets
```sql
SELECT text FROM tweet
JOIN emotion ON emotion_id WHERE content = text AND emotion_id = sorrow
```
see angry news tweets
```sql
SELECT content FROM tweet
JOIN emotion ON emotion_id WHERE text = news AND emotion_id = anger
```

## Release 5: Reflection
I feel like I gained a better understanding today of why people use twitter. At first I was just trying to make things up, but when I really thought about it, it all started to make sense. Twitter is the online tool for publicity movements. It provides a sense of connectedness to those who feel disconnected, and a sense of acknowledgement for those who deserve it. What I saw in the majority of tweets were public announcements, some were humourous, some were angry, and some were sad. However, in the end, every tweet leads to either a retweet, or a favorite, and therfore it's power is in it's ability to rapidly diffuse the content of the tweet.