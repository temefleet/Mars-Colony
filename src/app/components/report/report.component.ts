import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/report';
import { ColonistService } from '../../services/colonist';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { NewReport } from '../../models/report';
import { Alien } from '../../models/alien';
import { Colonist } from '../../models/colonist';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    ReportService
  ]
})
export class ReportComponent implements OnInit {

  aliens: Alien[];

  encounterForm = new FormGroup({
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
      Validators.minLength(5)
    ])
  });
  
  constructor(
    private alienService: AlienService,
    private reportService: ReportService,
    private colonistService: ColonistService
  ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  async submitReport() {
    const colonistId = this.colonistService.getStoredColonist().id;

    const newReport: NewReport = {
      atype: this.encounterForm.get('atype').value,
      date: Date.now().toString(),
      action: this.encounterForm.get('action').value,
      colonist_id: colonistId
    };
    console.log('this is the one ', colonistId);
    const report = await this.reportService.registerReport(newReport);
    console.log('report was saved!', report);
  }

}
