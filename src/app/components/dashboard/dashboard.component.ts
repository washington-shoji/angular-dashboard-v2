import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book, DashboardService} from "./dashboard.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  books: Book[] = [];
  loading: boolean = false;

  constructor(private dashboardService: DashboardService) {
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
