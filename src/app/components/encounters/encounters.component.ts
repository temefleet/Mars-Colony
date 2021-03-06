import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../_services/report';
import { Report } from '../../_models/report';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  reports: Report[];
  loader = true;

  constructor(private reportService: ReportService) { }

  async ngOnInit() {
    this.reports = await this.reportService.getReport();
    this.loader = false;
  }
}
