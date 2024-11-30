import { Routes } from '@angular/router';
import { CipherComponent } from './pages/cipher/cipher.component';
import { StartComponent } from './pages/start/start.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'cipher',
    component: CipherComponent,
  },
];
