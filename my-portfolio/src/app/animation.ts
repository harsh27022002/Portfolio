import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideFadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0
      }),
    ], { optional: true }),
    group([
      query(':leave', [
        animate('400ms ease', style({ opacity: 0, transform: 'translateX(-40px)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(40px)', opacity: 0 }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ])
]);
