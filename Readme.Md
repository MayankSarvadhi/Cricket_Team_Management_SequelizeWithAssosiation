# Cricket Team Management

This project demonstrates how to implement CRUD operations using Express, PostgreSQL, and Sequelize for managing cricket teams and players.

## Prerequisites

Before getting started, ensure that you have the following installed:

- Node.js
- PostgreSQL
- Sequelize (npm package)
- Express (npm package)

## Setup

1. Clone the repository or create a new directory for your project.
2. Navigate to the project directory and initialize a new Node.js project:

   ```bash
   npm init -y

## Install the required dependencies:

``` npm install express sequelize pg pg-hstore ```


### Create a PostgreSQL database for your project.

## Create a .env file in the project root and add the following environment variables:

```
DB_USERNAME=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_DATABASE=<your_database_name>
DB_HOST=<your_database_host>
DB_DIALECT=postgres

```

## Database Setup

- In the src/database/index.js file, configure the database connection:

 ```const { Sequelize } = require('sequelize');```

- Define the Team model and its associations in the src/models/team.js file:

```const { DataTypes } = require('sequelize');
   const sequelize = require('../database'); 
```

- Define the Player model and its associations in the src/models/player.js file:

```const { DataTypes } = require('sequelize');
   const sequelize = require('../database');
   const Team = require('./team');
```

- Run the database migration to create the necessary tables:

```npx sequelize-cli db:migrate```


## CRUD Operations

- Implement the following CRUD operations for the Team and Player models:

- Team:
    - Insert a new team
    - Update an existing team
    - Delete a team

- Player:
    - Insert a new player
    - Update an existing player
    - Delete a player


## Associations
- The following associations exist between the Team and Player models:

- Get one team with all players
- Get one player with their team
- Get the batsmen for a particular team
- Get the bowlers for a particular team
- Get the all-rounders for a particular team
- Get all teams with their players

## Usage

- To start the application, run the following command:

``` npm test ```
       or
``` node app.js ```

##  API Endpoints

  ### Team Endpoints

 - Create a new team: ```POST http://localhost:9600/Teams```
 - Update an existing team: ```PUT http://localhost:9600/Teams/:id```
 - Delete a team: ```DELETE http://localhost:9600/Teams/:id```
 - Get all teams with their players: ```http://localhost:9600/Teams ```
 - Get one team with all players:  ```http://localhost:9600/Teams/:id ```
 - Get AllTypes of Player for a particular team:   ```http://localhost:9600/allTypes/:id ```


  ### Player Endpoints
    
 - Create a new player: ```POST http://localhost:9600/Player```
 - Update an existing player: ``` PUT http://localhost:9600/Player/:id ```
 - Delete a player: ``` DELETE http://localhost:9600/Player/:id```

 - Get one player with their team:```GET http://localhost:9600/Player/:id ```

***Feel free to customize the endpoint paths and HTTP methods according to your project's requirements.***
