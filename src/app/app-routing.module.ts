import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // { path: "", redirectTo: "/tabs", pathMatch: "full" },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: "tabs", redirectTo: "", pathMatch: "full" },
  //{ path: '', loadChildren: './tab1/tab1.module#tab1PageModule' },
  { path: '', loadChildren: './signin/signin.module#SigninPageModule' },
  //{ path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  //{ path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  // { path: 'modal1', loadChildren: './pages/modal1/modal1.module#Modal1PageModule' },
  // { path: 'modal2', loadChildren: './pages/modal2/modal2.module#Modal2PageModule' },
  // { path: 'modal3', loadChildren: './pages/modal3/modal3.module#Modal3PageModule' },
  // { path: 'modal4', loadChildren: './pages/modal4/modal4.module#Modal4PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
