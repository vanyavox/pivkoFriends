const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.hasMany(Comment, { foreignKey: 'pivoId' });
    }
  }
  Pivo.init({
    title: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    pic: DataTypes.TEXT,
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Pivo',
  });
  return Pivo;
};
