import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class BookDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;
}
