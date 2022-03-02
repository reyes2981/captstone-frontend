import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CreateUserComponent } from "./create-user/create-user.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { TaskComponent } from "./task/task.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
