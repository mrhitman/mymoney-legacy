export enum actions {
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_GET,
  USER_CREATE,
  WALLET_GET,
  WALLET_GET_ALL,
  WALLET_CREATE,
  WALLET_UPDATE,
  WALLET_DELETE,
  CURRENCY_GET_ALL
}

export const baseUrl = `${process.env.HOST}:${process.env.PORT}/`;