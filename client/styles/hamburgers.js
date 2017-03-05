import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
  'hamburger': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'display': 'inline-block',
    'cursor': 'pointer',
    'transitionProperty': 'opacity, filter',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'linear',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'textTransform': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'hamburger:hover': {
    'opacity': '0.7'
  },
  'hamburger-box': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'display': 'inline-block',
    'position': 'relative'
  },
  'hamburger-inner': {
    'display': 'block',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -2 }]
  },
  'hamburger-inner': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::before': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::after': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::before': {
    'content': '""',
    'display': 'block'
  },
  'hamburger-inner::after': {
    'content': '""',
    'display': 'block'
  },
  'hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': -10 }]
  },
  'hamburger-inner::after': {
    'bottom': [{ 'unit': 'px', 'value': -10 }]
  },
  // * Spring
  'hamburger--spring hamburger-inner': {
    'top': [{ 'unit': 'px', 'value': 2 }],
    'transition': 'background-color 0s 0.15s linear'
  },
  'hamburger--spring hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 10 }],
    'transition': 'top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transition': 'top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--springis-active hamburger-inner': {
    'transitionDelay': '0.32s',
    'backgroundColor': 'transparent'
  },
  'hamburger--springis-active hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)',
    'transform': 'translate3d(0, 10px, 0) rotate(45deg)'
  },
  'hamburger--springis-active hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)',
    'transform': 'translate3d(0, 10px, 0) rotate(-45deg)'
  },
  // * Spring Reverse
  'hamburger--spring-r hamburger-inner': {
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'transitionDuration': '0.15s',
    'transitionDelay': '0s',
    'transitionTimingFunction': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring-r hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': -20 }],
    'transition': 'top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear'
  },
  'hamburger--spring-r hamburger-inner::before': {
    'transition': 'top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring-ris-active hamburger-inner': {
    'transform': 'translate3d(0, -10px, 0) rotate(-45deg)',
    'transitionDelay': '0.32s',
    'transitionTimingFunction': 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  },
  'hamburger--spring-ris-active hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'transition': 'top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.32s linear'
  },
  'hamburger--spring-ris-active hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'rotate(90deg)',
    'transition': 'top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)'
  }
});
