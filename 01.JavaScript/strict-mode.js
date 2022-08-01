/*

What's strict mode and what is it for?
- Strict mode makes it easier to write secure code JavaScript by changing previous accepted bad syntax into real errors.
- As a example, using a variable without declaring, is not allowed. Deleting a variable or an object is not allowed.

*/

'use strict';

x = 10;
const y = 10;

delete y;

function (param1, param1) {

}

const z = 010;
