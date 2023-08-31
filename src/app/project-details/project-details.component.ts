import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId!:number;
  projectDetails !:any;
  projectImage !:string;

  srcImage = 'https://api.ecmpp.com/storage/'


  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProjectsService: ProjectsService
  ){}

  ngOnInit(): void {
    this.getParams();
    this.getProjects()
    console.log("this.projectId" , this.projectId);
  }

  getParams() {
    let params = this._ActivatedRoute.snapshot.params;
    this.projectId = params['id'];
  }

  getProjects() {
    this._ProjectsService.getProjects().subscribe(
      (res) => {
        this.projectImage = res?.data[0]?.images?.filter((item: { id: number; }) => item?.id == this.projectId)[0]?.path;
        this.projectDetails = res?.data[0]?.items[0]
        console.log(this.projectImage);

      },
      (err) => {
        console.log('error'); //
      }
    );
  }
}
