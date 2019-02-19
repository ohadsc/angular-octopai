import { Directive, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[moshe]'
})
export class MosheDirective
	implements AfterViewInit, OnDestroy {
	constructor(private el: ElementRef) {}

	ngAfterViewInit(): void {
		new mOffcanvas(this.el.nativeElement, {
			overlay: true,
			baseClass: 'm-quick-sidebar',
			closeBy: 'm_quick_sidebar_close',
			toggleBy: 'moshe'

		});
	}
	ngOnDestroy(): void {}
}
