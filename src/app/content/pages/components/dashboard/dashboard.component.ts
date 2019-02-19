import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../../../core/services/layout-config.service';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';
import * as objectPath from 'object-path';
import { SideBarService } from '../../../../core/services/layout/side-bar.service';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	public config: any;

	constructor(
		private router: Router,
		private layoutConfigService: LayoutConfigService,
		private subheaderService: SubheaderService,
		private sideBarService: SideBarService
	) {
	}

	ngOnInit(): void {
		// change page config, refer to config/layout.ts
		const newLayoutOption = objectPath.set(this.layoutConfigService.layoutConfig, 'config.aside.left.display', false);
		this.layoutConfigService.setModel(newLayoutOption, true);
	}

	openSettings(){
		this.sideBarService.toggle('settings');
	}

	openMessages(){
		this.sideBarService.toggle('messages');
	}
}
