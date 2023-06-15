import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Document } from 'mongoose'

@Schema()
@ObjectType()
export class Product {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String, { description: '' })
  name: string;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);