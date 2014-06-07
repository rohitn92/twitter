MySQL config

Database name: twitter_db

tables-

user(
id int not null auto_increment primary key,
email text,
username varchar(20) not null,
password varchar(50),
created_at datetime
);