import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public id: any;
  public DetailsData: any

  constructor(private activateRoute: ActivatedRoute,
    private service: ServiceService,
    private route: Router) {
    this.activateRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.id = data['id'];
      console.log(this.id);
      this.getDetails();
    })
  }

  ngOnInit(): void {
  }
  getDetails() {
    this.service.getDetails(this.id).subscribe((res) => {
      console.log(res);
      this.DetailsData = res;
    })
  }
  navigateTo() {
    this.route.navigate(['/addTask']);
  }
  navigateToEditTask(id) {
    this.route.navigate(['/addTasks'],
      {
        queryParams: {
          id: id
        }
      });
  }

  detletedTask(id) {
    this.service.deleteDetails(this.id).subscribe((res) => {
      this.route.navigate(['/addTask']);
      console.log(res);
    })
  }
}
