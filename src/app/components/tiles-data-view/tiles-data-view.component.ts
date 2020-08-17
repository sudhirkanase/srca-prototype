import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Action {
  id: number;
  name: string;
  account?: boolean;
  image?: string;
  route: string;
}

@Component({
  selector: 'app-tiles-data-view',
  templateUrl: './tiles-data-view.component.html',
  styleUrls: ['./tiles-data-view.component.scss']
})
export class TilesDataViewComponent implements OnInit {
  actions: Action[];
  selectedAction: Action;
  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor() { }

  ngOnInit() {

    this.actions = [
      {
        id: 1,
        name: 'Account Maintenance',
        account: true,
        route: 'acct-maintenance',
        image: 'image-1.jpg'
      },
      {
        id: 2,
        name: 'Acct Review Maintenance',
        account: true,
        route: 'acct-review-maintenance',
        image: 'image-2.png'
      },
      {
        id: 3,
        name: 'Asset Transaction',
        account: true,
        route: 'asset-transaction',
        image: 'image-3.jpg'
      },
      {
        id: 4,
        name: 'Contact Center',
        account: false,
        route: 'contact-center',
        image: 'image-4.png'
      },
      {
        id: 5,
        name: 'DARS Approval',
        account: true,
        route: 'dars-approval',
        image: 'image-1.jpg'
      },
      {
        id: 6,
        name: 'Name & Address Record',
        account: false,
        route: 'acct-maintenance',
        image: 'image-2.png'
      },
      {
        id: 7,
        name: 'AD Fixed Income',
        account: false,
        route: 'ad-fixed-income',
        image: 'image-3.jpg'
      },
      {
        id: 8,
        name: 'Add acct: AD Asset',
        account: true,
        route: 'add-acct-ad-asset',
        image: 'image-4.png'
      },
      {
        id: 9,
        name: 'Management',
        account: false,
        route: 'management',
        image: 'image-1.jpg'
      },
      {
        id: 10,
        name: 'AD Capital Gains',
        account: true,
        route: 'ad-capital-gains',
        image: 'image-2.png'
      },
      {
        id: 11,
        name: 'Tolerance',
        account: false,
        route: 'tolerance',
        image: 'image-3.jpg'
      },
      {
        id: 12,
        name: 'AD Change Restriction',
        account: true,
        route: 'ad-change-restriction',
        image: 'image-4.png'
      },
      {
        id: 13,
        name: 'AD Invest Cash',
        account: true,
        route: 'ad-invest-cash',
        image: 'image-1.jpg'
      }, {
        id: 14,
        name: 'AD Other Investments',
        account: true,
        route: 'ad-other-investments',
        image: 'image-2.png'
      },
      {
        id: 15,
        name: 'AD Other Portfolio',
        account: true,
        route: 'ad-other-portfolio',
        image: 'image-3.jpg'
      },
    ];

    this.sortOptions = [
      { label: 'With Account', value: '!account' },
      { label: 'Without Account', value: 'account' },
    ];
  }

  selectAction(event: Event, action: Action) {
    this.selectedAction = action;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectAction = null;
  }

}
