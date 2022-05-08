import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pais/pages/by-name/by-name.component';
import { ByRegComponent } from './pais/pages/by-reg/by-reg.component';
import { ByCapComponent } from './pais/pages/by-cap/by-cap.component';
import { CountryComponent } from './pais/pages/country/country.component';

const routes: Routes = [
    {
        path: '',
        component: ByNameComponent,
        pathMatch: 'full',
    },
    {
        path: 'region',
        component: ByRegComponent,
    },
    {
        path: 'capital',
        component: ByCapComponent,
    },
    {
        path: 'pais/:id',
        component: CountryComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
