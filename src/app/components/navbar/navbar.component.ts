import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500)
      ]),
      transition(':leave', animate(500, style({ opacity: 0, })))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  logos: string[] = [
    './assets/1.png',
    './assets/2.png',
    './assets/3.png'
  ];

  currentLogoIndex = 0;

  ngOnInit(): void {
    this.rotateLogos();
  }

  rotateLogos(): void {
    setInterval(() => {
      this.currentLogoIndex = (this.currentLogoIndex + 1) % this.logos.length;
    }, 5000);
  }
}