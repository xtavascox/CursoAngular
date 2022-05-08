import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapComponent } from './pages/by-cap/by-cap.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegComponent } from './pages/by-reg/by-reg.component';
import { CountryComponent } from './pages/country/country.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
    declarations: [
        ByCapComponent,
        ByNameComponent,
        ByRegComponent,
        CountryComponent,
        PaisTablaComponent,
        PaisInputComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule],

    exports: [
        ByCapComponent,
        ByNameComponent,
        ByRegComponent,
        CountryComponent,
    ],
})
export class PaisModule {}
