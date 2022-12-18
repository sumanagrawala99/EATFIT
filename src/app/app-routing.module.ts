import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './_helper/auth.guard';

const userAccountModule = () => import('./auth/user-account.module').then(x => x.UserAccountModule);
const myFatSecretModule = () => import('./my-fat-secret/my-fat-secret.module').then(x => x.MyFatSecretModule);
const recipeModule = () => import('./recipes/recipe.module').then(x => x.RecipeModule);
const exerciseModule = () => import('./exercise/exercise.module').then(x => x.ExerciseModule);
const foosModule = () => import('./foods/foods.module').then(x => x.FoodsModule);
const appRoutes : Routes =[
  
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'recipes', loadChildren: recipeModule },
  { path: 'foods' ,loadChildren: foosModule},
  { path: 'account', loadChildren: userAccountModule },
  { path: 'myEatFit', loadChildren: myFatSecretModule },
  { path: 'exercise', loadChildren: exerciseModule },
  { path: 'userprofile', component: UserProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
