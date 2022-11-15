import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerssComponent } from './serverss/serverss.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UserComponent } from './user/user.component';
import { MiddleComponent } from './middle/middle.component';
import { DirectivesRightComponent } from './directives-right/directives-right.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerssComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    MiddleComponent,
    DirectivesRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
