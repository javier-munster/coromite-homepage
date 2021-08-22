import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "about",
        component: AboutPageComponent
    },
    {
        path: "**",
        component: HomePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload",
        scrollPositionRestoration: "enabled"
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
