import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SalesComponent } from './sales/sales.component';
import { NewsComponent } from './news/news.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'product-list', component: ProductListComponent },
  // { path: 'acoustic_guitars', component: ProductlistComponent, data: { category: 'akustyczne' } },
  // { path: 'classic_guitars', component: ProductlistComponent, data: { category: 'klasyczne' } },
  // { path: 'electric_guitars', component: ProductlistComponent, data: { category: 'elektryczne' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }