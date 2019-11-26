import { AjaxComponent } from './../ajax/ajax.component';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes =
    [{
        path: 'home', 
        component:HomePage,
        children: [
            {path:'ajax',children:[
                {path:'rest',pathMatch: 'full',loadChildren: '../rest/rest.module#RestModule'},
                {path:'jwt',pathMatch: 'full',loadChildren: '../jwt/jwt.module#JwtModule'},
                {path:'',pathMatch: 'full',component:AjaxComponent},
            ]},
            {path:'camera',pathMatch: 'full',loadChildren: '../camera/camera.module#CameraModule'},
            {path:'map',pathMatch: 'full',loadChildren: '../jwt/jwt.module#JwtModule'},
            {path:'',pathMatch: 'full',redirectTo:'/home/ajax'}
        ]
    },{
        path:'camera',
        children: [{path: '',pathMatch: 'full',loadChildren: '../camera/camera.module#CameraModule'}]       
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }