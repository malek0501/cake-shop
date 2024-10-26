import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheesecakeComponent } from './cheesecake/cheesecake.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PiesComponent } from './pies/pies.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';  // Importez votre nouvelle composante d'accueil

const routes: Routes = [
  { path: '', component: HomeComponent },  // La page d'accueil utilise maintenant HomeComponent
  { path: 'promotion', component: PromotionsComponent },
  { path: 'cheesecake', component: CheesecakeComponent },
  { path: 'pies', component: PiesComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: '' }  // Redirection vers la page d'accueil si la route n'est pas trouvée
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
