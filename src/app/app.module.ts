import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { GaleryComponent } from './components/galery/galery.component';
import { BaseComponent } from './components/utils/base/base.component';
import { FormsModule } from '@angular/forms';
import { PbbComponent } from './components/pbb/pbb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './components/todo/todo.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UserComponent,
    HeaderComponent,
    BannerComponent,
    GaleryComponent,
    BaseComponent,
    PbbComponent,
    TodoComponent,
    MenuComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
