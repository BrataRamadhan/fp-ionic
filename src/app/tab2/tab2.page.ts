import { Component } from '@angular/core';
import { TableService } from '../services/table.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public table = {};
  public teamid = '';
  public name = "name";

  constructor(private tableService: TableService, private router: Router) {}

  ngOnInit(): void {
    this.tableService.getDaftar().subscribe(result => {
      this.table = result;
      this.teamid = result["teamid"];
      this.name = result['name'];
    });
  // constructor() {}

}
}