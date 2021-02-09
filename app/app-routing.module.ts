import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowerComponent} from './shower/shower.component'
import {EditorComponent} from './editor/editor.component'


const routes: Routes = [
  { path: '' , redirectTo: '/shower', pathMatch: 'full'},
  { path: 'shower', component: ShowerComponent },
  { path: 'editor', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
