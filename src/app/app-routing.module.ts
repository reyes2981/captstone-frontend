import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
