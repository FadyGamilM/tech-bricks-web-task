import { AuthorEntity } from 'src/author/models/author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'BOOK' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  isbn: string;

  @Column()
  Name: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 50 })
  publisher: string;

  @Column()
  category: string;

  // many instance of this book entity belongs to 1 instance of the author entity
  // so use ManyToOne here and OneToMany in AuthorEntity
  // 1st callback: means return AuthorEntity
  // 2nd callback: means how we can access the books of each author
  @ManyToOne(() => AuthorEntity, (author: AuthorEntity) => author.books, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'author', referencedColumnName: 'id' }])
  author: AuthorEntity; // create FK in this table names author_id by default
}
