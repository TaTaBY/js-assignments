'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
 function getRectangleArea(width, height) {
 	return width * height;
 }


/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
 function getCicleCircumference(radius) {
 	return 2 * Math.PI * radius;
 }

/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
 function getAverage(value1, value2) {
 	return  value1 + value2 == Infinity ? Number.MAX_VALUE : (value1 + value2) / 2;
 }

/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
 function getDistanceBetweenPoints(x1, y1, x2, y2) {
 	return  Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
 }

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
 function getLinearEquationRoot(a, b) {
 	return ((b > 0) || (b < 0)) ? (-b) / a : 0;
 }


/**
 * Returns an angle (in radians) between two vectors given by xi and yi, coordinates in Cartesian plane
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
 function getAngleBetweenVectors(x1, y1, x2, y2) {
 	var angle = Math.atan2(y2, x2) - Math.atan2(y1, x1);
 	if (angle < 0) angle += 2 * Math.PI;
 	return angle;

 }

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
 function getLastDigit(value) {
 	var lastone = value.toString().split('').pop();
 	return lastone;
 }


/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
 function parseNumberFromString(value) {
 	return +value;
 }

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
 function getParallelipidedDiagonal(a,b,c) {
 	return Math.sqrt(Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2));
 }

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *  
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
 function roundToPowerOfTen(num, pow) {
 	return (Math.round(num / Math.pow(10,pow))) * Math.pow(10,pow)
 }


/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 * 
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
 function isPrime(n) {
 	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 	if (n==leastFactor(n)) return true;
 	return false;

 }

function leastFactor(n){
 if (isNaN(n) || !isFinite(n)) return NaN;  
 if (n==0) return 0;  
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;  
 if (n%3==0) return 3;  
 if (n%5==0) return 5;  
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}

/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
 function toNumber(value, def) {
 	return (value === null || !Number.isInteger(+value)) ? def: value;
 }

 module.exports = {
 	getRectangleArea: getRectangleArea,
 	getCicleCircumference: getCicleCircumference,
 	getAverage: getAverage,
 	getDistanceBetweenPoints: getDistanceBetweenPoints,
 	getLinearEquationRoot: getLinearEquationRoot,
 	getAngleBetweenVectors: getAngleBetweenVectors,
 	getLastDigit: getLastDigit,
 	parseNumberFromString: parseNumberFromString,
 	getParallelipidedDiagonal: getParallelipidedDiagonal,
 	roundToPowerOfTen: roundToPowerOfTen,
 	isPrime: isPrime,
 	toNumber: toNumber
 };
