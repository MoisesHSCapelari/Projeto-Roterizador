module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('trips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    start_location_name: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    start_location_lat: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    start_location_lng: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    end_location_name: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    end_location_lat: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    end_location_lng: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    time_route: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    distance_route: {
      type: Sequelize.STRING,
      allowNull: false,

    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('trips'),
};
