import { model } from 'mongoose';
import { CategorySchema, Schemas, CategoryDocument, CategoryMongooseModel } from '@afirmashop/common-logic';


export default model<CategoryDocument, CategoryMongooseModel>(
  Schemas.categories,
  CategorySchema,
);
