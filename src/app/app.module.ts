import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CaptchaModule } from 'primeng/captcha';
import { RecaptchaModule } from 'ng-recaptcha';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DetailsComponent } from './details/details.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'forgetpass', component: ForgetpasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'addTasks', component: AddTasksComponent },
  { path: 'details', component: DetailsComponent }
  // { path: 'loader', loadChildren: () => import('./loader/loader.module').then(m => m.LoaderModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    ForgetpasswordComponent,
    AddTaskComponent,
    DetailsComponent,
    AddTasksComponent

  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,
    CaptchaModule,
    RecaptchaModule,
    CheckboxModule,
    HttpClientModule,
    CalendarModule,
    ToolbarModule,
    MenuModule,
    TieredMenuModule,
    TableModule,
    EditorModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
