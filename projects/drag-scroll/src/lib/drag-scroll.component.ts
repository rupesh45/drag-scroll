import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'dragScroll',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.scss']
})
export class DragScrollComponent {

  @ViewChild('scroll',{static:false})itmes?: ElementRef;
  @Input() gap?:any;
  isDown = false;
  startX = 0;
  scrollLeft = 0;
  constructor(private _renderer: Renderer2,private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this._renderer.listen(this.itmes?.nativeElement,'mousedown',this.mouseDown.bind(this));
    this._renderer.listen(this.itmes?.nativeElement,'mouseup',this.mouseUp.bind(this));
    this._renderer.listen(this.itmes?.nativeElement,'mouseleave',this.mouseleave.bind(this));
    this._renderer.listen(this.itmes?.nativeElement,'mousemove',this.mousemove.bind(this));
    // console.log(this.isDown,this);
  }

  mouseDown(e:any){
    // console.log('mousedown');
    this.isDown = true;
    this.startX = e.pageX - this.itmes?.nativeElement.offsetLeft
    this.scrollLeft = this.itmes?.nativeElement.scrollLeft;

    this.itmes?.nativeElement.classList.add('active');

    // console.log(this.scrollLeft);
  }
  mouseleave(){
    // console.log('mouseleave');
    this.isDown = false;
    this.itmes?.nativeElement.classList.remove('active');


  }

  mouseUp(){
    // console.log('mouseUp');
    this.isDown = false;
    this.itmes?.nativeElement.classList.remove('active');


  }


  mousemove(e:any){
    if(!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.itmes?.nativeElement.offsetLeft

    let walk = (x - this.startX) * 1.5;
    if(this.itmes){
      this.itmes.nativeElement.scrollLeft = this.scrollLeft - walk;
    }
    // console.log(this.scrollLeft,walk,this.scrollLeft - walk);
  }

}
