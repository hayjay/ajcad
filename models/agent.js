'use strict';
const bcrypt = require('bcrypt');

const SALT_FACTOR = 12; //recommended to be more than 10 just to avoid brute force of the agent pin
async function hashPin(agent, options) {
  if (!agent.changed("pin")) {
    return 0;
  }
  agent.pin = await bcrypt.hash(agent.pin, SALT_FACTOR)
}

module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    unique_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    pin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: hashPin
    }
  });
  Agent.associate = function(models) {
    
  };
  return Agent;
};