import { updateRecipeAttributes } from './utilities/helpers.js';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    timeToCook: DataTypes.INTEGER,
    ingredients: DataTypes.TEXT,
    procedure: DataTypes.TEXT
  });
    
  Recipe.addHook('afterFind', async (results) => {
    if (Array.isArray(results)) {
      await Promise.all(results
        .map(async sequelizeRecipe => updateRecipeAttributes(sequelizeRecipe)));
    } else {
      return updateRecipeAttributes(results);
    }
  });

  return Recipe;
};