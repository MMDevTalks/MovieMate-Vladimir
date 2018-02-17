import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '@movies/shared';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    ProxyRouteComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
