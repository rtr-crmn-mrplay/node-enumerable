// The MIT License (MIT)
// 
// node-enumerable (https://github.com/mkloubert/node-enumerable)
// Copyright (c) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

import Assert = require('assert');
import Enumerable = require('../../');
import Helpers = require('../helpers');

const MAX_ARRAY_SIZE = 100;

Helpers.execute(
    'Testing numbers...',
    (ctx) => {
        for (let i = 0; i < MAX_ARRAY_SIZE; i++) {
            if (0 === i % 10) {
                ctx.log(`Testing with ${i} elements...`);
            }

            // fill test array
            let arr: any[] = [];
            for (let j = 0; j < i; j++) {
                arr.push(j);
            }

            for (let j = 0; j < 10; j++) {
                let seq = Enumerable.from(arr)
                                    .skipWhile((x) => x < j);

                let actual: any[] = [];
                for (let item of seq) {
                    actual.push(item);
                }

                let expectedLength = Math.max(arr.length - j, 0);

                Assert.equal(actual.length, expectedLength);
                Assert.strictEqual(actual.length, expectedLength);
                Assert.equal('' + actual.length, expectedLength);
                Assert.equal(actual.length, '' + expectedLength);
                Assert.equal('' + actual.length, '' + expectedLength);
                Assert.strictEqual('' + actual.length, '' + expectedLength);
            }
        }
    });
