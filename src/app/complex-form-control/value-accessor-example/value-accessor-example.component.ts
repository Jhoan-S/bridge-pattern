import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  styleUrls: ['value-accessor-example.component.scss'],
  templateUrl: 'value-accessor-example.component.html'
})

export class ValueAccessorExampleComponent implements OnInit {

  form!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl({ value: false, disabled: false }),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}