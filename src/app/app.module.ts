import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.header';
import { FooterComponent } from './footer/app.footer';
import { HomeComponent } from './home/app.home';
import { DocumentsComponent } from './documents/app.documents';
import { OtherWorkComponent } from './otherwork/app.otherwork';
import { InvestComponent } from './invest/app.invest';
import { SidebarComponent } from './sidebar/app.sidebar';
import { UWComponent } from './uw/app.uw';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work',
    component: OtherWorkComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'uw',
    component: UWComponent
  },
  {
    path: 'invest',
    component: InvestComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocumentsComponent,
    OtherWorkComponent,
    SidebarComponent,
    UWComponent,
    InvestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    Ng2DeviceDetectorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
