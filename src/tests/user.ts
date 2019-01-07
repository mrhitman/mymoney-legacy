import { expect } from "chai";
import * as agent from "supertest-koa-agent";
import { createApp } from "../server";
import User from "../models/user";
import issueToken from "./helpers/issue-token";

describe("login", () => {
  let app;
  let user: User;

  beforeEach(async () => {
    app = agent(createApp());
    user = await User.create({
      name: "test",
      email: "test@test.com",
      passport: "1"
    });
  });

  afterEach(async () => {
    user.destroy();
  });

  it("login", async () => {
    const id = user.dataValues.id;
    const token = issueToken({ id }, { expiresIn: "1h" });
    const response = await app
      .get("/profile")
      .set("Authorization", `Bearer ${token}`);
    expect(response.body.id).eq(id);
    expect(response.status).eq(200);
  });

  it("logout", () => {
    expect(true).eq(true);
  });

  it("refresh", () => {
    expect(true).eq(true);
  });
});
