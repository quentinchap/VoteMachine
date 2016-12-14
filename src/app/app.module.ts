import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CandidatItemComponent } from './candidat-item/candidat-item.component';

import { CandidatService } from './service/candidat.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }