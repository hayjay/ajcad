'use strict';
module.exports = (sequelize, DataTypes) => {
  const AgentTransaction = sequelize.define('AgentTransaction', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    agent_id: {
      type : DataTypes.STRING,
      allowNull : false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: false
    },
    destination_wallet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    }
  });
  AgentTransaction.associate = function(models) {
    
  };
  return AgentTransaction;
};