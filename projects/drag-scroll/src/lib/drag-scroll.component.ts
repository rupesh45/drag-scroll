import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'dragScroll',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.scss']
})
export class DragScrollComponent {

  @ViewChild('scroll',{static:false})items?: ElementRef;
  @Input() gap?:any;
  @Output() clickEvent = new EventEmitter<any>();

  mousePosition = {downX:0,upX:0};

  isDown = false;
  startX = 0;
  scrollLeft = 0;
  constructor(private _renderer: Renderer2,private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this._renderer.listen(this.items?.nativeElement,'mousedown',this.mouseDown.bind(this));
    this._renderer.listen(this.items?.nativeElement,'mouseup',this.mouseUp.bind(this));
    this._renderer.listen(this.items?.nativeElement,'mouseleave',this.mouseleave.bind(this));
    // this._renderer.listen(this.items?.nativeElement,'mousemove',this.mousemove.bind(this));
    // console.log(this.isDown,this);
    Array.from(this.items?.nativeElement.children).forEach((items:any,index) => {
      items.addEventListener('click', () => {
        if(!this.isDragged) {
          // console.log('click',index);
          this.clickEvent.emit(index);
        }
      },false);
    });
  }

  mouseDown(e:any){
    // console.log('mousedown');
    this.mousePosition.downX = e.pageX;

    this.isDown = true;
    this.startX = e.pageX - this.items?.nativeElement.offsetLeft
    this.scrollLeft = this.items?.nativeElement.scrollLeft;

    this.items?.nativeElement.classList.add('active');

    // console.log(this.scrollLeft);
  }
  mouseleave(){
    // console.log('mouseleave');
    this.isDown = false;
    this.items?.nativeElement.classList.remove('active');


  }

  mouseUp(e:any){
    // console.log('mouseUp');
    this.mousePosition.upX = e.pageX;

    this.isDown = false;
    this.items?.nativeElement.classList.remove('active');


  }


  mousemove(e:any){
    if(!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.items?.nativeElement.offsetLeft

    let walk = (x - this.startX) * 1.5;
    if(this.items){
      this.items.nativeElement.scrollLeft = this.scrollLeft - walk;
    }
    // console.log(this.scrollLeft,walk,this.scrollLeft - walk);
  }

  private get isDragged(){
    return this.mousePosition.downX != this.mousePosition.upX;
  }

}
