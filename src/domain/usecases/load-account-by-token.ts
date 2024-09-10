import { Account } from '@afirmashop/common-logic';

export type LoadAccountByToken = (
  accessToken: string
) => LoadAccountByToken.Response;
export namespace LoadAccountByToken {
  export type Response = Promise<Account>;
}
