import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  seconds: number = 10;
  progress: number = 1000;
  timer = null;
  constructor() {}
  ngOnInit() {}

  roundProgress() {
    return Math.round(this.progress / 100);
  }
  start() {
    console.log("start");
    let self = this;
    this.progress = this.seconds * 100;
    this.timer = setInterval(function() {
      self.progress--;
      let percentage = Math.round(self.progress / self.seconds);
      self.progressBar.nativeElement.style.width = percentage + "%";
      if (self.progress <= 0) {
        self.finished();
      }
    }, 10);
  }
  stop() {
    console.log("stop");
    this.finished();
  }

  finished() {
    clearInterval(this.timer);
    console.log("Timer Finished");
  }

  @ViewChild("progressBar")
  progressBar: ElementRef;

  // updateProgress() {
  //   console.log(percentage);
  // }
}
