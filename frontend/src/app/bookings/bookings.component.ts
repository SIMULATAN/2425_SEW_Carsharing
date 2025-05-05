import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { BookingSummaryDTO } from "../types";
import { DataService } from "../data.service";
import { DatePipe } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, DatePipe, MatIcon, MatIconButton]
})
export class BookingsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BookingSummaryDTO>;
  dataSource = new MatTableDataSource<BookingSummaryDTO>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["firstName", "lastName", "brand", "type", "company", "startDate", "endDate", "update", "delete"];

  dataService = inject(DataService);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.refresh();
  }

  refresh() {
    this.dataService.getBookingSummaries()
      .subscribe(d => this.dataSource.data = d)
  }

  delete(id: number) {
    this.dataService.deleteBooking(id)
      .subscribe(() => this.refresh())
  }

  router = inject(Router)

  edit(id: number) {
    void this.router.navigate(['/bookings/edit', id])
  }
}
