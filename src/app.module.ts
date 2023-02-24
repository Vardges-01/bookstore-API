import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config/.${process.env.NODE_ENV || 'development'}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
