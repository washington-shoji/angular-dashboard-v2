import { Component, OnInit, Inject } from '@angular/core';
import { Book, BookService } from "../book/book.service";
import { Subscription } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDialogComponent } from './book-dialog/book-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  private _subscription: Subscription;

  book?: Book;
  books: Book[] = [];
  loading: boolean = false;

  constructor(
    private dashboardService: BookService,
    public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.book = result;
    });
  }

}
