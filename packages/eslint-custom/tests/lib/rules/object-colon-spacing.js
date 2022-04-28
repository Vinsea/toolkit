/**
 * @fileoverview 冒号后面需要有空格
 * @author Vinsea
 */
// eslint-disable-next-line strict
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/object-colon-spacing');

const RuleTester = require('eslint').RuleTester;


// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const testCode = `var person = { 
    age: 18,
    name: {
        first: 'Vinsea', 
        last: 'Li'
    } 
}`;

const textErrCode1 = `var person = { 
    age    : 18,
    name: {
        first: 'Vinsea', 
        last: 'Li'
    } 
}`;

const textErrCode2 = `var person = { 
    age: 18,
    name:{
        first: 'Vinsea', 
        last: 'Li'
    } 
}`;

const textErrCode3 = `var person = { 
    age:          18,
    name: {
        first: 'Vinsea', 
        last: 'Li'
    } 
}`;

const ruleTester = new RuleTester();

ruleTester.run('object-colon-spacing', rule, {

    valid: [
        {
            code: testCode
        }
    ],

    invalid: [
        {
            code: textErrCode1,
            errors: [{
                message: '冒号前面不能有空格',
                type: 'Property'
            }],
            output: testCode
        },
        {
            code: textErrCode2,
            errors: [{
                message: '冒号后应该有一个空格',
                type: 'Property'
            }],
            output: testCode
        },
        {
            code: textErrCode3,
            errors: [{
                message: '冒号后面应该只能有一个空格',
                type: 'Property'
            }],
            output: testCode
        }
    ]
});
