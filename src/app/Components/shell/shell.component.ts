import { Component, Input } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  @Input() data = 'No Results Found'
  display: boolean = false;
  labwareDockPosition = 'left';
  expId: number = 123456;
  expName: string = 'Cell Splitting';
  expType: string = 'Protocol';
  expModeOptions: any[] = [{ label: 'Edit', value: 'Edit' }, { label: 'View', value: 'View' }];
  expMode: string = 'Edit';
  isViewMode: boolean = this.expMode != 'Edit';
  userName: string = 'Hanan Tokash';
  sidebarVisible: boolean = true;

  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom'
    },
    {
      label: 'Top',
      value: 'top'
    },
    {
      label: 'Left',
      value: 'left'
    },
    {
      label: 'Right',
      value: 'right'
    }
  ];

  leftMegaMenuItems: MegaMenuItem[] | undefined;
  rightMegaMenuItems: MegaMenuItem[] | undefined;
  editModeLeftSideBarItems: MenuItem[] | undefined;
  viewModeLeftSideBarItems: MenuItem[] | undefined;
  leftSideBarItems: MenuItem[] | undefined;

  ngOnInit() {

    this.leftMegaMenuItems = [
      {
        label: ''
      },
      {
        label: '<h3 class="x-title x-float-left" > ' + this.expType + ' ' + this.expId + '</h3>'
          + '<h3 class="x-title">' + this.expName + '</h3>'
      }
    ];
    this.rightMegaMenuItems = [
      {
        icon: 'pi pi-home x-megamenu-icon'
      },
      {
        icon: 'pi pi-shopping-cart x-megamenu-icon'
      },
      {
        icon: 'pi pi-download x-megamenu-icon'
      },
      {
        icon: 'pi pi-ellipsis-v x-megamenu-icon'
      }

    ]
    this.editModeLeftSideBarItems = [
      {
        label: 'Tools',
        items: [{ label: 'Pipettes' }, { label: 'Stirrers' }, { label: 'Injectors' }, { label: 'Centrifuges' }]
      },
      {
        label: 'Materials',
        items: [{ label: 'Cells' }, { label: 'Buffers' }, { label: 'Enzymes' }]
      },
      {
        label: 'Vessels',
        items: [{ label: 'Glassware' }, { label: 'Dishes' }]
      },
      {
        label: 'Devices',
        items: [{ label: 'Observation' }, { label: 'Analysis' }]
      }
    ];
    this.viewModeLeftSideBarItems = [
      {
        icon: 'LeftSidebarToolsIcon.png'
      },
      {
        icon: 'LeftSidebarMaterialsIcon.png',
      },
      {
        icon: 'LeftSidebarVesselsIcon.png',
      },
      {
        icon: 'LeftSidebarDevicesIcon.png',
      }
    ];
    this.leftSideBarItems = this.editModeLeftSideBarItems;
  }

  onToggleViewMode(sender: any){
    this.isViewMode = !this.isViewMode;
    if (this.isViewMode) {
      this.leftSideBarItems = this.viewModeLeftSideBarItems;      
    }
    else
    {
      this.leftSideBarItems = this.editModeLeftSideBarItems;
    }
  }
}
