import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';
import { WindowsComponent } from './windows/windows.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
import { AddFootballerComponent } from './add-footballer/add-footballer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WindowsComponent,
    TableComponent,
    DetailsComponent,
    UpdateComponent,
    HeaderComponent,
    AddFootballerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
