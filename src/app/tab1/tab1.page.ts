import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public leagues ={};
  public strBadge = '';
  
 


  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.getDetail().subscribe(result  => {
      this.leagues = result;
      this.strBadge = result['strBadge'];

    });
  }

}