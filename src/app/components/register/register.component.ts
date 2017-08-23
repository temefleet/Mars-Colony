import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

import { Job } from '../../models/job';
import { NewColonist } from '../../models/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[];

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    job_id: new FormControl('', [Validators.required])
  });



  constructor(
    private jobService: JobService,
    private colonistService: ColonistService 
  ) { }

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  }

  async registerColonist() {
    const newColonist: NewColonist = {
      name: this.registerForm.get('name').value,
      age: this.registerForm.get('age').value,
      job_id: this.registerForm.get('job_id').value      
    };

    const colonist = await this.colonistService.registerColonist(newColonist);
    console.log('colonist was saved!', colonist);
  }
}
