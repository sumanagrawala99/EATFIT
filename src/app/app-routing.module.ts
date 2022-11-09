import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FoodsComponent } from './foods/foods.component';
import { AuthGuard } from './_helper/auth.guard';

const userAccountModule = () => import('./auth/user-account.module').then(x => x.UserAccountModule);
const myFatSecretModule = () => import('./my-fat-secret/my-fat-secret.module').then(x => x.MyFatSecretModule);
const recipeModule = () => import('./recipes/recipe.module').then(x => x.RecipeModule);
const appRoutes : Routes =[
  
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'recipes', loadChildren: recipeModule },
  { path: 'foods' ,component:FoodsComponent},
  { path: 'account', loadChildren: userAccountModule },
  { path: 'myEatFit', loadChildren: myFatSecretModule }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
