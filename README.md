#[RESTful API with puppies](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WrKs6BPwaV5)

## Another tutorial on how to build a restful API

Things to note with this exercise are the following:

1. We use another clinet file setup to support PG
2. We used puppies.sql as our setup file. It **creates the database if it doesnt exist**, connections to said database, creates a table and then loads some data into said table. You can run this file with ```psql -f fileName.sql``` _neat_
3. Our ```queries.js``` file will pass any errors onto the exress error handler
4. Our ```puppies.js``` route file just send the data to the user through the ```res``` object
5. Our ```index.js``` file is our bootstrapped app and it will handle the routes, the middle wear and also our custom error handelers.