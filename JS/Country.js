/**
 * Created by Sallar Kaboli <sallar.kaboli@gmail.com>
 * License: WTFL <http://www.wtfpl.net>
 * ---
 * http://sallar.me
 */
/**--A Pen created at CodePen.io. You can find this one at http://codepen.io/tuckpuck/pen/gMpMBR. Forked from [Nicholas Petersen](http://codepen.io/nicholaspetersen/)'s Pen [NPejZZ](http://codepen.io/nicholaspetersen/pen/NPejZZ/).-->

          <!--
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->*/
//part 1 - https://s3-us-west-2.amazonaws.com/s.cdpn.io/35376/d3.v3.min.js//
d3 = function () {
    function n(n) {
        return null != n && !isNaN(n)
    }

    function t(n) {
        return n.length
    }

    function e(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function r(n, t) {
        try {
            for (var e in t) Object.defineProperty(n.prototype, e, {
                value: t[e]
                , enumerable: !1
            })
        }
        catch (r) {
            n.prototype = t
        }
    }

    function i() {}

    function u() {}

    function a(n, t, e) {
        return function () {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function o(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var e = 0, r = Ca.length; r > e; ++e) {
            var i = Ca[e] + t;
            if (i in n) return i
        }
    }

    function c(n) {
        for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
        return e
    }

    function l(n) {
        return Array.prototype.slice.call(n)
    }

    function s() {}

    function f() {}

    function h(n) {
        function t() {
            for (var t, r = e, i = -1, u = r.length; ++i < u;)(t = r[i].on) && t.apply(this, arguments);
            return n
        }
        var e = []
            , r = new i;
        return t.on = function (t, i) {
            var u, a = r.get(t);
            return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, u = e.indexOf(a)).concat(e.slice(u + 1)), r.remove(t)), i && e.push(r.set(t, {
                on: i
            })), n)
        }, t
    }

    function g() {
        ya.event.preventDefault()
    }

    function p() {
        for (var n, t = ya.event; n = t.sourceEvent;) t = n;
        return t
    }

    function m(n) {
        for (var t = new f, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = h(t);
        return t.of = function (e, r) {
            return function (i) {
                try {
                    var u = i.sourceEvent = ya.event;
                    i.target = n, ya.event = i, t[i.type].apply(e, r)
                }
                finally {
                    ya.event = u
                }
            }
        }, t
    }

    function d(n) {
        return La(n, Ya), n
    }

    function v(n) {
        return "function" == typeof n ? n : function () {
            return Ha(n, this)
        }
    }

    function y(n) {
        return "function" == typeof n ? n : function () {
            return Fa(n, this)
        }
    }

    function M(n, t) {
        function e() {
            this.removeAttribute(n)
        }

        function r() {
            this.removeAttributeNS(n.space, n.local)
        }

        function i() {
            this.setAttribute(n, t)
        }

        function u() {
            this.setAttributeNS(n.space, n.local, t)
        }

        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }

        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = ya.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? o : a : n.local ? u : i
    }

    function x(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function b(n) {
        return new RegExp("(?:^|\\s+)" + ya.requote(n) + "(?:\\s+|$)", "g")
    }

    function _(n, t) {
        function e() {
            for (var e = -1; ++e < i;) n[e](this, t)
        }

        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < i;) n[e](this, r)
        }
        n = n.trim().split(/\s+/).map(w);
        var i = n.length;
        return "function" == typeof t ? r : e
    }

    function w(n) {
        var t = b(n);
        return function (e, r) {
            if (i = e.classList) return r ? i.add(n) : i.remove(n);
            var i = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", x(i + " " + n))) : e.setAttribute("class", x(i.replace(t, " ")))
        }
    }

    function S(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function i() {
            this.style.setProperty(n, t, e)
        }

        function u() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null == t ? r : "function" == typeof t ? u : i
    }

    function E(n, t) {
        function e() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function i() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e
        }
        return null == t ? e : "function" == typeof t ? i : r
    }

    function k(n) {
        return "function" == typeof n ? n : (n = ya.ns.qualify(n)).local ? function () {
            return Ma.createElementNS(n.space, n.local)
        } : function () {
            return Ma.createElementNS(this.namespaceURI, n)
        }
    }

    function A(n) {
        return {
            __data__: n
        }
    }

    function N(n) {
        return function () {
            return Oa(this, n)
        }
    }

    function q(n) {
        return arguments.length || (n = ya.ascending)
            , function (t, e) {
                return t && e ? n(t.__data__, e.__data__) : !t - !e
            }
    }

    function T(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var i, u = n[e], a = 0, o = u.length; o > a; a++)(i = u[a]) && t(i, a, e);
        return n
    }

    function C(n) {
        return La(n, Ua), n
    }

    function z(n) {
        var t, e;
        return function (r, i, u) {
            var a, o = n[u].update
                , c = o.length;
            for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(a = o[t]) && ++t < c;);
            return a
        }
    }

    function D(n, t, e) {
        function r() {
            var t = this[a];
            t && (this.removeEventListener(n, t, t.$), delete this[a])
        }

        function i() {
            var i = c(t, za(arguments));
            r.call(this), this.addEventListener(n, this[a] = i, i.$ = e), i._ = t
        }

        function u() {
            var t, e = new RegExp("^__on([^.]+)" + ya.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var i = this[r];
                    this.removeEventListener(t[1], i, i.$), delete this[r]
                }
        }
        var a = "__on" + n
            , o = n.indexOf(".")
            , c = j;
        o > 0 && (n = n.substring(0, o));
        var l = Va.get(n);
        return l && (n = l, c = L), o ? t ? i : r : t ? s : u
    }

    function j(n, t) {
        return function (e) {
            var r = ya.event;
            ya.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t)
            }
            finally {
                ya.event = r
            }
        }
    }

    function L(n, t) {
        var e = j(n, t);
        return function (n) {
            var t = this
                , r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }

    function H() {
        var n = ".dragsuppress-" + ++Za
            , t = "touchmove" + n
            , e = "selectstart" + n
            , r = "dragstart" + n
            , i = "click" + n
            , u = ya.select(ba).on(t, g).on(e, g).on(r, g)
            , a = xa.style
            , o = a[Xa];
        return a[Xa] = "none"
            , function (t) {
                function e() {
                    u.on(i, null)
                }
                u.on(n, null), a[Xa] = o, t && (u.on(i, function () {
                    g(), e()
                }, !0), setTimeout(e, 0))
            }
    }

    function F(n, t) {
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > Ba && (ba.scrollX || ba.scrollY)) {
                e = ya.select("body").append("svg").style({
                    position: "absolute"
                    , top: 0
                    , left: 0
                    , margin: 0
                    , padding: 0
                    , border: "none"
                }, "important");
                var i = e[0][0].getScreenCTM();
                Ba = !(i.f || i.e), e.remove()
            }
            return Ba ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = n.getBoundingClientRect();
        return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop]
    }

    function P() {}

    function O(n, t, e) {
        return new Y(n, t, e)
    }

    function Y(n, t, e) {
        this.h = n, this.s = t, this.l = e
    }

    function R(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? u + (a - u) * n / 60 : 180 > n ? a : 240 > n ? u + (a - u) * (240 - n) / 60 : u
        }

        function i(n) {
            return Math.round(255 * r(n))
        }
        var u, a;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + t) : e + t - e * t, u = 2 * e - a, at(i(n + 120), i(n), i(n - 120))
    }

    function U(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function I(n) {
        return n > 1 ? 0 : -1 > n ? Ka : Math.acos(n)
    }

    function V(n) {
        return n > 1 ? Ka / 2 : -1 > n ? -Ka / 2 : Math.asin(n)
    }

    function X(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2
    }

    function Z(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2
    }

    function B(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function $(n, t, e) {
        return new W(n, t, e)
    }

    function W(n, t, e) {
        this.h = n, this.c = t, this.l = e
    }

    function J(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), G(e, Math.cos(n *= to) * t, Math.sin(n) * t)
    }

    function G(n, t, e) {
        return new K(n, t, e)
    }

    function K(n, t, e) {
        this.l = n, this.a = t, this.b = e
    }

    function Q(n, t, e) {
        var r = (n + 16) / 116
            , i = r + t / 500
            , u = r - e / 200;
        return i = tt(i) * uo, r = tt(r) * ao, u = tt(u) * oo, at(rt(3.2404542 * i - 1.5371385 * r - .4985314 * u), rt(-.969266 * i + 1.8760108 * r + .041556 * u), rt(.0556434 * i - .2040259 * r + 1.0572252 * u))
    }

    function nt(n, t, e) {
        return n > 0 ? $(Math.atan2(e, t) * eo, Math.sqrt(t * t + e * e), n) : $(0 / 0, 0 / 0, n)
    }

    function tt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function et(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function rt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function it(n) {
        return at(n >> 16, 255 & n >> 8, 255 & n)
    }

    function ut(n) {
        return it(n) + ""
    }

    function at(n, t, e) {
        return new ot(n, t, e)
    }

    function ot(n, t, e) {
        this.r = n, this.g = t, this.b = e
    }

    function ct(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function lt(n, t, e) {
        var r, i, u, a = 0
            , o = 0
            , c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (i = r[2].split(","), r[1]) {
        case "hsl":
            return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
        case "rgb":
            return t(gt(i[0]), gt(i[1]), gt(i[2]))
        }
        return (u = so.get(n)) ? t(u.r, u.g, u.b) : (null != n && "#" === n.charAt(0) && (4 === n.length ? (a = n.charAt(1), a += a, o = n.charAt(2), o += o, c = n.charAt(3), c += c) : 7 === n.length && (a = n.substring(1, 3), o = n.substring(3, 5), c = n.substring(5, 7)), a = parseInt(a, 16), o = parseInt(o, 16), c = parseInt(c, 16)), t(a, o, c))
    }

    function st(n, t, e) {
        var r, i, u = Math.min(n /= 255, t /= 255, e /= 255)
            , a = Math.max(n, t, e)
            , o = a - u
            , c = (a + u) / 2;
        return o ? (i = .5 > c ? o / (a + u) : o / (2 - a - u), r = n == a ? (t - e) / o + (e > t ? 6 : 0) : t == a ? (e - n) / o + 2 : (n - t) / o + 4, r *= 60) : (r = 0 / 0, i = c > 0 && 1 > c ? 0 : r), O(r, i, c)
    }

    function ft(n, t, e) {
        n = ht(n), t = ht(t), e = ht(e);
        var r = et((.4124564 * n + .3575761 * t + .1804375 * e) / uo)
            , i = et((.2126729 * n + .7151522 * t + .072175 * e) / ao)
            , u = et((.0193339 * n + .119192 * t + .9503041 * e) / oo);
        return G(116 * i - 16, 500 * (r - i), 200 * (i - u))
    }

    function ht(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function gt(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function pt(n) {
        return "function" == typeof n ? n : function () {
            return n
        }
    }

    function mt(n) {
        return n
    }

    function dt(n) {
        return function (t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), vt(t, e, n, r)
        }
    }

    function vt(n, t, e, r) {
        function i() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(u, c)
                }
                catch (r) {
                    return a.error.call(u, r), void 0
                }
                a.load.call(u, n)
            }
            else a.error.call(u, c)
        }
        var u = {}
            , a = ya.dispatch("progress", "load", "error")
            , o = {}
            , c = new XMLHttpRequest
            , l = null;
        return !ba.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = i : c.onreadystatechange = function () {
            c.readyState > 3 && i()
        }, c.onprogress = function (n) {
            var t = ya.event;
            ya.event = n;
            try {
                a.progress.call(u, c)
            }
            finally {
                ya.event = t
            }
        }, u.header = function (n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? o[n] : (null == t ? delete o[n] : o[n] = t + "", u)
        }, u.mimeType = function (n) {
            return arguments.length ? (t = null == n ? null : n + "", u) : t
        }, u.responseType = function (n) {
            return arguments.length ? (l = n, u) : l
        }, u.response = function (n) {
            return e = n, u
        }, ["get", "post"].forEach(function (n) {
            u[n] = function () {
                return u.send.apply(u, [n].concat(za(arguments)))
            }
        }), u.send = function (e, r, i) {
            if (2 === arguments.length && "function" == typeof r && (i = r, r = null), c.open(e, n, !0), null == t || "accept" in o || (o.accept = t + ",*/*"), c.setRequestHeader)
                for (var a in o) c.setRequestHeader(a, o[a]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != i && u.on("error", i).on("load", function (n) {
                i(null, n)
            }), c.send(null == r ? null : r), u
        }, u.abort = function () {
            return c.abort(), u
        }, ya.rebind(u, a, "on"), null == r ? u : u.get(yt(r))
    }

    function yt(n) {
        return 1 === n.length ? function (t, e) {
            n(null == t ? e : null)
        } : n
    }

    function Mt() {
        var n = bt()
            , t = _t() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(po), po = setTimeout(Mt, t)), go = 0) : (go = 1, vo(Mt))
    }

    function xt(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now()), mo.callback = n, mo.time = e + t
    }

    function bt() {
        var n = Date.now();
        for (mo = fo; mo;) n >= mo.time && (mo.flush = mo.callback(n - mo.time)), mo = mo.next;
        return n
    }

    function _t() {
        for (var n, t = fo, e = 1 / 0; t;) t.flush ? t = n ? n.next = t.next : fo = t.next : (t.time < e && (e = t.time), t = (n = t).next);
        return ho = n, e
    }

    function wt(n, t) {
        var e = Math.pow(10, 3 * Math.abs(8 - t));
        return {
            scale: t > 8 ? function (n) {
                return n / e
            } : function (n) {
                return n * e
            }
            , symbol: n
        }
    }

    function St(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function Et(n) {
        return n + ""
    }

    function kt() {}

    function At(n, t, e) {
        var r = e.s = n + t
            , i = r - n
            , u = r - i;
        e.t = n - u + (t - i)
    }

    function Nt(n, t) {
        n && qo.hasOwnProperty(n.type) && qo[n.type](n, t)
    }

    function qt(n, t, e) {
        var r, i = -1
            , u = n.length - e;
        for (t.lineStart(); ++i < u;) r = n[i], t.point(r[0], r[1]);
        t.lineEnd()
    }

    function Tt(n, t) {
        var e = -1
            , r = n.length;
        for (t.polygonStart(); ++e < r;) qt(n[e], t, 1);
        t.polygonEnd()
    }

    function Ct() {
        function n(n, t) {
            n *= to, t = t * to / 2 + Ka / 4;
            var e = n - r
                , a = Math.cos(t)
                , o = Math.sin(t)
                , c = u * o
                , l = i * a + c * Math.cos(e)
                , s = c * Math.sin(e);
            Co.add(Math.atan2(s, l)), r = n, i = a, u = o
        }
        var t, e, r, i, u;
        zo.point = function (a, o) {
            zo.point = n, r = (t = a) * to, i = Math.cos(o = (e = o) * to / 2 + Ka / 4), u = Math.sin(o)
        }, zo.lineEnd = function () {
            n(t, e)
        }
    }

    function zt(n) {
        var t = n[0]
            , e = n[1]
            , r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }

    function Dt(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function jt(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function Lt(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }

    function Ht(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function Ft(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t
    }

    function Pt(n) {
        return [Math.atan2(n[1], n[0]), V(n[2])]
    }

    function Ot(n, t) {
        return Math.abs(n[0] - t[0]) < Qa && Math.abs(n[1] - t[1]) < Qa
    }

    function Yt(n, t) {
        n *= to;
        var e = Math.cos(t *= to);
        Rt(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }

    function Rt(n, t, e) {
        ++Do, Lo += (n - Lo) / Do, Ho += (t - Ho) / Do, Fo += (e - Fo) / Do
    }

    function Ut() {
        function n(n, i) {
            n *= to;
            var u = Math.cos(i *= to)
                , a = u * Math.cos(n)
                , o = u * Math.sin(n)
                , c = Math.sin(i)
                , l = Math.atan2(Math.sqrt((l = e * c - r * o) * l + (l = r * a - t * c) * l + (l = t * o - e * a) * l), t * a + e * o + r * c);
            jo += l, Po += l * (t + (t = a)), Oo += l * (e + (e = o)), Yo += l * (r + (r = c)), Rt(t, e, r)
        }
        var t, e, r;
        Vo.point = function (i, u) {
            i *= to;
            var a = Math.cos(u *= to);
            t = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(u), Vo.point = n, Rt(t, e, r)
        }
    }

    function It() {
        Vo.point = Yt
    }

    function Vt() {
        function n(n, t) {
            n *= to;
            var e = Math.cos(t *= to)
                , a = e * Math.cos(n)
                , o = e * Math.sin(n)
                , c = Math.sin(t)
                , l = i * c - u * o
                , s = u * a - r * c
                , f = r * o - i * a
                , h = Math.sqrt(l * l + s * s + f * f)
                , g = r * a + i * o + u * c
                , p = h && -I(g) / h
                , m = Math.atan2(h, g);
            Ro += p * l, Uo += p * s, Io += p * f, jo += m, Po += m * (r + (r = a)), Oo += m * (i + (i = o)), Yo += m * (u + (u = c)), Rt(r, i, u)
        }
        var t, e, r, i, u;
        Vo.point = function (a, o) {
            t = a, e = o, Vo.point = n, a *= to;
            var c = Math.cos(o *= to);
            r = c * Math.cos(a), i = c * Math.sin(a), u = Math.sin(o), Rt(r, i, u)
        }, Vo.lineEnd = function () {
            n(t, e), Vo.lineEnd = It, Vo.point = Yt
        }
    }

    function Xt() {
        return !0
    }

    function Zt(n, t, e, r, i) {
        var u = []
            , a = [];
        if (n.forEach(function (n) {
                if (!((t = n.length - 1) <= 0)) {
                    var t, e = n[0]
                        , r = n[t];
                    if (Ot(e, r)) {
                        i.lineStart();
                        for (var o = 0; t > o; ++o) i.point((e = n[o])[0], e[1]);
                        return i.lineEnd(), void 0
                    }
                    var c = {
                            point: e
                            , points: n
                            , other: null
                            , visited: !1
                            , entry: !0
                            , subject: !0
                        }
                        , l = {
                            point: e
                            , points: [e]
                            , other: c
                            , visited: !1
                            , entry: !1
                            , subject: !1
                        };
                    c.other = l, u.push(c), a.push(l), c = {
                        point: r
                        , points: [r]
                        , other: null
                        , visited: !1
                        , entry: !1
                        , subject: !0
                    }, l = {
                        point: r
                        , points: [r]
                        , other: c
                        , visited: !1
                        , entry: !0
                        , subject: !1
                    }, c.other = l, u.push(c), a.push(l)
                }
            }), a.sort(t), Bt(u), Bt(a), u.length) {
            if (e)
                for (var o = 1, c = !e(a[0].point), l = a.length; l > o; ++o) a[o].entry = c = !c;
            for (var s, f, h, g = u[0];;) {
                for (s = g; s.visited;)
                    if ((s = s.next) === g) return;
                f = s.points, i.lineStart();
                do {
                    if (s.visited = s.other.visited = !0, s.entry) {
                        if (s.subject)
                            for (var o = 0; o < f.length; o++) i.point((h = f[o])[0], h[1]);
                        else r(s.point, s.next.point, 1, i);
                        s = s.next
                    }
                    else {
                        if (s.subject) {
                            f = s.prev.points;
                            for (var o = f.length; --o >= 0;) i.point((h = f[o])[0], h[1])
                        }
                        else r(s.point, s.prev.point, -1, i);
                        s = s.prev
                    }
                    s = s.other, f = s.points
                } while (!s.visited);
                i.lineEnd()
            }
        }
    }

    function Bt(n) {
        if (t = n.length) {
            for (var t, e, r = 0, i = n[0]; ++r < t;) i.next = e = n[r], e.prev = i, i = e;
            i.next = e = n[0], e.prev = i
        }
    }

    function $t(n, t, e, r) {
        return function (i) {
            function u(t, e) {
                n(t, e) && i.point(t, e)
            }

            function a(n, t) {
                m.point(n, t)
            }

            function o() {
                d.point = a, m.lineStart()
            }

            function c() {
                d.point = u, m.lineEnd()
            }

            function l(n, t) {
                y.point(n, t), p.push([n, t])
            }

            function s() {
                y.lineStart(), p = []
            }

            function f() {
                l(p[0][0], p[0][1]), y.lineEnd();
                var n, t = y.clean()
                    , e = v.buffer()
                    , r = e.length;
                if (p.pop(), g.push(p), p = null, r) {
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1
                            , a = -1;
                        for (i.lineStart(); ++a < r;) i.point((u = n[a])[0], u[1]);
                        return i.lineEnd(), void 0
                    }
                    r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), h.push(e.filter(Wt))
                }
            }
            var h, g, p, m = t(i)
                , d = {
                    point: u
                    , lineStart: o
                    , lineEnd: c
                    , polygonStart: function () {
                        d.point = l, d.lineStart = s, d.lineEnd = f, h = [], g = [], i.polygonStart()
                    }
                    , polygonEnd: function () {
                        d.point = u, d.lineStart = o, d.lineEnd = c, h = ya.merge(h), h.length ? Zt(h, Gt, null, e, i) : r(g) && (i.lineStart(), e(null, null, 1, i), i.lineEnd()), i.polygonEnd(), h = g = null
                    }
                    , sphere: function () {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                    }
                }
                , v = Jt()
                , y = t(v);
            return d
        }
    }

    function Wt(n) {
        return n.length > 1
    }

    function Jt() {
        var n, t = [];
        return {
            lineStart: function () {
                t.push(n = [])
            }
            , point: function (t, e) {
                n.push([t, e])
            }
            , lineEnd: s
            , buffer: function () {
                var e = t;
                return t = [], n = null, e
            }
            , rejoin: function () {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }

    function Gt(n, t) {
        return ((n = n.point)[0] < 0 ? n[1] - Ka / 2 - Qa : Ka / 2 - n[1]) - ((t = t.point)[0] < 0 ? t[1] - Ka / 2 - Qa : Ka / 2 - t[1])
    }

    function Kt(n, t) {
        var e = n[0]
            , r = n[1]
            , i = [Math.sin(e), -Math.cos(e), 0]
            , u = 0
            , a = !1
            , o = !1
            , c = 0;
        Co.reset();
        for (var l = 0, s = t.length; s > l; ++l) {
            var f = t[l]
                , h = f.length;
            if (h) {
                for (var g = f[0], p = g[0], m = g[1] / 2 + Ka / 4, d = Math.sin(m), v = Math.cos(m), y = 1;;) {
                    y === h && (y = 0), n = f[y];
                    var M = n[0]
                        , x = n[1] / 2 + Ka / 4
                        , b = Math.sin(x)
                        , _ = Math.cos(x)
                        , w = M - p
                        , S = Math.abs(w) > Ka
                        , E = d * b;
                    if (Co.add(Math.atan2(E * Math.sin(w), v * _ + E * Math.cos(w))), Math.abs(x) < Qa && (o = !0), u += S ? w + (w >= 0 ? 2 : -2) * Ka : w, S ^ p >= e ^ M >= e) {
                        var k = jt(zt(g), zt(n));
                        Ft(k);
                        var A = jt(i, k);
                        Ft(A);
                        var N = (S ^ w >= 0 ? -1 : 1) * V(A[2]);
                        r > N && (c += S ^ w >= 0 ? 1 : -1)
                    }
                    if (!y++) break;
                    p = M, d = b, v = _, g = n
                }
                Math.abs(u) > Qa && (a = !0)
            }
        }
        return (!o && !a && 0 > Co || -Qa > u) ^ 1 & c
    }

    function Qt(n) {
        var t, e = 0 / 0
            , r = 0 / 0
            , i = 0 / 0;
        return {
            lineStart: function () {
                n.lineStart(), t = 1
            }
            , point: function (u, a) {
                var o = u > 0 ? Ka : -Ka
                    , c = Math.abs(u - e);
                Math.abs(c - Ka) < Qa ? (n.point(e, r = (r + a) / 2 > 0 ? Ka / 2 : -Ka / 2), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(o, r), n.point(u, r), t = 0) : i !== o && c >= Ka && (Math.abs(e - i) < Qa && (e -= i * Qa), Math.abs(u - o) < Qa && (u -= o * Qa), r = ne(e, r, u, a), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(o, r), t = 0), n.point(e = u, r = a), i = o
            }
            , lineEnd: function () {
                n.lineEnd(), e = r = 0 / 0
            }
            , clean: function () {
                return 2 - t
            }
        }
    }

    function ne(n, t, e, r) {
        var i, u, a = Math.sin(n - e);
        return Math.abs(a) > Qa ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * a)) : (t + r) / 2
    }

    function te(n, t, e, r) {
        var i;
        if (null == n) i = e * Ka / 2, r.point(-Ka, i), r.point(0, i), r.point(Ka, i), r.point(Ka, 0), r.point(Ka, -i), r.point(0, -i), r.point(-Ka, -i), r.point(-Ka, 0), r.point(-Ka, i);
        else if (Math.abs(n[0] - t[0]) > Qa) {
            var u = (n[0] < t[0] ? 1 : -1) * Ka;
            i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
        }
        else r.point(t[0], t[1])
    }

    function ee(n) {
        return Kt(Zo, n)
    }

    function re(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > a
        }

        function e(n) {
            var e, u, a, c, s;
            return {
                lineStart: function () {
                    c = a = !1, s = 1
                }
                , point: function (f, h) {
                    var g, p = [f, h]
                        , m = t(f, h)
                        , d = o ? m ? 0 : i(f, h) : m ? i(f + (0 > f ? Ka : -Ka), h) : 0;
                    if (!e && (c = a = m) && n.lineStart(), m !== a && (g = r(e, p), (Ot(e, g) || Ot(p, g)) && (p[0] += Qa, p[1] += Qa, m = t(p[0], p[1]))), m !== a) s = 0, m ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (l && e && o ^ m) {
                        var v;
                        d & u || !(v = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(v[0][0], v[0][1]), n.point(v[1][0], v[1][1]), n.lineEnd()) : (n.point(v[1][0], v[1][1]), n.lineEnd(), n.lineStart(), n.point(v[0][0], v[0][1])))
                    }!m || e && Ot(e, p) || n.point(p[0], p[1]), e = p, a = m, u = d
                }
                , lineEnd: function () {
                    a && n.lineEnd(), e = null
                }
                , clean: function () {
                    return s | (c && a) << 1
                }
            }
        }

        function r(n, t, e) {
            var r = zt(n)
                , i = zt(t)
                , u = [1, 0, 0]
                , o = jt(r, i)
                , c = Dt(o, o)
                , l = o[0]
                , s = c - l * l;
            if (!s) return !e && n;
            var f = a * c / s
                , h = -a * l / s
                , g = jt(u, o)
                , p = Ht(u, f)
                , m = Ht(o, h);
            Lt(p, m);
            var d = g
                , v = Dt(p, d)
                , y = Dt(d, d)
                , M = v * v - y * (Dt(p, p) - 1);
            if (!(0 > M)) {
                var x = Math.sqrt(M)
                    , b = Ht(d, (-v - x) / y);
                if (Lt(b, p), b = Pt(b), !e) return b;
                var _, w = n[0]
                    , S = t[0]
                    , E = n[1]
                    , k = t[1];
                w > S && (_ = w, w = S, S = _);
                var A = S - w
                    , N = Math.abs(A - Ka) < Qa
                    , q = N || Qa > A;
                if (!N && E > k && (_ = E, E = k, k = _), q ? N ? E + k > 0 ^ b[1] < (Math.abs(b[0] - w) < Qa ? E : k) : E <= b[1] && b[1] <= k : A > Ka ^ (w <= b[0] && b[0] <= S)) {
                    var T = Ht(d, (-v + x) / y);
                    return Lt(T, p), [b, Pt(T)]
                }
            }
        }

        function i(t, e) {
            var r = o ? n : Ka - n
                , i = 0;
            return -r > t ? i |= 1 : t > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i
        }

        function u(n) {
            return Kt(c, n)
        }
        var a = Math.cos(n)
            , o = a > 0
            , c = [n, 0]
            , l = Math.abs(a) > Qa
            , s = Ne(n, 6 * to);
        return $t(t, e, s, u)
    }

    function ie(n, t, e, r) {
        function i(r, i) {
            return Math.abs(r[0] - n) < Qa ? i > 0 ? 0 : 3 : Math.abs(r[0] - e) < Qa ? i > 0 ? 2 : 1 : Math.abs(r[1] - t) < Qa ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function u(n, t) {
            return a(n.point, t.point)
        }

        function a(n, t) {
            var e = i(n, 1)
                , r = i(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }

        function o(i, u) {
            var a = u[0] - i[0]
                , o = u[1] - i[1]
                , c = [0, 1];
            return Math.abs(a) < Qa && Math.abs(o) < Qa ? n <= i[0] && i[0] <= e && t <= i[1] && i[1] <= r : ue(n - i[0], a, c) && ue(i[0] - e, -a, c) && ue(t - i[1], o, c) && ue(i[1] - r, -o, c) ? (c[1] < 1 && (u[0] = i[0] + c[1] * a, u[1] = i[1] + c[1] * o), c[0] > 0 && (i[0] += c[0] * a, i[1] += c[0] * o), !0) : !1
        }
        return function (c) {
            function l(u) {
                var a = i(u, -1)
                    , o = s([0 === a || 3 === a ? n : e, a > 1 ? r : t]);
                return o
            }

            function s(n) {
                for (var t = 0, e = M.length, r = n[1], i = 0; e > i; ++i)
                    for (var u, a = 1, o = M[i], c = o.length, l = o[0]; c > a; ++a) u = o[a], l[1] <= r ? u[1] > r && f(l, u, n) > 0 && ++t : u[1] <= r && f(l, u, n) < 0 && --t, l = u;
                return 0 !== t
            }

            function f(n, t, e) {
                return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1])
            }

            function h(u, o, c, l) {
                var s = 0
                    , f = 0;
                if (null == u || (s = i(u, c)) !== (f = i(o, c)) || a(u, o) < 0 ^ c > 0) {
                    do l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t); while ((s = (s + c + 4) % 4) !== f)
                }
                else l.point(o[0], o[1])
            }

            function g(i, u) {
                return i >= n && e >= i && u >= t && r >= u
            }

            function p(n, t) {
                g(n, t) && c.point(n, t)
            }

            function m() {
                T.point = v, M && M.push(x = []), A = !0, k = !1, S = E = 0 / 0
            }

            function d() {
                y && (v(b, _), w && k && q.rejoin(), y.push(q.buffer())), T.point = p, k && c.lineEnd()
            }

            function v(n, t) {
                n = Math.max(-Bo, Math.min(Bo, n)), t = Math.max(-Bo, Math.min(Bo, t));
                var e = g(n, t);
                if (M && x.push([n, t]), A) b = n, _ = t, w = e, A = !1, e && (c.lineStart(), c.point(n, t));
                else if (e && k) c.point(n, t);
                else {
                    var r = [S, E]
                        , i = [n, t];
                    o(r, i) ? (k || (c.lineStart(), c.point(r[0], r[1])), c.point(i[0], i[1]), e || c.lineEnd()) : e && (c.lineStart(), c.point(n, t))
                }
                S = n, E = t, k = e
            }
            var y, M, x, b, _, w, S, E, k, A, N = c
                , q = Jt()
                , T = {
                    point: p
                    , lineStart: m
                    , lineEnd: d
                    , polygonStart: function () {
                        c = q, y = [], M = []
                    }
                    , polygonEnd: function () {
                        c = N, (y = ya.merge(y)).length ? (c.polygonStart(), Zt(y, u, l, h, c), c.polygonEnd()) : s([n, t]) && (c.polygonStart(), c.lineStart(), h(null, null, 1, c), c.lineEnd(), c.polygonEnd()), y = M = x = null
                    }
                };
            return T
        }
    }

    function ue(n, t, e) {
        if (Math.abs(t) < Qa) return 0 >= n;
        var r = n / t;
        if (t > 0) {
            if (r > e[1]) return !1;
            r > e[0] && (e[0] = r)
        }
        else {
            if (r < e[0]) return !1;
            r < e[1] && (e[1] = r)
        }
        return !0
    }

    function ae(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function (e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1])
        }), e
    }

    function oe(n) {
        var t = 0
            , e = Ka / 3
            , r = be(n)
            , i = r(t, e);
        return i.parallels = function (n) {
            return arguments.length ? r(t = n[0] * Ka / 180, e = n[1] * Ka / 180) : [180 * (t / Ka), 180 * (e / Ka)]
        }, i
    }

    function ce(n, t) {
        function e(n, t) {
            var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
            return [e * Math.sin(n *= i), a - e * Math.cos(n)]
        }
        var r = Math.sin(n)
            , i = (r + Math.sin(t)) / 2
            , u = 1 + r * (2 * i - r)
            , a = Math.sqrt(u) / i;
        return e.invert = function (n, t) {
            var e = a - t;
            return [Math.atan2(n, e) / i, V((u - (n * n + e * e) * i * i) / (2 * i))]
        }, e
    }

    function le() {
        function n(n, t) {
            Wo += i * n - r * t, r = n, i = t
        }
        var t, e, r, i;
        nc.point = function (u, a) {
            nc.point = n, t = r = u, e = i = a
        }, nc.lineEnd = function () {
            n(t, e)
        }
    }

    function se(n, t) {
        Jo > n && (Jo = n), n > Ko && (Ko = n), Go > t && (Go = t), t > Qo && (Qo = t)
    }

    function fe() {
        function n(n, t) {
            a.push("M", n, ",", t, u)
        }

        function t(n, t) {
            a.push("M", n, ",", t), o.point = e
        }

        function e(n, t) {
            a.push("L", n, ",", t)
        }

        function r() {
            o.point = n
        }

        function i() {
            a.push("Z")
        }
        var u = he(4.5)
            , a = []
            , o = {
                point: n
                , lineStart: function () {
                    o.point = t
                }
                , lineEnd: r
                , polygonStart: function () {
                    o.lineEnd = i
                }
                , polygonEnd: function () {
                    o.lineEnd = r, o.point = n
                }
                , pointRadius: function (n) {
                    return u = he(n), o
                }
                , result: function () {
                    if (a.length) {
                        var n = a.join("");
                        return a = [], n
                    }
                }
            };
        return o
    }

    function he(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function ge(n, t) {
        Lo += n, Ho += t, ++Fo
    }

    function pe() {
        function n(n, r) {
            var i = n - t
                , u = r - e
                , a = Math.sqrt(i * i + u * u);
            Po += a * (t + n) / 2, Oo += a * (e + r) / 2, Yo += a, ge(t = n, e = r)
        }
        var t, e;
        ec.point = function (r, i) {
            ec.point = n, ge(t = r, e = i)
        }
    }

    function me() {
        ec.point = ge
    }

    function de() {
        function n(n, t) {
            var e = n - r
                , u = t - i
                , a = Math.sqrt(e * e + u * u);
            Po += a * (r + n) / 2, Oo += a * (i + t) / 2, Yo += a, a = i * n - r * t, Ro += a * (r + n), Uo += a * (i + t), Io += 3 * a, ge(r = n, i = t)
        }
        var t, e, r, i;
        ec.point = function (u, a) {
            ec.point = n, ge(t = r = u, e = i = a)
        }, ec.lineEnd = function () {
            n(t, e)
        }
    }

    function ve(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, a, 0, 2 * Ka)
        }

        function e(t, e) {
            n.moveTo(t, e), o.point = r
        }

        function r(t, e) {
            n.lineTo(t, e)
        }

        function i() {
            o.point = t
        }

        function u() {
            n.closePath()
        }
        var a = 4.5
            , o = {
                point: t
                , lineStart: function () {
                    o.point = e
                }
                , lineEnd: i
                , polygonStart: function () {
                    o.lineEnd = u
                }
                , polygonEnd: function () {
                    o.lineEnd = i, o.point = t
                }
                , pointRadius: function (n) {
                    return a = n, o
                }
                , result: s
            };
        return o
    }

    function ye(n) {
        function t(t) {
            function r(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            }

            function i() {
                M = 0 / 0, S.point = a, t.lineStart()
            }

            function a(r, i) {
                var a = zt([r, i])
                    , o = n(r, i);
                e(M, x, y, b, _, w, M = o[0], x = o[1], y = r, b = a[0], _ = a[1], w = a[2], u, t), t.point(M, x)
            }

            function o() {
                S.point = r, t.lineEnd()
            }

            function c() {
                i(), S.point = l, S.lineEnd = s
            }

            function l(n, t) {
                a(f = n, h = t), g = M, p = x, m = b, d = _, v = w, S.point = a
            }

            function s() {
                e(M, x, y, b, _, w, g, p, f, m, d, v, u, t), S.lineEnd = o, o()
            }
            var f, h, g, p, m, d, v, y, M, x, b, _, w, S = {
                point: r
                , lineStart: i
                , lineEnd: o
                , polygonStart: function () {
                    t.polygonStart(), S.lineStart = c
                }
                , polygonEnd: function () {
                    t.polygonEnd(), S.lineStart = i
                }
            };
            return S
        }

        function e(t, u, a, o, c, l, s, f, h, g, p, m, d, v) {
            var y = s - t
                , M = f - u
                , x = y * y + M * M;
            if (x > 4 * r && d--) {
                var b = o + g
                    , _ = c + p
                    , w = l + m
                    , S = Math.sqrt(b * b + _ * _ + w * w)
                    , E = Math.asin(w /= S)
                    , k = Math.abs(Math.abs(w) - 1) < Qa ? (a + h) / 2 : Math.atan2(_, b)
                    , A = n(k, E)
                    , N = A[0]
                    , q = A[1]
                    , T = N - t
                    , C = q - u
                    , z = M * T - y * C;
                (z * z / x > r || Math.abs((y * T + M * C) / x - .5) > .3 || i > o * g + c * p + l * m) && (e(t, u, a, o, c, l, N, q, k, b /= S, _ /= S, w, d, v), v.point(N, q), e(N, q, k, b, _, w, s, f, h, g, p, m, d, v))
            }
        }
        var r = .5
            , i = Math.cos(30 * to)
            , u = 16;
        return t.precision = function (n) {
            return arguments.length ? (u = (r = n * n) > 0 && 16, t) : Math.sqrt(r)
        }, t
    }

    function Me(n) {
        var t = ye(function (t, e) {
            return n([t * eo, e * eo])
        });
        return function (n) {
            return n = t(n), {
                point: function (t, e) {
                    n.point(t * to, e * to)
                }
                , sphere: function () {
                    n.sphere()
                }
                , lineStart: function () {
                    n.lineStart()
                }
                , lineEnd: function () {
                    n.lineEnd()
                }
                , polygonStart: function () {
                    n.polygonStart()
                }
                , polygonEnd: function () {
                    n.polygonEnd()
                }
            }
        }
    }

    function xe(n) {
        return be(function () {
            return n
        })()
    }

    function be(n) {
        function t(n) {
            return n = o(n[0] * to, n[1] * to), [n[0] * h + c, l - n[1] * h]
        }

        function e(n) {
            return n = o.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * eo, n[1] * eo]
        }

        function r() {
            o = ae(a = Se(v, y, M), u);
            var n = u(m, d);
            return c = g - n[0] * h, l = p + n[1] * h, i()
        }

        function i() {
            return s && (s.valid = !1, s = null), t
        }
        var u, a, o, c, l, s, f = ye(function (n, t) {
                return n = u(n, t), [n[0] * h + c, l - n[1] * h]
            })
            , h = 150
            , g = 480
            , p = 250
            , m = 0
            , d = 0
            , v = 0
            , y = 0
            , M = 0
            , x = Xo
            , b = mt
            , _ = null
            , w = null;
        return t.stream = function (n) {
                return s && (s.valid = !1), s = _e(a, x(f(b(n)))), s.valid = !0, s
            }, t.clipAngle = function (n) {
                return arguments.length ? (x = null == n ? (_ = n, Xo) : re((_ = +n) * to), i()) : _
            }, t.clipExtent = function (n) {
                return arguments.length ? (w = n, b = null == n ? mt : ie(n[0][0], n[0][1], n[1][0], n[1][1]), i()) : w
            }, t.scale = function (n) {
                return arguments.length ? (h = +n, r()) : h
            }, t.translate = function (n) {
                return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
            }, t.center = function (n) {
                return arguments.length ? (m = n[0] % 360 * to, d = n[1] % 360 * to, r()) : [m * eo, d * eo]
            }, t.rotate = function (n) {
                return arguments.length ? (v = n[0] % 360 * to, y = n[1] % 360 * to, M = n.length > 2 ? n[2] % 360 * to : 0, r()) : [v * eo, y * eo, M * eo]
            }, ya.rebind(t, f, "precision")
            , function () {
                return u = n.apply(this, arguments), t.invert = u.invert && e, r()
            }
    }

    function _e(n, t) {
        return {
            point: function (e, r) {
                r = n(e * to, r * to), e = r[0], t.point(e > Ka ? e - 2 * Ka : -Ka > e ? e + 2 * Ka : e, r[1])
            }
            , sphere: function () {
                t.sphere()
            }
            , lineStart: function () {
                t.lineStart()
            }
            , lineEnd: function () {
                t.lineEnd()
            }
            , polygonStart: function () {
                t.polygonStart()
            }
            , polygonEnd: function () {
                t.polygonEnd()
            }
        }
    }

    function we(n, t) {
        return [n, t]
    }

    function Se(n, t, e) {
        return n ? t || e ? ae(ke(n), Ae(t, e)) : ke(n) : t || e ? Ae(t, e) : we
    }

    function Ee(n) {
        return function (t, e) {
            return t += n, [t > Ka ? t - 2 * Ka : -Ka > t ? t + 2 * Ka : t, e]
        }
    }

    function ke(n) {
        var t = Ee(n);
        return t.invert = Ee(-n), t
    }

    function Ae(n, t) {
        function e(n, t) {
            var e = Math.cos(t)
                , o = Math.cos(n) * e
                , c = Math.sin(n) * e
                , l = Math.sin(t)
                , s = l * r + o * i;
            return [Math.atan2(c * u - s * a, o * r - l * i), V(s * u + c * a)]
        }
        var r = Math.cos(n)
            , i = Math.sin(n)
            , u = Math.cos(t)
            , a = Math.sin(t);
        return e.invert = function (n, t) {
            var e = Math.cos(t)
                , o = Math.cos(n) * e
                , c = Math.sin(n) * e
                , l = Math.sin(t)
                , s = l * u - c * a;
            return [Math.atan2(c * u + l * a, o * r + s * i), V(s * r - o * i)]
        }, e
    }

    function Ne(n, t) {
        var e = Math.cos(n)
            , r = Math.sin(n);
        return function (i, u, a, o) {
            null != i ? (i = qe(e, i), u = qe(e, u), (a > 0 ? u > i : i > u) && (i += 2 * a * Ka)) : (i = n + 2 * a * Ka, u = n);
            for (var c, l = a * t, s = i; a > 0 ? s > u : u > s; s -= l) o.point((c = Pt([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }

    function qe(n, t) {
        var e = zt(t);
        e[0] -= n, Ft(e);
        var r = I(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Qa) % (2 * Math.PI)
    }

    function Te(n, t, e) {
        var r = ya.range(n, t - Qa, e).concat(t);
        return function (n) {
            return r.map(function (t) {
                return [n, t]
            })
        }
    }

    function Ce(n, t, e) {
        var r = ya.range(n, t - Qa, e).concat(t);
        return function (n) {
            return r.map(function (t) {
                return [t, n]
            })
        }
    }

    function ze(n) {
        return n.source
    }

    function De(n) {
        return n.target
    }

    function je(n, t, e, r) {
        var i = Math.cos(t)
            , u = Math.sin(t)
            , a = Math.cos(r)
            , o = Math.sin(r)
            , c = i * Math.cos(n)
            , l = i * Math.sin(n)
            , s = a * Math.cos(e)
            , f = a * Math.sin(e)
            , h = 2 * Math.asin(Math.sqrt(B(r - t) + i * a * B(e - n)))
            , g = 1 / Math.sin(h)
            , p = h ? function (n) {
                var t = Math.sin(n *= h) * g
                    , e = Math.sin(h - n) * g
                    , r = e * c + t * s
                    , i = e * l + t * f
                    , a = e * u + t * o;
                return [Math.atan2(i, r) * eo, Math.atan2(a, Math.sqrt(r * r + i * i)) * eo]
            } : function () {
                return [n * eo, t * eo]
            };
        return p.distance = h, p
    }

    function Le() {
        function n(n, i) {
            var u = Math.sin(i *= to)
                , a = Math.cos(i)
                , o = Math.abs((n *= to) - t)
                , c = Math.cos(o);
            rc += Math.atan2(Math.sqrt((o = a * Math.sin(o)) * o + (o = r * u - e * a * c) * o), e * u + r * a * c), t = n, e = u, r = a
        }
        var t, e, r;
        ic.point = function (i, u) {
            t = i * to, e = Math.sin(u *= to), r = Math.cos(u), ic.point = n
        }, ic.lineEnd = function () {
            ic.point = ic.lineEnd = s
        }
    }

    function He(n, t) {
        function e(t, e) {
            var r = Math.cos(t)
                , i = Math.cos(e)
                , u = n(r * i);
            return [u * i * Math.sin(t), u * Math.sin(e)]
        }
        return e.invert = function (n, e) {
            var r = Math.sqrt(n * n + e * e)
                , i = t(r)
                , u = Math.sin(i)
                , a = Math.cos(i);
            return [Math.atan2(n * u, r * a), Math.asin(r && e * u / r)]
        }, e
    }

    function Fe(n, t) {
        function e(n, t) {
            var e = Math.abs(Math.abs(t) - Ka / 2) < Qa ? 0 : a / Math.pow(i(t), u);
            return [e * Math.sin(u * n), a - e * Math.cos(u * n)]
        }
        var r = Math.cos(n)
            , i = function (n) {
                return Math.tan(Ka / 4 + n / 2)
            }
            , u = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n))
            , a = r * Math.pow(i(n), u) / u;
        return u ? (e.invert = function (n, t) {
            var e = a - t
                , r = U(u) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / u, 2 * Math.atan(Math.pow(a / r, 1 / u)) - Ka / 2]
        }, e) : Oe
    }

    function Pe(n, t) {
        function e(n, t) {
            var e = u - t;
            return [e * Math.sin(i * n), u - e * Math.cos(i * n)]
        }
        var r = Math.cos(n)
            , i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n)
            , u = r / i + n;
        return Math.abs(i) < Qa ? we : (e.invert = function (n, t) {
            var e = u - t;
            return [Math.atan2(n, e) / i, u - U(i) * Math.sqrt(n * n + e * e)]
        }, e)
    }

    function Oe(n, t) {
        return [n, Math.log(Math.tan(Ka / 4 + t / 2))]
    }

    function Ye(n) {
        var t, e = xe(n)
            , r = e.scale
            , i = e.translate
            , u = e.clipExtent;
        return e.scale = function () {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.translate = function () {
            var n = i.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.clipExtent = function (n) {
            var a = u.apply(e, arguments);
            if (a === e) {
                if (t = null == n) {
                    var o = Ka * r()
                        , c = i();
                    u([[c[0] - o, c[1] - o], [c[0] + o, c[1] + o]])
                }
            }
            else t && (a = null);
            return a
        }, e.clipExtent(null)
    }

    function Re(n, t) {
        var e = Math.cos(t) * Math.sin(n);
        return [Math.log((1 + e) / (1 - e)) / 2, Math.atan2(Math.tan(t), Math.cos(n))]
    }

    function Ue(n) {
        function t(t) {
            function a() {
                l.push("M", u(n(s), o))
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = pt(e), p = pt(r); ++f < h;) i.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (a(), s = []);
            return s.length && a(), l.length ? l.join("") : null
        }
        var e = Ie
            , r = Ve
            , i = Xt
            , u = Xe
            , a = u.key
            , o = .7;
        return t.x = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.defined = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.interpolate = function (n) {
            return arguments.length ? (a = "function" == typeof n ? u = n : (u = sc.get(n) || Xe).key, t) : a
        }, t.tension = function (n) {
            return arguments.length ? (o = n, t) : o
        }, t
    }

    function Ie(n) {
        return n[0]
    }

    function Ve(n) {
        return n[1]
    }

    function Xe(n) {
        return n.join("L")
    }

    function Ze(n) {
        return Xe(n) + "Z"
    }

    function Be(n) {
        for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && i.push("H", r[0]), i.join("")
    }

    function $e(n) {
        for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("V", (r = n[t])[1], "H", r[0]);
        return i.join("")
    }

    function We(n) {
        for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("H", (r = n[t])[0], "V", r[1]);
        return i.join("")
    }

    function Je(n, t) {
        return n.length < 4 ? Xe(n) : n[1] + Qe(n.slice(1, n.length - 1), nr(n, t))
    }

    function Ge(n, t) {
        return n.length < 3 ? Xe(n) : n[0] + Qe((n.push(n[0]), n), nr([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function Ke(n, t) {
        return n.length < 3 ? Xe(n) : n[0] + Qe(n, nr(n, t))
    }

    function Qe(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return Xe(n);
        var e = n.length != t.length
            , r = ""
            , i = n[0]
            , u = n[1]
            , a = t[0]
            , o = a
            , c = 1;
        if (e && (r += "Q" + (u[0] - 2 * a[0] / 3) + "," + (u[1] - 2 * a[1] / 3) + "," + u[0] + "," + u[1], i = n[1], c = 2), t.length > 1) {
            o = t[1], u = n[c], c++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1];
            for (var l = 2; l < t.length; l++, c++) u = n[c], o = t[l], r += "S" + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1]
        }
        if (e) {
            var s = n[c];
            r += "Q" + (u[0] + 2 * o[0] / 3) + "," + (u[1] + 2 * o[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }

    function nr(n, t) {
        for (var e, r = [], i = (1 - t) / 2, u = n[0], a = n[1], o = 1, c = n.length; ++o < c;) e = u, u = a, a = n[o], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
        return r
    }

    function tr(n) {
        if (n.length < 3) return Xe(n);
        var t = 1
            , e = n.length
            , r = n[0]
            , i = r[0]
            , u = r[1]
            , a = [i, i, i, (r = n[1])[0]]
            , o = [u, u, u, r[1]]
            , c = [i, ",", u, "L", ur(gc, a), ",", ur(gc, o)];
        for (n.push(n[e - 1]); ++t <= e;) r = n[t], a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), ar(c, a, o);
        return n.pop(), c.push("L", r), c.join("")
    }

    function er(n) {
        if (n.length < 4) return Xe(n);
        for (var t, e = [], r = -1, i = n.length, u = [0], a = [0]; ++r < 3;) t = n[r], u.push(t[0]), a.push(t[1]);
        for (e.push(ur(gc, u) + "," + ur(gc, a)), --r; ++r < i;) t = n[r], u.shift(), u.push(t[0]), a.shift(), a.push(t[1]), ar(e, u, a);
        return e.join("")
    }

    function rr(n) {
        for (var t, e, r = -1, i = n.length, u = i + 4, a = [], o = []; ++r < 4;) e = n[r % i], a.push(e[0]), o.push(e[1]);
        for (t = [ur(gc, a), ",", ur(gc, o)], --r; ++r < u;) e = n[r % i], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), ar(t, a, o);
        return t.join("")
    }

    function ir(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, i, u = n[0][0], a = n[0][1], o = n[e][0] - u, c = n[e][1] - a, l = -1; ++l <= e;) r = n[l], i = l / e, r[0] = t * r[0] + (1 - t) * (u + i * o), r[1] = t * r[1] + (1 - t) * (a + i * c);
        return tr(n)
    }

    function ur(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function ar(n, t, e) {
        n.push("C", ur(fc, t), ",", ur(fc, e), ",", ur(hc, t), ",", ur(hc, e), ",", ur(gc, t), ",", ur(gc, e))
    }

    function or(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function cr(n) {
        for (var t = 0, e = n.length - 1, r = [], i = n[0], u = n[1], a = r[0] = or(i, u); ++t < e;) r[t] = (a + (a = or(i = u, u = n[t + 1]))) / 2;
        return r[t] = a, r
    }

    function lr(n) {
        for (var t, e, r, i, u = [], a = cr(n), o = -1, c = n.length - 1; ++o < c;) t = or(n[o], n[o + 1]), Math.abs(t) < 1e-6 ? a[o] = a[o + 1] = 0 : (e = a[o] / t, r = a[o + 1] / t, i = e * e + r * r, i > 9 && (i = 3 * t / Math.sqrt(i), a[o] = i * e, a[o + 1] = i * r));
        for (o = -1; ++o <= c;) i = (n[Math.min(c, o + 1)][0] - n[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])), u.push([i || 0, a[o] * i || 0]);
        return u
    }

    function sr(n) {
        return n.length < 3 ? Xe(n) : n[0] + Qe(n, lr(n))
    }

    function fr(n, t, e, r) {
        var i, u, a, o, c, l, s;
        return i = r[n], u = i[0], a = i[1], i = r[t], o = i[0], c = i[1], i = r[e], l = i[0], s = i[1], (s - a) * (o - u) - (c - a) * (l - u) > 0
    }

    function hr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }

    function gr(n, t, e, r) {
        var i = n[0]
            , u = e[0]
            , a = t[0] - i
            , o = r[0] - u
            , c = n[1]
            , l = e[1]
            , s = t[1] - c
            , f = r[1] - l
            , h = (o * (c - l) - f * (i - u)) / (f * a - o * s);
        return [i + h * a, c + h * s]
    }

    function pr(n) {
        var t = n[0]
            , e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }

    function mr(n, t) {
        var e = {
                list: n.map(function (n, t) {
                    return {
                        index: t
                        , x: n[0]
                        , y: n[1]
                    }
                }).sort(function (n, t) {
                    return n.y < t.y ? -1 : n.y > t.y ? 1 : n.x < t.x ? -1 : n.x > t.x ? 1 : 0
                })
                , bottomSite: null
            }
            , r = {
                list: []
                , leftEnd: null
                , rightEnd: null
                , init: function () {
                    r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
                }
                , createHalfEdge: function (n, t) {
                    return {
                        edge: n
                        , side: t
                        , vertex: null
                        , l: null
                        , r: null
                    }
                }
                , insert: function (n, t) {
                    t.l = n, t.r = n.r, n.r.l = t, n.r = t
                }
                , leftBound: function (n) {
                    var t = r.leftEnd;
                    do t = t.r; while (t != r.rightEnd && i.rightOf(t, n));
                    return t = t.l
                }
                , del: function (n) {
                    n.l.r = n.r, n.r.l = n.l, n.edge = null
                }
                , right: function (n) {
                    return n.r
                }
                , left: function (n) {
                    return n.l
                }
                , leftRegion: function (n) {
                    return null == n.edge ? e.bottomSite : n.edge.region[n.side]
                }
                , rightRegion: function (n) {
                    return null == n.edge ? e.bottomSite : n.edge.region[mc[n.side]]
                }
            }
            , i = {
                bisect: function (n, t) {
                    var e = {
                            region: {
                                l: n
                                , r: t
                            }
                            , ep: {
                                l: null
                                , r: null
                            }
                        }
                        , r = t.x - n.x
                        , i = t.y - n.y
                        , u = r > 0 ? r : -r
                        , a = i > 0 ? i : -i;
                    return e.c = n.x * r + n.y * i + .5 * (r * r + i * i), u > a ? (e.a = 1, e.b = i / r, e.c /= r) : (e.b = 1, e.a = r / i, e.c /= i), e
                }
                , intersect: function (n, t) {
                    var e = n.edge
                        , r = t.edge;
                    if (!e || !r || e.region.r == r.region.r) return null;
                    var i = e.a * r.b - e.b * r.a;
                    if (Math.abs(i) < 1e-10) return null;
                    var u, a, o = (e.c * r.b - r.c * e.b) / i
                        , c = (r.c * e.a - e.c * r.a) / i
                        , l = e.region.r
                        , s = r.region.r;
                    l.y < s.y || l.y == s.y && l.x < s.x ? (u = n, a = e) : (u = t, a = r);
                    var f = o >= a.region.r.x;
                    return f && "l" === u.side || !f && "r" === u.side ? null : {
                        x: o
                        , y: c
                    }
                }
                , rightOf: function (n, t) {
                    var e = n.edge
                        , r = e.region.r
                        , i = t.x > r.x;
                    if (i && "l" === n.side) return 1;
                    if (!i && "r" === n.side) return 0;
                    if (1 === e.a) {
                        var u = t.y - r.y
                            , a = t.x - r.x
                            , o = 0
                            , c = 0;
                        if (!i && e.b < 0 || i && e.b >= 0 ? c = o = u >= e.b * a : (c = t.x + t.y * e.b > e.c, e.b < 0 && (c = !c), c || (o = 1)), !o) {
                            var l = r.x - e.region.l.x;
                            c = e.b * (a * a - u * u) < l * u * (1 + 2 * a / l + e.b * e.b), e.b < 0 && (c = !c)
                        }
                    }
                    else {
                        var s = e.c - e.a * t.x
                            , f = t.y - s
                            , h = t.x - r.x
                            , g = s - r.y;
                        c = f * f > h * h + g * g
                    }
                    return "l" === n.side ? c : !c
                }
                , endPoint: function (n, e, r) {
                    n.ep[e] = r, n.ep[mc[e]] && t(n)
                }
                , distance: function (n, t) {
                    var e = n.x - t.x
                        , r = n.y - t.y;
                    return Math.sqrt(e * e + r * r)
                }
            }
            , u = {
                list: []
                , insert: function (n, t, e) {
                    n.vertex = t, n.ystar = t.y + e;
                    for (var r = 0, i = u.list, a = i.length; a > r; r++) {
                        var o = i[r];
                        if (!(n.ystar > o.ystar || n.ystar == o.ystar && t.x > o.vertex.x)) break
                    }
                    i.splice(r, 0, n)
                }
                , del: function (n) {
                    for (var t = 0, e = u.list, r = e.length; r > t && e[t] != n; ++t);
                    e.splice(t, 1)
                }
                , empty: function () {
                    return 0 === u.list.length
                }
                , nextEvent: function (n) {
                    for (var t = 0, e = u.list, r = e.length; r > t; ++t)
                        if (e[t] == n) return e[t + 1];
                    return null
                }
                , min: function () {
                    var n = u.list[0];
                    return {
                        x: n.vertex.x
                        , y: n.ystar
                    }
                }
                , extractMin: function () {
                    return u.list.shift()
                }
            };
        r.init(), e.bottomSite = e.list.shift();
        for (var a, o, c, l, s, f, h, g, p, m, d, v, y, M = e.list.shift();;)
            if (u.empty() || (a = u.min()), M && (u.empty() || M.y < a.y || M.y == a.y && M.x < a.x)) o = r.leftBound(M), c = r.right(o), h = r.rightRegion(o), v = i.bisect(h, M), f = r.createHalfEdge(v, "l"), r.insert(o, f), m = i.intersect(o, f), m && (u.del(o), u.insert(o, m, i.distance(m, M))), o = f, f = r.createHalfEdge(v, "r"), r.insert(o, f), m = i.intersect(f, c), m && u.insert(f, m, i.distance(m, M)), M = e.list.shift();
            else {
                if (u.empty()) break;
                o = u.extractMin(), l = r.left(o), c = r.right(o), s = r.right(c), h = r.leftRegion(o), g = r.rightRegion(c), d = o.vertex, i.endPoint(o.edge, o.side, d), i.endPoint(c.edge, c.side, d), r.del(o), u.del(c), r.del(c), y = "l", h.y > g.y && (p = h, h = g, g = p, y = "r"), v = i.bisect(h, g), f = r.createHalfEdge(v, y), r.insert(l, f), i.endPoint(v, mc[y], d), m = i.intersect(l, f), m && (u.del(l), u.insert(l, m, i.distance(m, h))), m = i.intersect(f, s), m && u.insert(f, m, i.distance(m, h))
            }
        for (o = r.right(r.leftEnd); o != r.rightEnd; o = r.right(o)) t(o.edge)
    }

    function dr(n) {
        return n.x
    }

    function vr(n) {
        return n.y
    }

    function yr() {
        return {
            leaf: !0
            , nodes: []
            , point: null
            , x: null
            , y: null
        }
    }

    function Mr(n, t, e, r, i, u) {
        if (!n(t, e, r, i, u)) {
            var a = .5 * (e + i)
                , o = .5 * (r + u)
                , c = t.nodes;
            c[0] && Mr(n, c[0], e, r, a, o), c[1] && Mr(n, c[1], a, r, i, o), c[2] && Mr(n, c[2], e, o, a, u), c[3] && Mr(n, c[3], a, o, i, u)
        }
    }

    function xr(n, t) {
        n = ya.rgb(n), t = ya.rgb(t);
        var e = n.r
            , r = n.g
            , i = n.b
            , u = t.r - e
            , a = t.g - r
            , o = t.b - i;
        return function (n) {
            return "#" + ct(Math.round(e + u * n)) + ct(Math.round(r + a * n)) + ct(Math.round(i + o * n))
        }
    }

    function br(n, t) {
        var e, r = {}
            , i = {};
        for (e in n) e in t ? r[e] = Sr(n[e], t[e]) : i[e] = n[e];
        for (e in t) e in n || (i[e] = t[e]);
        return function (n) {
            for (e in r) i[e] = r[e](n);
            return i
        }
    }

    function _r(n, t) {
        return t -= n = +n
            , function (e) {
                return n + t * e
            }
    }

    function wr(n, t) {
        var e, r, i, u, a, o = 0
            , c = 0
            , l = []
            , s = [];
        for (n += "", t += "", dc.lastIndex = 0, r = 0; e = dc.exec(t); ++r) e.index && l.push(t.substring(o, c = e.index)), s.push({
            i: l.length
            , x: e[0]
        }), l.push(null), o = dc.lastIndex;
        for (o < t.length && l.push(t.substring(o)), r = 0, u = s.length;
            (e = dc.exec(n)) && u > r; ++r)
            if (a = s[r], a.x == e[0]) {
                if (a.i)
                    if (null == l[a.i + 1])
                        for (l[a.i - 1] += a.x, l.splice(a.i, 1), i = r + 1; u > i; ++i) s[i].i--;
                    else
                        for (l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), i = r + 1; u > i; ++i) s[i].i -= 2;
                else if (null == l[a.i + 1]) l[a.i] = a.x;
                else
                    for (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), i = r + 1; u > i; ++i) s[i].i--;
                s.splice(r, 1), u--, r--
            }
            else a.x = _r(parseFloat(e[0]), parseFloat(a.x));
        for (; u > r;) a = s.pop(), null == l[a.i + 1] ? l[a.i] = a.x : (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1)), u--;
        return 1 === l.length ? null == l[0] ? (a = s[0].x, function (n) {
            return a(n) + ""
        }) : function () {
            return t
        } : function (n) {
            for (r = 0; u > r; ++r) l[(a = s[r]).i] = a.x(n);
            return l.join("")
        }
    }

    function Sr(n, t) {
        for (var e, r = ya.interpolators.length; --r >= 0 && !(e = ya.interpolators[r](n, t)););
        return e
    }

    function Er(n, t) {
        var e, r = []
            , i = []
            , u = n.length
            , a = t.length
            , o = Math.min(n.length, t.length);
        for (e = 0; o > e; ++e) r.push(Sr(n[e], t[e]));
        for (; u > e; ++e) i[e] = n[e];
        for (; a > e; ++e) i[e] = t[e];
        return function (n) {
            for (e = 0; o > e; ++e) i[e] = r[e](n);
            return i
        }
    }

    function kr(n) {
        return function (t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function Ar(n) {
        return function (t) {
            return 1 - n(1 - t)
        }
    }

    function Nr(n) {
        return function (t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function qr(n) {
        return n * n
    }

    function Tr(n) {
        return n * n * n
    }

    function Cr(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n
            , e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }

    function zr(n) {
        return function (t) {
            return Math.pow(t, n)
        }
    }

    function Dr(n) {
        return 1 - Math.cos(n * Ka / 2)
    }

    function jr(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function Lr(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function Hr(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / (2 * Ka) * Math.asin(1 / n) : (n = 1, e = t / 4)
            , function (r) {
                return 1 + n * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Ka / t)
            }
    }

    function Fr(n) {
        return n || (n = 1.70158)
            , function (t) {
                return t * t * ((n + 1) * t - n)
            }
    }

    function Pr(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function Or(n, t) {
        n = ya.hcl(n), t = ya.hcl(t);
        var e = n.h
            , r = n.c
            , i = n.l
            , u = t.h - e
            , a = t.c - r
            , o = t.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? t.c : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360)
            , function (n) {
                return J(e + u * n, r + a * n, i + o * n) + ""
            }
    }

    function Yr(n, t) {
        n = ya.hsl(n), t = ya.hsl(t);
        var e = n.h
            , r = n.s
            , i = n.l
            , u = t.h - e
            , a = t.s - r
            , o = t.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? t.s : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360)
            , function (n) {
                return R(e + u * n, r + a * n, i + o * n) + ""
            }
    }

    function Rr(n, t) {
        n = ya.lab(n), t = ya.lab(t);
        var e = n.l
            , r = n.a
            , i = n.b
            , u = t.l - e
            , a = t.a - r
            , o = t.b - i;
        return function (n) {
            return Q(e + u * n, r + a * n, i + o * n) + ""
        }
    }

    function Ur(n, t) {
        return t -= n
            , function (e) {
                return Math.round(n + t * e)
            }
    }

    function Ir(n) {
        var t = [n.a, n.b]
            , e = [n.c, n.d]
            , r = Xr(t)
            , i = Vr(t, e)
            , u = Xr(Zr(e, t, -i)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * eo, this.translate = [n.e, n.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * eo : 0
    }

    function Vr(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function Xr(n) {
        var t = Math.sqrt(Vr(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function Zr(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n
    }

    function Br(n, t) {
        var e, r = []
            , i = []
            , u = ya.transform(n)
            , a = ya.transform(t)
            , o = u.translate
            , c = a.translate
            , l = u.rotate
            , s = a.rotate
            , f = u.skew
            , h = a.skew
            , g = u.scale
            , p = a.scale;
        return o[0] != c[0] || o[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                i: 1
                , x: _r(o[0], c[0])
            }, {
                i: 3
                , x: _r(o[1], c[1])
            })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), i.push({
                i: r.push(r.pop() + "rotate(", null, ")") - 2
                , x: _r(l, s)
            })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? i.push({
                i: r.push(r.pop() + "skewX(", null, ")") - 2
                , x: _r(f, h)
            }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                i: e - 4
                , x: _r(g[0], p[0])
            }, {
                i: e - 2
                , x: _r(g[1], p[1])
            })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = i.length
            , function (n) {
                for (var t, u = -1; ++u < e;) r[(t = i[u]).i] = t.x(n);
                return r.join("")
            }
    }

    function $r(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0
            , function (e) {
                return (e - n) * t
            }
    }

    function Wr(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0
            , function (e) {
                return Math.max(0, Math.min(1, (e - n) * t))
            }
    }

    function Jr(n) {
        for (var t = n.source, e = n.target, r = Kr(t, e), i = [t]; t !== r;) t = t.parent, i.push(t);
        for (var u = i.length; e !== r;) i.splice(u, 0, e), e = e.parent;
        return i
    }

    function Gr(n) {
        for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
        return t.push(n), t
    }

    function Kr(n, t) {
        if (n === t) return n;
        for (var e = Gr(n), r = Gr(t), i = e.pop(), u = r.pop(), a = null; i === u;) a = i, i = e.pop(), u = r.pop();
        return a
    }

    function Qr(n) {
        n.fixed |= 2
    }

    function ni(n) {
        n.fixed &= -7
    }

    function ti(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }

    function ei(n) {
        n.fixed &= -5
    }

    function ri(n, t, e) {
        var r = 0
            , i = 0;
        if (n.charge = 0, !n.leaf)
            for (var u, a = n.nodes, o = a.length, c = -1; ++c < o;) u = a[c], null != u && (ri(u, t, e), n.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var l = t * e[n.point.index];
            n.charge += n.pointCharge = l, r += l * n.point.x, i += l * n.point.y
        }
        n.cx = r / n.charge, n.cy = i / n.charge
    }

    function ii(n, t) {
        return ya.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ci, n
    }

    function ui(n) {
        return n.children
    }

    function ai(n) {
        return n.value
    }

    function oi(n, t) {
        return t.value - n.value
    }

    function ci(n) {
        return ya.merge(n.map(function (n) {
            return (n.children || []).map(function (t) {
                return {
                    source: n
                    , target: t
                }
            })
        }))
    }

    function li(n) {
        return n.x
    }

    function si(n) {
        return n.y
    }

    function fi(n, t, e) {
        n.y0 = t, n.y = e
    }

    function hi(n) {
        return ya.range(n.length)
    }

    function gi(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
        return r
    }

    function pi(n) {
        for (var t, e = 1, r = 0, i = n[0][1], u = n.length; u > e; ++e)(t = n[e][1]) > i && (r = e, i = t);
        return r
    }

    function mi(n) {
        return n.reduce(di, 0)
    }

    function di(n, t) {
        return n + t[1]
    }

    function vi(n, t) {
        return yi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function yi(n, t) {
        for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;) u[e] = i * e + r;
        return u
    }

    function Mi(n) {
        return [ya.min(n), ya.max(n)]
    }

    function xi(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function bi(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }

    function _i(n) {
        var t, e = n.children;
        return e && (t = e.length) ? e[t - 1] : n._tree.thread
    }

    function wi(n, t) {
        var e = n.children;
        if (e && (i = e.length))
            for (var r, i, u = -1; ++u < i;) t(r = wi(e[u], t), n) > 0 && (n = r);
        return n
    }

    function Si(n, t) {
        return n.x - t.x
    }

    function Ei(n, t) {
        return t.x - n.x
    }

    function ki(n, t) {
        return n.depth - t.depth
    }

    function Ai(n, t) {
        function e(n, r) {
            var i = n.children;
            if (i && (a = i.length))
                for (var u, a, o = null, c = -1; ++c < a;) u = i[c], e(u, o), o = u;
            t(n, r)
        }
        e(n, null)
    }

    function Ni(n) {
        for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0;) t = i[u]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
    }

    function qi(n, t, e) {
        n = n._tree, t = t._tree;
        var r = e / (t.number - n.number);
        n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
    }

    function Ti(n, t, e) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
    }

    function Ci(n, t) {
        return n.value - t.value
    }

    function zi(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
    }

    function Di(n, t) {
        n._pack_next = t, t._pack_prev = n
    }

    function ji(n, t) {
        var e = t.x - n.x
            , r = t.y - n.y
            , i = n.r + t.r;
        return .999 * i * i > e * e + r * r
    }

    function Li(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (l = e.length)) {
            var e, r, i, u, a, o, c, l, s = 1 / 0
                , f = -1 / 0
                , h = 1 / 0
                , g = -1 / 0;
            if (e.forEach(Hi), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (i = e[1], i.x = i.r, i.y = 0, t(i), l > 2))
                for (u = e[2], Oi(r, i, u), t(u), zi(r, u), r._pack_prev = u, zi(u, i), i = r._pack_next, a = 3; l > a; a++) {
                    Oi(r, i, u = e[a]);
                    var p = 0
                        , m = 1
                        , d = 1;
                    for (o = i._pack_next; o !== i; o = o._pack_next, m++)
                        if (ji(o, u)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== o._pack_prev && !ji(c, u); c = c._pack_prev, d++);
                    p ? (d > m || m == d && i.r < r.r ? Di(r, i = o) : Di(r = c, i), a--) : (zi(r, u), i = u, t(u))
                }
            var v = (s + f) / 2
                , y = (h + g) / 2
                , M = 0;
            for (a = 0; l > a; a++) u = e[a], u.x -= v, u.y -= y, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
            n.r = M, e.forEach(Fi)
        }
    }

    function Hi(n) {
        n._pack_next = n._pack_prev = n
    }

    function Fi(n) {
        delete n._pack_next, delete n._pack_prev
    }

    function Pi(n, t, e, r) {
        var i = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, i)
            for (var u = -1, a = i.length; ++u < a;) Pi(i[u], t, e, r)
    }

    function Oi(n, t, e) {
        var r = n.r + e.r
            , i = t.x - n.x
            , u = t.y - n.y;
        if (r && (i || u)) {
            var a = t.r + e.r
                , o = i * i + u * u;
            a *= a, r *= r;
            var c = .5 + (r - a) / (2 * o)
                , l = Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) / (2 * o);
            e.x = n.x + c * i + l * u, e.y = n.y + c * u - l * i
        }
        else e.x = n.x + r, e.y = n.y
    }

    function Yi(n) {
        return 1 + ya.max(n, function (n) {
            return n.y
        })
    }

    function Ri(n) {
        return n.reduce(function (n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function Ui(n) {
        var t = n.children;
        return t && t.length ? Ui(t[0]) : n
    }

    function Ii(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Ii(e[t - 1]) : n
    }

    function Vi(n) {
        return {
            x: n.x
            , y: n.y
            , dx: n.dx
            , dy: n.dy
        }
    }

    function Xi(n, t) {
        var e = n.x + t[3]
            , r = n.y + t[0]
            , i = n.dx - t[1] - t[3]
            , u = n.dy - t[0] - t[2];
        return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), {
            x: e
            , y: r
            , dx: i
            , dy: u
        }
    }

    function Zi(n) {
        var t = n[0]
            , e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }

    function Bi(n) {
        return n.rangeExtent ? n.rangeExtent() : Zi(n.range())
    }

    function $i(n, t, e, r) {
        var i = e(n[0], n[1])
            , u = r(t[0], t[1]);
        return function (n) {
            return u(i(n))
        }
    }

    function Wi(n, t) {
        var e, r = 0
            , i = n.length - 1
            , u = n[r]
            , a = n[i];
        return u > a && (e = r, r = i, i = e, e = u, u = a, a = e), n[r] = t.floor(u), n[i] = t.ceil(a), n
    }

    function Ji(n) {
        return n ? {
            floor: function (t) {
                return Math.floor(t / n) * n
            }
            , ceil: function (t) {
                return Math.ceil(t / n) * n
            }
        } : kc
    }

    function Gi(n, t, e, r) {
        var i = []
            , u = []
            , a = 0
            , o = Math.min(n.length, t.length) - 1;
        for (n[o] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= o;) i.push(e(n[a - 1], n[a])), u.push(r(t[a - 1], t[a]));
        return function (t) {
            var e = ya.bisect(n, t, 1, o) - 1;
            return u[e](i[e](t))
        }
    }

    function Ki(n, t, e, r) {
        function i() {
            var i = Math.min(n.length, t.length) > 2 ? Gi : $i
                , c = r ? Wr : $r;
            return a = i(n, t, c, e), o = i(t, n, c, Sr), u
        }

        function u(n) {
            return a(n)
        }
        var a, o;
        return u.invert = function (n) {
            return o(n)
        }, u.domain = function (t) {
            return arguments.length ? (n = t.map(Number), i()) : n
        }, u.range = function (n) {
            return arguments.length ? (t = n, i()) : t
        }, u.rangeRound = function (n) {
            return u.range(n).interpolate(Ur)
        }, u.clamp = function (n) {
            return arguments.length ? (r = n, i()) : r
        }, u.interpolate = function (n) {
            return arguments.length ? (e = n, i()) : e
        }, u.ticks = function (t) {
            return ru(n, t)
        }, u.tickFormat = function (t, e) {
            return iu(n, t, e)
        }, u.nice = function (t) {
            return nu(n, t), i()
        }, u.copy = function () {
            return Ki(n, t, e, r)
        }, i()
    }

    function Qi(n, t) {
        return ya.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function nu(n, t) {
        return Wi(n, Ji(t ? eu(n, t)[2] : tu(n)))
    }

    function tu(n) {
        var t = Zi(n)
            , e = t[1] - t[0];
        return Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1)
    }

    function eu(n, t) {
        var e = Zi(n)
            , r = e[1] - e[0]
            , i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10))
            , u = t / r * i;
        return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
    }

    function ru(n, t) {
        return ya.range.apply(ya, eu(n, t))
    }

    function iu(n, t, e) {
        var r = -Math.floor(Math.log(eu(n, t)[2]) / Math.LN10 + .01);
        return ya.format(e ? e.replace(wo, function (n, t, e, i, u, a, o, c, l, s) {
            return [t, e, i, u, a, o, c, l || "." + (r - 2 * ("%" === s)), s].join("")
        }) : ",." + r + "f")
    }

    function uu(n, t, e, r) {
        function i(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }

        function u(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }

        function a(t) {
            return n(i(t))
        }
        return a.invert = function (t) {
            return u(n.invert(t))
        }, a.domain = function (t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(i)), a) : r
        }, a.base = function (e) {
            return arguments.length ? (t = +e, n.domain(r.map(i)), a) : t
        }, a.nice = function () {
            var t = Wi(r.map(i), e ? Math : Nc);
            return n.domain(t), r = t.map(u), a
        }, a.ticks = function () {
            var n = Zi(r)
                , a = []
                , o = n[0]
                , c = n[1]
                , l = Math.floor(i(o))
                , s = Math.ceil(i(c))
                , f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (e) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++) a.push(u(l) * h);
                    a.push(u(l))
                }
                else
                    for (a.push(u(l)); l++ < s;)
                        for (var h = f - 1; h > 0; h--) a.push(u(l) * h);
                for (l = 0; a[l] < o; l++);
                for (s = a.length; a[s - 1] > c; s--);
                a = a.slice(l, s)
            }
            return a
        }, a.tickFormat = function (n, t) {
            if (!arguments.length) return Ac;
            arguments.length < 2 ? t = Ac : "function" != typeof t && (t = ya.format(t));
            var r, o = Math.max(.1, n / a.ticks().length)
                , c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function (n) {
                return n / u(c(i(n) + r)) <= o ? t(n) : ""
            }
        }, a.copy = function () {
            return uu(n.copy(), t, e, r)
        }, Qi(a, n)
    }

    function au(n, t, e) {
        function r(t) {
            return n(i(t))
        }
        var i = ou(t)
            , u = ou(1 / t);
        return r.invert = function (t) {
            return u(n.invert(t))
        }, r.domain = function (t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e
        }, r.ticks = function (n) {
            return ru(e, n)
        }, r.tickFormat = function (n, t) {
            return iu(e, n, t)
        }, r.nice = function (n) {
            return r.domain(nu(e, n))
        }, r.exponent = function (a) {
            return arguments.length ? (i = ou(t = a), u = ou(1 / t), n.domain(e.map(i)), r) : t
        }, r.copy = function () {
            return au(n.copy(), t, e)
        }, Qi(r, n)
    }

    function ou(n) {
        return function (t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function cu(n, t) {
        function e(t) {
            return a[((u.get(t) || u.set(t, n.push(t))) - 1) % a.length]
        }

        function r(t, e) {
            return ya.range(n.length).map(function (n) {
                return t + e * n
            })
        }
        var u, a, o;
        return e.domain = function (r) {
            if (!arguments.length) return n;
            n = [], u = new i;
            for (var a, o = -1, c = r.length; ++o < c;) u.has(a = r[o]) || u.set(a, n.push(a));
            return e[t.t].apply(e, t.a)
        }, e.range = function (n) {
            return arguments.length ? (a = n, o = 0, t = {
                t: "range"
                , a: arguments
            }, e) : a
        }, e.rangePoints = function (i, u) {
            arguments.length < 2 && (u = 0);
            var c = i[0]
                , l = i[1]
                , s = (l - c) / (Math.max(1, n.length - 1) + u);
            return a = r(n.length < 2 ? (c + l) / 2 : c + s * u / 2, s), o = 0, t = {
                t: "rangePoints"
                , a: arguments
            }, e
        }, e.rangeBands = function (i, u, c) {
            arguments.length < 2 && (u = 0), arguments.length < 3 && (c = u);
            var l = i[1] < i[0]
                , s = i[l - 0]
                , f = i[1 - l]
                , h = (f - s) / (n.length - u + 2 * c);
            return a = r(s + h * c, h), l && a.reverse(), o = h * (1 - u), t = {
                t: "rangeBands"
                , a: arguments
            }, e
        }, e.rangeRoundBands = function (i, u, c) {
            arguments.length < 2 && (u = 0), arguments.length < 3 && (c = u);
            var l = i[1] < i[0]
                , s = i[l - 0]
                , f = i[1 - l]
                , h = Math.floor((f - s) / (n.length - u + 2 * c))
                , g = f - s - (n.length - u) * h;
            return a = r(s + Math.round(g / 2), h), l && a.reverse(), o = Math.round(h * (1 - u)), t = {
                t: "rangeRoundBands"
                , a: arguments
            }, e
        }, e.rangeBand = function () {
            return o
        }, e.rangeExtent = function () {
            return Zi(t.a[0])
        }, e.copy = function () {
            return cu(n, t)
        }, e.domain(n)
    }

    function lu(n, t) {
        function e() {
            var e = 0
                , u = t.length;
            for (i = []; ++e < u;) i[e - 1] = ya.quantile(n, e / u);
            return r
        }

        function r(n) {
            return isNaN(n = +n) ? void 0 : t[ya.bisect(i, n)]
        }
        var i;
        return r.domain = function (t) {
            return arguments.length ? (n = t.filter(function (n) {
                return !isNaN(n)
            }).sort(ya.ascending), e()) : n
        }, r.range = function (n) {
            return arguments.length ? (t = n, e()) : t
        }, r.quantiles = function () {
            return i
        }, r.invertExtent = function (e) {
            return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? i[e - 1] : n[0], e < i.length ? i[e] : n[n.length - 1]]
        }, r.copy = function () {
            return lu(n, t)
        }, e()
    }

    function su(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(a, Math.floor(u * (t - n))))]
        }

        function i() {
            return u = e.length / (t - n), a = e.length - 1, r
        }
        var u, a;
        return r.domain = function (e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], i()) : [n, t]
        }, r.range = function (n) {
            return arguments.length ? (e = n, i()) : e
        }, r.invertExtent = function (t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / u + n, [t, t + 1 / u]
        }, r.copy = function () {
            return su(n, t, e)
        }, i()
    }

    function fu(n, t) {
        function e(e) {
            return e >= e ? t[ya.bisect(n, e)] : void 0
        }
        return e.domain = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function (n) {
            return arguments.length ? (t = n, e) : t
        }, e.invertExtent = function (e) {
            return e = t.indexOf(e), [n[e - 1], n[e]]
        }, e.copy = function () {
            return fu(n, t)
        }, e
    }

    function hu(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function (e) {
            return arguments.length ? (n = e.map(t), t) : n
        }, t.ticks = function (t) {
            return ru(n, t)
        }, t.tickFormat = function (t, e) {
            return iu(n, t, e)
        }, t.copy = function () {
            return hu(n)
        }, t
    }

    function gu(n) {
        return n.innerRadius
    }

    function pu(n) {
        return n.outerRadius
    }

    function mu(n) {
        return n.startAngle
    }

    function du(n) {
        return n.endAngle
    }

    function vu(n) {
        for (var t, e, r, i = -1, u = n.length; ++i < u;) t = n[i], e = t[0], r = t[1] + Dc, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n
    }

    function yu(n) {
        function t(t) {
            function c() {
                m.push("M", o(n(v), f), s, l(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, m = [], d = [], v = [], y = -1, M = t.length, x = pt(e), b = pt(i), _ = e === r ? function () {
                    return g
                } : pt(r), w = i === u ? function () {
                    return p
                } : pt(u); ++y < M;) a.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), v.push([+_.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], v = []);
            return d.length && c(), m.length ? m.join("") : null
        }
        var e = Ie
            , r = Ie
            , i = 0
            , u = Ve
            , a = Xt
            , o = Xe
            , c = o.key
            , l = o
            , s = "L"
            , f = .7;
        return t.x = function (n) {
            return arguments.length ? (e = r = n, t) : r
        }, t.x0 = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.x1 = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function (n) {
            return arguments.length ? (i = u = n, t) : u
        }, t.y0 = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.y1 = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.defined = function (n) {
            return arguments.length ? (a = n, t) : a
        }, t.interpolate = function (n) {
            return arguments.length ? (c = "function" == typeof n ? o = n : (o = sc.get(n) || Xe).key, l = o.reverse || o, s = o.closed ? "M" : "L", t) : c
        }, t.tension = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }

    function Mu(n) {
        return n.radius
    }

    function xu(n) {
        return [n.x, n.y]
    }

    function bu(n) {
        return function () {
            var t = n.apply(this, arguments)
                , e = t[0]
                , r = t[1] + Dc;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function _u() {
        return 64
    }

    function wu() {
        return "circle"
    }

    function Su(n) {
        var t = Math.sqrt(n / Ka);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Eu(n, t) {
        return La(n, Yc), n.id = t, n
    }

    function ku(n, t, e, r) {
        var i = n.id;
        return T(n, "function" == typeof e ? function (n, u, a) {
            n.__transition__[i].tween.set(t, r(e.call(n, n.__data__, u, a)))
        } : (e = r(e), function (n) {
            n.__transition__[i].tween.set(t, e)
        }))
    }

    function Au(n) {
        return null == n && (n = "")
            , function () {
                this.textContent = n
            }
    }

    function Nu(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
                active: 0
                , count: 0
            })
            , a = u[e];
        if (!a) {
            var o = r.time;
            a = u[e] = {
                tween: new i
                , time: o
                , ease: r.ease
                , delay: r.delay
                , duration: r.duration
            }, ++u.count, ya.timer(function (r) {
                function i(r) {
                    return u.active > e ? l() : (u.active = e, a.event && a.event.start.call(n, s, t), a.tween.forEach(function (e, r) {
                        (r = r.call(n, s, t)) && p.push(r)
                    }), c(r) ? 1 : (xt(c, 0, o), void 0))
                }

                function c(r) {
                    if (u.active !== e) return l();
                    for (var i = (r - h) / g, o = f(i), c = p.length; c > 0;) p[--c].call(n, o);
                    return i >= 1 ? (l(), a.event && a.event.end.call(n, s, t), 1) : void 0
                }

                function l() {
                    return --u.count ? delete u[e] : delete n.__transition__, 1
                }
                var s = n.__data__
                    , f = a.ease
                    , h = a.delay
                    , g = a.duration
                    , p = [];
                return r >= h ? i(r) : (xt(i, h, o), void 0)
            }, 0, o)
        }
    }

    function qu(n, t) {
        n.attr("transform", function (n) {
            return "translate(" + t(n) + ",0)"
        })
    }

    function Tu(n, t) {
        n.attr("transform", function (n) {
            return "translate(0," + t(n) + ")"
        })
    }

    function Cu(n, t, e) {
        if (r = [], e && t.length > 1) {
            for (var r, i, u, a = Zi(n.domain()), o = -1, c = t.length, l = (t[1] - t[0]) / ++e; ++o < c;)
                for (i = e; --i > 0;)(u = +t[o] - i * l) >= a[0] && r.push(u);
            for (--o, i = 0; ++i < e && (u = +t[o] + i * l) < a[1];) r.push(u)
        }
        return r
    }

    function zu() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Du(n, t, e) {
        function r(t) {
            var e = n(t)
                , r = u(e, 1);
            return r - t > t - e ? e : r
        }

        function i(e) {
            return t(e = n(new Zc(e - 1)), 1), e
        }

        function u(n, e) {
            return t(n = new Zc(+n), e), n
        }

        function a(n, r, u) {
            var a = i(n)
                , o = [];
            if (u > 1)
                for (; r > a;) e(a) % u || o.push(new Date(+a)), t(a, 1);
            else
                for (; r > a;) o.push(new Date(+a)), t(a, 1);
            return o
        }

        function o(n, t, e) {
            try {
                Zc = zu;
                var r = new zu;
                return r._ = n, a(r, t, e)
            }
            finally {
                Zc = Date
            }
        }
        n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = a;
        var c = n.utc = ju(n);
        return c.floor = c, c.round = ju(r), c.ceil = ju(i), c.offset = ju(u), c.range = o, n
    }

    function ju(n) {
        return function (t, e) {
            try {
                Zc = zu;
                var r = new zu;
                return r._ = t, n(r, e)._
            }
            finally {
                Zc = Date
            }
        }
    }

    function Lu(n, t, e, r) {
        for (var i, u, a = 0, o = t.length, c = e.length; o > a;) {
            if (r >= c) return -1;
            if (i = t.charCodeAt(a++), 37 === i) {
                if (u = gl[t.charAt(a++)], !u || (r = u(n, e, r)) < 0) return -1
            }
            else if (i != e.charCodeAt(r++)) return -1
        }
        return r
    }

    function Hu(n) {
        return new RegExp("^(?:" + n.map(ya.requote).join("|") + ")", "i")
    }

    function Fu(n) {
        for (var t = new i, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
        return t
    }

    function Pu(n, t, e) {
        var r = 0 > n ? "-" : ""
            , i = (r ? -n : n) + ""
            , u = i.length;
        return r + (e > u ? new Array(e - u + 1).join(t) + i : i)
    }

    function Ou(n, t, e) {
        il.lastIndex = 0;
        var r = il.exec(t.substring(e));
        return r ? (n.w = ul.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Yu(n, t, e) {
        el.lastIndex = 0;
        var r = el.exec(t.substring(e));
        return r ? (n.w = rl.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Ru(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1
    }

    function Uu(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1
    }

    function Iu(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1
    }

    function Vu(n, t, e) {
        cl.lastIndex = 0;
        var r = cl.exec(t.substring(e));
        return r ? (n.m = ll.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Xu(n, t, e) {
        al.lastIndex = 0;
        var r = al.exec(t.substring(e));
        return r ? (n.m = ol.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Zu(n, t, e) {
        return Lu(n, hl.c.toString(), t, e)
    }

    function Bu(n, t, e) {
        return Lu(n, hl.x.toString(), t, e)
    }

    function $u(n, t, e) {
        return Lu(n, hl.X.toString(), t, e)
    }

    function Wu(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1
    }

    function Ju(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.y = Gu(+r[0]), e + r[0].length) : -1
    }

    function Gu(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function Ku(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1
    }

    function Qu(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1
    }

    function na(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1
    }

    function ta(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1
    }

    function ea(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1
    }

    function ra(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1
    }

    function ia(n, t, e) {
        pl.lastIndex = 0;
        var r = pl.exec(t.substring(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1
    }

    function ua(n, t, e) {
        var r = ml.get(t.substring(e, e += 2).toLowerCase());
        return null == r ? -1 : (n.p = r, e)
    }

    function aa(n) {
        var t = n.getTimezoneOffset()
            , e = t > 0 ? "-" : "+"
            , r = ~~(Math.abs(t) / 60)
            , i = Math.abs(t) % 60;
        return e + Pu(r, "0", 2) + Pu(i, "0", 2)
    }

    function oa(n, t, e) {
        sl.lastIndex = 0;
        var r = sl.exec(t.substring(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ca(n) {
        return n.toISOString()
    }

    function la(n, t, e) {
        function r(t) {
            return n(t)
        }
        return r.invert = function (t) {
            return sa(n.invert(t))
        }, r.domain = function (t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(sa)
        }, r.nice = function (n) {
            return r.domain(Wi(r.domain(), n))
        }, r.ticks = function (e, i) {
            var u = Zi(r.domain());
            if ("function" != typeof e) {
                var a = u[1] - u[0]
                    , o = a / e
                    , c = ya.bisect(vl, o);
                if (c == vl.length) return t.year(u, e);
                if (!c) return n.ticks(e).map(sa);
                o / vl[c - 1] < vl[c] / o && --c, e = t[c], i = e[1], e = e[0].range
            }
            return e(u[0], new Date(+u[1] + 1), i)
        }, r.tickFormat = function () {
            return e
        }, r.copy = function () {
            return la(n.copy(), t, e)
        }, Qi(r, n)
    }

    function sa(n) {
        return new Date(n)
    }

    function fa(n) {
        return function (t) {
            for (var e = n.length - 1, r = n[e]; !r[1](t);) r = n[--e];
            return r[0](t)
        }
    }

    function ha(n) {
        var t = new Date(n, 0, 1);
        return t.setFullYear(n), t
    }

    function ga(n) {
        var t = n.getFullYear()
            , e = ha(t)
            , r = ha(t + 1);
        return t + (n - e) / (r - e)
    }

    function pa(n) {
        var t = new Date(Date.UTC(n, 0, 1));
        return t.setUTCFullYear(n), t
    }

    function ma(n) {
        var t = n.getUTCFullYear()
            , e = pa(t)
            , r = pa(t + 1);
        return t + (n - e) / (r - e)
    }

    function da(n) {
        return JSON.parse(n.responseText)
    }

    function va(n) {
        var t = Ma.createRange();
        return t.selectNode(Ma.body), t.createContextualFragment(n.responseText)
    }
    var ya = {
        version: "3.2.8"
    };
    Date.now || (Date.now = function () {
        return +new Date
    });
    var Ma = document
        , xa = Ma.documentElement
        , ba = window;
    try {
        Ma.createElement("div").style.setProperty("opacity", 0, "")
    }
    catch (_a) {
        var wa = ba.Element.prototype
            , Sa = wa.setAttribute
            , Ea = wa.setAttributeNS
            , ka = ba.CSSStyleDeclaration.prototype
            , Aa = ka.setProperty;
        wa.setAttribute = function (n, t) {
            Sa.call(this, n, t + "")
        }, wa.setAttributeNS = function (n, t, e) {
            Ea.call(this, n, t, e + "")
        }, ka.setProperty = function (n, t, e) {
            Aa.call(this, n, t + "", e)
        }
    }
    ya.ascending = function (n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }, ya.descending = function (n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, ya.min = function (n, t) {
        var e, r, i = -1
            , u = n.length;
        if (1 === arguments.length) {
            for (; ++i < u && !(null != (e = n[i]) && e >= e);) e = void 0;
            for (; ++i < u;) null != (r = n[i]) && e > r && (e = r)
        }
        else {
            for (; ++i < u && !(null != (e = t.call(n, n[i], i)) && e >= e);) e = void 0;
            for (; ++i < u;) null != (r = t.call(n, n[i], i)) && e > r && (e = r)
        }
        return e
    }, ya.max = function (n, t) {
        var e, r, i = -1
            , u = n.length;
        if (1 === arguments.length) {
            for (; ++i < u && !(null != (e = n[i]) && e >= e);) e = void 0;
            for (; ++i < u;) null != (r = n[i]) && r > e && (e = r)
        }
        else {
            for (; ++i < u && !(null != (e = t.call(n, n[i], i)) && e >= e);) e = void 0;
            for (; ++i < u;) null != (r = t.call(n, n[i], i)) && r > e && (e = r)
        }
        return e
    }, ya.extent = function (n, t) {
        var e, r, i, u = -1
            , a = n.length;
        if (1 === arguments.length) {
            for (; ++u < a && !(null != (e = i = n[u]) && e >= e);) e = i = void 0;
            for (; ++u < a;) null != (r = n[u]) && (e > r && (e = r), r > i && (i = r))
        }
        else {
            for (; ++u < a && !(null != (e = i = t.call(n, n[u], u)) && e >= e);) e = void 0;
            for (; ++u < a;) null != (r = t.call(n, n[u], u)) && (e > r && (e = r), r > i && (i = r))
        }
        return [e, i]
    }, ya.sum = function (n, t) {
        var e, r = 0
            , i = n.length
            , u = -1;
        if (1 === arguments.length)
            for (; ++u < i;) isNaN(e = +n[u]) || (r += e);
        else
            for (; ++u < i;) isNaN(e = +t.call(n, n[u], u)) || (r += e);
        return r
    }, ya.mean = function (t, e) {
        var r, i = t.length
            , u = 0
            , a = -1
            , o = 0;
        if (1 === arguments.length)
            for (; ++a < i;) n(r = t[a]) && (u += (r - u) / ++o);
        else
            for (; ++a < i;) n(r = e.call(t, t[a], a)) && (u += (r - u) / ++o);
        return o ? u : void 0
    }, ya.quantile = function (n, t) {
        var e = (n.length - 1) * t + 1
            , r = Math.floor(e)
            , i = +n[r - 1]
            , u = e - r;
        return u ? i + u * (n[r] - i) : i
    }, ya.median = function (t, e) {
        return arguments.length > 1 && (t = t.map(e)), t = t.filter(n), t.length ? ya.quantile(t.sort(ya.ascending), .5) : void 0
    }, ya.bisector = function (n) {
        return {
            left: function (t, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
                    var u = r + i >>> 1;
                    n.call(t, t[u], u) < e ? r = u + 1 : i = u
                }
                return r
            }
            , right: function (t, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
                    var u = r + i >>> 1;
                    e < n.call(t, t[u], u) ? i = u : r = u + 1
                }
                return r
            }
        }
    };
    var Na = ya.bisector(function (n) {
        return n
    });
    ya.bisectLeft = Na.left, ya.bisect = ya.bisectRight = Na.right, ya.shuffle = function (n) {
        for (var t, e, r = n.length; r;) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
        return n
    }, ya.permute = function (n, t) {
        for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
        return r
    }, ya.zip = function () {
        if (!(i = arguments.length)) return [];
        for (var n = -1, e = ya.min(arguments, t), r = new Array(e); ++n < e;)
            for (var i, u = -1, a = r[n] = new Array(i); ++u < i;) a[u] = arguments[u][n];
        return r
    }, ya.transpose = function (n) {
        return ya.zip.apply(ya, n)
    }, ya.keys = function (n) {
        var t = [];
        for (var e in n) t.push(e);
        return t
    }, ya.values = function (n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t
    }, ya.entries = function (n) {
        var t = [];
        for (var e in n) t.push({
            key: e
            , value: n[e]
        });
        return t
    }, ya.merge = function (n) {
        return Array.prototype.concat.apply([], n)
    }, ya.range = function (n, t, r) {
        if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r) throw new Error("infinite range");
        var i, u = []
            , a = e(Math.abs(r))
            , o = -1;
        if (n *= a, t *= a, r *= a, 0 > r)
            for (;
                (i = n + r * ++o) > t;) u.push(i / a);
        else
            for (;
                (i = n + r * ++o) < t;) u.push(i / a);
        return u
    }, ya.map = function (n) {
        var t = new i;
        if (n instanceof i) n.forEach(function (n, e) {
            t.set(n, e)
        });
        else
            for (var e in n) t.set(e, n[e]);
        return t
    }, r(i, {
        has: function (n) {
            return qa + n in this
        }
        , get: function (n) {
            return this[qa + n]
        }
        , set: function (n, t) {
            return this[qa + n] = t
        }
        , remove: function (n) {
            return n = qa + n, n in this && delete this[n]
        }
        , keys: function () {
            var n = [];
            return this.forEach(function (t) {
                n.push(t)
            }), n
        }
        , values: function () {
            var n = [];
            return this.forEach(function (t, e) {
                n.push(e)
            }), n
        }
        , entries: function () {
            var n = [];
            return this.forEach(function (t, e) {
                n.push({
                    key: t
                    , value: e
                })
            }), n
        }
        , forEach: function (n) {
            for (var t in this) t.charCodeAt(0) === Ta && n.call(this, t.substring(1), this[t])
        }
    });
    var qa = "\0"
        , Ta = qa.charCodeAt(0);
    ya.nest = function () {
        function n(t, o, c) {
            if (c >= a.length) return r ? r.call(u, o) : e ? o.sort(e) : o;
            for (var l, s, f, h, g = -1, p = o.length, m = a[c++], d = new i; ++g < p;)(h = d.get(l = m(s = o[g]))) ? h.push(s) : d.set(l, [s]);
            return t ? (s = t(), f = function (e, r) {
                s.set(e, n(t, r, c))
            }) : (s = {}, f = function (e, r) {
                s[e] = n(t, r, c)
            }), d.forEach(f), s
        }

        function t(n, e) {
            if (e >= a.length) return n;
            var r = []
                , i = o[e++];
            return n.forEach(function (n, i) {
                r.push({
                    key: n
                    , values: t(i, e)
                })
            }), i ? r.sort(function (n, t) {
                return i(n.key, t.key)
            }) : r
        }
        var e, r, u = {}
            , a = []
            , o = [];
        return u.map = function (t, e) {
            return n(e, t, 0)
        }, u.entries = function (e) {
            return t(n(ya.map, e, 0), 0)
        }, u.key = function (n) {
            return a.push(n), u
        }, u.sortKeys = function (n) {
            return o[a.length - 1] = n, u
        }, u.sortValues = function (n) {
            return e = n, u
        }, u.rollup = function (n) {
            return r = n, u
        }, u
    }, ya.set = function (n) {
        var t = new u;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
        return t
    }, r(u, {
        has: function (n) {
            return qa + n in this
        }
        , add: function (n) {
            return this[qa + n] = !0, n
        }
        , remove: function (n) {
            return n = qa + n, n in this && delete this[n]
        }
        , values: function () {
            var n = [];
            return this.forEach(function (t) {
                n.push(t)
            }), n
        }
        , forEach: function (n) {
            for (var t in this) t.charCodeAt(0) === Ta && n.call(this, t.substring(1))
        }
    }), ya.behavior = {}, ya.rebind = function (n, t) {
        for (var e, r = 1, i = arguments.length; ++r < i;) n[e = arguments[r]] = a(n, t, t[e]);
        return n
    };
    var Ca = ["webkit", "ms", "moz", "Moz", "o", "O"]
        , za = l;
    try {
        za(xa.childNodes)[0].nodeType
    }
    catch (Da) {
        za = c
    }
    ya.dispatch = function () {
        for (var n = new f, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = h(n);
        return n
    }, f.prototype.on = function (n, t) {
        var e = n.indexOf(".")
            , r = "";
        if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
            return this
        }
    }, ya.event = null, ya.requote = function (n) {
        return n.replace(ja, "\\$&")
    };
    var ja = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
        , La = {}.__proto__ ? function (n, t) {
            n.__proto__ = t
        } : function (n, t) {
            for (var e in t) n[e] = t[e]
        }
        , Ha = function (n, t) {
            return t.querySelector(n)
        }
        , Fa = function (n, t) {
            return t.querySelectorAll(n)
        }
        , Pa = xa[o(xa, "matchesSelector")]
        , Oa = function (n, t) {
            return Pa.call(n, t)
        };
    "function" == typeof Sizzle && (Ha = function (n, t) {
        return Sizzle(n, t)[0] || null
    }, Fa = function (n, t) {
        return Sizzle.uniqueSort(Sizzle(n, t))
    }, Oa = Sizzle.matchesSelector), ya.selection = function () {
        return Ia
    };
    var Ya = ya.selection.prototype = [];
    Ya.select = function (n) {
        var t, e, r, i, u = [];
        n = v(n);
        for (var a = -1, o = this.length; ++a < o;) {
            u.push(t = []), t.parentNode = (r = this[a]).parentNode;
            for (var c = -1, l = r.length; ++c < l;)(i = r[c]) ? (t.push(e = n.call(i, i.__data__, c, a)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null)
        }
        return d(u)
    }, Ya.selectAll = function (n) {
        var t, e, r = [];
        n = y(n);
        for (var i = -1, u = this.length; ++i < u;)
            for (var a = this[i], o = -1, c = a.length; ++o < c;)(e = a[o]) && (r.push(t = za(n.call(e, e.__data__, o, i))), t.parentNode = e);
        return d(r)
    };
    var Ra = {
        svg: "http://www.w3.org/2000/svg"
        , xhtml: "http://www.w3.org/1999/xhtml"
        , xlink: "http://www.w3.org/1999/xlink"
        , xml: "http://www.w3.org/XML/1998/namespace"
        , xmlns: "http://www.w3.org/2000/xmlns/"
    };
    ya.ns = {
        prefix: Ra
        , qualify: function (n) {
            var t = n.indexOf(":")
                , e = n;
            return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), Ra.hasOwnProperty(e) ? {
                space: Ra[e]
                , local: n
            } : n
        }
    }, Ya.attr = function (n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = ya.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n) this.each(M(t, n[t]));
            return this
        }
        return this.each(M(n, t))
    }, Ya.classed = function (n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node()
                    , r = (n = n.trim().split(/^|\s+/g)).length
                    , i = -1;
                if (t = e.classList) {
                    for (; ++i < r;)
                        if (!t.contains(n[i])) return !1
                }
                else
                    for (t = e.getAttribute("class"); ++i < r;)
                        if (!b(n[i]).test(t)) return !1; return !0
            }
            for (t in n) this.each(_(t, n[t]));
            return this
        }
        return this.each(_(n, t))
    }, Ya.style = function (n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n) this.each(S(e, n[e], t));
                return this
            }
            if (2 > r) return ba.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = ""
        }
        return this.each(S(n, t, e))
    }, Ya.property = function (n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(E(t, n[t]));
            return this
        }
        return this.each(E(n, t))
    }, Ya.text = function (n) {
        return arguments.length ? this.each("function" == typeof n ? function () {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = n
        }) : this.node().textContent
    }, Ya.html = function (n) {
        return arguments.length ? this.each("function" == typeof n ? function () {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, Ya.append = function (n) {
        return n = k(n), this.select(function () {
            return this.appendChild(n.apply(this, arguments))
        })
    }, Ya.insert = function (n, t) {
        return n = k(n), t = v(t), this.select(function () {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments))
        })
    }, Ya.remove = function () {
        return this.each(function () {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    }, Ya.data = function (n, t) {
        function e(n, e) {
            var r, u, a, o = n.length
                , f = e.length
                , h = Math.min(o, f)
                , g = new Array(f)
                , p = new Array(f)
                , m = new Array(o);
            if (t) {
                var d, v = new i
                    , y = new i
                    , M = [];
                for (r = -1; ++r < o;) d = t.call(u = n[r], u.__data__, r), v.has(d) ? m[r] = u : v.set(d, u), M.push(d);
                for (r = -1; ++r < f;) d = t.call(e, a = e[r], r), (u = v.get(d)) ? (g[r] = u, u.__data__ = a) : y.has(d) || (p[r] = A(a)), y.set(d, a), v.remove(d);
                for (r = -1; ++r < o;) v.has(M[r]) && (m[r] = n[r])
            }
            else {
                for (r = -1; ++r < h;) u = n[r], a = e[r], u ? (u.__data__ = a, g[r] = u) : p[r] = A(a);
                for (; f > r; ++r) p[r] = A(e[r]);
                for (; o > r; ++r) m[r] = n[r]
            }
            p.update = g, p.parentNode = g.parentNode = m.parentNode = n.parentNode, c.push(p), l.push(g), s.push(m)
        }
        var r, u, a = -1
            , o = this.length;
        if (!arguments.length) {
            for (n = new Array(o = (r = this[0]).length); ++a < o;)(u = r[a]) && (n[a] = u.__data__);
            return n
        }
        var c = C([])
            , l = d([])
            , s = d([]);
        if ("function" == typeof n)
            for (; ++a < o;) e(r = this[a], n.call(r, r.parentNode.__data__, a));
        else
            for (; ++a < o;) e(r = this[a], n);
        return l.enter = function () {
            return c
        }, l.exit = function () {
            return s
        }, l
    }, Ya.datum = function (n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, Ya.filter = function (n) {
        var t, e, r, i = [];
        "function" != typeof n && (n = N(n));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(t = []), t.parentNode = (e = this[u]).parentNode;
            for (var o = 0, c = e.length; c > o; o++)(r = e[o]) && n.call(r, r.__data__, o) && t.push(r)
        }
        return d(i)
    }, Ya.order = function () {
        for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;)(e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
        return this
    }, Ya.sort = function (n) {
        n = q.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
        return this.order()
    }, Ya.each = function (n) {
        return T(this, function (t, e, r) {
            n.call(t, t.__data__, e, r)
        })
    }, Ya.call = function (n) {
        var t = za(arguments);
        return n.apply(t[0] = this, t), this
    }, Ya.empty = function () {
        return !this.node()
    }, Ya.node = function () {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, i = e.length; i > r; r++) {
                var u = e[r];
                if (u) return u
            }
        return null
    }, Ya.size = function () {
        var n = 0;
        return this.each(function () {
            ++n
        }), n
    };
    var Ua = [];
    ya.selection.enter = C, ya.selection.enter.prototype = Ua, Ua.append = Ya.append, Ua.empty = Ya.empty, Ua.node = Ya.node, Ua.call = Ya.call, Ua.size = Ya.size, Ua.select = function (n) {
        for (var t, e, r, i, u, a = [], o = -1, c = this.length; ++o < c;) {
            r = (i = this[o]).update, a.push(t = []), t.parentNode = i.parentNode;
            for (var l = -1, s = i.length; ++l < s;)(u = i[l]) ? (t.push(r[l] = e = n.call(i.parentNode, u.__data__, l, o)), e.__data__ = u.__data__) : t.push(null)
        }
        return d(a)
    }, Ua.insert = function (n, t) {
        return arguments.length < 2 && (t = z(this)), Ya.insert.call(this, n, t)
    }, Ya.transition = function () {
        for (var n, t, e = Hc || ++Rc, r = [], i = Fc || {
                time: Date.now()
                , ease: Cr
                , delay: 0
                , duration: 250
            }, u = -1, a = this.length; ++u < a;) {
            r.push(n = []);
            for (var o = this[u], c = -1, l = o.length; ++c < l;)(t = o[c]) && Nu(t, c, e, i), n.push(t)
        }
        return Eu(r, e)
    }, ya.select = function (n) {
        var t = ["string" == typeof n ? Ha(n, Ma) : n];
        return t.parentNode = xa, d([t])
    }, ya.selectAll = function (n) {
        var t = za("string" == typeof n ? Fa(n, Ma) : n);
        return t.parentNode = xa, d([t])
    };
    var Ia = ya.select(xa);
    Ya.on = function (n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n) this.each(D(e, n[e], t));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(D(n, t, e))
    };
    var Va = ya.map({
        mouseenter: "mouseover"
        , mouseleave: "mouseout"
    });
    Va.forEach(function (n) {
        "on" + n in Ma && Va.remove(n)
    });
    var Xa = o(xa.style, "userSelect")
        , Za = 0;
    ya.mouse = function (n) {
        return F(n, p())
    };
    var Ba = /WebKit/.test(ba.navigator.userAgent) ? -1 : 0;
    ya.touches = function (n, t) {
        return arguments.length < 2 && (t = p().touches), t ? za(t).map(function (t) {
            var e = F(n, t);
            return e.identifier = t.identifier, e
        }) : []
    }, ya.behavior.drag = function () {
        function n() {
            this.on("mousedown.drag", a).on("touchstart.drag", o)
        }

        function t() {
            return ya.event.changedTouches[0].identifier
        }

        function e(n, t) {
            return ya.touches(n).filter(function (n) {
                return n.identifier === t
            })[0]
        }

        function r(n, t, e, r) {
            return function () {
                function a() {
                    if (!s) return o();
                    var n = t(s, g)
                        , e = n[0] - m[0]
                        , r = n[1] - m[1];
                    d |= e | r, m = n, f({
                        type: "drag"
                        , x: n[0] + c[0]
                        , y: n[1] + c[1]
                        , dx: e
                        , dy: r
                    })
                }

                function o() {
                    v.on(e + "." + p, null).on(r + "." + p, null), y(d && ya.event.target === h), f({
                        type: "dragend"
                    })
                }
                var c, l = this
                    , s = l.parentNode
                    , f = i.of(l, arguments)
                    , h = ya.event.target
                    , g = n()
                    , p = null == g ? "drag" : "drag-" + g
                    , m = t(s, g)
                    , d = 0
                    , v = ya.select(ba).on(e + "." + p, a).on(r + "." + p, o)
                    , y = H();
                u ? (c = u.apply(l, arguments), c = [c.x - m[0], c.y - m[1]]) : c = [0, 0], f({
                    type: "dragstart"
                })
            }
        }
        var i = m(n, "drag", "dragstart", "dragend")
            , u = null
            , a = r(s, ya.mouse, "mousemove", "mouseup")
            , o = r(t, e, "touchmove", "touchend");
        return n.origin = function (t) {
            return arguments.length ? (u = t, n) : u
        }, ya.rebind(n, i, "on")
    }, ya.behavior.zoom = function () {
        function n() {
            this.on(w, o).on(Ja + ".zoom", l).on(S, s).on("dblclick.zoom", f).on(k, c)
        }

        function t(n) {
            return [(n[0] - x[0]) / b, (n[1] - x[1]) / b]
        }

        function e(n) {
            return [n[0] * b + x[0], n[1] * b + x[1]]
        }

        function r(n) {
            b = Math.max(_[0], Math.min(_[1], n))
        }

        function i(n, t) {
            t = e(t), x[0] += n[0] - t[0], x[1] += n[1] - t[1]
        }

        function u() {
            v && v.domain(d.range().map(function (n) {
                return (n - x[0]) / b
            }).map(d.invert)), M && M.domain(y.range().map(function (n) {
                return (n - x[1]) / b
            }).map(y.invert))
        }

        function a(n) {
            u(), n({
                type: "zoom"
                , scale: b
                , translate: x
            })
        }

        function o() {
            function n() {
                c = 1, i(ya.mouse(r), f), a(u)
            }

            function e() {
                l.on(S, ba === r ? s : null).on(E, null), h(c && ya.event.target === o)
            }
            var r = this
                , u = q.of(r, arguments)
                , o = ya.event.target
                , c = 0
                , l = ya.select(ba).on(S, n).on(E, e)
                , f = t(ya.mouse(r))
                , h = H()
        }

        function c() {
            function n() {
                var n = ya.touches(h);
                return f = b, s = {}, n.forEach(function (n) {
                    s[n.identifier] = t(n)
                }), n
            }

            function e() {
                var t = Date.now()
                    , e = n();
                if (1 === e.length) {
                    if (500 > t - p) {
                        var u = e[0]
                            , o = s[u.identifier];
                        r(2 * b), i(u, o), g(), a(m)
                    }
                    p = t
                }
                else if (e.length > 1) {
                    var u = e[0]
                        , c = e[1]
                        , l = u[0] - c[0]
                        , f = u[1] - c[1];
                    d = l * l + f * f
                }
            }

            function u() {
                var n = ya.touches(h)
                    , t = n[0]
                    , e = s[t.identifier];
                if (u = n[1]) {
                    var u, o = s[u.identifier]
                        , c = ya.event.scale;
                    if (null == c) {
                        var l = (l = u[0] - t[0]) * l + (l = u[1] - t[1]) * l;
                        c = d && Math.sqrt(l / d)
                    }
                    t = [(t[0] + u[0]) / 2, (t[1] + u[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(c * f)
                }
                p = null, i(t, e), a(m)
            }

            function l() {
                ya.event.touches.length ? n() : (v.on(A, null).on(N, null), y.on(w, o).on(k, c), M())
            }
            var s, f, h = this
                , m = q.of(h, arguments)
                , d = 0
                , v = ya.select(ba).on(A, u).on(N, l)
                , y = ya.select(h).on(w, null).on(k, e)
                , M = H();
            e()
        }

        function l() {
            g(), h || (h = t(ya.mouse(this))), r(Math.pow(2, .002 * $a()) * b), i(ya.mouse(this), h), a(q.of(this, arguments))
        }

        function s() {
            h = null
        }

        function f() {
            var n = ya.mouse(this)
                , e = t(n)
                , u = Math.log(b) / Math.LN2;
            r(Math.pow(2, ya.event.shiftKey ? Math.ceil(u) - 1 : Math.floor(u) + 1)), i(n, e), a(q.of(this, arguments))
        }
        var h, p, d, v, y, M, x = [0, 0]
            , b = 1
            , _ = Wa
            , w = "mousedown.zoom"
            , S = "mousemove.zoom"
            , E = "mouseup.zoom"
            , k = "touchstart.zoom"
            , A = "touchmove.zoom"
            , N = "touchend.zoom"
            , q = m(n, "zoom");
        return n.translate = function (t) {
            return arguments.length ? (x = t.map(Number), u(), n) : x
        }, n.scale = function (t) {
            return arguments.length ? (b = +t, u(), n) : b
        }, n.scaleExtent = function (t) {
            return arguments.length ? (_ = null == t ? Wa : t.map(Number), n) : _
        }, n.x = function (t) {
            return arguments.length ? (v = t, d = t.copy(), x = [0, 0], b = 1, n) : v
        }, n.y = function (t) {
            return arguments.length ? (M = t, y = t.copy(), x = [0, 0], b = 1, n) : M
        }, ya.rebind(n, q, "on")
    };
    var $a, Wa = [0, 1 / 0]
        , Ja = "onwheel" in Ma ? ($a = function () {
            return -ya.event.deltaY * (ya.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in Ma ? ($a = function () {
            return ya.event.wheelDelta
        }, "mousewheel") : ($a = function () {
            return -ya.event.detail
        }, "MozMousePixelScroll");
    P.prototype.toString = function () {
        return this.rgb() + ""
    }, ya.hsl = function (n, t, e) {
        return 1 === arguments.length ? n instanceof Y ? O(n.h, n.s, n.l) : lt("" + n, st, O) : O(+n, +t, +e)
    };
    var Ga = Y.prototype = new P;
    Ga.brighter = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), O(this.h, this.s, this.l / n)
    }, Ga.darker = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), O(this.h, this.s, n * this.l)
    }, Ga.rgb = function () {
        return R(this.h, this.s, this.l)
    };
    var Ka = Math.PI
        , Qa = 1e-6
        , no = Qa * Qa
        , to = Ka / 180
        , eo = 180 / Ka;
    ya.hcl = function (n, t, e) {
        return 1 === arguments.length ? n instanceof W ? $(n.h, n.c, n.l) : n instanceof K ? nt(n.l, n.a, n.b) : nt((n = ft((n = ya.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : $(+n, +t, +e)
    };
    var ro = W.prototype = new P;
    ro.brighter = function (n) {
        return $(this.h, this.c, Math.min(100, this.l + io * (arguments.length ? n : 1)))
    }, ro.darker = function (n) {
        return $(this.h, this.c, Math.max(0, this.l - io * (arguments.length ? n : 1)))
    }, ro.rgb = function () {
        return J(this.h, this.c, this.l).rgb()
    }, ya.lab = function (n, t, e) {
        return 1 === arguments.length ? n instanceof K ? G(n.l, n.a, n.b) : n instanceof W ? J(n.l, n.c, n.h) : ft((n = ya.rgb(n)).r, n.g, n.b) : G(+n, +t, +e)
    };
    var io = 18
        , uo = .95047
        , ao = 1
        , oo = 1.08883
        , co = K.prototype = new P;
    co.brighter = function (n) {
        return G(Math.min(100, this.l + io * (arguments.length ? n : 1)), this.a, this.b)
    }, co.darker = function (n) {
        return G(Math.max(0, this.l - io * (arguments.length ? n : 1)), this.a, this.b)
    }, co.rgb = function () {
        return Q(this.l, this.a, this.b)
    }, ya.rgb = function (n, t, e) {
        return 1 === arguments.length ? n instanceof ot ? at(n.r, n.g, n.b) : lt("" + n, at, R) : at(~~n, ~~t, ~~e)
    };
    var lo = ot.prototype = new P;
    lo.brighter = function (n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r
            , e = this.g
            , r = this.b
            , i = 30;
        return t || e || r ? (t && i > t && (t = i), e && i > e && (e = i), r && i > r && (r = i), at(Math.min(255, ~~(t / n)), Math.min(255, ~~(e / n)), Math.min(255, ~~(r / n)))) : at(i, i, i)
    }, lo.darker = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), at(~~(n * this.r), ~~(n * this.g), ~~(n * this.b))
    }, lo.hsl = function () {
        return st(this.r, this.g, this.b)
    }, lo.toString = function () {
        return "#" + ct(this.r) + ct(this.g) + ct(this.b)
    };
    var so = ya.map({
        aliceblue: 15792383
        , antiquewhite: 16444375
        , aqua: 65535
        , aquamarine: 8388564
        , azure: 15794175
        , beige: 16119260
        , bisque: 16770244
        , black: 0
        , blanchedalmond: 16772045
        , blue: 255
        , blueviolet: 9055202
        , brown: 10824234
        , burlywood: 14596231
        , cadetblue: 6266528
        , chartreuse: 8388352
        , chocolate: 13789470
        , coral: 16744272
        , cornflowerblue: 6591981
        , cornsilk: 16775388
        , crimson: 14423100
        , cyan: 65535
        , darkblue: 139
        , darkcyan: 35723
        , darkgoldenrod: 12092939
        , darkgray: 11119017
        , darkgreen: 25600
        , darkgrey: 11119017
        , darkkhaki: 12433259
        , darkmagenta: 9109643
        , darkolivegreen: 5597999
        , darkorange: 16747520
        , darkorchid: 10040012
        , darkred: 9109504
        , darksalmon: 15308410
        , darkseagreen: 9419919
        , darkslateblue: 4734347
        , darkslategray: 3100495
        , darkslategrey: 3100495
        , darkturquoise: 52945
        , darkviolet: 9699539
        , deeppink: 16716947
        , deepskyblue: 49151
        , dimgray: 6908265
        , dimgrey: 6908265
        , dodgerblue: 2003199
        , firebrick: 11674146
        , floralwhite: 16775920
        , forestgreen: 2263842
        , fuchsia: 16711935
        , gainsboro: 14474460
        , ghostwhite: 16316671
        , gold: 16766720
        , goldenrod: 14329120
        , gray: 8421504
        , green: 32768
        , greenyellow: 11403055
        , grey: 8421504
        , honeydew: 15794160
        , hotpink: 16738740
        , indianred: 13458524
        , indigo: 4915330
        , ivory: 16777200
        , khaki: 15787660
        , lavender: 15132410
        , lavenderblush: 16773365
        , lawngreen: 8190976
        , lemonchiffon: 16775885
        , lightblue: 11393254
        , lightcoral: 15761536
        , lightcyan: 14745599
        , lightgoldenrodyellow: 16448210
        , lightgray: 13882323
        , lightgreen: 9498256
        , lightgrey: 13882323
        , lightpink: 16758465
        , lightsalmon: 16752762
        , lightseagreen: 2142890
        , lightskyblue: 8900346
        , lightslategray: 7833753
        , lightslategrey: 7833753
        , lightsteelblue: 11584734
        , lightyellow: 16777184
        , lime: 65280
        , limegreen: 3329330
        , linen: 16445670
        , magenta: 16711935
        , maroon: 8388608
        , mediumaquamarine: 6737322
        , mediumblue: 205
        , mediumorchid: 12211667
        , mediumpurple: 9662683
        , mediumseagreen: 3978097
        , mediumslateblue: 8087790
        , mediumspringgreen: 64154
        , mediumturquoise: 4772300
        , mediumvioletred: 13047173
        , midnightblue: 1644912
        , mintcream: 16121850
        , mistyrose: 16770273
        , moccasin: 16770229
        , navajowhite: 16768685
        , navy: 128
        , oldlace: 16643558
        , olive: 8421376
        , olivedrab: 7048739
        , orange: 16753920
        , orangered: 16729344
        , orchid: 14315734
        , palegoldenrod: 15657130
        , palegreen: 10025880
        , paleturquoise: 11529966
        , palevioletred: 14381203
        , papayawhip: 16773077
        , peachpuff: 16767673
        , peru: 13468991
        , pink: 16761035
        , plum: 14524637
        , powderblue: 11591910
        , purple: 8388736
        , red: 16711680
        , rosybrown: 12357519
        , royalblue: 4286945
        , saddlebrown: 9127187
        , salmon: 16416882
        , sandybrown: 16032864
        , seagreen: 3050327
        , seashell: 16774638
        , sienna: 10506797
        , silver: 12632256
        , skyblue: 8900331
        , slateblue: 6970061
        , slategray: 7372944
        , slategrey: 7372944
        , snow: 16775930
        , springgreen: 65407
        , steelblue: 4620980
        , tan: 13808780
        , teal: 32896
        , thistle: 14204888
        , tomato: 16737095
        , turquoise: 4251856
        , violet: 15631086
        , wheat: 16113331
        , white: 16777215
        , whitesmoke: 16119285
        , yellow: 16776960
        , yellowgreen: 10145074
    });
    so.forEach(function (n, t) {
        so.set(n, it(t))
    }), ya.functor = pt, ya.xhr = dt(mt), ya.dsv = function (n, t) {
        function e(n, e, u) {
            arguments.length < 3 && (u = e, e = null);
            var a = ya.xhr(n, t, u);
            return a.row = function (n) {
                return arguments.length ? a.response(null == (e = n) ? r : i(n)) : e
            }, a.row(e)
        }

        function r(n) {
            return e.parse(n.responseText)
        }

        function i(n) {
            return function (t) {
                return e.parse(t.responseText, n)
            }
        }

        function a(t) {
            return t.map(o).join(n)
        }

        function o(n) {
            return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var c = new RegExp('["' + n + "\n]")
            , l = n.charCodeAt(0);
        return e.parse = function (n, t) {
            var r;
            return e.parseRows(n, function (n, e) {
                if (r) return r(n, e - 1);
                var i = new Function("d", "return {" + n.map(function (n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function (n, e) {
                    return t(i(n), e)
                } : i
            })
        }, e.parseRows = function (n, t) {
            function e() {
                if (s >= c) return a;
                if (i) return i = !1, u;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < c;)
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1)) break;
                            ++e
                        }
                    s = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (i = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (i = !0), n.substring(t + 1, e).replace(/""/g, '"')
                }
                for (; c > s;) {
                    var r = n.charCodeAt(s++)
                        , o = 1;
                    if (10 === r) i = !0;
                    else if (13 === r) i = !0, 10 === n.charCodeAt(s) && (++s, ++o);
                    else if (r !== l) continue;
                    return n.substring(t, s - o)
                }
                return n.substring(t)
            }
            for (var r, i, u = {}, a = {}, o = [], c = n.length, s = 0, f = 0;
                (r = e()) !== a;) {
                for (var h = []; r !== u && r !== a;) h.push(r), r = e();
                (!t || (h = t(h, f++))) && o.push(h)
            }
            return o
        }, e.format = function (t) {
            if (Array.isArray(t[0])) return e.formatRows(t);
            var r = new u
                , i = [];
            return t.forEach(function (n) {
                for (var t in n) r.has(t) || i.push(r.add(t))
            }), [i.map(o).join(n)].concat(t.map(function (t) {
                return i.map(function (n) {
                    return o(t[n])
                }).join(n)
            })).join("\n")
        }, e.formatRows = function (n) {
            return n.map(a).join("\n")
        }, e
    }, ya.csv = ya.dsv(",", "text/csv"), ya.tsv = ya.dsv("	", "text/tab-separated-values");
    var fo, ho, go, po, mo, vo = ba[o(ba, "requestAnimationFrame")] || function (n) {
        setTimeout(n, 17)
    };
    ya.timer = function (n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var i = e + t
            , u = {
                callback: n
                , time: i
                , next: null
            };
        ho ? ho.next = u : fo = u, ho = u, go || (po = clearTimeout(po), go = 1, vo(Mt))
    }, ya.timer.flush = function () {
        bt(), _t()
    };
    var yo = "."
        , Mo = ","
        , xo = [3, 3]
        , bo = "$"
        , _o = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(wt);
    ya.formatPrefix = function (n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = ya.round(n, St(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), _o[8 + e / 3]
    }, ya.round = function (n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    }, ya.format = function (n) {
        var t = wo.exec(n)
            , e = t[1] || " "
            , r = t[2] || ">"
            , i = t[3] || ""
            , u = t[4] || ""
            , a = t[5]
            , o = +t[6]
            , c = t[7]
            , l = t[8]
            , s = t[9]
            , f = 1
            , h = ""
            , g = !1;
        switch (l && (l = +l.substring(1)), (a || "0" === e && "=" === r) && (a = e = "0", r = "=", c && (o -= Math.floor((o - 1) / 4))), s) {
        case "n":
            c = !0, s = "g";
            break;
        case "%":
            f = 100, h = "%", s = "f";
            break;
        case "p":
            f = 100, h = "%", s = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X":
            "#" === u && (u = "0" + s.toLowerCase());
        case "c":
        case "d":
            g = !0, l = 0;
            break;
        case "s":
            f = -1, s = "r"
        }
        "#" === u ? u = "" : "$" === u && (u = bo), "r" != s || l || (s = "g"), null != l && ("g" == s ? l = Math.max(1, Math.min(21, l)) : ("e" == s || "f" == s) && (l = Math.max(0, Math.min(20, l)))), s = So.get(s) || Et;
        var p = a && c;
        return function (n) {
            if (g && n % 1) return "";
            var t = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : i;
            if (0 > f) {
                var m = ya.formatPrefix(n, l);
                n = m.scale(n), h = m.symbol
            }
            else n *= f;
            n = s(n, l);
            var d = n.lastIndexOf(".")
                , v = 0 > d ? n : n.substring(0, d)
                , y = 0 > d ? "" : yo + n.substring(d + 1);
            !a && c && (v = Eo(v));
            var M = u.length + v.length + y.length + (p ? 0 : t.length)
                , x = o > M ? new Array(M = o - M + 1).join(e) : "";
            return p && (v = Eo(x + v)), t += u, n = v + y, ("<" === r ? t + n + x : ">" === r ? x + t + n : "^" === r ? x.substring(0, M >>= 1) + t + n + x.substring(M) : t + (p ? n : x + n)) + h
        }
    };
    var wo = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
        , So = ya.map({
            b: function (n) {
                return n.toString(2)
            }
            , c: function (n) {
                return String.fromCharCode(n)
            }
            , o: function (n) {
                return n.toString(8)
            }
            , x: function (n) {
                return n.toString(16)
            }
            , X: function (n) {
                return n.toString(16).toUpperCase()
            }
            , g: function (n, t) {
                return n.toPrecision(t)
            }
            , e: function (n, t) {
                return n.toExponential(t)
            }
            , f: function (n, t) {
                return n.toFixed(t)
            }
            , r: function (n, t) {
                return (n = ya.round(n, St(n, t))).toFixed(Math.max(0, Math.min(20, St(n * (1 + 1e-15), t))))
            }
        })
        , Eo = mt;
    if (xo) {
        var ko = xo.length;
        Eo = function (n) {
            for (var t = n.length, e = [], r = 0, i = xo[0]; t > 0 && i > 0;) e.push(n.substring(t -= i, t + i)), i = xo[r = (r + 1) % ko];
            return e.reverse().join(Mo)
        }
    }
    ya.geo = {}, kt.prototype = {
        s: 0
        , t: 0
        , add: function (n) {
            At(n, this.t, Ao), At(Ao.s, this.s, this), this.s ? this.t += Ao.t : this.s = Ao.t
        }
        , reset: function () {
            this.s = this.t = 0
        }
        , valueOf: function () {
            return this.s
        }
    };
    var Ao = new kt;
    ya.geo.stream = function (n, t) {
        n && No.hasOwnProperty(n.type) ? No[n.type](n, t) : Nt(n, t)
    };
    var No = {
            Feature: function (n, t) {
                Nt(n.geometry, t)
            }
            , FeatureCollection: function (n, t) {
                for (var e = n.features, r = -1, i = e.length; ++r < i;) Nt(e[r].geometry, t)
            }
        }
        , qo = {
            Sphere: function (n, t) {
                t.sphere()
            }
            , Point: function (n, t) {
                var e = n.coordinates;
                t.point(e[0], e[1])
            }
            , MultiPoint: function (n, t) {
                for (var e, r = n.coordinates, i = -1, u = r.length; ++i < u;) e = r[i], t.point(e[0], e[1])
            }
            , LineString: function (n, t) {
                qt(n.coordinates, t, 0)
            }
            , MultiLineString: function (n, t) {
                for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) qt(e[r], t, 0)
            }
            , Polygon: function (n, t) {
                Tt(n.coordinates, t)
            }
            , MultiPolygon: function (n, t) {
                for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) Tt(e[r], t)
            }
            , GeometryCollection: function (n, t) {
                for (var e = n.geometries, r = -1, i = e.length; ++r < i;) Nt(e[r], t)
            }
        };
    ya.geo.area = function (n) {
        return To = 0, ya.geo.stream(n, zo), To
    };
    var To, Co = new kt
        , zo = {
            sphere: function () {
                To += 4 * Ka
            }
            , point: s
            , lineStart: s
            , lineEnd: s
            , polygonStart: function () {
                Co.reset(), zo.lineStart = Ct
            }
            , polygonEnd: function () {
                var n = 2 * Co;
                To += 0 > n ? 4 * Ka + n : n, zo.lineStart = zo.lineEnd = zo.point = s
            }
        };
    ya.geo.bounds = function () {
        function n(n, t) {
            M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
        }

        function t(t, e) {
            var r = zt([t * to, e * to]);
            if (v) {
                var i = jt(v, r)
                    , u = [i[1], -i[0], 0]
                    , a = jt(u, i);
                Ft(a), a = Pt(a);
                var c = t - p
                    , l = c > 0 ? 1 : -1
                    , m = a[0] * eo * l
                    , d = Math.abs(c) > 180;
                if (d ^ (m > l * p && l * t > m)) {
                    var y = a[1] * eo;
                    y > g && (g = y)
                }
                else if (m = (m + 360) % 360 - 180, d ^ (m > l * p && l * t > m)) {
                    var y = -a[1] * eo;
                    f > y && (f = y)
                }
                else f > e && (f = e), e > g && (g = e);
                d ? p > t ? o(s, t) > o(s, h) && (h = t) : o(t, h) > o(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? o(s, t) > o(s, h) && (h = t) : o(t, h) > o(s, h) && (s = t)
            }
            else n(t, e);
            v = r, p = t
        }

        function e() {
            b.point = t
        }

        function r() {
            x[0] = s, x[1] = h, b.point = n, v = null
        }

        function i(n, e) {
            if (v) {
                var r = n - p;
                y += Math.abs(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            }
            else m = n, d = e;
            zo.point(n, e), t(n, e)
        }

        function u() {
            zo.lineStart()
        }

        function a() {
            i(m, d), zo.lineEnd(), Math.abs(y) > Qa && (s = -(h = 180)), x[0] = s, x[1] = h, v = null
        }

        function o(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function c(n, t) {
            return n[0] - t[0]
        }

        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var s, f, h, g, p, m, d, v, y, M, x, b = {
            point: n
            , lineStart: e
            , lineEnd: r
            , polygonStart: function () {
                b.point = i, b.lineStart = u, b.lineEnd = a, y = 0, zo.polygonStart()
            }
            , polygonEnd: function () {
                zo.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > Co ? (s = -(h = 180), f = -(g = 90)) : y > Qa ? g = 90 : -Qa > y && (f = -90), x[0] = s, x[1] = h
            }
        };
        return function (n) {
            g = h = -(s = f = 1 / 0), M = [], ya.geo.stream(n, b);
            var t = M.length;
            if (t) {
                M.sort(c);
                for (var e, r = 1, i = M[0], u = [i]; t > r; ++r) e = M[r], l(e[0], i) || l(e[1], i) ? (o(i[0], e[1]) > o(i[0], i[1]) && (i[1] = e[1]), o(e[0], i[1]) > o(i[0], i[1]) && (i[0] = e[0])) : u.push(i = e);
                for (var a, e, p = -1 / 0, t = u.length - 1, r = 0, i = u[t]; t >= r; i = e, ++r) e = u[r], (a = o(i[1], e[0])) > p && (p = a, s = e[0], h = i[1])
            }
            return M = x = null, 1 / 0 === s || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[s, f], [h, g]]
        }
    }(), ya.geo.centroid = function (n) {
        Do = jo = Lo = Ho = Fo = Po = Oo = Yo = Ro = Uo = Io = 0, ya.geo.stream(n, Vo);
        var t = Ro
            , e = Uo
            , r = Io
            , i = t * t + e * e + r * r;
        return no > i && (t = Po, e = Oo, r = Yo, Qa > jo && (t = Lo, e = Ho, r = Fo), i = t * t + e * e + r * r, no > i) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * eo, V(r / Math.sqrt(i)) * eo]
    };
    var Do, jo, Lo, Ho, Fo, Po, Oo, Yo, Ro, Uo, Io, Vo = {
            sphere: s
            , point: Yt
            , lineStart: Ut
            , lineEnd: It
            , polygonStart: function () {
                Vo.lineStart = Vt
            }
            , polygonEnd: function () {
                Vo.lineStart = Ut
            }
        }
        , Xo = $t(Xt, Qt, te, ee)
        , Zo = [-Ka, 0]
        , Bo = 1e9;
    (ya.geo.conicEqualArea = function () {
        return oe(ce)
    }).raw = ce, ya.geo.albers = function () {
        return ya.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, ya.geo.albersUsa = function () {
        function n(n) {
            var u = n[0]
                , a = n[1];
            return t = null, e(u, a), t || (r(u, a), t) || i(u, a), t
        }
        var t, e, r, i, u = ya.geo.albers()
            , a = ya.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65])
            , o = ya.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18])
            , c = {
                point: function (n, e) {
                    t = [n, e]
                }
            };
        return n.invert = function (n) {
            var t = u.scale()
                , e = u.translate()
                , r = (n[0] - e[0]) / t
                , i = (n[1] - e[1]) / t;
            return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? a : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? o : u).invert(n)
        }, n.stream = function (n) {
            var t = u.stream(n)
                , e = a.stream(n)
                , r = o.stream(n);
            return {
                point: function (n, i) {
                    t.point(n, i), e.point(n, i), r.point(n, i)
                }
                , sphere: function () {
                    t.sphere(), e.sphere(), r.sphere()
                }
                , lineStart: function () {
                    t.lineStart(), e.lineStart(), r.lineStart()
                }
                , lineEnd: function () {
                    t.lineEnd(), e.lineEnd(), r.lineEnd()
                }
                , polygonStart: function () {
                    t.polygonStart(), e.polygonStart(), r.polygonStart()
                }
                , polygonEnd: function () {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }
            }
        }, n.precision = function (t) {
            return arguments.length ? (u.precision(t), a.precision(t), o.precision(t), n) : u.precision()
        }, n.scale = function (t) {
            return arguments.length ? (u.scale(t), a.scale(.35 * t), o.scale(t), n.translate(u.translate())) : u.scale()
        }, n.translate = function (t) {
            if (!arguments.length) return u.translate();
            var l = u.scale()
                , s = +t[0]
                , f = +t[1];
            return e = u.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point, r = a.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + Qa, f + .12 * l + Qa], [s - .214 * l - Qa, f + .234 * l - Qa]]).stream(c).point, i = o.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + Qa, f + .166 * l + Qa], [s - .115 * l - Qa, f + .234 * l - Qa]]).stream(c).point, n
        }, n.scale(1070)
    };
    var $o, Wo, Jo, Go, Ko, Qo, nc = {
            point: s
            , lineStart: s
            , lineEnd: s
            , polygonStart: function () {
                Wo = 0, nc.lineStart = le
            }
            , polygonEnd: function () {
                nc.lineStart = nc.lineEnd = nc.point = s, $o += Math.abs(Wo / 2)
            }
        }
        , tc = {
            point: se
            , lineStart: s
            , lineEnd: s
            , polygonStart: s
            , polygonEnd: s
        }
        , ec = {
            point: ge
            , lineStart: pe
            , lineEnd: me
            , polygonStart: function () {
                ec.lineStart = de
            }
            , polygonEnd: function () {
                ec.point = ge, ec.lineStart = pe, ec.lineEnd = me
            }
        };
    ya.geo.path = function () {
        function n(n) {
            return n && ("function" == typeof o && u.pointRadius(+o.apply(this, arguments)), a && a.valid || (a = i(u)), ya.geo.stream(n, a)), u.result()
        }

        function t() {
            return a = null, n
        }
        var e, r, i, u, a, o = 4.5;
        return n.area = function (n) {
            return $o = 0, ya.geo.stream(n, i(nc)), $o
        }, n.centroid = function (n) {
            return Lo = Ho = Fo = Po = Oo = Yo = Ro = Uo = Io = 0, ya.geo.stream(n, i(ec)), Io ? [Ro / Io, Uo / Io] : Yo ? [Po / Yo, Oo / Yo] : Fo ? [Lo / Fo, Ho / Fo] : [0 / 0, 0 / 0]
        }, n.bounds = function (n) {
            return Ko = Qo = -(Jo = Go = 1 / 0), ya.geo.stream(n, i(tc)), [[Jo, Go], [Ko, Qo]]
        }, n.projection = function (n) {
            return arguments.length ? (i = (e = n) ? n.stream || Me(n) : mt, t()) : e
        }, n.context = function (n) {
            return arguments.length ? (u = null == (r = n) ? new fe : new ve(n), "function" != typeof o && u.pointRadius(o), t()) : r
        }, n.pointRadius = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : (u.pointRadius(+t), +t), n) : o
        }, n.projection(ya.geo.albersUsa()).context(null)
    }, ya.geo.projection = xe, ya.geo.projectionMutator = be, (ya.geo.equirectangular = function () {
        return xe(we)
    }).raw = we.invert = we, ya.geo.rotation = function (n) {
        function t(t) {
            return t = n(t[0] * to, t[1] * to), t[0] *= eo, t[1] *= eo, t
        }
        return n = Se(n[0] % 360 * to, n[1] * to, n.length > 2 ? n[2] * to : 0), t.invert = function (t) {
            return t = n.invert(t[0] * to, t[1] * to), t[0] *= eo, t[1] *= eo, t
        }, t
    }, ya.geo.circle = function () {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r
                , t = Se(-n[0] * to, -n[1] * to, 0).invert
                , i = [];
            return e(null, null, 1, {
                point: function (n, e) {
                    i.push(n = t(n, e)), n[0] *= eo, n[1] *= eo
                }
            }), {
                type: "Polygon"
                , coordinates: [i]
            }
        }
        var t, e, r = [0, 0]
            , i = 6;
        return n.origin = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.angle = function (r) {
            return arguments.length ? (e = Ne((t = +r) * to, i * to), n) : t
        }, n.precision = function (r) {
            return arguments.length ? (e = Ne(t * to, (i = +r) * to), n) : i
        }, n.angle(90)
    }, ya.geo.distance = function (n, t) {
        var e, r = (t[0] - n[0]) * to
            , i = n[1] * to
            , u = t[1] * to
            , a = Math.sin(r)
            , o = Math.cos(r)
            , c = Math.sin(i)
            , l = Math.cos(i)
            , s = Math.sin(u)
            , f = Math.cos(u);
        return Math.atan2(Math.sqrt((e = f * a) * e + (e = l * s - c * f * o) * e), c * s + l * f * o)
    }, ya.geo.graticule = function () {
        function n() {
            return {
                type: "MultiLineString"
                , coordinates: t()
            }
        }

        function t() {
            return ya.range(Math.ceil(u / d) * d, i, d).map(h).concat(ya.range(Math.ceil(l / v) * v, c, v).map(g)).concat(ya.range(Math.ceil(r / p) * p, e, p).filter(function (n) {
                return Math.abs(n % d) > Qa
            }).map(s)).concat(ya.range(Math.ceil(o / m) * m, a, m).filter(function (n) {
                return Math.abs(n % v) > Qa
            }).map(f))
        }
        var e, r, i, u, a, o, c, l, s, f, h, g, p = 10
            , m = p
            , d = 90
            , v = 360
            , y = 2.5;
        return n.lines = function () {
            return t().map(function (n) {
                return {
                    type: "LineString"
                    , coordinates: n
                }
            })
        }, n.outline = function () {
            return {
                type: "Polygon"
                , coordinates: [h(u).concat(g(c).slice(1), h(i).reverse().slice(1), g(l).reverse().slice(1))]
            }
        }, n.extent = function (t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function (t) {
            return arguments.length ? (u = +t[0][0], i = +t[1][0], l = +t[0][1], c = +t[1][1], u > i && (t = u, u = i, i = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [[u, l], [i, c]]
        }, n.minorExtent = function (t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], o = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), o > a && (t = o, o = a, a = t), n.precision(y)) : [[r, o], [e, a]]
        }, n.step = function (t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function (t) {
            return arguments.length ? (d = +t[0], v = +t[1], n) : [d, v]
        }, n.minorStep = function (t) {
            return arguments.length ? (p = +t[0], m = +t[1], n) : [p, m]
        }, n.precision = function (t) {
            return arguments.length ? (y = +t, s = Te(o, a, 90), f = Ce(r, e, y), h = Te(l, c, 90), g = Ce(u, i, y), n) : y
        }, n.majorExtent([[-180, -90 + Qa], [180, 90 - Qa]]).minorExtent([[-180, -80 - Qa], [180, 80 + Qa]])
    }, ya.geo.greatArc = function () {
        function n() {
            return {
                type: "LineString"
                , coordinates: [t || r.apply(this, arguments), e || i.apply(this, arguments)]
            }
        }
        var t, e, r = ze
            , i = De;
        return n.distance = function () {
            return ya.geo.distance(t || r.apply(this, arguments), e || i.apply(this, arguments))
        }, n.source = function (e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
        }, n.target = function (t) {
            return arguments.length ? (i = t, e = "function" == typeof t ? null : t, n) : i
        }, n.precision = function () {
            return arguments.length ? n : 0
        }, n
    }, ya.geo.interpolate = function (n, t) {
        return je(n[0] * to, n[1] * to, t[0] * to, t[1] * to)
    }, ya.geo.length = function (n) {
        return rc = 0, ya.geo.stream(n, ic), rc
    };
    var rc, ic = {
            sphere: s
            , point: s
            , lineStart: Le
            , lineEnd: s
            , polygonStart: s
            , polygonEnd: s
        }
        , uc = He(function (n) {
            return Math.sqrt(2 / (1 + n))
        }, function (n) {
            return 2 * Math.asin(n / 2)
        });
    (ya.geo.azimuthalEqualArea = function () {
        return xe(uc)
    }).raw = uc;
    var ac = He(function (n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, mt);
    (ya.geo.azimuthalEquidistant = function () {
        return xe(ac)
    }).raw = ac, (ya.geo.conicConformal = function () {
        return oe(Fe)
    }).raw = Fe, (ya.geo.conicEquidistant = function () {
        return oe(Pe)
    }).raw = Pe;
    var oc = He(function (n) {
        return 1 / n
    }, Math.atan);
    (ya.geo.gnomonic = function () {
        return xe(oc)
    }).raw = oc, Oe.invert = function (n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - Ka / 2]
    }, (ya.geo.mercator = function () {
        return Ye(Oe)
    }).raw = Oe;
    var cc = He(function () {
        return 1
    }, Math.asin);
    (ya.geo.orthographic = function () {
        return xe(cc)
    }).raw = cc;
    var lc = He(function (n) {
        return 1 / (1 + n)
    }, function (n) {
        return 2 * Math.atan(n)
    });
    (ya.geo.stereographic = function () {
        return xe(lc)
    }).raw = lc, Re.invert = function (n, t) {
        return [Math.atan2(X(n), Math.cos(t)), V(Math.sin(t) / Z(n))]
    }, (ya.geo.transverseMercator = function () {
        return Ye(Re)
    }).raw = Re, ya.geom = {}, ya.svg = {}, ya.svg.line = function () {
        return Ue(mt)
    };
    var sc = ya.map({
        linear: Xe
        , "linear-closed": Ze
        , step: Be
        , "step-before": $e
        , "step-after": We
        , basis: tr
        , "basis-open": er
        , "basis-closed": rr
        , bundle: ir
        , cardinal: Ke
        , "cardinal-open": Je
        , "cardinal-closed": Ge
        , monotone: sr
    });
    sc.forEach(function (n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var fc = [0, 2 / 3, 1 / 3, 0]
        , hc = [0, 1 / 3, 2 / 3, 0]
        , gc = [0, 1 / 6, 2 / 3, 1 / 6];
    ya.geom.hull = function (n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, i, u, a, o, c, l, s, f, h, g, p, m = pt(e)
                , d = pt(r)
                , v = n.length
                , y = v - 1
                , M = []
                , x = []
                , b = 0;
            if (m === Ie && r === Ve) t = n;
            else
                for (u = 0, t = []; v > u; ++u) t.push([+m.call(this, i = n[u], u), +d.call(this, i, u)]);
            for (u = 1; v > u; ++u)(t[u][1] < t[b][1] || t[u][1] == t[b][1] && t[u][0] < t[b][0]) && (b = u);
            for (u = 0; v > u; ++u) u !== b && (c = t[u][1] - t[b][1], o = t[u][0] - t[b][0], M.push({
                angle: Math.atan2(c, o)
                , index: u
            }));
            for (M.sort(function (n, t) {
                    return n.angle - t.angle
                }), g = M[0].angle, h = M[0].index, f = 0, u = 1; y > u; ++u) {
                if (a = M[u].index, g == M[u].angle) {
                    if (o = t[h][0] - t[b][0], c = t[h][1] - t[b][1], l = t[a][0] - t[b][0], s = t[a][1] - t[b][1], o * o + c * c >= l * l + s * s) {
                        M[u].index = -1;
                        continue
                    }
                    M[f].index = -1
                }
                g = M[u].angle, f = u, h = a
            }
            for (x.push(b), u = 0, a = 0; 2 > u; ++a) M[a].index > -1 && (x.push(M[a].index), u++);
            for (p = x.length; y > a; ++a)
                if (!(M[a].index < 0)) {
                    for (; !fr(x[p - 2], x[p - 1], M[a].index, t);) --p;
                    x[p++] = M[a].index
                }
            var _ = [];
            for (u = p - 1; u >= 0; --u) _.push(n[x[u]]);
            return _
        }
        var e = Ie
            , r = Ve;
        return arguments.length ? t(n) : (t.x = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    }, ya.geom.polygon = function (n) {
        return La(n, pc), n
    };
    var pc = ya.geom.polygon.prototype = [];
    pc.area = function () {
        for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;) n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1];
        return .5 * i
    }, pc.centroid = function (n) {
        var t, e, r = -1
            , i = this.length
            , u = 0
            , a = 0
            , o = this[i - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;) t = o, o = this[r], e = t[0] * o[1] - o[0] * t[1], u += (t[0] + o[0]) * e, a += (t[1] + o[1]) * e;
        return [u * n, a * n]
    }, pc.clip = function (n) {
        for (var t, e, r, i, u, a, o = pr(n), c = -1, l = this.length - pr(this), s = this[l - 1]; ++c < l;) {
            for (t = n.slice(), n.length = 0, i = this[c], u = t[(r = t.length - o) - 1], e = -1; ++e < r;) a = t[e], hr(a, s, i) ? (hr(u, s, i) || n.push(gr(u, a, s, i)), n.push(a)) : hr(u, s, i) && n.push(gr(u, a, s, i)), u = a;
            o && n.push(n[0]), s = i
        }
        return n
    }, ya.geom.delaunay = function (n) {
        var t = n.map(function () {
                return []
            })
            , e = [];
        return mr(n, function (e) {
            t[e.region.l.index].push(n[e.region.r.index])
        }), t.forEach(function (t, r) {
            var i = n[r]
                , u = i[0]
                , a = i[1];
            t.forEach(function (n) {
                n.angle = Math.atan2(n[0] - u, n[1] - a)
            }), t.sort(function (n, t) {
                return n.angle - t.angle
            });
            for (var o = 0, c = t.length - 1; c > o; o++) e.push([i, t[o], t[o + 1]])
        }), e
    }, ya.geom.voronoi = function (n) {
        function t(n) {
            var t, u, a, o = n.map(function () {
                    return []
                })
                , c = pt(e)
                , l = pt(r)
                , s = n.length
                , f = 1e6;
            if (c === Ie && l === Ve) t = n;
            else
                for (t = new Array(s), a = 0; s > a; ++a) t[a] = [+c.call(this, u = n[a], a), +l.call(this, u, a)];
            if (mr(t, function (n) {
                    var t, e, r, i, u, a;
                    1 === n.a && n.b >= 0 ? (t = n.ep.r, e = n.ep.l) : (t = n.ep.l, e = n.ep.r), 1 === n.a ? (u = t ? t.y : -f, r = n.c - n.b * u, a = e ? e.y : f, i = n.c - n.b * a) : (r = t ? t.x : -f, u = n.c - n.a * r, i = e ? e.x : f, a = n.c - n.a * i);
                    var c = [r, u]
                        , l = [i, a];
                    o[n.region.l.index].push(c, l), o[n.region.r.index].push(c, l)
                }), o = o.map(function (n, e) {
                    var r = t[e][0]
                        , i = t[e][1]
                        , u = n.map(function (n) {
                            return Math.atan2(n[0] - r, n[1] - i)
                        })
                        , a = ya.range(n.length).sort(function (n, t) {
                            return u[n] - u[t]
                        });
                    return a.filter(function (n, t) {
                        return !t || u[n] - u[a[t - 1]] > Qa
                    }).map(function (t) {
                        return n[t]
                    })
                }), o.forEach(function (n, e) {
                    var r = n.length;
                    if (!r) return n.push([-f, -f], [-f, f], [f, f], [f, -f]);
                    if (!(r > 2)) {
                        var i = t[e]
                            , u = n[0]
                            , a = n[1]
                            , o = i[0]
                            , c = i[1]
                            , l = u[0]
                            , s = u[1]
                            , h = a[0]
                            , g = a[1]
                            , p = Math.abs(h - l)
                            , m = g - s;
                        if (Math.abs(m) < Qa) {
                            var d = s > c ? -f : f;
                            n.push([-f, d], [f, d])
                        }
                        else if (Qa > p) {
                            var v = l > o ? -f : f;
                            n.push([v, -f], [v, f])
                        }
                        else {
                            var d = (l - o) * (g - s) > (h - l) * (s - c) ? f : -f
                                , y = Math.abs(m) - p;
                            Math.abs(y) < Qa ? n.push([0 > m ? d : -d, d]) : (y > 0 && (d *= -1), n.push([-f, d], [f, d]))
                        }
                    }
                }), i)
                for (a = 0; s > a; ++a) i.clip(o[a]);
            for (a = 0; s > a; ++a) o[a].point = n[a];
            return o
        }
        var e = Ie
            , r = Ve
            , i = null;
        return arguments.length ? t(n) : (t.x = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.clipExtent = function (n) {
            if (!arguments.length) return i && [i[0], i[2]];
            if (null == n) i = null;
            else {
                var e = +n[0][0]
                    , r = +n[0][1]
                    , u = +n[1][0]
                    , a = +n[1][1];
                i = ya.geom.polygon([[e, r], [e, a], [u, a], [u, r]])
            }
            return t
        }, t.size = function (n) {
            return arguments.length ? t.clipExtent(n && [[0, 0], n]) : i && i[2]
        }, t.links = function (n) {
            var t, i, u, a = n.map(function () {
                    return []
                })
                , o = []
                , c = pt(e)
                , l = pt(r)
                , s = n.length;
            if (c === Ie && l === Ve) t = n;
            else
                for (t = new Array(s), u = 0; s > u; ++u) t[u] = [+c.call(this, i = n[u], u), +l.call(this, i, u)];
            return mr(t, function (t) {
                var e = t.region.l.index
                    , r = t.region.r.index;
                a[e][r] || (a[e][r] = a[r][e] = !0, o.push({
                    source: n[e]
                    , target: n[r]
                }))
            }), o
        }, t.triangles = function (n) {
            if (e === Ie && r === Ve) return ya.geom.delaunay(n);
            for (var t, i = new Array(c), u = pt(e), a = pt(r), o = -1, c = n.length; ++o < c;)(i[o] = [+u.call(this, t = n[o], o), +a.call(this, t, o)]).data = t;
            return ya.geom.delaunay(i).map(function (n) {
                return n.map(function (n) {
                    return n.data
                })
            })
        }, t)
    };
    var mc = {
        l: "r"
        , r: "l"
    };
    ya.geom.quadtree = function (n, t, e, r, i) {
        function u(n) {
            function u(n, t, e, r, i, u, a, o) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x
                            , s = n.y;
                        if (null != c)
                            if (Math.abs(c - e) + Math.abs(s - r) < .01) l(n, t, e, r, i, u, a, o);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, l(n, f, c, s, i, u, a, o), l(n, t, e, r, i, u, a, o)
                            }
                        else n.x = e, n.y = r, n.point = t
                    }
                    else l(n, t, e, r, i, u, a, o)
            }

            function l(n, t, e, r, i, a, o, c) {
                var l = .5 * (i + o)
                    , s = .5 * (a + c)
                    , f = e >= l
                    , h = r >= s
                    , g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = yr()), f ? i = l : o = l, h ? a = s : c = s, u(n, t, e, r, i, a, o, c)
            }
            var s, f, h, g, p, m, d, v, y, M = pt(o)
                , x = pt(c);
            if (null != t) m = t, d = e, v = r, y = i;
            else if (v = y = -(m = d = 1 / 0), f = [], h = [], p = n.length, a)
                for (g = 0; p > g; ++g) s = n[g], s.x < m && (m = s.x), s.y < d && (d = s.y), s.x > v && (v = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var b = +M(s = n[g], g)
                        , _ = +x(s, g);
                    m > b && (m = b), d > _ && (d = _), b > v && (v = b), _ > y && (y = _), f.push(b), h.push(_)
                }
            var w = v - m
                , S = y - d;
            w > S ? y = d + w : v = m + S;
            var E = yr();
            if (E.add = function (n) {
                    u(E, n, +M(n, ++g), +x(n, g), m, d, v, y)
                }, E.visit = function (n) {
                    Mr(n, E, m, d, v, y)
                }, g = -1, null == t) {
                for (; ++g < p;) u(E, n[g], f[g], h[g], m, d, v, y);
                --g
            }
            else n.forEach(E.add);
            return f = h = n = s = null, E
        }
        var a, o = Ie
            , c = Ve;
        return (a = arguments.length) ? (o = dr, c = vr, 3 === a && (i = e, r = t, e = t = 0), u(n)) : (u.x = function (n) {
            return arguments.length ? (o = n, u) : o
        }, u.y = function (n) {
            return arguments.length ? (c = n, u) : c
        }, u.extent = function (n) {
            return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), u) : null == t ? null : [[t, e], [r, i]]
        }, u.size = function (n) {
            return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), u) : null == t ? null : [r - t, i - e]
        }, u)
    }, ya.interpolateRgb = xr, ya.interpolateObject = br, ya.interpolateNumber = _r, ya.interpolateString = wr;
    var dc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    ya.interpolate = Sr, ya.interpolators = [function (n, t) {
        var e = typeof t;
        return ("string" === e ? so.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? xr : wr : t instanceof P ? xr : "object" === e ? Array.isArray(t) ? Er : br : _r)(n, t)
    }], ya.interpolateArray = Er;
    var vc = function () {
            return mt
        }
        , yc = ya.map({
            linear: vc
            , poly: zr
            , quad: function () {
                return qr
            }
            , cubic: function () {
                return Tr
            }
            , sin: function () {
                return Dr
            }
            , exp: function () {
                return jr
            }
            , circle: function () {
                return Lr
            }
            , elastic: Hr
            , back: Fr
            , bounce: function () {
                return Pr
            }
        })
        , Mc = ya.map({
            "in": mt
            , out: Ar
            , "in-out": Nr
            , "out-in": function (n) {
                return Nr(Ar(n))
            }
        });
    ya.ease = function (n) {
        var t = n.indexOf("-")
            , e = t >= 0 ? n.substring(0, t) : n
            , r = t >= 0 ? n.substring(t + 1) : "in";
        return e = yc.get(e) || vc, r = Mc.get(r) || mt, kr(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, ya.interpolateHcl = Or, ya.interpolateHsl = Yr, ya.interpolateLab = Rr, ya.interpolateRound = Ur, ya.transform = function (n) {
        var t = Ma.createElementNS(ya.ns.prefix.svg, "g");
        return (ya.transform = function (n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Ir(e ? e.matrix : xc)
        })(n)
    }, Ir.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var xc = {
        a: 1
        , b: 0
        , c: 0
        , d: 1
        , e: 0
        , f: 0
    };
    ya.interpolateTransform = Br, ya.layout = {}, ya.layout.bundle = function () {
        return function (n) {
            for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Jr(n[e]));
            return t
        }
    }, ya.layout.chord = function () {
        function n() {
            var n, l, f, h, g, p = {}
                , m = []
                , d = ya.range(u)
                , v = [];
            for (e = [], r = [], n = 0, h = -1; ++h < u;) {
                for (l = 0, g = -1; ++g < u;) l += i[h][g];
                m.push(l), v.push(ya.range(u)), n += l
            }
            for (a && d.sort(function (n, t) {
                    return a(m[n], m[t])
                }), o && v.forEach(function (n, t) {
                    n.sort(function (n, e) {
                        return o(i[t][n], i[t][e])
                    })
                }), n = (2 * Ka - s * u) / n, l = 0, h = -1; ++h < u;) {
                for (f = l, g = -1; ++g < u;) {
                    var y = d[h]
                        , M = v[y][g]
                        , x = i[y][M]
                        , b = l
                        , _ = l += x * n;
                    p[y + "-" + M] = {
                        index: y
                        , subindex: M
                        , startAngle: b
                        , endAngle: _
                        , value: x
                    }
                }
                r[y] = {
                    index: y
                    , startAngle: f
                    , endAngle: l
                    , value: (l - f) / n
                }, l += s
            }
            for (h = -1; ++h < u;)
                for (g = h - 1; ++g < u;) {
                    var w = p[h + "-" + g]
                        , S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                        source: S
                        , target: w
                    } : {
                        source: w
                        , target: S
                    })
                }
            c && t()
        }

        function t() {
            e.sort(function (n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var e, r, i, u, a, o, c, l = {}
            , s = 0;
        return l.matrix = function (n) {
            return arguments.length ? (u = (i = n) && i.length, e = r = null, l) : i
        }, l.padding = function (n) {
            return arguments.length ? (s = n, e = r = null, l) : s
        }, l.sortGroups = function (n) {
            return arguments.length ? (a = n, e = r = null, l) : a
        }, l.sortSubgroups = function (n) {
            return arguments.length ? (o = n, e = null, l) : o
        }, l.sortChords = function (n) {
            return arguments.length ? (c = n, e && t(), l) : c
        }, l.chords = function () {
            return e || n(), e
        }, l.groups = function () {
            return r || n(), r
        }, l
    }, ya.layout.force = function () {
        function n(n) {
            return function (t, e, r, i) {
                if (t.point !== n) {
                    var u = t.cx - n.x
                        , a = t.cy - n.y
                        , o = 1 / Math.sqrt(u * u + a * a);
                    if (m > (i - e) * o) {
                        var c = t.charge * o * o;
                        return n.px -= u * c, n.py -= a * c, !0
                    }
                    if (t.point && isFinite(o)) {
                        var c = t.pointCharge * o * o;
                        n.px -= u * c, n.py -= a * c
                    }
                }
                return !t.charge
            }
        }

        function t(n) {
            n.px = ya.event.x, n.py = ya.event.y, o.resume()
        }
        var e, r, i, u, a, o = {}
            , c = ya.dispatch("start", "tick", "end")
            , l = [1, 1]
            , s = .9
            , f = bc
            , h = _c
            , g = -30
            , p = .1
            , m = .8
            , d = []
            , v = [];
        return o.tick = function () {
            if ((r *= .99) < .005) return c.end({
                type: "end"
                , alpha: r = 0
            }), !0;
            var t, e, o, f, h, m, y, M, x, b = d.length
                , _ = v.length;
            for (e = 0; _ > e; ++e) o = v[e], f = o.source, h = o.target, M = h.x - f.x, x = h.y - f.y, (m = M * M + x * x) && (m = r * u[e] * ((m = Math.sqrt(m)) - i[e]) / m, M *= m, x *= m, h.x -= M * (y = f.weight / (h.weight + f.weight)), h.y -= x * y, f.x += M * (y = 1 - y), f.y += x * y);
            if ((y = r * p) && (M = l[0] / 2, x = l[1] / 2, e = -1, y))
                for (; ++e < b;) o = d[e], o.x += (M - o.x) * y, o.y += (x - o.y) * y;
            if (g)
                for (ri(t = ya.geom.quadtree(d), r, a), e = -1; ++e < b;)(o = d[e]).fixed || t.visit(n(o));
            for (e = -1; ++e < b;) o = d[e], o.fixed ? (o.x = o.px, o.y = o.py) : (o.x -= (o.px - (o.px = o.x)) * s, o.y -= (o.py - (o.py = o.y)) * s);
            c.tick({
                type: "tick"
                , alpha: r
            })
        }, o.nodes = function (n) {
            return arguments.length ? (d = n, o) : d
        }, o.links = function (n) {
            return arguments.length ? (v = n, o) : v
        }, o.size = function (n) {
            return arguments.length ? (l = n, o) : l
        }, o.linkDistance = function (n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, o) : f
        }, o.distance = o.linkDistance, o.linkStrength = function (n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, o) : h
        }, o.friction = function (n) {
            return arguments.length ? (s = +n, o) : s
        }, o.charge = function (n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, o) : g
        }, o.gravity = function (n) {
            return arguments.length ? (p = +n, o) : p
        }, o.theta = function (n) {
            return arguments.length ? (m = +n, o) : m
        }, o.alpha = function (n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start"
                , alpha: r = n
            }), ya.timer(o.tick)), o) : r
        }, o.start = function () {
            function n(n, r) {
                for (var i, u = t(e), a = -1, o = u.length; ++a < o;)
                    if (!isNaN(i = u[a][n])) return i;
                return Math.random() * r
            }

            function t() {
                if (!c) {
                    for (c = [], r = 0; p > r; ++r) c[r] = [];
                    for (r = 0; m > r; ++r) {
                        var n = v[r];
                        c[n.source.index].push(n.target), c[n.target.index].push(n.source)
                    }
                }
                return c[e]
            }
            var e, r, c, s, p = d.length
                , m = v.length
                , y = l[0]
                , M = l[1];
            for (e = 0; p > e; ++e)(s = d[e]).index = e, s.weight = 0;
            for (e = 0; m > e; ++e) s = v[e], "number" == typeof s.source && (s.source = d[s.source]), "number" == typeof s.target && (s.target = d[s.target]), ++s.source.weight, ++s.target.weight;
            for (e = 0; p > e; ++e) s = d[e], isNaN(s.x) && (s.x = n("x", y)), isNaN(s.y) && (s.y = n("y", M)), isNaN(s.px) && (s.px = s.x), isNaN(s.py) && (s.py = s.y);
            if (i = [], "function" == typeof f)
                for (e = 0; m > e; ++e) i[e] = +f.call(this, v[e], e);
            else
                for (e = 0; m > e; ++e) i[e] = f;
            if (u = [], "function" == typeof h)
                for (e = 0; m > e; ++e) u[e] = +h.call(this, v[e], e);
            else
                for (e = 0; m > e; ++e) u[e] = h;
            if (a = [], "function" == typeof g)
                for (e = 0; p > e; ++e) a[e] = +g.call(this, d[e], e);
            else
                for (e = 0; p > e; ++e) a[e] = g;
            return o.resume()
        }, o.resume = function () {
            return o.alpha(.1)
        }, o.stop = function () {
            return o.alpha(0)
        }, o.drag = function () {
            return e || (e = ya.behavior.drag().origin(mt).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", ni)), arguments.length ? (this.on("mouseover.force", ti).on("mouseout.force", ei).call(e), void 0) : e
        }, ya.rebind(o, c, "on")
    };
    var bc = 20
        , _c = 1;
    ya.layout.hierarchy = function () {
        function n(t, a, o) {
            var c = i.call(e, t, a);
            if (t.depth = a, o.push(t), c && (l = c.length)) {
                for (var l, s, f = -1, h = t.children = [], g = 0, p = a + 1; ++f < l;) s = n(c[f], p, o), s.parent = t, h.push(s), g += s.value;
                r && h.sort(r), u && (t.value = g)
            }
            else u && (t.value = +u.call(e, t, a) || 0);
            return t
        }

        function t(n, r) {
            var i = n.children
                , a = 0;
            if (i && (o = i.length))
                for (var o, c = -1, l = r + 1; ++c < o;) a += t(i[c], l);
            else u && (a = +u.call(e, n, r) || 0);
            return u && (n.value = a), a
        }

        function e(t) {
            var e = [];
            return n(t, 0, e), e
        }
        var r = oi
            , i = ui
            , u = ai;
        return e.sort = function (n) {
            return arguments.length ? (r = n, e) : r
        }, e.children = function (n) {
            return arguments.length ? (i = n, e) : i
        }, e.value = function (n) {
            return arguments.length ? (u = n, e) : u
        }, e.revalue = function (n) {
            return t(n, 0), n
        }, e
    }, ya.layout.partition = function () {
        function n(t, e, r, i) {
            var u = t.children;
            if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (a = u.length)) {
                var a, o, c, l = -1;
                for (r = t.value ? r / t.value : 0; ++l < a;) n(o = u[l], e, c = o.value * r, i), e += c
            }
        }

        function t(n) {
            var e = n.children
                , r = 0;
            if (e && (i = e.length))
                for (var i, u = -1; ++u < i;) r = Math.max(r, t(e[u]));
            return 1 + r
        }

        function e(e, u) {
            var a = r.call(this, e, u);
            return n(a[0], 0, i[0], i[1] / t(a[0])), a
        }
        var r = ya.layout.hierarchy()
            , i = [1, 1];
        return e.size = function (n) {
            return arguments.length ? (i = n, e) : i
        }, ii(e, r)
    }, ya.layout.pie = function () {
        function n(u) {
            var a = u.map(function (e, r) {
                    return +t.call(n, e, r)
                })
                , o = +("function" == typeof r ? r.apply(this, arguments) : r)
                , c = (("function" == typeof i ? i.apply(this, arguments) : i) - o) / ya.sum(a)
                , l = ya.range(u.length);
            null != e && l.sort(e === wc ? function (n, t) {
                return a[t] - a[n]
            } : function (n, t) {
                return e(u[n], u[t])
            });
            var s = [];
            return l.forEach(function (n) {
                var t;
                s[n] = {
                    data: u[n]
                    , value: t = a[n]
                    , startAngle: o
                    , endAngle: o += t * c
                }
            }), s
        }
        var t = Number
            , e = wc
            , r = 0
            , i = 2 * Ka;
        return n.value = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.sort = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.startAngle = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.endAngle = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n
    };
    var wc = {};
    ya.layout.stack = function () {
        function n(o, c) {
            var l = o.map(function (e, r) {
                    return t.call(n, e, r)
                })
                , s = l.map(function (t) {
                    return t.map(function (t, e) {
                        return [u.call(n, t, e), a.call(n, t, e)]
                    })
                })
                , f = e.call(n, s, c);
            l = ya.permute(l, f), s = ya.permute(s, f);
            var h, g, p, m = r.call(n, s, c)
                , d = l.length
                , v = l[0].length;
            for (g = 0; v > g; ++g)
                for (i.call(n, l[0][g], p = m[g], s[0][g][1]), h = 1; d > h; ++h) i.call(n, l[h][g], p += s[h - 1][g][1], s[h][g][1]);
            return o
        }
        var t = mt
            , e = hi
            , r = gi
            , i = fi
            , u = li
            , a = si;
        return n.values = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.order = function (t) {
            return arguments.length ? (e = "function" == typeof t ? t : Sc.get(t) || hi, n) : e
        }, n.offset = function (t) {
            return arguments.length ? (r = "function" == typeof t ? t : Ec.get(t) || gi, n) : r
        }, n.x = function (t) {
            return arguments.length ? (u = t, n) : u
        }, n.y = function (t) {
            return arguments.length ? (a = t, n) : a
        }, n.out = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n
    };
    var Sc = ya.map({
            "inside-out": function (n) {
                var t, e, r = n.length
                    , i = n.map(pi)
                    , u = n.map(mi)
                    , a = ya.range(r).sort(function (n, t) {
                        return i[n] - i[t]
                    })
                    , o = 0
                    , c = 0
                    , l = []
                    , s = [];
                for (t = 0; r > t; ++t) e = a[t], c > o ? (o += u[e], l.push(e)) : (c += u[e], s.push(e));
                return s.reverse().concat(l)
            }
            , reverse: function (n) {
                return ya.range(n.length).reverse()
            }
            , "default": hi
        })
        , Ec = ya.map({
            silhouette: function (n) {
                var t, e, r, i = n.length
                    , u = n[0].length
                    , a = []
                    , o = 0
                    , c = [];
                for (e = 0; u > e; ++e) {
                    for (t = 0, r = 0; i > t; t++) r += n[t][e][1];
                    r > o && (o = r), a.push(r)
                }
                for (e = 0; u > e; ++e) c[e] = (o - a[e]) / 2;
                return c
            }
            , wiggle: function (n) {
                var t, e, r, i, u, a, o, c, l, s = n.length
                    , f = n[0]
                    , h = f.length
                    , g = [];
                for (g[0] = c = l = 0, e = 1; h > e; ++e) {
                    for (t = 0, i = 0; s > t; ++t) i += n[t][e][1];
                    for (t = 0, u = 0, o = f[e][0] - f[e - 1][0]; s > t; ++t) {
                        for (r = 0, a = (n[t][e][1] - n[t][e - 1][1]) / (2 * o); t > r; ++r) a += (n[r][e][1] - n[r][e - 1][1]) / o;
                        u += a * n[t][e][1]
                    }
                    g[e] = c -= i ? u / i * o : 0, l > c && (l = c)
                }
                for (e = 0; h > e; ++e) g[e] -= l;
                return g
            }
            , expand: function (n) {
                var t, e, r, i = n.length
                    , u = n[0].length
                    , a = 1 / i
                    , o = [];
                for (e = 0; u > e; ++e) {
                    for (t = 0, r = 0; i > t; t++) r += n[t][e][1];
                    if (r)
                        for (t = 0; i > t; t++) n[t][e][1] /= r;
                    else
                        for (t = 0; i > t; t++) n[t][e][1] = a
                }
                for (e = 0; u > e; ++e) o[e] = 0;
                return o
            }
            , zero: gi
        });
    ya.layout.histogram = function () {
        function n(n, u) {
            for (var a, o, c = [], l = n.map(e, this), s = r.call(this, l, u), f = i.call(this, s, l, u), u = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++u < g;) a = c[u] = [], a.dx = f[u + 1] - (a.x = f[u]), a.y = 0;
            if (g > 0)
                for (u = -1; ++u < h;) o = l[u], o >= s[0] && o <= s[1] && (a = c[ya.bisect(f, o, 1, g) - 1], a.y += p, a.push(n[u]));
            return c
        }
        var t = !0
            , e = Number
            , r = Mi
            , i = vi;
        return n.value = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function (t) {
            return arguments.length ? (r = pt(t), n) : r
        }, n.bins = function (t) {
            return arguments.length ? (i = "number" == typeof t ? function (n) {
                return yi(n, t)
            } : pt(t), n) : i
        }, n.frequency = function (e) {
            return arguments.length ? (t = !!e, n) : t
        }, n
    }, ya.layout.tree = function () {
        function n(n, u) {
            function a(n, t) {
                var r = n.children
                    , i = n._tree;
                if (r && (u = r.length)) {
                    for (var u, o, l, s = r[0], f = s, h = -1; ++h < u;) l = r[h], a(l, o), f = c(l, o, f), o = l;
                    Ni(n);
                    var g = .5 * (s._tree.prelim + l._tree.prelim);
                    t ? (i.prelim = t._tree.prelim + e(n, t), i.mod = i.prelim - g) : i.prelim = g
                }
                else t && (i.prelim = t._tree.prelim + e(n, t))
            }

            function o(n, t) {
                n.x = n._tree.prelim + t;
                var e = n.children;
                if (e && (r = e.length)) {
                    var r, i = -1;
                    for (t += n._tree.mod; ++i < r;) o(e[i], t)
                }
            }

            function c(n, t, r) {
                if (t) {
                    for (var i, u = n, a = n, o = t, c = n.parent.children[0], l = u._tree.mod, s = a._tree.mod, f = o._tree.mod, h = c._tree.mod; o = _i(o), u = bi(u), o && u;) c = bi(c), a = _i(a), a._tree.ancestor = n, i = o._tree.prelim + f - u._tree.prelim - l + e(o, u), i > 0 && (qi(Ti(o, n, r), n, i), l += i, s += i), f += o._tree.mod, l += u._tree.mod, h += c._tree.mod, s += a._tree.mod;
                    o && !_i(a) && (a._tree.thread = o, a._tree.mod += f - s), u && !bi(c) && (c._tree.thread = u, c._tree.mod += l - h, r = n)
                }
                return r
            }
            var l = t.call(this, n, u)
                , s = l[0];
            Ai(s, function (n, t) {
                n._tree = {
                    ancestor: n
                    , prelim: 0
                    , mod: 0
                    , change: 0
                    , shift: 0
                    , number: t ? t._tree.number + 1 : 0
                }
            }), a(s), o(s, -s._tree.prelim);
            var f = wi(s, Ei)
                , h = wi(s, Si)
                , g = wi(s, ki)
                , p = f.x - e(f, h) / 2
                , m = h.x + e(h, f) / 2
                , d = g.depth || 1;
            return Ai(s, i ? function (n) {
                n.x *= r[0], n.y = n.depth * r[1], delete n._tree
            } : function (n) {
                n.x = (n.x - p) / (m - p) * r[0], n.y = n.depth / d * r[1], delete n._tree
            }), l
        }
        var t = ya.layout.hierarchy().sort(null).value(null)
            , e = xi
            , r = [1, 1]
            , i = !1;
        return n.separation = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function (t) {
            return arguments.length ? (i = null == (r = t), n) : i ? null : r
        }, n.nodeSize = function (t) {
            return arguments.length ? (i = null != (r = t), n) : i ? r : null
        }, ii(n, t)
    }, ya.layout.pack = function () {
        function n(n, u) {
            var a = e.call(this, n, u)
                , o = a[0]
                , c = i[0]
                , l = i[1]
                , s = null == t ? Math.sqrt : "function" == typeof t ? t : function () {
                    return t
                };
            if (o.x = o.y = 0, Ai(o, function (n) {
                    n.r = +s(n.value)
                }), Ai(o, Li), r) {
                var f = r * (t ? 1 : Math.max(2 * o.r / c, 2 * o.r / l)) / 2;
                Ai(o, function (n) {
                    n.r += f
                }), Ai(o, Li), Ai(o, function (n) {
                    n.r -= f
                })
            }
            return Pi(o, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * o.r / c, 2 * o.r / l)), a
        }
        var t, e = ya.layout.hierarchy().sort(Ci)
            , r = 0
            , i = [1, 1];
        return n.size = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.radius = function (e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
        }, n.padding = function (t) {
            return arguments.length ? (r = +t, n) : r
        }, ii(n, e)
    }, ya.layout.cluster = function () {
        function n(n, u) {
            var a, o = t.call(this, n, u)
                , c = o[0]
                , l = 0;
            Ai(c, function (n) {
                var t = n.children;
                t && t.length ? (n.x = Ri(t), n.y = Yi(t)) : (n.x = a ? l += e(n, a) : 0, n.y = 0, a = n)
            });
            var s = Ui(c)
                , f = Ii(c)
                , h = s.x - e(s, f) / 2
                , g = f.x + e(f, s) / 2;
            return Ai(c, i ? function (n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
            } : function (n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }), o
        }
        var t = ya.layout.hierarchy().sort(null).value(null)
            , e = xi
            , r = [1, 1]
            , i = !1;
        return n.separation = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function (t) {
            return arguments.length ? (i = null == (r = t), n) : i ? null : r
        }, n.nodeSize = function (t) {
            return arguments.length ? (i = null != (r = t), n) : i ? r : null
        }, ii(n, t)
    }, ya.layout.treemap = function () {
        function n(n, t) {
            for (var e, r, i = -1, u = n.length; ++i < u;) r = (e = n[i]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function t(e) {
            var u = e.children;
            if (u && u.length) {
                var a, o, c, l = f(e)
                    , s = []
                    , h = u.slice()
                    , p = 1 / 0
                    , m = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / e.value), s.area = 0;
                    (c = h.length) > 0;) s.push(a = h[c - 1]), s.area += a.area, "squarify" !== g || (o = r(s, m)) <= p ? (h.pop(), p = o) : (s.area -= s.pop().area, i(s, m, l, !1), m = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
                s.length && (i(s, m, l, !0), s.length = s.area = 0), u.forEach(t)
            }
        }

        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var u, a = f(t)
                    , o = r.slice()
                    , c = [];
                for (n(o, a.dx * a.dy / t.value), c.area = 0; u = o.pop();) c.push(u), c.area += u.area, null != u.z && (i(c, u.z ? a.dx : a.dy, a, !o.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(n, t) {
            for (var e, r = n.area, i = 0, u = 1 / 0, a = -1, o = n.length; ++a < o;)(e = n[a].area) && (u > e && (u = e), e > i && (i = e));
            return r *= r, t *= t, r ? Math.max(t * i * p / r, r / (t * u * p)) : 1 / 0
        }

        function i(n, t, e, r) {
            var i, u = -1
                , a = n.length
                , o = e.x
                , l = e.y
                , s = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); ++u < a;) i = n[u], i.x = o, i.y = l, i.dy = s, o += i.dx = Math.min(e.x + e.dx - o, s ? c(i.area / s) : 0);
                i.z = !0, i.dx += e.x + e.dx - o, e.y += s, e.dy -= s
            }
            else {
                for ((r || s > e.dx) && (s = e.dx); ++u < a;) i = n[u], i.x = o, i.y = l, i.dx = s, l += i.dy = Math.min(e.y + e.dy - l, s ? c(i.area / s) : 0);
                i.z = !1, i.dy += e.y + e.dy - l, e.x += s, e.dx -= s
            }
        }

        function u(r) {
            var i = a || o(r)
                , u = i[0];
            return u.x = 0, u.y = 0, u.dx = l[0], u.dy = l[1], a && o.revalue(u), n([u], u.dx * u.dy / u.value), (a ? e : t)(u), h && (a = i), i
        }
        var a, o = ya.layout.hierarchy()
            , c = Math.round
            , l = [1, 1]
            , s = null
            , f = Vi
            , h = !1
            , g = "squarify"
            , p = .5 * (1 + Math.sqrt(5));
        return u.size = function (n) {
            return arguments.length ? (l = n, u) : l
        }, u.padding = function (n) {
            function t(t) {
                var e = n.call(u, t, t.depth);
                return null == e ? Vi(t) : Xi(t, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(t) {
                return Xi(t, n)
            }
            if (!arguments.length) return s;
            var r;
            return f = null == (s = n) ? Vi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, u
        }, u.round = function (n) {
            return arguments.length ? (c = n ? Math.round : Number, u) : c != Number
        }, u.sticky = function (n) {
            return arguments.length ? (h = n, a = null, u) : h
        }, u.ratio = function (n) {
            return arguments.length ? (p = n, u) : p
        }, u.mode = function (n) {
            return arguments.length ? (g = n + "", u) : g
        }, ii(u, o)
    }, ya.random = {
        normal: function (n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0)
                , function () {
                    var e, r, i;
                    do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
                    return n + t * e * Math.sqrt(-2 * Math.log(i) / i)
                }
        }
        , logNormal: function () {
            var n = ya.random.normal.apply(ya, arguments);
            return function () {
                return Math.exp(n())
            }
        }
        , irwinHall: function (n) {
            return function () {
                for (var t = 0, e = 0; n > e; e++) t += Math.random();
                return t / n
            }
        }
    }, ya.scale = {};
    var kc = {
        floor: mt
        , ceil: mt
    };
    ya.scale.linear = function () {
        return Ki([0, 1], [0, 1], Sr, !1)
    }, ya.scale.log = function () {
        return uu(ya.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var Ac = ya.format(".0e")
        , Nc = {
            floor: function (n) {
                return -Math.ceil(-n)
            }
            , ceil: function (n) {
                return -Math.floor(-n)
            }
        };
    ya.scale.pow = function () {
        return au(ya.scale.linear(), 1, [0, 1])
    }, ya.scale.sqrt = function () {
        return ya.scale.pow().exponent(.5)
    }, ya.scale.ordinal = function () {
        return cu([], {
            t: "range"
            , a: [[]]
        })
    }, ya.scale.category10 = function () {
        return ya.scale.ordinal().range(qc)
    }, ya.scale.category20 = function () {
        return ya.scale.ordinal().range(Tc)
    }, ya.scale.category20b = function () {
        return ya.scale.ordinal().range(Cc)
    }, ya.scale.category20c = function () {
        return ya.scale.ordinal().range(zc)
    };
    var qc = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ut)
        , Tc = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ut)
        , Cc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ut)
        , zc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ut);
    ya.scale.quantile = function () {
        return lu([], [])
    }, ya.scale.quantize = function () {
        return su(0, 1, [0, 1])
    }, ya.scale.threshold = function () {
        return fu([.5], [0, 1])
    }, ya.scale.identity = function () {
        return hu([0, 1])
    }, ya.svg.arc = function () {
        function n() {
            var n = t.apply(this, arguments)
                , u = e.apply(this, arguments)
                , a = r.apply(this, arguments) + Dc
                , o = i.apply(this, arguments) + Dc
                , c = (a > o && (c = a, a = o, o = c), o - a)
                , l = Ka > c ? "0" : "1"
                , s = Math.cos(a)
                , f = Math.sin(a)
                , h = Math.cos(o)
                , g = Math.sin(o);
            return c >= jc ? n ? "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "Z" : n ? "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * g + "L0,0" + "Z"
        }
        var t = gu
            , e = pu
            , r = mu
            , i = du;
        return n.innerRadius = function (e) {
            return arguments.length ? (t = pt(e), n) : t
        }, n.outerRadius = function (t) {
            return arguments.length ? (e = pt(t), n) : e
        }, n.startAngle = function (t) {
            return arguments.length ? (r = pt(t), n) : r
        }, n.endAngle = function (t) {
            return arguments.length ? (i = pt(t), n) : i
        }, n.centroid = function () {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2
                , u = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Dc;
            return [Math.cos(u) * n, Math.sin(u) * n]
        }, n
    };
    var Dc = -Ka / 2
        , jc = 2 * Ka - 1e-6;
    ya.svg.line.radial = function () {
        var n = Ue(vu);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, $e.reverse = We, We.reverse = $e, ya.svg.area = function () {
        return yu(mt)
    }, ya.svg.area.radial = function () {
        var n = yu(vu);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, ya.svg.chord = function () {
        function n(n, o) {
            var c = t(this, u, n, o)
                , l = t(this, a, n, o);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? i(c.r, c.p1, c.r, c.p0) : i(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + i(l.r, l.p1, c.r, c.p0)) + "Z"
        }

        function t(n, t, e, r) {
            var i = t.call(n, e, r)
                , u = o.call(n, i, r)
                , a = c.call(n, i, r) + Dc
                , s = l.call(n, i, r) + Dc;
            return {
                r: u
                , a0: a
                , a1: s
                , p0: [u * Math.cos(a), u * Math.sin(a)]
                , p1: [u * Math.cos(s), u * Math.sin(s)]
            }
        }

        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Ka) + ",1 " + t
        }

        function i(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var u = ze
            , a = De
            , o = Mu
            , c = mu
            , l = du;
        return n.radius = function (t) {
            return arguments.length ? (o = pt(t), n) : o
        }, n.source = function (t) {
            return arguments.length ? (u = pt(t), n) : u
        }, n.target = function (t) {
            return arguments.length ? (a = pt(t), n) : a
        }, n.startAngle = function (t) {
            return arguments.length ? (c = pt(t), n) : c
        }, n.endAngle = function (t) {
            return arguments.length ? (l = pt(t), n) : l
        }, n
    }, ya.svg.diagonal = function () {
        function n(n, i) {
            var u = t.call(this, n, i)
                , a = e.call(this, n, i)
                , o = (u.y + a.y) / 2
                , c = [u, {
                    x: u.x
                    , y: o
                }, {
                    x: a.x
                    , y: o
                }, a];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = ze
            , e = De
            , r = xu;
        return n.source = function (e) {
            return arguments.length ? (t = pt(e), n) : t
        }, n.target = function (t) {
            return arguments.length ? (e = pt(t), n) : e
        }, n.projection = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n
    }, ya.svg.diagonal.radial = function () {
        var n = ya.svg.diagonal()
            , t = xu
            , e = n.projection;
        return n.projection = function (n) {
            return arguments.length ? e(bu(t = n)) : t
        }, n
    }, ya.svg.symbol = function () {
        function n(n, r) {
            return (Lc.get(t.call(this, n, r)) || Su)(e.call(this, n, r))
        }
        var t = wu
            , e = _u;
        return n.type = function (e) {
            return arguments.length ? (t = pt(e), n) : t
        }, n.size = function (t) {
            return arguments.length ? (e = pt(t), n) : e
        }, n
    };
    var Lc = ya.map({
        circle: Su
        , cross: function (n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        }
        , diamond: function (n) {
            var t = Math.sqrt(n / (2 * Oc))
                , e = t * Oc;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        }
        , square: function (n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        }
        , "triangle-down": function (n) {
            var t = Math.sqrt(n / Pc)
                , e = t * Pc / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        }
        , "triangle-up": function (n) {
            var t = Math.sqrt(n / Pc)
                , e = t * Pc / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }
    });
    ya.svg.symbolTypes = Lc.keys();
    var Hc, Fc, Pc = Math.sqrt(3)
        , Oc = Math.tan(30 * to)
        , Yc = []
        , Rc = 0;
    Yc.call = Ya.call, Yc.empty = Ya.empty, Yc.node = Ya.node, Yc.size = Ya.size, ya.transition = function (n) {
        return arguments.length ? Hc ? n.transition() : n : Ia.transition()
    }, ya.transition.prototype = Yc, Yc.select = function (n) {
        var t, e, r, i = this.id
            , u = [];
        n = v(n);
        for (var a = -1, o = this.length; ++a < o;) {
            u.push(t = []);
            for (var c = this[a], l = -1, s = c.length; ++l < s;)(r = c[l]) && (e = n.call(r, r.__data__, l, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Nu(e, l, i, r.__transition__[i]), t.push(e)) : t.push(null)
        }
        return Eu(u, i)
    }, Yc.selectAll = function (n) {
        var t, e, r, i, u, a = this.id
            , o = [];
        n = y(n);
        for (var c = -1, l = this.length; ++c < l;)
            for (var s = this[c], f = -1, h = s.length; ++f < h;)
                if (r = s[f]) {
                    u = r.__transition__[a], e = n.call(r, r.__data__, f, c), o.push(t = []);
                    for (var g = -1, p = e.length; ++g < p;)(i = e[g]) && Nu(i, g, a, u), t.push(i)
                }
        return Eu(o, a)
    }, Yc.filter = function (n) {
        var t, e, r, i = [];
        "function" != typeof n && (n = N(n));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(t = []);
            for (var e = this[u], o = 0, c = e.length; c > o; o++)(r = e[o]) && n.call(r, r.__data__, o) && t.push(r)
        }
        return Eu(i, this.id)
    }, Yc.tween = function (n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : T(this, null == t ? function (t) {
            t.__transition__[e].tween.remove(n)
        } : function (r) {
            r.__transition__[e].tween.set(n, t)
        })
    }, Yc.attr = function (n, t) {
        function e() {
            this.removeAttribute(o)
        }

        function r() {
            this.removeAttributeNS(o.space, o.local)
        }

        function i(n) {
            return null == n ? e : (n += "", function () {
                var t, e = this.getAttribute(o);
                return e !== n && (t = a(e, n), function (n) {
                    this.setAttribute(o, t(n))
                })
            })
        }

        function u(n) {
            return null == n ? r : (n += "", function () {
                var t, e = this.getAttributeNS(o.space, o.local);
                return e !== n && (t = a(e, n), function (n) {
                    this.setAttributeNS(o.space, o.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this
        }
        var a = "transform" == n ? Br : Sr
            , o = ya.ns.qualify(n);
        return ku(this, "attr." + n, t, o.local ? u : i)
    }, Yc.attrTween = function (n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(i));
            return r && function (n) {
                this.setAttribute(i, r(n))
            }
        }

        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local));
            return r && function (n) {
                this.setAttributeNS(i.space, i.local, r(n))
            }
        }
        var i = ya.ns.qualify(n);
        return this.tween("attr." + n, i.local ? r : e)
    }, Yc.style = function (n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function i(t) {
            return null == t ? r : (t += "", function () {
                var r, i = ba.getComputedStyle(this, null).getPropertyValue(n);
                return i !== t && (r = Sr(i, t), function (t) {
                    this.style.setProperty(n, r(t), e)
                })
            })
        }
        var u = arguments.length;
        if (3 > u) {
            if ("string" != typeof n) {
                2 > u && (t = "");
                for (e in n) this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return ku(this, "style." + n, t, i)
    }, Yc.styleTween = function (n, t, e) {
        function r(r, i) {
            var u = t.call(this, r, i, ba.getComputedStyle(this, null).getPropertyValue(n));
            return u && function (t) {
                this.style.setProperty(n, u(t), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
    }, Yc.text = function (n) {
        return ku(this, "text", n, Au)
    }, Yc.remove = function () {
        return this.each("end.transition", function () {
            var n;
            !this.__transition__ && (n = this.parentNode) && n.removeChild(this)
        })
    }, Yc.ease = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = ya.ease.apply(ya, arguments)), T(this, function (e) {
            e.__transition__[t].ease = n
        }))
    }, Yc.delay = function (n) {
        var t = this.id;
        return T(this, "function" == typeof n ? function (e, r, i) {
            e.__transition__[t].delay = 0 | n.call(e, e.__data__, r, i)
        } : (n |= 0, function (e) {
            e.__transition__[t].delay = n
        }))
    }, Yc.duration = function (n) {
        var t = this.id;
        return T(this, "function" == typeof n ? function (e, r, i) {
            e.__transition__[t].duration = Math.max(1, 0 | n.call(e, e.__data__, r, i))
        } : (n = Math.max(1, 0 | n), function (e) {
            e.__transition__[t].duration = n
        }))
    }, Yc.each = function (n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Fc
                , i = Hc;
            Hc = e, T(this, function (t, r, i) {
                Fc = t.__transition__[e], n.call(t, t.__data__, r, i)
            }), Fc = r, Hc = i
        }
        else T(this, function (r) {
            var i = r.__transition__[e];
            (i.event || (i.event = ya.dispatch("start", "end"))).on(n, t)
        });
        return this
    }, Yc.transition = function () {
        for (var n, t, e, r, i = this.id, u = ++Rc, a = [], o = 0, c = this.length; c > o; o++) {
            a.push(n = []);
            for (var t = this[o], l = 0, s = t.length; s > l; l++)(e = t[l]) && (r = Object.create(e.__transition__[i]), r.delay += r.duration, Nu(e, l, u, r)), n.push(e)
        }
        return Eu(a, u)
    }, ya.svg.axis = function () {
        function n(n) {
            n.each(function () {
                var n, f = ya.select(this)
                    , h = null == l ? e.ticks ? e.ticks.apply(e, c) : e.domain() : l
                    , g = null == t ? e.tickFormat ? e.tickFormat.apply(e, c) : String : t
                    , p = Cu(e, h, s)
                    , m = f.selectAll(".tick.minor").data(p, String)
                    , d = m.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6)
                    , v = ya.transition(m.exit()).style("opacity", 1e-6).remove()
                    , y = ya.transition(m).style("opacity", 1)
                    , M = f.selectAll(".tick.major").data(h, String)
                    , x = M.enter().insert("g", ".domain").attr("class", "tick major").style("opacity", 1e-6)
                    , b = ya.transition(M.exit()).style("opacity", 1e-6).remove()
                    , _ = ya.transition(M).style("opacity", 1)
                    , w = Bi(e)
                    , S = f.selectAll(".domain").data([0])
                    , E = (S.enter().append("path").attr("class", "domain"), ya.transition(S))
                    , k = e.copy()
                    , A = this.__chart__ || k;
                this.__chart__ = k, x.append("line"), x.append("text");
                var N = x.select("line")
                    , q = _.select("line")
                    , T = M.select("text").text(g)
                    , C = x.select("text")
                    , z = _.select("text");
                switch (r) {
                case "bottom":
                    n = qu, d.attr("y2", u), y.attr("x2", 0).attr("y2", u), N.attr("y2", i), C.attr("y", Math.max(i, 0) + o), q.attr("x2", 0).attr("y2", i), z.attr("x", 0).attr("y", Math.max(i, 0) + o), T.attr("dy", ".71em").style("text-anchor", "middle"), E.attr("d", "M" + w[0] + "," + a + "V0H" + w[1] + "V" + a);
                    break;
                case "top":
                    n = qu, d.attr("y2", -u), y.attr("x2", 0).attr("y2", -u), N.attr("y2", -i), C.attr("y", -(Math.max(i, 0) + o)), q.attr("x2", 0).attr("y2", -i), z.attr("x", 0).attr("y", -(Math.max(i, 0) + o)), T.attr("dy", "0em").style("text-anchor", "middle"), E.attr("d", "M" + w[0] + "," + -a + "V0H" + w[1] + "V" + -a);
                    break;
                case "left":
                    n = Tu, d.attr("x2", -u), y.attr("x2", -u).attr("y2", 0), N.attr("x2", -i), C.attr("x", -(Math.max(i, 0) + o)), q.attr("x2", -i).attr("y2", 0), z.attr("x", -(Math.max(i, 0) + o)).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "end"), E.attr("d", "M" + -a + "," + w[0] + "H0V" + w[1] + "H" + -a);
                    break;
                case "right":
                    n = Tu, d.attr("x2", u), y.attr("x2", u).attr("y2", 0), N.attr("x2", i), C.attr("x", Math.max(i, 0) + o), q.attr("x2", i).attr("y2", 0), z.attr("x", Math.max(i, 0) + o).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "start"), E.attr("d", "M" + a + "," + w[0] + "H0V" + w[1] + "H" + a)
                }
                if (e.rangeBand) {
                    var D = k.rangeBand() / 2
                        , j = function (n) {
                            return k(n) + D
                        };
                    x.call(n, j), _.call(n, j)
                }
                else x.call(n, A), _.call(n, k), b.call(n, k), d.call(n, A), y.call(n, k), v.call(n, k)
            })
        }
        var t, e = ya.scale.linear()
            , r = Uc
            , i = 6
            , u = 6
            , a = 6
            , o = 3
            , c = [10]
            , l = null
            , s = 0;
        return n.scale = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.orient = function (t) {
            return arguments.length ? (r = t in Ic ? t + "" : Uc, n) : r
        }, n.ticks = function () {
            return arguments.length ? (c = arguments, n) : c
        }, n.tickValues = function (t) {
            return arguments.length ? (l = t, n) : l
        }, n.tickFormat = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.tickSize = function (t, e) {
            if (!arguments.length) return i;
            var r = arguments.length - 1;
            return i = +t, u = r > 1 ? +e : i, a = r > 0 ? +arguments[r] : i, n
        }, n.tickPadding = function (t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function (t) {
            return arguments.length ? (s = +t, n) : s
        }, n
    };
    var Uc = "bottom"
        , Ic = {
            top: 1
            , right: 1
            , bottom: 1
            , left: 1
        };
    ya.svg.brush = function () {
        function n(u) {
            u.each(function () {
                var u, a = ya.select(this)
                    , s = a.selectAll(".background").data([0])
                    , f = a.selectAll(".extent").data([0])
                    , h = a.selectAll(".resize").data(l, String);
                a.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i), s.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.enter().append("rect").attr("class", "extent").style("cursor", "move"), h.enter().append("g").attr("class", function (n) {
                    return "resize " + n
                }).style("cursor", function (n) {
                    return Vc[n]
                }).append("rect").attr("x", function (n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function (n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", n.empty() ? "none" : null), h.exit().remove(), o && (u = Bi(o), s.attr("x", u[0]).attr("width", u[1] - u[0]), e(a)), c && (u = Bi(c), s.attr("y", u[0]).attr("height", u[1] - u[0]), r(a)), t(a)
            })
        }

        function t(n) {
            n.selectAll(".resize").attr("transform", function (n) {
                return "translate(" + s[+/e$/.test(n)][0] + "," + s[+/^s/.test(n)][1] + ")"
            })
        }

        function e(n) {
            n.select(".extent").attr("x", s[0][0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1][0] - s[0][0])
        }

        function r(n) {
            n.select(".extent").attr("y", s[0][1]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", s[1][1] - s[0][1])
        }

        function i() {
            function i() {
                var n = ya.event.changedTouches;
                return n ? ya.touches(M, n)[0] : ya.mouse(M)
            }

            function l() {
                32 == ya.event.keyCode && (k || (v = null, N[0] -= s[1][0], N[1] -= s[1][1], k = 2), g())
            }

            function h() {
                32 == ya.event.keyCode && 2 == k && (N[0] += s[1][0], N[1] += s[1][1], k = 0, g())
            }

            function p() {
                var n = i()
                    , u = !1;
                y && (n[0] += y[0], n[1] += y[1]), k || (ya.event.altKey ? (v || (v = [(s[0][0] + s[1][0]) / 2, (s[0][1] + s[1][1]) / 2]), N[0] = s[+(n[0] < v[0])][0], N[1] = s[+(n[1] < v[1])][1]) : v = null), S && m(n, o, 0) && (e(_), u = !0), E && m(n, c, 1) && (r(_), u = !0), u && (t(_), b({
                    type: "brush"
                    , mode: k ? "move" : "resize"
                }))
            }

            function m(n, t, e) {
                var r, i, a = Bi(t)
                    , o = a[0]
                    , c = a[1]
                    , l = N[e]
                    , h = s[1][e] - s[0][e];
                return k && (o -= l, c -= h + l), r = f[e] ? Math.max(o, Math.min(c, n[e])) : n[e], k ? i = (r += l) + h : (v && (l = Math.max(o, Math.min(c, 2 * v[e] - r))), r > l ? (i = r, r = l) : i = l), s[0][e] !== r || s[1][e] !== i ? (u = null, s[0][e] = r, s[1][e] = i, !0) : void 0
            }

            function d() {
                p(), _.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ya.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), A(), b({
                    type: "brushend"
                })
            }
            var v, y, M = this
                , x = ya.select(ya.event.target)
                , b = a.of(M, arguments)
                , _ = ya.select(M)
                , w = x.datum()
                , S = !/^(n|s)$/.test(w) && o
                , E = !/^(e|w)$/.test(w) && c
                , k = x.classed("extent")
                , A = H()
                , N = i()
                , q = ya.select(ba).on("keydown.brush", l).on("keyup.brush", h);
            if (ya.event.changedTouches ? q.on("touchmove.brush", p).on("touchend.brush", d) : q.on("mousemove.brush", p).on("mouseup.brush", d), k) N[0] = s[0][0] - N[0], N[1] = s[0][1] - N[1];
            else if (w) {
                var T = +/w$/.test(w)
                    , C = +/^n/.test(w);
                y = [s[1 - T][0] - N[0], s[1 - C][1] - N[1]], N[0] = s[T][0], N[1] = s[C][1]
            }
            else ya.event.altKey && (v = N.slice());
            _.style("pointer-events", "none").selectAll(".resize").style("display", null), ya.select("body").style("cursor", x.style("cursor")), b({
                type: "brushstart"
            }), p()
        }
        var u, a = m(n, "brushstart", "brush", "brushend")
            , o = null
            , c = null
            , l = Xc[0]
            , s = [[0, 0], [0, 0]]
            , f = [!0, !0];
        return n.x = function (t) {
            return arguments.length ? (o = t, l = Xc[!o << 1 | !c], n) : o
        }, n.y = function (t) {
            return arguments.length ? (c = t, l = Xc[!o << 1 | !c], n) : c
        }, n.clamp = function (t) {
            return arguments.length ? (o && c ? f = [!!t[0], !!t[1]] : (o || c) && (f[+!o] = !!t), n) : o && c ? f : o || c ? f[+!o] : null
        }, n.extent = function (t) {
            var e, r, i, a, l;
            return arguments.length ? (u = [[0, 0], [0, 0]], o && (e = t[0], r = t[1], c && (e = e[0], r = r[0]), u[0][0] = e, u[1][0] = r, o.invert && (e = o(e), r = o(r)), e > r && (l = e, e = r, r = l), s[0][0] = 0 | e, s[1][0] = 0 | r), c && (i = t[0], a = t[1], o && (i = i[1], a = a[1]), u[0][1] = i, u[1][1] = a, c.invert && (i = c(i), a = c(a)), i > a && (l = i, i = a, a = l), s[0][1] = 0 | i, s[1][1] = 0 | a), n) : (t = u || s, o && (e = t[0][0], r = t[1][0], u || (e = s[0][0], r = s[1][0], o.invert && (e = o.invert(e), r = o.invert(r)), e > r && (l = e, e = r, r = l))), c && (i = t[0][1], a = t[1][1], u || (i = s[0][1], a = s[1][1], c.invert && (i = c.invert(i), a = c.invert(a)), i > a && (l = i, i = a, a = l))), o && c ? [[e, i], [r, a]] : o ? [e, r] : c && [i, a])
        }, n.clear = function () {
            return u = null, s[0][0] = s[0][1] = s[1][0] = s[1][1] = 0, n
        }, n.empty = function () {
            return o && s[0][0] === s[1][0] || c && s[0][1] === s[1][1]
        }, ya.rebind(n, a, "on")
    };
    var Vc = {
            n: "ns-resize"
            , e: "ew-resize"
            , s: "ns-resize"
            , w: "ew-resize"
            , nw: "nwse-resize"
            , ne: "nesw-resize"
            , se: "nwse-resize"
            , sw: "nesw-resize"
        }
        , Xc = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    ya.time = {};
    var Zc = Date
        , Bc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    zu.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        }
        , getDay: function () {
            return this._.getUTCDay()
        }
        , getFullYear: function () {
            return this._.getUTCFullYear()
        }
        , getHours: function () {
            return this._.getUTCHours()
        }
        , getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        }
        , getMinutes: function () {
            return this._.getUTCMinutes()
        }
        , getMonth: function () {
            return this._.getUTCMonth()
        }
        , getSeconds: function () {
            return this._.getUTCSeconds()
        }
        , getTime: function () {
            return this._.getTime()
        }
        , getTimezoneOffset: function () {
            return 0
        }
        , valueOf: function () {
            return this._.valueOf()
        }
        , setDate: function () {
            $c.setUTCDate.apply(this._, arguments)
        }
        , setDay: function () {
            $c.setUTCDay.apply(this._, arguments)
        }
        , setFullYear: function () {
            $c.setUTCFullYear.apply(this._, arguments)
        }
        , setHours: function () {
            $c.setUTCHours.apply(this._, arguments)
        }
        , setMilliseconds: function () {
            $c.setUTCMilliseconds.apply(this._, arguments)
        }
        , setMinutes: function () {
            $c.setUTCMinutes.apply(this._, arguments)
        }
        , setMonth: function () {
            $c.setUTCMonth.apply(this._, arguments)
        }
        , setSeconds: function () {
            $c.setUTCSeconds.apply(this._, arguments)
        }
        , setTime: function () {
            $c.setTime.apply(this._, arguments)
        }
    };
    var $c = Date.prototype
        , Wc = "%a %b %e %X %Y"
        , Jc = "%m/%d/%Y"
        , Gc = "%H:%M:%S"
        , Kc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        , Qc = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        , nl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        , tl = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    ya.time.year = Du(function (n) {
        return n = ya.time.day(n), n.setMonth(0, 1), n
    }, function (n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function (n) {
        return n.getFullYear()
    }), ya.time.years = ya.time.year.range, ya.time.years.utc = ya.time.year.utc.range, ya.time.day = Du(function (n) {
        var t = new Zc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function (n, t) {
        n.setDate(n.getDate() + t)
    }, function (n) {
        return n.getDate() - 1
    }), ya.time.days = ya.time.day.range, ya.time.days.utc = ya.time.day.utc.range, ya.time.dayOfYear = function (n) {
        var t = ya.time.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, Bc.forEach(function (n, t) {
        n = n.toLowerCase(), t = 7 - t;
        var e = ya.time[n] = Du(function (n) {
            return (n = ya.time.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function (n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function (n) {
            var e = ya.time.year(n).getDay();
            return Math.floor((ya.time.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        });
        ya.time[n + "s"] = e.range, ya.time[n + "s"].utc = e.utc.range, ya.time[n + "OfYear"] = function (n) {
            var e = ya.time.year(n).getDay();
            return Math.floor((ya.time.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }), ya.time.week = ya.time.sunday, ya.time.weeks = ya.time.sunday.range, ya.time.weeks.utc = ya.time.sunday.utc.range, ya.time.weekOfYear = ya.time.sundayOfYear, ya.time.format = function (n) {
        function t(t) {
            for (var r, i, u, a = [], o = -1, c = 0; ++o < e;) 37 === n.charCodeAt(o) && (a.push(n.substring(c, o)), null != (i = fl[r = n.charAt(++o)]) && (r = n.charAt(++o)), (u = hl[r]) && (r = u(t, null == i ? "e" === r ? " " : "0" : i)), a.push(r), c = o + 1);
            return a.push(n.substring(c, o)), a.join("")
        }
        var e = n.length;
        return t.parse = function (t) {
            var e = {
                    y: 1900
                    , m: 0
                    , d: 1
                    , H: 0
                    , M: 0
                    , S: 0
                    , L: 0
                }
                , r = Lu(e, n, t, 0);
            if (r != t.length) return null;
            "p" in e && (e.H = e.H % 12 + 12 * e.p);
            var i = new Zc;
            return "j" in e ? i.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H, e.M, e.S, e.L), i
        }, t.toString = function () {
            return n
        }, t
    };
    var el = Hu(Kc)
        , rl = Fu(Kc)
        , il = Hu(Qc)
        , ul = Fu(Qc)
        , al = Hu(nl)
        , ol = Fu(nl)
        , cl = Hu(tl)
        , ll = Fu(tl)
        , sl = /^%/
        , fl = {
            "-": ""
            , _: " "
            , 0: "0"
        }
        , hl = {
            a: function (n) {
                return Qc[n.getDay()]
            }
            , A: function (n) {
                return Kc[n.getDay()]
            }
            , b: function (n) {
                return tl[n.getMonth()]
            }
            , B: function (n) {
                return nl[n.getMonth()]
            }
            , c: ya.time.format(Wc)
            , d: function (n, t) {
                return Pu(n.getDate(), t, 2)
            }
            , e: function (n, t) {
                return Pu(n.getDate(), t, 2)
            }
            , H: function (n, t) {
                return Pu(n.getHours(), t, 2)
            }
            , I: function (n, t) {
                return Pu(n.getHours() % 12 || 12, t, 2)
            }
            , j: function (n, t) {
                return Pu(1 + ya.time.dayOfYear(n), t, 3)
            }
            , L: function (n, t) {
                return Pu(n.getMilliseconds(), t, 3)
            }
            , m: function (n, t) {
                return Pu(n.getMonth() + 1, t, 2)
            }
            , M: function (n, t) {
                return Pu(n.getMinutes(), t, 2)
            }
            , p: function (n) {
                return n.getHours() >= 12 ? "PM" : "AM"
            }
            , S: function (n, t) {
                return Pu(n.getSeconds(), t, 2)
            }
            , U: function (n, t) {
                return Pu(ya.time.sundayOfYear(n), t, 2)
            }
            , w: function (n) {
                return n.getDay()
            }
            , W: function (n, t) {
                return Pu(ya.time.mondayOfYear(n), t, 2)
            }
            , x: ya.time.format(Jc)
            , X: ya.time.format(Gc)
            , y: function (n, t) {
                return Pu(n.getFullYear() % 100, t, 2)
            }
            , Y: function (n, t) {
                return Pu(n.getFullYear() % 1e4, t, 4)
            }
            , Z: aa
            , "%": function () {
                return "%"
            }
        }
        , gl = {
            a: Ou
            , A: Yu
            , b: Vu
            , B: Xu
            , c: Zu
            , d: Qu
            , e: Qu
            , H: ta
            , I: ta
            , j: na
            , L: ia
            , m: Ku
            , M: ea
            , p: ua
            , S: ra
            , U: Uu
            , w: Ru
            , W: Iu
            , x: Bu
            , X: $u
            , y: Ju
            , Y: Wu
            , "%": oa
        }
        , pl = /^\s*\d+/
        , ml = ya.map({
            am: 0
            , pm: 1
        });
    ya.time.format.utc = function (n) {
        function t(n) {
            try {
                Zc = zu;
                var t = new Zc;
                return t._ = n, e(t)
            }
            finally {
                Zc = Date
            }
        }
        var e = ya.time.format(n);
        return t.parse = function (n) {
            try {
                Zc = zu;
                var t = e.parse(n);
                return t && t._
            }
            finally {
                Zc = Date
            }
        }, t.toString = e.toString, t
    };
    var dl = ya.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    ya.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ca : dl, ca.parse = function (n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, ca.toString = dl.toString, ya.time.second = Du(function (n) {
        return new Zc(1e3 * Math.floor(n / 1e3))
    }, function (n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function (n) {
        return n.getSeconds()
    }), ya.time.seconds = ya.time.second.range, ya.time.seconds.utc = ya.time.second.utc.range, ya.time.minute = Du(function (n) {
        return new Zc(6e4 * Math.floor(n / 6e4))
    }, function (n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function (n) {
        return n.getMinutes()
    }), ya.time.minutes = ya.time.minute.range, ya.time.minutes.utc = ya.time.minute.utc.range, ya.time.hour = Du(function (n) {
        var t = n.getTimezoneOffset() / 60;
        return new Zc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function (n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function (n) {
        return n.getHours()
    }), ya.time.hours = ya.time.hour.range, ya.time.hours.utc = ya.time.hour.utc.range, ya.time.month = Du(function (n) {
        return n = ya.time.day(n), n.setDate(1), n
    }, function (n, t) {
        n.setMonth(n.getMonth() + t)
    }, function (n) {
        return n.getMonth()
    }), ya.time.months = ya.time.month.range, ya.time.months.utc = ya.time.month.utc.range;
    var vl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
        , yl = [[ya.time.second, 1], [ya.time.second, 5], [ya.time.second, 15], [ya.time.second, 30], [ya.time.minute, 1], [ya.time.minute, 5], [ya.time.minute, 15], [ya.time.minute, 30], [ya.time.hour, 1], [ya.time.hour, 3], [ya.time.hour, 6], [ya.time.hour, 12], [ya.time.day, 1], [ya.time.day, 2], [ya.time.week, 1], [ya.time.month, 1], [ya.time.month, 3], [ya.time.year, 1]]
        , Ml = [[ya.time.format("%Y"), Xt], [ya.time.format("%B"), function (n) {
            return n.getMonth()
        }], [ya.time.format("%b %d"), function (n) {
            return 1 != n.getDate()
        }], [ya.time.format("%a %d"), function (n) {
            return n.getDay() && 1 != n.getDate()
        }], [ya.time.format("%I %p"), function (n) {
            return n.getHours()
        }], [ya.time.format("%I:%M"), function (n) {
            return n.getMinutes()
        }], [ya.time.format(":%S"), function (n) {
            return n.getSeconds()
        }], [ya.time.format(".%L"), function (n) {
            return n.getMilliseconds()
        }]]
        , xl = ya.scale.linear()
        , bl = fa(Ml);
    yl.year = function (n, t) {
        return xl.domain(n.map(ga)).ticks(t).map(ha)
    }, ya.time.scale = function () {
        return la(ya.scale.linear(), yl, bl)
    };
    var _l = yl.map(function (n) {
            return [n[0].utc, n[1]]
        })
        , wl = [[ya.time.format.utc("%Y"), Xt], [ya.time.format.utc("%B"), function (n) {
            return n.getUTCMonth()
        }], [ya.time.format.utc("%b %d"), function (n) {
            return 1 != n.getUTCDate()
        }], [ya.time.format.utc("%a %d"), function (n) {
            return n.getUTCDay() && 1 != n.getUTCDate()
        }], [ya.time.format.utc("%I %p"), function (n) {
            return n.getUTCHours()
        }], [ya.time.format.utc("%I:%M"), function (n) {
            return n.getUTCMinutes()
        }], [ya.time.format.utc(":%S"), function (n) {
            return n.getUTCSeconds()
        }], [ya.time.format.utc(".%L"), function (n) {
            return n.getUTCMilliseconds()
        }]]
        , Sl = fa(wl);
    return _l.year = function (n, t) {
        return xl.domain(n.map(ma)).ticks(t).map(pa)
    }, ya.time.scale.utc = function () {
        return la(ya.scale.linear(), _l, Sl)
    }, ya.text = dt(function (n) {
        return n.responseText
    }), ya.json = function (n, t) {
        return vt(n, "application/json", da, t)
    }, ya.html = function (n, t) {
        return vt(n, "text/html", va, t)
    }, ya.xml = dt(function (n) {
        return n.responseXML
    }), ya
}();
//part 2 - https://s3-us-west-2.amazonaws.com/s.cdpn.io/35376/topojson.js//
topojson = (function () {
    function merge(topology, arcs) {
        var arcsByEnd = {}
            , fragmentByStart = {}
            , fragmentByEnd = {};
        arcs.forEach(function (i) {
            var e = ends(i);
            (arcsByEnd[e[0]] || (arcsByEnd[e[0]] = [])).push(i);
            (arcsByEnd[e[1]] || (arcsByEnd[e[1]] = [])).push(~i);
        });
        arcs.forEach(function (i) {
            var e = ends(i)
                , start = e[0]
                , end = e[1]
                , f, g;
            if (f = fragmentByEnd[start]) {
                delete fragmentByEnd[f.end];
                f.push(i);
                f.end = end;
                if (g = fragmentByStart[end]) {
                    delete fragmentByStart[g.start];
                    var fg = g === f ? f : f.concat(g);
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
                }
                else if (g = fragmentByEnd[end]) {
                    delete fragmentByStart[g.start];
                    delete fragmentByEnd[g.end];
                    var fg = f.concat(g.map(function (i) {
                        return ~i;
                    }).reverse());
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.start] = fg;
                }
                else {
                    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
                }
            }
            else if (f = fragmentByStart[end]) {
                delete fragmentByStart[f.start];
                f.unshift(i);
                f.start = start;
                if (g = fragmentByEnd[start]) {
                    delete fragmentByEnd[g.end];
                    var gf = g === f ? f : g.concat(f);
                    fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
                }
                else if (g = fragmentByStart[start]) {
                    delete fragmentByStart[g.start];
                    delete fragmentByEnd[g.end];
                    var gf = g.map(function (i) {
                        return ~i;
                    }).reverse().concat(f);
                    fragmentByStart[gf.start = g.end] = fragmentByEnd[gf.end = f.end] = gf;
                }
                else {
                    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
                }
            }
            else if (f = fragmentByStart[start]) {
                delete fragmentByStart[f.start];
                f.unshift(~i);
                f.start = end;
                if (g = fragmentByEnd[end]) {
                    delete fragmentByEnd[g.end];
                    var gf = g === f ? f : g.concat(f);
                    fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
                }
                else if (g = fragmentByStart[end]) {
                    delete fragmentByStart[g.start];
                    delete fragmentByEnd[g.end];
                    var gf = g.map(function (i) {
                        return ~i;
                    }).reverse().concat(f);
                    fragmentByStart[gf.start = g.end] = fragmentByEnd[gf.end = f.end] = gf;
                }
                else {
                    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
                }
            }
            else if (f = fragmentByEnd[end]) {
                delete fragmentByEnd[f.end];
                f.push(~i);
                f.end = start;
                if (g = fragmentByEnd[start]) {
                    delete fragmentByStart[g.start];
                    var fg = g === f ? f : f.concat(g);
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
                }
                else if (g = fragmentByStart[start]) {
                    delete fragmentByStart[g.start];
                    delete fragmentByEnd[g.end];
                    var fg = f.concat(g.map(function (i) {
                        return ~i;
                    }).reverse());
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.start] = fg;
                }
                else {
                    fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
                }
            }
            else {
                f = [i];
                fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
            }
        });

        function ends(i) {
            var arc = topology.arcs[i]
                , p0 = arc[0]
                , p1 = [0, 0];
            arc.forEach(function (dp) {
                p1[0] += dp[0], p1[1] += dp[1];
            });
            return [p0, p1];
        }
        var fragments = [];
        for (var k in fragmentByEnd) fragments.push(fragmentByEnd[k]);
        return fragments;
    }

    function mesh(topology, o, filter) {
        var arcs = [];
        if (arguments.length > 1) {
            var geomsByArc = []
                , geom;

            function arc(i) {
                if (i < 0) i = ~i;
                (geomsByArc[i] || (geomsByArc[i] = [])).push(geom);
            }

            function line(arcs) {
                arcs.forEach(arc);
            }

            function polygon(arcs) {
                arcs.forEach(line);
            }

            function geometry(o) {
                if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
                else if (o.type in geometryType) {
                    geom = o;
                    geometryType[o.type](o.arcs);
                }
            }
            var geometryType = {
                LineString: line
                , MultiLineString: polygon
                , Polygon: polygon
                , MultiPolygon: function (arcs) {
                    arcs.forEach(polygon);
                }
            };
            geometry(o);
            geomsByArc.forEach(arguments.length < 3 ? function (geoms, i) {
                arcs.push(i);
            } : function (geoms, i) {
                if (filter(geoms[0], geoms[geoms.length - 1])) arcs.push(i);
            });
        }
        else {
            for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
        }
        return object(topology, {
            type: "MultiLineString"
            , arcs: merge(topology, arcs)
        });
    }

    function featureOrCollection(topology, o) {
        return o.type === "GeometryCollection" ? {
            type: "FeatureCollection"
            , features: o.geometries.map(function (o) {
                return feature(topology, o);
            })
        } : feature(topology, o);
    }

    function feature(topology, o) {
        var f = {
            type: "Feature"
            , id: o.id
            , properties: o.properties || {}
            , geometry: object(topology, o)
        };
        if (o.id == null) delete f.id;
        return f;
    }

    function object(topology, o) {
        var tf = topology.transform
            , kx = tf.scale[0]
            , ky = tf.scale[1]
            , dx = tf.translate[0]
            , dy = tf.translate[1]
            , arcs = topology.arcs;

        function arc(i, points) {
            if (points.length) points.pop();
            for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, x = 0, y = 0, p; k < n; ++k) points.push([
                (x += (p = a[k])[0]) * kx + dx
                , (y += p[1]) * ky + dy
      ]);
            if (i < 0) reverse(points, n);
        }

        function point(coordinates) {
            return [coordinates[0] * kx + dx, coordinates[1] * ky + dy];
        }

        function line(arcs) {
            var points = [];
            for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
            if (points.length < 2) points.push(points[0]);
            return points;
        }

        function ring(arcs) {
            var points = line(arcs);
            while (points.length < 4) points.push(points[0]);
            return points;
        }

        function polygon(arcs) {
            return arcs.map(ring);
        }

        function geometry(o) {
            var t = o.type;
            return t === "GeometryCollection" ? {
                type: t
                , geometries: o.geometries.map(geometry)
            } : t in geometryType ? {
                type: t
                , coordinates: geometryType[t](o)
            } : null;
        }
        var geometryType = {
            Point: function (o) {
                return point(o.coordinates);
            }
            , MultiPoint: function (o) {
                return o.coordinates.map(point);
            }
            , LineString: function (o) {
                return line(o.arcs);
            }
            , MultiLineString: function (o) {
                return o.arcs.map(line);
            }
            , Polygon: function (o) {
                return polygon(o.arcs);
            }
            , MultiPolygon: function (o) {
                return o.arcs.map(polygon);
            }
        };
        return geometry(o);
    }

    function reverse(array, n) {
        var t, j = array.length
            , i = j - n;
        while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
    }

    function bisect(a, x) {
        var lo = 0
            , hi = a.length;
        while (lo < hi) {
            var mid = lo + hi >>> 1;
            if (a[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    function neighbors(objects) {
        var objectsByArc = []
            , neighbors = objects.map(function () {
                return [];
            });

        function line(arcs, i) {
            arcs.forEach(function (a) {
                if (a < 0) a = ~a;
                var o = objectsByArc[a] || (objectsByArc[a] = []);
                if (!o[i]) o.forEach(function (j) {
                    var n, k;
                    k = bisect(n = neighbors[i], j);
                    if (n[k] !== j) n.splice(k, 0, j);
                    k = bisect(n = neighbors[j], i);
                    if (n[k] !== i) n.splice(k, 0, i);
                }), o[i] = i;
            });
        }

        function polygon(arcs, i) {
            arcs.forEach(function (arc) {
                line(arc, i);
            });
        }

        function geometry(o, i) {
            if (o.type === "GeometryCollection") o.geometries.forEach(function (o) {
                geometry(o, i);
            });
            else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
        }
        var geometryType = {
            LineString: line
            , MultiLineString: polygon
            , Polygon: polygon
            , MultiPolygon: function (arcs, i) {
                arcs.forEach(function (arc) {
                    polygon(arc, i);
                });
            }
        };
        objects.forEach(geometry);
        return neighbors;
    }
    return {
        version: "1.1.3"
        , mesh: mesh
        , feature: featureOrCollection
        , neighbors: neighbors
    };
})();
//part 3 - https://s3-us-west-2.amazonaws.com/s.cdpn.io/35376/datamaps.world.min.js//
! function () {
    function a(a) {
        return this.svg = d3.select(a).append("svg").attr("width", a.offsetWidth).attr("height", a.offsetHeight), this.svg
    }

    function b(a, b) {
        var c, d;
        return b && "undefined" == typeof b.scope && (b.scope = "world"), "usa" === b.scope ? c = d3.geo.albersUsa().scale(a.offsetWidth).translate([a.offsetWidth / 2, a.offsetHeight / 2]) : "world" === b.scope && (c = d3.geo[b.projection]().scale((a.offsetWidth + 1) / 2 / Math.PI).translate([a.offsetWidth / 2, a.offsetHeight / 1.8])), d = d3.geo.path().projection(c), {
            path: d
            , projection: c
        }
    }

    function c() {
        d3.select(".datamaps-style-block").empty() && d3.select("head").attr("class", "datamaps-style-block").append("style").html('path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }')
    }

    function d(a) {
        var b = this.options.fills
            , c = this.options.data || {}
            , d = this.options.geographyConfig
            , e = this.svg.select("g.datamaps-subunits");
        e.empty() && (e = this.addLayer("datamaps-subunits"));
        var f = topojson.feature(a, a.objects[this.options.scope]).features;
        d.hideAntarctica && (f = f.filter(function (a) {
            return "ATA" !== a.id
        }));
        var g = e.selectAll("path.datamaps-subunit").data(f);
        g.enter().append("path").attr("d", this.path).attr("class", function (a) {
            return "datamaps-subunit " + a.id
        }).attr("data-info", function (a) {
            return JSON.stringify(c[a.id])
        }).style("fill", function (a) {
            var d;
            return c[a.id] && (d = b[c[a.id].fillKey]), d || b.defaultFill
        }).style("stroke-width", d.borderWidth).style("stroke", d.borderColor)
    }

    function e() {
        var a = this.svg
            , b = this
            , c = this.options.geographyConfig;
        (c.highlightOnHover || c.popupOnHover) && a.selectAll(".datamaps-subunit").on("mouseover", function (d) {
            var e = d3.select(this);
            if (c.highlightOnHover) {
                var f = {
                    fill: e.style("fill")
                    , stroke: e.style("stroke")
                    , "stroke-width": e.style("stroke-width")
                    , "fill-opacity": e.style("fill-opacity")
                };
                e.style("fill", c.highlightFillColor).style("stroke", c.highlightBorderColor).style("stroke-width", c.highlightBorderWidth).style("fill-opacity", c.highlightFillOpacity).attr("data-previousAttributes", JSON.stringify(f));
                var g = e[0][0].parentElement
                    , h = e[0][0];
                e.remove(), g.appendChild(h)
            }
            c.popupOnHover && b.updatePopup(e, d, c, a)
        }).on("mouseout", function () {
            var a = d3.select(this);
            if (c.highlightOnHover) {
                var b = JSON.parse(a.attr("data-previousAttributes"));
                for (var d in b) a.style(d, b[d])
            }
            a.on("mousemove", null), d3.selectAll(".datamaps-hoverover").style("display", "none")
        })
    }

    function f(a, b) {
        if (b = b || {}, this.options.fills) {
            var c = "<dl>";
            b.legendTitle && (c = "<h2>" + b.legendTitle + "</h2>" + c);
            for (var d in this.options.fills) {
                if ("defaultFill" === d) {
                    if (!b.defaultFillName) continue;
                    c += "<dt>" + b.defaultFillName + ": </dt>"
                }
                else c += "<dt>" + d + ": </dt>";
                c += '<dd style="background-color:' + this.options.fills[d] + '">&nbsp;</dd>'
            }
            c += "</dl>", d3.select(this.options.element).append("div").attr("class", "datamaps-legend").html(c)
        }
    }

    function g(a, b, c) {
        var d = this
            , e = this.options.fills
            , f = this.svg;
        if (!b || b && !b.slice) throw "Datamaps Error - bubbles must be an array";
        var g = a.selectAll("circle.datamaps-bubble").data(b, JSON.stringify);
        g.enter().append("svg:circle").attr("class", "datamaps-bubble").attr("cx", function (a) {
            return d.latLngToXY(a.latitude, a.longitude)[0]
        }).attr("cy", function (a) {
            return d.latLngToXY(a.latitude, a.longitude)[1]
        }).attr("r", 0).attr("data-info", function (a) {
            return JSON.stringify(a)
        }).style("stroke", c.borderColor).style("stroke-width", c.borderWidth).style("fill-opacity", c.fillOpacity).style("fill", function (a) {
            var b = e[a.fillKey];
            return b || e.defaultFill
        }).on("mouseover", function (a) {
            var b = d3.select(this);
            if (c.highlightOnHover) {
                var e = {
                    fill: b.style("fill")
                    , stroke: b.style("stroke")
                    , "stroke-width": b.style("stroke-width")
                    , "fill-opacity": b.style("fill-opacity")
                };
                b.style("fill", c.highlightFillColor).style("stroke", c.highlightBorderColor).style("stroke-width", c.highlightBorderWidth).style("fill-opacity", c.highlightFillOpacity).attr("data-previousAttributes", JSON.stringify(e))
            }
            c.popupOnHover && d.updatePopup(b, a, c, f)
        }).on("mouseout", function () {
            var a = d3.select(this);
            if (c.highlightOnHover) {
                var b = JSON.parse(a.attr("data-previousAttributes"));
                for (var d in b) a.style(d, b[d])
            }
            d3.selectAll(".datamaps-hoverover").style("display", "none")
        }).transition().duration(400).attr("r", function (a) {
            return a.radius
        }), g.exit().transition().attr("r", 0).remove()
    }

    function h(a) {
        return Array.prototype.slice.call(arguments, 1).forEach(function (b) {
            if (b)
                for (var c in b) null == a[c] && (a[c] = b[c])
        }), a
    }

    function i(b) {
        if ("undefined" == typeof d3 || "undefined" == typeof topojson) throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");
        return this.options = h(b, j), this.options.geographyConfig = h(b.geographyConfig, j.geographyConfig), this.options.bubbleConfig = h(b.bubbleConfig, j.bubbleConfig), d3.select(this.options.element).select("svg").length > 0 && a.call(this, this.options.element), this.addPlugin("bubbles", g), this.addPlugin("legend", f), this.options.disableDefaultStyles || c(), this.draw()
    }
    var j = {
        scope: "world"
        , setProjection: b
        , projection: "equirectangular"
        , done: function () {}
        , fills: {
            defaultFill: "#ABDDA4"
        }
        , geographyConfig: {
            dataUrl: null
            , hideAntarctica: !0
            , borderWidth: 1
            , borderColor: "#fcfcfc"
            , popupTemplate: function (a) {
                return '<div class="hoverinfo"><strong>' + a.properties.name + "</strong></div>"
            }
            , popupOnHover: !0
            , highlightOnHover: !0
            , highlightFillColor: "#FC8D59"
            , highlightBorderColor: "rgba(250, 15, 160, 0.2)"
            , highlightBorderWidth: 2
        }
        , bubbleConfig: {
            borderWidth: 2
            , borderColor: "#FFFFFF"
            , popupOnHover: !0
            , popupTemplate: function (a, b) {
                return '<div class="hoverinfo"><strong>' + b.name + "</strong></div>"
            }
            , fillOpacity: .75
            , animate: !0
            , highlightOnHover: !0
            , highlightFillColor: "#FC8D59"
            , highlightBorderColor: "rgba(250, 15, 160, 0.2)"
            , highlightBorderWidth: 2
            , highlightFillOpacity: .85
        }
    };
    i.prototype.draw = function () {
        function a(a) {
            d.call(b, a), e.call(b), (b.options.geographyConfig.popupOnHover || b.options.bubbleConfig.popupOnHover) && (hoverover = d3.select(b.options.element).append("div").attr("class", "datamaps-hoverover").style("z-index", 10001).style("position", "absolute")), b.options.done(b)
        }
        var b = this
            , c = b.options
            , f = c.setProjection.apply(b, [c.element, c]);
        return this.path = f.path, this.projection = f.projection, c.geographyConfig.dataUrl ? d3.json(c.geographyConfig.dataUrl, function (b, c) {
            if (b) throw new Error(b);
            a(c)
        }) : a(this[c.scope + "Topo"]), this
    }, i.prototype.worldTopo = {
        type: "Topology"
        , transform: {
            scale: [.036003600360036005, .016927109510951093]
            , translate: [-180, -85.609038]
        }
        , objects: {
            world: {
                type: "GeometryCollection"
                , geometries: [{
                    type: "Polygon"
                    , id: "AFG"
                    , arcs: [[0, 1, 2, 3, 4, 5]]
                    , properties: {
                        name: "Afghanistan"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "AGO"
                    , arcs: [[[6, 7, 8, 9]], [[10, 11, 12]]]
                    , properties: {
                        name: "Angola"
                    }
                }, {
                    type: "Polygon"
                    , id: "ALB"
                    , arcs: [[13, 14, 15, 16, 17]]
                    , properties: {
                        name: "Albania"
                    }
                }, {
                    type: "Polygon"
                    , id: "ARE"
                    , arcs: [[18, 19, 20, 21, 22]]
                    , properties: {
                        name: "United Arab Emirates"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "ARG"
                    , arcs: [[[23, 24]], [[25, 26, 27, 28, 29, 30]]]
                    , properties: {
                        name: "Argentina"
                    }
                }, {
                    type: "Polygon"
                    , id: "ARM"
                    , arcs: [[31, 32, 33, 34, 35]]
                    , properties: {
                        name: "Armenia"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "ATA"
                    , arcs: [[[36]], [[37]], [[38]], [[39]], [[40]], [[41]], [[42]], [[43]]]
                    , properties: {
                        name: "Antarctica"
                    }
                }, {
                    type: "Polygon"
                    , id: "ATF"
                    , arcs: [[44]]
                    , properties: {
                        name: "French Southern and Antarctic Lands"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "AUS"
                    , arcs: [[[45]], [[46]]]
                    , properties: {
                        name: "Australia"
                    }
                }, {
                    type: "Polygon"
                    , id: "AUT"
                    , arcs: [[47, 48, 49, 50, 51, 52, 53]]
                    , properties: {
                        name: "Austria"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "AZE"
                    , arcs: [[[54, -34]], [[55, 56, -32, 57, 58]]]
                    , properties: {
                        name: "Azerbaijan"
                    }
                }, {
                    type: "Polygon"
                    , id: "BDI"
                    , arcs: [[59, 60, 61]]
                    , properties: {
                        name: "Burundi"
                    }
                }, {
                    type: "Polygon"
                    , id: "BEL"
                    , arcs: [[62, 63, 64, 65, 66]]
                    , properties: {
                        name: "Belgium"
                    }
                }, {
                    type: "Polygon"
                    , id: "BEN"
                    , arcs: [[67, 68, 69, 70, 71]]
                    , properties: {
                        name: "Benin"
                    }
                }, {
                    type: "Polygon"
                    , id: "BFA"
                    , arcs: [[72, 73, 74, -69, 75, 76]]
                    , properties: {
                        name: "Burkina Faso"
                    }
                }, {
                    type: "Polygon"
                    , id: "BGD"
                    , arcs: [[77, 78, 79]]
                    , properties: {
                        name: "Bangladesh"
                    }
                }, {
                    type: "Polygon"
                    , id: "BGR"
                    , arcs: [[80, 81, 82, 83, 84, 85]]
                    , properties: {
                        name: "Bulgaria"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "BHS"
                    , arcs: [[[86]], [[87]], [[88]]]
                    , properties: {
                        name: "The Bahamas"
                    }
                }, {
                    type: "Polygon"
                    , id: "BIH"
                    , arcs: [[89, 90, 91]]
                    , properties: {
                        name: "Bosnia and Herzegovina"
                    }
                }, {
                    type: "Polygon"
                    , id: "BLR"
                    , arcs: [[92, 93, 94, 95, 96]]
                    , properties: {
                        name: "Belarus"
                    }
                }, {
                    type: "Polygon"
                    , id: "BLZ"
                    , arcs: [[97, 98, 99]]
                    , properties: {
                        name: "Belize"
                    }
                }, {
                    type: "Polygon"
                    , id: "BOL"
                    , arcs: [[100, 101, 102, 103, -31]]
                    , properties: {
                        name: "Bolivia"
                    }
                }, {
                    type: "Polygon"
                    , id: "BRA"
                    , arcs: [[-27, 104, -103, 105, 106, 107, 108, 109, 110, 111, 112]]
                    , properties: {
                        name: "Brazil"
                    }
                }, {
                    type: "Polygon"
                    , id: "BRN"
                    , arcs: [[113, 114]]
                    , properties: {
                        name: "Brunei"
                    }
                }, {
                    type: "Polygon"
                    , id: "BTN"
                    , arcs: [[115, 116]]
                    , properties: {
                        name: "Bhutan"
                    }
                }, {
                    type: "Polygon"
                    , id: "BWA"
                    , arcs: [[117, 118, 119, 120]]
                    , properties: {
                        name: "Botswana"
                    }
                }, {
                    type: "Polygon"
                    , id: "CAF"
                    , arcs: [[121, 122, 123, 124, 125, 126, 127]]
                    , properties: {
                        name: "Central African Republic"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "CAN"
                    , arcs: [[[128]], [[129]], [[130]], [[131]], [[132]], [[133]], [[134]], [[135]], [[136]], [[137]], [[138, 139, 140, 141]], [[142]], [[143]], [[144]], [[145]], [[146]], [[147]], [[148]], [[149]], [[150]], [[151]], [[152]], [[153]], [[154]], [[155]], [[156]], [[157]], [[158]], [[159]], [[160]]]
                    , properties: {
                        name: "Canada"
                    }
                }, {
                    type: "Polygon"
                    , id: "CHE"
                    , arcs: [[-51, 161, 162, 163]]
                    , properties: {
                        name: "Switzerland"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "CHL"
                    , arcs: [[[164, -24]], [[-30, 165, 166, -101]]]
                    , properties: {
                        name: "Chile"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "CHN"
                    , arcs: [[[167]], [[168, 169, 170, 171, 172, 173, -117, 174, 175, 176, 177, -4, 178, 179, 180, 181, 182, 183]]]
                    , properties: {
                        name: "China"
                    }
                }, {
                    type: "Polygon"
                    , id: "CIV"
                    , arcs: [[184, 185, 186, 187, -73, 188]]
                    , properties: {
                        name: "Ivory Coast"
                    }
                }, {
                    type: "Polygon"
                    , id: "CMR"
                    , arcs: [[189, 190, 191, 192, 193, 194, -128, 195]]
                    , properties: {
                        name: "Cameroon"
                    }
                }, {
                    type: "Polygon"
                    , id: "COD"
                    , arcs: [[196, 197, -60, 198, 199, -10, 200, -12, 201, -126, 202]]
                    , properties: {
                        name: "Democratic Republic of the Congo"
                    }
                }, {
                    type: "Polygon"
                    , id: "COG"
                    , arcs: [[-11, 203, 204, -196, -127, -202]]
                    , properties: {
                        name: "Republic of the Congo"
                    }
                }, {
                    type: "Polygon"
                    , id: "COL"
                    , arcs: [[205, 206, 207, 208, 209, -107, 210]]
                    , properties: {
                        name: "Colombia"
                    }
                }, {
                    type: "Polygon"
                    , id: "CRI"
                    , arcs: [[211, 212, 213, 214]]
                    , properties: {
                        name: "Costa Rica"
                    }
                }, {
                    type: "Polygon"
                    , id: "CUB"
                    , arcs: [[215]]
                    , properties: {
                        name: "Cuba"
                    }
                }, {
                    type: "Polygon"
                    , id: "-99"
                    , arcs: [[216, 217]]
                    , properties: {
                        name: "Northern Cyprus"
                    }
                }, {
                    type: "Polygon"
                    , id: "CYP"
                    , arcs: [[218, -218]]
                    , properties: {
                        name: "Cyprus"
                    }
                }, {
                    type: "Polygon"
                    , id: "CZE"
                    , arcs: [[-53, 219, 220, 221]]
                    , properties: {
                        name: "Czech Republic"
                    }
                }, {
                    type: "Polygon"
                    , id: "DEU"
                    , arcs: [[222, 223, -220, -52, -164, 224, 225, -63, 226, 227, 228]]
                    , properties: {
                        name: "Germany"
                    }
                }, {
                    type: "Polygon"
                    , id: "DJI"
                    , arcs: [[229, 230, 231, 232]]
                    , properties: {
                        name: "Djibouti"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "DNK"
                    , arcs: [[[233]], [[-229, 234]]]
                    , properties: {
                        name: "Denmark"
                    }
                }, {
                    type: "Polygon"
                    , id: "DOM"
                    , arcs: [[235, 236]]
                    , properties: {
                        name: "Dominican Republic"
                    }
                }, {
                    type: "Polygon"
                    , id: "DZA"
                    , arcs: [[237, 238, 239, 240, 241, 242, 243, 244]]
                    , properties: {
                        name: "Algeria"
                    }
                }, {
                    type: "Polygon"
                    , id: "ECU"
                    , arcs: [[245, -206, 246]]
                    , properties: {
                        name: "Ecuador"
                    }
                }, {
                    type: "Polygon"
                    , id: "EGY"
                    , arcs: [[247, 248, 249, 250, 251]]
                    , properties: {
                        name: "Egypt"
                    }
                }, {
                    type: "Polygon"
                    , id: "ERI"
                    , arcs: [[252, 253, 254, -233]]
                    , properties: {
                        name: "Eritrea"
                    }
                }, {
                    type: "Polygon"
                    , id: "ESP"
                    , arcs: [[255, 256, 257, 258]]
                    , properties: {
                        name: "Spain"
                    }
                }, {
                    type: "Polygon"
                    , id: "EST"
                    , arcs: [[259, 260, 261]]
                    , properties: {
                        name: "Estonia"
                    }
                }, {
                    type: "Polygon"
                    , id: "ETH"
                    , arcs: [[-232, 262, 263, 264, 265, 266, 267, -253]]
                    , properties: {
                        name: "Ethiopia"
                    }
                }, {
                    type: "Polygon"
                    , id: "FIN"
                    , arcs: [[268, 269, 270, 271]]
                    , properties: {
                        name: "Finland"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "FJI"
                    , arcs: [[[272]], [[273]], [[274]]]
                    , properties: {
                        name: "Fiji"
                    }
                }, {
                    type: "Polygon"
                    , id: "FLK"
                    , arcs: [[275]]
                    , properties: {
                        name: "Falkland Islands"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "FRA"
                    , arcs: [[[276, 277, 278, 279, -111]], [[280]], [[281, -225, -163, 282, 283, -257, 284, -65]]]
                    , properties: {
                        name: "France"
                    }
                }, {
                    type: "Polygon"
                    , id: "GAB"
                    , arcs: [[285, 286, -190, -205]]
                    , properties: {
                        name: "Gabon"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "GBR"
                    , arcs: [[[287, 288]], [[289]]]
                    , properties: {
                        name: "United Kingdom"
                    }
                }, {
                    type: "Polygon"
                    , id: "GEO"
                    , arcs: [[290, 291, -58, -36, 292]]
                    , properties: {
                        name: "Georgia"
                    }
                }, {
                    type: "Polygon"
                    , id: "GHA"
                    , arcs: [[293, -189, -77, 294]]
                    , properties: {
                        name: "Ghana"
                    }
                }, {
                    type: "Polygon"
                    , id: "GIN"
                    , arcs: [[295, 296, 297, 298, 299, 300, -187]]
                    , properties: {
                        name: "Guinea"
                    }
                }, {
                    type: "Polygon"
                    , id: "GMB"
                    , arcs: [[301]]
                    , properties: {
                        name: "Gambia"
                    }
                }, {
                    type: "Polygon"
                    , id: "GNB"
                    , arcs: [[302, 303, -299]]
                    , properties: {
                        name: "Guinea Bissau"
                    }
                }, {
                    type: "Polygon"
                    , id: "GNQ"
                    , arcs: [[304, -191, -287]]
                    , properties: {
                        name: "Equatorial Guinea"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "GRC"
                    , arcs: [[[305]], [[306, -15, 307, -84, 308]]]
                    , properties: {
                        name: "Greece"
                    }
                }, {
                    type: "Polygon"
                    , id: "GRL"
                    , arcs: [[309]]
                    , properties: {
                        name: "Greenland"
                    }
                }, {
                    type: "Polygon"
                    , id: "GTM"
                    , arcs: [[310, 311, -100, 312, 313, 314]]
                    , properties: {
                        name: "Guatemala"
                    }
                }, {
                    type: "Polygon"
                    , id: "GUY"
                    , arcs: [[315, 316, -109, 317]]
                    , properties: {
                        name: "Guyana"
                    }
                }, {
                    type: "Polygon"
                    , id: "HND"
                    , arcs: [[318, 319, -314, 320, 321]]
                    , properties: {
                        name: "Honduras"
                    }
                }, {
                    type: "Polygon"
                    , id: "HRV"
                    , arcs: [[322, -92, 323, 324, 325, 326]]
                    , properties: {
                        name: "Croatia"
                    }
                }, {
                    type: "Polygon"
                    , id: "HTI"
                    , arcs: [[-237, 327]]
                    , properties: {
                        name: "Haiti"
                    }
                }, {
                    type: "Polygon"
                    , id: "HUN"
                    , arcs: [[-48, 328, 329, 330, 331, -327, 332]]
                    , properties: {
                        name: "Hungary"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "IDN"
                    , arcs: [[[333]], [[334, 335]], [[336]], [[337]], [[338]], [[339]], [[340]], [[341]], [[342, 343]], [[344]], [[345]], [[346, 347]], [[348]]]
                    , properties: {
                        name: "Indonesia"
                    }
                }, {
                    type: "Polygon"
                    , id: "IND"
                    , arcs: [[-177, 349, -175, -116, -174, 350, -80, 351, 352]]
                    , properties: {
                        name: "India"
                    }
                }, {
                    type: "Polygon"
                    , id: "IRL"
                    , arcs: [[353, -288]]
                    , properties: {
                        name: "Ireland"
                    }
                }, {
                    type: "Polygon"
                    , id: "IRN"
                    , arcs: [[-6, 354, 355, 356, 357, -55, -33, -57, 358, 359]]
                    , properties: {
                        name: "Iran"
                    }
                }, {
                    type: "Polygon"
                    , id: "IRQ"
                    , arcs: [[360, 361, 362, 363, 364, -357, 365]]
                    , properties: {
                        name: "Iraq"
                    }
                }, {
                    type: "Polygon"
                    , id: "ISL"
                    , arcs: [[366]]
                    , properties: {
                        name: "Iceland"
                    }
                }, {
                    type: "Polygon"
                    , id: "ISR"
                    , arcs: [[367, 368, -252, 369, 370, 371, 372]]
                    , properties: {
                        name: "Israel"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "ITA"
                    , arcs: [[[373]], [[374]], [[375, 376, -283, -162, -50]]]
                    , properties: {
                        name: "Italy"
                    }
                }, {
                    type: "Polygon"
                    , id: "JAM"
                    , arcs: [[377]]
                    , properties: {
                        name: "Jamaica"
                    }
                }, {
                    type: "Polygon"
                    , id: "JOR"
                    , arcs: [[378, -363, 379, 380, -369, 381, -373]]
                    , properties: {
                        name: "Jordan"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "JPN"
                    , arcs: [[[382]], [[383]], [[384]]]
                    , properties: {
                        name: "Japan"
                    }
                }, {
                    type: "Polygon"
                    , id: "KAZ"
                    , arcs: [[385, 386, 387, 388, -181, 389]]
                    , properties: {
                        name: "Kazakhstan"
                    }
                }, {
                    type: "Polygon"
                    , id: "KEN"
                    , arcs: [[390, 391, 392, 393, -265, 394]]
                    , properties: {
                        name: "Kenya"
                    }
                }, {
                    type: "Polygon"
                    , id: "KGZ"
                    , arcs: [[-390, -180, 395, 396]]
                    , properties: {
                        name: "Kyrgyzstan"
                    }
                }, {
                    type: "Polygon"
                    , id: "KHM"
                    , arcs: [[397, 398, 399, 400]]
                    , properties: {
                        name: "Cambodia"
                    }
                }, {
                    type: "Polygon"
                    , id: "KOR"
                    , arcs: [[401, 402]]
                    , properties: {
                        name: "South Korea"
                    }
                }, {
                    type: "Polygon"
                    , id: "-99"
                    , arcs: [[-18, 403, 404, 405]]
                    , properties: {
                        name: "Kosovo"
                    }
                }, {
                    type: "Polygon"
                    , id: "KWT"
                    , arcs: [[406, 407, -361]]
                    , properties: {
                        name: "Kuwait"
                    }
                }, {
                    type: "Polygon"
                    , id: "LAO"
                    , arcs: [[408, 409, -172, 410, -399]]
                    , properties: {
                        name: "Laos"
                    }
                }, {
                    type: "Polygon"
                    , id: "LBN"
                    , arcs: [[-371, 411, 412]]
                    , properties: {
                        name: "Lebanon"
                    }
                }, {
                    type: "Polygon"
                    , id: "LBR"
                    , arcs: [[413, 414, -296, -186]]
                    , properties: {
                        name: "Liberia"
                    }
                }, {
                    type: "Polygon"
                    , id: "LBY"
                    , arcs: [[415, -245, 416, 417, -250, 418, 419]]
                    , properties: {
                        name: "Libya"
                    }
                }, {
                    type: "Polygon"
                    , id: "LKA"
                    , arcs: [[420]]
                    , properties: {
                        name: "Sri Lanka"
                    }
                }, {
                    type: "Polygon"
                    , id: "LSO"
                    , arcs: [[421]]
                    , properties: {
                        name: "Lesotho"
                    }
                }, {
                    type: "Polygon"
                    , id: "LTU"
                    , arcs: [[422, 423, 424, -93, 425]]
                    , properties: {
                        name: "Lithuania"
                    }
                }, {
                    type: "Polygon"
                    , id: "LUX"
                    , arcs: [[-226, -282, -64]]
                    , properties: {
                        name: "Luxembourg"
                    }
                }, {
                    type: "Polygon"
                    , id: "LVA"
                    , arcs: [[426, -262, 427, -94, -425]]
                    , properties: {
                        name: "Latvia"
                    }
                }, {
                    type: "Polygon"
                    , id: "MAR"
                    , arcs: [[-242, 428, 429]]
                    , properties: {
                        name: "Morocco"
                    }
                }, {
                    type: "Polygon"
                    , id: "MDA"
                    , arcs: [[430, 431]]
                    , properties: {
                        name: "Moldova"
                    }
                }, {
                    type: "Polygon"
                    , id: "MDG"
                    , arcs: [[432]]
                    , properties: {
                        name: "Madagascar"
                    }
                }, {
                    type: "Polygon"
                    , id: "MEX"
                    , arcs: [[433, -98, -312, 434, 435]]
                    , properties: {
                        name: "Mexico"
                    }
                }, {
                    type: "Polygon"
                    , id: "MKD"
                    , arcs: [[-406, 436, -85, -308, -14]]
                    , properties: {
                        name: "Macedonia"
                    }
                }, {
                    type: "Polygon"
                    , id: "MLI"
                    , arcs: [[437, -239, 438, -74, -188, -301, 439]]
                    , properties: {
                        name: "Mali"
                    }
                }, {
                    type: "Polygon"
                    , id: "MMR"
                    , arcs: [[440, -78, -351, -173, -410, 441]]
                    , properties: {
                        name: "Myanmar"
                    }
                }, {
                    type: "Polygon"
                    , id: "MNE"
                    , arcs: [[442, -324, -91, 443, -404, -17]]
                    , properties: {
                        name: "Montenegro"
                    }
                }, {
                    type: "Polygon"
                    , id: "MNG"
                    , arcs: [[444, -183]]
                    , properties: {
                        name: "Mongolia"
                    }
                }, {
                    type: "Polygon"
                    , id: "MOZ"
                    , arcs: [[445, 446, 447, 448, 449, 450, 451, 452]]
                    , properties: {
                        name: "Mozambique"
                    }
                }, {
                    type: "Polygon"
                    , id: "MRT"
                    , arcs: [[453, 454, 455, -240, -438]]
                    , properties: {
                        name: "Mauritania"
                    }
                }, {
                    type: "Polygon"
                    , id: "MWI"
                    , arcs: [[-453, 456, 457]]
                    , properties: {
                        name: "Malawi"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "MYS"
                    , arcs: [[[458, 459]], [[-347, 460, -115, 461]]]
                    , properties: {
                        name: "Malaysia"
                    }
                }, {
                    type: "Polygon"
                    , id: "NAM"
                    , arcs: [[462, -8, 463, -119, 464]]
                    , properties: {
                        name: "Namibia"
                    }
                }, {
                    type: "Polygon"
                    , id: "NCL"
                    , arcs: [[465]]
                    , properties: {
                        name: "New Caledonia"
                    }
                }, {
                    type: "Polygon"
                    , id: "NER"
                    , arcs: [[-75, -439, -238, -416, 466, -194, 467, -70]]
                    , properties: {
                        name: "Niger"
                    }
                }, {
                    type: "Polygon"
                    , id: "NGA"
                    , arcs: [[468, -71, -468, -193]]
                    , properties: {
                        name: "Nigeria"
                    }
                }, {
                    type: "Polygon"
                    , id: "NIC"
                    , arcs: [[469, -322, 470, -213]]
                    , properties: {
                        name: "Nicaragua"
                    }
                }, {
                    type: "Polygon"
                    , id: "NLD"
                    , arcs: [[-227, -67, 471]]
                    , properties: {
                        name: "Netherlands"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "NOR"
                    , arcs: [[[472, -272, 473, 474]], [[475]], [[476]], [[477]]]
                    , properties: {
                        name: "Norway"
                    }
                }, {
                    type: "Polygon"
                    , id: "NPL"
                    , arcs: [[-350, -176]]
                    , properties: {
                        name: "Nepal"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "NZL"
                    , arcs: [[[478]], [[479]]]
                    , properties: {
                        name: "New Zealand"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "OMN"
                    , arcs: [[[480, 481, -22, 482]], [[-20, 483]]]
                    , properties: {
                        name: "Oman"
                    }
                }, {
                    type: "Polygon"
                    , id: "PAK"
                    , arcs: [[-178, -353, 484, -355, -5]]
                    , properties: {
                        name: "Pakistan"
                    }
                }, {
                    type: "Polygon"
                    , id: "PAN"
                    , arcs: [[485, -215, 486, -208]]
                    , properties: {
                        name: "Panama"
                    }
                }, {
                    type: "Polygon"
                    , id: "PER"
                    , arcs: [[-167, 487, -247, -211, -106, -102]]
                    , properties: {
                        name: "Peru"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "PHL"
                    , arcs: [[[488]], [[489]], [[490]], [[491]], [[492]], [[493]], [[494]]]
                    , properties: {
                        name: "Philippines"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "PNG"
                    , arcs: [[[495]], [[496]], [[-343, 497]], [[498]]]
                    , properties: {
                        name: "Papua New Guinea"
                    }
                }, {
                    type: "Polygon"
                    , id: "POL"
                    , arcs: [[-224, 499, 500, -426, -97, 501, 502, -221]]
                    , properties: {
                        name: "Poland"
                    }
                }, {
                    type: "Polygon"
                    , id: "PRI"
                    , arcs: [[503]]
                    , properties: {
                        name: "Puerto Rico"
                    }
                }, {
                    type: "Polygon"
                    , id: "PRK"
                    , arcs: [[504, 505, -403, 506, -169]]
                    , properties: {
                        name: "North Korea"
                    }
                }, {
                    type: "Polygon"
                    , id: "PRT"
                    , arcs: [[507, -259]]
                    , properties: {
                        name: "Portugal"
                    }
                }, {
                    type: "Polygon"
                    , id: "PRY"
                    , arcs: [[-104, -105, -26]]
                    , properties: {
                        name: "Paraguay"
                    }
                }, {
                    type: "Polygon"
                    , id: "QAT"
                    , arcs: [[508, 509]]
                    , properties: {
                        name: "Qatar"
                    }
                }, {
                    type: "Polygon"
                    , id: "ROU"
                    , arcs: [[510, -432, 511, 512, -81, 513, -331]]
                    , properties: {
                        name: "Romania"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "RUS"
                    , arcs: [[[514]], [[-501, 515, -423]], [[516]], [[517]], [[518]], [[519]], [[520]], [[521]], [[522]], [[-505, -184, -445, -182, -389, 523, -59, -292, 524, 525, -95, -428, -261, 526, -269, -473, 527]], [[528]], [[529]], [[530]]]
                    , properties: {
                        name: "Russia"
                    }
                }, {
                    type: "Polygon"
                    , id: "RWA"
                    , arcs: [[531, -61, -198, 532]]
                    , properties: {
                        name: "Rwanda"
                    }
                }, {
                    type: "Polygon"
                    , id: "-99"
                    , arcs: [[-241, -456, 533, -429]]
                    , properties: {
                        name: "Western Sahara"
                    }
                }, {
                    type: "Polygon"
                    , id: "SAU"
                    , arcs: [[534, -380, -362, -408, 535, -510, 536, -23, -482, 537]]
                    , properties: {
                        name: "Saudi Arabia"
                    }
                }, {
                    type: "Polygon"
                    , id: "SDN"
                    , arcs: [[-123, 538, -419, -249, 539, -254, -268, 540, 541, 542]]
                    , properties: {
                        name: "Sudan"
                    }
                }, {
                    type: "Polygon"
                    , id: "SDS"
                    , arcs: [[-266, -394, 543, -203, -125, 544, -542, 545]]
                    , properties: {
                        name: "South Sudan"
                    }
                }, {
                    type: "Polygon"
                    , id: "SEN"
                    , arcs: [[546, -454, -440, -300, -304, 547, 548]]
                    , properties: {
                        name: "Senegal"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "SLB"
                    , arcs: [[[549]], [[550]], [[551]], [[552]], [[553]]]
                    , properties: {
                        name: "Solomon Islands"
                    }
                }, {
                    type: "Polygon"
                    , id: "SLE"
                    , arcs: [[554, -297, -415]]
                    , properties: {
                        name: "Sierra Leone"
                    }
                }, {
                    type: "Polygon"
                    , id: "SLV"
                    , arcs: [[555, -315, -320]]
                    , properties: {
                        name: "El Salvador"
                    }
                }, {
                    type: "Polygon"
                    , id: "-99"
                    , arcs: [[-263, -231, 556, 557]]
                    , properties: {
                        name: "Somaliland"
                    }
                }, {
                    type: "Polygon"
                    , id: "SOM"
                    , arcs: [[-395, -264, -558, 558]]
                    , properties: {
                        name: "Somalia"
                    }
                }, {
                    type: "Polygon"
                    , id: "SRB"
                    , arcs: [[-86, -437, -405, -444, -90, -323, -332, -514]]
                    , properties: {
                        name: "Republic of Serbia"
                    }
                }, {
                    type: "Polygon"
                    , id: "SUR"
                    , arcs: [[559, -279, 560, -277, -110, -317]]
                    , properties: {
                        name: "Suriname"
                    }
                }, {
                    type: "Polygon"
                    , id: "SVK"
                    , arcs: [[-503, 561, -329, -54, -222]]
                    , properties: {
                        name: "Slovakia"
                    }
                }, {
                    type: "Polygon"
                    , id: "SVN"
                    , arcs: [[-49, -333, -326, 562, -376]]
                    , properties: {
                        name: "Slovenia"
                    }
                }, {
                    type: "Polygon"
                    , id: "SWE"
                    , arcs: [[-474, -271, 563]]
                    , properties: {
                        name: "Sweden"
                    }
                }, {
                    type: "Polygon"
                    , id: "SWZ"
                    , arcs: [[564, -449]]
                    , properties: {
                        name: "Swaziland"
                    }
                }, {
                    type: "Polygon"
                    , id: "SYR"
                    , arcs: [[-379, -372, -413, 565, 566, -364]]
                    , properties: {
                        name: "Syria"
                    }
                }, {
                    type: "Polygon"
                    , id: "TCD"
                    , arcs: [[-467, -420, -539, -122, -195]]
                    , properties: {
                        name: "Chad"
                    }
                }, {
                    type: "Polygon"
                    , id: "TGO"
                    , arcs: [[-295, -76, -68, 567]]
                    , properties: {
                        name: "Togo"
                    }
                }, {
                    type: "Polygon"
                    , id: "THA"
                    , arcs: [[568, -460, 569, -442, -409, -398]]
                    , properties: {
                        name: "Thailand"
                    }
                }, {
                    type: "Polygon"
                    , id: "TJK"
                    , arcs: [[-396, -179, -3, 570]]
                    , properties: {
                        name: "Tajikistan"
                    }
                }, {
                    type: "Polygon"
                    , id: "TKM"
                    , arcs: [[-360, 571, -387, 572, -1]]
                    , properties: {
                        name: "Turkmenistan"
                    }
                }, {
                    type: "Polygon"
                    , id: "TLS"
                    , arcs: [[573, -335]]
                    , properties: {
                        name: "East Timor"
                    }
                }, {
                    type: "Polygon"
                    , id: "TTO"
                    , arcs: [[574]]
                    , properties: {
                        name: "Trinidad and Tobago"
                    }
                }, {
                    type: "Polygon"
                    , id: "TUN"
                    , arcs: [[-244, 575, -417]]
                    , properties: {
                        name: "Tunisia"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "TUR"
                    , arcs: [[[-293, -35, -358, -365, -567, 576]], [[-309, -83, 577]]]
                    , properties: {
                        name: "Turkey"
                    }
                }, {
                    type: "Polygon"
                    , id: "TWN"
                    , arcs: [[578]]
                    , properties: {
                        name: "Taiwan"
                    }
                }, {
                    type: "Polygon"
                    , id: "TZA"
                    , arcs: [[-392, 579, -446, -458, 580, -199, -62, -532, 581]]
                    , properties: {
                        name: "United Republic of Tanzania"
                    }
                }, {
                    type: "Polygon"
                    , id: "UGA"
                    , arcs: [[-533, -197, -544, -393, -582]]
                    , properties: {
                        name: "Uganda"
                    }
                }, {
                    type: "Polygon"
                    , id: "UKR"
                    , arcs: [[-526, 582, -512, -431, -511, -330, -562, -502, -96]]
                    , properties: {
                        name: "Ukraine"
                    }
                }, {
                    type: "Polygon"
                    , id: "URY"
                    , arcs: [[-113, 583, -28]]
                    , properties: {
                        name: "Uruguay"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "USA"
                    , arcs: [[[584]], [[585]], [[586]], [[587]], [[588]], [[589, -436, 590, -139]], [[591]], [[592]], [[593]], [[-141, 594]]]
                    , properties: {
                        name: "USA"
                    }
                }, {
                    type: "Polygon"
                    , id: "UZB"
                    , arcs: [[-573, -386, -397, -571, -2]]
                    , properties: {
                        name: "Uzbekistan"
                    }
                }, {
                    type: "Polygon"
                    , id: "VEN"
                    , arcs: [[595, -318, -108, -210]]
                    , properties: {
                        name: "Venezuela"
                    }
                }, {
                    type: "Polygon"
                    , id: "VNM"
                    , arcs: [[596, -400, -411, -171]]
                    , properties: {
                        name: "Vietnam"
                    }
                }, {
                    type: "MultiPolygon"
                    , id: "VUT"
                    , arcs: [[[597]], [[598]]]
                    , properties: {
                        name: "Vanuatu"
                    }
                }, {
                    type: "Polygon"
                    , id: "PSE"
                    , arcs: [[-382, -368]]
                    , properties: {
                        name: "West Bank"
                    }
                }, {
                    type: "Polygon"
                    , id: "YEM"
                    , arcs: [[599, -538, -481]]
                    , properties: {
                        name: "Yemen"
                    }
                }, {
                    type: "Polygon"
                    , id: "ZAF"
                    , arcs: [[-465, -118, 600, -450, -565, -448, 601], [-422]]
                    , properties: {
                        name: "South Africa"
                    }
                }, {
                    type: "Polygon"
                    , id: "ZMB"
                    , arcs: [[-457, -452, 602, -120, -464, -7, -200, -581]]
                    , properties: {
                        name: "Zambia"
                    }
                }, {
                    type: "Polygon"
                    , id: "ZWE"
                    , arcs: [[-601, -121, -603, -451]]
                    , properties: {
                        name: "Zimbabwe"
                    }
                }]
            }
        }
        , arcs: [[[6700, 7164], [28, -23], [21, 8], [6, 27], [22, 9], [15, 18], [6, 47], [23, 11], [5, 21], [13, -15], [8, -2]], [[6847, 7265], [16, -1], [20, -12]], [[6883, 7252], [9, -7], [20, 19], [9, -12], [9, 27], [17, -1], [4, 9], [3, 24], [12, 20], [15, -13], [-3, -18], [9, -3], [-3, -50], [11, -19], [10, 12], [12, 6], [17, 27], [19, -5], [29, 0]], [[7082, 7268], [5, -17]], [[7087, 7251], [-16, -6], [-14, -11], [-32, -7], [-30, -13], [-16, -25], [6, -25], [4, -30], [-14, -25], [1, -22], [-8, -22], [-26, 2], [11, -39], [-18, -15], [-12, -35], [2, -36], [-11, -16], [-10, 5], [-22, -8], [-3, -16], [-20, 0], [-16, -34], [-1, -50], [-36, -24], [-19, 5], [-6, -13], [-16, 7], [-28, -8], [-47, 30]], [[6690, 6820], [25, 53], [-2, 38], [-21, 10], [-2, 38], [-9, 47], [12, 32], [-12, 9], [7, 43], [12, 74]], [[5664, 4412], [3, -18], [-4, -29], [5, -28], [-4, -22], [3, -20], [-58, 1], [-2, -188], [19, -49], [18, -37]], [[5644, 4022], [-51, -24], [-67, 9], [-19, 28], [-113, -3], [-4, -4], [-17, 27], [-18, 2], [-16, -10], [-14, -12]], [[5325, 4035], [-2, 38], [4, 51], [9, 55], [2, 25], [9, 53], [6, 24], [16, 39], [9, 26], [3, 44], [-1, 34], [-9, 21], [-7, 36], [-7, 35], [2, 12], [8, 24], [-8, 57], [-6, 39], [-14, 38], [3, 11]], [[5342, 4697], [11, 8], [8, -1], [10, 7], [82, -1], [7, -44], [8, -35], [6, -19], [11, -31], [18, 5], [9, 8], [16, -8], [4, 14], [7, 35], [17, 2], [2, 10], [14, 1], [-3, -22], [34, 1], [1, -37], [5, -23], [-4, -36], [2, -36], [9, -22], [-1, -70], [7, 5], [12, -1], [17, 8], [13, -3]], [[5330, 4760], [12, 25], [8, 10], [10, -20]], [[5360, 4775], [-10, -12], [-4, -16], [-1, -25], [-7, -7]], [[5338, 4715], [-8, 45]], [[5571, 7530], [-3, -20], [4, -25], [11, -15]], [[5583, 7470], [0, -15], [-9, -9], [-2, -19], [-13, -29]], [[5559, 7398], [-5, 5], [0, 13], [-15, 19], [-3, 29], [2, 40], [4, 18], [-4, 10]], [[5538, 7532], [-2, 18], [12, 29], [1, -11], [8, 6]], [[5557, 7574], [6, -16], [7, -6], [1, -22]], [[6432, 6490], [5, 3], [1, -16], [22, 9], [23, -2], [17, -1], [19, 39], [20, 38], [18, 37]], [[6557, 6597], [5, -20]], [[6562, 6577], [4, -47]], [[6566, 6530], [-14, 0], [-3, -39], [5, -8], [-12, -12], [0, -24], [-8, -24], [-1, -24]], [[6533, 6399], [-6, -12], [-83, 29], [-11, 60], [-1, 14]], [[3140, 1814], [-17, 2], [-30, 0], [0, 132]], [[3093, 1948], [11, -27], [14, -45], [36, -35], [39, -15], [-13, -30], [-26, -2], [-14, 20]], [[3258, 3743], [51, -96], [23, -9], [34, -44], [29, -23], [4, -26], [-28, -90], [28, -16], [32, -9], [22, 10], [25, 45], [4, 52]], [[3482, 3537], [14, 11], [14, -34], [-1, -47], [-23, -33], [-19, -24], [-31, -57], [-37, -81]], [[3399, 3272], [-7, -47], [-7, -61], [0, -58], [-6, -14], [-2, -38]], [[3377, 3054], [-2, -31], [35, -50], [-4, -41], [18, -26], [-2, -29], [-26, -75], [-42, -32], [-55, -12], [-31, 6], [6, -36], [-6, -44], [5, -30], [-16, -20], [-29, -8], [-26, 21], [-11, -15], [4, -59], [18, -18], [16, 19], [8, -31], [-26, -18], [-22, -37], [-4, -59], [-7, -32], [-26, 0], [-22, -31], [-8, -44], [28, -43], [26, -12], [-9, -53], [-33, -33], [-18, -70], [-25, -23], [-12, -28], [9, -61], [19, -34], [-12, 3]], [[3095, 1968], [-26, 9], [-67, 8], [-11, 34], [0, 45], [-18, -4], [-10, 21], [-3, 63], [22, 26], [9, 37], [-4, 30], [15, 51], [10, 78], [-3, 35], [12, 11], [-3, 22], [-13, 12], [10, 25], [-13, 22], [-6, 68], [11, 12], [-5, 72], [7, 61], [7, 52], [17, 22], [-9, 58], [0, 54], [21, 38], [-1, 50], [16, 57], [0, 55], [-7, 11], [-13, 102], [17, 60], [-2, 58], [10, 53], [18, 56], [20, 36], [-9, 24], [6, 19], [-1, 98], [30, 29], [10, 62], [-3, 14]], [[3136, 3714], [23, 54], [36, -15], [16, -42], [11, 47], [32, -2], [4, -13]], [[6249, 7494], [5, -15], [11, -10], [-6, -15], [15, -21], [-8, -18], [12, -16], [13, -10], [0, -41]], [[6291, 7348], [-10, -2]], [[6281, 7346], [-11, 34], [0, 10], [-12, -1], [-9, 16], [-5, -1]], [[6244, 7404], [-11, 17], [-21, 15], [3, 28], [-5, 21]], [[6210, 7485], [39, 9]], [[3345, 329], [-8, -30], [-8, -27], [-59, 8], [-62, -3], [-34, 20], [0, 2], [-16, 17], [63, -2], [60, -6], [20, 24], [15, 21], [29, -24]], [[577, 361], [-53, -8], [-36, 21], [-17, 21], [-1, 3], [-18, 16], [17, 22], [52, -9], [28, -18], [21, -21], [7, -27]], [[3745, 447], [35, -26], [12, -36], [3, -25], [1, -30], [-43, -19], [-45, -15], [-52, -14], [-59, -11], [-65, 3], [-37, 20], [5, 24], [59, 16], [24, 20], [18, 26], [12, 22], [17, 20], [18, 25], [14, 0], [41, 12], [42, -12]], [[1633, 715], [36, -9], [33, 10], [-16, -20], [-26, -15], [-39, 4], [-27, 21], [6, 20], [33, -11]], [[1512, 716], [43, -23], [-17, 3], [-36, 5], [-38, 17], [20, 12], [28, -14]], [[2250, 808], [31, -8], [30, 7], [17, -34], [-22, 5], [-34, -2], [-34, 2], [-38, -4], [-28, 12], [-15, 24], [18, 11], [35, -8], [40, -5]], [[3098, 866], [4, -27], [-5, -23], [-8, -22], [-33, -8], [-31, -12], [-36, 1], [14, 24], [-33, -9], [-31, -8], [-21, 18], [-2, 24], [30, 23], [20, 7], [32, -2], [8, 30], [1, 22], [0, 47], [16, 28], [25, 9], [15, -22], [6, -22], [12, -26], [10, -26], [7, -26]], [[3371, 1268], [-11, -13], [-21, 9], [-23, -6], [-19, -14], [-20, -15], [-14, -17], [-4, -23], [2, -22], [13, -20], [-19, -14], [-26, -4], [-15, -20], [-17, -19], [-17, -25], [-4, -22], [9, -24], [15, -19], [23, -14], [21, -18], [12, -23], [6, -22], [8, -24], [13, -19], [8, -22], [4, -55], [8, -22], [2, -23], [9, -23], [-4, -31], [-15, -24], [-17, -20], [-37, -8], [-12, -21], [-17, -20], [-42, -22], [-37, -9], [-35, -13], [-37, -13], [-22, -24], [-45, -2], [-49, 2], [-44, -4], [-47, 0], [9, -24], [42, -10], [31, -16], [18, -21], [-31, -19], [-48, 6], [-40, -15], [-2, -24], [-1, -23], [33, -20], [6, -22], [35, -22], [59, -9], [50, -16], [40, -19], [50, -18], [70, -10], [68, -16], [47, -17], [52, -20], [27, -28], [13, -22], [34, 21], [46, 17], [48, 19], [58, 15], [49, 16], [69, 1], [68, -8], [56, -14], [18, 26], [39, 17], [70, 1], [55, 13], [52, 13], [58, 8], [62, 10], [43, 15], [-20, 21], [-12, 21], [0, 22], [-54, -2], [-57, -10], [-54, 0], [-8, 22], [4, 44], [12, 13], [40, 14], [47, 14], [34, 17], [33, 18], [25, 23], [38, 10], [38, 8], [19, 5], [43, 2], [41, 8], [34, 12], [34, 14], [30, 14], [39, 18], [24, 20], [26, 17], [9, 24], [-30, 13], [10, 25], [18, 18], [29, 12], [31, 14], [28, 18], [22, 23], [13, 28], [21, 16], [33, -3], [13, -20], [34, -2], [1, 22], [14, 23], [30, -6], [7, -22], [33, -3], [36, 10], [35, 7], [31, -3], [12, -25], [31, 20], [28, 10], [31, 9], [31, 8], [29, 14], [31, 9], [24, 13], [17, 20], [20, -15], [29, 8], [20, -27], [16, -21], [32, 11], [12, 24], [28, 16], [37, -4], [11, -22], [22, 22], [30, 7], [33, 3], [29, -2], [31, -7], [30, -3], [13, -20], [18, -17], [31, 10], [32, 3], [32, 0], [31, 1], [28, 8], [29, 7], [25, 16], [26, 11], [28, 5], [21, 17], [15, 32], [16, 20], [29, -10], [11, -21], [24, -13], [29, 4], [19, -21], [21, -15], [28, 14], [10, 26], [25, 10], [29, 20], [27, 8], [33, 11], [22, 13], [22, 14], [22, 13], [26, -7], [25, 21], [18, 16], [26, -1], [23, 14], [6, 21], [23, 16], [23, 11], [28, 10], [25, 4], [25, -3], [26, -6], [22, -16], [3, -26], [24, -19], [17, -17], [33, -7], [19, -16], [23, -16], [26, -3], [23, 11], [24, 24], [26, -12], [27, -7], [26, -7], [27, -5], [28, 0], [23, -61], [-1, -15], [-4, -27], [-26, -15], [-22, -22], [4, -23], [31, 1], [-4, -23], [-14, -22], [-13, -24], [21, -19], [32, -6], [32, 11], [15, 23], [10, 22], [15, 18], [17, 18], [7, 21], [15, 29], [18, 5], [31, 3], [28, 7], [28, 9], [14, 23], [8, 22], [19, 22], [27, 15], [23, 12], [16, 19], [15, 11], [21, 9], [27, -6], [25, 6], [28, 7], [30, -4], [20, 17], [14, 39], [11, -16], [13, -28], [23, -12], [27, -4], [26, 7], [29, -5], [26, -1], [17, 6], [24, -4], [21, -12], [25, 8], [30, 0], [25, 8], [29, -8], [19, 19], [14, 20], [19, 16], [35, 44], [18, -8], [21, -16], [18, -21], [36, -36], [27, -1], [25, 0], [30, 7], [30, 8], [23, 16], [19, 18], [31, 2], [21, 13], [22, -12], [14, -18], [19, -19], [31, 2], [19, -15], [33, -15], [35, -5], [29, 4], [21, 19], [19, 18], [25, 5], [25, -8], [29, -6], [26, 9], [25, 0], [24, -6], [26, -5], [25, 10], [30, 9], [28, 3], [32, 0], [25, 5], [25, 5], [8, 29], [1, 24], [17, -16], [5, -27], [10, -24], [11, -20], [23, -10], [32, 4], [36, 1], [25, 3], [37, 0], [26, 1], [36, -2], [31, -5], [20, -18], [-5, -22], [18, -18], [30, -13], [31, -15], [35, -11], [38, -9], [28, -9], [32, -2], [18, 20], [24, -16], [21, -19], [25, -13], [34, -6], [32, -7], [13, -23], [32, -14], [21, -21], [31, -9], [32, 1], [30, -4], [33, 1], [34, -4], [31, -8], [28, -14], [29, -12], [20, -17], [-3, -23], [-15, -21], [-13, -27], [-9, -21], [-14, -24], [-36, -9], [-16, -21], [-36, -13], [-13, -23], [-19, -22], [-20, -18], [-11, -25], [-7, -22], [-3, -26], [0, -22], [16, -23], [6, -22], [13, -21], [52, -8], [11, -26], [-50, -9], [-43, -13], [-52, -2], [-24, -34], [-5, -27], [-12, -22], [-14, -22], [37, -20], [14, -24], [24, -22], [33, -20], [39, -19], [42, -18], [64, -19], [14, -29], [80, -12], [5, -5], [21, -17], [77, 15], [63, -19], [48, -14], [-9997, -1], [24, 35], [50, -19], [3, 2], [30, 19], [4, 0], [3, -1], [40, -25], [35, 25], [7, 3], [81, 11], [27, -14], [13, -7], [41, -20], [79, -15], [63, -18], [107, -14], [80, 16], [118, -11], [67, -19], [73, 17], [78, 17], [6, 27], [-110, 3], [-89, 14], [-24, 23], [-74, 12], [5, 27], [10, 24], [10, 22], [-5, 25], [-46, 16], [-22, 21], [-43, 18], [68, -3], [64, 9], [40, -20], [50, 18], [45, 22], [23, 19], [-10, 25], [-36, 16], [-41, 17], [-57, 4], [-50, 8], [-54, 6], [-18, 22], [-36, 18], [-21, 21], [-9, 67], [14, -6], [25, -18], [45, 6], [44, 8], [23, -26], [44, 6], [37, 13], [35, 16], [32, 20], [41, 5], [-1, 22], [-9, 22], [8, 21], [36, 11], [16, -20], [42, 12], [32, 15], [40, 1], [38, 6], [37, 13], [30, 13], [34, 13], [22, -4], [19, -4], [41, 8], [37, -10], [38, 1], [37, 8], [37, -6], [41, -6], [39, 3], [40, -2], [42, -1], [38, 3], [28, 17], [34, 9], [35, -13], [33, 11], [30, 21], [18, -19], [9, -21], [18, -19], [29, 17], [33, -22], [38, -7], [32, -16], [39, 3], [36, 11], [41, -3], [38, -8], [38, -10], [15, 25], [-18, 20], [-14, 21], [-36, 5], [-15, 22], [-6, 22], [-10, 43], [21, -8], [36, -3], [36, 3], [33, -9], [28, -17], [12, -21], [38, -4], [36, 9], [38, 11], [34, 7], [28, -14], [37, 5], [24, 45], [23, -27], [32, -10], [34, 6], [23, -23], [37, -3], [33, -7], [34, -12], [21, 22], [11, 20], [28, -23], [38, 6], [28, -13], [19, -19], [37, 5], [29, 13], [29, 15], [33, 8], [39, 7], [36, 8], [27, 13], [16, 19], [7, 25], [-3, 24], [-9, 24], [-10, 23], [-9, 23], [-7, 21], [-1, 23], [2, 23], [13, 22], [11, 24], [5, 23], [-6, 26], [-3, 23], [14, 27], [15, 17], [18, 22], [19, 19], [22, 17], [11, 25], [15, 17], [18, 15], [26, 3], [18, 19], [19, 11], [23, 7], [20, 15], [16, 19], [22, 7], [16, -15], [-10, -20], [-29, -17]], [[6914, 2185], [18, -19], [26, -7], [1, -11], [-7, -27], [-43, -4], [-1, 31], [4, 25], [2, 12]], [[9038, 2648], [27, -21], [15, 8], [22, 12], [16, -4], [2, -70], [-9, -21], [-3, -47], [-10, 16], [-19, -41], [-6, 3], [-17, 2], [-17, 50], [-4, 39], [-16, 52], [1, 27], [18, -5]], [[8987, 4244], [10, -46], [18, 22], [9, -25], [13, -23], [-3, -26], [6, -51], [5, -29], [7, -7], [7, -51], [-3, -30], [9, -40], [31, -31], [19, -28], [19, -26], [-4, -14], [16, -37], [11, -64], [11, 13], [11, -26], [7, 9], [5, -63], [19, -36], [13, -22], [22, -48], [8, -48], [1, -33], [-2, -37], [13, -50], [-2, -52], [-5, -28], [-7, -52], [1, -34], [-6, -43], [-12, -53], [-21, -29], [-10, -46], [-9, -29], [-8, -51], [-11, -30], [-7, -44], [-4, -41], [2, -18], [-16, -21], [-31, -2], [-26, -24], [-13, -23], [-17, -26], [-23, 27], [-17, 10], [5, 31], [-15, -11], [-25, -43], [-24, 16], [-15, 9], [-16, 4], [-27, 17], [-18, 37], [-5, 45], [-7, 30], [-13, 24], [-27, 7], [9, 28], [-7, 44], [-13, -41], [-25, -11], [14, 33], [5, 34], [10, 29], [-2, 44], [-22, -50], [-18, -21], [-10, -47], [-22, 25], [1, 31], [-18, 43], [-14, 22], [5, 14], [-36, 35], [-19, 2], [-27, 29], [-50, -6], [-36, -21], [-31, -20], [-27, 4], [-29, -30], [-24, -14], [-6, -31], [-10, -24], [-23, -1], [-18, -5], [-24, 10], [-20, -6], [-19, -3], [-17, -31], [-8, 2], [-14, -16], [-13, -19], [-21, 2], [-18, 0], [-30, 38], [-15, 11], [1, 34], [14, 8], [4, 14], [-1, 21], [4, 41], [-3, 35], [-15, 60], [-4, 33], [1, 34], [-11, 38], [-1, 18], [-12, 23], [-4, 47], [-16, 46], [-4, 26], [13, -26], [-10, 55], [14, -17], [8, -23], [0, 30], [-14, 47], [-3, 18], [-6, 18], [3, 34], [6, 15], [4, 29], [-3, 35], [11, 42], [2, -45], [12, 41], [22, 20], [14, 25], [21, 22], [13, 4], [7, -7], [22, 22], [17, 6], [4, 13], [8, 6], [15, -2], [29, 18], [15, 26], [7, 31], [17, 30], [1, 24], [1, 32], [19, 50], [12, -51], [12, 12], [-10, 28], [9, 29], [12, -13], [3, 45], [15, 29], [7, 23], [14, 10], [0, 17], [13, -7], [0, 15], [12, 8], [14, 8], [20, -27], [16, -35], [17, 0], [18, -6], [-6, 33], [13, 47], [13, 15], [-5, 15], [12, 34], [17, 21], [14, -7], [24, 11], [-1, 30], [-20, 19], [15, 9], [18, -15], [15, -24], [23, -15], [8, 6], [17, -18], [17, 17], [10, -5], [7, 11], [12, -29], [-7, -32], [-11, -24], [-9, -2], [3, -23], [-8, -30], [-10, -29], [2, -17], [22, -32], [21, -19], [15, -20], [20, -35], [8, 0], [14, -15], [4, -19], [27, -20], [18, 20], [6, 32], [5, 26], [4, 33], [8, 47], [-4, 28], [2, 17], [-3, 34], [4, 45], [5, 12], [-4, 20], [7, 31], [5, 32], [1, 17], [10, 22], [8, -29], [2, -37], [7, -7], [1, -25], [10, -30], [2, -33], [-1, -22]], [[5471, 7900], [-2, -24], [-16, 0], [6, -13], [-9, -38]], [[5450, 7825], [-6, -10], [-24, -1], [-14, -13], [-23, 4]], [[5383, 7805], [-40, 15], [-6, 21], [-27, -10], [-4, -12], [-16, 9]], [[5290, 7828], [-15, 1], [-12, 11], [4, 15], [-1, 10]], [[5266, 7865], [8, 3], [14, -16], [4, 16], [25, -3], [20, 11], [13, -2], [9, -12], [2, 10], [-4, 38], [10, 8], [10, 27]], [[5377, 7945], [21, -19], [15, 24], [10, 5], [22, -18], [13, 3], [13, -12]], [[5471, 7928], [-3, -7], [3, -21]], [[6281, 7346], [-19, 8], [-14, 27], [-4, 23]], [[6349, 7527], [15, -31], [14, -42], [13, -2], [8, -16], [-23, -5], [-5, -46], [-4, -21], [-11, -13], [1, -30]], [[6357, 7321], [-7, -3], [-17, 31], [10, 30], [-9, 17], [-10, -4], [-33, -44]], [[6249, 7494], [6, 10], [21, -17], [15, -4], [4, 7], [-14, 32], [7, 9]], [[6288, 7531], [8, -2], [19, -36], [13, -4], [4, 15], [17, 23]], [[5814, 4792], [-1, 71], [-7, 27]], [[5806, 4890], [17, -5], [8, 34], [15, -4]], [[5846, 4915], [1, -23], [6, -14], [1, -19], [-7, -12], [-11, -31], [-10, -22], [-12, -2]], [[5171, 8059], [-4, -40]], [[5167, 8019], [-7, -2], [-3, -33]], [[5157, 7984], [-24, 26], [-14, -4], [-20, 28], [-13, 23], [-13, 1], [-4, 21]], [[5069, 8079], [23, 12]], [[5092, 8091], [20, -5], [26, 12], [17, -25], [16, -14]], [[5051, 5420], [-7, 41], [2, 136], [-6, 12], [-1, 29], [-10, 21], [-8, 17], [3, 31]], [[5024, 5707], [10, 7], [6, 26], [13, 5], [6, 18]], [[5059, 5763], [10, 17], [10, 0], [21, -34]], [[5100, 5746], [-1, -19], [6, -35], [-6, -24], [3, -16], [-13, -37], [-9, -18], [-5, -37], [1, -38], [-2, -95]], [[5074, 5427], [-23, -7]], [[4921, 5627], [-19, 15], [-13, -2], [-10, -15], [-12, 13], [-5, 19], [-13, 13]], [[4849, 5670], [-1, 34], [7, 26], [-1, 20], [23, 48], [4, 41], [7, 14], [14, -8], [11, 12], [4, 16], [22, 26], [5, 19], [26, 24], [15, 9], [7, -12], [18, 0]], [[5010, 5939], [-2, -28], [3, -27], [16, -39], [1, -28], [32, -14], [-1, -40]], [[5024, 5707], [-24, 1]], [[5e3, 5708], [-13, 5], [-9, -9], [-12, 4], [-48, -3], [-1, -33], [4, -45]], [[7573, 6360], [0, -43], [-10, 9], [2, -47]], [[7565, 6279], [-8, 30], [-1, 31], [-6, 28], [-11, 34], [-26, 3], [3, -25], [-9, -32], [-12, 12], [-4, -11], [-8, 6], [-11, 5]], [[7472, 6360], [-4, 49], [-10, 45], [5, 35], [-17, 16], [6, 22], [18, 22], [-20, 31], [9, 40], [22, -26], [14, -3], [2, -41], [26, -8], [26, 1], [16, -10], [-13, -50], [-12, -3], [-9, -34], [16, -31], [4, 38], [8, 0], [14, -93]], [[5629, 7671], [8, -25], [11, 5], [21, -9], [41, -4], [13, 16], [33, 13], [20, -21], [17, -6]], [[5793, 7640], [-15, -25], [-10, -42], [9, -34]], [[5777, 7539], [-24, 8], [-28, -18]], [[5725, 7529], [0, -30], [-26, -5], [-19, 20], [-22, -16], [-21, 2]], [[5637, 7500], [-2, 39], [-14, 19]], [[5621, 7558], [5, 8], [-3, 7], [4, 19], [11, 18], [-14, 26], [-2, 21], [7, 14]], [[2846, 6461], [-7, -3], [-7, 34], [-10, 17], [6, 38], [8, -3], [10, -49], [0, -34]], [[2838, 6628], [-30, -10], [-2, 22], [13, 5], [18, -2], [1, -15]], [[2861, 6628], [-5, -42], [-5, 8], [0, 31], [-12, 23], [0, 7], [22, -27]], [[5527, 7708], [10, 0], [-7, -26], [14, -23], [-4, -28], [-7, -2]], [[5533, 7629], [-5, -6], [-9, -13], [-4, -33]], [[5515, 7577], [-25, 23], [-10, 24], [-11, 13], [-12, 22], [-6, 19], [-14, 27], [6, 25], [10, -14], [6, 12], [13, 2], [24, -10], [19, 1], [12, -13]], [[5652, 8242], [27, 0], [30, 22], [6, 34], [23, 19], [-3, 26]], [[5735, 8343], [17, 10], [30, 23]], [[5782, 8376], [29, -15], [4, -15], [15, 7], [27, -14], [3, -27], [-6, -16], [17, -39], [12, -11], [-2, -11], [19, -10], [8, -16], [-11, -13], [-23, 2], [-5, -5], [7, -20], [6, -37]], [[5882, 8136], [-23, -4], [-9, -13], [-2, -30], [-11, 6], [-25, -3], [-7, 14], [-11, -10], [-10, 8], [-22, 1], [-31, 15], [-28, 4], [-22, -1], [-15, -16], [-13, -2]], [[5653, 8105], [-1, 26], [-8, 27], [17, 12], [0, 24], [-8, 22], [-1, 26]], [[2524, 6110], [-1, 8], [4, 3], [5, -7], [10, 36], [5, 0]], [[2547, 6150], [0, -8], [5, -1], [0, -16], [-5, -25], [3, -9], [-3, -21], [2, -6], [-4, -30], [-5, -16], [-5, -1], [-6, -21]], [[2529, 5996], [-8, 0], [2, 67], [1, 47]], [[3136, 3714], [-20, -8], [-11, 82], [-15, 66], [9, 57], [-15, 25], [-4, 43], [-13, 40]], [[3067, 4019], [17, 64], [-12, 49], [7, 20], [-5, 22], [10, 30], [1, 50], [1, 41], [6, 20], [-24, 96]], [[3068, 4411], [21, -5], [14, 1], [6, 18], [25, 24], [14, 22], [37, 10], [-3, -44], [3, -23], [-2, -40], [30, -53], [31, -9], [11, -23], [19, -11], [11, -17], [18, 0], [16, -17], [1, -34], [6, -18], [0, -25], [-8, -1], [11, -69], [53, -2], [-4, -35], [3, -23], [15, -16], [6, -37], [-4, -47], [-8, -26], [3, -33], [-9, -12]], [[3384, 3866], [-1, 18], [-25, 30], [-26, 1], [-49, -17], [-13, -52], [-1, -32], [-11, -71]], [[3482, 3537], [6, 34], [3, 35], [1, 32], [-10, 11], [-11, -9], [-10, 2], [-4, 23], [-2, 54], [-5, 18], [-19, 16], [-11, -12], [-30, 11], [2, 81], [-8, 33]], [[3068, 4411], [-15, -11], [-13, 7], [2, 90], [-23, -35], [-24, 2], [-11, 31], [-18, 4], [5, 25], [-15, 36], [-11, 53], [7, 11], [0, 25], [17, 17], [-3, 32], [7, 20], [2, 28], [32, 40], [22, 11], [4, 9], [25, -2]], [[3058, 4804], [13, 162], [0, 25], [-4, 34], [-12, 22], [0, 42], [15, 10], [6, -6], [1, 23], [-16, 6], [-1, 37], [54, -2], [10, 21], [7, -19], [6, -35], [5, 8]], [[3142, 5132], [15, -32], [22, 4], [5, 18], [21, 14], [11, 10], [4, 25], [19, 17], [-1, 12], [-24, 5], [-3, 37], [1, 40], [-13, 15], [5, 6], [21, -8], [22, -15], [8, 14], [20, 9], [31, 23], [10, 22], [-3, 17]], [[3313, 5365], [14, 2], [7, -13], [-4, -26], [9, -9], [7, -28], [-8, -20], [-4, -51], [7, -30], [2, -27], [17, -28], [14, -3], [3, 12], [8, 3], [13, 10], [9, 16], [15, -5], [7, 2]], [[3429, 5170], [15, -5], [3, 12], [-5, 12], [3, 17], [11, -5], [13, 6], [16, -13]], [[3485, 5194], [12, -12], [9, 16], [6, -3], [4, -16], [13, 4], [11, 22], [8, 44], [17, 54]], [[3565, 5303], [9, 3], [7, -33], [16, -103], [14, -10], [1, -41], [-21, -48], [9, -18], [49, -9], [1, -60], [21, 39], [35, -21], [46, -36], [14, -35], [-5, -32], [33, 18], [54, -32], [41, 3], [41, -49], [36, -66], [21, -17], [24, -3], [10, -18], [9, -76], [5, -35], [-11, -98], [-14, -39], [-39, -82], [-18, -67], [-21, -51], [-7, -1], [-7, -43], [2, -111], [-8, -91], [-3, -39], [-9, -23], [-5, -79], [-28, -77], [-5, -61], [-22, -26], [-7, -35], [-30, 0], [-44, -23], [-19, -26], [-31, -18], [-33, -47], [-23, -58], [-5, -44], [5, -33], [-5, -60], [-6, -28], [-20, -33], [-31, -104], [-24, -47], [-19, -27], [-13, -57], [-18, -33]], [[3517, 3063], [-8, 33], [13, 28], [-16, 40], [-22, 33], [-29, 38], [-10, -2], [-28, 46], [-18, -7]], [[8172, 5325], [11, 22], [23, 32]], [[8206, 5379], [-1, -29], [-2, -37], [-13, 1], [-6, -20], [-12, 31]], [[7546, 6698], [12, -19], [-2, -36], [-23, -2], [-23, 4], [-18, -9], [-25, 22], [-1, 12]], [[7466, 6670], [19, 44], [15, 15], [20, -14], [14, -1], [12, -16]], [[5817, 3752], [-39, -43], [-25, -44], [-10, -40], [-8, -22], [-15, -4], [-5, -29], [-3, -18], [-17, -14], [-23, 3], [-13, 17], [-12, 7], [-14, -14], [-6, -28], [-14, -18], [-13, -26], [-20, -6], [-6, 20], [2, 36], [-16, 56], [-8, 9]], [[5552, 3594], [0, 173], [27, 2], [1, 210], [21, 2], [43, 21], [10, -24], [18, 23], [9, 0], [15, 13]], [[5696, 4014], [5, -4]], [[5701, 4010], [11, -48], [5, -10], [9, -34], [32, -65], [12, -7], [0, -20], [8, -38], [21, -9], [18, -27]], [[5424, 5496], [23, 4], [5, 16], [5, -2], [7, -13], [34, 23], [12, 23], [15, 20], [-3, 21], [8, 6], [27, -4], [26, 27], [20, 65], [14, 24], [18, 10]], [[5635, 5716], [3, -26], [16, -36], [0, -25], [-5, -24], [2, -18], [10, -18]], [[5661, 5569], [21, -25]], [[5682, 5544], [15, -24], [0, -19], [19, -31], [12, -26], [7, -35], [20, -24], [5, -18]], [[5760, 5367], [-9, -7], [-18, 2], [-21, 6], [-10, -5], [-5, -14], [-9, -2], [-10, 12], [-31, -29], [-13, 6], [-4, -5], [-8, -35], [-21, 11], [-20, 6], [-18, 22], [-23, 20], [-15, -19], [-10, -30], [-3, -41]], [[5512, 5265], [-18, 3], [-19, 10], [-16, -32], [-15, -55]], [[5444, 5191], [-3, 18], [-1, 27], [-13, 19], [-10, 30], [-2, 21], [-13, 31], [2, 18], [-3, 25], [2, 45], [7, 11], [14, 60]], [[3231, 7808], [20, -8], [26, 1], [-14, -24], [-10, -4], [-35, 25], [-7, 20], [10, 18], [10, -28]], [[3283, 7958], [-14, -1], [-36, 19], [-26, 28], [10, 5], [37, -15], [28, -25], [1, -11]], [[1569, 7923], [-14, -8], [-46, 27], [-8, 21], [-25, 21], [-5, 16], [-28, 11], [-11, 32], [2, 14], [30, -13], [17, -9], [26, -6], [9, -21], [14, -28], [28, -24], [11, -33]], [[3440, 8052], [-18, -52], [18, 20], [19, -12], [-10, -21], [25, -16], [12, 14], [28, -18], [-8, -43], [19, 10], [4, -32], [8, -36], [-11, -52], [-13, -2], [-18, 11], [6, 48], [-8, 8], [-32, -52], [-17, 2], [20, 28], [-27, 14], [-30, -3], [-54, 2], [-4, 17], [17, 21], [-12, 16], [24, 36], [28, 94], [18, 33], [24, 21], [13, -3], [-6, -16], [-15, -37]], [[1313, 8250], [27, 5], [-8, -67], [24, -48], [-11, 0], [-17, 27], [-10, 27], [-14, 19], [-5, 26], [1, 19], [13, -8]], [[2798, 8730], [-11, -31], [-12, 5], [-8, 17], [2, 4], [10, 18], [12, -1], [7, -12]], [[2725, 8762], [-33, -32], [-19, 1], [-6, 16], [20, 27], [38, 0], [0, -12]], [[2634, 8936], [5, -26], [15, 9], [16, -15], [30, -20], [32, -19], [2, -28], [21, 5], [20, -20], [-25, -18], [-43, 14], [-16, 26], [-27, -31], [-40, -31], [-9, 35], [-38, -6], [24, 30], [4, 46], [9, 54], [20, -5]], [[2892, 9024], [-31, -3], [-7, 29], [12, 34], [26, 8], [21, -17], [1, -25], [-4, -8], [-18, -18]], [[2343, 9140], [-17, -21], [-38, 18], [-22, -6], [-38, 26], [24, 19], [19, 25], [30, -16], [17, -11], [8, -11], [17, -23]], [[3135, 7724], [-18, 33], [0, 81], [-13, 17], [-18, -10], [-10, 16], [-21, -45], [-8, -46], [-10, -27], [-12, -9], [-9, -3], [-3, -15], [-51, 0], [-42, 0], [-12, -11], [-30, -42], [-3, -5], [-9, -23], [-26, 0], [-27, 0], [-12, -10], [4, -11], [2, -18], [0, -6], [-36, -30], [-29, -9], [-32, -31], [-7, 0], [-10, 9], [-3, 8], [1, 6], [6, 21], [13, 33], [8, 35], [-5, 51], [-6, 53], [-29, 28], [3, 11], [-4, 7], [-8, 0], [-5, 9], [-2, 14], [-5, -6], [-7, 2], [1, 6], [-6, 6], [-3, 15], [-21, 19], [-23, 20], [-27, 23], [-26, 21], [-25, -17], [-9, 0], [-34, 15], [-23, -8], [-27, 19], [-28, 9], [-19, 4], [-9, 10], [-5, 32], [-9, 0], [-1, -23], [-57, 0], [-95, 0], [-94, 0], [-84, 0], [-83, 0], [-82, 0], [-85, 0], [-27, 0], [-82, 0], [-79, 0]], [[1588, 7952], [-4, 0], [-54, 58], [-20, 26], [-50, 24], [-15, 53], [3, 36], [-35, 25], [-5, 48], [-34, 43], [0, 30]], [[1374, 8295], [15, 29], [0, 37], [-48, 37], [-28, 68], [-17, 42], [-26, 27], [-19, 24], [-14, 31], [-28, -20], [-27, -33], [-25, 39], [-19, 26], [-27, 16], [-28, 2], [0, 337], [1, 219]], [[1084, 9176], [51, -14], [44, -29], [29, -5], [24, 24], [34, 19], [41, -7], [42, 26], [45, 14], [20, -24], [20, 14], [6, 27], [20, -6], [47, -53], [37, 40], [3, -45], [34, 10], [11, 17], [34, -3], [42, -25], [65, -22], [38, -10], [28, 4], [37, -30], [-39, -29], [50, -13], [75, 7], [24, 11], [29, -36], [31, 30], [-29, 25], [18, 20], [34, 3], [22, 6], [23, -14], [28, -32], [31, 5], [49, -27], [43, 9], [40, -1], [-3, 37], [25, 10], [43, -20], [0, -56], [17, 47], [23, -1], [12, 59], [-30, 36], [-32, 24], [2, 65], [33, 43], [37, -9], [28, -26], [38, -67], [-25, -29], [52, -12], [-1, -60], [38, 46], [33, -38], [-9, -44], [27, -40], [29, 43], [21, 51], [1, 65], [40, -5], [41, -8], [37, -30], [2, -29], [-21, -31], [20, -32], [-4, -29], [-54, -41], [-39, -9], [-29, 18], [-8, -30], [-27, -50], [-8, -26], [-32, -40], [-40, -4], [-22, -25], [-2, -38], [-32, -7], [-34, -48], [-30, -67], [-11, -46], [-1, -69], [40, -10], [13, -55], [13, -45], [39, 12], [51, -26], [28, -22], [20, -28], [35, -17], [29, -24], [46, -4], [30, -6], [-4, -51], [8, -59], [21, -66], [41, -56], [21, 19], [15, 61], [-14, 93], [-20, 31], [45, 28], [31, 41], [16, 41], [-3, 40], [-19, 50], [-33, 44], [32, 62], [-12, 54], [-9, 92], [19, 14], [48, -16], [29, -6], [23, 15], [25, -20], [35, -34], [8, -23], [50, -4], [-1, -50], [9, -74], [25, -10], [21, -35], [40, 33], [26, 65], [19, 28], [21, -53], [36, -75], [31, -71], [-11, -37], [37, -33], [25, -34], [44, -15], [18, -19], [11, -50], [22, -8], [11, -22], [2, -67], [-20, -22], [-20, -21], [-46, -21], [-35, -48], [-47, -10], [-59, 13], [-42, 0], [-29, -4], [-23, -43], [-35, -26], [-40, -78], [-32, -54], [23, 9], [45, 78], [58, 49], [42, 6], [24, -29], [-26, -40], [9, -63], [9, -45], [36, -29], [46, 8], [28, 67], [2, -43], [17, -22], [-34, -38], [-61, -36], [-28, -23], [-31, -43], [-21, 4], [-1, 50], [48, 49], [-44, -2], [-31, -7]], [[1829, 9377], [-14, -27], [61, 17], [39, -29], [31, 30], [26, -20], [23, -58], [14, 25], [-20, 60], [24, 9], [28, -9], [31, -24], [17, -58], [9, -41], [47, -30], [50, -28], [-3, -26], [-46, -4], [18, -23], [-9, -22], [-51, 9], [-48, 16], [-32, -3], [-52, -20], [-70, -9], [-50, -6], [-15, 28], [-38, 16], [-24, -6], [-35, 47], [19, 6], [43, 10], [39, -3], [36, 11], [-54, 13], [-59, -4], [-39, 1], [-15, 22], [64, 23], [-42, -1], [-49, 16], [23, 44], [20, 24], [74, 36], [29, -12]], [[2097, 9395], [-24, -39], [-44, 41], [10, 9], [37, 2], [21, -13]], [[2879, 9376], [3, -16], [-30, 2], [-30, 1], [-30, -8], [-8, 3], [-31, 32], [1, 21], [14, 4], [63, -6], [48, -33]], [[2595, 9379], [22, -36], [26, 47], [70, 24], [48, -61], [-4, -38], [55, 17], [26, 23], [62, -30], [38, -28], [3, -25], [52, 13], [29, -38], [67, -23], [24, -24], [26, -55], [-51, -28], [66, -38], [44, -13], [40, -55], [44, -3], [-9, -42], [-49, -69], [-34, 26], [-44, 57], [-36, -8], [-3, -34], [29, -34], [38, -27], [11, -16], [18, -58], [-9, -43], [-35, 16], [-70, 47], [39, -51], [29, -35], [5, -21], [-76, 24], [-59, 34], [-34, 29], [10, 17], [-42, 30], [-40, 29], [0, -18], [-80, -9], [-23, 20], [18, 44], [52, 1], [57, 7], [-9, 21], [10, 30], [36, 57], [-8, 27], [-11, 20], [-42, 29], [-57, 20], [18, 15], [-29, 36], [-25, 4], [-22, 20], [-14, -18], [-51, -7], [-101, 13], [-59, 17], [-45, 9], [-23, 21], [29, 27], [-39, 0], [-9, 60], [21, 53], [29, 24], [72, 16], [-21, -39]], [[2212, 9420], [33, -12], [50, 7], [7, -17], [-26, -28], [42, -26], [-5, -53], [-45, -23], [-27, 5], [-19, 23], [-69, 45], [0, 19], [57, -7], [-31, 38], [33, 29]], [[2411, 9357], [-30, -45], [-32, 3], [-17, 52], [1, 29], [14, 25], [28, 16], [58, -2], [53, -14], [-42, -53], [-33, -11]], [[1654, 9275], [-73, -29], [-15, 26], [-64, 31], [12, 25], [19, 43], [24, 39], [-27, 36], [94, 10], [39, -13], [71, -3], [27, -17], [30, -25], [-35, -15], [-68, -41], [-34, -42], [0, -25]], [[2399, 9487], [-15, -23], [-40, 5], [-34, 15], [15, 27], [40, 16], [24, -21], [10, -19]], [[2264, 9590], [21, -27], [1, -31], [-13, -44], [-46, -6], [-30, 10], [1, 34], [-45, -4], [-2, 45], [30, -2], [41, 21], [40, -4], [2, 8]], [[1994, 9559], [11, -21], [25, 10], [29, -2], [5, -29], [-17, -28], [-94, -10], [-70, -25], [-43, -2], [-3, 20], [57, 26], [-125, -7], [-39, 10], [38, 58], [26, 17], [78, -20], [50, -35], [48, -5], [-40, 57], [26, 21], [29, -7], [9, -28]], [[2370, 9612], [30, -19], [55, 0], [24, -19], [-6, -22], [32, -14], [17, -14], [38, -2], [40, -5], [44, 13], [57, 5], [45, -5], [30, -22], [6, -24], [-17, -16], [-42, -13], [-35, 8], [-80, -10], [-57, -1], [-45, 8], [-74, 19], [-9, 32], [-4, 29], [-27, 26], [-58, 7], [-32, 19], [10, 24], [58, -4]], [[1772, 9645], [-4, -46], [-21, -20], [-26, -3], [-52, -26], [-44, -9], [-38, 13], [47, 44], [57, 39], [43, -1], [38, 9]], [[2393, 9637], [-13, -2], [-52, 4], [-7, 17], [56, -1], [19, -11], [-3, -7]], [[1939, 9648], [-52, -17], [-41, 19], [23, 19], [40, 6], [39, -10], [-9, -17]], [[1954, 9701], [-34, -11], [-46, 0], [0, 8], [29, 18], [14, -3], [37, -12]], [[2338, 9669], [-41, -12], [-23, 13], [-12, 23], [-2, 24], [36, -2], [16, -4], [33, -21], [-7, -21]], [[2220, 9685], [11, -25], [-45, 7], [-46, 19], [-62, 2], [27, 18], [-34, 14], [-2, 22], [55, -8], [75, -21], [21, -28]], [[2583, 9764], [33, -20], [-38, -17], [-51, -45], [-50, -4], [-57, 8], [-30, 24], [0, 21], [22, 16], [-50, 0], [-31, 19], [-18, 27], [20, 26], [19, 18], [28, 4], [-12, 14], [65, 3], [35, -32], [47, -12], [46, -11], [22, -39]], [[3097, 9967], [74, -4], [60, -8], [51, -16], [-2, -16], [-67, -25], [-68, -12], [-25, -14], [61, 1], [-66, -36], [-45, -17], [-48, -48], [-57, -10], [-18, -12], [-84, -6], [39, -8], [-20, -10], [23, -29], [-26, -21], [-43, -16], [-13, -24], [-39, -17], [4, -14], [48, 3], [0, -15], [-74, -35], [-73, 16], [-81, -9], [-42, 7], [-52, 3], [-4, 29], [52, 13], [-14, 43], [17, 4], [74, -26], [-38, 38], [-45, 11], [23, 23], [49, 14], [8, 21], [-39, 23], [-12, 31], [76, -3], [22, -6], [43, 21], [-62, 7], [-98, -4], [-49, 20], [-23, 24], [-32, 17], [-6, 21], [41, 11], [32, 2], [55, 9], [41, 22], [34, -3], [30, -16], [21, 32], [37, 9], [50, 7], [85, 2], [14, -6], [81, 10], [60, -4], [60, -4]], [[5290, 7828], [-3, -24], [-12, -10], [-20, 7], [-6, -24], [-14, -2], [-5, 10], [-15, -20], [-13, -3], [-12, 13]], [[5190, 7775], [-10, 25], [-13, -9], [0, 27], [21, 33], [-1, 15], [12, -5], [8, 10]], [[5207, 7871], [24, -1], [5, 13], [30, -18]], [[3140, 1814], [-10, -24], [-23, -18], [-14, 2], [-16, 5], [-21, 18], [-29, 8], [-35, 33], [-28, 32], [-38, 66], [23, -12], [39, -40], [36, -21], [15, 27], [9, 41], [25, 24], [20, -7]], [[3095, 1968], [-25, 0], [-13, -14], [-25, -22], [-5, -55], [-11, -1], [-32, 19], [-32, 41], [-34, 34], [-9, 37], [8, 35], [-14, 39], [-4, 101], [12, 57], [30, 45], [-43, 18], [27, 52], [9, 98], [31, -21], [15, 123], [-19, 15], [-9, -73], [-17, 8], [9, 84], [9, 110], [13, 40], [-8, 58], [-2, 66], [11, 2], [17, 96], [20, 94], [11, 88], [-6, 89], [8, 49], [-3, 72], [16, 73], [5, 114], [9, 123], [9, 132], [-2, 96], [-6, 84]], [[3045, 3974], [14, 15], [8, 30]], [[8064, 6161], [-24, -28], [-23, 18], [0, 51], [13, 26], [31, 17], [16, -1], [6, -23], [-12, -26], [-7, -34]], [[8628, 7562], [-18, 35], [-11, -33], [-43, -26], [4, -31], [-24, 2], [-13, 19], [-19, -42], [-30, -32], [-23, -38]], [[8451, 7416], [-39, -17], [-20, -27], [-30, -17], [15, 28], [-6, 23], [22, 40], [-15, 30], [-24, -20], [-32, -41], [-17, -39], [-27, -2], [-14, -28], [15, -40], [22, -10], [1, -26], [22, -17], [31, 42], [25, -23], [18, -2], [4, -31], [-39, -16], [-13, -32], [-27, -30], [-14, -41], [30, -33], [11, -58], [17, -54], [18, -45], [0, -44], [-17, -16], [6, -32], [17, -18], [-5, -48], [-7, -47], [-15, -5], [-21, -64], [-22, -78], [-26, -70], [-38, -55], [-39, -50], [-31, -6], [-17, -27], [-10, 20], [-15, -30], [-39, -29], [-29, -9], [-10, -63], [-15, -3], [-8, 43], [7, 22], [-37, 19], [-13, -9]], [[8001, 6331], [-28, 15], [-14, 24], [5, 34], [-26, 11], [-13, 22], [-24, -31], [-27, -7], [-22, 0], [-15, -14]], [[7837, 6385], [-14, -9], [4, -68], [-15, 2], [-2, 14]], [[7810, 6324], [-1, 24], [-20, -17], [-12, 11], [-21, 22], [8, 49], [-18, 12], [-6, 54], [-30, -10], [4, 70], [26, 50], [1, 48], [-1, 46], [-12, 14], [-9, 35], [-16, -5]], [[7703, 6727], [-30, 9], [9, 25], [-13, 36], [-20, -24], [-23, 14], [-32, -37], [-25, -44], [-23, -8]], [[7466, 6670], [-2, 47], [-17, -13]], [[7447, 6704], [-32, 6], [-32, 14], [-22, 26], [-22, 11], [-9, 29], [-16, 8], [-28, 39], [-22, 18], [-12, -14]], [[7252, 6841], [-38, 41], [-28, 37], [-7, 65], [20, -7], [1, 30], [-12, 30], [3, 48], [-30, 69]], [[7161, 7154], [-45, 24], [-8, 46], [-21, 27]], [[7082, 7268], [-4, 34], [1, 23], [-17, 13], [-9, -6], [-7, 55]], [[7046, 7387], [8, 13], [-4, 14], [26, 28], [20, 12], [29, -8], [11, 38], [35, 7], [10, 23], [44, 32], [4, 13]], [[7229, 7559], [-2, 34], [19, 15], [-25, 103], [55, 24], [14, 13], [20, 106], [55, -20], [15, 27], [2, 59], [23, 6], [21, 39]], [[7426, 7965], [11, 5]], [[7437, 7970], [7, -41], [23, -32], [40, -22], [19, -47], [-10, -70], [10, -25], [33, -10], [37, -8], [33, -37], [18, -7], [12, -54], [17, -35], [30, 1], [58, -13], [36, 8], [28, -9], [41, -36], [34, 0], [12, -18], [32, 32], [45, 20], [42, 2], [32, 21], [20, 32], [20, 20], [-5, 19], [-9, 23], [15, 38], [15, -5], [29, -12], [28, 31], [42, 23], [20, 39], [20, 17], [40, 8], [22, -7], [3, 21], [-25, 41], [-22, 19], [-22, -22], [-27, 10], [-16, -8], [-7, 24], [20, 59], [13, 45]], [[8240, 8005], [34, -23], [39, 38], [-1, 26], [26, 62], [15, 19], [0, 33], [-16, 14], [23, 29], [35, 11], [37, 2], [41, -18], [25, -22], [17, -59], [10, -26], [10, -36], [10, -58], [49, -19], [32, -42], [12, -55], [42, 0], [24, 23], [46, 17], [-15, -53], [-11, -21], [-9, -65], [-19, -58], [-33, 11], [-24, -21], [7, -51], [-4, -69], [-14, -2], [0, -30]], [[4920, 5353], [-12, -1], [-20, 12], [-18, -1], [-33, -10], [-19, -18], [-27, -21], [-6, 1]], [[4785, 5315], [2, 49], [3, 7], [-1, 24], [-12, 24], [-8, 4], [-8, 17], [6, 26], [-3, 28], [1, 18]], [[4765, 5512], [5, 0], [1, 25], [-2, 12], [3, 8], [10, 7], [-7, 47], [-6, 25], [2, 20], [5, 4]], [[4776, 5660], [4, 6], [8, -9], [21, -1], [5, 18], [5, -1], [8, 6], [4, -25], [7, 7], [11, 9]], [[4921, 5627], [7, -84], [-11, -50], [-8, -66], [12, -51], [-1, -23]], [[5363, 5191], [-4, 4], [-16, -8], [-17, 8], [-13, -4]], [[5313, 5191], [-45, 1]], [[5268, 5192], [4, 47], [-11, 39], [-13, 10], [-6, 27], [-7, 8], [1, 16]], [[5236, 5339], [7, 42], [13, 57], [8, 1], [17, 34], [10, 1], [16, -24], [19, 20], [2, 25], [7, 23], [4, 30], [15, 25], [5, 41], [6, 13], [4, 31], [7, 37], [24, 46], [1, 20], [3, 10], [-11, 24]], [[5393, 5795], [1, 19], [8, 3]], [[5402, 5817], [11, -38], [2, -39], [-1, -39], [15, -54], [-15, 1], [-8, -4], [-13, 6], [-6, -28], [16, -35], [13, -10], [3, -24], [9, -41], [-4, -16]], [[5444, 5191], [-2, -31], [-22, 14], [-22, 15], [-35, 2]], [[5856, 5265], [-2, -69], [11, -8], [-9, -21], [-10, -16], [-11, -31], [-6, -27], [-1, -48], [-7, -22], [0, -45]], [[5821, 4978], [-8, -16], [-1, -35], [-4, -5], [-2, -32]], [[5814, 4792], [5, -55], [-2, -30], [5, -35], [16, -33], [15, -74]], [[5853, 4565], [-11, 6], [-37, -10], [-7, -7], [-8, -38], [6, -26], [-5, -70], [-3, -59], [7, -11], [19, -23], [8, 11], [2, -64], [-21, 1], [-11, 32], [-10, 25], [-22, 9], [-6, 31], [-17, -19], [-22, 8], [-10, 27], [-17, 6], [-13, -2], [-2, 19], [-9, 1]], [[5342, 4697], [-4, 18]], [[5360, 4775], [8, -6], [9, 23], [15, -1], [2, -17], [11, -10], [16, 37], [16, 29], [7, 19], [-1, 48], [12, 58], [13, 30], [18, 29], [3, 18], [1, 22], [5, 21], [-2, 33], [4, 52], [5, 37], [8, 32], [2, 36]], [[5760, 5367], [17, -49], [12, -7], [8, 10], [12, -4], [16, 12], [6, -25], [25, -39]], [[5330, 4760], [-22, 62]], [[5308, 4822], [21, 33], [-11, 39], [10, 15], [19, 7], [2, 26], [15, -28], [24, -2], [9, 27], [3, 40], [-3, 46], [-13, 35], [12, 68], [-7, 12], [-21, -5], [-7, 31], [2, 25]], [[2906, 5049], [-12, 14], [-14, 19], [-7, -9], [-24, 8], [-7, 25], [-5, -1], [-28, 34]], [[2809, 5139], [-3, 18], [10, 5], [-1, 29], [6, 22], [14, 4], [12, 37], [10, 31], [-10, 14], [5, 34], [-6, 54], [6, 16], [-4, 50], [-12, 31]], [[2836, 5484], [4, 29], [9, -4], [5, 17], [-6, 35], [3, 9]], [[2851, 5570], [14, -2], [21, 41], [12, 6], [0, 20], [5, 50], [16, 27], [17, 1], [3, 13], [21, -5], [22, 30], [11, 13], [14, 28], [9, -3], [8, -16], [-6, -20]], [[3018, 5753], [-18, -10], [-7, -29], [-10, -17], [-8, -22], [-4, -42], [-8, -35], [15, -4], [3, -27], [6, -13], [3, -24], [-4, -22], [1, -12], [7, -5], [7, -20], [36, 5], [16, -7], [19, -51], [11, 6], [20, -3], [16, 7], [10, -10], [-5, -32], [-6, -20], [-2, -42], [5, -40], [8, -17], [1, -13], [-14, -30], [10, -13], [8, -21], [8, -58]], [[3058, 4804], [-14, 31], [-8, 1], [18, 61], [-21, 27], [-17, -5], [-10, 10], [-15, -15], [-21, 7], [-16, 62], [-13, 15], [-9, 28], [-19, 28], [-7, -5]], [[2695, 5543], [-15, 14], [-6, 12], [4, 10], [-1, 13], [-8, 14], [-11, 12], [-10, 8], [-1, 17], [-8, 10], [2, -17], [-5, -14], [-7, 17], [-9, 5], [-4, 12], [1, 18], [3, 19], [-8, 8], [7, 12]], [[2619, 5713], [4, 7], [18, -15], [7, 7], [9, -5], [4, -12], [8, -4], [7, 13]], [[2676, 5704], [7, -32], [11, -24], [13, -25]], [[2707, 5623], [-11, -6], [0, -23], [6, -9], [-4, -7], [1, -11], [-2, -12], [-2, -12]], [[2715, 6427], [23, -4], [22, 0], [26, -21], [11, -21], [26, 6], [10, -13], [24, -37], [17, -27], [9, 1], [17, -12], [-2, -17], [20, -2], [21, -24], [-3, -14], [-19, -7], [-18, -3], [-19, 4], [-40, -5], [18, 32], [-11, 16], [-18, 4], [-9, 17], [-7, 33], [-16, -2], [-26, 16], [-8, 12], [-36, 10], [-10, 11], [11, 15], [-28, 3], [-20, -31], [-11, -1], [-4, -14], [-14, -7], [-12, 6], [15, 18], [6, 22], [13, 13], [14, 11], [21, 6], [7, 6]], [[5909, 7133], [2, 1], [4, 14], [20, -1], [25, 18], [-19, -25], [2, -11]], [[5943, 7129], [-3, 2], [-5, -5], [-4, 1], [-2, -2], [0, 6], [-2, 4], [-6, 0], [-7, -5], [-5, 3]], [[5943, 7129], [1, -5], [-28, -24], [-14, 8], [-7, 23], [14, 2]], [[5377, 7945], [-16, 25], [-14, 15], [-3, 25], [-5, 17], [21, 13], [10, 15], [20, 11], [7, 11], [7, -6], [13, 6]], [[5417, 8077], [13, -19], [21, -5], [-2, -17], [15, -12], [4, 15], [19, -6], [3, -19], [20, -3], [13, -29]], [[5523, 7982], [-8, 0], [-4, -11], [-7, -3], [-2, -13], [-5, -3], [-1, -5], [-9, -7], [-12, 1], [-4, -13]], [[5275, 8306], [1, -23], [28, -14], [-1, -21], [29, 11], [15, 16], [32, -23], [13, -19]], [[5392, 8233], [6, -30], [-8, -16], [11, -21], [6, -31], [-2, -21], [12, -37]], [[5207, 7871], [3, 42], [14, 40], [-40, 11], [-13, 16]], [[5171, 7980], [2, 26], [-6, 13]], [[5171, 8059], [-5, 62], [17, 0], [7, 22], [6, 54], [-5, 20]], [[5191, 8217], [6, 13], [23, 3], [5, -13], [19, 29], [-6, 22], [-2, 34]], [[5236, 8305], [21, -8], [18, 9]], [[6196, 5808], [7, -19], [-1, -24], [-16, -14], [12, -16]], [[6198, 5735], [-10, -32]], [[6188, 5703], [-7, 11], [-6, -5], [-16, 1], [0, 18], [-2, 17], [9, 27], [10, 26]], [[6176, 5798], [12, -5], [8, 15]], [[5352, 8343], [-17, -48], [-29, 33], [-4, 25], [41, 19], [9, -29]], [[5236, 8305], [-11, 32], [-1, 61], [5, 16], [8, 17], [24, 4], [10, 16], [22, 17], [-1, -30], [-8, -20], [4, -16], [15, -9], [-7, -22], [-8, 6], [-20, -42], [7, -29]], [[3008, 6222], [3, 10], [22, 0], [16, -15], [8, 1], [5, -21], [15, 1], [-1, -17], [12, -2], [14, -22], [-10, -24], [-14, 13], [-12, -3], [-9, 3], [-5, -11], [-11, -3], [-4, 14], [-10, -8], [-11, -41], [-7, 10], [-1, 17]], [[3008, 6124], [0, 16], [-7, 17], [7, 10], [2, 23], [-2, 32]], [[5333, 6444], [-95, -112], [-81, -117], [-39, -26]], [[5118, 6189], [-31, -6], [0, 38], [-13, 10], [-17, 16], [-7, 28], [-94, 129], [-93, 129]], [[4863, 6533], [-105, 143]], [[4758, 6676], [1, 11], [0, 4]], [[4759, 6691], [0, 70], [44, 44], [28, 9], [23, 16], [11, 29], [32, 24], [1, 44], [16, 5], [13, 22], [36, 9], [5, 23], [-7, 13], [-10, 62], [-1, 36], [-11, 38]], [[4939, 7135], [27, 32], [30, 11], [17, 24], [27, 18], [47, 11], [46, 4], [14, -8], [26, 23], [30, 0], [11, -13], [19, 3]], [[5233, 7240], [-5, -30], [4, -56], [-6, -49], [-18, -33], [3, -45], [23, -35], [0, -14], [17, -24], [12, -106]], [[5263, 6848], [9, -52], [1, -28], [-5, -48], [2, -27], [-3, -32], [2, -37], [-11, -25], [17, -43], [1, -25], [10, -33], [13, 11], [22, -28], [12, -37]], [[2769, 4856], [15, 45], [-6, 25], [-11, -27], [-16, 26], [5, 16], [-4, 54], [9, 9], [5, 37], [11, 38], [-2, 24], [15, 13], [19, 23]], [[2906, 5049], [4, -45], [-9, -39], [-30, -62], [-33, -23], [-17, -51], [-6, -40], [-15, -24], [-12, 29], [-11, 7], [-12, -5], [-1, 22], [8, 14], [-3, 24]], [[5969, 6800], [-7, -23], [-6, -45], [-8, -31], [-6, -10], [-10, 19], [-12, 26], [-20, 85], [-3, -5], [12, -63], [17, -59], [21, -92], [10, -32], [9, -34], [25, -65], [-6, -10], [1, -39], [33, -53], [4, -12]], [[6023, 6357], [-110, 0], [-107, 0], [-112, 0]], [[5694, 6357], [0, 218], [0, 210], [-8, 47], [7, 37], [-5, 25], [10, 29]], [[5698, 6923], [37, 0], [27, -15], [28, -18], [13, -9], [21, 19], [11, 17], [25, 5], [20, -8], [7, -29], [7, 19], [22, -14], [22, -3], [13, 15]], [[5951, 6902], [18, -102]], [[6176, 5798], [-10, 20], [-11, 34], [-12, 19], [-8, 21], [-24, 23], [-19, 1], [-7, 12], [-16, -14], [-17, 27], [-8, -44], [-33, 13]], [[6011, 5910], [-3, 23], [12, 87], [3, 39], [9, 18], [20, 10], [14, 34]], [[6066, 6121], [16, -69], [8, -54], [15, -29], [38, -55], [16, -34], [15, -34], [8, -20], [14, -18]], [[4749, 7532], [1, 42], [-11, 25], [39, 43], [34, -11], [37, 1], [30, -10], [23, 3], [45, -2]], [[4947, 7623], [11, -23], [51, -27], [10, 13], [31, -27], [32, 8]], [[5082, 7567], [2, -35], [-26, -39], [-36, -12], [-2, -20], [-18, -33], [-10, -48], [11, -34], [-16, -26], [-6, -39], [-21, -11], [-20, -46], [-35, -1], [-27, 1], [-17, -21], [-11, -22], [-13, 5], [-11, 20], [-8, 34], [-26, 9]], [[4792, 7249], [-2, 20], [10, 22], [4, 16], [-9, 17], [7, 39], [-11, 36], [12, 5], [1, 27], [5, 9], [0, 46], [13, 16], [-8, 30], [-16, 2], [-5, -8], [-16, 0], [-7, 29], [-11, -8], [-10, -15]], [[5675, 8472], [3, 35], [-10, -8], [-18, 21], [-2, 34], [35, 17], [35, 8], [30, -10], [29, 2]], [[5777, 8571], [4, -10], [-20, -34], [8, -55], [-12, -19]], [[5757, 8453], [-22, 0], [-24, 22], [-13, 7], [-23, -10]], [[6188, 5703], [-6, -21], [10, -32], [10, -29], [11, -21], [90, -70], [24, 0]], [[6327, 5530], [-79, -177], [-36, -3], [-25, -41], [-17, -1], [-8, -19]], [[6162, 5289], [-19, 0], [-11, 20], [-26, -25], [-8, -24], [-18, 4], [-6, 7], [-7, -1], [-9, 0], [-35, 50], [-19, 0], [-10, 20], [0, 33], [-14, 10]], [[5980, 5383], [-17, 64], [-12, 14], [-5, 23], [-14, 29], [-17, 4], [9, 34], [15, 2], [4, 18]], [[5943, 5571], [0, 53]], [[5943, 5624], [8, 62], [13, 16], [3, 24], [12, 45], [17, 30], [11, 58], [4, 51]], [[5794, 9138], [-4, -42], [42, -39], [-26, -45], [33, -67], [-19, -51], [25, -43], [-11, -39], [41, -40], [-11, -31], [-25, -34], [-60, -75]], [[5779, 8632], [-50, -5], [-49, -21], [-45, -13], [-16, 32], [-27, 20], [6, 58], [-14, 53], [14, 35], [25, 37], [63, 64], [19, 12], [-3, 25], [-39, 28]], [[5663, 8957], [-9, 23], [-1, 91], [-43, 40], [-37, 29]], [[5573, 9140], [17, 16], [30, -32], [37, 3], [30, -14], [26, 26], [14, 44], [43, 20], [35, -24], [-11, -41]], [[9954, 4033], [9, -17], [-4, -31], [-17, -8], [-16, 7], [-2, 26], [10, 21], [13, -8], [7, 10]], [[9981, 4065], [-17, -13], [-4, 23], [14, 12], [9, 3], [16, 18], [0, -29], [-18, -14]], [[2, 4083], [-2, -4], [0, 29], [6, 3], [-4, -28]], [[3300, 1994], [33, 36], [24, -15], [16, 24], [22, -27], [-8, -21], [-37, -17], [-13, 20], [-23, -26], [-14, 26]], [[3485, 5194], [7, 25], [3, 27]], [[3495, 5246], [4, 26], [-10, 34]], [[3489, 5306], [-3, 41], [15, 51]], [[3501, 5398], [9, -7], [21, -14], [29, -50], [5, -24]], [[5265, 7548], [-9, -46], [-13, 12], [-6, 40], [5, 22], [18, 22], [5, -50]], [[5157, 7984], [6, -6], [8, 2]], [[5190, 7775], [-2, -17], [9, -22], [-10, -18], [7, -46], [15, -8], [-3, -25]], [[5206, 7639], [-25, -34], [-55, 16], [-40, -19], [-4, -35]], [[4947, 7623], [14, 35], [5, 118], [-28, 62], [-21, 30], [-42, 23], [-3, 43], [36, 12], [47, -15], [-9, 67], [26, -25], [65, 46], [8, 48], [24, 12]], [[5308, 4822], [-29, 60], [-18, 49], [-17, 61], [1, 19], [6, 19], [7, 43], [5, 44]], [[5263, 5117], [10, 4], [40, -1], [0, 71]], [[4827, 8240], [-21, 12], [-17, -1], [6, 32], [-6, 32]], [[4789, 8315], [23, 2], [30, -37], [-15, -40]], [[4916, 8521], [-30, -63], [29, 8], [30, -1], [-7, -48], [-25, -53], [29, -4], [2, -6], [25, -69], [19, -10], [17, -67], [8, -24], [33, -11], [-3, -38], [-14, -17], [11, -30], [-25, -31], [-37, 0], [-48, -16], [-13, 12], [-18, -28], [-26, 7], [-19, -23], [-15, 12], [41, 62], [25, 13], [-1, 0], [-43, 9], [-8, 24], [29, 18], [-15, 32], [5, 39], [42, -6], [4, 35], [-19, 36], [0, 1], [-34, 10], [-7, 16], [10, 27], [-9, 16], [-15, -28], [-1, 57], [-14, 30], [10, 61], [21, 48], [23, -4], [33, 4]], [[6154, 7511], [4, 26], [-7, 40], [-16, 22], [-16, 6], [-10, 19]], [[6109, 7624], [4, 6], [23, -10], [41, -9], [38, -28], [5, -11], [17, 9], [25, -13], [9, -24], [17, -13]], [[6210, 7485], [-27, 29], [-29, -3]], [[5029, 5408], [-44, -35], [-15, -20], [-25, -17], [-25, 17]], [[5e3, 5708], [-2, -18], [12, -30], [0, -43], [2, -47], [7, -21], [-6, -54], [2, -29], [8, -37], [6, -21]], [[4765, 5512], [-8, 1], [-5, -24], [-8, 1], [-6, 12], [2, 24], [-11, 36], [-8, -7], [-6, -1]], [[4715, 5554], [-7, -3], [0, 21], [-4, 16], [0, 17], [-6, 25], [-7, 21], [-23, 0], [-6, -11], [-8, -1], [-4, -13], [-4, -17], [-14, -26]], [[4632, 5583], [-13, 35], [-10, 24], [-8, 7], [-6, 12], [-4, 26], [-4, 13], [-8, 10]], [[4579, 5710], [13, 29], [8, -2], [7, 10], [6, 0], [5, 8], [-3, 20], [3, 6], [1, 20]], [[4619, 5801], [13, -1], [20, -14], [6, 1], [3, 7], [15, -5], [4, 4]], [[4680, 5793], [1, -22], [5, 0], [7, 8], [5, -2], [7, -15], [12, -5], [8, 13], [9, 8], [6, 8], [6, -1], [6, -13], [3, -17], [12, -24], [-6, -16], [-1, -19], [6, 6], [3, -7], [-1, -17], [8, -18]], [[4532, 5834], [3, 27], [31, 1], [6, 14], [9, 1], [11, -14], [8, -1], [9, 10], [6, -17], [-12, -13], [-12, 1], [-12, 13], [-10, -14], [-5, -1], [-7, -8], [-25, 1]], [[4579, 5710], [-15, 24], [-11, 4], [-7, 17], [1, 9], [-9, 13], [-2, 12]], [[4536, 5789], [15, 10], [9, -2], [8, 7], [51, -3]], [[5263, 5117], [-5, 9], [10, 66]], [[5658, 7167], [15, -20], [22, 3], [20, -4], [0, -10], [15, 7], [-4, -18], [-40, -5], [1, 10], [-34, 12], [5, 25]], [[5723, 7469], [-17, 2], [-14, 6], [-34, -16], [19, -33], [-14, -10], [-15, 0], [-15, 31], [-5, -13], [6, -36], [14, -27], [-10, -13], [15, -27], [14, -18], [0, -33], [-25, 16], [8, -30], [-18, -7], [11, -52], [-19, -1], [-23, 26], [-10, 47], [-5, 40], [-11, 27], [-14, 34], [-2, 16]], [[5583, 7470], [18, 6], [11, 13], [15, -2], [5, 11], [5, 2]], [[5725, 7529], [13, -16], [-8, -37], [-7, -7]], [[3701, 9939], [93, 35], [97, -2], [36, 21], [98, 6], [222, -7], [174, -47], [-52, -23], [-106, -3], [-150, -5], [14, -11], [99, 7], [83, -21], [54, 18], [23, -21], [-30, -34], [71, 22], [135, 23], [83, -12], [15, -25], [-113, -42], [-16, -14], [-88, -10], [64, -3], [-32, -43], [-23, -38], [1, -66], [33, -38], [-43, -3], [-46, -19], [52, -31], [6, -50], [-30, -6], [36, -50], [-61, -5], [32, -24], [-9, -20], [-39, -10], [-39, 0], [35, -40], [0, -26], [-55, 24], [-14, -15], [37, -15], [37, -36], [10, -48], [-49, -11], [-22, 22], [-34, 34], [10, -40], [-33, -31], [73, -2], [39, -3], [-75, -52], [-75, -46], [-81, -21], [-31, 0], [-29, -23], [-38, -62], [-60, -42], [-19, -2], [-37, -15], [-40, -13], [-24, -37], [0, -41], [-15, -39], [-45, -47], [11, -47], [-12, -48], [-14, -58], [-39, -4], [-41, 49], [-56, 0], [-27, 32], [-18, 58], [-49, 73], [-14, 39], [-3, 53], [-39, 54], [10, 44], [-18, 21], [27, 69], [42, 22], [11, 25], [6, 46], [-32, -21], [-15, -9], [-25, -8], [-34, 19], [-2, 40], [11, 31], [25, 1], [57, -15], [-48, 37], [-24, 20], [-28, -8], [-23, 15], [31, 55], [-17, 22], [-22, 41], [-34, 62], [-35, 23], [0, 25], [-74, 34], [-59, 5], [-74, -3], [-68, -4], [-32, 19], [-49, 37], [73, 19], [56, 3], [-119, 15], [-62, 24], [3, 23], [106, 28], [101, 29], [11, 21], [-75, 22], [24, 23], [97, 41], [40, 7], [-12, 26], [66, 16], [86, 9], [85, 1], [30, -19], [74, 33], [66, -22], [39, -5], [58, -19], [-66, 32], [4, 25]], [[2497, 5869], [-14, 10], [-17, 1], [-13, 12], [-15, 24]], [[2438, 5916], [1, 18], [3, 13], [-4, 12], [13, 48], [36, 0], [1, 20], [-5, 4], [-3, 12], [-10, 14], [-11, 20], [13, 0], [0, 33], [26, 0], [26, 0]], [[2529, 5996], [10, -11], [2, 9], [8, -7]], [[2549, 5987], [-13, -23], [-13, -16], [-2, -12], [2, -11], [-5, -15]], [[2518, 5910], [-7, -4], [2, -7], [-6, -6], [-9, -15], [-1, -9]], [[3340, 5552], [18, -22], [17, -38], [1, -31], [10, -1], [15, -29], [11, -21]], [[3412, 5410], [-4, -53], [-17, -15], [1, -14], [-5, -31], [13, -42], [9, -1], [3, -33], [17, -51]], [[3313, 5365], [-19, 45], [7, 16], [0, 27], [17, 10], [7, 11], [-10, 22], [3, 21], [22, 35]], [[2574, 5825], [-5, 18], [-8, 5]], [[2561, 5848], [2, 24], [-4, 6], [-6, 4], [-12, -7], [-1, 8], [-8, 10], [-6, 12], [-8, 5]], [[2549, 5987], [3, -3], [6, 11], [8, 1], [3, -5], [4, 3], [13, -6], [13, 2], [9, 6], [3, 7], [9, -3], [6, -4], [8, 1], [5, 5], [13, -8], [4, -1], [9, -11], [8, -13], [10, -9], [7, -17]], [[2690, 5943], [-9, 2], [-4, -8], [-10, -8], [-7, 0], [-6, -8], [-6, 3], [-4, 9], [-3, -2], [-4, -14], [-3, 1], [0, -12], [-10, -17], [-5, -7], [-3, -7], [-8, 12], [-6, -16], [-6, 1], [-6, -2], [0, -29], [-4, 0], [-3, -14], [-9, -2]], [[5522, 7770], [7, -23], [9, -17], [-11, -22]], [[5515, 7577], [-3, -10]], [[5512, 7567], [-26, 22], [-16, 21], [-26, 18], [-23, 43], [6, 5], [-13, 25], [-1, 19], [-17, 10], [-9, -26], [-8, 20], [0, 21], [1, 1]], [[5380, 7746], [20, -2], [5, 9], [9, -9], [11, -1], [0, 16], [10, 6], [2, 24], [23, 16]], [[5460, 7805], [8, -7], [21, -26], [23, -11], [10, 9]], [[3008, 6124], [-19, 10], [-13, -5], [-17, 5], [-13, -11], [-15, 18], [3, 19], [25, -8], [21, -5], [10, 13], [-12, 26], [0, 23], [-18, 9], [7, 16], [17, -3], [24, -9]], [[5471, 7900], [14, -15], [10, -6], [24, 7], [2, 12], [11, 2], [14, 9], [3, -4], [13, 8], [6, 13], [9, 4], [30, -18], [6, 6]], [[5613, 7918], [15, -16], [2, -16]], [[5630, 7886], [-17, -12], [-13, -40], [-17, -40], [-22, -11]], [[5561, 7783], [-17, 2], [-22, -15]], [[5460, 7805], [-6, 20], [-4, 0]], [[8352, 4453], [-11, -2], [-37, 42], [26, 11], [14, -18], [10, -17], [-2, -16]], [[8471, 4532], [2, -11], [1, -18]], [[8474, 4503], [-18, -45], [-24, -13], [-3, 8], [2, 20], [12, 36], [28, 23]], [[8274, 4579], [10, -16], [17, 5], [7, -25], [-32, -12], [-19, -8], [-15, 1], [10, 34], [15, 0], [7, 21]], [[8413, 4579], [-4, -32], [-42, -17], [-37, 7], [0, 22], [22, 12], [18, -18], [18, 5], [25, 21]], [[8017, 4657], [53, -6], [6, 25], [51, -29], [10, -38], [42, -11], [34, -35], [-31, -23], [-31, 24], [-25, -1], [-29, 4], [-26, 11], [-32, 22], [-21, 6], [-11, -7], [-51, 24], [-5, 25], [-25, 5], [19, 56], [34, -3], [22, -23], [12, -5], [4, -21]], [[8741, 4690], [-14, -40], [-3, 45], [5, 21], [6, 20], [7, -17], [-1, -29]], [[8534, 4853], [-11, -19], [-19, 10], [-5, 26], [28, 3], [7, -20]], [[8623, 4875], [10, -45], [-23, 24], [-23, 5], [-16, -4], [-19, 2], [6, 33], [35, 2], [30, -17]], [[8916, 4904], [0, -193], [1, -192]], [[8917, 4519], [-25, 48], [-28, 12], [-7, -17], [-35, -1], [12, 48], [17, 16], [-7, 64], [-14, 50], [-53, 50], [-23, 5], [-42, 54], [-8, -28], [-11, -5], [-6, 21], [0, 26], [-21, 29], [29, 21], [20, -1], [-2, 16], [-41, 0], [-11, 35], [-25, 11], [-11, 29], [37, 14], [14, 20], [45, -25], [4, -22], [8, -95], [29, -35], [23, 62], [32, 36], [25, 0], [23, -21], [21, -21], [30, -11]], [[8478, 5141], [-22, -58], [-21, -12], [-27, 12], [-46, -3], [-24, -8], [-4, -45], [24, -53], [15, 27], [52, 20], [-2, -27], [-12, 9], [-12, -35], [-25, -23], [27, -76], [-5, -20], [25, -68], [-1, -39], [-14, -17], [-11, 20], [13, 49], [-27, -23], [-7, 16], [3, 23], [-20, 35], [3, 57], [-19, -18], [2, -69], [1, -84], [-17, -9], [-12, 18], [8, 54], [-4, 57], [-12, 1], [-9, 40], [12, 39], [4, 47], [14, 89], [5, 24], [24, 44], [22, -18], [35, -8], [32, 3], [27, 43], [5, -14]], [[8574, 5124], [-2, -51], [-14, 6], [-4, -36], [11, -32], [-8, -7], [-11, 38], [-8, 75], [6, 47], [9, 22], [2, -32], [16, -5], [3, -25]], [[8045, 5176], [5, -39], [19, -34], [18, 12], [18, -4], [16, 30], [13, 5], [26, -17], [23, 13], [14, 82], [11, 21], [10, 67], [32, 0], [24, -10]], [[8274, 5302], [-16, -53], [20, -56], [-5, -28], [32, -54], [-33, -7], [-10, -40], [2, -54], [-27, -40], [-1, -59], [-10, -91], [-5, 21], [-31, -26], [-11, 36], [-20, 3], [-14, 19], [-33, -21], [-10, 29], [-18, -4], [-23, 7], [-4, 79], [-14, 17], [-13, 50], [-4, 52], [3, 55], [16, 39]], [[7939, 4712], [-31, -1], [-24, 49], [-35, 48], [-12, 36], [-21, 48], [-14, 44], [-21, 83], [-24, 49], [-9, 51], [-10, 46], [-25, 37], [-14, 51], [-21, 33], [-29, 65], [-3, 30], [18, -2], [43, -12], [25, -57], [21, -40], [16, -25], [26, -63], [28, -1], [23, -41], [16, -49], [22, -27], [-12, -49], [16, -20], [10, -2], [5, -41], [10, -33], [20, -5], [14, -37], [-7, -74], [-1, -91]], [[7252, 6841], [-17, -27], [-11, -55], [27, -23], [26, -29], [36, -33], [38, -8], [16, -30], [22, -5], [33, -14], [23, 1], [4, 23], [-4, 38], [2, 25]], [[7703, 6727], [2, -22], [-10, -11], [2, -36], [-19, 10], [-36, -41], [0, -33], [-15, -50], [-1, -29], [-13, -48], [-21, 13], [-1, -61], [-7, -20], [3, -25], [-14, -14]], [[7472, 6360], [-4, -21], [-19, 1], [-34, -13], [2, -44], [-15, -35], [-40, -40], [-31, -69], [-21, -38], [-28, -38], [0, -27], [-13, -15], [-26, -21], [-12, -3], [-9, -45], [6, -77], [1, -49], [-11, -56], [0, -101], [-15, -2], [-12, -46], [8, -19], [-25, -17], [-10, -40], [-11, -17], [-26, 55], [-13, 83], [-11, 60], [-9, 28], [-15, 56], [-7, 74], [-5, 37], [-25, 81], [-12, 115], [-8, 75], [0, 72], [-5, 55], [-41, -35], [-19, 7], [-36, 71], [13, 22], [-8, 23], [-33, 50]], [[6893, 6457], [19, 40], [61, -1], [-6, 51], [-15, 30], [-4, 46], [-18, 26], [31, 62], [32, -4], [29, 61], [18, 60], [27, 60], [-1, 42], [24, 34], [-23, 29], [-9, 40], [-10, 52], [14, 25], [42, -14], [31, 9], [26, 49]], [[4827, 8240], [5, -42], [-21, -53], [-49, -35], [-40, 9], [23, 62], [-15, 60], [38, 46], [21, 28]], [[6690, 6820], [14, -31], [11, -36], [27, -26], [1, -52], [13, -10], [2, -27], [-40, -30], [-10, -69]], [[6708, 6539], [-53, 18], [-30, 13], [-31, 8], [-12, 73], [-13, 10], [-22, -11], [-28, -28], [-34, 20], [-28, 45], [-27, 17], [-18, 56], [-21, 79], [-15, -10], [-17, 20], [-11, -24]], [[6348, 6825], [-15, 32], [0, 31], [-9, 0], [5, 43], [-15, 45], [-34, 32], [-19, 56], [6, 46], [14, 21], [-2, 34], [-18, 18], [-18, 70]], [[6243, 7253], [-15, 48], [5, 18], [-8, 68], [19, 17]], [[6357, 7321], [9, -43], [26, -13], [20, -29], [39, -10], [44, 15], [2, 14]], [[6497, 7255], [25, 12], [19, 33], [19, -1], [12, 11], [20, -6], [31, -30], [22, -6], [31, -53], [21, -2], [3, -49]], [[6332, 6828], [-19, 5], [-20, -56]], [[6293, 6777], [-52, 4], [-78, 119], [-41, 41], [-34, 16]], [[6088, 6957], [-11, 72]], [[6077, 7029], [61, 62], [11, 71], [-3, 43], [16, 15], [14, 37]], [[6176, 7257], [12, 9], [32, -8], [10, -15], [13, 10]], [[6348, 6825], [-16, 3]], [[4597, 8984], [-7, -39], [31, -40], [-36, -45], [-80, -41], [-24, -10], [-36, 8], [-78, 19], [28, 26], [-61, 29], [49, 12], [-1, 17], [-58, 14], [19, 38], [42, 9], [43, -40], [42, 32], [35, -17], [45, 32], [47, -4]], [[5987, 6971], [-10, 8], [-6, -39], [7, -7], [-7, -8], [-1, -15], [13, 8]], [[5983, 6918], [0, -23], [-14, -95]], [[5951, 6902], [8, 19], [-2, 4], [8, 27], [5, 45], [4, 15], [1, 0]], [[5975, 7012], [9, 0], [3, 11], [7, 0]], [[5994, 7023], [1, -24], [-4, -9], [1, 0]], [[5992, 6990], [-5, -19]], [[5431, 7316], [-10, -46], [4, -19], [-6, -30], [-21, 22], [-14, 7], [-39, 30], [4, 30], [32, -6], [28, 7], [22, 5]], [[5255, 7492], [17, -42], [-4, -78], [-13, 4], [-11, -20], [-10, 16], [-2, 71], [-6, 34], [15, -3], [14, 18]], [[5383, 7805], [-3, -29], [7, -25]], [[5387, 7751], [-22, 8], [-23, -20], [1, -30], [-3, -17], [9, -30], [26, -29], [14, -49], [31, -48], [22, 0], [7, -13], [-8, -11], [25, -22], [20, -18], [24, -30], [3, -11], [-5, -22], [-16, 28], [-24, 10], [-12, -39], [20, -21], [-3, -31], [-11, -4], [-15, -50], [-12, -5], [0, 18], [6, 32], [6, 12], [-11, 35], [-8, 29], [-12, 8], [-8, 25], [-18, 11], [-12, 24], [-21, 4], [-21, 26], [-26, 39], [-19, 34], [-8, 58], [-14, 7], [-23, 20], [-12, -8], [-16, -28], [-12, -4]], [[2845, 6150], [19, -5], [14, -15], [5, -16], [-19, -1], [-9, -10], [-15, 10], [-16, 21], [3, 14], [12, 4], [6, -2]], [[5992, 6990], [31, -24], [54, 63]], [[6088, 6957], [-5, -8], [-56, -30], [28, -59], [-9, -10], [-5, -20], [-21, -8], [-7, -21], [-12, -19], [-31, 10]], [[5970, 6792], [-1, 8]], [[5983, 6918], [4, 17], [0, 36]], [[8739, 7075], [4, -20], [-16, -36], [-11, 19], [-15, -14], [-7, -34], [-18, 16], [0, 28], [15, 36], [16, -7], [12, 25], [20, -13]], [[8915, 7252], [-10, -47], [4, -30], [-14, -42], [-35, -27], [-49, -4], [-40, -67], [-19, 22], [-1, 44], [-48, -13], [-33, -27], [-32, -2], [28, -43], [-19, -101], [-18, -24], [-13, 23], [7, 53], [-18, 17], [-11, 41], [26, 18], [15, 37], [28, 30], [20, 41], [55, 17], [30, -12], [29, 105], [19, -28], [40, 59], [16, 23], [18, 72], [-5, 67], [11, 37], [30, 11], [15, -82], [-1, -48], [-25, -59], [0, -61]], [[8997, 7667], [19, -12], [20, 25], [6, -67], [-41, -16], [-25, -59], [-43, 41], [-15, -65], [-31, -1], [-4, 59], [14, 46], [29, 3], [8, 82], [9, 46], [32, -62], [22, -20]], [[6970, 7554], [-15, -10], [-37, -42], [-12, -42], [-11, 0], [-7, 28], [-36, 2], [-5, 48], [-14, 0], [2, 60], [-33, 43], [-48, -5], [-32, -8], [-27, 53], [-22, 22], [-43, 43], [-6, 5], [-71, -35], [1, -218]], [[6554, 7498], [-14, -3], [-20, 46], [-18, 17], [-32, -12], [-12, -20]], [[6458, 7526], [-2, 14], [7, 25], [-5, 21], [-32, 20], [-13, 53], [-15, 15], [-1, 19], [27, -6], [1, 44], [23, 9], [25, -9], [5, 58], [-5, 36], [-28, -2], [-24, 14], [-32, -26], [-26, -12]], [[6363, 7799], [-14, 9], [3, 31], [-18, 39], [-20, -2], [-24, 40], [16, 45], [-8, 12], [22, 65], [29, -34], [3, 43], [58, 64], [43, 2], [61, -41], [33, -24], [30, 25], [44, 1], [35, -30], [8, 17], [39, -2], [7, 28], [-45, 40], [27, 29], [-5, 16], [26, 15], [-20, 41], [13, 20], [104, 21], [13, 14], [70, 22], [25, 24], [50, -12], [9, -61], [29, 14], [35, -20], [-2, -32], [27, 3], [69, 56], [-10, -19], [35, -46], [62, -150], [15, 31], [39, -34], [39, 16], [16, -11], [13, -34], [20, -12], [11, -25], [36, 8], [15, -36]], [[7229, 7559], [-17, 9], [-14, 21], [-42, 6], [-46, 2], [-10, -6], [-39, 24], [-16, -12], [-4, -35], [-46, 21], [-18, -9], [-7, -26]], [[6155, 4958], [-20, -24], [-7, -24], [-10, -4], [-4, -42], [-9, -24], [-5, -39], [-12, -20]], [[6088, 4781], [-40, 59], [-1, 35], [-101, 120], [-5, 6]], [[5941, 5001], [0, 63], [8, 24], [14, 39], [10, 43], [-13, 68], [-3, 30], [-13, 41]], [[5944, 5309], [17, 35], [19, 39]], [[6162, 5289], [-24, -67], [0, -215], [17, -49]], [[7046, 7387], [-53, -9], [-34, 19], [-30, -4], [3, 34], [30, -10], [10, 18]], [[6972, 7435], [21, -6], [36, 43], [-33, 31], [-20, -15], [-21, 22], [24, 39], [-9, 5]], [[7849, 5777], [-7, 72], [18, 49], [36, 11], [26, -8]], [[7922, 5901], [23, -23], [12, 40], [25, -21]], [[7982, 5897], [6, -40], [-3, -71], [-47, -45], [13, -36], [-30, -4], [-24, -24]], [[7897, 5677], [-23, 9], [-11, 30], [-14, 61]], [[8564, 7339], [24, -70], [7, -38], [0, -68], [-10, -33], [-25, -11], [-22, -25], [-25, -5], [-3, 32], [5, 45], [-13, 61], [21, 10], [-19, 51]], [[8504, 7288], [2, 5], [12, -2], [11, 27], [20, 2], [11, 4], [4, 15]], [[5557, 7574], [5, 13]], [[5562, 7587], [7, 4], [4, 20], [5, 3], [4, -8], [5, -4], [3, -10], [5, -2], [5, -11], [4, 0], [-3, -14], [-3, -7], [1, -5]], [[5599, 7553], [-6, -2], [-17, -9], [-1, -12], [-4, 0]], [[6332, 6828], [6, -26], [-3, -13], [9, -45]], [[6344, 6744], [-19, -1], [-7, 28], [-25, 6]], [[7922, 5901], [9, 26], [1, 50], [-22, 52], [-2, 58], [-21, 48], [-21, 4], [-6, -20], [-16, -2], [-8, 10], [-30, -35], [0, 53], [7, 62], [-19, 3], [-2, 36], [-12, 18]], [[7780, 6264], [6, 21], [24, 39]], [[7837, 6385], [17, -47], [12, -54], [34, 0], [11, -52], [-18, -15], [-8, -21], [34, -36], [23, -70], [17, -52], [21, -41], [7, -41], [-5, -59]], [[5975, 7012], [10, 49], [14, 41], [0, 2]], [[5999, 7104], [13, -3], [4, -23], [-15, -22], [-7, -33]], [[4785, 5315], [-7, 0], [-29, 28], [-25, 45], [-24, 32], [-18, 38]], [[4682, 5458], [6, 19], [2, 17], [12, 33], [13, 27]], [[5412, 6408], [-20, -22], [-15, 33], [-44, 25]], [[5263, 6848], [13, 14], [3, 25], [-3, 24], [19, 23], [8, 19], [14, 17], [2, 45]], [[5319, 7015], [32, -20], [12, 5], [23, -10], [37, -26], [13, -53], [25, -11], [39, -25], [30, -29], [13, 15], [13, 27], [-6, 45], [9, 29], [20, 28], [19, 8], [37, -12], [10, -27], [10, 0], [9, -10], [28, -7], [6, -19]], [[5694, 6357], [0, -118], [-32, 0], [0, -25]], [[5662, 6214], [-111, 113], [-111, 113], [-28, -32]], [[7271, 5502], [-4, -62], [-12, -16], [-24, -14], [-13, 47], [-5, 85], [13, 96], [19, -33], [13, -42], [13, -61]], [[5749, 3293], [15, 37], [15, 23], [13, 12], [12, -18], [10, -18], [-9, -29], [-4, -19], [-16, -9], [-5, -19], [-10, -6], [-21, 46]], [[5631, 8267], [-2, 15], [3, 16], [-13, 10], [-29, 10]], [[5590, 8318], [-6, 50]], [[5584, 8368], [32, 18], [47, -4], [27, 6], [4, -12], [15, -4], [26, -29]], [[5652, 8242], [-7, 19], [-14, 6]], [[5584, 8368], [1, 44], [14, 37], [26, 20], [22, -44], [22, 1], [6, 46]], [[5757, 8453], [14, -14], [2, -28], [9, -35]], [[4759, 6691], [-4, 0], [0, -31], [-17, -2], [-9, -14], [-13, 0], [-10, 8], [-23, -6], [-9, -46], [-9, -5], [-13, -74], [-38, -64], [-9, -81], [-12, -27], [-3, -21], [-63, -5]], [[4527, 6323], [1, 27], [11, 17], [9, 30], [-2, 20], [10, 42], [15, 38], [9, 9], [8, 35], [0, 31], [10, 37], [19, 21], [18, 60], [0, 1], [14, 23], [26, 6], [22, 41], [14, 16], [23, 49], [-7, 73], [10, 51], [4, 31], [18, 40], [28, 27], [21, 25], [18, 61], [9, 36], [20, 0], [17, -25], [26, 4], [29, -13], [12, -1]], [[5739, 7906], [6, 9], [19, 6], [20, -19], [12, -2], [12, -16], [-2, -20], [11, -9], [4, -25], [9, -15], [-2, -9], [5, -6], [-7, -4], [-16, 1], [-3, 9], [-6, -5], [2, -11], [-7, -19], [-5, -20], [-7, -6]], [[5784, 7745], [-5, 27], [3, 25], [-1, 26], [-16, 35], [-9, 25], [-9, 17], [-8, 6]], [[6376, 4321], [7, -25], [7, -39], [4, -71], [7, -28], [-2, -28], [-5, -18], [-10, 35], [-5, -18], [5, -43], [-2, -25], [-8, -14], [-1, -50], [-11, -69], [-14, -81], [-17, -112], [-11, -82], [-12, -69], [-23, -14], [-24, -25], [-16, 15], [-22, 21], [-8, 31], [-2, 53], [-10, 47], [-2, 42], [5, 43], [13, 10], [0, 20], [13, 45], [2, 37], [-6, 28], [-5, 38], [-2, 54], [9, 33], [4, 38], [14, 2], [15, 12], [11, 10], [12, 1], [16, 34], [23, 36], [8, 30], [-4, 25], [12, -7], [15, 41], [1, 36], [9, 26], [10, -25]], [[2301, 6586], [-10, -52], [-5, -43], [-2, -79], [-3, -29], [5, -32], [9, -29], [5, -45], [19, -44], [6, -34], [11, -29], [29, -16], [12, -25], [24, 17], [21, 6], [21, 11], [18, 10], [17, 24], [7, 34], [2, 50], [5, 17], [19, 16], [29, 13], [25, -2], [17, 5], [6, -12], [-1, -29], [-15, -35], [-6, -36], [5, -10], [-4, -26], [-7, -46], [-7, 15], [-6, -1]], [[2438, 5916], [-32, 64], [-14, 19], [-23, 16], [-15, -5], [-22, -22], [-14, -6], [-20, 16], [-21, 11], [-26, 27], [-21, 8], [-31, 28], [-23, 28], [-7, 16], [-16, 3], [-28, 19], [-12, 27], [-30, 34], [-14, 37], [-6, 29], [9, 5], [-3, 17], [7, 16], [0, 20], [-10, 27], [-2, 23], [-9, 30], [-25, 59], [-28, 46], [-13, 37], [-24, 24], [-5, 14], [4, 37], [-14, 13], [-17, 29], [-7, 41], [-14, 5], [-17, 31], [-13, 29], [-1, 19], [-15, 44], [-10, 45], [1, 23], [-20, 23], [-10, -2], [-15, 16], [-5, -24], [5, -28], [2, -45], [10, -24], [21, -41], [4, -14], [4, -4], [4, -20], [5, 1], [6, -38], [8, -15], [6, -21], [17, -30], [10, -55], [8, -26], [8, -28], [1, -31], [13, -2], [12, -27], [10, -26], [-1, -11], [-12, -21], [-5, 0], [-7, 36], [-18, 33], [-20, 29], [-14, 15], [1, 43], [-5, 32], [-13, 19], [-19, 26], [-4, -8], [-7, 16], [-17, 14], [-16, 34], [2, 5], [11, -4], [11, 22], [1, 27], [-22, 42], [-16, 17], [-10, 36], [-11, 39], [-12, 47], [-12, 54]], [[1746, 6980], [32, 4], [35, 7], [-2, -12], [41, -29], [64, -41], [55, 0], [22, 0], [0, 24], [48, 0], [10, -20], [15, -19], [16, -26], [9, -31], [7, -32], [15, -18], [23, -18], [17, 47], [23, 1], [19, -24], [14, -40], [10, -35], [16, -34], [6, -41], [8, -28], [22, -18], [20, -13], [10, 2]], [[5599, 7553], [9, 4], [13, 1]], [[4661, 5921], [10, 11], [4, 35], [9, 1], [20, -16], [15, 11], [11, -4], [4, 13], [112, 1], [6, 42], [-5, 7], [-13, 255], [-14, 255], [43, 1]], [[5118, 6189], [0, -136], [-15, -39], [-2, -37], [-25, -9], [-38, -5], [-10, -21], [-18, -3]], [[4680, 5793], [1, 18], [-2, 23], [-11, 16], [-5, 34], [-2, 37]], [[7737, 5644], [-3, 44], [9, 45], [-10, 35], [3, 65], [-12, 30], [-9, 71], [-5, 75], [-12, 49], [-18, -30], [-32, -42], [-15, 5], [-17, 14], [9, 73], [-6, 56], [-21, 68], [3, 21], [-16, 7], [-20, 49]], [[7780, 6264], [-16, -14], [-16, -26], [-20, -2], [-12, -64], [-12, -11], [14, -52], [17, -43], [12, -39], [-11, -51], [-9, -11], [6, -30], [19, -47], [3, -33], [0, -27], [11, -54], [-16, -55], [-13, -61]], [[5538, 7532], [-6, 4], [-8, 19], [-12, 12]], [[5533, 7629], [8, -10], [4, -9], [9, -6], [10, -12], [-2, -5]], [[7437, 7970], [29, 10], [53, 51], [42, 28], [24, -18], [29, -1], [19, -28], [28, -2], [40, -15], [27, 41], [-11, 35], [28, 61], [31, -24], [26, -7], [32, -15], [6, -44], [39, -25], [26, 11], [36, 7], [27, -7], [28, -29], [16, -30], [26, 1], [35, -10], [26, 15], [36, 9], [41, 42], [17, -6], [14, -20], [33, 5]], [[5959, 4377], [21, 5], [34, -17], [7, 8], [19, 1], [10, 18], [17, -1], [30, 23], [22, 34]], [[6119, 4448], [5, -26], [-1, -59], [3, -52], [1, -92], [5, -29], [-8, -43], [-11, -41], [-18, -36], [-25, -23], [-31, -28], [-32, -64], [-10, -11], [-20, -42], [-11, -13], [-3, -42], [14, -45], [5, -35], [0, -17], [5, 3], [-1, -58], [-4, -28], [6, -10], [-4, -25], [-11, -21], [-23, -20], [-34, -32], [-12, -21], [3, -25], [7, -4], [-3, -31]], [[5911, 3478], [-21, 0]], [[5890, 3478], [-2, 26], [-4, 27]], [[5884, 3531], [-3, 21], [5, 66], [-7, 42], [-13, 83]], [[5866, 3743], [29, 67], [7, 43], [5, 5], [3, 35], [-5, 17], [1, 44], [6, 41], [0, 75], [-15, 19], [-13, 4], [-6, 15], [-13, 12], [-23, -1], [-2, 22]], [[5840, 4141], [-2, 42], [84, 49]], [[5922, 4232], [16, -28], [8, 5], [11, -15], [1, -23], [-6, -28], [2, -42], [19, -36], [8, 41], [12, 12], [-2, 76], [-12, 43], [-10, 19], [-10, -1], [-7, 77], [7, 45]], [[4661, 5921], [-18, 41], [-17, 43], [-18, 16], [-13, 17], [-16, -1], [-13, -12], [-14, 5], [-10, -19]], [[4542, 6011], [-2, 32], [8, 29], [3, 55], [-3, 59], [-3, 29], [2, 30], [-7, 28], [-14, 25]], [[4526, 6298], [6, 20], [108, -1], [-5, 86], [7, 30], [26, 5], [-1, 152], [91, -4], [0, 90]], [[5922, 4232], [-15, 15], [9, 55], [9, 21], [-6, 49], [6, 48], [5, 16], [-7, 50], [-14, 26]], [[5909, 4512], [28, -11], [5, -16], [10, -28], [7, -80]], [[7836, 5425], [7, -5], [16, -36], [12, -40], [2, -39], [-3, -27], [2, -21], [2, -35], [10, -16], [11, -52], [-1, -20], [-19, -4], [-27, 44], [-32, 47], [-4, 30], [-16, 39], [-4, 49], [-10, 32], [4, 43], [-7, 25]], [[7779, 5439], [5, 11], [23, -26], [2, -30], [18, 7], [9, 24]], [[8045, 5176], [21, -20], [21, 11], [6, 50], [12, 11], [33, 13], [20, 47], [14, 37]], [[8206, 5379], [22, 41], [14, 47], [11, 0], [14, -30], [1, -26], [19, -16], [23, -18], [-2, -23], [-19, -3], [5, -29], [-20, -20]], [[5453, 3369], [-20, 45], [-11, 43], [-6, 58], [-7, 42], [-9, 91], [-1, 71], [-3, 32], [-11, 25], [-15, 48], [-14, 71], [-6, 37], [-23, 58], [-2, 45]], [[5644, 4022], [23, 14], [18, -4], [11, -13], [0, -5]], [[5552, 3594], [0, -218], [-25, -30], [-15, -4], [-17, 11], [-13, 4], [-4, 25], [-11, 17], [-14, -30]], [[9604, 3812], [23, -36], [14, -28], [-10, -14], [-16, 16], [-19, 27], [-18, 31], [-19, 42], [-4, 20], [12, -1], [16, -20], [12, -20], [9, -17]], [[5412, 6408], [7, -92], [10, -15], [1, -19], [11, -20], [-6, -25], [-11, -120], [-1, -77], [-35, -56], [-12, -78], [11, -22], [0, -38], [18, -1], [-3, -28]], [[5393, 5795], [-5, -1], [-19, 64], [-6, 3], [-22, -33], [-21, 17], [-15, 3], [-8, -8], [-17, 2], [-16, -25], [-14, -2], [-34, 31], [-13, -15], [-14, 1], [-10, 23], [-28, 22], [-30, -7], [-7, -13], [-4, -34], [-8, -24], [-2, -53]], [[5236, 5339], [-29, -21], [-11, 3], [-10, -13], [-23, 1], [-15, 37], [-9, 43], [-19, 39], [-21, -1], [-25, 0]], [[2619, 5713], [-10, 18], [-13, 24], [-6, 20], [-12, 19], [-13, 26], [3, 9], [4, -9], [2, 5]], [[2690, 5943], [-2, -5], [-2, -13], [3, -22], [-6, -20], [-3, -24], [-1, -26], [1, -15], [1, -27], [-4, -6], [-3, -25], [2, -15], [-6, -16], [2, -16], [4, -9]], [[5092, 8091], [14, 16], [24, 87], [38, 25], [23, -2]], [[5863, 9167], [-47, -24], [-22, -5]], [[5573, 9140], [-17, -2], [-4, -39], [-53, 9], [-7, -33], [-27, 1], [-18, -42], [-28, -66], [-43, -83], [10, -20], [-10, -24], [-27, 1], [-18, -55], [2, -79], [17, -29], [-9, -70], [-23, -40], [-12, -34]], [[5306, 8535], [-19, 36], [-55, -69], [-37, -13], [-38, 30], [-10, 63], [-9, 137], [26, 38], [73, 49], [55, 61], [51, 82], [66, 115], [47, 44], [76, 74], [61, 26], [46, -3], [42, 49], [51, -3], [50, 12], [87, -43], [-36, -16], [30, -37]], [[5686, 9657], [-62, -24], [-49, 13], [19, 16], [-16, 19], [57, 11], [11, -22], [40, -13]], [[5506, 9766], [92, -44], [-70, -23], [-15, -44], [-25, -11], [-13, -49], [-34, -2], [-59, 36], [25, 21], [-42, 17], [-54, 50], [-21, 46], [75, 21], [16, -20], [39, 0], [11, 21], [40, 2], [35, -21]], [[5706, 9808], [55, -21], [-41, -32], [-81, -7], [-82, 10], [-5, 16], [-40, 1], [-30, 27], [86, 17], [40, -14], [28, 17], [70, -14]], [[9805, 2640], [6, -24], [20, 24], [8, -25], [0, -25], [-10, -27], [-18, -44], [-14, -24], [10, -28], [-22, -1], [-23, -22], [-8, -39], [-16, -60], [-21, -26], [-14, -17], [-26, 1], [-18, 20], [-30, 4], [-5, 22], [15, 43], [35, 59], [18, 11], [20, 22], [24, 31], [16, 31], [13, 44], [10, 15], [5, 33], [19, 27], [6, -25]], [[9849, 2922], [20, -63], [1, 41], [13, -16], [4, -45], [22, -19], [19, -5], [16, 22], [14, -6], [-7, -53], [-8, -34], [-22, 1], [-7, -18], [3, -25], [-4, -11], [-11, -32], [-14, -41], [-21, -23], [-5, 15], [-12, 9], [16, 48], [-9, 33], [-30, 23], [1, 22], [20, 20], [5, 46], [-1, 38], [-12, 40], [1, 10], [-13, 25], [-22, 52], [-12, 42], [11, 4], [15, -33], [21, -15], [8, -52]], [[6475, 6041], [-9, 41], [-22, 98]], [[6444, 6180], [83, 59], [19, 118], [-13, 42]], [[6566, 6530], [12, -40], [16, -22], [20, -8], [17, -10], [12, -34], [8, -20], [10, -7], [0, -13], [-10, -36], [-5, -16], [-12, -19], [-10, -41], [-13, 3], [-5, -14], [-5, -30], [4, -39], [-3, -7], [-13, 0], [-17, -22], [-3, -29], [-6, -12], [-18, 0], [-10, -15], [0, -24], [-14, -16], [-15, 5], [-19, -19], [-12, -4]], [[6557, 6597], [8, 20], [3, -5], [-2, -25], [-4, -10]], [[6893, 6457], [-20, 15], [-9, 43], [-21, 45], [-51, -12], [-45, -1], [-39, -8]], [[2836, 5484], [-9, 17], [-6, 32], [7, 16], [-7, 4], [-5, 20], [-14, 16], [-12, -4], [-6, -20], [-11, -15], [-6, -2], [-3, -13], [13, -32], [-7, -7], [-4, -9], [-13, -3], [-5, 35], [-4, -10], [-9, 4], [-5, 24], [-12, 3], [-7, 7], [-12, 0], [-1, -13], [-3, 9]], [[2707, 5623], [10, -22], [-1, -12], [11, -3], [3, 5], [8, -14], [13, 4], [12, 15], [17, 12], [9, 17], [16, -3], [-1, -6], [15, -2], [12, -10], [10, -18], [10, -16]], [[3045, 3974], [-28, 33], [-2, 25], [-55, 59], [-50, 65], [-22, 36], [-11, 49], [4, 17], [-23, 77], [-28, 109], [-26, 118], [-11, 27], [-9, 43], [-21, 39], [-20, 24], [9, 26], [-14, 57], [9, 41], [22, 37]], [[8510, 5555], [2, -40], [2, -33], [-9, -54], [-11, 60], [-13, -30], [9, -43], [-8, -28], [-32, 35], [-8, 42], [8, 28], [-17, 28], [-9, -24], [-13, 2], [-21, -33], [-4, 17], [11, 50], [17, 17], [15, 22], [10, -27], [21, 17], [5, 26], [19, 1], [-1, 46], [22, -28], [3, -30], [2, -21]], [[8443, 5665], [-10, -20], [-9, -37], [-8, -17], [-17, 40], [5, 16], [7, 17], [3, 36], [16, 4], [-5, -40], [21, 57], [-3, -56]], [[8291, 5608], [-37, -56], [14, 41], [20, 37], [16, 41], [15, 58], [5, -48], [-18, -33], [-15, -40]], [[8385, 5760], [16, -18], [18, 0], [0, -25], [-13, -25], [-18, -18], [-1, 28], [2, 30], [-4, 28]], [[8485, 5776], [8, -66], [-21, 16], [0, -20], [7, -37], [-13, -13], [-1, 42], [-9, 3], [-4, 36], [16, -5], [0, 22], [-17, 45], [27, -1], [7, -22]], [[8375, 5830], [-7, -51], [-12, 29], [-15, 45], [24, -2], [10, -21]], [[8369, 6151], [17, -17], [9, 15], [2, -15], [-4, -24], [9, -43], [-7, -49], [-16, -19], [-5, -48], [7, -47], [14, -7], [13, 7], [34, -32], [-2, -32], [9, -15], [-3, -27], [-22, 29], [-10, 31], [-7, -22], [-18, 36], [-25, -9], [-14, 13], [1, 25], [9, 15], [-8, 13], [-4, -21], [-14, 34], [-4, 26], [-1, 56], [11, -19], [3, 92], [9, 54], [17, 0]], [[9329, 4655], [-8, -6], [-12, 22], [-12, 38], [-6, 45], [4, 6], [3, -18], [8, -13], [14, -38], [13, -20], [-4, -16]], [[9221, 4734], [-15, -5], [-4, -17], [-15, -14], [-15, -14], [-14, 0], [-23, 18], [-16, 16], [2, 18], [25, -8], [15, 4], [5, 29], [4, 1], [2, -31], [16, 4], [8, 20], [16, 21], [-4, 35], [17, 1], [6, -9], [-1, -33], [-9, -36]], [[8916, 4904], [48, -41], [51, -34], [19, -30], [16, -30], [4, -34], [46, -37], [7, -31], [-25, -7], [6, -39], [25, -39], [18, -62], [15, 2], [-1, -27], [22, -10], [-9, -11], [30, -25], [-3, -17], [-18, -4], [-7, 16], [-24, 6], [-28, 9], [-22, 38], [-16, 32], [-14, 52], [-36, 26], [-24, -17], [-17, -20], [4, -43], [-22, -20], [-16, 9], [-28, 3]], [[9253, 4792], [-9, -16], [-5, 35], [-6, 23], [-13, 19], [-16, 25], [-20, 18], [8, 14], [15, -17], [9, -13], [12, -14], [11, -25], [11, -19], [3, -30]], [[5392, 8233], [19, 18], [43, 27], [35, 20], [28, -10], [2, -14], [27, -1]], [[5546, 8273], [34, -7], [51, 1]], [[5653, 8105], [14, -52], [-3, -17], [-14, -6], [-25, -50], [7, -26], [-6, 3]], [[5626, 7957], [-26, 23], [-20, -8], [-13, 6], [-17, -13], [-14, 21], [-11, -8], [-2, 4]], [[3159, 6151], [14, -5], [5, -12], [-7, -15], [-21, 1], [-17, -2], [-1, 25], [4, 9], [23, -1]], [[8628, 7562], [4, -10]], [[8632, 7552], [-11, 3], [-12, -20], [-8, -20], [1, -42], [-14, -13], [-5, -11], [-11, -17], [-18, -10], [-12, -16], [-1, -25], [-3, -7], [11, -9], [15, -26]], [[8504, 7288], [-13, 11], [-4, -11], [-8, -5], [-1, 11], [-7, 5], [-8, 10], [8, 26], [7, 7], [-3, 11], [7, 31], [-2, 10], [-16, 7], [-13, 15]], [[4792, 7249], [-11, -15], [-14, 8], [-15, -6], [5, 46], [-3, 36], [-12, 6], [-7, 22], [2, 39], [11, 21], [2, 24], [6, 36], [-1, 25], [-5, 21], [-1, 20]], [[6411, 6520], [-2, 43], [7, 31], [8, 6], [8, -18], [1, -35], [-6, -35]], [[6427, 6512], [-8, -4], [-8, 12]], [[5630, 7886], [12, 13], [17, -7], [18, 0], [13, -14], [10, 9], [20, 5], [7, 14], [12, 0]], [[5784, 7745], [12, -11], [13, 9], [13, -10]], [[5822, 7733], [0, -15], [-13, -13], [-9, 6], [-7, -71]], [[5629, 7671], [-5, 10], [6, 10], [-7, 7], [-8, -13], [-17, 17], [-2, 25], [-17, 14], [-3, 18], [-15, 24]], [[8989, 8056], [28, -105], [-41, 19], [-17, -85], [27, -61], [-1, -41], [-21, 36], [-18, -46], [-5, 50], [3, 57], [-3, 64], [6, 45], [2, 79], [-17, 58], [3, 80], [25, 28], [-11, 27], [13, 8], [7, -39], [10, -57], [-1, -58], [11, -59]], [[5546, 8273], [6, 26], [38, 19]], [[138, 8991], [19, -15], [-6, 43], [75, -8], [55, -56], [-28, -26], [-46, -6], [0, -57], [-11, -13], [-26, 2], [-22, 21], [-36, 17], [-7, 26], [-28, 9], [-31, -7], [-16, 20], [6, 22], [-33, -14], [13, -28], [-16, -25], [0, 236], [68, -45], [73, -59], [-3, -37]], [[9999, 9242], [-30, -3], [-5, 19], [35, 24], [0, -40]], [[36, 9246], [-36, -4], [0, 40], [4, 3], [23, 0], [40, -17], [-2, -8], [-29, -14]], [[8988, 9383], [-42, -1], [-57, 7], [-5, 3], [27, 23], [34, 6], [40, -23], [3, -15]], [[9186, 9493], [-32, -23], [-44, 5], [-52, 23], [7, 20], [51, -9], [70, -16]], [[9029, 9522], [-22, -44], [-102, 1], [-46, -14], [-55, 39], [15, 40], [37, 11], [73, -2], [100, -31]], [[6598, 9235], [-17, -5], [-91, 8], [-7, 26], [-50, 16], [-4, 32], [28, 13], [-1, 32], [55, 50], [-25, 7], [66, 52], [-7, 27], [62, 31], [91, 38], [93, 11], [48, 22], [54, 8], [19, -23], [-19, -19], [-98, -29], [-85, -28], [-86, -57], [-42, -57], [-43, -57], [5, -49], [54, -49]], [[6363, 7799], [-12, -35], [-27, -10], [-28, -61], [25, -56], [-2, -40], [30, -70]], [[6109, 7624], [-35, 49], [-32, 23], [-24, 34], [20, 10], [23, 49], [-15, 24], [41, 24], [-1, 13], [-25, -10]], [[6061, 7840], [1, 26], [14, 17], [27, 4], [5, 20], [-7, 33], [12, 30], [-1, 18], [-41, 19], [-16, -1], [-17, 28], [-21, -9], [-35, 20], [0, 12], [-10, 26], [-22, 3], [-2, 18], [7, 12], [-18, 33], [-29, -5], [-8, 3], [-7, -14], [-11, 3]], [[5777, 8571], [31, 33], [-29, 28]], [[5863, 9167], [29, 20], [46, -35], [76, -14], [105, -67], [21, -28], [2, -40], [-31, -31], [-45, -15], [-124, 44], [-21, -7], [45, -43], [2, -28], [2, -60], [36, -18], [22, -15], [3, 28], [-17, 26], [18, 22], [67, -37], [24, 15], [-19, 43], [65, 58], [25, -4], [26, -20], [16, 40], [-23, 35], [14, 36], [-21, 36], [78, -18], [16, -34], [-35, -7], [0, -33], [22, -20], [43, 13], [7, 38], [58, 28], [97, 50], [20, -3], [-27, -35], [35, -7], [19, 21], [52, 1], [42, 25], [31, -36], [32, 39], [-29, 35], [14, 19], [82, -18], [39, -18], [100, -68], [19, 31], [-28, 31], [-1, 13], [-34, 6], [10, 28], [-15, 46], [-1, 19], [51, 53], [18, 54], [21, 11], [74, -15], [5, -33], [-26, -48], [17, -19], [9, -41], [-6, -81], [31, -36], [-12, -40], [-55, -84], [32, -8], [11, 21], [31, 15], [7, 29], [24, 29], [-16, 33], [13, 39], [-31, 5], [-6, 33], [22, 59], [-36, 48], [50, 40], [-7, 42], [14, 2], [15, -33], [-11, -57], [29, -11], [-12, 43], [46, 23], [58, 3], [51, -34], [-25, 49], [-2, 63], [48, 12], [67, -2], [60, 7], [-23, 31], [33, 39], [31, 2], [54, 29], [74, 8], [9, 16], [73, 6], [23, -14], [62, 32], [51, -1], [8, 25], [26, 25], [66, 25], [48, -19], [-38, -15], [63, -9], [7, -29], [25, 14], [82, -1], [62, -29], [23, -22], [-7, -30], [-31, -18], [-73, -33], [-21, -17], [35, -8], [41, -15], [25, 11], [14, -38], [12, 15], [44, 10], [90, -10], [6, -28], [116, -9], [2, 46], [59, -11], [44, 1], [45, -32], [13, -37], [-17, -25], [35, -47], [44, -24], [27, 62], [44, -26], [48, 16], [53, -18], [21, 16], [45, -8], [-20, 55], [37, 25], [251, -38], [24, -35], [72, -45], [112, 11], [56, -10], [23, -24], [-4, -44], [35, -16], [37, 12], [49, 1], [52, -11], [53, 6], [49, -52], [34, 19], [-23, 37], [13, 27], [88, -17], [58, 4], [80, -29], [39, -25], [0, -236], [-36, -26], [-36, 4], [25, -31], [17, -49], [13, -16], [3, -24], [-7, -16], [-52, 13], [-78, -44], [-25, -7], [-42, -42], [-40, -36], [-11, -27], [-39, 41], [-73, -46], [-12, 22], [-27, -26], [-37, 8], [-9, -38], [-33, -58], [1, -24], [31, -13], [-4, -86], [-25, -2], [-12, -49], [11, -26], [-48, -30], [-10, -67], [-41, -15], [-9, -60], [-40, -55], [-10, 41], [-12, 86], [-15, 131], [13, 82], [23, 35], [2, 28], [43, 13], [50, 75], [47, 60], [50, 48], [23, 83], [-34, -5], [-17, -49], [-70, -65], [-23, 73], [-72, -20], [-69, -99], [23, -36], [-62, -16], [-43, -6], [2, 43], [-43, 9], [-35, -29], [-85, 10], [-91, -18], [-90, -115], [-106, -139], [43, -8], [14, -37], [27, -13], [18, 30], [30, -4], [40, -65], [1, -50], [-21, -59], [-3, -71], [-12, -94], [-42, -86], [-9, -41], [-38, -69], [-38, -68], [-18, -35], [-37, -34], [-17, -1], [-17, 29], [-38, -44], [-4, -19]], [[7918, 9684], [-157, -23], [51, 77], [23, 7], [21, -4], [70, -33], [-8, -24]], [[6420, 9816], [-37, -8], [-25, -4], [-4, -10], [-33, -10], [-30, 14], [16, 19], [-62, 2], [54, 10], [43, 1], [5, -16], [16, 14], [26, 10], [42, -13], [-11, -9]], [[7775, 9718], [-60, -8], [-78, 17], [-46, 23], [-21, 42], [-38, 12], [72, 40], [60, 14], [54, -30], [64, -57], [-7, -53]], [[5844, 4990], [11, -33], [-1, -35], [-8, -7]], [[5821, 4978], [7, -6], [16, 18]], [[4526, 6298], [1, 25]], [[6188, 6023], [-4, 26], [-8, 17], [-2, 24], [-15, 21], [-15, 50], [-7, 48], [-20, 40], [-12, 10], [-18, 56], [-4, 41], [2, 35], [-16, 66], [-13, 23], [-15, 12], [-10, 34], [2, 13], [-8, 31], [-8, 13], [-11, 44], [-17, 48], [-14, 40], [-14, 0], [5, 33], [1, 20], [3, 24]], [[6344, 6744], [11, -51], [14, -13], [5, -21], [18, -25], [2, -24], [-3, -20], [4, -20], [8, -16], [4, -20], [4, -14]], [[6427, 6512], [5, -22]], [[6444, 6180], [-80, -23], [-26, -26], [-20, -62], [-13, -10], [-7, 20], [-11, -3], [-27, 6], [-5, 5], [-32, -1], [-7, -5], [-12, 15], [-7, -29], [3, -25], [-12, -19]], [[5635, 5716], [0, 14], [-10, 17], [-1, 35], [-5, 23], [-10, -4], [3, 22], [7, 25], [-3, 24], [9, 18], [-6, 14], [7, 36], [13, 44], [24, -4], [-1, 234]], [[6023, 6357], [9, -58], [-6, -10], [4, -61], [11, -71], [10, -14], [15, -22]], [[5943, 5624], [0, -7]], [[5943, 5617], [-4, 1], [0, 29], [-3, 20], [-14, 24], [-4, 42], [4, 44], [-13, 4], [-2, -13], [-17, -3], [7, -17], [2, -36], [-15, -32], [-14, -43], [-14, -6], [-23, 34], [-11, -12], [-3, -17], [-14, -11], [-1, -12], [-28, 0], [-3, 12], [-20, 2], [-10, -10], [-8, 5], [-14, 34], [-5, 17], [-20, -9], [-8, -27], [-7, -53], [-10, -11], [-8, -6]], [[5663, 5567], [-2, 2]], [[5944, 5309], [-17, -28], [-20, 1], [-22, -14], [-18, 13], [-11, -16]], [[5682, 5544], [-19, 23]], [[5943, 5617], [0, -46]], [[4535, 5861], [-11, 46], [-14, 21], [12, 11], [14, 41], [6, 31]], [[4536, 5789], [-4, 45]], [[4532, 5834], [25, -1], [7, 8], [5, 1], [10, 14], [12, -13], [12, -1], [12, 13], [-6, 17], [-9, -10], [-8, 1], [-11, 14], [-9, -1], [-6, -14], [-31, -1]], [[9502, 4438], [8, -20], [-19, 0], [-11, 37], [17, -15], [5, -2]], [[9467, 4474], [-11, -1], [-17, 6], [-5, 9], [1, 23], [19, -9], [9, -12], [4, -16]], [[9490, 4490], [-4, -11], [-21, 52], [-5, 35], [9, 0], [10, -47], [11, -29]], [[9440, 4565], [1, -12], [-22, 25], [-15, 21], [-10, 20], [4, 6], [13, -14], [23, -27], [6, -19]], [[9375, 4623], [-5, -3], [-13, 14], [-11, 24], [1, 10], [17, -25], [11, -20]], [[4682, 5458], [-8, 5], [-20, 24], [-14, 31], [-5, 22], [-3, 43]], [[2561, 5848], [-3, -14], [-16, 1], [-10, 6], [-12, 12], [-15, 3], [-8, 13]], [[6198, 5735], [9, -11], [5, -25], [13, -24], [14, -1], [26, 16], [30, 7], [25, 18], [13, 4], [10, 11], [16, 2]], [[6359, 5732], [0, -1], [0, -25], [0, -59], [0, -31], [-13, -36], [-19, -50]], [[6359, 5732], [9, 1], [13, 9], [14, 6], [14, 20], [10, 0], [1, -16], [-3, -35], [0, -31], [-6, -21], [-7, -64], [-14, -66], [-17, -75], [-24, -87], [-23, -66], [-33, -81], [-28, -48], [-42, -58], [-25, -45], [-31, -72], [-6, -31], [-6, -14]], [[3412, 5410], [34, -11], [2, 10], [23, 4], [30, -15]], [[3489, 5306], [10, -35], [-4, -25]], [[5626, 7957], [-8, -15], [-5, -24]], [[5380, 7746], [7, 5]], [[5663, 8957], [-47, -17], [-27, -41], [4, -36], [-44, -48], [-54, -50], [-20, -84], [20, -41], [26, -33], [-25, -67], [-29, -14], [-11, -99], [-15, -55], [-34, 6], [-16, -47], [-32, -3], [-9, 56], [-23, 67], [-21, 84]], [[5890, 3478], [-5, -26], [-17, -6], [-16, 32], [0, 20], [7, 22], [3, 17], [8, 5], [14, -11]], [[5999, 7104], [-2, 45], [7, 25]], [[6004, 7174], [7, 13], [7, 13], [2, 33], [9, -12], [31, 17], [14, -12], [23, 1], [32, 22], [15, -1], [32, 9]], [[5051, 5420], [-22, -12]], [[7849, 5777], [-25, 28], [-24, -2], [4, 47], [-24, 0], [-2, -65], [-15, -87], [-10, -52], [2, -43], [18, -2], [12, -53], [5, -52], [15, -33], [17, -7], [14, -31]], [[7779, 5439], [-11, 23], [-4, 29], [-15, 34], [-14, 28], [-4, -35], [-5, 33], [3, 37], [8, 56]], [[6883, 7252], [16, 60], [-6, 44], [-20, 14], [7, 26], [23, -3], [13, 33], [9, 38], [37, 13], [-6, -27], [4, -17], [12, 2]], [[6497, 7255], [-5, 42], [4, 62], [-22, 20], [8, 40], [-19, 4], [6, 49], [26, -14], [25, 19], [-20, 35], [-8, 34], [-23, -15], [-3, -43], [-8, 38]], [[6554, 7498], [31, 1], [-4, 29], [24, 21], [23, 34], [37, -31], [3, -47], [11, -12], [30, 2], [9, -10], [14, -61], [32, -41], [18, -28], [29, -29], [37, -25], [-1, -36]], [[8471, 4532], [3, 14], [24, 13], [19, 2], [9, 8], [10, -8], [-10, -16], [-29, -25], [-23, -17]], [[3286, 5693], [16, 8], [6, -2], [-1, -44], [-23, -7], [-5, 6], [8, 16], [-1, 23]], [[5233, 7240], [31, 24], [19, -7], [-1, -30], [24, 22], [2, -12], [-14, -29], [0, -27], [9, -15], [-3, -51], [-19, -29], [6, -33], [14, -1], [7, -28], [11, -9]], [[6004, 7174], [-11, 27], [11, 22], [-17, -5], [-23, 13], [-19, -34], [-43, -6], [-22, 31], [-30, 2], [-6, -24], [-20, -7], [-26, 31], [-31, -1], [-16, 59], [-21, 33], [14, 46], [-18, 28], [31, 56], [43, 3], [12, 45], [53, -8], [33, 38], [32, 17], [46, 1], [49, -42], [40, -22], [32, 9], [24, -6], [33, 31]], [[5777, 7539], [3, -23], [25, -19], [-5, -14], [-33, -3], [-12, -19], [-23, -31], [-9, 27], [0, 12]], [[8382, 6499], [-17, -95], [-12, -49], [-14, 50], [-4, 44], [17, 58], [22, 45], [13, -18], [-5, -35]], [[6088, 4781], [-12, -73], [1, -33], [18, -22], [1, -15], [-8, -36], [2, -18], [-2, -28], [10, -37], [11, -58], [10, -13]], [[5909, 4512], [-15, 18], [-18, 10], [-11, 10], [-12, 15]], [[5844, 4990], [10, 8], [31, -1], [56, 4]], [[6061, 7840], [-22, -5], [-18, -19], [-26, -3], [-24, -22], [1, -37], [14, -14], [28, 4], [-5, -21], [-31, -11], [-37, -34], [-16, 12], [6, 28], [-30, 17], [5, 12], [26, 19], [-8, 14], [-43, 15], [-2, 22], [-25, -8], [-11, -32], [-21, -44]], [[3517, 3063], [-12, -38], [-31, -32], [-21, 11], [-15, -6], [-26, 25], [-18, -1], [-17, 32]], [[679, 6185], [-4, -10], [-7, 8], [1, 17], [-4, 21], [1, 7], [5, 10], [-2, 11], [1, 6], [3, -1], [10, -10], [5, -5], [5, -8], [7, -21], [-1, -3], [-11, -13], [-9, -9]], [[664, 6277], [-9, -4], [-5, 12], [-3, 5], [0, 4], [3, 5], [9, -6], [8, -9], [-3, -7]], [[646, 6309], [-1, -7], [-15, 2], [2, 7], [14, -2]], [[621, 6317], [-2, -3], [-2, 1], [-9, 2], [-4, 13], [-1, 2], [7, 8], [3, -3], [8, -20]], [[574, 6356], [-4, -6], [-9, 11], [1, 4], [5, 6], [6, -1], [1, -14]], [[3135, 7724], [5, -19], [-30, -29], [-29, -20], [-29, -18], [-15, -35], [-4, -13], [-1, -31], [10, -32], [11, -1], [-3, 21], [8, -13], [-2, -17], [-19, -9], [-13, 1], [-20, -10], [-12, -3], [-17, -3], [-23, -17], [41, 11], [8, -11], [-39, -18], [-17, 0], [0, 7], [-8, -16], [8, -3], [-6, -43], [-20, -45], [-2, 15], [-6, 3], [-9, 15], [5, -32], [7, -10], [1, -23], [-9, -23], [-16, -47], [-2, 3], [8, 40], [-14, 22], [-3, 49], [-5, -25], [5, -38], [-18, 10], [19, -19], [1, -57], [8, -4], [3, -20], [4, -59], [-17, -44], [-29, -18], [-18, -34], [-14, -4], [-14, -22], [-4, -20], [-31, -38], [-16, -28], [-13, -35], [-4, -42], [5, -41], [9, -51], [13, -41], [0, -26], [13, -69], [-1, -39], [-1, -23], [-7, -36], [-8, -8], [-14, 7], [-4, 26], [-11, 14], [-15, 51], [-13, 45], [-4, 23], [6, 39], [-8, 33], [-22, 49], [-10, 9], [-28, -27], [-5, 3], [-14, 28], [-17, 14], [-32, -7], [-24, 7], [-21, -5], [-12, -9], [5, -15], [0, -24], [5, -12], [-5, -8], [-10, 9], [-11, -11], [-20, 2], [-20, 31], [-25, -8], [-20, 14], [-17, -4], [-24, -14], [-25, -44], [-27, -25], [-16, -28], [-6, -27], [0, -41], [1, -28], [5, -20]], [[1746, 6980], [-4, 30], [-18, 34], [-13, 7], [-3, 17], [-16, 3], [-10, 16], [-26, 6], [-7, 9], [-3, 32], [-27, 60], [-23, 82], [1, 14], [-13, 19], [-21, 50], [-4, 48], [-15, 32], [6, 49], [-1, 51], [-8, 45], [10, 56], [4, 53], [3, 54], [-5, 79], [-9, 51], [-8, 27], [4, 12], [40, -20], [15, -56], [7, 15], [-5, 49], [-9, 48]], [[750, 8432], [-28, -23], [-14, 15], [-4, 28], [25, 21], [15, 9], [18, -4], [12, -18], [-24, -28]], [[401, 8597], [-18, -9], [-18, 11], [-17, 16], [28, 10], [22, -6], [3, -22]], [[230, 8826], [17, -12], [17, 6], [23, -15], [27, -8], [-2, -7], [-21, -12], [-21, 13], [-11, 11], [-24, -4], [-7, 5], [2, 23]], [[1374, 8295], [-15, 22], [-25, 19], [-8, 52], [-36, 47], [-15, 56], [-26, 4], [-44, 2], [-33, 17], [-57, 61], [-27, 11], [-49, 21], [-38, -5], [-55, 27], [-33, 25], [-30, -12], [5, -41], [-15, -4], [-32, -12], [-25, -20], [-30, -13], [-4, 35], [12, 58], [30, 18], [-8, 15], [-35, -33], [-19, -39], [-40, -42], [20, -29], [-26, -42], [-30, -25], [-28, -18], [-7, -26], [-43, -31], [-9, -28], [-32, -25], [-20, 5], [-25, -17], [-29, -20], [-23, -20], [-47, -16], [-5, 9], [31, 28], [27, 18], [29, 33], [35, 6], [14, 25], [38, 35], [6, 12], [21, 21], [5, 44], [14, 35], [-32, -18], [-9, 11], [-15, -22], [-18, 30], [-8, -21], [-10, 29], [-28, -23], [-17, 0], [-3, 35], [5, 21], [-17, 22], [-37, -12], [-23, 28], [-19, 14], [0, 34], [-22, 25], [11, 34], [23, 33], [10, 30], [22, 4], [19, -9], [23, 28], [20, -5], [21, 19], [-5, 27], [-16, 10], [21, 23], [-17, -1], [-30, -13], [-8, -13], [-22, 13], [-39, -6], [-41, 14], [-12, 24], [-35, 34], [39, 25], [62, 29], [23, 0], [-4, -30], [59, 2], [-23, 37], [-34, 23], [-20, 29], [-26, 25], [-38, 19], [15, 31], [49, 2], [35, 27], [7, 29], [28, 28], [28, 6], [52, 27], [26, -4], [42, 31], [42, -12], [21, -27], [12, 11], [47, -3], [-2, -14], [43, -10], [28, 6], [59, -18], [53, -6], [21, -8], [37, 10], [42, -18], [31, -8]], [[3018, 5753], [-1, -14], [-16, -7], [9, -26], [0, -31], [-12, -35], [10, -47], [12, 4], [6, 43], [-8, 21], [-2, 45], [35, 24], [-4, 27], [10, 19], [10, -41], [19, -1], [18, -33], [1, -20], [25, 0], [30, 6], [16, -27], [21, -7], [16, 18], [0, 15], [34, 4], [34, 1], [-24, -18], [10, -28], [22, -4], [21, -29], [4, -48], [15, 2], [11, -14]], [[8001, 6331], [-37, -51], [-24, -56], [-6, -41], [22, -62], [25, -77], [26, -37], [17, -47], [12, -109], [-3, -104], [-24, -39], [-31, -38], [-23, -49], [-35, -55], [-10, 37], [8, 40], [-21, 34]], [[9661, 4085], [-9, -8], [-9, 26], [1, 16], [17, -34]], [[9641, 4175], [4, -47], [-7, 7], [-6, -3], [-4, 16], [0, 45], [13, -18]], [[6475, 6041], [-21, -16], [-5, -26], [-1, -20], [-27, -25], [-45, -28], [-24, -41], [-13, -3], [-8, 3], [-16, -25], [-18, -11], [-23, -3], [-7, -3], [-6, -16], [-8, -4], [-4, -15], [-14, 1], [-9, -8], [-19, 3], [-7, 35], [1, 32], [-5, 17], [-5, 44], [-8, 24], [5, 3], [-2, 27], [3, 12], [-1, 25]], [[5817, 3752], [11, 0], [14, -10], [9, 7], [15, -6]], [[5911, 3478], [-7, -43], [-3, -49], [-7, -27], [-19, -30], [-5, -8], [-12, -30], [-8, -31], [-16, -42], [-31, -61], [-20, -36], [-21, -26], [-29, -23], [-14, -3], [-3, -17], [-17, 9], [-14, -11], [-30, 11], [-17, -7], [-12, 3], [-28, -23], [-24, -10], [-17, -22], [-13, -1], [-11, 21], [-10, 1], [-12, 26], [-1, -8], [-4, 16], [0, 34], [-9, 40], [9, 11], [0, 45], [-19, 55], [-14, 50], [0, 1], [-20, 76]], [[5840, 4141], [-21, -8], [-15, -23], [-4, -21], [-10, -4], [-24, -49], [-15, -38], [-10, -2], [-9, 7], [-31, 7]]]
    }, i.prototype.usaTopo = "__USA__", i.prototype.latLngToXY = function (a, b) {
        return this.projection([b, a])
    }, i.prototype.addLayer = function (a, b) {
        return d3.select(), this.svg.append("g").attr("id", b || "").attr("class", a || "")
    }, i.prototype.updatePopup = function (a, b, c) {
        var d = this;
        a.on("mousemove", null), a.on("mousemove", function () {
            var e = d3.mouse(this);
            d3.select(d.svg[0][0].parentNode).select(".datamaps-hoverover").style("top", e[1] + 30 + "px").html(function () {
                var d = JSON.parse(a.attr("data-info"));
                return c.popupTemplate(b, d)
            }).style("left", e[0] + "px")
        }), d3.select(d.svg[0][0].parentNode).select(".datamaps-hoverover").style("display", "block")
    }, i.prototype.addPlugin = function (a, b) {
        "undefined" == typeof i.prototype[a] && (i.prototype[a] = function (c, d, e, f) {
            var g;
            "undefined" == typeof f && (f = !1), "function" == typeof d && (e = d, d = void 0), d = h(d || {}, j.bubbleConfig), !f && this.options[a + "Layer"] ? (g = this.options[a + "Layer"], d = d || this.options[a + "Options"]) : (g = this.addLayer(a), this.options[a + "Layer"] = g, this.options[a + "Options"] = d), b.apply(this, [g, c, d]), e && e(g)
        })
    }, "function" == typeof define && define.amd ? define("datamaps", [], function () {
        return i
    }) : window.Datamap = window.Datamaps = i, window.jQuery && (window.jQuery.fn.datamaps = function (a, b) {
        a = a || {}, a.element = this[0];
        var c = new i(a);
        return "function" == typeof b && b(c, a), this
    })
}();
//part4//
var Popup = {
    Show: function (geography, data, element, e) {
        e.stopPropagation();
        var el = '<div class="popup-card"> \
				<span class="country">' + geography.properties.name + '</span>\
        </div>';
        var $el = $(el).css({
            top: e.clientY - 10
            , left: e.clientX
        });
        Popup.Hide();
        $('body').append($el);
    }
    , Hide: function () {
        $('body .popup-card').remove();
    }
};
var dataMap = new Datamap({
    element: document.getElementById('map')
    , scope: 'world'
    , projection: 'mercator'
    , geographyConfig: {
        highlightBorderColor: '#fff'
        , highlightBorderWidth: 1, //      country color on hover:
        highlightFillColor: '#d9d9d9'
        , popupOnHover: false
    }
    , fills: {
        defaultFill: '#eff0f2', //    countries I've been to color:
        gt: '#708DCD'
    }
    , data: {
        BEL: {
            fillKey: 'gt'
        }
        , CAN: {
            fillKey: 'gt'
        }
        , CHN: {
            fillKey: 'gt'
        }
        , EGY: {
            fillKey: 'gt'
        }
        , ESP: {
            fillKey: 'gt'
        }
        , FRA: {
            fillKey: 'gt'
        }
        , GRC: {
            fillKey: 'gt'
        }
        , GBR: {
            fillKey: 'gt'
        }
        , HRV: {
            fillKey: 'gt'
        }
        , DEU: {
            fillKey: 'gt'
        }
        , ITA: {
            fillKey: 'gt'
        }
        , IDN: {
            fillKey: 'gt'
        }
        , IND: {
            fillKey: 'gt'
        }
        , JPN: {
            fillKey: 'gt'
        }
        , KWT: {
            fillKey: 'gt'
        }
        , LAO: {
            fillKey: 'gt'
        }
        , MEX: {
            fillKey: 'gt'
        }
        , MCO: {
            fillKey: 'gt'
        }
        , MMR: {
            fillKey: 'gt'
        }
        , NLD: {
            fillKey: 'gt'
        }
        , NPL: {
            fillKey: 'gt'
        }
        , SWE: {
            fillKey: 'gt'
        }
        , THA: {
            fillKey: 'gt'
        }
        , USA: {
            fillKey: 'gt'
        }
        , VGB: {
            fillKey: 'gt'
        }
        , VAT: {
            fillKey: 'gt'
        }
    , }
    , done: function (datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            Popup.Show(geography, datamap.options.data[geography.id], this, d3.event);
        });
    }
});
$('body').on('click', function (e) {
    Popup.Hide();
}).on('click', '.datamaps-subunit,.popup-card', function (e) {
    e.stopPropagation();
});