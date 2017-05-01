import { HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AnimationService {

  emitCurrentDirection: EventEmitter<Object> = new EventEmitter<Object>();
  routing: string;

  constructor(private router:Router) {}

  animationDirection() {
      return this.routing;
  }

  routingService(direction, nextRoute) {
      this.routing = direction;
      this.emitCurrentDirection.emit(this.routing);
      setTimeout(()=>{
          this.router.navigateByUrl(nextRoute)
      });
  }
}
