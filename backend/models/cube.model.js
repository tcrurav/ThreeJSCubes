module.exports = (sequelize, Sequelize) => {
  const Cube = sequelize.define("cube", {
    color: {
      type: Sequelize.STRING
    },
    isActive: {
      type: Sequelize.BOOLEAN
    }
  });

  return Cube;
}