!function () {
    for (var t, e = function () {
    }, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = i.length, r = window.console = window.console || {}; n--;) t = i[n], r[t] || (r[t] = e)
}(), function (t) {
    var e = t({});
    t.subscribe = function () {
        e.on.apply(e, arguments)
    }, t.unsubscribe = function () {
        e.off.apply(e, arguments)
    }, t.publish = function () {
        e.trigger.apply(e, arguments)
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, r) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
    },
    easeInQuad: function (t, e, i, n, r) {
        return n * (e /= r) * e + i
    },
    easeOutQuad: function (t, e, i, n, r) {
        return -n * (e /= r) * (e - 2) + i
    },
    easeInOutQuad: function (t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function (t, e, i, n, r) {
        return n * (e /= r) * e * e + i
    },
    easeOutCubic: function (t, e, i, n, r) {
        return n * ((e = e / r - 1) * e * e + 1) + i
    },
    easeInOutCubic: function (t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function (t, e, i, n, r) {
        return n * (e /= r) * e * e * e + i
    },
    easeOutQuart: function (t, e, i, n, r) {
        return -n * ((e = e / r - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function (t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function (t, e, i, n, r) {
        return n * (e /= r) * e * e * e * e + i
    },
    easeOutQuint: function (t, e, i, n, r) {
        return n * ((e = e / r - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function (t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function (t, e, i, n, r) {
        return -n * Math.cos(e / r * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (t, e, i, n, r) {
        return n * Math.sin(e / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function (t, e, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i
    },
    easeInExpo: function (t, e, i, n, r) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i
    },
    easeOutExpo: function (t, e, i, n, r) {
        return e == r ? i + n : n * (-Math.pow(2, -10 * e / r) + 1) + i
    },
    easeInOutExpo: function (t, e, i, n, r) {
        return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    },
    easeInCirc: function (t, e, i, n, r) {
        return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i
    },
    easeOutCirc: function (t, e, i, n, r) {
        return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
    },
    easeInOutCirc: function (t, e, i, n, r) {
        return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function (t, e, i, n, r) {
        var s = 1.70158, o = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= r)) return i + n;
        if (o || (o = .3 * r), a < Math.abs(n)) {
            a = n;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(n / a);
        return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o)) + i
    },
    easeOutElastic: function (t, e, i, n, r) {
        var s = 1.70158, o = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= r)) return i + n;
        if (o || (o = .3 * r), a < Math.abs(n)) {
            a = n;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * r - s) * (2 * Math.PI) / o) + n + i
    },
    easeInOutElastic: function (t, e, i, n, r) {
        var s = 1.70158, o = 0, a = n;
        if (0 == e) return i;
        if (2 == (e /= r / 2)) return i + n;
        if (o || (o = r * (.3 * 1.5)), a < Math.abs(n)) {
            a = n;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(n / a);
        return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o)) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o) * .5 + n + i
    },
    easeInBack: function (t, e, i, n, r, s) {
        return void 0 == s && (s = 1.70158), n * (e /= r) * e * ((s + 1) * e - s) + i
    },
    easeOutBack: function (t, e, i, n, r, s) {
        return void 0 == s && (s = 1.70158), n * ((e = e / r - 1) * e * ((s + 1) * e + s) + 1) + i
    },
    easeInOutBack: function (t, e, i, n, r, s) {
        return void 0 == s && (s = 1.70158), (e /= r / 2) < 1 ? n / 2 * (e * e * (((s *= 1.525) + 1) * e - s)) + i : n / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
    },
    easeInBounce: function (t, e, i, n, r) {
        return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i
    },
    easeOutBounce: function (t, e, i, n, r) {
        return (e /= r) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function (t, e, i, n, r) {
        return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i
    }
});
var PUI = window.PUI || {};
PUI.Gmap = function (t, e) {
    "use strict";
    this.conf = {
        lat: 50.061663,
        lng: 19.937466,
        markers: [{lat: 50.061663, lng: 19.937466}],
        mapStyles: [],
        zoom: 16,
        disableDefaultUI: !0,
        navigationControl: !0,
        mapTypeControl: !1,
        icon: void 0,
        markersClickable: !0,
        scrollwheel: !1,
        infoBox: {use: !1, scriptURL: "js/lib/infobox_packed.js", className: "gmapInfoBox", alignBottom: !0}
    }, $.extend(this.conf, e), this.el = $(t), this.init()
}, PUI.Gmap.prototype = {
    gmap: void 0, infowindow: null, addMarkers: function (t) {
        for (var e = t || this, i = function (t, i, n) {
            var r = new google.maps.Marker({
                position: new google.maps.LatLng(t, i),
                map: e.gmap,
                clickable: e.conf.markersClickable,
                html: n,
                icon: e.conf.icon
            });
            google.maps.event.addListener(r, "click", function () {
                e.infowindow.setContent(r.html), e.infowindow.setContent(e.infowindow.getContent()), e.infowindow.open(e.gmap, r)
            })
        }, n = 0; n < e.conf.markers.length; n++) {
            var r = e.conf.markers[n], s = r.content, o = e.conf.infoWindowTemplate;
            for (var a in s) {
                var l = "{{" + a + "}}";
                o = o.replace(l, s[a], "gi")
            }
            i(r.lat, r.lng, o)
        }
    }, initMap: function (t) {
        var e = t || this, i = {
            center: new google.maps.LatLng(e.conf.lat, e.conf.lng),
            zoom: e.conf.zoom,
            scrollwheel: e.conf.scrollwheel,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: e.conf.disableDefaultUI,
            navigationControl: e.conf.navigationControl,
            mapTypeControl: e.conf.mapTypeControl
        };
        e.conf.infoBox.use ? e.infowindow = new InfoBox({
            content: "loading...",
            boxClass: e.conf.infoBox.className,
            alignBottom: e.conf.infoBox.alignBottom
        }) : e.infowindow = new google.maps.InfoWindow({
            content: "loading...",
            maxWidth: 200
        }), e.gmap = new google.maps.Map(e.el.get(0), i), e.conf.mapStyles.length > 0 && e.gmap.setOptions({styles: e.conf.mapStyles}), e.addMarkers(t)
    }, loadMapApi: function (t) {
        var e = t || this;
        google.load("maps", "3", {
            other_params: "sensor=false", callback: function () {
                PUI.mapApiLoaded = !0, e.conf.infoBox.use ? $.getScript(e.conf.infoBox.scriptURL, function () {
                    e.initMap(e)
                }) : e.initMap(e)
            }
        })
    }, init: function () {
        function t() {
            PUI.mapApiLoaded === !0 ? e.initMap(e) : setTimeout(t, 200)
        }

        var e = this;
        PUI.mapApiLoading === !0 ? t() : (PUI.mapApiLoading = !0, $.ajax({
            url: "https://www.google.com/jsapi",
            dataType: "script",
            success: function () {
                e.loadMapApi(e)
            }
        }))
    }
};
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, r = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
        }, s = 1e-10, o = i._internals, a = o.isSelector, l = o.isArray, h = r.prototype = i.to({}, .1, {}), c = [];
        r.version = "1.14.2", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, h.updateTo = function (t, e) {
            var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || s) if (e) this._initted = !1; else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
            } else if (this._time > 0 || s) {
                this._initted = !1, this._init();
                for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next
            }
            return this
        }, h.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, a, l, h, u, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration, g = this._time,
                m = this._totalTime, v = this._cycle, _ = this._duration, y = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && y > 0 && y !== s) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / _, u = this._easeType, d = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > this._time / _ ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / _)), g === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = m, this._rawPrevTime = y, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === _ && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
        }, r.to = function (t, e, i) {
            return new r(t, e, i)
        }, r.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
        }, r.staggerTo = r.allTo = function (t, e, s, o, h, u, d) {
            o = o || 0;
            var p, f, g, m, v = s.delay || 0, _ = [], y = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), h.apply(d || this, u || c)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                f = {};
                for (m in s) f[m] = s[m];
                f.delay = v, g === p && h && (f.onComplete = y), _[g] = new r(t[g], e, f), v += o
            }
            return _
        }, r.staggerFrom = r.allFrom = function (t, e, i, n, s, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
        }, r.staggerFromTo = r.allFromTo = function (t, e, i, n, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
        }, r.delayedCall = function (t, e, i, n, s) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, r.set = function (t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var u = function (t, e) {
            for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(u(s, e)), r = n.length), s = s._next;
            return n
        }, d = r.getAllTweens = function (e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
        };
        r.killAll = function (t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var s, o, a, l = d(0 != r), h = l.length, c = i && n && r;
            for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, r.killChildTweensOf = function (t, e) {
            if (null != t) {
                var s, h, c, u, d, p = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t)) for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e); else {
                    s = [];
                    for (c in p) for (h = p[c].target.parentNode; h;) h === t && (s = s.concat(p[c].tweens)), h = h.parentNode;
                    for (d = s.length, u = 0; d > u; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, n, r) {
            i = i !== !1, n = n !== !1, r = r !== !1;
            for (var s, o, a = d(r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
        };
        return r.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, r.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, r.globalTimeScale = function (e) {
            var n = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, h.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, h.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, h.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, h.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, h.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, h.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, n, r = this.vars;
                for (n in r) i = r[n], a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }, r = 1e-10, s = i._internals, o = s.isSelector, a = s.isArray, l = s.lazyTweens, h = s.lazyRender, c = [],
            u = _gsScope._gsDefine.globals, d = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }, p = function (t, e, i, n) {
                var r = t._timeline._totalTime;
                (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || c), this._forcingPlayhead && t._timeline.seek(r))
            }, f = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }, g = n.prototype = new e;
        return n.version = "1.14.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function (t, e, n, r) {
            var s = n.repeat && u.TweenMax || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
        }, g.from = function (t, e, n, r) {
            return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
        }, g.fromTo = function (t, e, n, r, s) {
            var o = r.repeat && u.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }, g.staggerTo = function (t, e, r, s, a, l, h, c) {
            var u, p = new n({
                onComplete: l,
                onCompleteParams: h,
                onCompleteScope: c,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = f(t)), s = s || 0, 0 > s && (t = f(t), t.reverse(), s *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = d(r.startAt)), p.to(t[u], e, d(r), u * s);
            return this.add(p, a)
        }, g.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, g.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, g.set = function (t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, o = new n(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
            return a.add(o, 0), o
        }, g.add = function (r, s, o, l) {
            var h, c, u, d, p, f;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && a(r)) {
                    for (o = o || "normal", l = l || 0, h = s, c = r.length, u = 0; c > u; u++) a(d = r[u]) && (d = new n({tweens: d})), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === o ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), h += l;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, s);
                if ("function" != typeof r) throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, g.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || e && e.push && a(e)) {
                for (var i = e.length; --i > -1;) this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, g._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, g.insert = g.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, g.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, g.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, g.addPause = function (t, e, i, n) {
            return this.call(p, ["{self}", e, i, n], this, t)
        }, g.removeLabel = function (t) {
            return delete this._labels[t], this
        }, g.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, g._parseTimeOrLabel = function (e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && a(r))) for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, g.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, g.stop = function () {
            return this.paused(!0)
        }, g.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, g.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, g.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, o, a, u, d = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time,
                f = this._startTime, g = this._timeScale, m = this._paused;
            if (t >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p) for (n = this._first; n && (o = n._next, !this._paused || m);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, !this._paused || m);) (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                this._onUpdate && (e || (l.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), a && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || c)))
            }
        }, g._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, g.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
            return s
        }, g.getTweensOf = function (t, e) {
            var n, r, s = this._gc, o = [], a = 0;
            for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;) (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o
        }, g.recent = function () {
            return this._recent
        }, g._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, g.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, g._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
            return r
        }, g.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, g._enabled = function (t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, g.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, g.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, g.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, g.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            }, r = 1e-10, s = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, h = new i(null, null, 1, 0),
            c = n.prototype = new t;
        return c.constructor = n, c.kill()._gc = !1, n.version = "1.14.2", c.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, c.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, c.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, c.tweenTo = function (t, i) {
            i = i || {};
            var n, r, o, a = {ease: h, overwrite: i.delay ? 2 : 1, useFrames: this.usesFrames(), immediateRender: !1};
            for (r in i) a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
            }, o
        }, c.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, c.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, h, c, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration,
                g = this._time, m = this._totalTime, v = this._startTime, _ = this._timeScale, y = this._rawPrevTime,
                w = this._paused, x = this._cycle;
            if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== x && !this._locked) {
                var b = this._yoyo && 0 !== (1 & x), T = b === (this._yoyo && 0 !== (1 & this._cycle)),
                    C = this._totalTime, S = this._cycle, P = this._rawPrevTime, k = this._time;
                if (this._totalTime = x * f, x > this._cycle ? b = !b : this._totalTime += f, this._time = g, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = x, this._locked = !0, g = b ? 0 : f, this.render(g, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (g = b ? f + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !w) return;
                this._time = k, this._totalTime = C, this._cycle = S, this._rawPrevTime = P
            }
            if (!(this._time !== g && this._first || i || u)) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= g) for (n = this._first; n && (h = n._next, !this._paused || w);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h; else for (n = this._last; n && (h = n._prev, !this._paused || w);) (n._active || g >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), c && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || s)))
        }, c.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
            return s
        }, c.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null
        }, c.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (t > e[i].time) return e[i].name;
            return null
        }, c.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, c.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, c.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.repeat = function (t) {
            return arguments.length ? (this._repeat = t,
                this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, c.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = function (t, e, i, n) {
                this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            },
            o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            a = function (t, e, i, n) {
                var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, h = (e + i) / 2, c = (i + n) / 2,
                    u = (l + h) / 2, d = (h + c) / 2, p = (d - u) / 8;
                return r.b = l + (t - l) / 4, s.b = u + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + d) / 2, o.b = d - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
            }, l = function (t, r, s, o, l) {
                var h, c, u, d, p, f, g, m, v, _, y, w, x, b = t.length - 1, T = 0, C = t[0].a;
                for (h = 0; b > h; h++) p = t[T], c = p.a, u = p.d, d = t[T + 1].d, l ? (y = e[h], w = i[h], x = .25 * (w + y) * r / (o ? .5 : n[h] || .5), f = u - (u - c) * (o ? .5 * r : 0 !== y ? x / y : 0), g = u + (d - u) * (o ? .5 * r : 0 !== w ? x / w : 0), m = u - (f + ((g - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = u - .5 * (u - c) * r, g = u + .5 * (d - u) * r, m = u - (f + g) / 2), f += m, g += m, p.c = v = f, p.b = 0 !== h ? C : C = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = v - c, p.ba = C - c, s ? (_ = a(c, C, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, C = g;
                p = t[T], p.b = C, p.c = C + .4 * (p.d - C), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = C - p.a, s && (_ = a(p.a, C, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
            }, h = function (t, n, r, o) {
                var a, l, h, c, u, d, p = [];
                if (o) for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
                if (a = t.length - 2, 0 > a) return p[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                for (l = 0; a > l; l++) h = t[l][n], c = t[l + 1][n], p[l] = new s(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                return p[l] = new s(t[l][n], 0, 0, t[l + 1][n]), p
            }, c = function (t, s, a, c, u, d) {
                var p, f, g, m, v, _, y, w, x = {}, b = [], T = d || t[0];
                u = "string" == typeof u ? "," + u + "," : o, null == s && (s = 1);
                for (f in t[0]) b.push(f);
                if (t.length > 1) {
                    for (w = t[t.length - 1], y = !0, p = b.length; --p > -1;) if (f = b[p], Math.abs(T[f] - w[f]) > .05) {
                        y = !1;
                        break
                    }
                    y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, p = b.length; --p > -1;) f = b[p], r[f] = -1 !== u.indexOf("," + f + ","), x[f] = h(t, f, r[f], d);
                for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                if (!c) {
                    for (p = b.length; --p > -1;) if (r[f]) for (g = x[b[p]], _ = g.length - 1, m = 0; _ > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m], n[m] = (n[m] || 0) + v * v;
                    for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                }
                for (p = b.length, m = a ? 4 : 1; --p > -1;) f = b[p], g = x[f], l(g, s, a, c, r[f]), y && (g.splice(0, m), g.splice(g.length - m, m));
                return x
            }, u = function (t, e, i) {
                e = e || "soft";
                var n, r, o, a, l, h, c, u, d, p, f, g = {}, m = "cubic" === e ? 3 : 2, v = "soft" === e, _ = [];
                if (v && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw"invalid Bezier data";
                for (d in t[0]) _.push(d);
                for (h = _.length; --h > -1;) {
                    for (d = _[h], g[d] = l = [], p = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && u - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                    for (u = p - m + 1, p = 0, c = 0; u > c; c += m) n = l[c], r = l[c + 1], o = l[c + 2], a = 2 === m ? 0 : l[c + 3], l[p++] = f = 3 === m ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                    l.length = p
                }
                return g
            }, d = function (t, e, i) {
                for (var n, r, s, o, a, l, h, c, u, d, p, f = 1 / i, g = t.length; --g > -1;) for (d = t[g], s = d.a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, c = 1; i >= c; c++) h = f * c, u = 1 - h, n = r - (r = (h * h * o + 3 * u * (h * a + u * l)) * h), p = g * i + c - 1, e[p] = (e[p] || 0) + n * n
            }, p = function (t, e) {
                e = e >> 0 || 6;
                var i, n, r, s, o = [], a = [], l = 0, h = 0, c = e - 1, u = [], p = [];
                for (i in t) d(t[i], o, e);
                for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === c && (h += l, s = n / e >> 0, u[s] = p, a[s] = h, l = 0, p = []);
                return {length: h, lengths: a, segments: u}
            }, f = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.3",
                API: 2,
                global: !0,
                init: function (t, e, i) {
                    this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, r, s, o, a, l = e.values || [], h = {}, d = l[0], f = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                    for (n in d) this._props.push(n);
                    for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                        var g = p(this._beziers, this._timeRes);
                        this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                        for (o = 0; 3 > o; o++) n = f[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function (e) {
                    var i, n, r, s, o, a, l, h, c, u, d = this._segCount, p = this._func, f = this._target,
                        g = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                            for (h = d - 1; h > r && e >= (this._l2 = c[++r]);) ;
                            this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                        } else if (this._l1 > e && r > 0) {
                            for (; r > 0 && (this._l1 = c[--r]) >= e;) ;
                            0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                            for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]);) ;
                            this._s1 = u[r - 1], this._si = r
                        } else if (this._s1 > e && r > 0) {
                            for (; r > 0 && (this._s1 = u[--r]) >= e;) ;
                            0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                    for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
                    if (this._autoRotate) {
                        var m, v, _, y, w, x, b, T = this._autoRotate;
                        for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, b = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], m = this._beziers[T[r][1]], o && m && (o = o[i], m = m[i], v = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, v += (y - v) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = m.a + (m.b - m.a) * a, w = m.b + (m.c - m.b) * a, _ += (w - _) * a, w += (m.c + (m.d - m.c) * a - w) * a, l = g ? Math.atan2(w - _, y - v) * b + x : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
                    }
                }
            }), g = f.prototype;
        f.bezierThrough = c, f.cubicToQuadratic = a, f._autoCSS = !0, f.quadraticToCubic = function (t, e, i) {
            return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, f._cssRegister = function () {
            var t = _gsScope._gsDefine.globals.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, s, o, a, l) {
                        e instanceof Array && (e = {values: e}), l = new f;
                        var h, c, u, d = e.values, p = d.length - 1, g = [], m = {};
                        if (0 > p) return a;
                        for (h = 0; p >= h; h++) u = i(t, d[h], o, a, l, p !== h), g[h] = u.end;
                        for (c in e) m[c] = e[c];
                        return m.values = g, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform), l._onInitTween(u.proxy, m, o._tween), a
                    }
                })
            }
        }, g._roundProps = function (t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;) (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }, g._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, r, s, o = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, a = {}, l = o.prototype = new t("css");
        l.constructor = o, o.version = "1.14.2", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", l = "px", o.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
        };
        var h, c, u, d, p, f, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, _ = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
            y = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, x = /opacity:([^;]*)/i,
            b = /alpha\(opacity *=.+?\)/i, T = /^(rgb|hsl)/, C = /([A-Z])/g, S = /-([a-z])/gi,
            P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function (t, e) {
                return e.toUpperCase()
            }, M = /(?:Left|Right|Width)/i, O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, I = Math.PI / 180,
            R = 180 / Math.PI, D = {}, z = document, L = z.createElement("div"), F = z.createElement("img"),
            N = o._internals = {_specialProps: a}, B = navigator.userAgent, j = function () {
                var t, e = B.indexOf("Android"), i = z.createElement("div");
                return u = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === e || Number(B.substr(e + 8, 1)) > 3), p = u && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), d = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], !!t && /^0.55/.test(t.style.opacity)
            }(), X = function (t) {
                return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, $ = function (t) {
                window.console && console.log(t)
            }, q = "", W = "", U = function (t, e) {
                e = e || L;
                var i, n, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) ;
                return n >= 0 ? (W = 3 === n ? "ms" : i[n], q = "-" + W.toLowerCase() + "-", W + t) : null
            }, Y = z.defaultView ? z.defaultView.getComputedStyle : function () {
            }, H = o.getStyle = function (t, e, i, n, r) {
                var s;
                return j || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || Y(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : X(t)
            }, G = N.convertToPixels = function (t, i, n, r, s) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var a, l, h, c = M.test(i), u = t, d = L.style, p = 0 > n;
                if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight); else {
                    if (d.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                        if (u = t.parentNode || z.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                        d[c ? "width" : "height"] = n + r
                    }
                    u.appendChild(L), a = parseFloat(L[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), c && "%" === r && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || s || (a = G(t, i, n, r, !0))
                }
                return p ? -a : a
            }, V = N.calculateOffset = function (t, e, i) {
                if ("absolute" !== H(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top", r = H(t, "margin" + n, i);
                return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(y, "")) || 0)
            }, Q = function (t, e) {
                var i, n, r = {};
                if (e = e || Y(t, null)) if (i = e.length) for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]); else for (i in e) r[i] = e[i]; else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, k)] = e[i]);
                return j || (r.opacity = X(t)), n = At(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Tt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            }, Z = function (t, e, i, n, r) {
                var s, o, a, l = {}, h = t.style;
                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : V(t, o), void 0 !== h[o] && (a = new ut(h, o, h[o], a)));
                if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                return {difs: l, firstMPT: a}
            }, K = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], tt = function (t, e, i) {
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = K[e], s = r.length;
                for (i = i || Y(t, null); --s > -1;) n -= parseFloat(H(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(H(t, "border" + r[s] + "Width", i, !0)) || 0;
                return n
            }, et = function (t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
            }, it = function (t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            }, nt = function (t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
            }, rt = function (t, e, i, n) {
                var r, s, o, a, l = 1e-6;
                return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = Number(s[0].replace(_, "")) * (-1 === t.indexOf("rad") ? 1 : R) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), l > a && a > -l && (a = 0), a
            }, st = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ot = function (t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            }, at = o.parseColor = function (t) {
                var e, i, n, r, s, o;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), st[t] ? st[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ot(r + 1 / 3, e, i), t[1] = ot(r, e, i), t[2] = ot(r - 1 / 3, e, i), t) : (t = t.match(g) || st.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : st.black
            }, lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in st) lt += "|" + l + "\\b";
        lt = RegExp(lt + ")", "gi");
        var ht = function (t, e, i, n) {
            if (null == t) return function (t) {
                return t
            };
            var r, s = e ? (t.match(lt) || [""])[0] : "", o = t.split(s).join("").match(v) || [],
                a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "",
                h = -1 !== t.indexOf(" ") ? " " : ",", c = o.length, u = c > 0 ? o[0].replace(g, "") : "";
            return c ? r = e ? function (t) {
                var e, d, p, f;
                if ("number" == typeof t) t += u; else if (n && E.test(t)) {
                    for (f = t.replace(E, "|").split("|"), p = 0; f.length > p; p++) f[p] = r(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(lt) || [s])[0], d = t.split(e).join("").match(v) || [], p = d.length, c > p--) for (; c > ++p;) d[p] = i ? d[0 | (p - 1) / 2] : o[p];
                return a + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, s, d;
                if ("number" == typeof t) t += u; else if (n && E.test(t)) {
                    for (s = t.replace(E, "|").split("|"), d = 0; s.length > d; d++) s[d] = r(s[d]);
                    return s.join(",")
                }
                if (e = t.match(v) || [], d = e.length, c > d--) for (; c > ++d;) e[d] = i ? e[0 | (d - 1) / 2] : o[d];
                return a + e.join(h) + l
            } : function (t) {
                return t
            }
        }, ct = function (t) {
            return t = t.split(","), function (e, i, n, r, s, o, a) {
                var l, h = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, a, s, o)
            }
        }, ut = (N._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t) for (a = s.firstMPT; a;) {
                if (i = a.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        }), dt = (N._parseToProxy = function (t, e, i, n, r, s) {
            var o, a, l, h, c, u = n, d = {}, p = {}, f = i._transform, g = D;
            for (i._transform = null, D = e, n = c = i.parse(t, e, n, r), D = g, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, s || (h = new ut(n, "s", a, h, n.r), n.c = 0), 1 === n.type)) for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], d[a] = n[l], s || (h = new ut(n, l, a, h, n.rxp[l]));
                n = n._next
            }
            return {proxy: d, end: p, firstMPT: h, pt: c}
        }, N.CSSPropTween = function (t, e, n, r, o, a, l, h, c, u, d) {
            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof dt || s.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + r : d, o && (this._next = o, o._prev = this)
        }), pt = o.parseComplex = function (t, e, i, n, r, s, o, a, l, c) {
            i = i || s || "", o = new dt(t, e, 0, 0, o, c ? 2 : 1, null, (!1), a, i, n), n += "";
            var u, d, p, f, v, _, y, w, x, b, C, S, P = i.split(", ").join(",").split(" "),
                k = n.split(", ").join(",").split(" "), M = P.length, O = h !== !1;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(E, ", ").split(" "), k = k.join(" ").replace(E, ", ").split(" "), M = P.length), M !== k.length && (P = (s || "").split(" "), M = P.length), o.plugin = l, o.setRatio = c, u = 0; M > u; u++) if (f = P[u], v = k[u], w = parseFloat(f), w || 0 === w) o.appendXtra("", w, it(v, w), v.replace(m, ""), O && -1 !== v.indexOf("px"), !0); else if (r && ("#" === f.charAt(0) || st[f] || T.test(f))) S = "," === v.charAt(v.length - 1) ? ")," : ")", f = at(f), v = at(v), x = f.length + v.length > 6, x && !j && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[u]).join("transparent")) : (j || (x = !1), o.appendXtra(x ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], x ? "," : S, !0), x && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, S, !1))); else if (_ = f.match(g)) {
                if (y = v.match(m), !y || y.length !== _.length) return o;
                for (p = 0, d = 0; _.length > d; d++) C = _[d], b = f.indexOf(C, p), o.appendXtra(f.substr(p, b - p), Number(C), it(y[d], C), "", O && "px" === f.substr(b + C.length, 2), 0 === d), p = b + C.length;
                o["xs" + o.l] += f.substr(p)
            } else o["xs" + o.l] += o.l ? " " + f : f;
            if (-1 !== n.indexOf("=") && o.data) {
                for (S = o.xs0 + o.data.s, u = 1; o.l > u; u++) S += o["xs" + u] + o.data["xn" + u];
                o.e = S + o["xs" + u]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, ft = 9;
        for (l = dt.prototype, l.l = l.pr = 0; --ft > 0;) l["xn" + ft] = 0, l["xs" + ft] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, n, r, s) {
            var o = this, a = o.l;
            return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new dt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var gt = function (t, e) {
            e = e || {}, this.p = e.prefix ? U(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, mt = N._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r, s = t.split(","), o = e.defaultValue;
            for (i = i || [o], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new gt(s[n], e)
        }, vt = function (t) {
            if (!a[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                mt(t, {
                    parser: function (t, i, n, r, s, o, l) {
                        var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                        return h ? (h._cssRegister(), a[n].parse(t, i, n, r, s, o, l)) : ($("Error: " + e + " js file not loaded."), s)
                    }
                })
            }
        };
        l = gt.prototype, l.parseComplex = function (t, e, i, n, r, s) {
            var o, a, l, h, c, u, d = this.keyword;
            if (this.multi && (E.test(i) || E.test(e) ? (a = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (i = -1 === u ? l : a, i[o] += " " + d));
                e = a.join(", "), i = l.join(", ")
            }
            return pt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, l.parse = function (t, e, i, n, s, o) {
            return this.parseComplex(t.style, this.format(H(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
        }, o.registerSpecialProp = function (t, e, i) {
            mt(t, {
                parser: function (t, n, r, s, o, a) {
                    var l = new dt(t, r, 0, 0, o, 2, r, (!1), i);
                    return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                }, priority: i
            })
        };
        var _t,
            yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            wt = U("transform"), xt = q + "transform", bt = U("transformOrigin"), Tt = null !== U("perspective"),
            Ct = N.Transform = function () {
                this.skewY = 0
            }, St = window.SVGElement, Pt = function (t, e, i) {
                var n, r = z.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            }, kt = document.documentElement, Mt = function () {
                var t, e, i, n = f || /Android/i.test(B) && !window.chrome;
                return z.createElementNS && !n && (t = Pt("svg", kt), e = Pt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().left, e.style[bt] = "50% 50%", e.style[wt] = "scale(0.5,0.5)", n = i === e.getBoundingClientRect().left, kt.removeChild(t)), n
            }(), Ot = function (t, e, i) {
                var n = t.getBBox();
                e = et(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
            }, At = N.getTransform = function (t, e, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var s, a, l, h, c, u, d, p, f, g, m, v, _, y = i ? t._gsTransform || new Ct : new Ct, w = 0 > y.scaleX,
                    x = 2e-5, b = 1e5, T = 179.99, C = T * I,
                    S = Tt ? parseFloat(H(t, bt, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0,
                    P = parseFloat(o.defaultTransformPerspective) || 0;
                if (wt ? s = H(t, xt, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(O), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
                    for (a = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = a.length; --l > -1;) h = Number(a[l]), a[l] = (c = h - (h |= 0)) ? (0 | c * b + (0 > c ? -.5 : .5)) / b + h : h;
                    if (16 === a.length) {
                        var k = a[8], M = a[9], A = a[10], E = a[12], D = a[13], z = a[14];
                        if (y.zOrigin && (z = -y.zOrigin, E = k * z - a[12], D = M * z - a[13], z = A * z + y.zOrigin - a[14]), !i || n || null == y.rotationX) {
                            var L, F, N, B, j, X, $, q = a[0], W = a[1], U = a[2], Y = a[3], G = a[4], V = a[5], Q = a[6],
                                Z = a[7], K = a[11], J = Math.atan2(Q, A), tt = -C > J || J > C;
                            y.rotationX = J * R, J && (B = Math.cos(-J), j = Math.sin(-J), L = G * B + k * j, F = V * B + M * j, N = Q * B + A * j, k = G * -j + k * B, M = V * -j + M * B, A = Q * -j + A * B, K = Z * -j + K * B, G = L, V = F, Q = N), J = Math.atan2(k, q), y.rotationY = J * R, J && (X = -C > J || J > C, B = Math.cos(-J), j = Math.sin(-J), L = q * B - k * j, F = W * B - M * j, N = U * B - A * j, M = W * j + M * B, A = U * j + A * B, K = Y * j + K * B, q = L, W = F, U = N), J = Math.atan2(W, V), y.rotation = J * R, J && ($ = -C > J || J > C, B = Math.cos(-J), j = Math.sin(-J), q = q * B + G * j, F = W * B + V * j, V = W * -j + V * B, Q = U * -j + Q * B, W = F), $ && tt ? y.rotation = y.rotationX = 0 : $ && X ? y.rotation = y.rotationY = 0 : X && tt && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(q * q + W * W) * b + .5) / b, y.scaleY = (0 | Math.sqrt(V * V + M * M) * b + .5) / b, y.scaleZ = (0 | Math.sqrt(Q * Q + A * A) * b + .5) / b, y.skewX = 0, y.perspective = K ? 1 / (0 > K ? -K : K) : 0, y.x = E, y.y = D, y.z = z
                        }
                    } else if (!(Tt && !n && a.length && y.x === a[4] && y.y === a[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === H(t, "display", e))) {
                        var et = a.length >= 6, it = et ? a[0] : 1, nt = a[1] || 0, rt = a[2] || 0, st = et ? a[3] : 1;
                        y.x = a[4] || 0, y.y = a[5] || 0, u = Math.sqrt(it * it + nt * nt), d = Math.sqrt(st * st + rt * rt), p = it || nt ? Math.atan2(nt, it) * R : y.rotation || 0, f = rt || st ? Math.atan2(rt, st) * R + p : y.skewX || 0, g = u - Math.abs(y.scaleX || 0), m = d - Math.abs(y.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (w ? (u *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (d *= -1, f += 0 >= f ? 180 : -180)), v = (p - y.rotation) % 180, _ = (f - y.skewX) % 180, (void 0 === y.skewX || g > x || -x > g || m > x || -x > m || v > -T && T > v && !1 | v * b || _ > -T && T > _ && !1 | _ * b) && (y.scaleX = u, y.scaleY = d, y.rotation = p, y.skewX = f), Tt && (y.rotationX = y.rotationY = y.z = 0, y.perspective = P, y.scaleZ = 1)
                    }
                    y.zOrigin = S;
                    for (l in y) x > y[l] && y[l] > -x && (y[l] = 0)
                } else y = {
                    x: 0,
                    y: 0,
                    z: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    skewX: 0,
                    skewY: 0,
                    perspective: P,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    zOrigin: 0
                };
                return i && (t._gsTransform = y), y.svg = St && t instanceof St && t.parentNode instanceof St, y.svg && (Ot(t, H(t, bt, r, !1, "50% 50%") + "", y), _t = o.useSVGTransformAttr || Mt), y.xPercent = y.yPercent = 0, y
            }, Et = function (t) {
                var e, i, n = this.data, r = -n.rotation * I, s = r + n.skewX * I, o = 1e5,
                    a = (0 | Math.cos(r) * n.scaleX * o) / o, l = (0 | Math.sin(r) * n.scaleX * o) / o,
                    h = (0 | Math.sin(s) * -n.scaleY * o) / o, c = (0 | Math.cos(s) * n.scaleY * o) / o, u = this.t.style,
                    d = this.t.currentStyle;
                if (d) {
                    i = l, l = -h, h = -i, e = d.filter, u.filter = "";
                    var p, g, m = this.t.offsetWidth, v = this.t.offsetHeight, _ = "absolute" !== d.position,
                        x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                        b = n.x + m * n.xPercent / 100, T = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, g = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, b += p - (p * a + g * l), T += g - (p * h + g * c)), _ ? (p = m / 2, g = v / 2, x += ", Dx=" + (p - (p * a + g * l) + b) + ", Dy=" + (g - (p * h + g * c) + T) + ")") : x += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, x) : x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (_ && -1 === x.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !_) {
                        var C, S, P, k = 8 > f ? 1 : -1;
                        for (p = n.ieOffsetX || 0, g = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * m)) / 2 + T), ft = 0; 4 > ft; ft++) S = J[ft], C = d[S], i = -1 !== C.indexOf("px") ? parseFloat(C) : G(this.t, S, parseFloat(C), C.replace(y, "")) || 0, P = i !== n[S] ? 2 > ft ? -n.ieOffsetX : -n.ieOffsetY : 2 > ft ? p - n.ieOffsetX : g - n.ieOffsetY, u[S] = (n[S] = Math.round(i - P * (0 === ft || 2 === ft ? 1 : k))) + "px"
                    }
                }
            }, It = N.set3DTransformRatio = function (t) {
                var e, i, n, r, s, o, a, l, h, c, u, p, f, g, m, v, _, y, w, x, b, T, C, S = this.data, P = this.t.style,
                    k = S.rotation * I, M = S.scaleX, O = S.scaleY, A = S.scaleZ, E = S.x, R = S.y, D = S.z,
                    z = S.perspective;
                if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== A || z || D)) return void Rt.call(this, t);
                if (d) {
                    var L = 1e-4;
                    L > M && M > -L && (M = A = 2e-5), L > O && O > -L && (O = A = 2e-5), !z || S.z || S.rotationX || S.rotationY || (z = 0)
                }
                if (k || S.skewX) y = Math.cos(k), w = Math.sin(k), e = y, s = w, S.skewX && (k -= S.skewX * I, y = Math.cos(k), w = Math.sin(k), "simple" === S.skewType && (x = Math.tan(S.skewX * I), x = Math.sqrt(1 + x * x), y *= x, w *= x)), i = -w, o = y; else {
                    if (!(S.rotationY || S.rotationX || 1 !== A || z || S.svg)) return void(P[wt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + R + "px," + D + "px)" + (1 !== M || 1 !== O ? " scale(" + M + "," + O + ")" : ""));
                    e = o = 1, i = s = 0
                }
                u = 1, n = r = a = l = h = c = p = f = g = 0, m = z ? -1 / z : 0, v = S.zOrigin, _ = 1e5, k = S.rotationY * I, k && (y = Math.cos(k), w = Math.sin(k), h = u * -w, f = m * -w, n = e * w, a = s * w, u *= y, m *= y, e *= y, s *= y), k = S.rotationX * I, k && (y = Math.cos(k), w = Math.sin(k), x = i * y + n * w, b = o * y + a * w, T = c * y + u * w, C = g * y + m * w, n = i * -w + n * y, a = o * -w + a * y, u = c * -w + u * y, m = g * -w + m * y, i = x, o = b, c = T, g = C), 1 !== A && (n *= A, a *= A, u *= A, m *= A), 1 !== O && (i *= O, o *= O, c *= O, g *= O), 1 !== M && (e *= M, s *= M, h *= M, f *= M), v && (p -= v, r = n * p, l = a * p, p = u * p + v), S.svg && (r += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), l += S.yOrigin - (S.xOrigin * s + S.yOrigin * o)), r = (x = (r += E) - (r |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + r : r, l = (x = (l += R) - (l |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + l : l, p = (x = (p += D) - (p |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + p : p, P[wt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * _) / _, (0 | s * _) / _, (0 | h * _) / _, (0 | f * _) / _, (0 | i * _) / _, (0 | o * _) / _, (0 | c * _) / _, (0 | g * _) / _, (0 | n * _) / _, (0 | a * _) / _, (0 | u * _) / _, (0 | m * _) / _, r, l, p, z ? 1 + -p / z : 1].join(",") + ")"
            }, Rt = N.set2DTransformRatio = function (t) {
                var e, i, n, r, s, o, a, l, h, c, u, d = this.data, p = this.t, f = p.style, g = d.x, m = d.y;
                return !(d.rotationX || d.rotationY || d.z || d.force3D === !0 || "auto" === d.force3D && 1 !== t && 0 !== t) || d.svg && _t || !Tt ? (r = d.scaleX, s = d.scaleY, void(d.rotation || d.skewX || d.svg ? (e = d.rotation * I, i = e - d.skewX * I, n = 1e5, o = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -s, h = Math.cos(i) * s, d.svg && (g += d.xOrigin - (d.xOrigin * o + d.yOrigin * l), m += d.yOrigin - (d.xOrigin * a + d.yOrigin * h), u = 1e-6, u > g && g > -u && (g = 0), u > m && m > -u && (m = 0)), c = (0 | o * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | h * n) / n + "," + g + "," + m + ")", d.svg && _t ? p.setAttribute("transform", "matrix(" + c) : f[wt] = (d.xPercent || d.yPercent ? "translate(" + d.xPercent + "%," + d.yPercent + "%) matrix(" : "matrix(") + c) : f[wt] = (d.xPercent || d.yPercent ? "translate(" + d.xPercent + "%," + d.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + g + "," + m + ")")) : (this.setRatio = It, void It.call(this, t))
            };
        mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, i, n, s, a, l) {
                if (n._transform) return s;
                var h, c, u, d, p, f, g, m = n._transform = At(t, r, !0, l.parseTransform), v = t.style, _ = 1e-6,
                    y = yt.length, w = l, x = {};
                if ("string" == typeof w.transform && wt) u = L.style, u[wt] = w.transform, u.display = "block", u.position = "absolute", z.body.appendChild(L), h = At(L, null, !1), z.body.removeChild(L); else if ("object" == typeof w) {
                    if (h = {
                        scaleX: nt(null != w.scaleX ? w.scaleX : w.scale, m.scaleX),
                        scaleY: nt(null != w.scaleY ? w.scaleY : w.scale, m.scaleY),
                        scaleZ: nt(w.scaleZ, m.scaleZ),
                        x: nt(w.x, m.x),
                        y: nt(w.y, m.y),
                        z: nt(w.z, m.z),
                        xPercent: nt(w.xPercent, m.xPercent),
                        yPercent: nt(w.yPercent, m.yPercent),
                        perspective: nt(w.transformPerspective, m.perspective)
                    }, g = w.directionalRotation, null != g) if ("object" == typeof g) for (u in g) w[u] = g[u]; else w.rotation = g;
                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && (h.x = 0, h.xPercent = nt(w.x, m.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (h.y = 0, h.yPercent = nt(w.y, m.yPercent)), h.rotation = rt("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : m.rotation, m.rotation, "rotation", x), Tt && (h.rotationX = rt("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", x), h.rotationY = rt("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", x)), h.skewX = null == w.skewX ? m.skewX : rt(w.skewX, m.skewX), h.skewY = null == w.skewY ? m.skewY : rt(w.skewY, m.skewY), (c = h.skewY - m.skewY) && (h.skewX += c, h.rotation += c)
                }
                for (Tt && null != w.force3D && (m.force3D = w.force3D, f = !0), m.skewType = w.skewType || m.skewType || o.defaultSkewType, p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == w.scale || (h.scaleZ = 1); --y > -1;) i = yt[y], d = h[i] - m[i], (d > _ || -_ > d || null != w[i] || null != D[i]) && (f = !0, s = new dt(m, i, m[i], d, s), i in x && (s.e = x[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                return d = w.transformOrigin, d && m.svg && (Ot(t, d, h), s = new dt(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, s, (-1), "transformOrigin"), s.b = m.xOrigin, s.e = s.xs0 = h.xOrigin, s = new dt(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, s, (-1), "transformOrigin"), s.b = m.yOrigin, s.e = s.xs0 = h.yOrigin, d = "0 0px"), (d || Tt && p && m.zOrigin) && (wt ? (f = !0, i = bt, d = (d || H(t, i, r, !1, "50% 50%")) + "", s = new dt(v, i, 0, 0, s, (-1), "transformOrigin"), s.b = v[i], s.plugin = a, Tt ? (u = m.zOrigin, d = d.split(" "), m.zOrigin = (d.length > 2 && (0 === u || "0px" !== d[2]) ? parseFloat(d[2]) : u) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", s = new dt(m, "zOrigin", 0, 0, s, (-1), s.n), s.b = u, s.xs0 = s.e = m.zOrigin) : s.xs0 = s.e = d) : et(d + "", m)), f && (n._transformType = m.svg && _t || !p && 3 !== this._transformType ? 2 : 3), s
            }, prefix: !0
        }), mt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), mt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, s, o) {
                e = this.format(e);
                var a, l, h, c, u, d, p, f, g, m, v, _, y, w, x, b,
                    T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    C = t.style;
                for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = U(T[l])),
                    u = c = H(t, T[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), d = h = a[l], p = parseFloat(u), _ = u.substr((p + "").length), y = "=" === d.charAt(1), y ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), v = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), v = d.substr((f + "").length)), "" === v && (v = n[i] || _), v !== _ && (w = G(t, "borderLeft", p, _), x = G(t, "borderTop", p, _), "%" === v ? (u = 100 * (w / g) + "%", c = 100 * (x / m) + "%") : "em" === v ? (b = G(t, "borderLeft", 1, "em"), u = w / b + "em", c = x / b + "em") : (u = w + "px", c = x + "px"), y && (d = parseFloat(u) + f + v, h = parseFloat(c) + f + v)), o = pt(C, T[l], u + " " + c, d + " " + h, !1, "0px", o);
                return o
            }, prefix: !0, formatter: ht("0px 0px 0px 0px", !1, !0)
        }), mt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, s, o) {
                var a, l, h, c, u, d, p = "background-position", g = r || Y(t, null),
                    m = this.format((g ? f ? g.getPropertyValue(p + "-x") + " " + g.getPropertyValue(p + "-y") : g.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (d = H(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                    for (a = m.split(" "), l = v.split(" "), F.setAttribute("src", d), h = 2; --h > -1;) m = a[h], c = -1 !== m.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - F.width : t.offsetHeight - F.height, a[h] = c ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, s, o)
            }, formatter: et
        }), mt("backgroundSize", {defaultValue: "0 0", formatter: et}), mt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), mt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), mt("transformStyle", {prefix: !0}), mt("backfaceVisibility", {prefix: !0}), mt("userSelect", {prefix: !0}), mt("margin", {parser: ct("marginTop,marginRight,marginBottom,marginLeft")}), mt("padding", {parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")}), mt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, s, o) {
                var a, l, h;
                return 9 > f ? (l = t.currentStyle, h = 8 > f ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(H(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
            }
        }), mt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), mt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), mt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, s, o) {
                return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", r, !1, "0px") + " " + H(t, "borderTopStyle", r, !1, "solid") + " " + H(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
            }
        }), mt("borderWidth", {parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), mt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r) {
                var s = t.style, o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new dt(s, o, 0, 0, r, (-1), i, (!1), 0, s[o], e)
            }
        });
        var Dt = function (t) {
            var e, i = this.t, n = i.filter || H(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !H(this.data, "filter")) : (i.filter = n.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
        };
        mt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, s, o) {
                var a = parseFloat(H(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === H(t, "visibility", r) && 0 !== e && (a = 0), j ? s = new dt(l, "opacity", a, e - a, s) : (s = new dt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Dt), h && (s = new dt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
            }
        });
        var zt = function (t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Lt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : zt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        mt("className", {
            parser: function (t, e, n, s, o, a, l) {
                var h, c, u, d, p, f = t.getAttribute("class") || "", g = t.style.cssText;
                if (o = s._classNamePT = new dt(t, n, 0, 0, o, 2), o.setRatio = Lt, o.pr = -11, i = !0, o.b = f, c = Q(t, r), u = t._gsClassPT) {
                    for (d = {}, p = u.data; p;) d[p.p] = 1, p = p._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), s._tween._duration && (t.setAttribute("class", o.e), h = Z(t, c, Q(t), l, d), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = g, o = o.xfirst = s.parse(t, h.difs, o, a)), o
            }
        });
        var Ft = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s = this.t.style, o = a.transform.parse;
                if ("all" === this.e) s.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === o ? r = !0 : i = "transformOrigin" === i ? bt : a[i].p), zt(s, i);
                r && (zt(s, wt), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (mt("clearProps", {
            parser: function (t, e, n, r, s) {
                return s = new dt(t, n, 0, 0, s, 2), s.setRatio = Ft, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
            }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ft = l.length; ft--;) vt(l[ft]);
        l = o.prototype, l._firstPT = null, l._onInitTween = function (t, e, a) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = Y(t, ""), s = this._overwriteProps;
            var l, d, f, g, m, v, _, y, w, b = t.style;
            if (c && "" === b.zIndex && (l = H(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (g = b.cssText, l = Q(t, r), b.cssText = g + ";" + e, l = Z(t, l, Q(t)).difs, !j && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = g), this._firstPT = d = this.parse(t, e, null), this._transformType) {
                for (w = 3 === this._transformType, wt ? u && (c = !0, "" === b.zIndex && (_ = H(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, f = d; f && f._next;) f = f._next;
                y = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = w && Tt ? It : wt ? Rt : Et, y.data = this._transform || At(t, r, !0), s.pop()
            }
            if (i) {
                for (; d;) {
                    for (v = d._next, f = g; f && f.pr > d.pr;) f = f._next;
                    (d._prev = f ? f._prev : m) ? d._prev._next = d : g = d, (d._next = f) ? f._prev = d : m = d, d = v
                }
                this._firstPT = g
            }
            return !0
        }, l.parse = function (t, e, i, s) {
            var o, l, c, u, d, p, f, g, m, v, _ = t.style;
            for (o in e) p = e[o], l = a[o], l ? i = l.parse(t, p, o, this, i, s, e) : (d = H(t, o, r) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && T.test(p) ? (m || (p = at(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pt(_, o, d, p, !0, "transparent", i, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (c = parseFloat(d), f = c || 0 === c ? d.substr((c + "").length) : "", ("" === d || "auto" === d) && ("width" === o || "height" === o ? (c = tt(t, o, r), f = "px") : "left" === o || "top" === o ? (c = V(t, o, r), f = "px") : (c = "opacity" !== o ? 0 : 1, f = "")), v = m && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), g = p.replace(y, "")) : (u = parseFloat(p), g = m ? p.substr((u + "").length) || "" : ""), "" === g && (g = o in n ? n[o] : f), p = u || 0 === u ? (v ? u + c : u) + g : e[o], f !== g && "" !== g && (u || 0 === u) && c && (c = G(t, o, c, f), "%" === g ? (c /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = c + "%")) : "em" === g ? c /= G(t, o, 1, "em") : "px" !== g && (u = G(t, o, u, g), g = "px"), v && (u || 0 === u) && (p = u + c + g)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== _[o] && (p || "NaN" != p + "" && null != p) ? (i = new dt(_, o, u || c || 0, 0, i, (-1), o, (!1), 0, d, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : d) : $("invalid " + o + " tween value: " + e[o]) : (i = new dt(_, o, c, u - c, i, 0, o, h !== !1 && ("px" === g || "zIndex" === o), 0, d, p), i.xs0 = g)) : i = pt(_, o, d, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
            return i
        }, l.setRatio = function (t) {
            var e, i, n, r = this._firstPT, s = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type) if (1 === r.type) if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function (t) {
            this._transform = this._transform || At(this._target, r, !0), this._transformType = this._transform.svg && _t || !t && 3 !== this._transformType ? 2 : 3
        };
        var Nt = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function (t, e, i) {
            var n = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Nt, n.data = this
        }, l._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function (e) {
            var i, n, r, s = e;
            if (e.autoAlpha || e.alpha) {
                s = {};
                for (n in e) s[n] = e[n];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
        };
        var Bt = function (t, e, i) {
            var n, r, s, o;
            if (t.slice) for (r = t.length; --r > -1;) Bt(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(Q(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Bt(s, e, i)
        };
        return o.cascadeTo = function (t, i, n) {
            var r, s, o, a = e.to(t, i, n), l = [a], h = [], c = [], u = [], d = e._internals.reservedProps;
            for (t = a._targets || a.target, Bt(t, h, u), a.render(i, !0), Bt(t, c), a.render(0, !0), a._enabled(!0), r = u.length; --r > -1;) if (s = Z(u[r], h[r], c[r]), s.firstMPT) {
                s = s.difs;
                for (o in n) d[o] && (s[o] = n[o]);
                l.push(e.to(u[r], i, s))
            }
            return l
        }, t.activate([o]), o
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = 1;
            for (s = r.length; --s > -1;) for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return !1
        }, e._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), _gsScope._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.3.3", init: function (t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute) return !1;
            this._target = t, this._proxy = {}, this._start = {}, this._end = {};
            for (i in e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
            return !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + "")
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
            for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > h || -h > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, o = 2 * Math.PI, a = Math.PI / 2,
            l = s._class, h = function (e, i) {
                var n = l("easing." + e, function () {
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            }, c = t.register || function () {
            }, u = function (t, e, i, n) {
                var r = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                return c(r, t), r
            }, d = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, p = function (e, i) {
                var n = l("easing." + e, function (t) {
                    this._howSag = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._howSag
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function (t) {
                    return new n(t)
                }, n
            }, f = u("Back", p("BackOut", function (t) {
                return (t -= 1) * t * ((this._howSag + 1) * t + this._howSag) + 1
            }), p("BackIn", function (t) {
                return t * t * ((this._howSag + 1) * t - this._howSag)
            }), p("BackInOut", function (t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), g = l("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._howSag = (1 - t) / 2, this._p2 = t, this._p3 = this._howSag + this._p2, this._calcEnd = i === !0
            }, !0), m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._howSag > t ? this._calcEnd ? 1 - (t = 1 - t / this._howSag) * t : e - (t = 1 - t / this._howSag) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._howSag) * t : e + (t - e) * (t = (t - this._p3) / this._howSag) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), m.config = g.config = function (t, e, i) {
            return new g(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._howSag = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, n, r, s, o, a, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = m ? m.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : .5 > i ? (s = 2 * i, r = .5 * s * s * v) : (s = 2 * (1 - i), r = .5 * s * s * v), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                x: i,
                y: n
            };
            for (h.sort(function (t, e) {
                return t.x - e.x
            }), a = new d(1, 1, null), p = u; --p > -1;) o = h[p], a = new d(o.x, o.y, a);
            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", h("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", h("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function (e, i, n) {
            var r = l("easing." + e, function (t, e) {
                this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
            }, !0), s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", n("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
        }, .3), n("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
        }, .3), n("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
        }, .45)), u("Expo", h("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", h("SineOut", function (t) {
            return Math.sin(t * a)
        }), h("SineIn", function (t) {
            return -Math.cos(t * a) + 1
        }), h("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, o, a, l = function (t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
            return r
        }, h = l("com.greensock"), c = 1e-10, u = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, d = function () {
        }, p = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), f = {}, g = function (n, r, s, o) {
            this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
            var a = [];
            this.check = function (h) {
                for (var c, u, d, p, m = r.length, v = m; --m > -1;) (c = f[r[m]] || new g(r[m], [])).gsClass ? (a[m] = c.gsClass, v--) : h && c.sc.push(this);
                if (0 === v && s) for (u = ("com.greensock." + n).split("."), d = u.pop(), p = l(u.join("."))[d] = this.gsClass = s.apply(s, a), o && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return p
                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
            }, this.check(!0)
        }, m = t._gsDefine = function (t, e, i, n) {
            return new g(t, e, i, n)
        }, v = h._class = function (t, e, i) {
            return e = e || function () {
            }, m(t, [], function () {
                return e
            }, i), e
        };
        m.globals = i;
        var _ = [0, 0, 1, 1], y = [], w = v("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
        }, !0), x = w.map = {}, b = w.register = function (t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;) for (s = l[c], r = n ? v("easing." + s, null, !0) : h.easing[s] || {}, o = u.length; --o > -1;) a = u[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for (s = w.prototype, s._calcEnd = !1, s.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, b(new w(null, null, 1, r), s, "easeOut", !0), b(new w(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new w(null, null, 3, r), s, "easeInOut");
        x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s, l, h = this._listeners[t], c = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
            h.splice(c, 0, {c: e, s: i, up: n, pr: r}), this !== o || a || o.wake()
        }, s.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var C = t.requestAnimationFrame, S = t.cancelAnimationFrame, P = Date.now || function () {
            return (new Date).getTime()
        }, k = P();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !C;) C = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, n, r, s, l, h = this, u = P(), p = e !== !1 && C, f = 500, g = 33, m = function (t) {
                var e, o, a = P() - k;
                a > f && (u += a - g), k += a, h.time = (k - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(m)), o && h.dispatchEvent("tick")
            };
            T.call(h), h.time = h.frame = 0, h.tick = function () {
                m(!0)
            }, h.lagSmoothing = function (t, e) {
                f = t || 1 / c, g = Math.min(e, f, 0)
            }, h.sleep = function () {
                null != r && (p && S ? S(r) : clearTimeout(r), n = d, r = null, h === o && (a = !1))
            }, h.wake = function () {
                null !== r ? h.sleep() : h.frame > 10 && (k = P() - f + 5), n = 0 === i ? d : p && C ? C : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === o && (a = !0), m(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), p = t, void h.fps(i)) : p
            }, h.fps(t), setTimeout(function () {
                p && (!r || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var M = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                a || o.wake();
                var i = this.vars.useFrames ? $ : q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = M.ticker = new h.Ticker, s = M.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var O = function () {
            a && P() - k > 2e3 && o.wake(), setTimeout(O, 2e3)
        };
        O(), s.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function () {
        }, s.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function (t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function () {
            return this._enabled(!1, !1)
        }, s.kill = function (t, e) {
            return this._kill(t, e), this
        }, s._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function (t, e, i) {
            if (a || o.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), D.length && W())
            }
            return this
        }, s.progress = s.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function (t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || o.wake();
                var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var A = v("core.SimpleTimeline", function (t) {
            M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = A.prototype = new M, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function () {
            return a || o.wake(), this._totalTime
        };
        var E = v("TweenLite", function (e, i, n) {
            if (M.call(this, i, n), this.render = E.prototype.render, null == e) throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : E.selector(e) || e;
            var r, s, o,
                a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? X[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = o = u(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(u(s))) : (this._siblings[r] = U(s, this, !1), 1 === l && this._siblings[r].length > 1 && H(s, this, null, 1, this._siblings[r])) : (s = o[r--] = E.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && H(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
        }, !0), I = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, R = function (t, e) {
            var i, n = {};
            for (i in t) j[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        s = E.prototype = new M, s.constructor = E, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, E.version = "1.14.2", E.defaultEase = s._ease = new w(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = !0, E.lagSmoothing = function (t, e) {
            o.lagSmoothing(t, e)
        }, E.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var D = [], z = {}, L = E._internals = {isArray: p, isSelector: I, lazyTweens: D}, F = E._plugins = {},
            N = L.tweenLookup = {}, B = 0, j = L.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            }, X = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
            $ = M._rootFramesTimeline = new A, q = M._rootTimeline = new A, W = L.lazyRender = function () {
                var t, e = D.length;
                for (z = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                D.length = 0
            };
        q._startTime = o.time, $._startTime = o.frame, q._active = $._active = !0, setTimeout(W, 1), M._updateRoot = E.render = function () {
            var t, e, i;
            if (D.length && W(), q.render((o.time - q._startTime) * q._timeScale, !1, !1), $.render((o.frame - $._startTime) * $._timeScale, !1, !1), D.length && W(), !(o.frame % 120)) {
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = q._first, (!i || i._paused) && E.autoSleep && !$._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", M._updateRoot);
        var U = function (t, e, i) {
            var n, r, s = t._gsTweenID;
            if (N[s || (t._gsTweenID = s = "t" + B++)] || (N[s] = {
                target: t,
                tweens: []
            }), e && (n = N[s].tweens, n[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
            return N[s].tweens
        }, Y = function (t, e, i, n) {
            var r, s, o = t.vars.onOverwrite;
            return o && (r = o(t, e, i, n)), o = E.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
        }, H = function (t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || n >= 4) {
                for (l = r.length, s = 0; l > s; s++) if ((a = r[s]) !== e) a._gc || Y(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n) break;
                return o
            }
            var h, u = e._startTime + c, d = [], p = 0, f = 0 === e._duration;
            for (s = r.length; --s > -1;) (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || G(e, 0, f), 0 === G(a, h, f) && (d[p++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && 2e-10 >= u - a._startTime || (d[p++] = a)));
            for (s = p; --s > -1;) if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !Y(a, e)) continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        }, G = function (t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                n = n._timeline
            }
            return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
        };
        s._init = function () {
            var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender,
                h = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null; else if (0 !== a) return
            } else if (s.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (n in s) j[n] && "autoCSS" !== n || (i[n] = s[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h, s.easeParams) : x[h] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function (e, i, n, r) {
            var s, o, a, l, h, c;
            if (null == e) return !1;
            z[e._gsTweenID] && W(), this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && R(this.vars, e);
            for (s in this.vars) {
                if (c = this.vars[s], j[s]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this)); else if (F[s] && (l = new F[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: l._priority
                    }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[s] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: s,
                    f: "function" == typeof e[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && H(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), a)
        }, s.render = function (t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : c); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0 && h !== c) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : c)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l, d = this._easeType, p = this._easePower;
                (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, D.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
            }
        }, s._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
            var n, r, s, o, a, l, h, c, u;
            if ((p(e) || I(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n]) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h) a[s] && (u || (u = []), u.push(s));
                        if (!Y(this, i, e, u)) return !1
                    }
                    for (s in h) (o = a[s]) && (o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function () {
            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, s._enabled = function (t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; --i > -1;) this._siblings[i] = U(n[i], this, !0); else this._siblings = U(this.target, this, !0)
            }
            return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, E.to = function (t, e, i) {
            return new E(t, e, i)
        }, E.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
        }, E.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
        }, E.delayedCall = function (t, e, i, n, r) {
            return new E(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, E.set = function (t, e) {
            return new E(t, 0, e)
        }, E.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : E.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || I(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;) for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
            } else for (n = U(t).concat(), i = n.length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, E.killTweensOf = E.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = E.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var V = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
        }, !0);
        if (s = V.prototype, V.version = "1.10.1", V.API = 2, s._firstPT = null, s._addTween = function (t, e, i, n, r, s) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: o,
                f: "function" == typeof t[e],
                n: r || e,
                r: s
            }, a._next && (a._next._prev = a), a) : void 0
        }, s.setRatio = function (t) {
            for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, s._kill = function (t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, s._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, E._onPluginEvent = function (t, e) {
            var i, n, r, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                }
                a = e._firstPT = r
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, V.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === V.API && (F[(new t[e])._propName] = t[e]);
            return !0
        }, m.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                V.call(this, i, n), this._overwriteProps = r || []
            }, t.global === !0), a = o.prototype = new V(i);
            a.constructor = o, o.API = t.API;
            for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, V.activate([o]), o
        }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (s in f) f[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), !function (t, e, i, n) {
    function r(e, i) {
        this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this.drag = t.extend({}, d), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(r.Plugins, t.proxy(function (t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Pipe, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function s(t) {
        if (t.touches !== n) return {x: t.touches[0].pageX, y: t.touches[0].pageY};
        if (t.touches === n) {
            if (t.pageX !== n) return {x: t.pageX, y: t.pageY};
            if (t.pageX === n) return {x: t.clientX, y: t.clientY}
        }
    }

    function o(t) {
        var e, n, r = i.createElement("div"), s = t;
        for (e in s) if (n = s[e], "undefined" != typeof r.style[n]) return r = null, [n, e];
        return [!1]
    }

    function a() {
        return o(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return o(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function h() {
        return o(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function c() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function u() {
        return e.navigator.msPointerEnabled
    }

    var d, p, f;
    d = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, p = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, f = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, r.Plugins = {}, r.Pipe = [{
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = this._clones, e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t, e, i = this._clones, n = this._items,
                r = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(r / 2); e > t; t++) r > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t, e, i, n = this.settings.rtl ? 1 : -1, r = (this.width() / this.settings.items).toFixed(3), s = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : r * t) * n, this._coordinates.push(s)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var e, i, n = (this.width() / this.settings.items).toFixed(3), r = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(r), r = {width: this.settings.autoWidth ? "auto" : n - this.settings.margin}, r[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
                return t > 1
            }).length > 0) for (e = 0, i = this._coordinates.length; i > e; e++) r.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(r); else this.$stage.children().css(r)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, n, r = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s, a = o + this.width() * r, l = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], r.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, r;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, r = this.$element.children(i).width(), e.length && 0 >= r) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, r.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, r = null;
        i ? (t.each(i, function (t) {
            e >= t && t > n && (n = Number(t))
        }), r = t.extend({}, this.options, i[n]), delete r.responsive, r.responsiveClass && this.$element.attr("class", function (t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + n)) : r = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, r.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, r.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), r = {}; i > e;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(r), e++;
        this._invalidated = {}
    }, r.prototype.width = function (t) {
        switch (t = t || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, r.prototype.eventsCall = function () {
        this.e._onDragStart = t.proxy(function (t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function (t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function (t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function (t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function (t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function (t) {
            this.preventClick(t)
        }, this)
    }, r.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, r.prototype.eventsRouter = function (t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, r.prototype.internalEvents = function () {
        var i = (c(), u());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, r.prototype.onDragStart = function (n) {
        var r, o, a, l;
        if (r = n.originalEvent || n || e.event, 3 === r.which || this.state.isTouch) return !1;
        if ("mousedown" === r.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, o = s(r).x, a = s(r).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = o - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = o - this.drag.startX, this.drag.targetEl = r.target || r.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this))
    }, r.prototype.onDragMove = function (t) {
        var i, r, o, a, l, h;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, r = s(i).x, o = s(i).y, this.drag.currentX = r - this.drag.startX, this.drag.currentY = o - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, r.prototype.onDragEnd = function (e) {
        var n, r, s;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, r = Math.abs(this.drag.distance), (r > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, r.prototype.removeClick = function (i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
            t(i).off("click.preventClick")
        }, 300)
    }, r.prototype.preventClick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, r.prototype.getTransformProperty = function () {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, r.prototype.closest = function (e) {
        var i = -1, n = 30, r = this.width(), s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function (t, o) {
            return e > o - n && o + n > e ? i = t : this.op(e, "<", o) && this.op(e, ">", s[t + 1] || o - r) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
    }, r.prototype.animate = function (e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: e + "px"}) : this.$stage.animate({left: e}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, r.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (t) {
        this._invalidated[t] = !0
    }, r.prototype.reset = function (t) {
        t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (e, i) {
        var r = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > r ? n : e = this._clones.length ? (e % r + r) % r : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, r.prototype.relative = function (t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function (t) {
        var e, i, n, r = 0, s = this.settings;
        if (t) return this._items.length - 1;
        if (!s.loop && s.center) e = this._items.length - 1; else if (s.loop || s.center) if (s.loop || s.center) e = this._items.length + s.items; else {
            if (!s.autoWidth && !s.merge) throw"Can not detect maximum absolute position.";
            for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width(); (n = this.coordinates(r)) && !(n * revert >= i);) e = ++r
        } else e = this._items.length - s.items;
        return e
    }, r.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function (e) {
        var i = this._clones.length / 2, r = i + this._items.length, s = function (t) {
            return t % 2 === 0 ? r + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function (t, e) {
            return s(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? s(i) : null
        })
    }, r.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, r.prototype.coordinates = function (e) {
        var i = null;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, r.prototype.duration = function (t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, r.prototype.to = function (i, n) {
        if (this.settings.loop) {
            var r = i - this.relative(this.current()), s = this.current(), o = this.current(), a = this.current() + r,
                l = 0 > o - a, h = this._clones.length + this._items.length;
            a < this.settings.items && l === !1 ? (s = o + this._items.length, this.reset(s)) : a >= h - this.settings.items && l === !0 && (s = o - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
                this.speed(this.duration(this.current(), s + r, n)), this.current(s + r), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
    }, r.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.transitionEnd = function (t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, r.prototype.viewport = function () {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth) n = e.innerWidth; else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw"Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, r.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (t, e) {
        e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, r.prototype.remove = function (t) {
        t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.addTriggerableEvents = function () {
        var e = t.proxy(function (e, i) {
            return t.proxy(function (t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function (t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, r.prototype.watchVisibility = function () {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function n() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }

        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
    }, r.prototype.preloadAutoWidthImages = function (e) {
        var i, n, r, s;
        i = 0, n = this, e.each(function (o, a) {
            r = t(a), s = new Image, s.onload = function () {
                i++, r.attr("src", s.src), r.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
            }, s.src = r.attr("src") || r.attr("data-src") || r.attr("data-src-retina")
        })
    }, r.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var n in this._plugins) this._plugins[n].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"),
            t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, r.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : i > t;
            case">":
                return n ? i > t : t > i;
            case">=":
                return n ? i >= t : t >= i;
            case"<=":
                return n ? t >= i : i >= t
        }
    }, r.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, r.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, r.prototype.trigger = function (e, i, n) {
        var r = {item: {count: this._items.length, index: this.current()}},
            s = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            o = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, r, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(o)
        }), this.$element.trigger(o), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, o)), o
    }, r.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, r.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, r.prototype.browserSupport = function () {
        if (this.support3d = h(), this.support3d) {
            this.transformVendor = l();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function (e) {
        return this.each(function () {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new r(this, e))
        })
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + r, o = this._core.clones().length, a = t.proxy(function (t, e) {
                    this.load(e)
                }, this); r++ < n;) this.load(o / 2 + this._core.relative(s)), o && t.each(this._core.clones(this._core.relative(s++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {lazyLoad: !1}, i.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), r = n && n.find(".owl-lazy");
        !r || t.inArray(n.get(0), this._loaded) > -1 || (r.each(t.proxy(function (i, n) {
            var r, s = t(n), o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: o}, "lazy")
            }, this)).attr("src", o) : (r = new Image, r.onload = t.proxy(function () {
                s.css({"background-image": "url(" + o + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this), r.src = o)
        }, this)), this._loaded.push(n.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function (t) {
    var e = function (i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
    var n = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function (t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, n.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube", n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight, o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (n = o.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else {
            if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        n = n[6], this._videos[o] = {
            type: i,
            id: n,
            width: r,
            height: s
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, n.prototype.thumbnail = function (e, i) {
        var n, r, s, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"), l = "src", h = "", c = this._core.settings, u = function (t) {
                r = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(r)
            };
        return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t[0].thumbnail_large, u(s)
            }
        }))
    }, n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, n.prototype.play = function (e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, n, r = t(e.target || e.srcElement), s = r.closest("." + this._core.settings.itemClass),
            o = this._videos[s.attr("data-video")], a = o.width || "100%", l = o.height || this._core.$stage.height();
        "youtube" === o.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type && (i = '<iframe src="http://player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), r.after(n)
    }, n.prototype.isInFullScreen = function () {
        var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(n && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, n.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                this.swapping = "translated" == t.type
            }, this), "translate.owl.carousel": t.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({left: e + "px"}).addClass("animated owl-animated-out").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && r.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, r.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
    var n = function (e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, n.prototype.play = function () {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, n.prototype.stop = function () {
        e.clearInterval(this.interval)
    }, n.prototype.pause = function () {
        e.clearInterval(this.interval)
    }, n.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document), function (t) {
    "use strict";
    var e = function (i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "change.owl.carousel": t.proxy(function (t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(), i = this._core.maximum(), n = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                }
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && this.draw()
            }, this), "refreshed.owl.carousel": t.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function () {
        var e, i, n = this._core.settings;
        n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
            this.next(n.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function () {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i, n = this._core.settings, r = this._core.clones().length / 2, s = r + this._core.items().length,
            o = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy) for (this._pages = [], t = r, e = 0, i = 0; s > t; t++) (e >= o || 0 === e) && (this._pages.push({
            start: t - r,
            end: t - r + o - 1
        }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function () {
        var e, i, n = "", r = this._core.settings,
            s = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!r.nav || r.loop || r.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(r.nav), this._controls.$next.toggle(r.nav), r.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, r.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(n)
            } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(r.dots)
    }, e.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function (t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function (e) {
        var i, n, r = this._core.settings;
        return "page" == r.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += r.slideBy : i -= r.slideBy), i
    }, e.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function (e, i, n) {
        var r;
        n ? t.proxy(this._overrides.to, this._core)(e, i) : (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    "use strict";
    var i = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
            var t = e.location.hash.substring(1), i = this._core.$stage.children(),
                n = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(n, !1, !0)
        }, this))
    };
    i.Defaults = {URLhashListener: !1}, i.prototype.destroy = function () {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document), function (t) {
    var e, i, n, r, s, o, a, l = "Close", h = "BeforeClose", c = "AfterClose", u = "BeforeAppend", d = "MarkupParse",
        p = "Open", f = "Change", g = "mfp", m = "." + g, v = "mfp-ready", _ = "mfp-removing", y = "mfp-prevent-close",
        w = function () {
        }, x = !!window.jQuery, b = t(window), T = function (t, i) {
            e.ev.on(g + t + m, i)
        }, C = function (e, i, n, r) {
            var s = document.createElement("div");
            return s.className = "mfp-" + e, n && (s.innerHTML = n), r ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
        }, S = function (i, n) {
            e.ev.triggerHandler(g + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
        }, P = function (i) {
            return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn
        }, k = function () {
            t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e)
        }, M = function () {
            var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;) if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    w.prototype = {
        constructor: w, init: function () {
            var i = navigator.appVersion;
            e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = M(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = t(document), e.popupsCache = {}
        }, open: function (i) {
            n || (n = t(document.body));
            var s;
            if (i.isObj === !1) {
                e.items = i.items.toArray(), e.index = 0;
                var a, l = i.items;
                for (s = 0; l.length > s; s++) if (a = l[s], a.parsed && (a = a.el[0]), a === i.el[0]) {
                    e.index = s;
                    break
                }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], o = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : r, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = C("bg").on("click" + m, function () {
                e.close()
            }), e.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function (t) {
                e._checkIfClose(t.target) && e.close()
            }), e.container = C("container", e.wrap)), e.contentContainer = C("content"), e.st.preloader && (e.preloader = C("preloader", e.container, e.st.tLoading));
            var h = t.magnificPopup.modules;
            for (s = 0; h.length > s; s++) {
                var c = h[s];
                c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
            }
            S("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (T(d, function (t, e, i, n) {
                i.close_replaceWith = P(n.type)
            }), o += " mfp-close-btn-in") : e.wrap.append(P())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && r.on("keyup" + m, function (t) {
                27 === t.keyCode && e.close()
            }), b.on("resize" + m, function () {
                e.updateSize()
            }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
            var u = e.wH = b.height(), f = {};
            if (e.fixedContentPos && e._hasScrollBar(u)) {
                var g = e._getScrollbarSize();
                g && (f.marginRight = g)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var _ = e.st.mainClass;
            return e.isIE7 && (_ += " mfp-ie7"), _ && e._addClassToMFP(_), e.updateItemHTML(), S("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                e.content ? (e._addClassToMFP(v), e._setFocus()) : e.bgOverlay.addClass(v), r.on("focusin" + m, e._onFocusIn)
            }, 16), e.isOpen = !0, e.updateSize(u), S(p), i
        }, close: function () {
            e.isOpen && (S(h), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(_), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        }, _close: function () {
            S(l);
            var i = _ + " " + v + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var n = {marginRight: ""};
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
            }
            r.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, S(c)
        }, updateSize: function (t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n
            } else e.wH = t || b.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), S("Resize")
        }, updateItemHTML: function () {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (S("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                var r = !!e.st[n] && e.st[n].markup;
                S("FirstMarkupParse", r), e.currTemplate[n] = !r || t(r)
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var o = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(o, n), i.preloaded = !0, S(f, i), s = i.type, e.container.prepend(e.contentContainer), S("AfterChange")
        }, appendContent: function (t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(P()) : e.content = t : e.content = "", S(u), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        }, parseEl: function (i) {
            var n, r = e.items[i];
            if (r.tagName ? r = {el: t(r)} : (n = r.type, r = {data: r, src: r.src}), r.el) {
                for (var s = e.types, o = 0; s.length > o; o++) if (r.el.hasClass("mfp-" + s[o])) {
                    n = s[o];
                    break
                }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
            }
            return r.type = n || e.st.type || "inline", r.index = i, r.parsed = !0, e.items[i] = r, S("ElementParse", r), e.items[i]
        }, addGroup: function (t, i) {
            var n = function (n) {
                n.mfpEl = this, e._openClick(n, t, i)
            };
            i || (i = {});
            var r = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? t.off(r).on(r, i.delegate, n) : (i.items = t, t.off(r).on(r, n)))
        }, _openClick: function (i, n, r) {
            var s = void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick;
            if (s || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var o = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                if (o) if (t.isFunction(o)) {
                    if (!o.call(e)) return !0
                } else if (o > b.width()) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), r.el = t(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), e.open(r)
            }
        }, updateStatus: function (t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var r = {status: t, text: n};
                S("UpdateStatus", r), t = r.status, n = r.text, e.preloader.html(n), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        }, _checkIfClose: function (i) {
            if (!t(i).hasClass(y)) {
                var n = e.st.closeOnContentClick, r = e.st.closeOnBgClick;
                if (n && r) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return !0
                } else if (r && t.contains(document, i)) return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (e.isIE7 ? r.height() : document.body.scrollHeight) > (t || b.height())
        }, _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        }, _onFocusIn: function (i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        }, _parseMarkup: function (e, i, n) {
            var r;
            n.data && (i = t.extend(n.data, i)), S(d, [e, i, n]), t.each(i, function (t, i) {
                if (void 0 === i || i === !1) return !0;
                if (r = t.split("_"), r.length > 1) {
                    var n = e.find(m + "-" + r[0]);
                    if (n.length > 0) {
                        var s = r[1];
                        "replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(r[1], i)
                    }
                } else e.find(m + "-" + t).html(i)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function (e, i) {
            return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, t.fn.magnificPopup = function (i) {
        k();
        var n = t(this);
        if ("string" == typeof i) if ("open" === i) {
            var r, s = x ? n.data("magnificPopup") : n[0].magnificPopup, o = parseInt(arguments[1], 10) || 0;
            s.items ? r = s.items[o] : (r = n, s.delegate && (r = r.find(s.delegate)), r = r.eq(o)), e._openClick({mfpEl: r}, n, s)
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1)); else i = t.extend(!0, {}, i), x ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n
    };
    var O, A, E, I = "inline", R = function () {
        E && (A.after(E.addClass(O)).detach(), E = null)
    };
    t.magnificPopup.registerModule(I, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                e.types.push(I), T(l + "." + I, function () {
                    R()
                })
            }, getInline: function (i, n) {
                if (R(), i.src) {
                    var r = e.st.inline, s = t(i.src);
                    if (s.length) {
                        var o = s[0].parentNode;
                        o && o.tagName && (A || (O = r.hiddenClass, A = C(O), O = "mfp-" + O), E = s.after(A).detach().removeClass(O)), e.updateStatus("ready")
                    } else e.updateStatus("error", r.tNotFound), s = t("<div>");
                    return i.inlineElement = s, s
                }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
            }
        }
    });
    var D, z = "ajax", L = function () {
        D && n.removeClass(D)
    }, F = function () {
        L(), e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(z, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                e.types.push(z), D = e.st.ajax.cursor, T(l + "." + z, F), T("BeforeChange." + z, F)
            }, getAjax: function (i) {
                D && n.addClass(D), e.updateStatus("loading");
                var r = t.extend({
                    url: i.src, success: function (n, r, s) {
                        var o = {data: n, xhr: s};
                        S("ParseAjax", o), e.appendContent(t(o.data), z), i.finished = !0, L(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass(v)
                        }, 16), e.updateStatus("ready"), S("AjaxContentAdded")
                    }, error: function () {
                        L(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(r), ""
            }
        }
    });
    var N, B = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var t = e.st.image, i = ".image";
                e.types.push("image"), T(p + i, function () {
                    "image" === e.currItem.type && t.cursor && n.addClass(t.cursor)
                }), T(l + i, function () {
                    t.cursor && n.removeClass(t.cursor), b.off("resize" + m)
                }), T("Resize" + i, e.resizeImage), e.isLowIE && T("AfterChange", e.resizeImage)
            }, resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (t) {
                var i = 0, n = t.img[0], r = function (s) {
                    N && clearInterval(N), N = setInterval(function () {
                        return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(N), i++, void(3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
                    }, s)
                };
                r(1);
            }, getImage: function (i, n) {
                var r = 0, s = function () {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, S("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(s, 100) : o()))
                }, o = function () {
                    i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, a = e.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var h = document.createElement("img");
                    h.className = "mfp-img", i.img = t(h).on("load.mfploader", s).on("error.mfploader", o), h.src = i.src, l.is("img") && (i.img = i.img.clone()), h = i.img[0], h.naturalWidth > 0 ? i.hasSize = !0 : h.width || (i.hasSize = !1)
                }
                return e._parseMarkup(n, {
                    title: B(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
            }
        }
    });
    var j, X = function () {
        return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, i = e.st.zoom, n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var r, s, o = i.duration, a = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            n = "all " + i.duration / 1e3 + "s " + i.easing, r = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, s = "transition";
                        return r["-webkit-" + s] = r["-moz-" + s] = r["-o-" + s] = r[s] = n, e.css(r), e
                    }, c = function () {
                        e.content.css("visibility", "visible")
                    };
                    T("BuildControls" + n, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void c();
                            s = a(t), s.css(e._getOffset()), e.wrap.append(s), r = setTimeout(function () {
                                s.css(e._getOffset(!0)), r = setTimeout(function () {
                                    c(), setTimeout(function () {
                                        s.remove(), t = s = null, S("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), T(h + n, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.st.removalDelay = o, !t) {
                                if (t = e._getItemToZoom(), !t) return;
                                s = a(t)
                            }
                            s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function () {
                                s.css(e._getOffset())
                            }, 16)
                        }
                    }), T(l + n, function () {
                        e._allowZoom() && (c(), s && s.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === e.currItem.type
            }, _getItemToZoom: function () {
                return !!e.currItem.hasSize && e.currItem.img
            }, _getOffset: function (i) {
                var n;
                n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var r = n.offset(), s = parseInt(n.css("padding-top"), 10), o = parseInt(n.css("padding-bottom"), 10);
                r.top -= t(window).scrollTop() - s;
                var a = {width: n.width(), height: (x ? n.innerHeight() : n[0].offsetHeight) - o - s};
                return X() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
            }
        }
    });
    var $ = "iframe", q = "//about:blank", W = function (t) {
        if (e.currTemplate[$]) {
            var i = e.currTemplate[$].find("iframe");
            i.length && (t || (i[0].src = q), e.isIE8 && i.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule($, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                e.types.push($), T("BeforeChange", function (t, e, i) {
                    e !== i && (e === $ ? W() : i === $ && W(!0))
                }), T(l + "." + $, function () {
                    W()
                })
            }, getIframe: function (i, n) {
                var r = i.src, s = e.st.iframe;
                t.each(s.patterns, function () {
                    return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                });
                var o = {};
                return s.srcAction && (o[s.srcAction] = r), e._parseMarkup(n, o, i), e.updateStatus("ready"), n
            }
        }
    });
    var U = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t
    }, Y = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var i = e.st.gallery, n = ".mfp-gallery", s = Boolean(t.fn.mfpFastClick);
                return e.direction = !0, !(!i || !i.enabled) && (o += " mfp-gallery", T(p + n, function () {
                    i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function () {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), r.on("keydown" + n, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), T("UpdateStatus" + n, function (t, i) {
                    i.text && (i.text = Y(i.text, e.currItem.index, e.items.length))
                }), T(d + n, function (t, n, r, s) {
                    var o = e.items.length;
                    r.counter = o > 1 ? Y(i.tCounter, s.index, o) : ""
                }), T("BuildControls" + n, function () {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup,
                            r = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            a = s ? "mfpFastClick" : "click";
                        r[a](function () {
                            e.prev()
                        }), o[a](function () {
                            e.next()
                        }), e.isIE7 && (C("b", r[0], !1, !0), C("a", r[0], !1, !0), C("b", o[0], !1, !0), C("a", o[0], !1, !0)), e.container.append(r.add(o))
                    }
                }), T(f + n, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void T(l + n, function () {
                    r.off(n), e.wrap.off("click" + n), e.arrowLeft && s && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                }))
            }, next: function () {
                e.direction = !0, e.index = U(e.index + 1), e.updateItemHTML()
            }, prev: function () {
                e.direction = !1, e.index = U(e.index - 1), e.updateItemHTML()
            }, goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, i = e.st.gallery.preload, n = Math.min(i[0], e.items.length), r = Math.min(i[1], e.items.length);
                for (t = 1; (e.direction ? r : n) >= t; t++) e._preloadItem(e.index + t);
                for (t = 1; (e.direction ? n : r) >= t; t++) e._preloadItem(e.index - t)
            }, _preloadItem: function (i) {
                if (i = U(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), S("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = !0
                    }).on("error.mfploader", function () {
                        n.hasSize = !0, n.loadError = !0, S("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var H = "retina";
    t.magnificPopup.registerModule(H, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, i = t.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (T("ImageHasSize." + H, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / i, width: "100%"})
                    }), T("ElementParse." + H, function (e, n) {
                        n.src = t.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), function () {
        var e = 1e3, i = "ontouchstart" in window, n = function () {
            b.off("touchmove" + s + " touchend" + s)
        }, r = "mfpFastClick", s = "." + r;
        t.fn.mfpFastClick = function (r) {
            return t(this).each(function () {
                var o, a = t(this);
                if (i) {
                    var l, h, c, u, d, p;
                    a.on("touchstart" + s, function (t) {
                        u = !1, p = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], h = d.clientX, c = d.clientY, b.on("touchmove" + s, function (t) {
                            d = t.originalEvent ? t.originalEvent.touches : t.touches, p = d.length, d = d[0], (Math.abs(d.clientX - h) > 10 || Math.abs(d.clientY - c) > 10) && (u = !0, n())
                        }).on("touchend" + s, function (t) {
                            n(), u || p > 1 || (o = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                o = !1
                            }, e), r())
                        })
                    })
                }
                a.on("click" + s, function () {
                    o || r()
                })
            })
        }, t.fn.destroyMfpFastClick = function () {
            t(this).off("touchstart" + s + " click" + s), i && b.off("touchmove" + s + " touchend" + s)
        }
    }(), k()
}(window.jQuery || window.Zepto), !function (t) {
    var e, i, n = "0.4.2", r = "hasOwnProperty", s = /[\.\/]/, o = /\s*,\s*/, a = "*", l = function (t, e) {
        return t - e
    }, h = {n: {}}, c = function () {
        for (var t = 0, e = this.length; e > t; t++) if ("undefined" != typeof this[t]) return this[t]
    }, u = function () {
        for (var t = this.length; --t;) if ("undefined" != typeof this[t]) return this[t]
    }, d = function (t, n) {
        t = String(t);
        var r, s = i, o = Array.prototype.slice.call(arguments, 2), a = d.listeners(t), h = 0, p = [], f = {}, g = [],
            m = e;
        g.firstDefined = c, g.lastDefined = u, e = t, i = 0;
        for (var v = 0, _ = a.length; _ > v; v++) "zIndex" in a[v] && (p.push(a[v].zIndex), a[v].zIndex < 0 && (f[a[v].zIndex] = a[v]));
        for (p.sort(l); p[h] < 0;) if (r = f[p[h++]], g.push(r.apply(n, o)), i) return i = s, g;
        for (v = 0; _ > v; v++) if (r = a[v], "zIndex" in r) if (r.zIndex == p[h]) {
            if (g.push(r.apply(n, o)), i) break;
            do if (h++, r = f[p[h]], r && g.push(r.apply(n, o)), i) break; while (r)
        } else f[r.zIndex] = r; else if (g.push(r.apply(n, o)), i) break;
        return i = s, e = m, g
    };
    d._events = h, d.listeners = function (t) {
        var e, i, n, r, o, l, c, u, d = t.split(s), p = h, f = [p], g = [];
        for (r = 0, o = d.length; o > r; r++) {
            for (u = [], l = 0, c = f.length; c > l; l++) for (p = f[l].n, i = [p[d[r]], p[a]], n = 2; n--;) e = i[n], e && (u.push(e), g = g.concat(e.f || []));
            f = u
        }
        return g
    }, d.on = function (t, e) {
        if (t = String(t), "function" != typeof e) return function () {
        };
        for (var i = t.split(o), n = 0, r = i.length; r > n; n++) !function (t) {
            for (var i, n = t.split(s), r = h, o = 0, a = n.length; a > o; o++) r = r.n, r = r.hasOwnProperty(n[o]) && r[n[o]] || (r[n[o]] = {n: {}});
            for (r.f = r.f || [], o = 0, a = r.f.length; a > o; o++) if (r.f[o] == e) {
                i = !0;
                break
            }
            !i && r.f.push(e)
        }(i[n]);
        return function (t) {
            +t == +t && (e.zIndex = +t)
        }
    }, d.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            d.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, d.stop = function () {
        i = 1
    }, d.nt = function (t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, d.nts = function () {
        return e.split(s)
    }, d.off = d.unbind = function (t, e) {
        if (!t) return void(d._events = h = {n: {}});
        var i = t.split(o);
        if (i.length > 1) for (var n = 0, l = i.length; l > n; n++) d.off(i[n], e); else {
            i = t.split(s);
            var c, u, p, n, l, f, g, m = [h];
            for (n = 0, l = i.length; l > n; n++) for (f = 0; f < m.length; f += p.length - 2) {
                if (p = [f, 1], c = m[f].n, i[n] != a) c[i[n]] && p.push(c[i[n]]); else for (u in c) c[r](u) && p.push(c[u]);
                m.splice.apply(m, p)
            }
            for (n = 0, l = m.length; l > n; n++) for (c = m[n]; c.n;) {
                if (e) {
                    if (c.f) {
                        for (f = 0, g = c.f.length; g > f; f++) if (c.f[f] == e) {
                            c.f.splice(f, 1);
                            break
                        }
                        !c.f.length && delete c.f
                    }
                    for (u in c.n) if (c.n[r](u) && c.n[u].f) {
                        var v = c.n[u].f;
                        for (f = 0, g = v.length; g > f; f++) if (v[f] == e) {
                            v.splice(f, 1);
                            break
                        }
                        !v.length && delete c.n[u].f
                    }
                } else {
                    delete c.f;
                    for (u in c.n) c.n[r](u) && c.n[u].f && delete c.n[u].f
                }
                c = c.n
            }
        }
    }, d.once = function (t, e) {
        var i = function () {
            return d.unbind(t, i), e.apply(this, arguments)
        };
        return d.on(t, i)
    }, d.version = n, d.toString = function () {
        return "You are running Eve " + n
    }, "undefined" != typeof module && module.exports ? module.exports = d : "function" == typeof define && define.amd ? define("eve", [], function () {
        return d
    }) : t.eve = d
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function (i) {
        return e(t, i)
    }) : e(t, t.eve)
}(this, function (t, e) {
    var i = function (e) {
        var i = {},
            n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                setTimeout(t, 16)
            }, r = Array.isArray || function (t) {
                return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
            }, s = 0, o = "M" + (+new Date).toString(36), a = function () {
                return o + (s++).toString(36)
            }, l = Date.now || function () {
                return +new Date
            }, h = function (t) {
                var e = this;
                if (null == t) return e.s;
                var i = e.s - t;
                e.b += e.dur * i, e.B += e.dur * i, e.s = t
            }, c = function (t) {
                var e = this;
                return null == t ? e.spd : void(e.spd = t)
            }, u = function (t) {
                var e = this;
                return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
            }, d = function () {
                var t = this;
                delete i[t.id], t.update(), e("mina.stop." + t.id, t)
            }, p = function () {
                var t = this;
                t.pdif || (delete i[t.id], t.update(), t.pdif = t.get() - t.b)
            }, f = function () {
                var t = this;
                t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, i[t.id] = t)
            }, g = function () {
                var t, e = this;
                if (r(e.start)) {
                    t = [];
                    for (var i = 0, n = e.start.length; n > i; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
                } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                e.set(t)
            }, m = function () {
                var t = 0;
                for (var r in i) if (i.hasOwnProperty(r)) {
                    var s = i[r], o = s.get();
                    t++, s.s = (o - s.b) / (s.dur / s.spd), s.s >= 1 && (delete i[r], s.s = 1, t--, function (t) {
                        setTimeout(function () {
                            e("mina.finish." + t.id, t)
                        })
                    }(s)), s.update()
                }
                t && n(m)
            }, v = function (t, e, r, s, o, l, _) {
                var y = {
                    id: a(),
                    start: t,
                    end: e,
                    b: r,
                    s: 0,
                    dur: s - r,
                    spd: 1,
                    get: o,
                    set: l,
                    easing: _ || v.linear,
                    status: h,
                    speed: c,
                    duration: u,
                    stop: d,
                    pause: p,
                    resume: f,
                    update: g
                };
                i[y.id] = y;
                var w, x = 0;
                for (w in i) if (i.hasOwnProperty(w) && (x++, 2 == x)) break;
                return 1 == x && n(m), y
            };
        return v.time = l, v.getById = function (t) {
            return i[t] || null
        }, v.linear = function (t) {
            return t
        }, v.easeout = function (t) {
            return Math.pow(t, 1.7)
        }, v.easein = function (t) {
            return Math.pow(t, .48)
        }, v.easeinout = function (t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = .48 - t / 1.04, i = Math.sqrt(.1734 + e * e), n = i - e,
                r = Math.pow(Math.abs(n), 1 / 3) * (0 > n ? -1 : 1), s = -i - e,
                o = Math.pow(Math.abs(s), 1 / 3) * (0 > s ? -1 : 1), a = r + o + .5;
            return 3 * (1 - a) * a * a + a * a * a
        }, v.backin = function (t) {
            if (1 == t) return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, v.backout = function (t) {
            if (0 == t) return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, v.elastic = function (t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
        }, v.bounce = function (t) {
            var e, i = 7.5625, n = 2.75;
            return 1 / n > t ? e = i * t * t : 2 / n > t ? (t -= 1.5 / n, e = i * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = i * t * t + .9375) : (t -= 2.625 / n, e = i * t * t + .984375), e
        }, t.mina = v, v
    }("undefined" == typeof e ? function () {
    } : e), n = function () {
        function n(t, e) {
            if (t) {
                if (t.tagName) return C(t);
                if (s(t, "array") && n.set) return n.set.apply(n, t);
                if (t instanceof w) return t;
                if (null == e) return t = S.doc.querySelector(t), C(t)
            }
            return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new T(t, e)
        }

        function r(t, e) {
            if (e) {
                if ("#text" == t && (t = S.doc.createTextNode(e.text || "")), "string" == typeof t && (t = r(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(G, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(V, e.substring(4)) : t.getAttribute(e);
                for (var i in e) if (e[P](i)) {
                    var n = k(e[i]);
                    n ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(G, i.substring(6), n) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(V, i.substring(4), n) : t.setAttribute(i, n) : t.removeAttribute(i)
                }
            } else t = S.doc.createElementNS(V, t);
            return t
        }

        function s(t, e) {
            return e = k.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || F.call(t).slice(8, -1).toLowerCase() == e)
        }

        function o(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var i in t) t[P](i) && (e[i] = o(t[i]));
            return e
        }

        function a(t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return t.push(t.splice(i, 1)[0])
        }

        function l(t, e, i) {
            function n() {
                var r = Array.prototype.slice.call(arguments, 0), s = r.join("␀"), o = n.cache = n.cache || {},
                    l = n.count = n.count || [];
                return o[P](s) ? (a(l, s), i ? i(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t.apply(e, r), i ? i(o[s]) : o[s])
            }

            return n
        }

        function h(t, e, i, n, r, s) {
            if (null == r) {
                var o = t - i, a = e - n;
                return o || a ? (180 + 180 * A.atan2(-a, -o) / D + 360) % 360 : 0
            }
            return h(t, e, r, s) - h(i, n, r, s)
        }

        function c(t) {
            return t % 360 * D / 180
        }

        function u(t) {
            return 180 * t / D % 360
        }

        function d(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, i, n) {
                return n = n.split(/\s*,\s*|\s+/), "rotate" == i && 1 == n.length && n.push(0, 0), "scale" == i && (n.length > 2 ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), e.push("skewX" == i ? ["m", 1, 0, A.tan(c(n[0])), 1, 0, 0] : "skewY" == i ? ["m", 1, A.tan(c(n[0])), 0, 1, 0, 0] : [i.charAt(0)].concat(n)), t
            }), e
        }

        function p(t, e) {
            var i = rt(t), r = new n.Matrix;
            if (i) for (var s = 0, o = i.length; o > s; s++) {
                var a, l, h, c, u, d = i[s], p = d.length, f = k(d[0]).toLowerCase(), g = d[0] != f,
                    m = g ? r.invert() : 0;
                "t" == f && 2 == p ? r.translate(d[1], 0) : "t" == f && 3 == p ? g ? (a = m.x(0, 0), l = m.y(0, 0), h = m.x(d[1], d[2]), c = m.y(d[1], d[2]), r.translate(h - a, c - l)) : r.translate(d[1], d[2]) : "r" == f ? 2 == p ? (u = u || e, r.rotate(d[1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == p && (g ? (h = m.x(d[2], d[3]), c = m.y(d[2], d[3]), r.rotate(d[1], h, c)) : r.rotate(d[1], d[2], d[3])) : "s" == f ? 2 == p || 3 == p ? (u = u || e, r.scale(d[1], d[p - 1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == p ? g ? (h = m.x(d[2], d[3]), c = m.y(d[2], d[3]), r.scale(d[1], d[1], h, c)) : r.scale(d[1], d[1], d[2], d[3]) : 5 == p && (g ? (h = m.x(d[3], d[4]), c = m.y(d[3], d[4]), r.scale(d[1], d[2], h, c)) : r.scale(d[1], d[2], d[3], d[4])) : "m" == f && 7 == p && r.add(d[1], d[2], d[3], d[4], d[5], d[6])
            }
            return r
        }

        function f(t, e) {
            if (null == e) {
                var i = !0;
                if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new n.Matrix;
                e = d(e)
            } else e = n._.rgTransform.test(e) ? k(e).replace(/\.{3}|\u2026/g, t._.transform || z) : d(e), s(e, "array") && (e = n.path ? n.path.toString.call(e) : k(e)), t._.transform = e;
            var r = p(e, t.getBBox(1));
            return i ? r : void(t.matrix = r)
        }

        function m(t) {
            var e = t.node.ownerSVGElement && C(t.node.ownerSVGElement) || t.node.parentNode && C(t.node.parentNode) || n.select("svg") || n(0, 0),
                i = e.select("defs"), r = null != i && i.node;
            return r || (r = b("defs", e.node).node), r
        }

        function v(t) {
            return t.node.ownerSVGElement && C(t.node.ownerSVGElement) || n.select("svg")
        }

        function _(t, e, i) {
            function n(t) {
                if (null == t) return z;
                if (t == +t) return t;
                r(h, {width: t});
                try {
                    return h.getBBox().width
                } catch (e) {
                    return 0
                }
            }

            function s(t) {
                if (null == t) return z;
                if (t == +t) return t;
                r(h, {height: t});
                try {
                    return h.getBBox().height
                } catch (e) {
                    return 0
                }
            }

            function o(n, r) {
                null == e ? l[n] = r(t.attr(n) || 0) : n == e && (l = r(null == i ? t.attr(n) || 0 : i))
            }

            var a = v(t).node, l = {}, h = a.querySelector(".svg---mgr");
            switch (h || (h = r("rect"), r(h, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            }), a.appendChild(h)), t.type) {
                case"rect":
                    o("rx", n), o("ry", s);
                case"image":
                    o("width", n), o("height", s);
                case"text":
                    o("x", n), o("y", s);
                    break;
                case"circle":
                    o("cx", n), o("cy", s), o("r", n);
                    break;
                case"ellipse":
                    o("cx", n), o("cy", s), o("rx", n), o("ry", s);
                    break;
                case"line":
                    o("x1", n), o("x2", n), o("y1", s), o("y2", s);
                    break;
                case"marker":
                    o("refX", n), o("markerWidth", n), o("refY", s), o("markerHeight", s);
                    break;
                case"radialGradient":
                    o("fx", n), o("fy", s);
                    break;
                case"tspan":
                    o("dx", n), o("dy", s);
                    break;
                default:
                    o(e, n)
            }
            return a.removeChild(h), l
        }

        function y(t) {
            s(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
            for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function (t) {
                n.appendChild(t.node)
            }) : n.appendChild(t[e].node);
            var r = n.childNodes;
            for (e = 0; e < r.length; e++) this[i++] = C(r[e]);
            return this
        }

        function w(t) {
            if (t.snap in Q) return Q[t.snap];
            var e, i = this.id = H();
            try {
                e = t.ownerSVGElement
            } catch (n) {
            }
            if (this.node = t, e && (this.paper = new T(e)), this.type = t.tagName, this.anims = {}, this._ = {transform: []}, t.snap = i, Q[i] = this, "g" == this.type && (this.add = y), this.type in {
                g: 1,
                mask: 1,
                pattern: 1
            }) for (var r in T.prototype) T.prototype[P](r) && (this[r] = T.prototype[r])
        }

        function x(t) {
            this.node = t
        }

        function b(t, e) {
            var i = r(t);
            e.appendChild(i);
            var n = C(i);
            return n
        }

        function T(t, e) {
            var i, n, s, o = T.prototype;
            if (t && "svg" == t.tagName) {
                if (t.snap in Q) return Q[t.snap];
                var a = t.ownerDocument;
                i = new w(t), n = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], n || (n = r("desc"), n.appendChild(a.createTextNode("Created with Snap")), i.node.appendChild(n)), s || (s = r("defs"), i.node.appendChild(s)), i.defs = s;
                for (var l in o) o[P](l) && (i[l] = o[l]);
                i.paper = i.root = i
            } else i = b("svg", S.doc.body), r(i.node, {height: e, version: 1.1, width: t, xmlns: V});
            return i
        }

        function C(t) {
            return t ? t instanceof w || t instanceof x ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new T(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new T(t.contentDocument.getElementsByTagName("svg")[0]) : new w(t) : t
        }

        n.version = "0.3.0", n.toString = function () {
            return "Snap v" + this.version
        }, n._ = {};
        var S = {win: t, doc: t.document};
        n._.glob = S;
        var P = "hasOwnProperty", k = String, M = parseFloat, O = parseInt, A = Math, E = A.max, I = A.min, R = A.abs,
            D = (A.pow, A.PI), z = (A.round, ""), L = " ", F = Object.prototype.toString,
            N = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            B = "\t\n\x0B\f\r   ᠎             　\u2028\u2029",
            j = (n._.separator = new RegExp("[," + B + "]+"), new RegExp("[" + B + "]", "g"), new RegExp("[" + B + "]*,[" + B + "]*")),
            X = {hs: 1, rg: 1},
            $ = new RegExp("([a-z])[" + B + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + B + "]*,?[" + B + "]*)+)", "ig"),
            q = new RegExp("([rstm])[" + B + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + B + "]*,?[" + B + "]*)+)", "ig"),
            W = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + B + "]*,?[" + B + "]*", "ig"), U = 0,
            Y = "S" + (+new Date).toString(36), H = function () {
                return Y + (U++).toString(36)
            }, G = "http://www.w3.org/1999/xlink", V = "http://www.w3.org/2000/svg", Q = {}, Z = n.url = function (t) {
                return "url('#" + t + "')"
            };
        n._.$ = r, n._.id = H, n.format = function () {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                i = function (t, i, n) {
                    var r = n;
                    return i.replace(e, function (t, e, i, n, s) {
                        e = e || n, r && (e in r && (r = r[e]), "function" == typeof r && s && (r = r()))
                    }), r = (null == r || r == n ? t : r) + ""
                };
            return function (e, n) {
                return k(e).replace(t, function (t, e) {
                    return i(t, e, n)
                })
            }
        }(), n._.clone = o, n._.cacher = l, n.rad = c, n.deg = u, n.angle = h, n.is = s, n.snapTo = function (t, e, i) {
            if (i = s(i, "finite") ? i : 10, s(t, "array")) {
                for (var n = t.length; n--;) if (R(t[n] - e) <= i) return t[n]
            } else {
                t = +t;
                var r = e % t;
                if (i > r) return e - r;
                if (r > t - i) return e - r + t
            }
            return e
        }, n.getRGB = l(function (t) {
            if (!t || (t = k(t)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: et};
            if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: et};
            if (!(X[P](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = K(t)), !t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: et
            };
            var e, i, r, o, a, l, h = t.match(N);
            return h ? (h[2] && (r = O(h[2].substring(5), 16), i = O(h[2].substring(3, 5), 16), e = O(h[2].substring(1, 3), 16)), h[3] && (r = O((a = h[3].charAt(3)) + a, 16), i = O((a = h[3].charAt(2)) + a, 16), e = O((a = h[3].charAt(1)) + a, 16)), h[4] && (l = h[4].split(j), e = M(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), i = M(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), r = M(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (o = M(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), h[5] ? (l = h[5].split(j), e = M(l[0]), "%" == l[0].slice(-1) && (e /= 100), i = M(l[1]), "%" == l[1].slice(-1) && (i /= 100), r = M(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (o = M(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsb2rgb(e, i, r, o)) : h[6] ? (l = h[6].split(j), e = M(l[0]), "%" == l[0].slice(-1) && (e /= 100), i = M(l[1]), "%" == l[1].slice(-1) && (i /= 100), r = M(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (o = M(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsl2rgb(e, i, r, o)) : (e = I(A.round(e), 255), i = I(A.round(i), 255), r = I(A.round(r), 255), o = I(E(o, 0), 1), h = {
                r: e,
                g: i,
                b: r,
                toString: et
            }, h.hex = "#" + (16777216 | r | i << 8 | e << 16).toString(16).slice(1), h.opacity = s(o, "finite") ? o : 1, h)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: et
            }
        }, n), n.hsb = l(function (t, e, i) {
            return n.hsb2rgb(t, e, i).hex
        }), n.hsl = l(function (t, e, i) {
            return n.hsl2rgb(t, e, i).hex
        }), n.rgb = l(function (t, e, i, n) {
            if (s(n, "finite")) {
                var r = A.round;
                return "rgba(" + [r(t), r(e), r(i), +n.toFixed(2)] + ")"
            }
            return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
        });
        var K = function (t) {
            var e = S.doc.getElementsByTagName("head")[0] || S.doc.getElementsByTagName("svg")[0], i = "rgb(255, 0, 0)";
            return (K = l(function (t) {
                if ("red" == t.toLowerCase()) return i;
                e.style.color = i, e.style.color = t;
                var n = S.doc.defaultView.getComputedStyle(e, z).getPropertyValue("color");
                return n == i ? null : n
            }))(t)
        }, J = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, tt = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, et = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, it = function (t, e, i) {
            if (null == e && s(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && s(t, string)) {
                var r = n.getRGB(t);
                t = r.r, e = r.g, i = r.b
            }
            return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i]
        }, nt = function (t, e, i, r) {
            t = A.round(255 * t), e = A.round(255 * e), i = A.round(255 * i);
            var o = {r: t, g: e, b: i, opacity: s(r, "finite") ? r : 1, hex: n.rgb(t, e, i), toString: et};
            return s(r, "finite") && (o.opacity = r), o
        };
        n.color = function (t) {
            var e;
            return s(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : s(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (s(t, "string") && (t = n.getRGB(t)), s(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = et, t
        }, n.hsb2rgb = function (t, e, i, n) {
            s(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, t = t.h, n = t.o), t *= 360;
            var r, o, a, l, h;
            return t = t % 360 / 60, h = i * e, l = h * (1 - R(t % 2 - 1)), r = o = a = i - h, t = ~~t, r += [h, l, 0, 0, l, h][t], o += [l, h, h, l, 0, 0][t], a += [0, 0, l, h, h, l][t], nt(r, o, a, n)
        }, n.hsl2rgb = function (t, e, i, n) {
            s(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
            var r, o, a, l, h;
            return t = t % 360 / 60, h = 2 * e * (.5 > i ? i : 1 - i), l = h * (1 - R(t % 2 - 1)), r = o = a = i - h / 2, t = ~~t, r += [h, l, 0, 0, l, h][t], o += [l, h, h, l, 0, 0][t], a += [0, 0, l, h, h, l][t], nt(r, o, a, n)
        }, n.rgb2hsb = function (t, e, i) {
            i = it(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, r, s, o;
            return s = E(t, e, i), o = s - I(t, e, i), n = 0 == o ? null : s == t ? (e - i) / o : s == e ? (i - t) / o + 2 : (t - e) / o + 4, n = (n + 360) % 6 * 60 / 360, r = 0 == o ? 0 : o / s, {
                h: n,
                s: r,
                b: s,
                toString: J
            }
        }, n.rgb2hsl = function (t, e, i) {
            i = it(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, r, s, o, a, l;
            return o = E(t, e, i), a = I(t, e, i), l = o - a, n = 0 == l ? null : o == t ? (e - i) / l : o == e ? (i - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, s = (o + a) / 2, r = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), {
                h: n,
                s: r,
                l: s,
                toString: tt
            }
        }, n.parsePathString = function (t) {
            if (!t) return null;
            var e = n.path(t);
            if (e.arr) return n.path.clone(e.arr);
            var i = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, r = [];
            return s(t, "array") && s(t[0], "array") && (r = n.path.clone(t)), r.length || k(t).replace($, function (t, e, n) {
                var s = [], o = e.toLowerCase();
                if (n.replace(W, function (t, e) {
                    e && s.push(+e)
                }), "m" == o && s.length > 2 && (r.push([e].concat(s.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == s.length && r.push([e, s[0]]), "r" == o) r.push([e].concat(s)); else for (; s.length >= i[o] && (r.push([e].concat(s.splice(0, i[o]))), i[o]);) ;
            }), r.toString = n.path.toString, e.arr = n.path.clone(r), r
        };
        var rt = n.parseTransformString = function (t) {
            if (!t) return null;
            var e = [];
            return s(t, "array") && s(t[0], "array") && (e = n.path.clone(t)), e.length || k(t).replace(q, function (t, i, n) {
                var r = [];
                i.toLowerCase(), n.replace(W, function (t, e) {
                    e && r.push(+e)
                }), e.push([i].concat(r))
            }), e.toString = n.path.toString, e
        };
        n._.svgTransform2string = d, n._.rgTransform = new RegExp("^[a-z][" + B + "]*-?\\.?\\d", "i"), n._.transform2matrix = p, n._unit2px = _, S.doc.contains || S.doc.compareDocumentPosition ? function (t, e) {
            var i = 9 == t.nodeType ? t.documentElement : t, n = e && e.parentNode;
            return t == n || !(!n || 1 != n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
        } : function (t, e) {
            if (e) for (; e;) if (e = e.parentNode, e == t) return !0;
            return !1
        }, n._.getSomeDefs = m, n._.getSomeSVG = v, n.select = function (t) {
            return C(S.doc.querySelector(t))
        }, n.selectAll = function (t) {
            for (var e = S.doc.querySelectorAll(t), i = (n.set || Array)(), r = 0; r < e.length; r++) i.push(C(e[r]));
            return i
        }, setInterval(function () {
            for (var t in Q) if (Q[P](t)) {
                var e = Q[t], i = e.node;
                ("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete Q[t]
            }
        }, 1e4), function (t) {
            function o(t) {
                function e(t, e) {
                    var i = r(t.node, e);
                    i = i && i.match(o), i = i && i[2], i && "#" == i.charAt() && (i = i.substring(1), i && (l[i] = (l[i] || []).concat(function (i) {
                        var n = {};
                        n[e] = Z(i), r(t.node, n)
                    })))
                }

                function i(t) {
                    var e = r(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function (e) {
                        t.attr("xlink:href", "#" + e)
                    })))
                }

                for (var n, s = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, h = 0, c = s.length; c > h; h++) {
                    n = s[h], e(n, "fill"), e(n, "stroke"), e(n, "filter"), e(n, "mask"), e(n, "clip-path"), i(n);
                    var u = r(n.node, "id");
                    u && (r(n.node, {id: n.id}), a.push({old: u, id: n.id}))
                }
                for (h = 0, c = a.length; c > h; h++) {
                    var d = l[a[h].old];
                    if (d) for (var p = 0, f = d.length; f > p; p++) d[p](a[h].id)
                }
            }

            function a(t, e, i) {
                return function (n) {
                    var r = n.slice(t, e);
                    return 1 == r.length && (r = r[0]), i ? i(r) : r
                }
            }

            function l(t) {
                return function () {
                    var e = t ? "<" + this.type : "", i = this.node.attributes, n = this.node.childNodes;
                    if (t) for (var r = 0, s = i.length; s > r; r++) e += " " + i[r].name + '="' + i[r].value.replace(/"/g, '\\"') + '"';
                    if (n.length) {
                        for (t && (e += ">"), r = 0, s = n.length; s > r; r++) 3 == n[r].nodeType ? e += n[r].nodeValue : 1 == n[r].nodeType && (e += C(n[r]).toString());
                        t && (e += "</" + this.type + ">")
                    } else t && (e += "/>");
                    return e
                }
            }

            t.attr = function (t, i) {
                var n = this;
                if (n.node, !t) return n;
                if (s(t, "string")) {
                    if (!(arguments.length > 1)) return e("snap.util.getattr." + t, n).firstDefined();
                    var r = {};
                    r[t] = i, t = r
                }
                for (var o in t) t[P](o) && e("snap.util.attr." + o, n, t[o]);
                return n
            }, t.getBBox = function (t) {
                if (!n.Matrix || !n.path) return this.node.getBBox();
                var e = this, i = new n.Matrix;
                if (e.removed) return n._.box();
                for (; "use" == e.type;) if (t || (i = i.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original; else {
                    var r = e.attr("xlink:href");
                    e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
                }
                var s = e._, o = n.path.get[e.type] || n.path.get.deflt;
                try {
                    return t ? (s.bboxwt = o ? n.path.getBBox(e.realPath = o(e)) : n._.box(e.node.getBBox()), n._.box(s.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, s.bbox = n.path.getBBox(n.path.map(e.realPath, i.add(e.matrix))), n._.box(s.bbox))
                } catch (a) {
                    return n._.box()
                }
            };
            var h = function () {
                return this.string
            };
            t.transform = function (t) {
                var e = this._;
                if (null == t) {
                    for (var i, s = this, o = new n.Matrix(this.node.getCTM()), a = f(this), l = [a], c = new n.Matrix, u = a.toTransformString(), d = k(a) == k(this.matrix) ? k(e.transform) : u; "svg" != s.type && (s = s.parent());) l.push(f(s));
                    for (i = l.length; i--;) c.add(l[i]);
                    return {
                        string: d,
                        globalMatrix: o,
                        totalMatrix: c,
                        localMatrix: a,
                        diffMatrix: o.clone().add(a.invert()),
                        global: o.toTransformString(),
                        total: c.toTransformString(),
                        local: u,
                        toString: h
                    }
                }
                return t instanceof n.Matrix ? this.matrix = t : f(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? r(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? r(this.node, {patternTransform: this.matrix}) : r(this.node, {transform: this.matrix})), this
            }, t.parent = function () {
                return C(this.node.parentNode)
            }, t.append = t.add = function (t) {
                if (t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function (t) {
                            e.add(t)
                        }), this
                    }
                    t = C(t), this.node.appendChild(t.node), t.paper = this.paper
                }
                return this
            }, t.appendTo = function (t) {
                return t && (t = C(t), t.append(this)), this
            }, t.prepend = function (t) {
                if (t) {
                    if ("set" == t.type) {
                        var e, i = this;
                        return t.forEach(function (t) {
                            e ? e.after(t) : i.prepend(t), e = t
                        }), this
                    }
                    t = C(t);
                    var n = t.parent();
                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), n && n.add()
                }
                return this
            }, t.prependTo = function (t) {
                return t = C(t), t.prepend(this), this
            }, t.before = function (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function (t) {
                        var i = t.parent();
                        e.node.parentNode.insertBefore(t.node, e.node), i && i.add()
                    }), this.parent().add(), this
                }
                t = C(t);
                var i = t.parent();
                return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), i && i.add(), t.paper = this.paper, this
            }, t.after = function (t) {
                t = C(t);
                var e = t.parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
            }, t.insertBefore = function (t) {
                t = C(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, t.insertAfter = function (t) {
                t = C(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, t.remove = function () {
                var t = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
            }, t.select = function (t) {
                return C(this.node.querySelector(t))
            }, t.selectAll = function (t) {
                for (var e = this.node.querySelectorAll(t), i = (n.set || Array)(), r = 0; r < e.length; r++) i.push(C(e[r]));
                return i
            }, t.asPX = function (t, e) {
                return null == e && (e = this.attr(t)), +_(this, t, e);
            }, t.use = function () {
                var t, e = this.node.id;
                return e || (e = this.id, r(this.node, {id: e})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? b(this.type, this.node.parentNode) : b("use", this.node.parentNode), r(t.node, {"xlink:href": "#" + e}), t.original = this, t
            };
            var c = /\S+/g;
            t.addClass = function (t) {
                var e, i, n, r, s = (t || "").match(c) || [], o = this.node, a = o.className.baseVal,
                    l = a.match(c) || [];
                if (s.length) {
                    for (e = 0; n = s[e++];) i = l.indexOf(n), ~i || l.push(n);
                    r = l.join(" "), a != r && (o.className.baseVal = r)
                }
                return this
            }, t.removeClass = function (t) {
                var e, i, n, r, s = (t || "").match(c) || [], o = this.node, a = o.className.baseVal,
                    l = a.match(c) || [];
                if (l.length) {
                    for (e = 0; n = s[e++];) i = l.indexOf(n), ~i && l.splice(i, 1);
                    r = l.join(" "), a != r && (o.className.baseVal = r)
                }
                return this
            }, t.hasClass = function (t) {
                var e = this.node, i = e.className.baseVal, n = i.match(c) || [];
                return !!~n.indexOf(t)
            }, t.toggleClass = function (t, e) {
                if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                var i, n, r, s, o = (t || "").match(c) || [], a = this.node, l = a.className.baseVal,
                    h = l.match(c) || [];
                for (i = 0; r = o[i++];) n = h.indexOf(r), ~n ? h.splice(n, 1) : h.push(r);
                return s = h.join(" "), l != s && (a.className.baseVal = s), this
            }, t.clone = function () {
                var t = C(this.node.cloneNode(!0));
                return r(t.node, "id") && r(t.node, {id: t.id}), o(t), t.insertAfter(this), t
            }, t.toDefs = function () {
                var t = m(this);
                return t.appendChild(this.node), this
            }, t.pattern = t.toPattern = function (t, e, i, n) {
                var o = b("pattern", m(this));
                return null == t && (t = this.getBBox()), s(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), r(o.node, {
                    x: t,
                    y: e,
                    width: i,
                    height: n,
                    patternUnits: "userSpaceOnUse",
                    id: o.id,
                    viewBox: [t, e, i, n].join(" ")
                }), o.node.appendChild(this.node), o
            }, t.marker = function (t, e, i, n, o, a) {
                var l = b("marker", m(this));
                return null == t && (t = this.getBBox()), s(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, o = t.refX || t.cx, a = t.refY || t.cy, t = t.x), r(l.node, {
                    viewBox: [t, e, i, n].join(L),
                    markerWidth: i,
                    markerHeight: n,
                    orient: "auto",
                    refX: o || 0,
                    refY: a || 0,
                    id: l.id
                }), l.node.appendChild(this.node), l
            };
            var u = function (t, e, n, r) {
                "function" != typeof n || n.length || (r = n, n = i.linear), this.attr = t, this.dur = e, n && (this.easing = n), r && (this.callback = r)
            };
            n._.Animation = u, n.animation = function (t, e, i, n) {
                return new u(t, e, i, n)
            }, t.inAnim = function () {
                var t = this, e = [];
                for (var i in t.anims) t.anims[P](i) && !function (t) {
                    e.push({
                        anim: new u(t._attrs, t.dur, t.easing, t._callback),
                        mina: t,
                        curStatus: t.status(),
                        status: function (e) {
                            return t.status(e)
                        },
                        stop: function () {
                            t.stop()
                        }
                    })
                }(t.anims[i]);
                return e
            }, n.animate = function (t, n, r, s, o, a) {
                "function" != typeof o || o.length || (a = o, o = i.linear);
                var l = i.time(), h = i(t, n, l, l + s, i.time, r, o);
                return a && e.once("mina.finish." + h.id, a), h
            }, t.stop = function () {
                for (var t = this.inAnim(), e = 0, i = t.length; i > e; e++) t[e].stop();
                return this
            }, t.animate = function (t, n, r, o) {
                "function" != typeof r || r.length || (o = r, r = i.linear), t instanceof u && (o = t.callback, r = t.easing, n = r.dur, t = t.attr);
                var l, h, c, d, p = [], f = [], g = {}, m = this;
                for (var v in t) if (t[P](v)) {
                    m.equal ? (d = m.equal(v, k(t[v])), l = d.from, h = d.to, c = d.f) : (l = +m.attr(v), h = +t[v]);
                    var _ = s(l, "array") ? l.length : 1;
                    g[v] = a(p.length, p.length + _, c), p = p.concat(l), f = f.concat(h)
                }
                var y = i.time(), w = i(p, f, y, y + n, i.time, function (t) {
                    var e = {};
                    for (var i in g) g[P](i) && (e[i] = g[i](t));
                    m.attr(e)
                }, r);
                return m.anims[w.id] = w, w._attrs = t, w._callback = o, e("snap.animcreated." + m.id, w), e.once("mina.finish." + w.id, function () {
                    delete m.anims[w.id], o && o.call(m)
                }), e.once("mina.stop." + w.id, function () {
                    delete m.anims[w.id]
                }), m
            };
            var d = {};
            t.data = function (t, i) {
                var r = d[this.id] = d[this.id] || {};
                if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r;
                if (1 == arguments.length) {
                    if (n.is(t, "object")) {
                        for (var s in t) t[P](s) && this.data(s, t[s]);
                        return this
                    }
                    return e("snap.data.get." + this.id, this, r[t], t), r[t]
                }
                return r[t] = i, e("snap.data.set." + this.id, this, i, t), this
            }, t.removeData = function (t) {
                return null == t ? d[this.id] = {} : d[this.id] && delete d[this.id][t], this
            }, t.outerSVG = t.toString = l(1), t.innerSVG = l()
        }(w.prototype), n.parse = function (t) {
            var e = S.doc.createDocumentFragment(), i = !0, n = S.doc.createElement("div");
            if (t = k(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0]) if (i) e = t; else for (; t.firstChild;) e.appendChild(t.firstChild);
            return n.innerHTML = z, new x(e)
        }, x.prototype.select = w.prototype.select, x.prototype.selectAll = w.prototype.selectAll, n.fragment = function () {
            for (var t = Array.prototype.slice.call(arguments, 0), e = S.doc.createDocumentFragment(), i = 0, r = t.length; r > i; i++) {
                var s = t[i];
                s.node && s.node.nodeType && e.appendChild(s.node), s.nodeType && e.appendChild(s), "string" == typeof s && e.appendChild(n.parse(s).node)
            }
            return new x(e)
        }, n._.make = b, n._.wrap = C, T.prototype.el = function (t, e) {
            var i = b(t, this.node);
            return e && i.attr(e), i
        }, e.on("snap.util.getattr", function () {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var i = t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            return st[P](i) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(i) : r(this.node, t)
        });
        var st = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        e.on("snap.util.attr", function (t) {
            var i = e.nt(), n = {};
            i = i.substring(i.lastIndexOf(".") + 1), n[i] = t;
            var s = i.replace(/-(\w)/gi, function (t, e) {
                return e.toUpperCase()
            }), o = i.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            st[P](o) ? this.node.style[s] = null == t ? z : t : r(this.node, n)
        }), function () {
        }(T.prototype), n.ajax = function (t, i, n, r) {
            var o = new XMLHttpRequest, a = H();
            if (o) {
                if (s(i, "function")) r = n, n = i, i = null; else if (s(i, "object")) {
                    var l = [];
                    for (var h in i) i.hasOwnProperty(h) && l.push(encodeURIComponent(h) + "=" + encodeURIComponent(i[h]));
                    i = l.join("&")
                }
                return o.open(i ? "POST" : "GET", t, !0), i && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (e.once("snap.ajax." + a + ".0", n), e.once("snap.ajax." + a + ".200", n), e.once("snap.ajax." + a + ".304", n)), o.onreadystatechange = function () {
                    4 == o.readyState && e("snap.ajax." + a + "." + o.status, r, o)
                }, 4 == o.readyState ? o : (o.send(i), o)
            }
        }, n.load = function (t, e, i) {
            n.ajax(t, function (t) {
                var r = n.parse(t.responseText);
                i ? e.call(i, r) : e(r)
            })
        };
        var ot = function (t) {
            var e = t.getBoundingClientRect(), i = t.ownerDocument, n = i.body, r = i.documentElement,
                s = r.clientTop || n.clientTop || 0, o = r.clientLeft || n.clientLeft || 0,
                a = e.top + (g.win.pageYOffset || r.scrollTop || n.scrollTop) - s,
                l = e.left + (g.win.pageXOffset || r.scrollLeft || n.scrollLeft) - o;
            return {y: a, x: l}
        };
        return n.getElementByPoint = function (t, e) {
            var i = this, n = (i.canvas, S.doc.elementFromPoint(t, e));
            if (S.win.opera && "svg" == n.tagName) {
                var r = ot(n), s = n.createSVGRect();
                s.x = t - r.x, s.y = e - r.y, s.width = s.height = 1;
                var o = n.getIntersectionList(s, null);
                o.length && (n = o[o.length - 1])
            }
            return n ? C(n) : null
        }, n.plugin = function (t) {
            t(n, w, T, S, x)
        }, S.win.Snap = n, n
    }();
    return n.plugin(function (t) {
        function e(t, e, n, r, s, o) {
            return null == e && "[object SVGMatrix]" == i.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +s, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var i = Object.prototype.toString, n = String, r = Math, s = "";
        !function (i) {
            function o(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function a(t) {
                var e = r.sqrt(o(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            i.add = function (t, i, n, r, s, o) {
                var a, l, h, c, u = [[], [], []], d = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                    p = [[t, n, s], [i, r, o], [0, 0, 1]];
                for (t && t instanceof e && (p = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), a = 0; 3 > a; a++) for (l = 0; 3 > l; l++) {
                    for (c = 0, h = 0; 3 > h; h++) c += d[a][h] * p[h][l];
                    u[a][l] = c
                }
                return this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2], this
            }, i.invert = function () {
                var t = this, i = t.a * t.d - t.b * t.c;
                return new e(t.d / i, -t.b / i, -t.c / i, t.a / i, (t.c * t.f - t.d * t.e) / i, (t.b * t.e - t.a * t.f) / i)
            }, i.clone = function () {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, i.translate = function (t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, i.scale = function (t, e, i, n) {
                return null == e && (e = t), (i || n) && this.add(1, 0, 0, 1, i, n), this.add(t, 0, 0, e, 0, 0), (i || n) && this.add(1, 0, 0, 1, -i, -n), this
            }, i.rotate = function (e, i, n) {
                e = t.rad(e), i = i || 0, n = n || 0;
                var s = +r.cos(e).toFixed(9), o = +r.sin(e).toFixed(9);
                return this.add(s, o, -o, s, i, n), this.add(1, 0, 0, 1, -i, -n)
            }, i.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, i.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, i.get = function (t) {
                return +this[n.fromCharCode(97 + t)].toFixed(4)
            }, i.toString = function () {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, i.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, i.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, i.split = function () {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var i = [[this.a, this.c], [this.b, this.d]];
                e.scalex = r.sqrt(o(i[0])), a(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = r.sqrt(o(i[1])), a(i[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var n = -i[0][1], s = i[1][1];
                return 0 > s ? (e.rotate = t.deg(r.acos(s)), 0 > n && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(r.asin(n)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, i.toTransformString = function (t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : s) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : s) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : s))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function (t, i, n, r, s, o) {
            return new e(t, i, n, r, s, o)
        }
    }), n.plugin(function (t, i, n, r, s) {
        function o(n) {
            return function (r) {
                if (e.stop(), r instanceof s && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, p(this).appendChild(r), r = u(r)), r instanceof i) if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                    r.node.id || g(r.node, {id: r.id});
                    var o = m(r.node.id)
                } else o = r.attr(n); else if (o = t.color(r), o.error) {
                    var a = t(p(this).ownerSVGElement).gradient(r);
                    a ? (a.node.id || g(a.node, {id: a.id}), o = m(a.node.id)) : o = r
                } else o = v(o);
                var l = {};
                l[n] = o, g(this.node, l), this.node.style[n] = y
            }
        }

        function a(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function l(t) {
            for (var e = [], i = t.childNodes, n = 0, r = i.length; r > n; n++) {
                var s = i[n];
                3 == s.nodeType && e.push(s.nodeValue), "tspan" == s.tagName && e.push(1 == s.childNodes.length && 3 == s.firstChild.nodeType ? s.firstChild.nodeValue : l(s))
            }
            return e
        }

        function h() {
            return e.stop(), this.node.style.fontSize
        }

        var c = t._.make, u = t._.wrap, d = t.is, p = t._.getSomeDefs, f = /^url\(#?([^)]+)\)$/, g = t._.$, m = t.url,
            v = String, _ = t._.separator, y = "";
        e.on("snap.util.attr.mask", function (t) {
            if (t instanceof i || t instanceof s) {
                if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, p(this).appendChild(t), t = u(t)), "mask" == t.type) var n = t; else n = c("mask", p(this)), n.node.appendChild(t.node);
                !n.node.id && g(n.node, {id: n.id}), g(this.node, {mask: m(n.id)})
            }
        }), function (t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function (t) {
            if (t instanceof i || t instanceof s) {
                if (e.stop(), "clipPath" == t.type) var n = t; else n = c("clipPath", p(this)), n.node.appendChild(t.node), !n.node.id && g(n.node, {id: n.id});
                g(this.node, {"clip-path": m(n.id)})
            }
        }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
        var w = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
            t = v(t);
            var e = t.match(w);
            if (!e) return null;
            var i = e[1], n = e[2], r = e[3];
            return n = n.split(/\s*,\s*/).map(function (t) {
                return +t == t ? +t : t
            }), 1 == n.length && 0 == n[0] && (n = []), r = r.split("-"), r = r.map(function (t) {
                t = t.split(":");
                var e = {color: t[0]};
                return t[1] && (e.offset = parseFloat(t[1])), e
            }), {type: i, params: n, stops: r}
        }), e.on("snap.util.attr.d", function (i) {
            e.stop(), d(i, "array") && d(i[0], "array") && (i = t.path.toString.call(i)), i = v(i), i.match(/[ruo]/i) && (i = t.path.toAbsolute(i)), g(this.node, {d: i})
        })(-1), e.on("snap.util.attr.#text", function (t) {
            e.stop(), t = v(t);
            for (var i = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(i)
        })(-1), e.on("snap.util.attr.path", function (t) {
            e.stop(), this.attr({d: t})
        })(-1), e.on("snap.util.attr.class", function (t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function (t) {
            var i;
            i = d(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : d(t, "array") ? t.join(" ") : t, g(this.node, {viewBox: i}), e.stop()
        })(-1), e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function (t) {
            "rect" == this.type && (e.stop(), g(this.node, {rx: t, ry: t}))
        })(-1), e.on("snap.util.attr.textpath", function (t) {
            if (e.stop(), "text" == this.type) {
                var n, r, s;
                if (!t && this.textPath) {
                    for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                    return r.remove(), void delete this.textPath
                }
                if (d(t, "string")) {
                    var o = p(this), a = u(o.parentNode).path(t);
                    o.appendChild(a.node), n = a.id, a.attr({id: n})
                } else t = u(t), t instanceof i && (n = t.attr("id"), n || (n = t.id, t.attr({id: n})));
                if (n) if (r = this.textPath, s = this.node, r) r.attr({"xlink:href": "#" + n}); else {
                    for (r = g("textPath", {"xlink:href": "#" + n}); s.firstChild;) r.appendChild(s.firstChild);
                    s.appendChild(r), this.textPath = u(r)
                }
            }
        })(-1), e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
                for (var i = this.node, n = function (t) {
                    var e = g("tspan");
                    if (d(t, "array")) for (var i = 0; i < t.length; i++) e.appendChild(n(t[i])); else e.appendChild(r.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; i.firstChild;) i.removeChild(i.firstChild);
                for (var s = n(t); s.firstChild;) i.appendChild(s.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath
        })(-1), function () {
            function i(i) {
                return function () {
                    e.stop();
                    var n = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + i);
                    return "none" == n ? n : t(r.doc.getElementById(n.match(f)[1]))
                }
            }

            function n(t) {
                return function (i) {
                    e.stop();
                    var n = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == i || !i) return void(this.node.style[n] = "none");
                    if ("marker" == i.type) {
                        var r = i.node.id;
                        return r || g(i.node, {id: i.id}), void(this.node.style[n] = m(r))
                    }
                }
            }

            e.on("snap.util.getattr.marker-end", i("end"))(-1), e.on("snap.util.getattr.markerEnd", i("end"))(-1), e.on("snap.util.getattr.marker-start", i("start"))(-1), e.on("snap.util.getattr.markerStart", i("start"))(-1), e.on("snap.util.getattr.marker-mid", i("mid"))(-1), e.on("snap.util.getattr.markerMid", i("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function () {
            return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = l(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var i = g(this.node, "viewBox");
            return i ? (i = i.split(_), t._.box(+i[0], +i[1], +i[2], +i[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function () {
            var t = g(this.node, "points");
            return e.stop(), t ? t.split(_) : void 0
        })(-1), e.on("snap.util.getattr.path", function () {
            var t = g(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", h)(-1), e.on("snap.util.getattr.font-size", h)(-1)
    }), n.plugin(function () {
        function t(t) {
            return t
        }

        function i(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        var n = {
            "+": function (t, e) {
                return t + e
            }, "-": function (t, e) {
                return t - e
            }, "/": function (t, e) {
                return t / e
            }, "*": function (t, e) {
                return t * e
            }
        }, r = String, s = /[a-z]+$/i, o = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
            var i = r(t).match(o);
            if (i) {
                var a = e.nt(), l = a.substring(a.lastIndexOf(".") + 1), h = this.attr(l), c = {};
                e.stop();
                var u = i[3] || "", d = h.match(s), p = n[i[1]];
                if (d && d == u ? t = p(parseFloat(h), +i[2]) : (h = this.asPX(l), t = p(this.asPX(l), this.asPX(l, i[2] + u))), isNaN(h) || isNaN(t)) return;
                c[l] = t, this.attr(c)
            }
        })(-10), e.on("snap.util.equal", function (a, l) {
            var h = r(this.attr(a) || ""), c = r(l).match(o);
            if (c) {
                e.stop();
                var u = c[3] || "", d = h.match(s), p = n[c[1]];
                return d && d == u ? {
                    from: parseFloat(h),
                    to: p(parseFloat(h), +c[2]),
                    f: i(d)
                } : (h = this.asPX(a), {from: h, to: p(h, this.asPX(a, c[2] + u)), f: t})
            }
        })(-10)
    }), n.plugin(function (t, i, n, r) {
        var s = n.prototype, o = t.is;
        s.rect = function (t, e, i, n, r, s) {
            var a;
            return null == s && (s = r), o(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
                x: t,
                y: e,
                width: i,
                height: n
            }, null != r && (a.rx = r, a.ry = s)), this.el("rect", a)
        }, s.circle = function (t, e, i) {
            var n;
            return o(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
                cx: t,
                cy: e,
                r: i
            }), this.el("circle", n)
        };
        var a = function () {
            function t() {
                this.parentNode.removeChild(this)
            }

            return function (e, i) {
                var n = r.doc.createElement("img"), s = r.doc.body;
                n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
                    i.call(n), n.onload = n.onerror = null, s.removeChild(n)
                }, n.onerror = t, s.appendChild(n), n.src = e
            }
        }();
        s.image = function (e, i, n, r, s) {
            var l = this.el("image");
            if (o(e, "object") && "src" in e) l.attr(e); else if (null != e) {
                var h = {"xlink:href": e, preserveAspectRatio: "none"};
                null != i && null != n && (h.x = i, h.y = n), null != r && null != s ? (h.width = r, h.height = s) : a(e, function () {
                    t._.$(l.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), t._.$(l.node, h)
            }
            return l
        }, s.ellipse = function (t, e, i, n) {
            var r;
            return o(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                rx: i,
                ry: n
            }), this.el("ellipse", r)
        }, s.path = function (t) {
            var e;
            return o(t, "object") && !o(t, "array") ? e = t : t && (e = {d: t}), this.el("path", e)
        }, s.group = s.g = function (t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, s.svg = function (t, e, i, n, r, s, a, l) {
            var h = {};
            return o(t, "object") && null == e ? h = t : (null != t && (h.x = t), null != e && (h.y = e), null != i && (h.width = i), null != n && (h.height = n), null != r && null != s && null != a && null != l && (h.viewBox = [r, s, a, l])), this.el("svg", h)
        }, s.mask = function (t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, s.ptrn = function (t, e, i, n, r, s, a, l) {
            if (o(t, "object")) var h = t; else arguments.length ? (h = {}, null != t && (h.x = t), null != e && (h.y = e), null != i && (h.width = i), null != n && (h.height = n), null != r && null != s && null != a && null != l && (h.viewBox = [r, s, a, l])) : h = {patternUnits: "userSpaceOnUse"};
            return this.el("pattern", h)
        }, s.use = function (t) {
            return null != t ? (make("use", this.node), t instanceof i && (t.attr("id") || t.attr({id: ID()}), t = t.attr("id")), this.el("use", {"xlink:href": t})) : i.prototype.use.call(this)
        }, s.text = function (t, e, i) {
            var n = {};
            return o(t, "object") ? n = t : null != t && (n = {x: t, y: e, text: i || ""}), this.el("text", n)
        }, s.line = function (t, e, i, n) {
            var r = {};
            return o(t, "object") ? r = t : null != t && (r = {x1: t, x2: i, y1: e, y2: n}), this.el("line", r)
        }, s.polyline = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polyline", e)
        }, s.polygon = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polygon", e)
        }, function () {
            function i() {
                return this.selectAll("stop")
            }

            function n(e, i) {
                var n = h("stop"), r = {offset: +i + "%"};
                return e = t.color(e), r["stop-color"] = e.hex, e.opacity < 1 && (r["stop-opacity"] = e.opacity), h(n, r), this.node.appendChild(n), this
            }

            function r() {
                if ("linearGradient" == this.type) {
                    var e = h(this.node, "x1") || 0, i = h(this.node, "x2") || 1, n = h(this.node, "y1") || 0,
                        r = h(this.node, "y2") || 0;
                    return t._.box(e, n, math.abs(i - e), math.abs(r - n))
                }
                var s = this.node.cx || .5, o = this.node.cy || .5, a = this.node.r || 0;
                return t._.box(s - a, o - a, 2 * a, 2 * a)
            }

            function o(t, i) {
                function n(t, e) {
                    for (var i = (e - u) / (t - d), n = d; t > n; n++) o[n].offset = +(+u + i * (n - d)).toFixed(2);
                    d = t, u = e
                }

                var r, s = e("snap.util.grad.parse", null, i).firstDefined();
                if (!s) return null;
                s.params.unshift(t), r = "l" == s.type.toLowerCase() ? a.apply(0, s.params) : l.apply(0, s.params), s.type != s.type.toLowerCase() && h(r.node, {gradientUnits: "userSpaceOnUse"});
                var o = s.stops, c = o.length, u = 0, d = 0;
                c--;
                for (var p = 0; c > p; p++) "offset" in o[p] && n(p, o[p].offset);
                for (o[c].offset = o[c].offset || 100, n(c, o[c].offset), p = 0; c >= p; p++) {
                    var f = o[p];
                    r.addStop(f.color, f.offset)
                }
                return r
            }

            function a(e, s, o, a, l) {
                var c = t._.make("linearGradient", e);
                return c.stops = i, c.addStop = n, c.getBBox = r, null != s && h(c.node, {
                    x1: s,
                    y1: o,
                    x2: a,
                    y2: l
                }), c
            }

            function l(e, s, o, a, l, c) {
                var u = t._.make("radialGradient", e);
                return u.stops = i, u.addStop = n, u.getBBox = r, null != s && h(u.node, {
                    cx: s,
                    cy: o,
                    r: a
                }), null != l && null != c && h(u.node, {fx: l, fy: c}), u
            }

            var h = t._.$;
            s.gradient = function (t) {
                return o(this.defs, t)
            }, s.gradientLinear = function (t, e, i, n) {
                return a(this.defs, t, e, i, n)
            }, s.gradientRadial = function (t, e, i, n, r) {
                return l(this.defs, t, e, i, n, r)
            }, s.toString = function () {
                var e, i = this.node.ownerDocument, n = i.createDocumentFragment(), r = i.createElement("div"),
                    s = this.node.cloneNode(!0);
                return n.appendChild(r), r.appendChild(s), t._.$(s, {xmlns: "http://www.w3.org/2000/svg"}), e = r.innerHTML, n.removeChild(n.firstChild), e
            }, s.clear = function () {
                for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({node: e}), e = t
            }
        }()
    }), n.plugin(function (t, e) {
        function i(t) {
            var e = i.ps = i.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                for (var i in e) e[L](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
            }), e[t]
        }

        function n(t, e, i, n) {
            return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x), {
                x: t,
                y: e,
                width: i,
                w: i,
                height: n,
                h: n,
                x2: t + i,
                y2: e + n,
                cx: t + i / 2,
                cy: e + n / 2,
                r1: B.min(i, n) / 2,
                r2: B.max(i, n) / 2,
                r0: B.sqrt(i * i + n * n) / 2,
                path: b(t, e, i, n),
                vb: [t, e, i, n].join(" ")
            }
        }

        function r() {
            return this.join(",").replace(F, "$1")
        }

        function s(t) {
            var e = z(t);
            return e.toString = r, e
        }

        function o(t, e, i, n, r, s, o, a, h) {
            return null == h ? p(t, e, i, n, r, s, o, a) : l(t, e, i, n, r, s, o, a, f(t, e, i, n, r, s, o, a, h))
        }

        function a(i, n) {
            function r(t) {
                return +(+t).toFixed(3)
            }

            return t._.cacher(function (t, s, a) {
                t instanceof e && (t = t.attr("d")), t = A(t);
                for (var h, c, u, d, p, f = "", g = {}, m = 0, v = 0, _ = t.length; _ > v; v++) {
                    if (u = t[v], "M" == u[0]) h = +u[1], c = +u[2]; else {
                        if (d = o(h, c, u[1], u[2], u[3], u[4], u[5], u[6]), m + d > s) {
                            if (n && !g.start) {
                                if (p = o(h, c, u[1], u[2], u[3], u[4], u[5], u[6], s - m), f += ["C" + r(p.start.x), r(p.start.y), r(p.m.x), r(p.m.y), r(p.x), r(p.y)], a) return f;
                                g.start = f, f = ["M" + r(p.x), r(p.y) + "C" + r(p.n.x), r(p.n.y), r(p.end.x), r(p.end.y), r(u[5]), r(u[6])].join(), m += d, h = +u[5], c = +u[6];
                                continue
                            }
                            if (!i && !n) return p = o(h, c, u[1], u[2], u[3], u[4], u[5], u[6], s - m)
                        }
                        m += d, h = +u[5], c = +u[6]
                    }
                    f += u.shift() + u
                }
                return g.end = f, p = i ? m : n ? g : l(h, c, u[0], u[1], u[2], u[3], u[4], u[5], 1)
            }, null, t._.clone)
        }

        function l(t, e, i, n, r, s, o, a, l) {
            var h = 1 - l, c = q(h, 3), u = q(h, 2), d = l * l, p = d * l,
                f = c * t + 3 * u * l * i + 3 * h * l * l * r + p * o,
                g = c * e + 3 * u * l * n + 3 * h * l * l * s + p * a, m = t + 2 * l * (i - t) + d * (r - 2 * i + t),
                v = e + 2 * l * (n - e) + d * (s - 2 * n + e), _ = i + 2 * l * (r - i) + d * (o - 2 * r + i),
                y = n + 2 * l * (s - n) + d * (a - 2 * s + n), w = h * t + l * i, x = h * e + l * n, b = h * r + l * o,
                T = h * s + l * a, C = 90 - 180 * B.atan2(m - _, v - y) / j;
            return {x: f, y: g, m: {x: m, y: v}, n: {x: _, y: y}, start: {x: w, y: x}, end: {x: b, y: T}, alpha: C}
        }

        function h(e, i, r, s, o, a, l, h) {
            t.is(e, "array") || (e = [e, i, r, s, o, a, l, h]);
            var c = O.apply(null, e);
            return n(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function c(t, e, i) {
            return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
        }

        function u(t, e) {
            return t = n(t), e = n(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function d(t, e, i, n, r) {
            var s = -3 * e + 9 * i - 9 * n + 3 * r, o = t * s + 6 * e - 12 * i + 6 * n;
            return t * o - 3 * e + 3 * i
        }

        function p(t, e, i, n, r, s, o, a, l) {
            null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
            for (var h = l / 2, c = 12, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, g = 0; c > g; g++) {
                var m = h * u[g] + h, v = d(m, t, i, r, o), _ = d(m, e, n, s, a), y = v * v + _ * _;
                f += p[g] * B.sqrt(y)
            }
            return h * f
        }

        function f(t, e, i, n, r, s, o, a, l) {
            if (!(0 > l || p(t, e, i, n, r, s, o, a) < l)) {
                var h, c = 1, u = c / 2, d = c - u, f = .01;
                for (h = p(t, e, i, n, r, s, o, a, d); W(h - l) > f;) u /= 2, d += (l > h ? 1 : -1) * u, h = p(t, e, i, n, r, s, o, a, d);
                return d
            }
        }

        function g(t, e, i, n, r, s, o, a) {
            if (!($(t, i) < X(r, o) || X(t, i) > $(r, o) || $(e, n) < X(s, a) || X(e, n) > $(s, a))) {
                var l = (t * n - e * i) * (r - o) - (t - i) * (r * a - s * o),
                    h = (t * n - e * i) * (s - a) - (e - n) * (r * a - s * o),
                    c = (t - i) * (s - a) - (e - n) * (r - o);
                if (c) {
                    var u = l / c, d = h / c, p = +u.toFixed(2), f = +d.toFixed(2);
                    if (!(p < +X(t, i).toFixed(2) || p > +$(t, i).toFixed(2) || p < +X(r, o).toFixed(2) || p > +$(r, o).toFixed(2) || f < +X(e, n).toFixed(2) || f > +$(e, n).toFixed(2) || f < +X(s, a).toFixed(2) || f > +$(s, a).toFixed(2))) return {
                        x: u,
                        y: d
                    }
                }
            }
        }

        function m(t, e, i) {
            var n = h(t), r = h(e);
            if (!u(n, r)) return i ? 0 : [];
            for (var s = p.apply(0, t), o = p.apply(0, e), a = ~~(s / 8), c = ~~(o / 8), d = [], f = [], m = {}, v = i ? 0 : [], _ = 0; a + 1 > _; _++) {
                var y = l.apply(0, t.concat(_ / a));
                d.push({x: y.x, y: y.y, t: _ / a})
            }
            for (_ = 0; c + 1 > _; _++) y = l.apply(0, e.concat(_ / c)), f.push({x: y.x, y: y.y, t: _ / c});
            for (_ = 0; a > _; _++) for (var w = 0; c > w; w++) {
                var x = d[_], b = d[_ + 1], T = f[w], C = f[w + 1], S = W(b.x - x.x) < .001 ? "y" : "x",
                    P = W(C.x - T.x) < .001 ? "y" : "x", k = g(x.x, x.y, b.x, b.y, T.x, T.y, C.x, C.y);
                if (k) {
                    if (m[k.x.toFixed(4)] == k.y.toFixed(4)) continue;
                    m[k.x.toFixed(4)] = k.y.toFixed(4);
                    var M = x.t + W((k[S] - x[S]) / (b[S] - x[S])) * (b.t - x.t),
                        O = T.t + W((k[P] - T[P]) / (C[P] - T[P])) * (C.t - T.t);
                    M >= 0 && 1 >= M && O >= 0 && 1 >= O && (i ? v++ : v.push({x: k.x, y: k.y, t1: M, t2: O}))
                }
            }
            return v
        }

        function v(t, e) {
            return y(t, e)
        }

        function _(t, e) {
            return y(t, e, 1)
        }

        function y(t, e, i) {
            t = A(t), e = A(e);
            for (var n, r, s, o, a, l, h, c, u, d, p = i ? 0 : [], f = 0, g = t.length; g > f; f++) {
                var v = t[f];
                if ("M" == v[0]) n = a = v[1], r = l = v[2]; else {
                    "C" == v[0] ? (u = [n, r].concat(v.slice(1)), n = u[6], r = u[7]) : (u = [n, r, n, r, a, l, a, l], n = a, r = l);
                    for (var _ = 0, y = e.length; y > _; _++) {
                        var w = e[_];
                        if ("M" == w[0]) s = h = w[1], o = c = w[2]; else {
                            "C" == w[0] ? (d = [s, o].concat(w.slice(1)), s = d[6], o = d[7]) : (d = [s, o, s, o, h, c, h, c], s = h, o = c);
                            var x = m(u, d, i);
                            if (i) p += x; else {
                                for (var b = 0, T = x.length; T > b; b++) x[b].segment1 = f, x[b].segment2 = _, x[b].bez1 = u, x[b].bez2 = d;
                                p = p.concat(x)
                            }
                        }
                    }
                }
            }
            return p
        }

        function w(t, e, i) {
            var n = x(t);
            return c(n, e, i) && y(t, [["M", e, i], ["H", n.x2 + 10]], 1) % 2 == 1
        }

        function x(t) {
            var e = i(t);
            if (e.bbox) return z(e.bbox);
            if (!t) return n();
            t = A(t);
            for (var r, s = 0, o = 0, a = [], l = [], h = 0, c = t.length; c > h; h++) if (r = t[h], "M" == r[0]) s = r[1], o = r[2], a.push(s), l.push(o); else {
                var u = O(s, o, r[1], r[2], r[3], r[4], r[5], r[6]);
                a = a.concat(u.min.x, u.max.x), l = l.concat(u.min.y, u.max.y), s = r[5], o = r[6]
            }
            var d = X.apply(0, a), p = X.apply(0, l), f = $.apply(0, a), g = $.apply(0, l), m = n(d, p, f - d, g - p);
            return e.bbox = z(m), m
        }

        function b(t, e, i, n, s) {
            if (s) return [["M", +t + +s, e], ["l", i - 2 * s, 0], ["a", s, s, 0, 0, 1, s, s], ["l", 0, n - 2 * s], ["a", s, s, 0, 0, 1, -s, s], ["l", 2 * s - i, 0], ["a", s, s, 0, 0, 1, -s, -s], ["l", 0, 2 * s - n], ["a", s, s, 0, 0, 1, s, -s], ["z"]];
            var o = [["M", t, e], ["l", i, 0], ["l", 0, n], ["l", -i, 0], ["z"]];
            return o.toString = r, o
        }

        function T(t, e, i, n, s) {
            if (null == s && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != s) var o = Math.PI / 180,
                a = t + i * Math.cos(-n * o), l = t + i * Math.cos(-s * o), h = e + i * Math.sin(-n * o),
                c = e + i * Math.sin(-s * o),
                u = [["M", a, h], ["A", i, i, 0, +(s - n > 180), 0, l, c]]; else u = [["M", t, e], ["m", 0, -n], ["a", i, n, 0, 1, 1, 0, 2 * n], ["a", i, n, 0, 1, 1, 0, -2 * n], ["z"]];
            return u.toString = r, u
        }

        function C(e) {
            var n = i(e), o = String.prototype.toLowerCase;
            if (n.rel) return s(n.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var a = [], l = 0, h = 0, c = 0, u = 0, d = 0;
            "M" == e[0][0] && (l = e[0][1], h = e[0][2], c = l, u = h, d++, a.push(["M", l, h]));
            for (var p = d, f = e.length; f > p; p++) {
                var g = a[p] = [], m = e[p];
                if (m[0] != o.call(m[0])) switch (g[0] = o.call(m[0]), g[0]) {
                    case"a":
                        g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - l).toFixed(3), g[7] = +(m[7] - h).toFixed(3);
                        break;
                    case"v":
                        g[1] = +(m[1] - h).toFixed(3);
                        break;
                    case"m":
                        c = m[1], u = m[2];
                    default:
                        for (var v = 1, _ = m.length; _ > v; v++) g[v] = +(m[v] - (v % 2 ? l : h)).toFixed(3)
                } else {
                    g = a[p] = [], "m" == m[0] && (c = m[1] + l, u = m[2] + h);
                    for (var y = 0, w = m.length; w > y; y++) a[p][y] = m[y]
                }
                var x = a[p].length;
                switch (a[p][0]) {
                    case"z":
                        l = c, h = u;
                        break;
                    case"h":
                        l += +a[p][x - 1];
                        break;
                    case"v":
                        h += +a[p][x - 1];
                        break;
                    default:
                        l += +a[p][x - 2], h += +a[p][x - 1]
                }
            }
            return a.toString = r, n.rel = s(a), a
        }

        function S(e) {
            var n = i(e);
            if (n.abs) return s(n.abs);
            if (D(e, "array") && D(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
            var o, a = [], l = 0, h = 0, c = 0, u = 0, d = 0;
            "M" == e[0][0] && (l = +e[0][1], h = +e[0][2], c = l, u = h, d++, a[0] = ["M", l, h]);
            for (var p, f, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = d, v = e.length; v > m; m++) {
                if (a.push(p = []), f = e[m], o = f[0], o != o.toUpperCase()) switch (p[0] = o.toUpperCase(), p[0]) {
                    case"A":
                        p[1] = f[1], p[2] = f[2], p[3] = f[3], p[4] = f[4], p[5] = f[5], p[6] = +f[6] + l, p[7] = +f[7] + h;
                        break;
                    case"V":
                        p[1] = +f[1] + h;
                        break;
                    case"H":
                        p[1] = +f[1] + l;
                        break;
                    case"R":
                        for (var _ = [l, h].concat(f.slice(1)), y = 2, w = _.length; w > y; y++) _[y] = +_[y] + l, _[++y] = +_[y] + h;
                        a.pop(), a = a.concat(I(_, g));
                        break;
                    case"O":
                        a.pop(), _ = T(l, h, f[1], f[2]), _.push(_[0]), a = a.concat(_);
                        break;
                    case"U":
                        a.pop(), a = a.concat(T(l, h, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice(-2));
                        break;
                    case"M":
                        c = +f[1] + l, u = +f[2] + h;
                    default:
                        for (y = 1, w = f.length; w > y; y++) p[y] = +f[y] + (y % 2 ? l : h)
                } else if ("R" == o) _ = [l, h].concat(f.slice(1)), a.pop(), a = a.concat(I(_, g)), p = ["R"].concat(f.slice(-2)); else if ("O" == o) a.pop(), _ = T(l, h, f[1], f[2]), _.push(_[0]), a = a.concat(_); else if ("U" == o) a.pop(), a = a.concat(T(l, h, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice(-2)); else for (var x = 0, b = f.length; b > x; x++) p[x] = f[x];
                if (o = o.toUpperCase(), "O" != o) switch (p[0]) {
                    case"Z":
                        l = +c, h = +u;
                        break;
                    case"H":
                        l = p[1];
                        break;
                    case"V":
                        h = p[1];
                        break;
                    case"M":
                        c = p[p.length - 2], u = p[p.length - 1];
                    default:
                        l = p[p.length - 2], h = p[p.length - 1]
                }
            }
            return a.toString = r, n.abs = s(a), a
        }

        function P(t, e, i, n) {
            return [t, e, i, n, i, n]
        }

        function k(t, e, i, n, r, s) {
            var o = 1 / 3, a = 2 / 3;
            return [o * t + a * i, o * e + a * n, o * r + a * i, o * s + a * n, r, s]
        }

        function M(e, i, n, r, s, o, a, l, h, c) {
            var u, d = 120 * j / 180, p = j / 180 * (+s || 0), f = [], g = t._.cacher(function (t, e, i) {
                var n = t * B.cos(i) - e * B.sin(i), r = t * B.sin(i) + e * B.cos(i);
                return {x: n, y: r}
            });
            if (c) C = c[0], S = c[1], b = c[2], T = c[3]; else {
                u = g(e, i, -p), e = u.x, i = u.y, u = g(l, h, -p), l = u.x, h = u.y;
                var m = (B.cos(j / 180 * s), B.sin(j / 180 * s), (e - l) / 2), v = (i - h) / 2,
                    _ = m * m / (n * n) + v * v / (r * r);
                _ > 1 && (_ = B.sqrt(_), n = _ * n, r = _ * r);
                var y = n * n, w = r * r,
                    x = (o == a ? -1 : 1) * B.sqrt(W((y * w - y * v * v - w * m * m) / (y * v * v + w * m * m))),
                    b = x * n * v / r + (e + l) / 2, T = x * -r * m / n + (i + h) / 2,
                    C = B.asin(((i - T) / r).toFixed(9)), S = B.asin(((h - T) / r).toFixed(9));
                C = b > e ? j - C : C, S = b > l ? j - S : S, 0 > C && (C = 2 * j + C), 0 > S && (S = 2 * j + S), a && C > S && (C -= 2 * j), !a && S > C && (S -= 2 * j)
            }
            var P = S - C;
            if (W(P) > d) {
                var k = S, O = l, A = h;
                S = C + d * (a && S > C ? 1 : -1), l = b + n * B.cos(S), h = T + r * B.sin(S), f = M(l, h, n, r, s, 0, a, O, A, [S, k, b, T])
            }
            P = S - C;
            var E = B.cos(C), I = B.sin(C), R = B.cos(S), D = B.sin(S), z = B.tan(P / 4), L = 4 / 3 * n * z,
                F = 4 / 3 * r * z, N = [e, i], X = [e + L * I, i - F * E], $ = [l + L * D, h - F * R], q = [l, h];
            if (X[0] = 2 * N[0] - X[0], X[1] = 2 * N[1] - X[1], c) return [X, $, q].concat(f);
            f = [X, $, q].concat(f).join().split(",");
            for (var U = [], Y = 0, H = f.length; H > Y; Y++) U[Y] = Y % 2 ? g(f[Y - 1], f[Y], p).y : g(f[Y], f[Y + 1], p).x;
            return U
        }

        function O(t, e, i, n, r, s, o, a) {
            for (var l, h, c, u, d, p, f, g, m = [], v = [[], []], _ = 0; 2 > _; ++_) if (0 == _ ? (h = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * o, c = 3 * i - 3 * t) : (h = 6 * e - 12 * n + 6 * s, l = -3 * e + 9 * n - 9 * s + 3 * a, c = 3 * n - 3 * e), W(l) < 1e-12) {
                if (W(h) < 1e-12) continue;
                u = -c / h, u > 0 && 1 > u && m.push(u)
            } else f = h * h - 4 * c * l, g = B.sqrt(f), 0 > f || (d = (-h + g) / (2 * l), d > 0 && 1 > d && m.push(d), p = (-h - g) / (2 * l),
            p > 0 && 1 > p && m.push(p));
            for (var y, w = m.length, x = w; w--;) u = m[w], y = 1 - u, v[0][w] = y * y * y * t + 3 * y * y * u * i + 3 * y * u * u * r + u * u * u * o, v[1][w] = y * y * y * e + 3 * y * y * u * n + 3 * y * u * u * s + u * u * u * a;
            return v[0][x] = t, v[1][x] = e, v[0][x + 1] = o, v[1][x + 1] = a, v[0].length = v[1].length = x + 2, {
                min: {
                    x: X.apply(0, v[0]),
                    y: X.apply(0, v[1])
                }, max: {x: $.apply(0, v[0]), y: $.apply(0, v[1])}
            }
        }

        function A(t, e) {
            var n = !e && i(t);
            if (!e && n.curve) return s(n.curve);
            for (var r = S(t), o = e && S(e), a = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, l = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, h = (function (t, e, i) {
                var n, r;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"].concat(M.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case"S":
                        "C" == i || "S" == i ? (n = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (n = e.x, r = e.y), t = ["C", n, r].concat(t.slice(1));
                        break;
                    case"T":
                        "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(k(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(k(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"].concat(P(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"].concat(P(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"].concat(P(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"].concat(P(e.x, e.y, e.X, e.Y))
                }
                return t
            }), c = function (t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var i = t[e]; i.length;) d[e] = "A", o && (p[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                    t.splice(e, 1), v = $(r.length, o && o.length || 0)
                }
            }, u = function (t, e, i, n, s) {
                t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", n.x, n.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], v = $(r.length, o && o.length || 0))
            }, d = [], p = [], f = "", g = "", m = 0, v = $(r.length, o && o.length || 0); v > m; m++) {
                r[m] && (f = r[m][0]), "C" != f && (d[m] = f, m && (g = d[m - 1])), r[m] = h(r[m], a, g), "A" != d[m] && "C" == f && (d[m] = "C"), c(r, m), o && (o[m] && (f = o[m][0]), "C" != f && (p[m] = f, m && (g = p[m - 1])), o[m] = h(o[m], l, g), "A" != p[m] && "C" == f && (p[m] = "C"), c(o, m)), u(r, o, a, l, m), u(o, r, l, a, m);
                var _ = r[m], y = o && o[m], w = _.length, x = o && y.length;
                a.x = _[w - 2], a.y = _[w - 1], a.bx = N(_[w - 4]) || a.x, a.by = N(_[w - 3]) || a.y, l.bx = o && (N(y[x - 4]) || l.x), l.by = o && (N(y[x - 3]) || l.y), l.x = o && y[x - 2], l.y = o && y[x - 1]
            }
            return o || (n.curve = s(r)), o ? [r, o] : r
        }

        function E(t, e) {
            if (!e) return t;
            var i, n, r, s, o, a, l;
            for (t = A(t), r = 0, o = t.length; o > r; r++) for (l = t[r], s = 1, a = l.length; a > s; s += 2) i = e.x(l[s], l[s + 1]), n = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n;
            return t
        }

        function I(t, e) {
            for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2) {
                var s = [{x: +t[n - 2], y: +t[n - 1]}, {x: +t[n], y: +t[n + 1]}, {
                    x: +t[n + 2],
                    y: +t[n + 3]
                }, {x: +t[n + 4], y: +t[n + 5]}];
                e ? n ? r - 4 == n ? s[3] = {x: +t[0], y: +t[1]} : r - 2 == n && (s[2] = {
                    x: +t[0],
                    y: +t[1]
                }, s[3] = {x: +t[2], y: +t[3]}) : s[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1]
                } : r - 4 == n ? s[3] = s[2] : n || (s[0] = {
                    x: +t[n],
                    y: +t[n + 1]
                }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
            }
            return i
        }

        var R = e.prototype, D = t.is, z = t._.clone, L = "hasOwnProperty", F = /,?([a-z]),?/gi, N = parseFloat,
            B = Math, j = B.PI, X = B.min, $ = B.max, q = B.pow, W = B.abs, U = a(1), Y = a(), H = a(0, 1),
            G = t._unit2px, V = {
                path: function (t) {
                    return t.attr("path")
                }, circle: function (t) {
                    var e = G(t);
                    return T(e.cx, e.cy, e.r)
                }, ellipse: function (t) {
                    var e = G(t);
                    return T(e.cx || 0, e.cy || 0, e.rx, e.ry)
                }, rect: function (t) {
                    var e = G(t);
                    return b(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                }, image: function (t) {
                    var e = G(t);
                    return b(e.x || 0, e.y || 0, e.width, e.height)
                }, line: function (t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                }, polyline: function (t) {
                    return "M" + t.attr("points")
                }, polygon: function (t) {
                    return "M" + t.attr("points") + "z"
                }, deflt: function (t) {
                    var e = t.node.getBBox();
                    return b(e.x, e.y, e.width, e.height)
                }
            };
        t.path = i, t.path.getTotalLength = U, t.path.getPointAtLength = Y, t.path.getSubpath = function (t, e, i) {
            if (this.getTotalLength(t) - i < 1e-6) return H(t, e).end;
            var n = H(t, i, 1);
            return e ? H(n, e).end : n
        }, R.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, R.getPointAtLength = function (t) {
            return Y(this.attr("d"), t)
        }, R.getSubpath = function (e, i) {
            return t.path.getSubpath(this.attr("d"), e, i)
        }, t._.box = n, t.path.findDotsAtSegment = l, t.path.bezierBBox = h, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = u, t.path.intersection = v, t.path.intersectionNumber = _, t.path.isPointInside = w, t.path.getBBox = x, t.path.get = V, t.path.toRelative = C, t.path.toAbsolute = S, t.path.toCubic = A, t.path.map = E, t.path.toString = r, t.path.clone = s
    }), n.plugin(function (t) {
        var n = Math.max, r = Math.min, s = function (t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t) for (var e = 0, i = t.length; i > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, o = s.prototype;
        o.push = function () {
            for (var t, e, i = 0, n = arguments.length; n > i; i++) t = arguments[i], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, o.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, o.forEach = function (t, e) {
            for (var i = 0, n = this.items.length; n > i; i++) if (t.call(e, this.items[i], i) === !1) return this;
            return this
        }, o.animate = function (n, r, s, o) {
            "function" != typeof s || s.length || (o = s, s = i.linear), n instanceof t._.Animation && (o = n.callback, s = n.easing, r = s.dur, n = n.attr);
            var a = arguments;
            if (t.is(n, "array") && t.is(a[a.length - 1], "array")) var l = !0;
            var h, c = function () {
                h ? this.b = h : h = this.b
            }, u = 0, d = o && function () {
                u++ == this.length && o.call(this)
            };
            return this.forEach(function (t, i) {
                e.once("snap.animcreated." + t.id, c), l ? a[i] && t.animate.apply(t, a[i]) : t.animate(n, r, s, d)
            })
        }, o.remove = function () {
            for (; this.length;) this.pop().remove();
            return this
        }, o.bind = function (t, e, i) {
            var n = {};
            if ("function" == typeof e) this.bindings[t] = e; else {
                var r = i || t;
                this.bindings[t] = function (t) {
                    n[r] = t, e.attr(n)
                }
            }
            return this
        }, o.attr = function (t) {
            var e = {};
            for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
            for (var n = 0, r = this.items.length; r > n; n++) this.items[n].attr(e);
            return this
        }, o.clear = function () {
            for (; this.length;) this.pop()
        }, o.splice = function (t, e) {
            t = 0 > t ? n(this.length + t, 0) : t, e = n(0, r(this.length - t, e));
            var i, o = [], a = [], l = [];
            for (i = 2; i < arguments.length; i++) l.push(arguments[i]);
            for (i = 0; e > i; i++) a.push(this[t + i]);
            for (; i < this.length - t; i++) o.push(this[t + i]);
            var h = l.length;
            for (i = 0; i < h + o.length; i++) this.items[t + i] = this[t + i] = h > i ? l[i] : o[i - h];
            for (i = this.items.length = this.length -= e - h; this[i];) delete this[i++];
            return new s(a)
        }, o.exclude = function (t) {
            for (var e = 0, i = this.length; i > e; e++) if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, o.insertAfter = function (t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, o.getBBox = function () {
            for (var t = [], e = [], i = [], s = [], o = this.items.length; o--;) if (!this.items[o].removed) {
                var a = this.items[o].getBBox();
                t.push(a.x), e.push(a.y), i.push(a.x + a.width), s.push(a.y + a.height)
            }
            return t = r.apply(0, t), e = r.apply(0, e), i = n.apply(0, i), s = n.apply(0, s), {
                x: t,
                y: e,
                x2: i,
                y2: s,
                width: i - t,
                height: s - e,
                cx: t + (i - t) / 2,
                cy: e + (s - e) / 2
            }
        }, o.clone = function (t) {
            t = new s;
            for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
            return t
        }, o.toString = function () {
            return "Snap‘s set"
        }, o.type = "set", t.set = function () {
            var t = new s;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), n.plugin(function (t, i) {
        function n(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return [e, 0, 0];
                case"m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function r(e, i, r) {
            i = d(i).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], i = t.parseTransformString(i) || [];
            for (var s, o, a, c, u = Math.max(e.length, i.length), p = [], f = [], g = 0; u > g; g++) {
                if (a = e[g] || n(i[g]), c = i[g] || n(a), a[0] != c[0] || "r" == a[0].toLowerCase() && (a[2] != c[2] || a[3] != c[3]) || "s" == a[0].toLowerCase() && (a[3] != c[3] || a[4] != c[4])) {
                    e = t._.transform2matrix(e, r()), i = t._.transform2matrix(i, r()), p = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], f = [["m", i.a, i.b, i.c, i.d, i.e, i.f]];
                    break
                }
                for (p[g] = [], f[g] = [], s = 0, o = Math.max(a.length, c.length); o > s; s++) s in a && (p[g][s] = a[s]), s in c && (f[g][s] = c[s])
            }
            return {from: h(p), to: h(f), f: l(p)}
        }

        function s(t) {
            return t
        }

        function o(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        function a(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function l(t) {
            var e, i, n, r, s, o, a = 0, l = [];
            for (e = 0, i = t.length; i > e; e++) {
                for (s = "[", o = ['"' + t[e][0] + '"'], n = 1, r = t[e].length; r > n; n++) o[n] = "val[" + a++ + "]";
                s += o + "]", l[e] = s
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }

        function h(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) for (var r = 1, s = t[i].length; s > r; r++) e.push(t[i][r]);
            return e
        }

        var c = {}, u = /[a-z]+$/i, d = String;
        c.stroke = c.fill = "colour", i.prototype.equal = function (t, i) {
            return e("snap.util.equal", this, t, i).firstDefined()
        }, e.on("snap.util.equal", function (e, i) {
            var n, p, f = d(this.attr(e) || ""), g = this;
            if (f == +f && i == +i) return {from: +f, to: +i, f: s};
            if ("colour" == c[e]) return n = t.color(f), p = t.color(i), {
                from: [n.r, n.g, n.b, n.opacity],
                to: [p.r, p.g, p.b, p.opacity],
                f: a
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return i instanceof t.Matrix && (i = i.toTransformString()), t._.rgTransform.test(i) || (i = t._.svgTransform2string(i)), r(f, i, function () {
                return g.getBBox(1)
            });
            if ("d" == e || "path" == e) return n = t.path.toCubic(f, i), {from: h(n[0]), to: h(n[1]), f: l(n[0])};
            if ("points" == e) return n = d(f).split(t._.separator), p = d(i).split(t._.separator), {
                from: n,
                to: p,
                f: function (t) {
                    return t
                }
            };
            aUnit = f.match(u);
            var m = d(i).match(u);
            return aUnit && aUnit == m ? {from: parseFloat(f), to: parseFloat(i), f: o(aUnit)} : {
                from: this.asPX(e),
                to: this.asPX(e, i),
                f: s
            }
        })
    }), n.plugin(function (t, i, n, r) {
        for (var s = i.prototype, o = "hasOwnProperty", a = ("createTouch" in r.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], h = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, c = (function (t, e) {
            var i = "y" == t ? "scrollTop" : "scrollLeft", n = e && e.node ? e.node.ownerDocument : r.doc;
            return n[i in n.documentElement ? "documentElement" : "body"][i]
        }), u = function () {
            this.returnValue = !1
        }, d = function () {
            return this.originalEvent.preventDefault()
        }, p = function () {
            this.cancelBubble = !0
        }, f = function () {
            return this.originalEvent.stopPropagation()
        }, g = function () {
            return r.doc.addEventListener ? function (t, e, i, n) {
                var r = a && h[e] ? h[e] : e, s = function (r) {
                    var s = c("y", n), l = c("x", n);
                    if (a && h[o](e)) for (var u = 0, p = r.targetTouches && r.targetTouches.length; p > u; u++) if (r.targetTouches[u].target == t || t.contains(r.targetTouches[u].target)) {
                        var g = r;
                        r = r.targetTouches[u], r.originalEvent = g, r.preventDefault = d, r.stopPropagation = f;
                        break
                    }
                    var m = r.clientX + l, v = r.clientY + s;
                    return i.call(n, r, m, v)
                };
                return e !== r && t.addEventListener(e, s, !1), t.addEventListener(r, s, !1), function () {
                    return e !== r && t.removeEventListener(e, s, !1), t.removeEventListener(r, s, !1), !0
                }
            } : r.doc.attachEvent ? function (t, e, i, n) {
                var r = function (t) {
                    t = t || n.node.ownerDocument.window.event;
                    var e = c("y", n), r = c("x", n), s = t.clientX + r, o = t.clientY + e;
                    return t.preventDefault = t.preventDefault || u, t.stopPropagation = t.stopPropagation || p, i.call(n, t, s, o)
                };
                t.attachEvent("on" + e, r);
                var s = function () {
                    return t.detachEvent("on" + e, r), !0
                };
                return s
            } : void 0
        }(), m = [], v = function (t) {
            for (var i, n = t.clientX, r = t.clientY, s = c("y"), o = c("x"), l = m.length; l--;) {
                if (i = m[l], a) {
                    for (var h, u = t.touches && t.touches.length; u--;) if (h = t.touches[u], h.identifier == i.el._drag.id || i.el.node.contains(h.target)) {
                        n = h.clientX, r = h.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var d = i.el.node;
                d.nextSibling, d.parentNode, d.style.display, n += o, r += s, e("snap.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, r - i.el._drag.y, n, r, t)
            }
        }, _ = function (i) {
            t.unmousemove(v).unmouseup(_);
            for (var n, r = m.length; r--;) n = m[r], n.el._drag = {}, e("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, i);
            m = []
        }, y = l.length; y--;) !function (e) {
            t[e] = s[e] = function (i, n) {
                return t.is(i, "function") && (this.events = this.events || [], this.events.push({
                    name: e,
                    f: i,
                    unbind: g(this.node || document, e, i, n || this)
                })), this
            }, t["un" + e] = s["un" + e] = function (t) {
                for (var i = this.events || [], n = i.length; n--;) if (i[n].name == e && (i[n].f == t || !t)) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
                return this
            }
        }(l[y]);
        s.hover = function (t, e, i, n) {
            return this.mouseover(t, i).mouseout(e, n || i)
        }, s.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var w = [];
        s.drag = function (i, n, r, s, o, a) {
            function l(l, h, c) {
                (l.originalEvent || l).preventDefault(), this._drag.x = h, this._drag.y = c, this._drag.id = l.identifier, !m.length && t.mousemove(v).mouseup(_), m.push({
                    el: this,
                    move_scope: s,
                    start_scope: o,
                    end_scope: a
                }), n && e.on("snap.drag.start." + this.id, n), i && e.on("snap.drag.move." + this.id, i), r && e.on("snap.drag.end." + this.id, r), e("snap.drag.start." + this.id, o || s || this, h, c, l)
            }

            if (!arguments.length) {
                var h;
                return this.drag(function (t, e) {
                    this.attr({transform: h + (h ? "T" : "t") + [t, e]})
                }, function () {
                    h = this.transform().local
                })
            }
            return this._drag = {}, w.push({el: this, start: l}), this.mousedown(l), this
        }, s.undrag = function () {
            for (var i = w.length; i--;) w[i].el == this && (this.unmousedown(w[i].start), w.splice(i, 1), e.unbind("snap.drag.*." + this.id));
            return !w.length && t.unmousemove(v).unmouseup(_), this
        }
    }), n.plugin(function (t, i, n) {
        var r = (i.prototype, n.prototype), s = /^\s*url\((.+)\)/, o = String, a = t._.$;
        t.filter = {}, r.filter = function (e) {
            var n = this;
            "svg" != n.type && (n = n.paper);
            var r = t.parse(o(e)), s = t._.id(), l = (n.node.offsetWidth, n.node.offsetHeight, a("filter"));
            return a(l, {id: s, filterUnits: "userSpaceOnUse"}), l.appendChild(r.node), n.defs.appendChild(l), new i(l)
        }, e.on("snap.util.getattr.filter", function () {
            e.stop();
            var i = a(this.node, "filter");
            if (i) {
                var n = o(i).match(s);
                return n && t.select(n[1])
            }
        }), e.on("snap.util.attr.filter", function (n) {
            if (n instanceof i && "filter" == n.type) {
                e.stop();
                var r = n.node.id;
                r || (a(n.node, {id: n.id}), r = n.id), a(this.node, {filter: t.url(r)})
            }
            n && "none" != n || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function (e, i) {
            null == e && (e = 2);
            var n = null == i ? e : [e, i];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {def: n})
        }, t.filter.blur.toString = function () {
            return this()
        }, t.filter.shadow = function (e, i, n, r, s) {
            return "string" == typeof n && (r = n, s = r, n = 4), "string" != typeof r && (s = r, r = "#000"), r = r || "#000", null == n && (n = 4), null == s && (s = 1), null == e && (e = 0, i = 2), null == i && (i = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: r,
                dx: e,
                dy: i,
                blur: n,
                opacity: s
            })
        }, t.filter.shadow.toString = function () {
            return this()
        }, t.filter.grayscale = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function () {
            return this()
        }, t.filter.sepia = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function () {
            return this()
        }, t.filter.saturate = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - e})
        }, t.filter.saturate.toString = function () {
            return this()
        }, t.filter.hueRotate = function (e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: e})
        }, t.filter.hueRotate.toString = function () {
            return this()
        }, t.filter.invert = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function () {
            return this()
        }, t.filter.brightness = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: e})
        }, t.filter.brightness.toString = function () {
            return this()
        }, t.filter.contrast = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function () {
            return this()
        }
    }), n
}), !function () {
    "use strict";

    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var r = 0, s = e.length; s > r; r++) e[r][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, n = {}, r = window.Waypoint, s = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, r.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || r.isTouch) && (e.didScroll = !0, r.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        r.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var n = e[i], r = n.newScroll > n.oldScroll, s = r ? n.forward : n.backward;
            for (var o in this.waypoints[i]) {
                var a = this.waypoints[i][o], l = n.oldScroll < a.triggerPoint, h = n.newScroll >= a.triggerPoint,
                    c = l && h, u = !l && !h;
                (c || u) && (a.queueTrigger(s), t[a.group.id] = a.group)
            }
        }
        for (var d in t) t[d].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, r = t.length; r > n; n++) t[n].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = this.adapter.offset(), n = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var o in this.waypoints[r]) {
                var a, l, h, c, u, d = this.waypoints[r][o], p = d.options.offset, f = d.triggerPoint, g = 0,
                    m = null == f;
                d.element !== d.element.window && (g = d.adapter.offset()[s.offsetProp]), "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p), d.options.offset.indexOf("%") > -1 && (p = Math.ceil(s.contextDimension * p / 100))), a = s.contextScroll - s.contextOffset, d.triggerPoint = g + a - p, l = f < s.oldScroll, h = d.triggerPoint >= s.oldScroll, c = l && h, u = !l && !h, !m && c ? (d.queueTrigger(s.backward), n[d.group.id] = d.group) : !m && u ? (d.queueTrigger(s.forward), n[d.group.id] = d.group) : m && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), n[d.group.id] = d.group)
            }
        }
        for (var v in n) n[v].flushTriggers();
        return this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function (t) {
        return n[t.waypointContextKey]
    }, window.onload = function () {
        s && s(), e.refreshAll()
    }, r.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, r.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }

    var n = {vertical: {}, horizontal: {}}, r = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i], r = "up" === i || "left" === i;
            n.sort(r ? e : t);
            for (var s = 0, o = n.length; o > s; s += 1) {
                var a = n[s];
                (a.options.continuous || s === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = r.Adapter.inArray(e, this.waypoints), n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = r.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = r.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t)
    }, r.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
        t[n] = e[n]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], n = arguments[0];
            return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function () {
                var r = t.extend({}, n, {element: this});
                "string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), i.push(new e(r))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), function (t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(e) {
        return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
            var n = t(this), r = n.data(k);
            r || (r = new i(this, e), n.data(k, r))
        })
    }

    function i(e, i) {
        function M(e) {
            if (!(ht() || t(e.target).closest(i.excludedElements, Wt).length > 0)) {
                var n, r = e.originalEvent ? e.originalEvent : e, s = C ? r.touches[0] : r;
                return Ut = w, C ? Yt = r.touches.length : e.preventDefault(), zt = 0, Lt = null, $t = null, Ft = 0, Nt = 0, Bt = 0, jt = 1, Xt = 0, Ht = ft(), qt = vt(), at(), !C || Yt === i.fingers || i.fingers === _ || q() ? (ut(0, s), Gt = Pt(), 2 == Yt && (ut(1, r.touches[1]), Nt = Bt = wt(Ht[0].start, Ht[1].start)), (i.swipeStatus || i.pinchStatus) && (n = z(r, Ut))) : n = !1, n === !1 ? (Ut = T, z(r, Ut), n) : (i.hold && (te = setTimeout(t.proxy(function () {
                    Wt.trigger("hold", [r.target]), i.hold && (n = i.hold.call(Wt, r, r.target))
                }, this), i.longTapThreshold)), ct(!0), null)
            }
        }

        function O(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            if (Ut !== b && Ut !== T && !lt()) {
                var n, r = C ? e.touches[0] : e, s = dt(r);
                if (Vt = Pt(), C && (Yt = e.touches.length), i.hold && clearTimeout(te), Ut = x, 2 == Yt && (0 == Nt ? (ut(1, e.touches[1]), Nt = Bt = wt(Ht[0].start, Ht[1].start)) : (dt(e.touches[1]), Bt = wt(Ht[0].end, Ht[1].end), $t = bt(Ht[0].end, Ht[1].end)), jt = xt(Nt, Bt), Xt = Math.abs(Nt - Bt)), Yt === i.fingers || i.fingers === _ || !C || q()) {
                    if (Lt = St(s.start, s.end), X(t, Lt), zt = Tt(s.start, s.end), Ft = yt(), gt(Lt, zt), (i.swipeStatus || i.pinchStatus) && (n = z(e, Ut)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                        var o = !0;
                        if (i.triggerOnTouchLeave) {
                            var a = kt(this);
                            o = Mt(s.end, a)
                        }
                        !i.triggerOnTouchEnd && o ? Ut = D(x) : i.triggerOnTouchLeave && !o && (Ut = D(b)), Ut != T && Ut != b || z(e, Ut)
                    }
                } else Ut = T, z(e, Ut);
                n === !1 && (Ut = T, z(e, Ut))
            }
        }

        function A(t) {
            var e = t.originalEvent;
            return C && e.touches.length > 0 ? (ot(), !0) : (lt() && (Yt = Zt), Vt = Pt(), Ft = yt(), N() || !F() ? (Ut = T, z(e, Ut)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Ut === x ? (t.preventDefault(), Ut = b, z(e, Ut)) : !i.triggerOnTouchEnd && Q() ? (Ut = b, L(e, Ut, p)) : Ut === x && (Ut = T, z(e, Ut)), ct(!1), null)
        }

        function E() {
            Yt = 0, Vt = 0, Gt = 0, Nt = 0, Bt = 0, jt = 1, at(), ct(!1)
        }

        function I(t) {
            var e = t.originalEvent;
            i.triggerOnTouchLeave && (Ut = D(b), z(e, Ut))
        }

        function R() {
            Wt.unbind(At, M), Wt.unbind(Dt, E), Wt.unbind(Et, O), Wt.unbind(It, A), Rt && Wt.unbind(Rt, I), ct(!1)
        }

        function D(t) {
            var e = t, n = j(), r = F(), s = N();
            return !n || s ? e = T : !r || t != x || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !r && t == b && i.triggerOnTouchLeave && (e = T) : e = b, e
        }

        function z(t, e) {
            var i = void 0;
            return H() || Y() || W() || q() ? ((H() || Y()) && (i = L(t, e, u)), (W() || q()) && i !== !1 && (i = L(t, e, d))) : rt() && i !== !1 ? i = L(t, e, f) : st() && i !== !1 ? i = L(t, e, g) : nt() && i !== !1 && (i = L(t, e, p)), e === T && E(t), e === b && (C ? 0 == t.touches.length && E(t) : E(t)), i
        }

        function L(e, h, c) {
            var m = void 0;
            if (c == u) {
                if (Wt.trigger("swipeStatus", [h, Lt || null, zt || 0, Ft || 0, Yt, Ht]), i.swipeStatus && (m = i.swipeStatus.call(Wt, e, h, Lt || null, zt || 0, Ft || 0, Yt, Ht), m === !1)) return !1;
                if (h == b && U()) {
                    if (Wt.trigger("swipe", [Lt, zt, Ft, Yt, Ht]), i.swipe && (m = i.swipe.call(Wt, e, Lt, zt, Ft, Yt, Ht), m === !1)) return !1;
                    switch (Lt) {
                        case n:
                            Wt.trigger("swipeLeft", [Lt, zt, Ft, Yt, Ht]), i.swipeLeft && (m = i.swipeLeft.call(Wt, e, Lt, zt, Ft, Yt, Ht));
                            break;
                        case r:
                            Wt.trigger("swipeRight", [Lt, zt, Ft, Yt, Ht]), i.swipeRight && (m = i.swipeRight.call(Wt, e, Lt, zt, Ft, Yt, Ht));
                            break;
                        case s:
                            Wt.trigger("swipeUp", [Lt, zt, Ft, Yt, Ht]), i.swipeUp && (m = i.swipeUp.call(Wt, e, Lt, zt, Ft, Yt, Ht));
                            break;
                        case o:
                            Wt.trigger("swipeDown", [Lt, zt, Ft, Yt, Ht]), i.swipeDown && (m = i.swipeDown.call(Wt, e, Lt, zt, Ft, Yt, Ht))
                    }
                }
            }
            if (c == d) {
                if (Wt.trigger("pinchStatus", [h, $t || null, Xt || 0, Ft || 0, Yt, jt, Ht]), i.pinchStatus && (m = i.pinchStatus.call(Wt, e, h, $t || null, Xt || 0, Ft || 0, Yt, jt, Ht), m === !1)) return !1;
                if (h == b && $()) switch ($t) {
                    case a:
                        Wt.trigger("pinchIn", [$t || null, Xt || 0, Ft || 0, Yt, jt, Ht]), i.pinchIn && (m = i.pinchIn.call(Wt, e, $t || null, Xt || 0, Ft || 0, Yt, jt, Ht));
                        break;
                    case l:
                        Wt.trigger("pinchOut", [$t || null, Xt || 0, Ft || 0, Yt, jt, Ht]), i.pinchOut && (m = i.pinchOut.call(Wt, e, $t || null, Xt || 0, Ft || 0, Yt, jt, Ht))
                }
            }
            return c == p ? h !== T && h !== b || (clearTimeout(Jt), clearTimeout(te), Z() && !tt() ? (Kt = Pt(), Jt = setTimeout(t.proxy(function () {
                Kt = null, Wt.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Wt, e, e.target))
            }, this), i.doubleTapThreshold)) : (Kt = null, Wt.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Wt, e, e.target)))) : c == f ? h !== T && h !== b || (clearTimeout(Jt), Kt = null, Wt.trigger("doubletap", [e.target]), i.doubleTap && (m = i.doubleTap.call(Wt, e, e.target))) : c == g && (h !== T && h !== b || (clearTimeout(Jt), Kt = null, Wt.trigger("longtap", [e.target]), i.longTap && (m = i.longTap.call(Wt, e, e.target)))), m
        }

        function F() {
            var t = !0;
            return null !== i.threshold && (t = zt >= i.threshold), t
        }

        function N() {
            var t = !1;
            return null !== i.cancelThreshold && null !== Lt && (t = mt(Lt) - zt >= i.cancelThreshold), t
        }

        function B() {
            return null === i.pinchThreshold || Xt >= i.pinchThreshold
        }

        function j() {
            var t;
            return t = !i.maxTimeThreshold || !(Ft >= i.maxTimeThreshold)
        }

        function X(t, e) {
            if (i.preventDefaultEvents !== !1) if (i.allowPageScroll === h) t.preventDefault(); else {
                var a = i.allowPageScroll === c;
                switch (e) {
                    case n:
                        (i.swipeLeft && a || !a && i.allowPageScroll != m) && t.preventDefault();
                        break;
                    case r:
                        (i.swipeRight && a || !a && i.allowPageScroll != m) && t.preventDefault();
                        break;
                    case s:
                        (i.swipeUp && a || !a && i.allowPageScroll != v) && t.preventDefault();
                        break;
                    case o:
                        (i.swipeDown && a || !a && i.allowPageScroll != v) && t.preventDefault()
                }
            }
        }

        function $() {
            var t = G(), e = V(), i = B();
            return t && e && i
        }

        function q() {
            return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
        }

        function W() {
            return !(!$() || !q())
        }

        function U() {
            var t = j(), e = F(), i = G(), n = V(), r = N(), s = !r && n && i && e && t;
            return s
        }

        function Y() {
            return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
        }

        function H() {
            return !(!U() || !Y())
        }

        function G() {
            return Yt === i.fingers || i.fingers === _ || !C
        }

        function V() {
            return 0 !== Ht[0].end.x
        }

        function Q() {
            return !!i.tap
        }

        function Z() {
            return !!i.doubleTap
        }

        function K() {
            return !!i.longTap
        }

        function J() {
            if (null == Kt) return !1;
            var t = Pt();
            return Z() && t - Kt <= i.doubleTapThreshold
        }

        function tt() {
            return J()
        }

        function et() {
            return (1 === Yt || !C) && (isNaN(zt) || zt < i.threshold)
        }

        function it() {
            return Ft > i.longTapThreshold && zt < y
        }

        function nt() {
            return !(!et() || !Q())
        }

        function rt() {
            return !(!J() || !Z())
        }

        function st() {
            return !(!it() || !K())
        }

        function ot() {
            Qt = Pt(), Zt = event.touches.length + 1
        }

        function at() {
            Qt = 0, Zt = 0
        }

        function lt() {
            var t = !1;
            if (Qt) {
                var e = Pt() - Qt;
                e <= i.fingerReleaseThreshold && (t = !0)
            }
            return t
        }

        function ht() {
            return !(Wt.data(k + "_intouch") !== !0)
        }

        function ct(t) {
            t === !0 ? (Wt.bind(Et, O), Wt.bind(It, A), Rt && Wt.bind(Rt, I)) : (Wt.unbind(Et, O, !1), Wt.unbind(It, A, !1), Rt && Wt.unbind(Rt, I, !1)), Wt.data(k + "_intouch", t === !0)
        }

        function ut(t, e) {
            var i = void 0 !== e.identifier ? e.identifier : 0;
            return Ht[t].identifier = i, Ht[t].start.x = Ht[t].end.x = e.pageX || e.clientX, Ht[t].start.y = Ht[t].end.y = e.pageY || e.clientY, Ht[t]
        }

        function dt(t) {
            var e = void 0 !== t.identifier ? t.identifier : 0, i = pt(e);
            return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
        }

        function pt(t) {
            for (var e = 0; e < Ht.length; e++) if (Ht[e].identifier == t) return Ht[e]
        }

        function ft() {
            for (var t = [], e = 0; e <= 5; e++) t.push({start: {x: 0, y: 0}, end: {x: 0, y: 0}, identifier: 0});
            return t
        }

        function gt(t, e) {
            e = Math.max(e, mt(t)), qt[t].distance = e
        }

        function mt(t) {
            if (qt[t]) return qt[t].distance;
        }

        function vt() {
            var t = {};
            return t[n] = _t(n), t[r] = _t(r), t[s] = _t(s), t[o] = _t(o), t
        }

        function _t(t) {
            return {direction: t, distance: 0}
        }

        function yt() {
            return Vt - Gt
        }

        function wt(t, e) {
            var i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(i * i + n * n))
        }

        function xt(t, e) {
            var i = e / t * 1;
            return i.toFixed(2)
        }

        function bt() {
            return jt < 1 ? l : a
        }

        function Tt(t, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
        }

        function Ct(t, e) {
            var i = t.x - e.x, n = e.y - t.y, r = Math.atan2(n, i), s = Math.round(180 * r / Math.PI);
            return s < 0 && (s = 360 - Math.abs(s)), s
        }

        function St(t, e) {
            var i = Ct(t, e);
            return i <= 45 && i >= 0 ? n : i <= 360 && i >= 315 ? n : i >= 135 && i <= 225 ? r : i > 45 && i < 135 ? o : s
        }

        function Pt() {
            var t = new Date;
            return t.getTime()
        }

        function kt(e) {
            e = t(e);
            var i = e.offset(),
                n = {left: i.left, right: i.left + e.outerWidth(), top: i.top, bottom: i.top + e.outerHeight()};
            return n
        }

        function Mt(t, e) {
            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
        }

        var Ot = C || P || !i.fallbackToMouseEvents,
            At = Ot ? P ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            Et = Ot ? P ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            It = Ot ? P ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", Rt = Ot ? null : "mouseleave",
            Dt = P ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel", zt = 0, Lt = null, Ft = 0, Nt = 0, Bt = 0,
            jt = 1, Xt = 0, $t = 0, qt = null, Wt = t(e), Ut = "start", Yt = 0, Ht = null, Gt = 0, Vt = 0, Qt = 0,
            Zt = 0, Kt = 0, Jt = null, te = null;
        try {
            Wt.bind(At, M), Wt.bind(Dt, E)
        } catch (ee) {
            t.error("events not supported " + At + "," + Dt + " on jQuery.swipe")
        }
        this.enable = function () {
            return Wt.bind(At, M), Wt.bind(Dt, E), Wt
        }, this.disable = function () {
            return R(), Wt
        }, this.destroy = function () {
            R(), Wt.data(k, null), Wt = null
        }, this.option = function (e, n) {
            if (void 0 !== i[e]) {
                if (void 0 === n) return i[e];
                i[e] = n
            } else t.error("Option " + e + " does not exist on jQuery.swipe.options");
            return null
        }
    }

    var n = "left", r = "right", s = "up", o = "down", a = "in", l = "out", h = "none", c = "auto", u = "swipe",
        d = "pinch", p = "tap", f = "doubletap", g = "longtap", m = "horizontal", v = "vertical", _ = "all", y = 10,
        w = "start", x = "move", b = "end", T = "cancel", C = "ontouchstart" in window,
        S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        P = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, k = "TouchSwipe", M = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        };
    t.fn.swipe = function (i) {
        var n = t(this), r = n.data(k);
        if (r && "string" == typeof i) {
            if (r[i]) return r[i].apply(this, Array.prototype.slice.call(arguments, 1));
            t.error("Method " + i + " does not exist on jQuery.swipe")
        } else if (!(r || "object" != typeof i && i)) return e.apply(this, arguments);
        return n
    }, t.fn.swipe.defaults = M, t.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: x,
        PHASE_END: b,
        PHASE_CANCEL: T
    }, t.fn.swipe.directions = {LEFT: n, RIGHT: r, UP: s, DOWN: o, IN: a, OUT: l}, t.fn.swipe.pageScroll = {
        NONE: h,
        HORIZONTAL: m,
        VERTICAL: v,
        AUTO: c
    }, t.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, ALL: _}
}), function (t) {
    function e(e) {
        t(e).validVal({
            validate: {onKeyup: !0}, form: {
                onInvalid: function (e, i) {
                    e.each(function () {
                        t(this).addClass("invalid")
                    })
                }, onValid: function (r, s) {
                    t(".spinner").addClass("active"), void 0 === window.FormData && 0 !== t(e).find('[type="file"]').filter(function () {
                        return this.value
                    }).length ? t(t(e).find("iframe")[0]).off().on("load", function () {
                        t(".spinner").removeClass("active");
                        var i = !0;
                        try {
                            var r = t.parseJSON(n(t(this).attr("id")))
                        } catch (s) {
                            i = !1
                        }
                        i && 1 == r.res ? (l(e), t(e).trigger("resetForm"), a(e.find(".form-feedback"), r.feedback)) : a(e.find(".form-feedback"), AjaxOptions.FailureMessage, "error")
                    }) : i(t(this))
                }
            }
        }), void 0 === window.FormData && 0 != t(e).find('[type="file"]:empty').length || t(e).on("click", '[type="submit"]', function (e) {
            e.preventDefault(), t(this).closest("form").triggerHandler("submitForm.vv")
        })
    }

    function i(e) {
        if (e.find(".form-feedback").removeClass("active"), void 0 !== window.FormData) {
            var i = !1, n = new FormData, r = e.find('[type="file"]'), s = new Array;
            r.length > 0 && (t(r).each(function (e, i) {
                t(t(i)[0].files).each(function (t, e) {
                    s.push(e)
                })
            }), t(s).each(function (t, e) {
                n.append("file_" + t, e)
            }));
            var o = e.serializeArray();
            t.each(o, function (t, e) {
                n.append(e.name, e.value)
            })
        } else {
            var i = "application/x-www-form-urlencoded; charset=UTF-8", n = e.serialize();
            n += "&action=custom_contact_mailer"
        }
        t.ajax({
            dataType: "json",
            cache: !1,
            type: "POST",
            contentType: i,
            processData: !1,
            url: AjaxOptions.AjaxUrl,
            data: n,
            success: function (i) {
                1 == i.res && (t(e).trigger("resetForm"), l(e)), a(e.find(".form-feedback"), i.feedback)
            },
            error: function (t) {
                a(e.find(".form-feedback"), AjaxOptions.FailureMessage, "error")
            },
            complete: function (e) {
                t(".spinner").removeClass("active")
            }
        })
    }

    function n(t) {
        var e = r(t);
        if (e) return ret = e.document.getElementsByTagName("body")[0].innerHTML, ret
    }

    function r(t) {
        for (var e = 0; e < frames.length; e++) if (frames[e].name == t) return frames[e];
        return null
    }

    function s() {
        var e = t(this).data("number") + 1, i = t(this).siblings("[data-number]"), n = t(this),
            r = t(this).closest("form").find(".form-feedback");
        if (t(t(this)[0].files).each(function (t, e) {
            e.size > 2e7 && (a(r, "Za duży plik.", "error"), n.val(""))
        }), t(this).val() && 0 == i.length) {
            var l = t('<div class="fileInputCont"><span class="js-file-input-delete" title="Usuń załącznik">×</span><div class="fileInput"><span class="file-input-label"><i class="ico-file"></i><span>dodaj załącznik</span></span><input type="file" name="file_' + e + '" data-number="' + e + '" class="upload" accept=".gif,.jpg,.jpeg,.png,.doc,.docx,.pdf"/></div></div>');
            l.find('[type="file"]').on("change", s), l.find(".js-file-input-delete").on("click", o), l.insertAfter(t(this).closest(".fileInputCont"))
        }
        t(this).val() ? (t(this).prop("disabled", !0).css("cursor", "default"), t(this).siblings(".file-input-label").find("span").text(t(this).val().split(/[\\\/]/).pop()), t(".upload:disabled").closest(".fileInputCont").addClass("deletable")) : t(this).siblings(".file-input-label").find("span").text("dodaj załącznik")
    }

    function o() {
        t(this).closest(".fileInputCont").remove()
    }

    function a(e, i, n) {
        null == n ? n = "active" : n += " active", e.text(i).addClass(n).animate({height: "2em"}), setTimeout(function () {
            e.animate({height: 0}, function () {
                t(this).text("").removeClass(n)
            })
        }, 6e3)
    }

    function l(e) {
        t(e).find(".fileInputCont").length > 0 && (t(e).find(".fileInputCont:not(:first-child)").each(function (e, i) {
            t(i).remove()
        }), t(e).find(".fileInputCont:first-child").removeClass("deletable"), t(e).find(".fileInputCont:first-child").find(".upload").prop("disabled", !1).val(""), t(e).find(".fileInputCont:first-child .file-input-label span").text("dodaj załącznik"))
    }

    window.cip = {
        init: function () {
            var e = this;
            t("body").addClass("no-dragging"), this.eucookie(), this.navigation(), this.morphNavigation(), this.headerSetup(), this.testimonials(), this.contact(), this.affixBtn(), this.popups(), this.jobOfferForm(), this.hashNav(), this.scrollSpy(), this.banner(), this.showNewRealization(), this.isMobile = this.mobiledetect(), this.isMobile || (this.waypoints(), t("html").removeClass("mobile").addClass("desktop")), new this.ui.DragGallery(t(".portfolioGallery"), {
                rowCount: 2,
                isMobile: e.isMobile
            }), new this.ui.DragGallery(t(".teamGallery"), {
                rowCount: 1,
                isMobile: e.isMobile
            }), this.aww_vis = 1, this.aww = t("#awwwards"), t(window).on("scroll", function () {
                var i = t(window).scrollTop();
                i > 50 && e.aww_vis && (e.aww_vis = 0, e.aww.fadeOut(500)), i <= 50 && !e.aww_vis && (e.aww_vis = 1, e.aww.fadeIn(300))
            })
        }, showNewRealization: function () {
            setTimeout(function () {
                t("#bannerOpen").addClass("position")
            }, 2e3)
        }, banner: function () {
            t(window).width() > 1120 && (TweenLite.to(t("#header-menu-menu"), .4, {x: -230}), TweenLite.to(t("#header-menu-menu-en"), .4, {x: -230})), t(".zwin-button-click").on("click", function () {
                TweenLite.to(t("#header-menu-menu"), .4, {x: 0}), TweenLite.to(t("#header-menu-menu-en"), .4, {x: 0}), t(window).width() > 1120 ? TweenLite.to(t(".banner"), .4, {
                    x: 300,
                    onComplete: function () {
                        t("#bannerOpen").css("right", "0")
                    }
                }) : TweenLite.to(t(".banner"), .4, {
                    y: 150, onComplete: function () {
                        t("#bannerOpen").css("bottom", "0")
                    }
                })
            }), t("#rozwin").on("click", function () {
                t(window).width() > 1120 ? (TweenLite.to(t("#header-menu-menu"), .4, {x: -230}), TweenLite.to(t("#header-menu-menu-en"), .4, {x: -230}), TweenLite.to(t(".banner"), .4, {
                    x: 0,
                    onComplete: function () {
                        t("#bannerOpen").css("right", "-150px")
                    }
                })) : TweenLite.to(t(".banner"), .4, {
                    y: 0, onComplete: function () {
                        t("#bannerOpen").css("bottom", "0")
                    }
                })
            }), t(window).on("scroll", function (e) {
                t("#zwin").click()
            })
        }, mobiledetect: function () {
            return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
        }, ui: {}, eucookie: function () {
            function e(t, e, i) {
                var n = new Date;
                n.setDate(n.getDate() + i), document.cookie = t + "=" + escape(e) + ";path=/" + (null == i ? "" : ";expires=" + n.toGMTString())
            }

            document.cookie.indexOf("eucookie") === -1 && t(".euCookies").show(), t(".js-closeCookie").on("click", function () {
                e("eucookie", "eucookie", 3650), t(".euCookies").slideUp(300, function () {
                    t(this).remove()
                })
            })
        }, navigation: function () {
            var e = t(".naviHead"), i = t("#navTrigger1");
            i.on("click", function (t) {
                t.preventDefault(), e.hasClass("expanded") ? e.removeClass("expanded") : e.addClass("expanded")
            });
            e.on("click", "li a", function () {
                e.removeClass("expanded")
            }), t(".menu a").on("click", function () {
                t(window).width() < 768 && (t(".expanded").removeClass("expanded"), t("body").removeClass("fixexpanded"))
            })
        }, hashNav: function () {
            var e = this, i = t(".fixedNav");
            t("body").on("click", 'a[href^="#"]', function (n) {
                n.preventDefault();
                var r = t(this), s = r.attr("href"), o = t(s), a = i.hasClass("expanded") ? 76 : 0;
                "#front_end" !== s && "#what_we_do" !== s || (a = 0), o.length && (e.scrolling = !0, TweenLite.to("body, html", 1, {
                    scrollTop: o.offset().top - a,
                    onComplete: function () {
                        window.location.hash = s, t("html, body").scrollTop(o.offset().top - a), e.scrolling = !1
                    }
                }))
            }), t("#homeTrigger").on("click", function (t) {
                t.preventDefault(), TweenLite.to("body, html", 1, {
                    scrollTop: 0, onComplete: function () {
                        window.location.hash = ""
                    }
                })
            })
        }, waypoints: function () {
            var e = t(".diller #algoritma"), i = t(".diller #back_end"), n = t(".diller #mobi"),
                r = t(".contactData"), s = t(".contactForm");
            t("main");
            testimonials = t(".testimonials"), e.waypoint({
                handler: function (t) {
                    e.find("i").addClass("animated fadeInLeft"), e.find(".animc").addClass("animated fadeInRight")
                }, offset: "80%"
            }), i.waypoint({
                handler: function (t) {
                    i.find("i").addClass("animated fadeInLeft"), i.find(".animc").addClass("animated fadeInRight")
                }, offset: "80%"
            }), n.waypoint({
                handler: function (t) {
                    n.find("i").addClass("animated fadeInLeft"), n.find(".animc").addClass("animated fadeInRight")
                }, offset: "80%"
            }), r.waypoint({
                handler: function (t) {
                    r.addClass("animated fadeInLeft"), s.addClass("animated fadeInRight")
                }, offset: "67%"
            })
        }, scrollSpy: function () {
            function e() {
                s = [], r.forEach(function (e, i) {
                    t(e).length <= 0 || s.push(t(e).offset().top - 100)
                })
            }

            function i(t) {
                var e = "";
                s.forEach(function (i, n) {
                    t > i && (e = n), t < s[0] && (a = "", o.removeClass("current"))
                }), e !== a && (a = e, o.removeClass("current"), o.eq(e).addClass("current"))
            }

            var n = this, r = [".diller"], s = [], o = t(".fixedNav .menu a"),
                a = 0;
            o.on("click", function () {
                o.removeClass("current"), t(this).addClass("current")
            }), e(), t(window).on("resize", e), t(window).on("scroll", function () {
                var e = t(window).scrollTop();
                n.scrolling || i(e)
            })
        }, headerSetup: function () {
            function e() {
                var e = t(window).height(), i = (t(window).width(), 0);
                r && (i = r.height()), n.hasClass("offer") ? (a = e > 400 ? 400 + i : 400, n.css({height: 400})) : (a = e > 400 ? e + i : 400, n.css({height: e > 400 ? e : 400}))
            }

            function i() {
                var e = t(window).scrollTop();
                e > a && !o.hasClass("fixed") && o.addClass("fixed"), e <= a && o.hasClass("fixed") && o.removeClass("fixed")
            }

            var n = t(".pageHeader"), s = "", o = t(".fixedNav"), a = 0;
            e(), t(".dillerSimple-item").on("mouseenter", function () {
                var e = t(this);
                e.hasClass("hovered") || e.addClass("hovered")
            }), t(window).on("resize", function () {
                clearTimeout(s), s = setTimeout(e, 300)
            }), i(), t(window).on("scroll", function () {
                i()
            })
        }
    }, window.requestAnimFrame = function (t) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }();
    var h = {
        pcs: [], Particle: function (t, e) {
            this.type = t, this.opacity = .3, this.rgb = e, this.bgc = "rgba(" + e + ", " + this.opacity + ")"
        }, FPS: function (t) {
            this.counter = 0, this.container = t, this.tick = function () {
                this.counter++
            }, this.result = function () {
                this.container.html("FPS: " + this.counter), this.counter = 0
            }, this.init = function () {
                var t = this;
                setInterval(function () {
                    t.result.call(t)
                }, 1e3)
            }, this.init()
        }, particleProto: {
            _getRandom: function () {
                return 2 * Math.random() - 1
            }, config: {speedFactor: 5}, init: function () {
                this.x = Math.random() * h.canvas.width, this.y = Math.random() * h.canvas.height, this.r = 3, this.vx = this._getRandom() * this.config.speedFactor, this.vy = this._getRandom() * this.config.speedFactor, this.max_vx = 10 * this.vx, this.max_vy = 10 * this.vy, this.orig_vx = Math.abs(this.vx), this.orig_vy = Math.abs(this.vy), this.kicked = !1, this.flykicked = !1, this.rot_val = this._getRandom(), this.rdir = Math.random() > .5 ? 1 : -1, this.rot_speed = .02 * Math.random(), this.lastTime = (new Date).getTime()
            }, draw: function () {
                if (h.ctx.save(), 0 == this.type) {
                    var t = 2 * this.r, e = t * (Math.sqrt(3) / 2);
                    h.ctx.save(), h.ctx.translate(this.x, this.y), h.ctx.rotate(this.rdir * this.rot_val), h.ctx.beginPath(), h.ctx.moveTo(0, -(2 / 3) * e), h.ctx.lineTo(-.5 * t, 1 / 3 * e), h.ctx.lineTo(.5 * t, 1 / 3 * e), h.ctx.lineTo(0, -(2 / 3) * e), h.ctx.closePath(), h.ctx.fillStyle = this.bgc
                }
                1 == this.type && (h.ctx.translate(this.x, this.y), h.ctx.rotate(this.rdir * this.rot_val), h.ctx.beginPath(), h.ctx.rect(-1 * this.r, -1 * this.r, 2 * this.r, 2 * this.r), h.ctx.closePath(), h.ctx.fillStyle = this.bgc), 2 == this.type && (h.ctx.beginPath(), h.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1), h.ctx.closePath(), h.ctx.fillStyle = this.bgc), h.ctx.fill(), h.ctx.restore()
            }, update: function () {
                this.now = (new Date).getTime(), this.dt = (this.now - this.lastTime) / 1e3, this.flykicked ? (this.x += (this.new_x - this.x) / 10, this.y += (this.new_y - this.y) / 10) : (this.x += this.vx * this.dt, this.y += this.vy * this.dt), this.lastTime = this.now, this.rot_val += this.rot_speed, this.rot_val >= 2 * Math.PI && (this.rot_val = 0);
                var t = Math.abs(this.x - h.cX), e = Math.abs(this.y - h.cY);
                t < 20 && e < 20 ? (this.opacity = 1, this.bgc = "rgba(" + this.rgb + ", " + this.opacity + ")") : (this.r < h.maxR[this.type] && (this.r += .02 * this.r), this.r > h.maxR[this.type] && (this.r -= .02 * this.r)), this.opacity < h.opacity[this.type] && (this.opacity = this.opacity + .02, this.bgc = "rgba(" + this.rgb + ", " + this.opacity + ")"), this.opacity > h.opacity[this.type] && (this.opacity = this.opacity - .02, this.bgc = "rgba(" + this.rgb + ", " + this.opacity + ")"), (this.x < 0 || this.x > h.cWidth) && (this.vx *= -1), (this.y < 0 || this.y > h.cHeight) && (this.vy *= -1), (this.x < -25 || this.x > h.cWidth + 25 || this.y < -25 || this.y > h.cHeight + 25) && this.init()
            }
        }, createParticles: function (t, e, i) {
            for (var n = this, r = 0; r < t; r++) {
                var s = new n.Particle(e, i);
                s.init(), n.pcs.push(s)
            }
        }, updateParticles: function () {
            var t = this;
            t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
            for (var e = 0; e < t.pcs.length; e++) t.pcs[e].update(), t.pcs[e].draw();
            requestAnimFrame(function () {
                t.updateParticles.call(t)
            })
        }, loop: function () {
            var t = this;
            requestAnimFrame(function () {
                t.updateParticles.call(t)
            })
        }, destroy: function () {
            this.pcs = []
        }, updateCanvas: function () {
            var e = this, i = t(e.canvas), n = i.closest(".pageHeader.offer");
            i.attr("width", t(window).width()), n.length ? i.attr("height", 400) : i.attr("height", t(window).height()), e.cWidth = e.canvas.width, e.cHeight = e.canvas.height, t.each(e.pcs, function (t, e) {
                e.init()
            })
        }, interact: function () {
            var e = this;
            e.maxR = [3, 3, 3], e.opacity = [.3, .3, .3], t(".dillerSimple-item").on("mouseenter", function (i) {
                var n = t(this), r = n.data("type");
                n.addClass("active"), e.opacity = [.1, .1, .1], e.opacity[r] = 1
            }), t(".dillerSimple-item").on("mouseleave", function () {
                var i = t(this);
                i.data("type");
                i.removeClass("active"), e.opacity = [.3, .3, .3]
            }), t("body").on("mousemove", function (t) {
                e.last_cX = e.cX || 0, e.last_cY = e.cY || 0, e.cX = t.pageX, e.cY = t.pageY, e.dX = e.cX - e.last_cX, e.dY = e.cY - e.last_cY
            })
        }, init: function () {
            var e, i = this;
            i.canvas = document.getElementById("pixie"), i.ctx = document.getElementById("pixie").getContext("2d"), i.updateCanvas(), t(window).on("resize", function () {
                clearTimeout(e), e = setTimeout(function () {
                    i.updateCanvas.call(i)
                }, 200)
            }), t.extend(this.Particle.prototype, this.particleProto), i.createParticles(175, 0, "228, 78, 39"), i.createParticles(175, 1, "52, 155, 163"), i.createParticles(175, 2, "186, 198, 25"), i.interact(), i.loop()
        }
    };
    t(document).ready(function () {
        cip.init(), window.cip.mobiledetect() || (console.log("pcs init"), h.init()), e("#fContact")
    })
}(jQuery);
var pageTracker = _gat._getTracker("UA-4596405-1");
pageTracker._initData(), pageTracker._trackPageview();