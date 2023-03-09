import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { OrangeComponent } from './orange/orange.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    BlueComponent,
    RedComponent,
    OrangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFileDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MyappComponent]
})
export class AppModule { }
