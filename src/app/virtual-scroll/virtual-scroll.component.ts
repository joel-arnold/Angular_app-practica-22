import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styles: [],
})
export class VirtualScrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) elViewPort: CdkVirtualScrollViewport;
  personas = Array(1500).fill(0);

  constructor() {}

  ngOnInit(): void {}

  irAlFinal() {
    this.elViewPort.scrollToIndex(this.personas.length);
  }

  irAlInicio() {
    this.elViewPort.scrollToIndex(0);
  }

  irAMitad() {
    this.elViewPort.scrollToIndex(this.personas.length / 2);
  }
}
