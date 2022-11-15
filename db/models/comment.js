const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Pivo }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.belongsTo(Pivo, { foreignKey: 'id' });
    }
  }
  Comment.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    pivoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Pivos',
        key: 'id',
      },
    },
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
