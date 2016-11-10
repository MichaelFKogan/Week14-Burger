/*

to run this file do this in your Terminal:

1. go to the directory of this sql file.

2. get into your mysql console

3. run source schema.sql

*/

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(

id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
daate TIMESTAMP,
PRIMARY KEY (id)
);
