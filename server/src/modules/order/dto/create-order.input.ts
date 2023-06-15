import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String, { description: 'Product ID' })
  productId: string;

  @Field(() => Int, { description: 'Quantity of the ordered product' })
  quantity: number;
}
