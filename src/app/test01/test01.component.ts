import { Component, OnInit } from '@angular/core';
import { DataObject } from '../DataObject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

  buttonTexts : DataObject[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getButtonText();
  }

  getButtonText() : void {
    this.dataService.loadButtonText().
    subscribe(buttonTexts => this.buttonTexts = buttonTexts);
  }

}
