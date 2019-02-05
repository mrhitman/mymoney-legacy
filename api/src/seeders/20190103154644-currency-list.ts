import { QueryInterface } from "sequelize";

export default {
  up: (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Currency",
      [
        {
          name: "USD",
          symbol: "$"
        },
        {
          name: "UAH",
          symbol: "₴"
        },
        {
          name: "RUB",
          symbol: "₽"
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface, Sequelize) => {
    queryInterface.bulkDelete("Currency", null, {});
  }
};
