import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public id: any;
  public items: MenuItem[];

  constructor(
    private fB: FormBuilder,
    private activateRoute: ActivatedRoute,
    private service: ServiceService,
    private messageService: MessageService,
    private route: Router
  ) {
    this.activateRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.id = data['id'];
      console.log(this.id);
      this.getProfile();
    })
  }

  ngOnInit(): void {
    this.profileForms();

    this.items = [{
      label: 'USER SECTION',
      items: [{
        label: 'My profile',
        command: () => {

        }
      },
      {
        label: 'Task',
        command: () => {

          if (this.items[0].items[1].label == 'Task') {
            this.route.navigate(['/addTask'])
          }
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

    console.log(this.items[0].items[1].label);
  }


  profileForms() {
    this.profileForm = this.fB.group({
      firstName: ['',],
      lastName: ['',],
      jobTitle: ['',],
      email: ['',],
      telephone: ['',],
      qunoteEmail: ['',],
      dropdown: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      conpassword: ['', Validators.required]
    }
    );
  }
  onsubmit() {
    console.log(this.profileForm.value);
    this.route.navigate(['/profile/loadedComp'])

  }
  getProfile() {
    this.service.getProfile(this.id).subscribe((res) => {
      console.log(res);
      this.profileForm.patchValue({
        firstName: res['firstName'],
        lastName: res['lastName'],
        jobTitle: '',
        email: res['emailAddress'],
        telephone: res['phoneNumber'],
        qunoteEmail: res['emailAddress'],
        password: res['password'],
        conpassword: res['confirmPassword']
      });
    })
  }

}
