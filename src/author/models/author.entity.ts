import { BookEntity } from 'src/book/models/book.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
// Every Author must have Name, Surname, birth date, and a photo;
@Entity({ name: 'AUTHOR' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  Name: string;

  @Column({ length: 50 })
  Surname: string;

  @Column()
  birth_date: Date;

  @Column()
  photo: string;

  // one instance of this author entity maps to many instances of book entity
  // 2nd callback: to access the author of each book in the book table, access the author property
  @OneToMany(() => BookEntity, (book: BookEntity) => book.author)
  @JoinColumn()
  books: BookEntity[];
}
