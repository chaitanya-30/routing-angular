import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersintroComponent } from './usersintro/usersintro.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UserserviceService } from './userservice.service';
const approutes:Routes=[{path: '',component:UsersintroComponent},
{path:'user/:id',component:UsersComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UsersintroComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [RouterModule.forRoot(approutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
