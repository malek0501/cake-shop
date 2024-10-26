import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheesecakeComponent } from './cheesecake/cheesecake.component';
import { PiesComponent } from './pies/pies.component';
import { DetailsComponent } from './details/details.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CheesecakeComponent,
    PiesComponent,
    DetailsComponent,
    PromotionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
