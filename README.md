# A simple CRUD application with Node.js (Express), MySQL. 
This is a basic create, read, update, delete (CRUD) operations example in Node.js (Express) and MySQL.

# Installation
Clone or download zip to your machine then hit this:
```
npm install
```

# Database configuration
* Create a database with name: crudnodejsmysql and import customer.sql file in mysql
* Create a env folder at root location.
* Inside env folder create a file name- <strong>.env</strong>   For eg : <strong>env/.env</strong>
* Add the db credentials

```
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=3306 #mysql port
DB_DATABASE=crudnodejsmysql
```

# Run the project
```
node app.js
```
