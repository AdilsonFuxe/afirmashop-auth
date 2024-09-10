import { model } from 'mongoose';
import { AccountSchema, Schemas, AccountDocument, AccountMongooseModel } from '@afirmashop/common-logic';


export default model<AccountDocument, AccountMongooseModel>(
  Schemas.accounts,
  AccountSchema,
);
