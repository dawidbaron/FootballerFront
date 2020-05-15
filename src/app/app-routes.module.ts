import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WindowsComponent } from './windows/windows.component';
import { TableComponent } from './table/table.component';
import { AddFootballerComponent } from './add-footballer/add-footballer.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
 const appRoutes: Routes=[
    { path:'',component:HeaderComponent},
    { path: 'window', component: WindowsComponent},
    { path:'table',component: TableComponent},
    { path: 'add', component: AddFootballerComponent } ,
    { path: 'more/:id', component: DetailsComponent},
    { path: 'update/:id', component: UpdateComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }),
  FormsModule],
    exports: [RouterModule]
  })
  export class AppRoutesModule { }
