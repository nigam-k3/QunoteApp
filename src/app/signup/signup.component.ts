import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  name: string;
  code: string;
  cities: any;
  selectedCity: any;
  currency: any;
  currencyName: any;
  selectedCurrency: any
  profession: any;
  professionName: any;
  selectedProfession: any;
  date: any;
  displayEle: any = false;
  captcha: string;
  email: string;
  value: boolean;
  controls: any;
  length: any
  multiples: boolean = true;
  newForms: FormArray;


  constructor(private formBuilder: FormBuilder, private services: ServiceService) {
    this.date = new Date().getFullYear()
    this.captcha = '';
    this.email = 'b150131bi@nitsikkim.ac.in';
  }



  public get f(): any {
    return this.registerForm.controls;
  }
  getControls() {
    return (this.registerForm.get('newForm') as FormArray).controls;
  }

  // get newForm(): FormArray {
  //   return this.registerForm.get('newForm') as FormArray;
  // }


  ngOnInit(): void {
    this.createForm();
    this.cities = [
      { name: 'New York', code: 'NY', inactive: false },
      { name: 'Rome', code: 'RM', inactive: true },
      { name: 'London', code: 'LDN', inactive: false },
      { name: 'Istanbul', code: 'IST', inactive: true },
      { name: 'Paris', code: 'PRS', inactive: false }
    ];
    this.currency = [
      { currencyName: 'GPE (£)' },
      { currencyName: 'EUR (€)' }
    ];

    this.profession = [
      { professionName: 'Please choose' },
      {
        professionName: 'Case Management',
        a: [{ charge: 'CM', ff: 60.00, tt: 30.00, ml: 0, nf: 60.00 },
        { charge: 'CM Assistant', ff: 50.00, tt: 50.00, ml: 25.00, nf: 60.00 },
        { charge: 'Admin', ff: 40.00, tt: 40.00, ml: 20.00, nf: 60.00 }]
      },
      {
        professionName: 'Counselling/Psycotheraphy',
        c: [{ charge: 'Session(weekday)', ff: 70.00, tt: 0, ml: 0, nf: 0 },
        { charge: 'Session(weekend)', ff: 70.00, tt: 0, ml: 0, nf: 0 }]
      },
      {
        professionName: 'Occupational Theraphy',
        d: [{ charge: 'OT', ff: 60.00, tt: 30.00, ml: 0, nf: 60.00 },
        { charge: 'OT Assistant', ff: 50.00, tt: 20.00, ml: 25.00, nf: 60.00 },
        { charge: 'Admin', ff: 10.00, tt: 40.00, ml: 20.00, nf: 60.00 }]
      },
      {
        professionName: 'Neuropsychology',
        e: [{ charge: 'NpSych', ff: 60.00, tt: 30.00, ml: 0, nf: 60.00 },
        { charge: 'NpSych Assistant', ff: 80.00, tt: 90.00, ml: 25.00, nf: 60.00 },
        { charge: 'Admin', ff: 40.00, tt: 80.00, ml: 20.00, nf: 60.00 }]
      },
      {
        professionName: 'Neurotherphy',
        f: [{ charge: 'Therapy', ff: 60.00, tt: 30.00, ml: 0, nf: 60.00 },
        { charge: 'Therapy Assistant', ff: 60.00, tt: 10.00, ml: 25.00, nf: 60.00 },
        { charge: 'Admin', ff: 20.00, tt: 80.00, ml: 20.00, nf: 60.00 }]
      },
      {
        professionName: 'Physiotherphy',
        g: [{ charge: 'Physio', ff: 40.00, tt: 60.00, ml: 0, nf: 60.00 },
        { charge: 'Physio Assistant', ff: 70.00, tt: 50.00, ml: 25.00, nf: 60.00 },
        { charge: 'Admin', ff: 40.00, tt: 80.00, ml: 10.00, nf: 40.00 }]
      },
      {
        professionName: 'Speech & Language Therphy',
        b: [{ charge: 'SLT Session', ff: 70.00, tt: 0, ml: 0, nf: 70 }]
      },
      { professionName: 'Others' }
    ];


  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('(.*[a-z0-9A-Z].*)')]],
      lastName: [
        '',
        [Validators.required, Validators.pattern('(.*[a-z0-9A-Z].*)')]
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)[.]([a-zA-Z]{2,5})$'
          )
        ]
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('(\\+? ?[0-9]+)*')
        ]
      ],
      password: [
        '',
        [
          Validators.required, Validators.minLength(6)
        ]
      ],
      confirmPassword: ['', Validators.required],
      companyName: [
        '',
        [Validators.required, Validators.pattern('(.*[a-z0-9A-Z].*)')]
      ],
      addressLine1: [
        '',
        [Validators.required, Validators.pattern('(.*[a-z0-9A-Z].*)')]
      ],
      addressLine2: [''],
      addressLine3: [''],
      town: [
        '',
        [Validators.required, Validators.pattern('(.*[a-z0-9A-Z].*)')]
      ],
      county: [''],
      postcode: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+( [a-zA-Z0-9]+)))$'
          )
        ]
      ],
      country: ['', Validators.required],
      currency: ['', Validators.required],
      profession: ['', Validators.required],
      billingBasis: ['0', Validators.required],
      newForm: this.formBuilder.array([
        // this['addNewForm']
        // this.addNewForm('CM', '50.00', '50.00', '30.00', '00.50')
        // this.addNewForm('CM Assistant', '50.00', '50.00', '25.00', '60.00'),
        // this.addNewForm('Admin', '40.00', '40.00', '20.00', '60.00')
        // this.createItem('CM', '0', '0', '30.00', '00.50')
      ]),
      // captcha1: ['', Validators.required],
      // checkBox1: ['', Validators.required]
    }
      // {
      //   validators: this.Mustmatch('password', 'confirmpassword')
      // }
    )
  }

  addNewForm(charges_var, fixed_var, nonFixed_var, travel_var, mileage_var): FormGroup {
    return this.formBuilder.group({
      charges: [charges_var, Validators.required],
      fixed: [fixed_var, [Validators.required, Validators.pattern("^[0-9]*$")]],
      nonFixed: [nonFixed_var, [Validators.required, Validators.pattern("^[0-9]*$")]],
      travel: [travel_var, [Validators.required, Validators.pattern("^[0-9]*$")]],
      mileage: [mileage_var, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  // addDynamicForm() {
  //   (<FormArray>this.registerForm.get('newForm')).push(this.addNewForm(charges_var, fixed_var, nonFixed_var, travel_var, mileage_var));
  //   // console.log(this.registerForm.get('newForm')['controls']);
  // }

  removeDynamicForm(i: number): void {
    const control = <FormArray>this.registerForm.get('newForm');
    control.removeAt(i);
  }


  onSubmit() {
    console.log(this.registerForm.value);
    // this.signup.saveSignup(this.registerForm.value).subscribe((result) => {
    //   console.log(result);
    // })
    this.onCreatePost();
    this.registerForm.reset();
  }

  // tempArray = [];

  onChange(event: any) {
    this['newForm'] = this.registerForm.controls['newForm'] as FormArray;

    console.log(this['newForm']);


    this.displayEle = true;
    if (this['newForm']['controls'].length >= 1
    ) {
      this['newForm']['controls'].splice(0)
    }

    // console.log(event.value.professionName);

    if (event.value.professionName == 'Case Management') {

      this.profession[1].a.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
      console.log(this['newForm'].value[0].fixed.toFixed(2));

      // this['newForm'].value[0].fixed.toFixed(2)

    }

    if (event.value.professionName == 'Speech & Language Therphy') {
      // this['newForm']['controls'].splice(0)
      console.log(this['newForm']);

      this.registerForm.patchValue({
        billingBasis: 1
      });
      this.profession[7].b.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
    // console.log(event.value.professionName);

    if (event.value.professionName == 'Counselling/Psycotheraphy') {
      this.profession[2].c.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
    if (event.value.professionName == 'Occupational Theraphy') {
      this.profession[3].d.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
    if (event.value.professionName == 'Neuropsychology') {
      this.profession[4].e.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
    if (event.value.professionName == 'Neurotherphy') {
      this.profession[5].f.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
    if (event.value.professionName == 'Physiotherphy') {
      this.profession[6].g.forEach((element: { charge: any; ff: any; nf: any; tt: any; ml: any; }) => {
        this['newForm'].push(
          this.addNewForm(element.charge, element.ff, element.nf, element.tt, element.ml)
        );
      });
    }
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    // console.log(this.captcha);
  }


  addItem(charges_var, fixed_var, nonFixed_var, travel_var, mileage_var): void {
    this['newForm'] = this.registerForm.get('newForm') as FormArray;
    this['newForm'].push(
      this.addNewForm(charges_var, fixed_var, nonFixed_var, travel_var, mileage_var)
    );
    // console.log(this['newForm']controls[i].get('charges').required);

  }

  onCreatePost() {

    this.services.saveSignup(this.registerForm.value).subscribe((result) => {
      console.log(result);
    })

  }
}



