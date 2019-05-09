import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Rx from "rxjs";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const dataSource = [1, 2, 3, 4, 5, 6];

    const intervalFunction = () => {
        dataSource.pop();
    };

    const observable = Rx.Observable.create((observer) => {
      let x = 0;

      console.log('hello');
      // setInterval(() => observer.next(Math.random()), 1000);
      // setInterval(() => observer.next(x++), 1000);
      if (dataSource.length > 0) {
        setInterval(() => observer.next(intervalFunction()), 1000);
      } else {
        console.log("complete");
        observer.complete();
      }
      // observer.next(3);

    });

    // const observable = Rx.from([1,2,3,4]);

    // WITH OBSERVABLE

    // subscriber 1
    observable.subscribe((data) => {
      console.log(data); // 0.24957144215097515 (random number)
    });

    // subscriber 1
    observable.subscribe((data) => {
      console.log(data); // 0.24957144215097515 (random number)
    });


    // // WITH SUBJECT
    // const subject = new Rx.Subject();

    // // subscriber 1
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });

    // // subscriber 2
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });

    // observable.subscribe(subject);

  }

}
