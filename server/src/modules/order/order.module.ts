import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolvers } from './order.resolver';
//import { Blog, BlogSchema } from './blog.schema';
import { Order, OrderSchema } from '../order/entity/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from '../product/product.service';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    ProductModule
  ],
  providers: [OrderResolvers, OrderService],
})
export class OrderModule {}
