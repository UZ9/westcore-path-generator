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

        const tanForce = 3;

        const p0 = points[0];
        const p1 = points[1];

        const v0 = tangents[0];
        const v1 = tangents[1];

        const t2 = t * t;
        const t3 = t2 * t;
        const _2t3 = 2.0 * t3;
        const _3t2 = 3.0 * t2;

        const a = _2t3 - _3t2 + 1.0;
        const b = -_2t3 + _3t2;
        const c = t3 - 2.0 * t2 + t;
        const d = t3 - t2;

        const x = p0[0] * a + (p1[0] * b + tanForce * ((v0[0] - p0[0]) * c + (p1[0] - v1[0]) * d));
        const y = p0[1] * a + (p1[1] * b + tanForce * ((v0[1] - p0[1]) * c + (p1[1] - v1[1]) * d));

        // const n = points.length; // number or points / tangents / knots
        // const d = points[0].length; // vector dimensionality
        // const v = new Array(d); // destination vector

        // t = t * (n - 1); // rescale t to [0, n-1]
        // const i0 = t | 0; // truncate
        // let i1 = i0 + 1;

        // if (i0 > n - 1) throw new Error('out of bounds');
        // if (i0 === n - 1) i1 = i0;

        // const scale = i1 - i0;

        // t = (t - i0) / scale;

        // const t2 = t * t;
        // const it = 1 - t;
        // const it2 = it * it;
        // const tt = 2 * t;
        // const h00 = (1 + tt) * it2;
        // const h10 = t * it2;
        // const h01 = t2 * (3 - tt);
        // const h11 = t2 * (t - 1);

        // for (var i = 0; i < d; i++) {
        //     v[i] = h00 * points[i0][i] +
        //         h10 * tangents[i0][i] * scale +
        //         h01 * points[i1][i] +
        //         h11 * tangents[i1][i] * scale;
        // }

        return [x, y];

        // return v;
    }

}