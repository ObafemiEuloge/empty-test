import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MyComponentComponent } from './my-component/my-component.component';
=======
import { CategorieComponent } from './categorie/categorie.component';
>>>>>>> ee1a950b9d9e86e85058bcc114aca6b7fec85fa0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MyComponentComponent
=======
    CategorieComponent
>>>>>>> ee1a950b9d9e86e85058bcc114aca6b7fec85fa0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
