import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'm-action',
	templateUrl: './action.component.html',
})
export class ActionComponent implements OnInit {
  htmlContent = '';
  titleValue:string;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  }

  constructor(private router: Router) { }

	testRout(){
		console.log(this.titleValue);
		this.router.navigate(['profile'])
	}

  ngOnInit() {
		console.log(this.titleValue);
  }

	onChange($event){
		this.titleValue = $event;
	}

}
