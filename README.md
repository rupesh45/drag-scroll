
# Simple Drag Scroll

For those who want a simple drag and scroll in their angular application




## Install



```bash
  npm i simple-drag-scroll
```
    
## Setup
You'll need to add DragScrollModule to your application module.

```javascript
import { DragScrollModule } from 'simple-drag-scroll';

...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DragScrollModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
```
Add the dragScroll attribute to a scrollable element:

```javascript
<dragScroll [gap]="'25px'">
  <div *ngFor="let image of images">
    <img style="height: 300px;width:500px" src="assets/{{image}}.jpg" alt="">
  </div>
</dragScroll>
```

```javascript
<dragScroll [gap]="'25px'">
      <img style="height: 300px;width:500px" src="assets/demo1.jpg" alt="">
      <img style="height: 300px;width:500px" src="assets/demo2.jpg" alt="">
      <img style="height: 300px;width:500px" src="assets/demo3.jpg" alt="">
      <img style="height: 300px;width:500px" src="assets/demo4.jpg" alt="">
      <img style="height: 300px;width:500px" src="assets/demo5.jpg" alt="">
</dragScroll>
```
## API Reference
**DragScrollComponent**

| Name | Type     | Description                | Default |
| :-------- | :------- | :------------------------- | :---- |
| `gap` | `@Input` | Gap between your elements |    0px


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rupesh-kadam-a04206165/)


