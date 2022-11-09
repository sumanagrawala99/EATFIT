import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFatSecretComponent } from './my-fat-secret.component';


const routes: Routes = [
    {
        path: '', component: MyFatSecretComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyFatSecretRoutingModule { }