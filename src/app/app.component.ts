import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ContentService } from './Services/ContentService/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  _rawEntityList: any;
  
  constructor(private elementRef: ElementRef, private contentService: ContentService){
    // this.getRawEntityList();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'black';
  }

  getRawEntityList(){
    return this.contentService.getRawEntityList().subscribe((response) => {
      if (response) {
        this._rawEntityList = JSON.stringify(response);  
      }
      else{
        console.log("getRawEntityList(): An error has occured");
      }
    });
  }

  title = 'XPlanner.WebSite';
}
