import { TransferService } from './../services/transfer.service';
import { Transfer } from '../models/transfer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent {

  transferences: any[] = [];

  constructor(private transferService: TransferService) {}

  ngOnInit() {
    this.transferService.getTransfers().subscribe((transfers: Transfer[]) => {
      this.transferences = transfers;
      console.table(this.transferences);
    });
  }

}
