import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { TaskComponent } from "./task/task.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
