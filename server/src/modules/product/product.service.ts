import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly ProductModel: Model<Product>,
  ) {}

  create(createProductInput: CreateProductInput) {
    try{
      const product = new this.ProductModel(createProductInput);
      return product.save();
    } catch (error) {
      return new Error(error.message)
    }
  }

  async findAll() {
    try{
      const product = await this.ProductModel.find();

      if (!product) {
        return 'product not found';
      }
      return product;
    } catch (error) {
      return new Error(error.message)
    }
  }

  async findOne(id: string) {
    try{
      const product = await this.ProductModel.findOne({ _id: id }).exec();
      if (!product) {
        return 'product not found';
    }
      return product;
    } catch (error) {
      return new Error(error.message)
    }
  }

  update(id: string, _updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
