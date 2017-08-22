import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  // ngOnInit() {
  //   this.reportService.getReports().then(response => console.log);
  // }

  async ngOnInit() {
    const reports = await this.reportService.getReport();
    console.log(reports);
  }

}
