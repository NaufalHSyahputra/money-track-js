'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      categoryId: {
        references: {
          model: {
            tableName: 'categories',
          },
          key: 'id'
        },
        type: Sequelize.BIGINT
      },
      pocketId: {
        references: {
          model: {
            tableName: 'pockets',
          },
          key: 'id'
        },
        type: Sequelize.BIGINT
      },
      amount: {
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdBy: {
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        type: Sequelize.BIGINT
      },
      updatedBy: {
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        type: Sequelize.BIGINT
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};