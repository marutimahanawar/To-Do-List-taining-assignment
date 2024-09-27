import { Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'update/:id', component:UpdateComponent },
    {path:'addtask',component:AddtaskComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }