import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyKendoModule } from '@ngx-formly/kendo';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { UserService } from './user.service';

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    FormlyKendoModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormlyNgZorroAntdModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzPageHeaderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
