import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Float } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Product {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Product  Name' })
  name: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
