const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Events = sequelize.define('Events', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: {
        args: [1, 100],
        msg: 'Title cannot exceed 100 characters',
      },
    },
  },
  description: {
    type: DataTypes.STRING(1000),
    validate: {
      len: {
        args: [0, 1000],
        msg: 'Description cannot exceed 1000 characters',
      },
    },
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    trim: true,
  },
  status: {
    type: DataTypes.ENUM("Upcoming", "Completed", "Ongoing", "Cancelled"),
    defaultValue: "Upcoming"
  },
  field: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'events',
  timestamps: true, 
});

module.exports = Events;
