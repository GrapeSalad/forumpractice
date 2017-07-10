import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {PostDetailsComponent} from './post-details/post-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
