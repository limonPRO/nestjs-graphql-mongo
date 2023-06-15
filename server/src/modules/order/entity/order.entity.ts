import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/modules/product/entities/product.entity';

@Schema()
@ObjectType()
export class Order {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product' })
  @Field(() => Product, { description: 'Product associated with the order' })
  product: Types.ObjectId; //product

  @Prop()
  @Field(() => Int, { description: 'Quantity of the ordered product' })
  quantity: number;

  @Prop()
  @Field(() => String, { description: 'Status of the order' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
