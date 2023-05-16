import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { KnowMeComponent } from './know-me/know-me.component';
import { ReferencesComponent, ReferencesModalDialog } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MotivationComponent } from './motivation/motivation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxCaptchaModule } from 'ngx-captcha';
import { LanguageService } from './services/language.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    KnowMeComponent,
    ReferencesComponent,
    ReferencesModalDialog,
    ContactComponent,
    FooterComponent,
    MotivationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    NgxCaptchaModule,
  ],
  providers: [
    LanguageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
