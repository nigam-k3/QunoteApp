import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
  providers: [MessageService]
})
export class AddTasksComponent implements OnInit {

  public multiples: boolean = true;
  public value: Date;
  public value1: any;
  public name: any;
  public arr: any = [];
  public date: any;
  public hamburgerEle: any;
  public items: MenuItem[];
  public taskForm: FormGroup;
  public text2: any;
  public id: any



  constructor(
    private messageService: MessageService,
    private route: Router,
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private activateRoute: ActivatedRoute,
  ) {
    this.arr = ['Please choose', 'Option 1', 'Option 2'];
    this.date = new Date().getFullYear();
    this.activateRoute.queryParams.subscribe((data) => {
      this.id = data['id'];
      if (this.id > 0) {
        this.getDetails();
      }
    })
  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      dueTime: ['', [Validators.required]],
      detail: [''],
      taskField: [''],
      bothField: [''],
      notifyMe: ['']
    });



    this.items = [{
      label: 'USER SECTION',
      items: [{
        label: 'My profile',
        command: () => {
          this.route.navigate(['/profile'])
        }
      },
      {
        label: 'Task',
        command: () => {

        }
      },
      {
        label: 'Log out',
        command: () => {
          this.route.navigate(['/'])
        }
      }
      ]
    }
    ];
  }
  onSubmit() {
    console.log(this.taskForm.value);
    this.service.saveTask(this.taskForm.value).subscribe((tasks) => {
      console.log(tasks);
      // this.navigateTo();
      this.route.navigate(['/addTask'])
    });

    this.taskForm.reset();
  }

  navigateTo() {
    this.route.navigate(['/addTask']);
  }
  calDate: any
  getDetails() {
    this.service.getDetails(this.id).subscribe((res) => {
      console.log(this.calDate);
      console.log(res);
      this.taskForm.patchValue({
        title: res['title'],
        dueDate: new Date(res['dueDate']),
        dueTime: new Date(res['dueTime']),
        detail: res['detail'],
        taskField: res['taskField'],
        bothField: res['bothField'],
        notifyMe: res['notifyMe']
      })
    })
  }

}
