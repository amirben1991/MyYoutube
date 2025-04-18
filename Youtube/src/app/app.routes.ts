import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  { path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] },
  { path: 'video', component: VideoPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'search' }
];
