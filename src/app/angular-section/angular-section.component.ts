import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-section',
  template: `
    <p>
      angular-section works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
