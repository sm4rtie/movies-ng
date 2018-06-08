# movies-ng
Node.js based REST api

Application is based on Node.js and framework Express.js for server setup.
Modules used: 
 - Express.js
 - Chai
 - Mocha
 - dotenv
 - mongoose
 
For proper functioning database credential from .env file are required. 
Comments search by movie title is filtered by parameter 'imdbID'. 
Movie filtering is performed either by exact matches or 'LIKE' matches, to search e.g. by actors or genre. 
