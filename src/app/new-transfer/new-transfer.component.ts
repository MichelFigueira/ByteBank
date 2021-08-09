import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transfer } from '../models/transfer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() toTransfer = new EventEmitter<any>();
  amount!: number;
  beneficiary!: number;

  constructor(private transferService: TransferService, private router: Router){

  }

  transfer() {
    const amountTransfer: Transfer = {amount: this.amount, beneficiary: this.beneficiary };

    this.transferService.newTransfer(amountTransfer).subscribe(
    (result) => {
      console.log(result);
      this.router.navigateByUrl('statement');
    },
    (error) => console.error(error)
    );
  }
}
