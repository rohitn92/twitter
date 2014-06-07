Setup steps:

Install Node.js and wamp server (or any server and mysql)

Give the following commands on the terminal - (run git bash as admin on windows)-
npm install

to run, give command-
node server.js



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