import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { Users } from './users';
import { Wikipedia } from './wikipedia';
import { Contact } from './contact';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'users', component: Users },
  { path: 'wikipedia', component: Wikipedia },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**', component: NoContent },
];
