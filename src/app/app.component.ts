import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UserService } from './user.service';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;
  options: FormlyFormOptions = {};
  model: any;
  fields: FormlyFieldConfig[];

  constructor(private userService: UserService) {
    this.userService.getUserData().subscribe(([model, fields]) => {
      this.form = new FormGroup({});
      this.model = model;
      this.fields = this.mapFields(fields);
    });
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map(f => {
      // Bind an observable to `color` field.
      if (f.key === 'color') {
        f.type = 'radio';
        f.templateOptions.options = this.userService.getColors();
      }

      return f;
    });
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */