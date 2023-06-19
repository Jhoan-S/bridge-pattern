import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    ValueAccessorExampleComponent
  ],
  declarations: [
    LockInputComponent,
    ValueAccessorExampleComponent
  ],
})
export class ComplexFormControlModule { }
