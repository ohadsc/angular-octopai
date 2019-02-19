import {
	Component,
	OnInit,
	HostBinding,
	AfterViewInit
} from '@angular/core';
import { SideBarService } from '../../../../core/services/layout/side-bar.service';

@Component({
	selector: 'm-quick-sidebar',
	templateUrl: './quick-sidebar.component.html'
})
export class QuickSidebarComponent implements OnInit {
	@HostBinding('id') id = 'm_quick_sidebar';
	@HostBinding('class')
	classes = 'm-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light'; //m-quick-sidebar--on
	@HostBinding('attr.mQuickSidebarOffcanvas')
	@HostBinding('attr.moshe')
	@HostBinding('style.overflow') styleOverflow: any = 'hidden';
	@HostBinding('class.m-quick-sidebar--on')
	isOpen = false;
	activeTabId = 'messages';

	constructor(
		private sideBarService: SideBarService
	) {
		this.sideBarService.change.subscribe(params => {
			this.activeTabId = params.activeTabId;
			this.isOpen = params.isOpen;
		});
	}

	ngOnInit(): void {}

	onClose(){
		this.sideBarService.toggle(this.activeTabId);
	}
}
