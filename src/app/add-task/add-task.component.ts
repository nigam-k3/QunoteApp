
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [MessageService]
})


export class AddTaskComponent implements OnInit {
  public multiples: boolean = true;
  public value: Date;
  public value1: any;
  public name: any;
  public arr: any = [];
  public date: any;
  public hamburgerEle: any;
  public items: MenuItem[];
  public taskForm: FormGroup;
  public resData: any = [];
  public resData1: any = [];



  constructor(
    private messageService: MessageService,
    private route: Router,
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {
    this.arr = ['Please choose', 'Option 1', 'Option 2'];
    this.date = new Date().getFullYear();
  }


  ngOnInit() {

    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      due_time: ['', [Validators.required]],
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
    this.getData()

  }

  getData() {
    // this.resData = []
    this.service.getTask('https://62cbfd978042b16aa7c69ddf.mockapi.io/AddTask').subscribe((res) => {
      console.log(res);
      this.resData = res;
      console.log(this.resData);

    })
  }
  onSubmit() {
    console.log(this.taskForm.value);
    this.service.saveTask(this.taskForm.value).subscribe((tasks) => {
      console.log(tasks);
    });


    this.taskForm.reset();
  }
  viewDetails(id) {
    this.route.navigate(['/details'],
      {
        queryParams: {
          id: id
        }
      });
  }
}


