import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SalesComponent } from './sales/sales.component';
import { NewsComponent } from './news/news.component';
import { ClassicGuitarsComponent } from './classic-guitars/classic-guitars.component';
import { AcousticGuitarsComponent } from './acoustic-guitars/acoustic-guitars.component';
import { ElectricGuitarsComponent } from './electric-guitars/electric-guitars.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { SynthesizersComponent } from './synthesizers/synthesizers.component';
import { ElectricPianosComponent } from './electric-pianos/electric-pianos.component';
import { AmplifiersComponent } from './amplifiers/amplifiers.component';
import { MicrophonesComponent } from './microphones/microphones.component';
import { ProcessorsComponent } from './processors/processors.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'news', component: NewsComponent },

  { path: 'classic-guitars', component: ClassicGuitarsComponent },
  { path: 'acoustic-guitars', component: AcousticGuitarsComponent},
  { path: 'electric-guitars', component: ElectricGuitarsComponent},

  { path: 'keyboards', component: KeyboardsComponent},
  { path: 'synthesizers', component: SynthesizersComponent},
  { path: 'electric-pianos', component: ElectricPianosComponent},

  { path: 'amplifiers', component: AmplifiersComponent},
  { path: 'microphones', component: MicrophonesComponent},
  { path: 'processors', component: ProcessorsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }