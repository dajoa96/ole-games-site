import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'nft',
    loadChildren: () => import('./modules/nft/nft.module').then(m => m.NftModule),
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule),
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./modules/tournaments/tournaments.module').then(m => m.TournamentsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
