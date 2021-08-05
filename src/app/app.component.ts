import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private userService: UserService) {}
  async ngOnInit(): Promise<void> {
    // this.userService.getUserData().subscribe(([model, fields]) => {
    //   this.form = new FormGroup({});
    //   this.model = model;
    //   this.fields = fields;
    // });
    this.fields = await this.userService.getFields();
  }

  /*   mapFields(fields: FormlyFieldConfig[]) {
    return fields.map(f => {
      // Bind an observable to `color` field.
      if (f.key === 'color') {
        f.type = 'radio';
        //f.templateOptions.options = this.userService.getColors();
      }

      return f;
    });
  } */

  Submit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.model, null, 2));
      //alert(JSON.stringify(this.model, null, 2));
    }
  }
}
