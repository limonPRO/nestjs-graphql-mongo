import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Order } from '../order/entity/order.entity';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';
import { ObjectId, Types } from 'mongoose';
// import { OrderModel } from '../order/entity/order.entity';

@Resolver('Order')
export class OrderResolvers {
  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  async getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Query(() => Order, { name: 'order' })
  async getOrder(@Args('id') id: string): Promise<Order> {
    return this.orderService.getOrder(id);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('productId') productId: string,
    @Args('quantity') quantity: number,
  ): Promise<Order> {
    console.log('Creating order...');
    console.log('Product ID:', productId);
    console.log('Quantity:', quantity);
  
    const product = await this.productService.findOne(productId);
    console.log('Product:', product);
  
    if (!product) {
      throw new Error('Invalid product ID');
    }

    if (typeof product === 'string' || product instanceof Error) {
      throw new Error('Product not found');
    }
    // Convert the productId to a Types.ObjectId
    const productObjectId = new Types.ObjectId(productId);
  
    return this.orderService.createOrder(productObjectId, quantity);
  }
  }


