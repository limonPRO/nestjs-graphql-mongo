import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Product Name' })
  name: string;
}
