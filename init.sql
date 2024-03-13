GRANT ALL PRIVILEGES ON * . * TO 'user'@'%';

CREATE TABLE `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255)
);

INSERT INTO users (name, email) VALUES ('Karn', 'karn@me.com');
INSERT INTO users (name, email) VALUES ('Anna', 'anna@me.com');