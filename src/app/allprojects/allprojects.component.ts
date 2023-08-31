import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.scss'],
})
export class AllprojectsComponent {
  projects:any = [];

  srcImage = 'https://api.ecmpp.com/storage/'

  constructor(private _ProjectsService: ProjectsService) {
    this.getProjects();
  }

  getProjects() {
    this._ProjectsService.getProjects().subscribe(
      (res) => {
        this.projects = res?.data[0]?.images;
        console.log('success' , res); //
      },
      (err) => {
        console.log('error'); //
      }
    );
  }


}
