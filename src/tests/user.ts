import { expect } from "chai";
import agent from "supertest-koa-agent";
import { createApp } from "../server";

describe("login", () => {
  let app;

  beforeEach(() => {
    app = agent(createApp());
  });

  it("login", () => {
    expect(true).eq(true);
  });

  it("logout", () => {
    expect(true).eq(true);
  });

  it("refresh", () => {
    expect(true).eq(true);
  });
});
