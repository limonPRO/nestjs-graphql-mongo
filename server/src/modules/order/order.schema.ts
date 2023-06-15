import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Product, ProductSchema } from '../product/product.schema';

@Schema()
@ObjectType()
export class Order {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  @Field(() => [Product], { description: 'Products associated with the order' })
  products: MongooseSchema.Types.ObjectId[];

  @Prop()
  @Field(() => Int, { description: 'Quantity of the ordered products' })
  quantity: number;

  @Prop()
  @Field(() => String, { description: 'Status of the order' })
  status: string;
}

export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);
