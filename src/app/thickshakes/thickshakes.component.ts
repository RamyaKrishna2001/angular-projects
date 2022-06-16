import { Component, OnInit } from '@angular/core';
import { ThickShakeDataType } from 'src/Models/thickShakeDataType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-thickshakes',
  templateUrl: './thickshakes.component.html',
  styleUrls: ['./thickshakes.component.css'],
})
export class ThickShakesComponent implements OnInit {
  thickShakesList: ThickShakeDataType[];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getThickShakesList();
  }

  getThickShakesList() {
    return this._apiService
      .getThickShakeItems()
      .subscribe((data: ThickShakeDataType[]) => (this.thickShakesList = data));
  }
}
