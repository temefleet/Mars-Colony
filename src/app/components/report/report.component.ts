import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/report';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { NewReport } from '../../models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: ['./report.component.scss'],
  providers: [
    AlienService,
    ReportService
  ]
})
export class ReportComponent implements OnInit {

  constructor(
    private alienService: AlienService,
    private reportService: ReportService
  ) { }

  encounterForm = new FormGroup({
    alienType: new FormControl('', [Validators.required]),
    actionTaken: new FormControl('', [Validators.required])
  })

  async ngOnInit() {
    const testReport = {
      id: 2,
      date: '07/04/2018',
      colonist_id: 3,
      atype: 'Yoda',
      action: 'gave him a banana'
    }
    const newReport = await this.reportService.registerReport(testReport);
    console.log(newReport);

    const aliens = await this.alienService.getAliens();
    console.log(aliens);
  }

}
