import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private jobService: JobService,
              private colonistService: ColonistService ) { }

  // ngOnInit() {
  //   this.jobService.getJobs().then(response => console.log);
  // }

  async ngOnInit() {

    const testColonist = {
      name: 'Elon',
      age: '42',
      job_id: '2'
    }
    const newColonist = await this.colonistService.registerColonist(testColonist);
    console.log(newColonist);

    const jobs = await this.jobService.getJobs();
    console.log(jobs);
  }
}
