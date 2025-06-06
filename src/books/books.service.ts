export interface Book {
  id: number;
  userId: number;
  title: string;
  author: string;
  description?: string;
  year: number;
  coverImageUrl?: string;
}
import { Injectable } from '@nestjs/common';


@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(userId: number, data: Omit<Book, 'id' | 'userId'>): Book {
    const book: Book = { id: this.idCounter++, userId, ...data };
    this.books.push(book);
    return book;
  }

  findAll(userId: number): Book[] {
    return this.books.filter(b => b.userId === userId);
  }

  update(userId: number, id: number, data: Partial<Book>): Book | null {
    const book = this.books.find(b => b.userId === userId && b.id === id);
    if (!book) return null;
    Object.assign(book, data);
    return book;
  }

  delete(userId: number, id: number): boolean {
    const index = this.books.findIndex(b => b.userId === userId && b.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
