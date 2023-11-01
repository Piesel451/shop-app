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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { MenuLoggedComponent } from './menu-logged/menu-logged.component';
import { NonAuthenticatedCartComponent } from './non-authenticated-cart/non-authenticated-cart.component';
import { AuthenticatedCartComponent } from './authenticated-cart/authenticated-cart.component';
import { CartComponent } from './cart/cart.component';


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
    SignUpComponent,
    LoginComponent,
    UserProfileComponent,
    MenuLoggedComponent,
    NonAuthenticatedCartComponent,
    AuthenticatedCartComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
