const User = require('./user')
const Recipe = require('./recipe')

Recipe.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Recipe, {
  foreignKey: 'userId'
});

module.exports = { User, Recipe };
