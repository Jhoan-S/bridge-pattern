import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lock-input',
  styleUrls: ['lock-input.component.scss'],
  templateUrl: 'lock-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LockInputComponent,
    multi: true
  }]
})

export class LockInputComponent implements OnInit, ControlValueAccessor {

  value: boolean = false;
  disabled: boolean = false;
  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor() { }

  writeValue(obj: boolean): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() { }

  setValue(): void {
    if (this.disabled) return;

    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}