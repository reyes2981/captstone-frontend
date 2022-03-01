import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
