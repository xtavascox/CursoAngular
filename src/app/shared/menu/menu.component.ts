import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
    items: MenuItem[] = [];

    ngOnInit(): void {
        this.items = [
            {
                label: 'Menu 1',
                items: [
                    {
                        label: 'opcion 1',
                        icon: 'pi pi-check',
                        items: [{ label: 'sub-opcion 1' }],
                    },
                ],
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
            },
        ];
    }
}
