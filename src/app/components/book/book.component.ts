import { Component, OnInit } from '@angular/core';
import { Book, BookService } from "../book/book.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  private _subscription: Subscription;

  books: Book[] = [];
  loading: boolean = false;

  constructor(private dashboardService: BookService) {
    this._subscription = new Subscription();
  }

  ngOnInit(): void {
    this.getBooksInit();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  getBooksInit(): void {
    this.loading = true;
    this._subscription.add(
      this.dashboardService.getBooks().subscribe(
        {
          next: (bookResponse) => {
            this.books = bookResponse.data;
          },
          error: (error) => {
            console.warn('ERROR', error)
          },
          complete: () => {
            this.loading = false;
          }
        }
      )
    );
  }

}
