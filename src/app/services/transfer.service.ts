import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transfer } from '../models/transfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];
  private url = 'http://localhost:3000/db'

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  getTransfers(): Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url);
  }

  newTransfer(transfer: Transfer): Observable<Transfer> {
    this.hydrate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }


  private hydrate(transfer: any) {
    transfer.data = new Date();
  }

}
