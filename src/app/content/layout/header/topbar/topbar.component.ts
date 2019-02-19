import {
	Component,
	OnInit,
	HostBinding,
	Input,
	AfterViewInit,
	ChangeDetectionStrategy
} from '@angular/core';
import { LayoutConfigService } from '../../../../core/services/layout-config.service';
import * as objectPath from 'object-path';
import { Router } from '@angular/router';
import { SideBarService } from '../../../../core/services/layout/side-bar.service';

@Component({
	selector: 'm-topbar',
	templateUrl: './topbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit, AfterViewInit {
	@HostBinding('id') id = 'm_header_nav';
	@HostBinding('class')
	classes = 'm-stack__item m-stack__item--fluid m-header-head';

	@Input() searchType: any;

	constructor(
		private layoutConfigService: LayoutConfigService,
		private router: Router,
		private sideBarService: SideBarService
	) {
		this.layoutConfigService.onLayoutConfigUpdated$.subscribe(model => {
			const config = model.config;
			this.searchType = objectPath.get(config, 'header.search.type');
		});
	}

	ngOnInit(): void {}

	onMoshe(){
		this.sideBarService.toggle('logs');

	}

	ngAfterViewInit(): void {}
}
