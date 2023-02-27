
import { UseDto } from '../../common/decorators/use-dto.decorator';
import { AbstractEntity } from '../../common/entity/abstract.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, Unique } from 'typeorm';
import { BookDto } from '../dto/book.dto';

@Entity()
@Unique(["isbn"])
@UseDto(BookDto)
export class BookEntity extends AbstractEntity<BookDto> {
  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  price: number;
}