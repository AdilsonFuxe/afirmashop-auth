import { Account } from '@afirmashop/common-logic';

export type LoadAccountById = (id: string) => LoadAccountById.Response;

export namespace LoadAccountById {
  export type Response = Promise<Account>;
}
