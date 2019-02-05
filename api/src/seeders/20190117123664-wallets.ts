import { QueryInterface } from "sequelize";

export default {
  up: (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Wallet",
      [
        {
          name: "Gold card",
          user_id: 1,
          currency_id: 2,
          amount: 500
        },
        {
          name: "Credit card",
          user_id: 1,
          currency_id: 2,
          amount: 4500
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface, Sequelize) => {
    queryInterface.bulkDelete("Wallet", null, {});
  }
};
