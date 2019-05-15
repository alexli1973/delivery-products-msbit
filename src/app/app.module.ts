import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import {GetDataService} from './shared/services/get-data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListItemsComponent,
    ItemDetailsComponent,
   // HttpClientModule,
    // HttpClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
