import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput {
  @Field(() => String, { description: 'Order ID' })
  orderId: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Updated quantity of the ordered product',
  })
  quantity?: number;

  @Field(() => String, {
    nullable: true,
    description: 'Updated status of the order',
  })
  status?: string;
}
