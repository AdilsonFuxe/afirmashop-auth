import { model } from 'mongoose';
import { ProductSchema, Schemas, ProductDocument, ProductMongooseModel } from '@afirmashop/common-logic';


export default model<ProductDocument, ProductMongooseModel>(
  Schemas.products,
  ProductSchema,
);
