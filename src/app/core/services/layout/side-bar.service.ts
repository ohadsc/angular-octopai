import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SideBarService {

	isOpen = false;
	activeTabId = "messages";

	@Output() change: EventEmitter<any> = new EventEmitter();

	toggle(activeTabId) {
		this.isOpen = !this.isOpen;
		this.change.emit({isOpen: this.isOpen, activeTabId: activeTabId});
	}

	close() {
		this.isOpen = false;
	}

}
