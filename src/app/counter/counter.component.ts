import { Component } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  seconds: number = 10;
  progress: number = null;
  timer: null;
  constructor() {}
  ngOnInit() {}

  start() {
    console.log("start");
    this.seconds--;
    //    this.progress = this.seconds;
  }
  stop() {
    console.log("stop");
    this.seconds++;
    //    this.progress = this.seconds;
  }

  // updateProgress() {
  //   let percentage = Math.round(this.seconds / this.progress);
  //   console.log(percentage);
  // }
}
