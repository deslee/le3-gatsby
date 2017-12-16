import { css } from 'glamor';

export const unstyledLink = {
    color: 'inherit',
    textDecoration: 'none'
}

export const breakpoints = {
    notSmall: '@media screen and (min-width: 30em)',
    mediumAndUp: '@media screen and (min-width: 60em)',
    medium: '@media screen and (min-width: 30em) and (max-width: 60em)',
    large: '@media screen and (min-width: 60em) and (max-width: 90em)',
    xlarge: '@media screen and (min-width: 90em)'
}

export const contentAnimation = {
    animationName: css.keyframes({
        'from': {
            opacity: 0,
            transform: 'translate3d(0, 10px, 0)'
        },
        'to': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        }
    }),
    animationDuration: '.75s',
    animationFillMode: 'none', animationTimingFunction: 'ease ease'
}

export const socialIcons = {
  width: '2rem', 
  height: '2rem',
  color: '#555',
  opacity: '.95'
};