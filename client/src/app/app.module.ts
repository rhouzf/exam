import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './Component/Document/document.component';
import { ListeDocumentsComponent } from './Component/liste-documents/liste-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ListeDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
