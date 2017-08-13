import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DownloadTableToCsvDirective } from '../../shared/download-table-to-csv.directive';

@Component({
  selector: 'app-map-trans',
  templateUrl: './map-trans.component.html',
  styleUrls: ['./map-trans.component.css']
})
export class MapTransComponent implements OnInit {

  @ViewChild('resultTable') resultTable;

  inputText = '';
  resultList = [];
  resultTableElement
  delayTime: number = 200;
  cnt: number = 0;
  successCnt: number = 0;
  notFoundCnt: number = 0;
  processStatus: string = '';

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.resultTableElement = this.resultTable.nativeElement;
  }

  //取得地址經緯度
  getAddressesLatLng() {
    this.resultList = [];
    this.cnt = 0;
    this.successCnt=0;
    this.notFoundCnt=0;
    this.processStatus='處理中'
    let addressArray = this.inputText.split("\n");

    let obsArray: Array<Observable<any>> = [];
    //key:AIzaSyAFmI3rYqTNYnhqi_YZkOKdGQu_ZkHTmNg
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    for (let address of addressArray) {

      if (!address) {
        continue;
      }

      this.resultList.push({
        searchAddress: address,
        lat: '處理中...',
        lng: '處理中...'
      });
      obsArray.push(this.http.get(url + address).delay(this.delayTime).map(
        res => {
          if (res.json().results.length > 0) {
            this.successCnt++;
            return res.json().results[0].geometry.location;
          } else {
            this.notFoundCnt++;
            return { lat: '查無資料', lng: '查無資料' };
          }
        }));
    }

    Observable.concat(...obsArray).subscribe(
      res => {
        if (res) {
          this.resultList[this.cnt].lat = res.lat;
          this.resultList[this.cnt].lng = res.lng;
        } else {
          this.resultList[this.cnt].lat = '查無資料';
          this.resultList[this.cnt].lng = '查無資料';
        }

        this.cnt++;
      },
      err => this.processStatus='執行失敗',
      () => this.processStatus='執行完畢'

    );

    
  }

  clear() {
    this.resultList = [];
    this.cnt = 0;
    this.successCnt =0;
    this.notFoundCnt=0;
    this.processStatus='';
    this.inputText = '';
  }

}
