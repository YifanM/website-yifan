import {trigger, state, animate, style, transition, query, group} from '@angular/animations';

const slideLeft = [
  query(':leave', style({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(0%)' })),
  query(':enter', style({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(-100%)' })),
  group([
    query(':leave',
      animate('0.3s', style({ transform: 'translateX(100%)' }))),
    query(':enter',
      animate('0.3s', style({ transform: 'translateX(0%)' })))
  ])
]

const slideRight = [
  query(':leave', style({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(0%)' })),
  query(':enter', style({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(100%)' })),
  group([
    query(':leave',
      animate('0.3s', style({ transform: 'translateX(-100%)' }))),
    query(':enter', 
      animate('0.3s', style({ transform: 'translateX(0%)' })))
  ])
]

export default trigger('routerAnimation', [
  transition('home => work', slideRight),
  transition('work => home', slideLeft),
  transition('home => documents', slideRight),
  transition('documents => home', slideLeft),
  transition('home => uw', slideRight),
  transition('uw => home', slideLeft),
  transition('work => documents', slideRight),
  transition('documents => work', slideLeft),
  transition('work => uw', slideRight),
  transition('uw => work', slideLeft),
  transition('documents => uw', slideRight),
  transition('uw => documents', slideLeft)
]);