import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule],
    providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
