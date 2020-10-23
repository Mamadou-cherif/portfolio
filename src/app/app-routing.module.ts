import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [

{path:"about", component: AboutComponent},
{path:"contact", component:ContactComponent},
{path:"", redirectTo: 'HeaderComponent', pathMatch: 'full'},
{path:"portfolio", component:PortfolioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
