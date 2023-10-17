import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SalesComponent } from './sales/sales.component';
import { NewsComponent } from './news/news.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClassicGuitarsComponent } from './classic-guitars/classic-guitars.component';
import { AcousticGuitarsComponent } from './acoustic-guitars/acoustic-guitars.component';
import { ElectricGuitarsComponent } from './electric-guitars/electric-guitars.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { SynthesizersComponent } from './synthesizers/synthesizers.component';
import { ElectricPianosComponent } from './electric-pianos/electric-pianos.component';
import { AmplifiersComponent } from './amplifiers/amplifiers.component';
import { MicrophonesComponent } from './microphones/microphones.component';
import { ProcessorsComponent } from './processors/processors.component';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    ContactComponent,
    SalesComponent,
    NewsComponent,
    ProductListComponent,
    ClassicGuitarsComponent,
    AcousticGuitarsComponent,
    ElectricGuitarsComponent,
    KeyboardsComponent,
    SynthesizersComponent,
    ElectricPianosComponent,
    AmplifiersComponent,
    MicrophonesComponent,
    ProcessorsComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
