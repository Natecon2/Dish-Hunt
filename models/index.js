 const User = require('./user')
 const Recipe = require('./recipe')
 
 Recipe.belongsTo(User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Recipe.hasMany(models.Review, {
      foreignKey: 'recipeId'
    });
    User.hasMany(User,{
      foreignKey: 'userId'
    });

module.exports = db;