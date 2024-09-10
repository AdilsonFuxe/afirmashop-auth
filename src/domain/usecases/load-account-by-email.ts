import { Account } from '@afirmashop/common-logic';

export type LoadAccountByEmail = (email: string) => LoadAccountByEmail.Response;

export namespace LoadAccountByEmail {
  export type Response = Promise<Account>;
}
