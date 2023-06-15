import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order } from '../order/entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async getOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async getOrder(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async createOrder(
    productId: Types.ObjectId,
    quantity: number,
  ): Promise<Order> {
    const order = new this.orderModel({
      product: productId,
      quantity,
      status: 'CREATED',
    });

    await order.save();
   
    return order;
  }
}
