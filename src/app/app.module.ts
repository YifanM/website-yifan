import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header';
import { FooterComponent } from './app.footer';
import { HomeComponent } from './app.home';
import { DocumentsComponent } from './app.documents';
import { OtherWorkComponent } from './app.otherwork';
import { SidebarComponent } from './app.sidebar';

import { RouterService } from './app.router.service';

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
