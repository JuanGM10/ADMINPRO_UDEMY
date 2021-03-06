
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// Rutas
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';
// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports : [
        SharedModule,
        ComponentsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
