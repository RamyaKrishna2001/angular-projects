import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DominosDataType } from 'src/Models/dominosDataType';
import { BakeryDataType } from 'src/Models/bakeryDataType';
import { ThickShakeDataType } from 'src/Models/thickShakeDataType';
import { CreamStoneDataType } from 'src/Models/creamStoneDataType';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _url: string = 'http://localhost:3000';
  constructor(private _api: HttpClient) {}

  // GET Request
  getDominosItems() {
    return this._api
      .get<DominosDataType[]>(`${this._url}/dominos`)
      .pipe(map((data) => data));
  }

  getBakeryItems() {
    return this._api
      .get<BakeryDataType[]>(`${this._url}/bakery`)
      .pipe(map((data) => data));
  }

  getThickShakeItems() {
    return this._api
      .get<ThickShakeDataType[]>(`${this._url}/thickShakes`)
      .pipe(map((data) => data));
  }

  getCreamStoneItems() {
    return this._api
      .get<CreamStoneDataType[]>(`${this._url}/creamstone`)
      .pipe(map((data) => data));
  }
}
