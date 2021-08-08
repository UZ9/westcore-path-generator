// The MIT License (MIT)
//
// Copyright (c) 2015 Thibaut Séguy <thibaut.seguy@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Author (Yerti)'s Note: While the majority of the code for cubic hermite splines 
// has been directly taken from the repository, significant changes were made to better 
// integrate with THREE.js, including a better structure and the switch from array-based positions to 
// THREE.Vector2. 
export class CubicHermiteSpline {
    constructor(points, tangents) {
        this.points = points;
        this.tangents = tangents;
    }

    getPoints(count) {
        const interpolatedPoints = [];

        const increment = (1 / count);

        for (let i = 0; i < 1; i += increment) {
            interpolatedPoints.push(this.getPointAtTime(i));
        }

        return interpolatedPoints;
    }

    getPointAtTime(t) {
        const points = this.points;
        const tangents = this.tangents;

        const n = points.length; // number or points / tangents / knots
        const d = points[0].length; // vector dimensionality
        const v = new Array(d); // destination vector

        t = t * (n - 1); // rescale t to [0, n-1]
        const i0 = t | 0; // truncate
        let i1 = i0 + 1;

        if (i0 > n - 1) throw new Error('out of bounds');
        if (i0 === n - 1) i1 = i0;

        const scale = i1 - i0;

        t = (t - i0) / scale;

        const t2 = t * t;
        const it = 1 - t;
        const it2 = it * it;
        const tt = 2 * t;
        const h00 = (1 + tt) * it2;
        const h10 = t * it2;
        const h01 = t2 * (3 - tt);
        const h11 = t2 * (t - 1);

        for (var i = 0; i < d; i++) {
            v[i] = h00 * points[i0][i] +
                h10 * tangents[i0][i] * scale +
                h01 * points[i1][i] +
                h11 * tangents[i1][i] * scale;
        }

        return v;
    }

}