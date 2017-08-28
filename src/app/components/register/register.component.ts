import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { JobService } from '../../_services/job';
import { ColonistService } from '../../_services/colonist';
import { Router } from '@angular/router';

import { Job } from '../../_models/job';
import { NewColonist } from '../../_models/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    JobService,
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[];

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.maxLength(100),
      Validators.minLength(2),
      this.noNumbers(/[0-9]/)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.max(50),
      Validators.min(0)
    ]),
    job_id: new FormControl('', [Validators.required])
  });

  constructor(
    private jobService: JobService,
    private colonistService: ColonistService,
    private router: Router 
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

    localStorage.setItem('userName', this.registerForm.get('name').value);
    localStorage.setItem('password', this.registerForm.get('password').value);

    await this.colonistService.registerColonist(newColonist);
    this.router.navigate(['encounters']);
  }

  private noNumbers(validNameRegex): ValidatorFn {
    return (control): { [key: string] : any } => {
      const forbiddenName = validNameRegex.test(control.value);
      return forbiddenName ? { 'forbiddenName' : { value: control.value } } : null;
    };
  }
}
