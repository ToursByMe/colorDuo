/* export const decodedValue = (resistor) => {
  const number = resistor.reduce((acc, color, index) => {
    if(index < 2) {
      acc += colors.indexOf(color)
    }
    return acc
  }, '')
  return Number(number)
};

export const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']; */
 /******************************************************************/
 /*export const COLORS = {};
   COLORS['black'] = 0;
  COLORS['brown'  ] = 1;
  COLORS['red'    ] = 2;
  COLORS['orange' ] = 3;
  COLORS['yellow' ] = 4 ;
  COLORS['green'  ] = 5;
  COLORS['blue'   ] = 6 ;
  COLORS['violet' ] = 7 ;
  COLORS['grey'   ] = 8;
  COLORS['white'  ] = 9 ; */



/* export const decodedValue = (colors) => {
  //declaration of new [] to storage info
  let colorVal = '';
  //iteration and loop for more than one element as parameter
  //seting two as the limits of the parameters
  for (let i = 0; i < 2; i++){
   // insertion into the new []of the parameters
   //colorVal.push(COLORS.indexOf(colors[i]));
    colorVal = colorVal + COLORS[colors[i]];
   //console.log(colorVal);
  }
  //returns a string as I use the join method, damm it!
  //let order = (colorVal.join(''));
  //transform string to number
  return parseInt(colorVal);
 }; */
 
/*******************************************************************/
/* 
 export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];


export const decodedValue = (colors) => {
 //declaration of new [] to storage info
 let colorVal = [];
 //iteration and loop for more than one element as parameter
 //seting two as the limits of the parameters
 for (let i = 0; i < 2; i++){
  // insertion into the new []of the parameters
  colorVal.push(COLORS.indexOf(colors[i]));
 }
 //returns a string as I use the join method, damm it!
 let order = (colorVal.join(''));
 //transform string to number
 return parseInt(order);
}; */
/******************************************************************************/
/* export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors) => {
 let colorVal = [];
 for (let i = 0; i < 2; i++){
  colorVal.push(COLORS.indexOf(colors[i]));
 }
 let order = (colorVal.join(''));
 return Number(order);
}; */
/***************************************************************************/
/* export const COLORS = {
  'black' : 0,
  'brown' : 1,
  'red' : 2,
  'orange' : 3,
  'yellow' : 4,
  'green' : 5,
  'blue' : 6,
  'violet' : 7,
  'grey' : 8,
  'white' : 9,
};
export const decodedValue = (colors) => {
let colorVal = 0;
for (let i = 0; i < 2; i++){
 // colorVal = colorVal + COLORS[colors[i]] * Math.pow(10, (colors.length - 1) - i);
  colorVal = colorVal + COLORS[colors[i]] * Math.pow(10, 1 - i);
}
return colorVal;
}; */
/****************************************************************************/

//Have you seen that the input is an array?

/* export const COLORS = {
  'black'  : 0,
  'brown'  : 1,
  'red'    : 2,
  'orange' : 3,
  'yellow' : 4,
  'green'  : 5,
  'blue'   : 6,
  'violet' : 7,
  'grey'   : 8,
  'white'  : 9
};

export const decodedValue = ([code1, code2]) => {

  const code1 = arr[0];
  const code2 = arr[1];

  return Number(`${COLORS[code1]}${COLORS[code2]}`);

  }; */

  /*******************************************************************************************/

 /*  export const COLORS = {
    'black'  : 0,
    'brown'  : 1,
    'red'    : 2,
    'orange' : 3,
    'yellow' : 4,
    'green'  : 5,
    'blue'   : 6,
    'violet' : 7,
    'grey'   : 8,
    'white'  : 9
  };
  
  export const decodedValue = ([code1, code2]) => {return Number(`${COLORS[code1]}${COLORS[code2]}`);}; */
  /*************************************************************************/

/* // Have you seen that the input is an array?
  import {COLORS} from '../resistor-color/resistor-color';
  export const decodedValue = colors =>  Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`); */
/**************************************************************************************************/

/*   import {COLORS} from '../resistor-color/resistor-color';
 
  export const decodedValue = colors => {
    let result = ''; 
    for(let i=0; i<2; i++) 
      result += COLORS.indexOf(colors[i]);
    return Number (result);
  } */

  /*********************************************************************************************/
  /* import {COLORS} from '../resistor-color/resistor-color';
  export const decodedValue = colors => 
  colors
    .slice(0, 2)     // take only first 2 elements
    .map(COLORS)  // map each color to its code
    .join('');       // concatenate all codes */

/************************************************************************************************ */
/* import {COLORS} from '../resistor-color/resistor-color';
export const decodedValue = (colors) => {
  return Number (colors.slice(0, 2)
      .reduce((result, color) => result + COLORS.indexOf(color), ''));
};

import {COLORS} from '../resistor-color/resistor-color';

export const decodedValue = (colors) => {
  return +colors.slice(0, 2)
      .reduce((result, color) => result + COLORS.indexOf(color), '');
}; */
/********************************************************************************************/
/*   import {COLORS} from '../resistor-color/resistor-color';
  export const decodedValue = colors => 
 Number(colors.map(color => COLORS.indexOf(color)).join('').slice(0, 2)); */

 /********************************************************************************************** */
  /* import {COLORS} from '../resistor-color/resistor-color';
  export const decodedValue = colors => +colors.map(color => COLORS.indexOf(color)).join('').slice(0, 2);  */
  /**************************************************************************************** */
  /* 
  import {colorCode} from '../resistor-color/resistor-color';

  export const decodedValue = colors => {
    let result = ''; 
    for(let i=0; i<2; i++) 
      result += colorCode(colors[i]);
    return Number (result);
  }; 

  export const decodedValue = colors => 
   Number (colors
    .slice(0, 2)     // take only first 2 elements
    .map(colorCode)  // map each color to its code
    .join('')); */

  /********************************************************************************************* */

  import {colorCode} from '../resistor-color/resistor-color';
  export const decodedValue = colors => Number(colors.slice(0, 2).map(color => colorCode(color)).join(''));

  

  