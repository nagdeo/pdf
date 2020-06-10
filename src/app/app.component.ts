import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf';
  contentDes:any ='';
  downloadPdf(){
    var doc = new jsPDF();
    var splitTitle = doc.splitTextToSize(this.contentDes, 270);
    var pageHeight = doc.internal.pageSize.height;
    doc.setFontType("normal");
    doc.setFontSize(11);
    var y = 7;
    for (var i = 0; i < splitTitle.length; i++) {                
        if (y > 280) {
            y = 10;
            doc.addPage();
        }
        doc.text(15, y, splitTitle[i]);
        y = y + 7;
    }
    doc.save('my.pdf'); 
  }
}
