import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { employeeReducer, reducer } from './state/reducers/employee.reducer';
import { Employee } from 'src/models/employee';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from './state/effects/employee.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromEmployee from 'src/app/state/reducers/employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,     
    FetchEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      employee: reducer
    }),
    EffectsModule.forRoot([EmployeeEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 40
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }, 
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'register-employee', component: AddEmployeeComponent },
      { path: 'employee/edit/:id', component: AddEmployeeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
