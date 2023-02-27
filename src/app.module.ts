import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './books/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config/.${process.env.NODE_ENV || 'development'}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
