import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type BookResponse = {
  data: Book[];
  message: string;
  status: string;
}

export type Book = {
  AuthorID: string;
  ID: string;
  PublisherID: string;
  description: string;
  subtitle: string;
  title: string;
}

@Injectable()
export class BookService {
  configUrl = 'http://localhost:8181/api/';
  bookUrl = 'book';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<BookResponse>(this.configUrl+this.bookUrl);
  }
}
