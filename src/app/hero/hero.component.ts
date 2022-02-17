import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    document.getElementById('produse')!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
}
