import { QueryInterface } from "sequelize";

export default {
  up: (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          name: "TestUser",
          password:
            "$2a$10$Y3hwgSCiDTmUbPQXOia/w.z5sYSgFzC4EPbajdKe4CSVFQNyzUQzK",
          email: "test@test.com"
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface, Sequelize) => {
    queryInterface.bulkDelete("User", null, {});
  }
};
