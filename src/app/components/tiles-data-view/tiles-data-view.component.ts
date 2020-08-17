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
        image: 'group.png'
      },
      {
        id: 2,
        name: 'Acct Review Maintenance',
        account: true,
        route: 'acct-review-maintenance',
        image: 'sync.png'
      },
      {
        id: 3,
        name: 'Asset Transaction',
        account: true,
        route: 'asset-transaction',
        image: 'share.png'
      },
      {
        id: 4,
        name: 'Contact Center',
        account: false,
        route: 'contact-center',
        image: 'dashboard.png'
      },
      {
        id: 5,
        name: 'DARS Approval',
        account: true,
        route: 'dars-approval',
        image: 'feather.png'
      },
      {
        id: 6,
        name: 'DARS Approval',
        account: true,
        route: 'dars-approval',
        image: 'feather.png'
      },
      {
        id: 7,
        name: 'Name & Address Record',
        account: false,
        route: 'acct-maintenance',
        image: 'cloud-computing.png'
      },
      {
        id: 8,
        name: 'AD Fixed Income',
        account: false,
        route: 'ad-fixed-income',
        image: 'up-arrow.png'
      },
      {
        id: 9,
        name: 'Initial Account Maintenance',
        account: true,
        route: 'initial-account-maintenance',
        image: 'document.png'
      },
      {
        id: 10,
        name: 'Add acct: AD Asset',
        account: true,
        route: 'add-acct-ad-asset',
        image: 'add-group.png'
      },
      {
        id: 11,
        name: 'Management',
        account: false,
        route: 'management',
        image: 'ui.png'
      },
      {
        id: 12,
        name: 'AD Capital Gains',
        account: true,
        route: 'ad-capital-gains',
        image: 'mail.png'
      },
      {
        id: 13,
        name: 'Tolerance',
        account: false,
        route: 'tolerance',
        image: 'cloud.png'
      }
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
