const db = require('../config/database');
const Recipe = require('../models/Recipe');
const recipeSeeds = require('./recipeSeeds');

(async () => {
    try {
        await db.authenticate();
        console.log('A connection to the database is successful!');

        // this ensures the tables are created
        await Recipe.sync({ force: true });

        // this puts the recipeSeeds data into the database
        await Recipe.bulkCreate(recipeSeeds);

        console.log('Seeding completed!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        db.close();
    }
})();