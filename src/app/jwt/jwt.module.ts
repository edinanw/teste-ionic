import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JwtInterceptor } from './jwt.interceptor';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtComponent } from './jwt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [JwtComponent,LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    JwtInterceptor,
    NgxDatatableModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: JwtComponent}])
  ],entryComponents:[LoginComponent]
})
export class JwtModule { }
