import { Component, OnInit } from '@angular/core';
import { ConfigService } from "src/app/config.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  docParagraph1: String
  docParagraph2: String

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.docParagraph1=this.getTitle1()
    this.docParagraph2=this.getTitle2()
    
  }

  getTitle1(){
    return this.config.getConfig().aboutParagraphe1
  }

  getTitle2(){
    return this.config.getConfig().aboutParagraphe2
  }
}
