DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  breed VARCHAR(255),
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pups (name, breed, age, sex)
  VALUES ('Rudy', 'Begal', 2, 'M')

  -- Run this with psql -f filename

