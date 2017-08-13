import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDownloadTableToCsv]'
})
export class DownloadTableToCsvDirective {
  @Input() appDownloadTableToCsv;

  constructor() {
  }

  @HostListener('click') download() {
    this.createCsvFile();
  }

  createCsvFile() {
    var fileName = "RESULT_CSV.csv";//匯出的檔名
    var data = this.getData();
    console.log('data',data);
     var exportContent = "\uFEFF";
    var blob = new Blob([exportContent+data], {
      type: "application/octet-stream"
    });
    var href = URL.createObjectURL(blob);
    console.log(href);
    var link = document.createElement("a");
    link.id = "downloadTempEle";
    document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    link.click();
    document.getElementById(link.id).remove();
  }

  //取得資料資料
  getData() {
    let data = [];
    let header = [];
    //取得標題列
    for (let thElement of this.appDownloadTableToCsv.querySelectorAll("th")) {
      header.push(thElement.textContent);
    }

    data.push(header.join());
    //取得資料內容
    for (let tr of this.appDownloadTableToCsv.querySelectorAll("tbody>tr")) {
      let row = [];
      for (let td of tr.querySelectorAll("td")) {
        console.log(td.textContent);
        row.push(td.textContent);
      }
      data.push(row.join());
    }
    return data.join("\n");
  }

}
