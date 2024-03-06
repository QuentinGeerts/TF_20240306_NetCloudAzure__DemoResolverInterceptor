import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoResolverComponent } from './demo-resolver/demo-resolver.component';
import { userResolver } from './demo-resolver/user.resolver';

const routes: Routes = [

  { path: 'demo-resolver', component: DemoResolverComponent },
  { path: 'demo-resolver/:id', component: DemoResolverComponent, resolve: { user: userResolver } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
