import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [

{
  path: '',
  component: LoginComponent
},
{
  path: 'home',
  component: HomeComponent
},
// {
//   path: 'users',

//   component: UserComponent,
//   children: [
//     {
//       path: ':id',
//       component: CityComponent
//     },
//     {
//       path:'names/:name',
//       component: SearchComponent
      
//     },
//     {
//       path: ':id/posts/:postId',
//       component: PostComponent
//     }
//   ]
//},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
