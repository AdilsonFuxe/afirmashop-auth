import { Account } from '@afirmashop/common-logic';

export type AddAccount = (params: AddAccount.Params) => AddAccount.Response;

export namespace AddAccount {
  export type Params = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  export type Response = Promise<Account>;
}
