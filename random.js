// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
// Copyright (C) 2020 ~ Angelisium

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of  this  software and associated  documentation files  (the "Software"), to
// deal in the  Software without restriction,  including without limitation the
// rights to use, copy, modify, merge,  publish, distribute, sublicense, and/or
// sell copies of the Software,  and to  permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice  and  this  permission  notice shall  be  included  in  all copies or
// substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS",  WITHOUT WARRANTY  OF ANY KIND, EXPRESS OR
// IMPLIED,  INCLUDING  BUT  NOT  LIMITED TO THE WARRANTIES  OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE  AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS  OR  COPYRIGHT  HOLDERS BE LIABLE  FOR  ANY CLAIM,  DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN  CONNECTION WITH  THE SOFTWARE  OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const random = (function() {
    class Mash {
        constructor() {
            this.n = 0xefc8249d;
        }
        next(data) {
            let string_data = String(data).split(''),
                n = this.n;
            for(let char of string_data) {
                let h = 0.02519603282416938 * (n + char.charCodeAt());
                n = h >>> 0;
                h = (h - n) * n;
                n = h >>> 0;
                n = n + ((h - n) * 0x100000000); // 2^32
            }
            this.n = n;
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        }
    }

    function random() {
        return 4;
    }

    return random;
})();