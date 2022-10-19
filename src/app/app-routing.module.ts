import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { CommunityComponent } from './community/community.component';
import { FitnessComponent } from './fitness/fitness.component';
import { FoodsComponent } from './foods/foods.component';
import { MyFatSecretComponent } from './my-fat-secret/my-fat-secret.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes : Routes =[
  { path: 'myfatsecret', component:MyFatSecretComponent },
  { path: 'foods' ,component:FoodsComponent},
  { path: 'recipes' , component: RecipesComponent},
  { path: 'challenges' , component: ChallengesComponent},
  { path: 'community', component:CommunityComponent},
  { path: 'fitness' , component:FitnessComponent},
  { path: 'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
