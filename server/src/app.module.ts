import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
    }),
    ProductModule,OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
