import { Component } from '@angular/core';
import { TableService } from '../services/table.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public events = {};
  public data = {};
  public match = 'strEvent';
  public idliga = "idLeague";
  public idHomeTeam = 'idHomeTeam';
  

  constructor(private tableService: TableService, private router: Router) {}

  ngOnInit(): void {
    this.tableService.getPertandingan().subscribe(result => {
      this.events = result;
      this.match = result["strEvent"];
      this.idliga = result['idLeague'];
      localStorage.setItem('idHome', this.events.events[0].idHomeTeam );
      localStorage.setItem('idAway', this.events.events[0].idAwayTeam );
    });
    this.tableService.getDetailClubHome().subscribe(result => {
      this.data = result;
      console.log(this.data.teams[0].strTeamBadge);
    });
}
// ngOnInit(): void {
//   this.tableService.getDetailClubHome().subscribe(result => {
//     this.data = result;
//     console.log(data);
//   });
// }
}
