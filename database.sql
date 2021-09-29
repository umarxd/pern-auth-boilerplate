CREATE DATABASE yourmom;

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (user_id)
);

insert into users (user_name, user_email, user_password, is_admin) values ('username', 'username@email.com', 'password', true);

