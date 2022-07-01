/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var incrmidrange = require( '@stdlib/stats-incr-midrange' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Computes the mid-range of all iterated values.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator
* @returns {(number|null)} mid-range
*
* @example
* var runif = require( '@stdlib/random-iter-uniform' );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var v = itermidrange( rand );
* // returns <number>
*/
function itermidrange( iterator ) {
	var acc;
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( '0fI49', iterator ) );
	}
	acc = incrmidrange();
	while ( true ) {
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		if ( typeof v.value === 'number' ) {
			acc( v.value );
		} else {
			acc( NaN );
		}
	}
	return acc();
}


// EXPORTS //

module.exports = itermidrange;