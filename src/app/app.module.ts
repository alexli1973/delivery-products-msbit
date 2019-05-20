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
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './list-items/search/search.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule,
  MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    SearchComponent,
    FilterPipe,
    SortPipe,
    ModalComponent,
    // HttpClientModule,
    // HttpClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule
  ],
 // exports: [MatSidenavModule],
  entryComponents: [ModalComponent],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
