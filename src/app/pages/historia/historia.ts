import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  imports: [],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
})
export class Historia implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    document.body.classList.add('historia-bg');
  }
  ngOnDestroy() {
    document.body.classList.remove('historia-bg');
  }
}
