import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { uruguayComponent } from "./pages/uruguay/uruguay.component";
import { ChileComponent } from "./pages/chile/chile.component";

const routes : Routes = [
    {path: "home" ,component : HomeComponent },
    {path: "uruguay" , component : uruguayComponent},
    {path: "chile" , component : ChileComponent},
    {path: "**" , component : HomeComponent}
  
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
