# Schema Information

## tracks
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
track          | string    | not null
rating         | float     | range 1-5, initialized null
album_id       | integer   | not null, foreign key (references albums), indexed


## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
image_url   | string    | not null
description | string    |
rating      | float     | range 1-5, initialized null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
profile_pic     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | string    |




**Bonus**
## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment     | string    | not null
## track_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
comment_id  | integer   | not null, foreign key (references comments), indexed
## album_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references albums), indexed
comment_id  | integer   | not null, foreign key (references comments), indexed
## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followed_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
