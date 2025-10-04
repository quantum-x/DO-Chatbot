(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const l of i)
            if (l.type === "childList")
                for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (l.credentials = "include")
                : i.crossOrigin === "anonymous"
                  ? (l.credentials = "omit")
                  : (l.credentials = "same-origin"),
            l
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = t(i);
        fetch(i.href, l);
    }
})();
var Au =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {};
function js(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kh = { exports: {} },
    Xo = {},
    wh = { exports: {} },
    he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for("react.element"),
    $2 = Symbol.for("react.portal"),
    j2 = Symbol.for("react.fragment"),
    B2 = Symbol.for("react.strict_mode"),
    U2 = Symbol.for("react.profiler"),
    H2 = Symbol.for("react.provider"),
    V2 = Symbol.for("react.context"),
    W2 = Symbol.for("react.forward_ref"),
    Q2 = Symbol.for("react.suspense"),
    G2 = Symbol.for("react.memo"),
    Y2 = Symbol.for("react.lazy"),
    dp = Symbol.iterator;
function q2(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (dp && e[dp]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var xh = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Sh = Object.assign,
    bh = {};
function pi(e, n, t) {
    (this.props = e), (this.context = n), (this.refs = bh), (this.updater = t || xh);
}
pi.prototype.isReactComponent = {};
pi.prototype.setState = function (e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, n, "setState");
};
pi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ch() {}
Ch.prototype = pi.prototype;
function Bs(e, n, t) {
    (this.props = e), (this.context = n), (this.refs = bh), (this.updater = t || xh);
}
var Us = (Bs.prototype = new Ch());
Us.constructor = Bs;
Sh(Us, pi.prototype);
Us.isPureReactComponent = !0;
var hp = Array.isArray,
    Eh = Object.prototype.hasOwnProperty,
    Hs = { current: null },
    _h = { key: !0, ref: !0, __self: !0, __source: !0 };
function Th(e, n, t) {
    var r,
        i = {},
        l = null,
        o = null;
    if (n != null)
        for (r in (n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (l = "" + n.key), n))
            Eh.call(n, r) && !_h.hasOwnProperty(r) && (i[r] = n[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = t;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        i.children = u;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: pl, type: e, key: l, ref: o, props: i, _owner: Hs.current };
}
function X2(e, n) {
    return { $$typeof: pl, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function K2(e) {
    var n = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (t) {
            return n[t];
        })
    );
}
var mp = /\/+/g;
function Qa(e, n) {
    return typeof e == "object" && e !== null && e.key != null ? K2("" + e.key) : n.toString(36);
}
function oo(e, n, t, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (l) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case pl:
                    case $2:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (i = i(o)),
            (e = r === "" ? "." + Qa(o, 0) : r),
            hp(i)
                ? ((t = ""),
                  e != null && (t = e.replace(mp, "$&/") + "/"),
                  oo(i, n, t, "", function (s) {
                      return s;
                  }))
                : i != null &&
                  (Vs(i) &&
                      (i = X2(
                          i,
                          t + (!i.key || (o && o.key === i.key) ? "" : ("" + i.key).replace(mp, "$&/") + "/") + e
                      )),
                  n.push(i)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), hp(e)))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var u = r + Qa(l, a);
            o += oo(l, n, t, u, i);
        }
    else if (((u = q2(e)), typeof u == "function"))
        for (e = u.call(e), a = 0; !(l = e.next()).done; )
            (l = l.value), (u = r + Qa(l, a++)), (o += oo(l, n, t, u, i));
    else if (l === "object")
        throw (
            ((n = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function Fl(e, n, t) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        oo(e, r, "", "", function (l) {
            return n.call(t, l, i++);
        }),
        r
    );
}
function Z2(e) {
    if (e._status === -1) {
        var n = e._result;
        (n = n()),
            n.then(
                function (t) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
                },
                function (t) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = n));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var yn = { current: null },
    ao = { transition: null },
    J2 = { ReactCurrentDispatcher: yn, ReactCurrentBatchConfig: ao, ReactCurrentOwner: Hs };
function Ph() {
    throw Error("act(...) is not supported in production builds of React.");
}
he.Children = {
    map: Fl,
    forEach: function (e, n, t) {
        Fl(
            e,
            function () {
                n.apply(this, arguments);
            },
            t
        );
    },
    count: function (e) {
        var n = 0;
        return (
            Fl(e, function () {
                n++;
            }),
            n
        );
    },
    toArray: function (e) {
        return (
            Fl(e, function (n) {
                return n;
            }) || []
        );
    },
    only: function (e) {
        if (!Vs(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
he.Component = pi;
he.Fragment = j2;
he.Profiler = U2;
he.PureComponent = Bs;
he.StrictMode = B2;
he.Suspense = Q2;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J2;
he.act = Ph;
he.cloneElement = function (e, n, t) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sh({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner;
    if (n != null) {
        if (
            (n.ref !== void 0 && ((l = n.ref), (o = Hs.current)),
            n.key !== void 0 && (i = "" + n.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (u in n) Eh.call(n, u) && !_h.hasOwnProperty(u) && (r[u] = n[u] === void 0 && a !== void 0 ? a[u] : n[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = t;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a;
    }
    return { $$typeof: pl, type: e.type, key: i, ref: l, props: r, _owner: o };
};
he.createContext = function (e) {
    return (
        (e = {
            $$typeof: V2,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: H2, _context: e }),
        (e.Consumer = e)
    );
};
he.createElement = Th;
he.createFactory = function (e) {
    var n = Th.bind(null, e);
    return (n.type = e), n;
};
he.createRef = function () {
    return { current: null };
};
he.forwardRef = function (e) {
    return { $$typeof: W2, render: e };
};
he.isValidElement = Vs;
he.lazy = function (e) {
    return { $$typeof: Y2, _payload: { _status: -1, _result: e }, _init: Z2 };
};
he.memo = function (e, n) {
    return { $$typeof: G2, type: e, compare: n === void 0 ? null : n };
};
he.startTransition = function (e) {
    var n = ao.transition;
    ao.transition = {};
    try {
        e();
    } finally {
        ao.transition = n;
    }
};
he.unstable_act = Ph;
he.useCallback = function (e, n) {
    return yn.current.useCallback(e, n);
};
he.useContext = function (e) {
    return yn.current.useContext(e);
};
he.useDebugValue = function () {};
he.useDeferredValue = function (e) {
    return yn.current.useDeferredValue(e);
};
he.useEffect = function (e, n) {
    return yn.current.useEffect(e, n);
};
he.useId = function () {
    return yn.current.useId();
};
he.useImperativeHandle = function (e, n, t) {
    return yn.current.useImperativeHandle(e, n, t);
};
he.useInsertionEffect = function (e, n) {
    return yn.current.useInsertionEffect(e, n);
};
he.useLayoutEffect = function (e, n) {
    return yn.current.useLayoutEffect(e, n);
};
he.useMemo = function (e, n) {
    return yn.current.useMemo(e, n);
};
he.useReducer = function (e, n, t) {
    return yn.current.useReducer(e, n, t);
};
he.useRef = function (e) {
    return yn.current.useRef(e);
};
he.useState = function (e) {
    return yn.current.useState(e);
};
he.useSyncExternalStore = function (e, n, t) {
    return yn.current.useSyncExternalStore(e, n, t);
};
he.useTransition = function () {
    return yn.current.useTransition();
};
he.version = "18.3.1";
wh.exports = he;
var ie = wh.exports;
const Du = js(ie);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ek = ie,
    nk = Symbol.for("react.element"),
    tk = Symbol.for("react.fragment"),
    rk = Object.prototype.hasOwnProperty,
    ik = ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    lk = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lh(e, n, t) {
    var r,
        i = {},
        l = null,
        o = null;
    t !== void 0 && (l = "" + t), n.key !== void 0 && (l = "" + n.key), n.ref !== void 0 && (o = n.ref);
    for (r in n) rk.call(n, r) && !lk.hasOwnProperty(r) && (i[r] = n[r]);
    if (e && e.defaultProps) for (r in ((n = e.defaultProps), n)) i[r] === void 0 && (i[r] = n[r]);
    return { $$typeof: nk, type: e, key: l, ref: o, props: i, _owner: ik.current };
}
Xo.Fragment = tk;
Xo.jsx = Lh;
Xo.jsxs = Lh;
kh.exports = Xo;
var V = kh.exports,
    Mu = {},
    Ih = { exports: {} },
    An = {},
    Nh = { exports: {} },
    Rh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function n(Q, ee) {
        var b = Q.length;
        Q.push(ee);
        e: for (; 0 < b; ) {
            var me = (b - 1) >>> 1,
                Se = Q[me];
            if (0 < i(Se, ee)) (Q[me] = ee), (Q[b] = Se), (b = me);
            else break e;
        }
    }
    function t(Q) {
        return Q.length === 0 ? null : Q[0];
    }
    function r(Q) {
        if (Q.length === 0) return null;
        var ee = Q[0],
            b = Q.pop();
        if (b !== ee) {
            Q[0] = b;
            e: for (var me = 0, Se = Q.length, T = Se >>> 1; me < T; ) {
                var Fe = 2 * (me + 1) - 1,
                    Tn = Q[Fe],
                    Le = Fe + 1,
                    Mn = Q[Le];
                if (0 > i(Tn, b))
                    Le < Se && 0 > i(Mn, Tn)
                        ? ((Q[me] = Mn), (Q[Le] = b), (me = Le))
                        : ((Q[me] = Tn), (Q[Fe] = b), (me = Fe));
                else if (Le < Se && 0 > i(Mn, b)) (Q[me] = Mn), (Q[Le] = b), (me = Le);
                else break e;
            }
        }
        return ee;
    }
    function i(Q, ee) {
        var b = Q.sortIndex - ee.sortIndex;
        return b !== 0 ? b : Q.id - ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a;
        };
    }
    var u = [],
        s = [],
        d = 1,
        f = null,
        g = 3,
        m = !1,
        y = !1,
        w = !1,
        z = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        k = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function S(Q) {
        for (var ee = t(s); ee !== null; ) {
            if (ee.callback === null) r(s);
            else if (ee.startTime <= Q) r(s), (ee.sortIndex = ee.expirationTime), n(u, ee);
            else break;
            ee = t(s);
        }
    }
    function R(Q) {
        if (((w = !1), S(Q), !y))
            if (t(u) !== null) (y = !0), He(O);
            else {
                var ee = t(s);
                ee !== null && De(R, ee.startTime - Q);
            }
    }
    function O(Q, ee) {
        (y = !1), w && ((w = !1), v(M), (M = -1)), (m = !0);
        var b = g;
        try {
            for (S(ee), f = t(u); f !== null && (!(f.expirationTime > ee) || (Q && !G())); ) {
                var me = f.callback;
                if (typeof me == "function") {
                    (f.callback = null), (g = f.priorityLevel);
                    var Se = me(f.expirationTime <= ee);
                    (ee = e.unstable_now()), typeof Se == "function" ? (f.callback = Se) : f === t(u) && r(u), S(ee);
                } else r(u);
                f = t(u);
            }
            if (f !== null) var T = !0;
            else {
                var Fe = t(s);
                Fe !== null && De(R, Fe.startTime - ee), (T = !1);
            }
            return T;
        } finally {
            (f = null), (g = b), (m = !1);
        }
    }
    var E = !1,
        F = null,
        M = -1,
        q = 5,
        L = -1;
    function G() {
        return !(e.unstable_now() - L < q);
    }
    function X() {
        if (F !== null) {
            var Q = e.unstable_now();
            L = Q;
            var ee = !0;
            try {
                ee = F(!0, Q);
            } finally {
                ee ? oe() : ((E = !1), (F = null));
            }
        } else E = !1;
    }
    var oe;
    if (typeof k == "function")
        oe = function () {
            k(X);
        };
    else if (typeof MessageChannel < "u") {
        var Pe = new MessageChannel(),
            fe = Pe.port2;
        (Pe.port1.onmessage = X),
            (oe = function () {
                fe.postMessage(null);
            });
    } else
        oe = function () {
            z(X, 0);
        };
    function He(Q) {
        (F = Q), E || ((E = !0), oe());
    }
    function De(Q, ee) {
        M = z(function () {
            Q(e.unstable_now());
        }, ee);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (Q) {
            Q.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || m || ((y = !0), He(O));
        }),
        (e.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (q = 0 < Q ? Math.floor(1e3 / Q) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return g;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return t(u);
        }),
        (e.unstable_next = function (Q) {
            switch (g) {
                case 1:
                case 2:
                case 3:
                    var ee = 3;
                    break;
                default:
                    ee = g;
            }
            var b = g;
            g = ee;
            try {
                return Q();
            } finally {
                g = b;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (Q, ee) {
            switch (Q) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    Q = 3;
            }
            var b = g;
            g = Q;
            try {
                return ee();
            } finally {
                g = b;
            }
        }),
        (e.unstable_scheduleCallback = function (Q, ee, b) {
            var me = e.unstable_now();
            switch (
                (typeof b == "object" && b !== null
                    ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? me + b : me))
                    : (b = me),
                Q)
            ) {
                case 1:
                    var Se = -1;
                    break;
                case 2:
                    Se = 250;
                    break;
                case 5:
                    Se = 1073741823;
                    break;
                case 4:
                    Se = 1e4;
                    break;
                default:
                    Se = 5e3;
            }
            return (
                (Se = b + Se),
                (Q = { id: d++, callback: ee, priorityLevel: Q, startTime: b, expirationTime: Se, sortIndex: -1 }),
                b > me
                    ? ((Q.sortIndex = b),
                      n(s, Q),
                      t(u) === null && Q === t(s) && (w ? (v(M), (M = -1)) : (w = !0), De(R, b - me)))
                    : ((Q.sortIndex = Se), n(u, Q), y || m || ((y = !0), He(O))),
                Q
            );
        }),
        (e.unstable_shouldYield = G),
        (e.unstable_wrapCallback = function (Q) {
            var ee = g;
            return function () {
                var b = g;
                g = ee;
                try {
                    return Q.apply(this, arguments);
                } finally {
                    g = b;
                }
            };
        });
})(Rh);
Nh.exports = Rh;
var ok = Nh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ak = ie,
    On = ok;
function U(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var zh = new Set(),
    Yi = {};
function br(e, n) {
    li(e, n), li(e + "Capture", n);
}
function li(e, n) {
    for (Yi[e] = n, e = 0; e < n.length; e++) zh.add(n[e]);
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Fu = Object.prototype.hasOwnProperty,
    uk =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    gp = {},
    vp = {};
function sk(e) {
    return Fu.call(vp, e) ? !0 : Fu.call(gp, e) ? !1 : uk.test(e) ? (vp[e] = !0) : ((gp[e] = !0), !1);
}
function ck(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : t !== null
                  ? !t.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function fk(e, n, t, r) {
    if (n === null || typeof n > "u" || ck(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
        switch (t.type) {
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
    return !1;
}
function kn(e, n, t, r, i, l, o) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
}
var an = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        an[e] = new kn(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var n = e[0];
    an[n] = new kn(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    an[e] = new kn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    an[e] = new kn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        an[e] = new kn(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    an[e] = new kn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    an[e] = new kn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    an[e] = new kn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    an[e] = new kn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ws = /[\-:]([a-z])/g;
function Qs(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Ws, Qs);
        an[n] = new kn(n, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var n = e.replace(Ws, Qs);
    an[n] = new kn(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Ws, Qs);
    an[n] = new kn(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    an[e] = new kn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
an.xlinkHref = new kn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    an[e] = new kn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gs(e, n, t, r) {
    var i = an.hasOwnProperty(n) ? an[n] : null;
    (i !== null
        ? i.type !== 0
        : r || !(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
        (fk(n, t, i, r) && (t = null),
        r || i === null
            ? sk(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
            : i.mustUseProperty
              ? (e[i.propertyName] = t === null ? (i.type === 3 ? !1 : "") : t)
              : ((n = i.attributeName),
                (r = i.attributeNamespace),
                t === null
                    ? e.removeAttribute(n)
                    : ((i = i.type),
                      (t = i === 3 || (i === 4 && t === !0) ? "" : "" + t),
                      r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Pt = ak.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $l = Symbol.for("react.element"),
    jr = Symbol.for("react.portal"),
    Br = Symbol.for("react.fragment"),
    Ys = Symbol.for("react.strict_mode"),
    $u = Symbol.for("react.profiler"),
    Oh = Symbol.for("react.provider"),
    Ah = Symbol.for("react.context"),
    qs = Symbol.for("react.forward_ref"),
    ju = Symbol.for("react.suspense"),
    Bu = Symbol.for("react.suspense_list"),
    Xs = Symbol.for("react.memo"),
    Ft = Symbol.for("react.lazy"),
    Dh = Symbol.for("react.offscreen"),
    yp = Symbol.iterator;
function bi(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (yp && e[yp]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ue = Object.assign,
    Ga;
function zi(e) {
    if (Ga === void 0)
        try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Ga = (n && n[1]) || "";
        }
    return (
        `
` +
        Ga +
        e
    );
}
var Ya = !1;
function qa(e, n) {
    if (!e || Ya) return "";
    Ya = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (
                ((n = function () {
                    throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(n, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (s) {
                    r = s;
                }
                e.call(n.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var i = s.stack.split(`
`),
                    l = r.stack.split(`
`),
                    o = i.length - 1,
                    a = l.length - 1;
                1 <= o && 0 <= a && i[o] !== l[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== l[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || i[o] !== l[a])) {
                                var u =
                                    `
` + i[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace("<anonymous>", e.displayName)),
                                    u
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (Ya = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? zi(e) : "";
}
function pk(e) {
    switch (e.tag) {
        case 5:
            return zi(e.type);
        case 16:
            return zi("Lazy");
        case 13:
            return zi("Suspense");
        case 19:
            return zi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = qa(e.type, !1)), e;
        case 11:
            return (e = qa(e.type.render, !1)), e;
        case 1:
            return (e = qa(e.type, !0)), e;
        default:
            return "";
    }
}
function Uu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Br:
            return "Fragment";
        case jr:
            return "Portal";
        case $u:
            return "Profiler";
        case Ys:
            return "StrictMode";
        case ju:
            return "Suspense";
        case Bu:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Ah:
                return (e.displayName || "Context") + ".Consumer";
            case Oh:
                return (e._context.displayName || "Context") + ".Provider";
            case qs:
                var n = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = n.displayName || n.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Xs:
                return (n = e.displayName || null), n !== null ? n : Uu(e.type) || "Memo";
            case Ft:
                (n = e._payload), (e = e._init);
                try {
                    return Uu(e(n));
                } catch {}
        }
    return null;
}
function dk(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = n.render),
                (e = e.displayName || e.name || ""),
                n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Uu(n);
        case 8:
            return n === Ys ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n;
    }
    return null;
}
function Zt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Mh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function hk(e) {
    var n = Mh(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var i = t.get,
            l = t.set;
        return (
            Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (o) {
                    (r = "" + o), l.call(this, o);
                },
            }),
            Object.defineProperty(e, n, { enumerable: t.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[n];
                },
            }
        );
    }
}
function jl(e) {
    e._valueTracker || (e._valueTracker = hk(e));
}
function Fh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return e && (r = Mh(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== t ? (n.setValue(e), !0) : !1;
}
function xo(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Hu(e, n) {
    var t = n.checked;
    return Ue({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked,
    });
}
function kp(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    (t = Zt(n.value != null ? n.value : t)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null,
        });
}
function $h(e, n) {
    (n = n.checked), n != null && Gs(e, "checked", n, !1);
}
function Vu(e, n) {
    $h(e, n);
    var t = Zt(n.value),
        r = n.type;
    if (t != null)
        r === "number"
            ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
            : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    n.hasOwnProperty("value")
        ? Wu(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && Wu(e, n.type, Zt(n.defaultValue)),
        n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function wp(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!((r !== "submit" && r !== "reset") || (n.value !== void 0 && n.value !== null))) return;
        (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
    }
    (t = e.name),
        t !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        t !== "" && (e.name = t);
}
function Wu(e, n, t) {
    (n !== "number" || xo(e.ownerDocument) !== e) &&
        (t == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Oi = Array.isArray;
function Zr(e, n, t, r) {
    if (((e = e.options), n)) {
        n = {};
        for (var i = 0; i < t.length; i++) n["$" + t[i]] = !0;
        for (t = 0; t < e.length; t++)
            (i = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== i && (e[t].selected = i),
                i && r && (e[t].defaultSelected = !0);
    } else {
        for (t = "" + Zt(t), n = null, i = 0; i < e.length; i++) {
            if (e[i].value === t) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            n !== null || e[i].disabled || (n = e[i]);
        }
        n !== null && (n.selected = !0);
    }
}
function Qu(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(U(91));
    return Ue({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xp(e, n) {
    var t = n.value;
    if (t == null) {
        if (((t = n.children), (n = n.defaultValue), t != null)) {
            if (n != null) throw Error(U(92));
            if (Oi(t)) {
                if (1 < t.length) throw Error(U(93));
                t = t[0];
            }
            n = t;
        }
        n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: Zt(t) };
}
function jh(e, n) {
    var t = Zt(n.value),
        r = Zt(n.defaultValue);
    t != null &&
        ((t = "" + t),
        t !== e.value && (e.value = t),
        n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
        r != null && (e.defaultValue = "" + r);
}
function Sp(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Bh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Gu(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Bh(n)
        : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var Bl,
    Uh = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (n, t, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(n, t, r, i);
                  });
              }
            : e;
    })(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
        else {
            for (
                Bl = Bl || document.createElement("div"),
                    Bl.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = Bl.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
    });
function qi(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return;
        }
    }
    e.textContent = n;
}
var Mi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    mk = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mi).forEach(function (e) {
    mk.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Mi[n] = Mi[e]);
    });
});
function Hh(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
        ? ""
        : t || typeof n != "number" || n === 0 || (Mi.hasOwnProperty(e) && Mi[e])
          ? ("" + n).trim()
          : n + "px";
}
function Vh(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                i = Hh(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, i) : (e[t] = i);
        }
}
var gk = Ue(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Yu(e, n) {
    if (n) {
        if (gk[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(U(60));
            if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
                throw Error(U(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(U(62));
    }
}
function qu(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Xu = null;
function Ks(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ku = null,
    Jr = null,
    ei = null;
function bp(e) {
    if ((e = ml(e))) {
        if (typeof Ku != "function") throw Error(U(280));
        var n = e.stateNode;
        n && ((n = na(n)), Ku(e.stateNode, e.type, n));
    }
}
function Wh(e) {
    Jr ? (ei ? ei.push(e) : (ei = [e])) : (Jr = e);
}
function Qh() {
    if (Jr) {
        var e = Jr,
            n = ei;
        if (((ei = Jr = null), bp(e), n)) for (e = 0; e < n.length; e++) bp(n[e]);
    }
}
function Gh(e, n) {
    return e(n);
}
function Yh() {}
var Xa = !1;
function qh(e, n, t) {
    if (Xa) return e(n, t);
    Xa = !0;
    try {
        return Gh(e, n, t);
    } finally {
        (Xa = !1), (Jr !== null || ei !== null) && (Yh(), Qh());
    }
}
function Xi(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = na(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(U(231, n, typeof t));
    return t;
}
var Zu = !1;
if (Ct)
    try {
        var Ci = {};
        Object.defineProperty(Ci, "passive", {
            get: function () {
                Zu = !0;
            },
        }),
            window.addEventListener("test", Ci, Ci),
            window.removeEventListener("test", Ci, Ci);
    } catch {
        Zu = !1;
    }
function vk(e, n, t, r, i, l, o, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, s);
    } catch (d) {
        this.onError(d);
    }
}
var Fi = !1,
    So = null,
    bo = !1,
    Ju = null,
    yk = {
        onError: function (e) {
            (Fi = !0), (So = e);
        },
    };
function kk(e, n, t, r, i, l, o, a, u) {
    (Fi = !1), (So = null), vk.apply(yk, arguments);
}
function wk(e, n, t, r, i, l, o, a, u) {
    if ((kk.apply(this, arguments), Fi)) {
        if (Fi) {
            var s = So;
            (Fi = !1), (So = null);
        } else throw Error(U(198));
        bo || ((bo = !0), (Ju = s));
    }
}
function Cr(e) {
    var n = e,
        t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
        e = n;
        do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
        while (e);
    }
    return n.tag === 3 ? t : null;
}
function Xh(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
    }
    return null;
}
function Cp(e) {
    if (Cr(e) !== e) throw Error(U(188));
}
function xk(e) {
    var n = e.alternate;
    if (!n) {
        if (((n = Cr(e)), n === null)) throw Error(U(188));
        return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
        var i = t.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (((r = i.return), r !== null)) {
                t = r;
                continue;
            }
            break;
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === t) return Cp(i), e;
                if (l === r) return Cp(i), n;
                l = l.sibling;
            }
            throw Error(U(188));
        }
        if (t.return !== r.return) (t = i), (r = l);
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === t) {
                    (o = !0), (t = i), (r = l);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = i), (t = l);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = l.child; a; ) {
                    if (a === t) {
                        (o = !0), (t = l), (r = i);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = l), (t = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(U(189));
            }
        }
        if (t.alternate !== r) throw Error(U(190));
    }
    if (t.tag !== 3) throw Error(U(188));
    return t.stateNode.current === t ? e : n;
}
function Kh(e) {
    return (e = xk(e)), e !== null ? Zh(e) : null;
}
function Zh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var n = Zh(e);
        if (n !== null) return n;
        e = e.sibling;
    }
    return null;
}
var Jh = On.unstable_scheduleCallback,
    Ep = On.unstable_cancelCallback,
    Sk = On.unstable_shouldYield,
    bk = On.unstable_requestPaint,
    We = On.unstable_now,
    Ck = On.unstable_getCurrentPriorityLevel,
    Zs = On.unstable_ImmediatePriority,
    em = On.unstable_UserBlockingPriority,
    Co = On.unstable_NormalPriority,
    Ek = On.unstable_LowPriority,
    nm = On.unstable_IdlePriority,
    Ko = null,
    ft = null;
function _k(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
        try {
            ft.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Lk,
    Tk = Math.log,
    Pk = Math.LN2;
function Lk(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Tk(e) / Pk) | 0)) | 0;
}
var Ul = 64,
    Hl = 4194304;
function Ai(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Eo(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = t & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? (r = Ai(a)) : ((l &= o), l !== 0 && (r = Ai(l)));
    } else (o = t & ~i), o !== 0 ? (r = Ai(o)) : l !== 0 && (r = Ai(l));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & i) && ((i = r & -r), (l = n & -n), i >= l || (i === 16 && (l & 4194240) !== 0)))
        return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
        for (e = e.entanglements, n &= r; 0 < n; ) (t = 31 - tt(n)), (i = 1 << t), (r |= e[t]), (n &= ~i);
    return r;
}
function Ik(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Nk(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var o = 31 - tt(l),
            a = 1 << o,
            u = i[o];
        u === -1 ? (!(a & t) || a & r) && (i[o] = Ik(a, n)) : u <= n && (e.expiredLanes |= a), (l &= ~a);
    }
}
function es(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function tm() {
    var e = Ul;
    return (Ul <<= 1), !(Ul & 4194240) && (Ul = 64), e;
}
function Ka(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
}
function dl(e, n, t) {
    (e.pendingLanes |= n),
        n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (n = 31 - tt(n)),
        (e[n] = t);
}
function Rk(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= n),
        (e.mutableReadLanes &= n),
        (e.entangledLanes &= n),
        (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var i = 31 - tt(t),
            l = 1 << i;
        (n[i] = 0), (r[i] = -1), (e[i] = -1), (t &= ~l);
    }
}
function Js(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
        var r = 31 - tt(t),
            i = 1 << r;
        (i & n) | (e[r] & n) && (e[r] |= n), (t &= ~i);
    }
}
var Te = 0;
function rm(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var im,
    ec,
    lm,
    om,
    am,
    ns = !1,
    Vl = [],
    Vt = null,
    Wt = null,
    Qt = null,
    Ki = new Map(),
    Zi = new Map(),
    jt = [],
    zk =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function _p(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            Vt = null;
            break;
        case "dragenter":
        case "dragleave":
            Wt = null;
            break;
        case "mouseover":
        case "mouseout":
            Qt = null;
            break;
        case "pointerover":
        case "pointerout":
            Ki.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Zi.delete(n.pointerId);
    }
}
function Ei(e, n, t, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }),
          n !== null && ((n = ml(n)), n !== null && ec(n)),
          e)
        : ((e.eventSystemFlags |= r), (n = e.targetContainers), i !== null && n.indexOf(i) === -1 && n.push(i), e);
}
function Ok(e, n, t, r, i) {
    switch (n) {
        case "focusin":
            return (Vt = Ei(Vt, e, n, t, r, i)), !0;
        case "dragenter":
            return (Wt = Ei(Wt, e, n, t, r, i)), !0;
        case "mouseover":
            return (Qt = Ei(Qt, e, n, t, r, i)), !0;
        case "pointerover":
            var l = i.pointerId;
            return Ki.set(l, Ei(Ki.get(l) || null, e, n, t, r, i)), !0;
        case "gotpointercapture":
            return (l = i.pointerId), Zi.set(l, Ei(Zi.get(l) || null, e, n, t, r, i)), !0;
    }
    return !1;
}
function um(e) {
    var n = pr(e.target);
    if (n !== null) {
        var t = Cr(n);
        if (t !== null) {
            if (((n = t.tag), n === 13)) {
                if (((n = Xh(t)), n !== null)) {
                    (e.blockedOn = n),
                        am(e.priority, function () {
                            lm(t);
                        });
                    return;
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
        var t = ts(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            (Xu = r), t.target.dispatchEvent(r), (Xu = null);
        } else return (n = ml(t)), n !== null && ec(n), (e.blockedOn = t), !1;
        n.shift();
    }
    return !0;
}
function Tp(e, n, t) {
    uo(e) && t.delete(n);
}
function Ak() {
    (ns = !1),
        Vt !== null && uo(Vt) && (Vt = null),
        Wt !== null && uo(Wt) && (Wt = null),
        Qt !== null && uo(Qt) && (Qt = null),
        Ki.forEach(Tp),
        Zi.forEach(Tp);
}
function _i(e, n) {
    e.blockedOn === n &&
        ((e.blockedOn = null), ns || ((ns = !0), On.unstable_scheduleCallback(On.unstable_NormalPriority, Ak)));
}
function Ji(e) {
    function n(i) {
        return _i(i, e);
    }
    if (0 < Vl.length) {
        _i(Vl[0], e);
        for (var t = 1; t < Vl.length; t++) {
            var r = Vl[t];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Vt !== null && _i(Vt, e),
            Wt !== null && _i(Wt, e),
            Qt !== null && _i(Qt, e),
            Ki.forEach(n),
            Zi.forEach(n),
            t = 0;
        t < jt.length;
        t++
    )
        (r = jt[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && ((t = jt[0]), t.blockedOn === null); ) um(t), t.blockedOn === null && jt.shift();
}
var ni = Pt.ReactCurrentBatchConfig,
    _o = !0;
function Dk(e, n, t, r) {
    var i = Te,
        l = ni.transition;
    ni.transition = null;
    try {
        (Te = 1), nc(e, n, t, r);
    } finally {
        (Te = i), (ni.transition = l);
    }
}
function Mk(e, n, t, r) {
    var i = Te,
        l = ni.transition;
    ni.transition = null;
    try {
        (Te = 4), nc(e, n, t, r);
    } finally {
        (Te = i), (ni.transition = l);
    }
}
function nc(e, n, t, r) {
    if (_o) {
        var i = ts(e, n, t, r);
        if (i === null) au(e, n, r, To, t), _p(e, r);
        else if (Ok(i, e, n, t, r)) r.stopPropagation();
        else if ((_p(e, r), n & 4 && -1 < zk.indexOf(e))) {
            for (; i !== null; ) {
                var l = ml(i);
                if ((l !== null && im(l), (l = ts(e, n, t, r)), l === null && au(e, n, r, To, t), l === i)) break;
                i = l;
            }
            i !== null && r.stopPropagation();
        } else au(e, n, r, null, t);
    }
}
var To = null;
function ts(e, n, t, r) {
    if (((To = null), (e = Ks(r)), (e = pr(e)), e !== null))
        if (((n = Cr(e)), n === null)) e = null;
        else if (((t = n.tag), t === 13)) {
            if (((e = Xh(n)), e !== null)) return e;
            e = null;
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
        } else n !== e && (e = null);
    return (To = e), null;
}
function sm(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ck()) {
                case Zs:
                    return 1;
                case em:
                    return 4;
                case Co:
                case Ek:
                    return 16;
                case nm:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Ut = null,
    tc = null,
    so = null;
function cm() {
    if (so) return so;
    var e,
        n = tc,
        t = n.length,
        r,
        i = "value" in Ut ? Ut.value : Ut.textContent,
        l = i.length;
    for (e = 0; e < t && n[e] === i[e]; e++);
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === i[l - r]; r++);
    return (so = i.slice(e, 1 < r ? 1 - r : void 0));
}
function co(e) {
    var n = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Wl() {
    return !0;
}
function Pp() {
    return !1;
}
function Dn(e) {
    function n(t, r, i, l, o) {
        (this._reactName = t),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = l),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(l) : l[a]));
        return (
            (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1)
                ? Wl
                : Pp),
            (this.isPropagationStopped = Pp),
            this
        );
    }
    return (
        Ue(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                    (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
                    (this.isDefaultPrevented = Wl));
            },
            stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                    (t.stopPropagation
                        ? t.stopPropagation()
                        : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
                    (this.isPropagationStopped = Wl));
            },
            persist: function () {},
            isPersistent: Wl,
        }),
        n
    );
}
var di = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    rc = Dn(di),
    hl = Ue({}, di, { view: 0, detail: 0 }),
    Fk = Dn(hl),
    Za,
    Ja,
    Ti,
    Zo = Ue({}, hl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ic,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Ti &&
                      (Ti && e.type === "mousemove"
                          ? ((Za = e.screenX - Ti.screenX), (Ja = e.screenY - Ti.screenY))
                          : (Ja = Za = 0),
                      (Ti = e)),
                  Za);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ja;
        },
    }),
    Lp = Dn(Zo),
    $k = Ue({}, Zo, { dataTransfer: 0 }),
    jk = Dn($k),
    Bk = Ue({}, hl, { relatedTarget: 0 }),
    eu = Dn(Bk),
    Uk = Ue({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hk = Dn(Uk),
    Vk = Ue({}, di, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Wk = Dn(Vk),
    Qk = Ue({}, di, { data: 0 }),
    Ip = Dn(Qk),
    Gk = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Yk = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    qk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Xk(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = qk[e]) ? !!n[e] : !1;
}
function ic() {
    return Xk;
}
var Kk = Ue({}, hl, {
        key: function (e) {
            if (e.key) {
                var n = Gk[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress"
                ? ((e = co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? Yk[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ic,
        charCode: function (e) {
            return e.type === "keypress" ? co(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    Zk = Dn(Kk),
    Jk = Ue({}, Zo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Np = Dn(Jk),
    ew = Ue({}, hl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ic,
    }),
    nw = Dn(ew),
    tw = Ue({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rw = Dn(tw),
    iw = Ue({}, Zo, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    lw = Dn(iw),
    ow = [9, 13, 27, 32],
    lc = Ct && "CompositionEvent" in window,
    $i = null;
Ct && "documentMode" in document && ($i = document.documentMode);
var aw = Ct && "TextEvent" in window && !$i,
    fm = Ct && (!lc || ($i && 8 < $i && 11 >= $i)),
    Rp = " ",
    zp = !1;
function pm(e, n) {
    switch (e) {
        case "keyup":
            return ow.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function dm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function uw(e, n) {
    switch (e) {
        case "compositionend":
            return dm(n);
        case "keypress":
            return n.which !== 32 ? null : ((zp = !0), Rp);
        case "textInput":
            return (e = n.data), e === Rp && zp ? null : e;
        default:
            return null;
    }
}
function sw(e, n) {
    if (Ur)
        return e === "compositionend" || (!lc && pm(e, n)) ? ((e = cm()), (so = tc = Ut = null), (Ur = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which);
            }
            return null;
        case "compositionend":
            return fm && n.locale !== "ko" ? null : n.data;
        default:
            return null;
    }
}
var cw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Op(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!cw[e.type] : n === "textarea";
}
function hm(e, n, t, r) {
    Wh(r),
        (n = Po(n, "onChange")),
        0 < n.length && ((t = new rc("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
}
var ji = null,
    el = null;
function fw(e) {
    Em(e, 0);
}
function Jo(e) {
    var n = Wr(e);
    if (Fh(n)) return e;
}
function pw(e, n) {
    if (e === "change") return n;
}
var mm = !1;
if (Ct) {
    var nu;
    if (Ct) {
        var tu = "oninput" in document;
        if (!tu) {
            var Ap = document.createElement("div");
            Ap.setAttribute("oninput", "return;"), (tu = typeof Ap.oninput == "function");
        }
        nu = tu;
    } else nu = !1;
    mm = nu && (!document.documentMode || 9 < document.documentMode);
}
function Dp() {
    ji && (ji.detachEvent("onpropertychange", gm), (el = ji = null));
}
function gm(e) {
    if (e.propertyName === "value" && Jo(el)) {
        var n = [];
        hm(n, el, e, Ks(e)), qh(fw, n);
    }
}
function dw(e, n, t) {
    e === "focusin" ? (Dp(), (ji = n), (el = t), ji.attachEvent("onpropertychange", gm)) : e === "focusout" && Dp();
}
function hw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Jo(el);
}
function mw(e, n) {
    if (e === "click") return Jo(n);
}
function gw(e, n) {
    if (e === "input" || e === "change") return Jo(n);
}
function vw(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var lt = typeof Object.is == "function" ? Object.is : vw;
function nl(e, n) {
    if (lt(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var i = t[r];
        if (!Fu.call(n, i) || !lt(e[i], n[i])) return !1;
    }
    return !0;
}
function Mp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Fp(e, n) {
    var t = Mp(e);
    e = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (((r = e + t.textContent.length), e <= n && r >= n)) return { node: t, offset: n - e };
            e = r;
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e;
                }
                t = t.parentNode;
            }
            t = void 0;
        }
        t = Mp(t);
    }
}
function vm(e, n) {
    return e && n
        ? e === n
            ? !0
            : e && e.nodeType === 3
              ? !1
              : n && n.nodeType === 3
                ? vm(e, n.parentNode)
                : "contains" in e
                  ? e.contains(n)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(n) & 16)
                    : !1
        : !1;
}
function ym() {
    for (var e = window, n = xo(); n instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof n.contentWindow.location.href == "string";
        } catch {
            t = !1;
        }
        if (t) e = n.contentWindow;
        else break;
        n = xo(e.document);
    }
    return n;
}
function oc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        n &&
        ((n === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            n === "textarea" ||
            e.contentEditable === "true")
    );
}
function yw(e) {
    var n = ym(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && vm(t.ownerDocument.documentElement, t)) {
        if (r !== null && oc(t)) {
            if (((n = r.start), (e = r.end), e === void 0 && (e = n), "selectionStart" in t))
                (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
            else if (((e = ((n = t.ownerDocument || document) && n.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = t.textContent.length,
                    l = Math.min(r.start, i);
                (r = r.end === void 0 ? l : Math.min(r.end, i)),
                    !e.extend && l > r && ((i = r), (r = l), (l = i)),
                    (i = Fp(t, l));
                var o = Fp(t, r);
                i &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((n = n.createRange()),
                    n.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
            }
        }
        for (n = [], e = t; (e = e.parentNode); )
            e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
            (e = n[t]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var kw = Ct && "documentMode" in document && 11 >= document.documentMode,
    Hr = null,
    rs = null,
    Bi = null,
    is = !1;
function $p(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    is ||
        Hr == null ||
        Hr !== xo(r) ||
        ((r = Hr),
        "selectionStart" in r && oc(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Bi && nl(Bi, r)) ||
            ((Bi = r),
            (r = Po(rs, "onSelect")),
            0 < r.length &&
                ((n = new rc("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = Hr))));
}
function Ql(e, n) {
    var t = {};
    return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
}
var Vr = {
        animationend: Ql("Animation", "AnimationEnd"),
        animationiteration: Ql("Animation", "AnimationIteration"),
        animationstart: Ql("Animation", "AnimationStart"),
        transitionend: Ql("Transition", "TransitionEnd"),
    },
    ru = {},
    km = {};
Ct &&
    ((km = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation),
    "TransitionEvent" in window || delete Vr.transitionend.transition);
function ea(e) {
    if (ru[e]) return ru[e];
    if (!Vr[e]) return e;
    var n = Vr[e],
        t;
    for (t in n) if (n.hasOwnProperty(t) && t in km) return (ru[e] = n[t]);
    return e;
}
var wm = ea("animationend"),
    xm = ea("animationiteration"),
    Sm = ea("animationstart"),
    bm = ea("transitionend"),
    Cm = new Map(),
    jp =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function er(e, n) {
    Cm.set(e, n), br(n, [e]);
}
for (var iu = 0; iu < jp.length; iu++) {
    var lu = jp[iu],
        ww = lu.toLowerCase(),
        xw = lu[0].toUpperCase() + lu.slice(1);
    er(ww, "on" + xw);
}
er(wm, "onAnimationEnd");
er(xm, "onAnimationIteration");
er(Sm, "onAnimationStart");
er("dblclick", "onDoubleClick");
er("focusin", "onFocus");
er("focusout", "onBlur");
er(bm, "onTransitionEnd");
li("onMouseEnter", ["mouseout", "mouseover"]);
li("onMouseLeave", ["mouseout", "mouseover"]);
li("onPointerEnter", ["pointerout", "pointerover"]);
li("onPointerLeave", ["pointerout", "pointerover"]);
br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Di =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));
function Bp(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), wk(r, n, void 0, e), (e.currentTarget = null);
}
function Em(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        u = a.instance,
                        s = a.currentTarget;
                    if (((a = a.listener), u !== l && i.isPropagationStopped())) break e;
                    Bp(i, a, s), (l = u);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((a = r[o]),
                        (u = a.instance),
                        (s = a.currentTarget),
                        (a = a.listener),
                        u !== l && i.isPropagationStopped())
                    )
                        break e;
                    Bp(i, a, s), (l = u);
                }
        }
    }
    if (bo) throw ((e = Ju), (bo = !1), (Ju = null), e);
}
function Oe(e, n) {
    var t = n[ss];
    t === void 0 && (t = n[ss] = new Set());
    var r = e + "__bubble";
    t.has(r) || (_m(n, e, 2, !1), t.add(r));
}
function ou(e, n, t) {
    var r = 0;
    n && (r |= 4), _m(t, e, r, n);
}
var Gl = "_reactListening" + Math.random().toString(36).slice(2);
function tl(e) {
    if (!e[Gl]) {
        (e[Gl] = !0),
            zh.forEach(function (t) {
                t !== "selectionchange" && (Sw.has(t) || ou(t, !1, e), ou(t, !0, e));
            });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[Gl] || ((n[Gl] = !0), ou("selectionchange", !1, n));
    }
}
function _m(e, n, t, r) {
    switch (sm(n)) {
        case 1:
            var i = Dk;
            break;
        case 4:
            i = Mk;
            break;
        default:
            i = nc;
    }
    (t = i.bind(null, n, t, e)),
        (i = void 0),
        !Zu || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(n, t, { capture: !0, passive: i })
                : e.addEventListener(n, t, !0)
            : i !== void 0
              ? e.addEventListener(n, t, { passive: i })
              : e.addEventListener(n, t, !1);
}
function au(e, n, t, r, i) {
    var l = r;
    if (!(n & 1) && !(n & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = o.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = pr(a)), o === null)) return;
                    if (((u = o.tag), u === 5 || u === 6)) {
                        r = l = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    qh(function () {
        var s = l,
            d = Ks(t),
            f = [];
        e: {
            var g = Cm.get(e);
            if (g !== void 0) {
                var m = rc,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (co(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = Zk;
                        break;
                    case "focusin":
                        (y = "focus"), (m = eu);
                        break;
                    case "focusout":
                        (y = "blur"), (m = eu);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = eu;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Lp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = jk;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = nw;
                        break;
                    case wm:
                    case xm:
                    case Sm:
                        m = Hk;
                        break;
                    case bm:
                        m = rw;
                        break;
                    case "scroll":
                        m = Fk;
                        break;
                    case "wheel":
                        m = lw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = Wk;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Np;
                }
                var w = (n & 4) !== 0,
                    z = !w && e === "scroll",
                    v = w ? (g !== null ? g + "Capture" : null) : g;
                w = [];
                for (var k = s, S; k !== null; ) {
                    S = k;
                    var R = S.stateNode;
                    if (
                        (S.tag === 5 &&
                            R !== null &&
                            ((S = R), v !== null && ((R = Xi(k, v)), R != null && w.push(rl(k, R, S)))),
                        z)
                    )
                        break;
                    k = k.return;
                }
                0 < w.length && ((g = new m(g, y, null, t, d)), f.push({ event: g, listeners: w }));
            }
        }
        if (!(n & 7)) {
            e: {
                if (
                    ((g = e === "mouseover" || e === "pointerover"),
                    (m = e === "mouseout" || e === "pointerout"),
                    g && t !== Xu && (y = t.relatedTarget || t.fromElement) && (pr(y) || y[Et]))
                )
                    break e;
                if (
                    (m || g) &&
                    ((g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window),
                    m
                        ? ((y = t.relatedTarget || t.toElement),
                          (m = s),
                          (y = y ? pr(y) : null),
                          y !== null && ((z = Cr(y)), y !== z || (y.tag !== 5 && y.tag !== 6)) && (y = null))
                        : ((m = null), (y = s)),
                    m !== y)
                ) {
                    if (
                        ((w = Lp),
                        (R = "onMouseLeave"),
                        (v = "onMouseEnter"),
                        (k = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((w = Np), (R = "onPointerLeave"), (v = "onPointerEnter"), (k = "pointer")),
                        (z = m == null ? g : Wr(m)),
                        (S = y == null ? g : Wr(y)),
                        (g = new w(R, k + "leave", m, t, d)),
                        (g.target = z),
                        (g.relatedTarget = S),
                        (R = null),
                        pr(d) === s &&
                            ((w = new w(v, k + "enter", y, t, d)), (w.target = S), (w.relatedTarget = z), (R = w)),
                        (z = R),
                        m && y)
                    )
                        n: {
                            for (w = m, v = y, k = 0, S = w; S; S = Mr(S)) k++;
                            for (S = 0, R = v; R; R = Mr(R)) S++;
                            for (; 0 < k - S; ) (w = Mr(w)), k--;
                            for (; 0 < S - k; ) (v = Mr(v)), S--;
                            for (; k--; ) {
                                if (w === v || (v !== null && w === v.alternate)) break n;
                                (w = Mr(w)), (v = Mr(v));
                            }
                            w = null;
                        }
                    else w = null;
                    m !== null && Up(f, g, m, w, !1), y !== null && z !== null && Up(f, z, y, w, !0);
                }
            }
            e: {
                if (
                    ((g = s ? Wr(s) : window),
                    (m = g.nodeName && g.nodeName.toLowerCase()),
                    m === "select" || (m === "input" && g.type === "file"))
                )
                    var O = pw;
                else if (Op(g))
                    if (mm) O = gw;
                    else {
                        O = hw;
                        var E = dw;
                    }
                else
                    (m = g.nodeName) &&
                        m.toLowerCase() === "input" &&
                        (g.type === "checkbox" || g.type === "radio") &&
                        (O = mw);
                if (O && (O = O(e, s))) {
                    hm(f, O, t, d);
                    break e;
                }
                E && E(e, g, s),
                    e === "focusout" &&
                        (E = g._wrapperState) &&
                        E.controlled &&
                        g.type === "number" &&
                        Wu(g, "number", g.value);
            }
            switch (((E = s ? Wr(s) : window), e)) {
                case "focusin":
                    (Op(E) || E.contentEditable === "true") && ((Hr = E), (rs = s), (Bi = null));
                    break;
                case "focusout":
                    Bi = rs = Hr = null;
                    break;
                case "mousedown":
                    is = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (is = !1), $p(f, t, d);
                    break;
                case "selectionchange":
                    if (kw) break;
                case "keydown":
                case "keyup":
                    $p(f, t, d);
            }
            var F;
            if (lc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var M = "onCompositionStart";
                            break e;
                        case "compositionend":
                            M = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            M = "onCompositionUpdate";
                            break e;
                    }
                    M = void 0;
                }
            else
                Ur
                    ? pm(e, t) && (M = "onCompositionEnd")
                    : e === "keydown" && t.keyCode === 229 && (M = "onCompositionStart");
            M &&
                (fm &&
                    t.locale !== "ko" &&
                    (Ur || M !== "onCompositionStart"
                        ? M === "onCompositionEnd" && Ur && (F = cm())
                        : ((Ut = d), (tc = "value" in Ut ? Ut.value : Ut.textContent), (Ur = !0))),
                (E = Po(s, M)),
                0 < E.length &&
                    ((M = new Ip(M, e, null, t, d)),
                    f.push({ event: M, listeners: E }),
                    F ? (M.data = F) : ((F = dm(t)), F !== null && (M.data = F)))),
                (F = aw ? uw(e, t) : sw(e, t)) &&
                    ((s = Po(s, "onBeforeInput")),
                    0 < s.length &&
                        ((d = new Ip("onBeforeInput", "beforeinput", null, t, d)),
                        f.push({ event: d, listeners: s }),
                        (d.data = F)));
        }
        Em(f, n);
    });
}
function rl(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
}
function Po(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 &&
            l !== null &&
            ((i = l),
            (l = Xi(e, t)),
            l != null && r.unshift(rl(e, l, i)),
            (l = Xi(e, n)),
            l != null && r.push(rl(e, l, i))),
            (e = e.return);
    }
    return r;
}
function Mr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Up(e, n, t, r, i) {
    for (var l = n._reactName, o = []; t !== null && t !== r; ) {
        var a = t,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 &&
            s !== null &&
            ((a = s),
            i
                ? ((u = Xi(t, l)), u != null && o.unshift(rl(t, u, a)))
                : i || ((u = Xi(t, l)), u != null && o.push(rl(t, u, a)))),
            (t = t.return);
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
}
var bw = /\r\n?/g,
    Cw = /\u0000|\uFFFD/g;
function Hp(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            bw,
            `
`
        )
        .replace(Cw, "");
}
function Yl(e, n, t) {
    if (((n = Hp(n)), Hp(e) !== n && t)) throw Error(U(425));
}
function Lo() {}
var ls = null,
    os = null;
function as(e, n) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof n.children == "string" ||
        typeof n.children == "number" ||
        (typeof n.dangerouslySetInnerHTML == "object" &&
            n.dangerouslySetInnerHTML !== null &&
            n.dangerouslySetInnerHTML.__html != null)
    );
}
var us = typeof setTimeout == "function" ? setTimeout : void 0,
    Ew = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vp = typeof Promise == "function" ? Promise : void 0,
    _w =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Vp < "u"
              ? function (e) {
                    return Vp.resolve(null).then(e).catch(Tw);
                }
              : us;
function Tw(e) {
    setTimeout(function () {
        throw e;
    });
}
function uu(e, n) {
    var t = n,
        r = 0;
    do {
        var i = t.nextSibling;
        if ((e.removeChild(t), i && i.nodeType === 8))
            if (((t = i.data), t === "/$")) {
                if (r === 0) {
                    e.removeChild(i), Ji(n);
                    return;
                }
                r--;
            } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
        t = i;
    } while (t);
    Ji(n);
}
function Gt(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
            if (n === "/$") return null;
        }
    }
    return e;
}
function Wp(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--;
            } else t === "/$" && n++;
        }
        e = e.previousSibling;
    }
    return null;
}
var hi = Math.random().toString(36).slice(2),
    ct = "__reactFiber$" + hi,
    il = "__reactProps$" + hi,
    Et = "__reactContainer$" + hi,
    ss = "__reactEvents$" + hi,
    Pw = "__reactListeners$" + hi,
    Lw = "__reactHandles$" + hi;
function pr(e) {
    var n = e[ct];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
        if ((n = t[Et] || t[ct])) {
            if (((t = n.alternate), n.child !== null || (t !== null && t.child !== null)))
                for (e = Wp(e); e !== null; ) {
                    if ((t = e[ct])) return t;
                    e = Wp(e);
                }
            return n;
        }
        (e = t), (t = e.parentNode);
    }
    return null;
}
function ml(e) {
    return (e = e[ct] || e[Et]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Wr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(U(33));
}
function na(e) {
    return e[il] || null;
}
var cs = [],
    Qr = -1;
function nr(e) {
    return { current: e };
}
function Ae(e) {
    0 > Qr || ((e.current = cs[Qr]), (cs[Qr] = null), Qr--);
}
function ze(e, n) {
    Qr++, (cs[Qr] = e.current), (e.current = n);
}
var Jt = {},
    pn = nr(Jt),
    Cn = nr(!1),
    vr = Jt;
function oi(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in t) i[l] = n[l];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = n),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function En(e) {
    return (e = e.childContextTypes), e != null;
}
function Io() {
    Ae(Cn), Ae(pn);
}
function Qp(e, n, t) {
    if (pn.current !== Jt) throw Error(U(168));
    ze(pn, n), ze(Cn, t);
}
function Tm(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function")) return t;
    r = r.getChildContext();
    for (var i in r) if (!(i in n)) throw Error(U(108, dk(e) || "Unknown", i));
    return Ue({}, t, r);
}
function No(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
        (vr = pn.current),
        ze(pn, e),
        ze(Cn, Cn.current),
        !0
    );
}
function Gp(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(U(169));
    t ? ((e = Tm(e, n, vr)), (r.__reactInternalMemoizedMergedChildContext = e), Ae(Cn), Ae(pn), ze(pn, e)) : Ae(Cn),
        ze(Cn, t);
}
var wt = null,
    ta = !1,
    su = !1;
function Pm(e) {
    wt === null ? (wt = [e]) : wt.push(e);
}
function Iw(e) {
    (ta = !0), Pm(e);
}
function tr() {
    if (!su && wt !== null) {
        su = !0;
        var e = 0,
            n = Te;
        try {
            var t = wt;
            for (Te = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0);
                while (r !== null);
            }
            (wt = null), (ta = !1);
        } catch (i) {
            throw (wt !== null && (wt = wt.slice(e + 1)), Jh(Zs, tr), i);
        } finally {
            (Te = n), (su = !1);
        }
    }
    return null;
}
var Gr = [],
    Yr = 0,
    Ro = null,
    zo = 0,
    jn = [],
    Bn = 0,
    yr = null,
    xt = 1,
    St = "";
function sr(e, n) {
    (Gr[Yr++] = zo), (Gr[Yr++] = Ro), (Ro = e), (zo = n);
}
function Lm(e, n, t) {
    (jn[Bn++] = xt), (jn[Bn++] = St), (jn[Bn++] = yr), (yr = e);
    var r = xt;
    e = St;
    var i = 32 - tt(r) - 1;
    (r &= ~(1 << i)), (t += 1);
    var l = 32 - tt(n) + i;
    if (30 < l) {
        var o = i - (i % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (xt = (1 << (32 - tt(n) + i)) | (t << i) | r),
            (St = l + e);
    } else (xt = (1 << l) | (t << i) | r), (St = e);
}
function ac(e) {
    e.return !== null && (sr(e, 1), Lm(e, 1, 0));
}
function uc(e) {
    for (; e === Ro; ) (Ro = Gr[--Yr]), (Gr[Yr] = null), (zo = Gr[--Yr]), (Gr[Yr] = null);
    for (; e === yr; )
        (yr = jn[--Bn]), (jn[Bn] = null), (St = jn[--Bn]), (jn[Bn] = null), (xt = jn[--Bn]), (jn[Bn] = null);
}
var zn = null,
    Rn = null,
    Me = !1,
    nt = null;
function Im(e, n) {
    var t = Hn(5, null, null, 0);
    (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        (n = e.deletions),
        n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Yp(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return (
                (n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
                n !== null ? ((e.stateNode = n), (zn = e), (Rn = Gt(n.firstChild)), !0) : !1
            );
        case 6:
            return (
                (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                n !== null ? ((e.stateNode = n), (zn = e), (Rn = null), !0) : !1
            );
        case 13:
            return (
                (n = n.nodeType !== 8 ? null : n),
                n !== null
                    ? ((t = yr !== null ? { id: xt, overflow: St } : null),
                      (e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }),
                      (t = Hn(18, null, null, 0)),
                      (t.stateNode = n),
                      (t.return = e),
                      (e.child = t),
                      (zn = e),
                      (Rn = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function fs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ps(e) {
    if (Me) {
        var n = Rn;
        if (n) {
            var t = n;
            if (!Yp(e, n)) {
                if (fs(e)) throw Error(U(418));
                n = Gt(t.nextSibling);
                var r = zn;
                n && Yp(e, n) ? Im(r, t) : ((e.flags = (e.flags & -4097) | 2), (Me = !1), (zn = e));
            }
        } else {
            if (fs(e)) throw Error(U(418));
            (e.flags = (e.flags & -4097) | 2), (Me = !1), (zn = e);
        }
    }
}
function qp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    zn = e;
}
function ql(e) {
    if (e !== zn) return !1;
    if (!Me) return qp(e), (Me = !0), !1;
    var n;
    if (
        ((n = e.tag !== 3) &&
            !(n = e.tag !== 5) &&
            ((n = e.type), (n = n !== "head" && n !== "body" && !as(e.type, e.memoizedProps))),
        n && (n = Rn))
    ) {
        if (fs(e)) throw (Nm(), Error(U(418)));
        for (; n; ) Im(e, n), (n = Gt(n.nextSibling));
    }
    if ((qp(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(U(317));
        e: {
            for (e = e.nextSibling, n = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            Rn = Gt(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
                }
                e = e.nextSibling;
            }
            Rn = null;
        }
    } else Rn = zn ? Gt(e.stateNode.nextSibling) : null;
    return !0;
}
function Nm() {
    for (var e = Rn; e; ) e = Gt(e.nextSibling);
}
function ai() {
    (Rn = zn = null), (Me = !1);
}
function sc(e) {
    nt === null ? (nt = [e]) : nt.push(e);
}
var Nw = Pt.ReactCurrentBatchConfig;
function Pi(e, n, t) {
    if (((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (t._owner) {
            if (((t = t._owner), t)) {
                if (t.tag !== 1) throw Error(U(309));
                var r = t.stateNode;
            }
            if (!r) throw Error(U(147, e));
            var i = r,
                l = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l
                ? n.ref
                : ((n = function (o) {
                      var a = i.refs;
                      o === null ? delete a[l] : (a[l] = o);
                  }),
                  (n._stringRef = l),
                  n);
        }
        if (typeof e != "string") throw Error(U(284));
        if (!t._owner) throw Error(U(290, e));
    }
    return e;
}
function Xl(e, n) {
    throw (
        ((e = Object.prototype.toString.call(n)),
        Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
    );
}
function Xp(e) {
    var n = e._init;
    return n(e._payload);
}
function Rm(e) {
    function n(v, k) {
        if (e) {
            var S = v.deletions;
            S === null ? ((v.deletions = [k]), (v.flags |= 16)) : S.push(k);
        }
    }
    function t(v, k) {
        if (!e) return null;
        for (; k !== null; ) n(v, k), (k = k.sibling);
        return null;
    }
    function r(v, k) {
        for (v = new Map(); k !== null; ) k.key !== null ? v.set(k.key, k) : v.set(k.index, k), (k = k.sibling);
        return v;
    }
    function i(v, k) {
        return (v = Kt(v, k)), (v.index = 0), (v.sibling = null), v;
    }
    function l(v, k, S) {
        return (
            (v.index = S),
            e
                ? ((S = v.alternate),
                  S !== null ? ((S = S.index), S < k ? ((v.flags |= 2), k) : S) : ((v.flags |= 2), k))
                : ((v.flags |= 1048576), k)
        );
    }
    function o(v) {
        return e && v.alternate === null && (v.flags |= 2), v;
    }
    function a(v, k, S, R) {
        return k === null || k.tag !== 6
            ? ((k = gu(S, v.mode, R)), (k.return = v), k)
            : ((k = i(k, S)), (k.return = v), k);
    }
    function u(v, k, S, R) {
        var O = S.type;
        return O === Br
            ? d(v, k, S.props.children, R, S.key)
            : k !== null &&
                (k.elementType === O || (typeof O == "object" && O !== null && O.$$typeof === Ft && Xp(O) === k.type))
              ? ((R = i(k, S.props)), (R.ref = Pi(v, k, S)), (R.return = v), R)
              : ((R = yo(S.type, S.key, S.props, null, v.mode, R)), (R.ref = Pi(v, k, S)), (R.return = v), R);
    }
    function s(v, k, S, R) {
        return k === null ||
            k.tag !== 4 ||
            k.stateNode.containerInfo !== S.containerInfo ||
            k.stateNode.implementation !== S.implementation
            ? ((k = vu(S, v.mode, R)), (k.return = v), k)
            : ((k = i(k, S.children || [])), (k.return = v), k);
    }
    function d(v, k, S, R, O) {
        return k === null || k.tag !== 7
            ? ((k = gr(S, v.mode, R, O)), (k.return = v), k)
            : ((k = i(k, S)), (k.return = v), k);
    }
    function f(v, k, S) {
        if ((typeof k == "string" && k !== "") || typeof k == "number")
            return (k = gu("" + k, v.mode, S)), (k.return = v), k;
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case $l:
                    return (
                        (S = yo(k.type, k.key, k.props, null, v.mode, S)), (S.ref = Pi(v, null, k)), (S.return = v), S
                    );
                case jr:
                    return (k = vu(k, v.mode, S)), (k.return = v), k;
                case Ft:
                    var R = k._init;
                    return f(v, R(k._payload), S);
            }
            if (Oi(k) || bi(k)) return (k = gr(k, v.mode, S, null)), (k.return = v), k;
            Xl(v, k);
        }
        return null;
    }
    function g(v, k, S, R) {
        var O = k !== null ? k.key : null;
        if ((typeof S == "string" && S !== "") || typeof S == "number") return O !== null ? null : a(v, k, "" + S, R);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case $l:
                    return S.key === O ? u(v, k, S, R) : null;
                case jr:
                    return S.key === O ? s(v, k, S, R) : null;
                case Ft:
                    return (O = S._init), g(v, k, O(S._payload), R);
            }
            if (Oi(S) || bi(S)) return O !== null ? null : d(v, k, S, R, null);
            Xl(v, S);
        }
        return null;
    }
    function m(v, k, S, R, O) {
        if ((typeof R == "string" && R !== "") || typeof R == "number")
            return (v = v.get(S) || null), a(k, v, "" + R, O);
        if (typeof R == "object" && R !== null) {
            switch (R.$$typeof) {
                case $l:
                    return (v = v.get(R.key === null ? S : R.key) || null), u(k, v, R, O);
                case jr:
                    return (v = v.get(R.key === null ? S : R.key) || null), s(k, v, R, O);
                case Ft:
                    var E = R._init;
                    return m(v, k, S, E(R._payload), O);
            }
            if (Oi(R) || bi(R)) return (v = v.get(S) || null), d(k, v, R, O, null);
            Xl(k, R);
        }
        return null;
    }
    function y(v, k, S, R) {
        for (var O = null, E = null, F = k, M = (k = 0), q = null; F !== null && M < S.length; M++) {
            F.index > M ? ((q = F), (F = null)) : (q = F.sibling);
            var L = g(v, F, S[M], R);
            if (L === null) {
                F === null && (F = q);
                break;
            }
            e && F && L.alternate === null && n(v, F),
                (k = l(L, k, M)),
                E === null ? (O = L) : (E.sibling = L),
                (E = L),
                (F = q);
        }
        if (M === S.length) return t(v, F), Me && sr(v, M), O;
        if (F === null) {
            for (; M < S.length; M++)
                (F = f(v, S[M], R)), F !== null && ((k = l(F, k, M)), E === null ? (O = F) : (E.sibling = F), (E = F));
            return Me && sr(v, M), O;
        }
        for (F = r(v, F); M < S.length; M++)
            (q = m(F, v, M, S[M], R)),
                q !== null &&
                    (e && q.alternate !== null && F.delete(q.key === null ? M : q.key),
                    (k = l(q, k, M)),
                    E === null ? (O = q) : (E.sibling = q),
                    (E = q));
        return (
            e &&
                F.forEach(function (G) {
                    return n(v, G);
                }),
            Me && sr(v, M),
            O
        );
    }
    function w(v, k, S, R) {
        var O = bi(S);
        if (typeof O != "function") throw Error(U(150));
        if (((S = O.call(S)), S == null)) throw Error(U(151));
        for (var E = (O = null), F = k, M = (k = 0), q = null, L = S.next(); F !== null && !L.done; M++, L = S.next()) {
            F.index > M ? ((q = F), (F = null)) : (q = F.sibling);
            var G = g(v, F, L.value, R);
            if (G === null) {
                F === null && (F = q);
                break;
            }
            e && F && G.alternate === null && n(v, F),
                (k = l(G, k, M)),
                E === null ? (O = G) : (E.sibling = G),
                (E = G),
                (F = q);
        }
        if (L.done) return t(v, F), Me && sr(v, M), O;
        if (F === null) {
            for (; !L.done; M++, L = S.next())
                (L = f(v, L.value, R)),
                    L !== null && ((k = l(L, k, M)), E === null ? (O = L) : (E.sibling = L), (E = L));
            return Me && sr(v, M), O;
        }
        for (F = r(v, F); !L.done; M++, L = S.next())
            (L = m(F, v, M, L.value, R)),
                L !== null &&
                    (e && L.alternate !== null && F.delete(L.key === null ? M : L.key),
                    (k = l(L, k, M)),
                    E === null ? (O = L) : (E.sibling = L),
                    (E = L));
        return (
            e &&
                F.forEach(function (X) {
                    return n(v, X);
                }),
            Me && sr(v, M),
            O
        );
    }
    function z(v, k, S, R) {
        if (
            (typeof S == "object" && S !== null && S.type === Br && S.key === null && (S = S.props.children),
            typeof S == "object" && S !== null)
        ) {
            switch (S.$$typeof) {
                case $l:
                    e: {
                        for (var O = S.key, E = k; E !== null; ) {
                            if (E.key === O) {
                                if (((O = S.type), O === Br)) {
                                    if (E.tag === 7) {
                                        t(v, E.sibling), (k = i(E, S.props.children)), (k.return = v), (v = k);
                                        break e;
                                    }
                                } else if (
                                    E.elementType === O ||
                                    (typeof O == "object" && O !== null && O.$$typeof === Ft && Xp(O) === E.type)
                                ) {
                                    t(v, E.sibling),
                                        (k = i(E, S.props)),
                                        (k.ref = Pi(v, E, S)),
                                        (k.return = v),
                                        (v = k);
                                    break e;
                                }
                                t(v, E);
                                break;
                            } else n(v, E);
                            E = E.sibling;
                        }
                        S.type === Br
                            ? ((k = gr(S.props.children, v.mode, R, S.key)), (k.return = v), (v = k))
                            : ((R = yo(S.type, S.key, S.props, null, v.mode, R)),
                              (R.ref = Pi(v, k, S)),
                              (R.return = v),
                              (v = R));
                    }
                    return o(v);
                case jr:
                    e: {
                        for (E = S.key; k !== null; ) {
                            if (k.key === E)
                                if (
                                    k.tag === 4 &&
                                    k.stateNode.containerInfo === S.containerInfo &&
                                    k.stateNode.implementation === S.implementation
                                ) {
                                    t(v, k.sibling), (k = i(k, S.children || [])), (k.return = v), (v = k);
                                    break e;
                                } else {
                                    t(v, k);
                                    break;
                                }
                            else n(v, k);
                            k = k.sibling;
                        }
                        (k = vu(S, v.mode, R)), (k.return = v), (v = k);
                    }
                    return o(v);
                case Ft:
                    return (E = S._init), z(v, k, E(S._payload), R);
            }
            if (Oi(S)) return y(v, k, S, R);
            if (bi(S)) return w(v, k, S, R);
            Xl(v, S);
        }
        return (typeof S == "string" && S !== "") || typeof S == "number"
            ? ((S = "" + S),
              k !== null && k.tag === 6
                  ? (t(v, k.sibling), (k = i(k, S)), (k.return = v), (v = k))
                  : (t(v, k), (k = gu(S, v.mode, R)), (k.return = v), (v = k)),
              o(v))
            : t(v, k);
    }
    return z;
}
var ui = Rm(!0),
    zm = Rm(!1),
    Oo = nr(null),
    Ao = null,
    qr = null,
    cc = null;
function fc() {
    cc = qr = Ao = null;
}
function pc(e) {
    var n = Oo.current;
    Ae(Oo), (e._currentValue = n);
}
function ds(e, n, t) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
            e === t)
        )
            break;
        e = e.return;
    }
}
function ti(e, n) {
    (Ao = e),
        (cc = qr = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & n && (bn = !0), (e.firstContext = null));
}
function Qn(e) {
    var n = e._currentValue;
    if (cc !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), qr === null)) {
            if (Ao === null) throw Error(U(308));
            (qr = e), (Ao.dependencies = { lanes: 0, firstContext: e });
        } else qr = qr.next = e;
    return n;
}
var dr = null;
function dc(e) {
    dr === null ? (dr = [e]) : dr.push(e);
}
function Om(e, n, t, r) {
    var i = n.interleaved;
    return i === null ? ((t.next = t), dc(n)) : ((t.next = i.next), (i.next = t)), (n.interleaved = t), _t(e, r);
}
function _t(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
        (e.childLanes |= n), (t = e.alternate), t !== null && (t.childLanes |= n), (t = e), (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
}
var $t = !1;
function hc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Am(e, n) {
    (e = e.updateQueue),
        n.updateQueue === e &&
            (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function bt(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function Yt(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), we & 2)) {
        var i = r.pending;
        return i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (r.pending = n), _t(e, t);
    }
    return (
        (i = r.interleaved),
        i === null ? ((n.next = n), dc(r)) : ((n.next = i.next), (i.next = n)),
        (r.interleaved = n),
        _t(e, t)
    );
}
function fo(e, n, t) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), Js(e, t);
    }
}
function Kp(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
        var i = null,
            l = null;
        if (((t = t.firstBaseUpdate), t !== null)) {
            do {
                var o = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null,
                };
                l === null ? (i = l = o) : (l = l.next = o), (t = t.next);
            } while (t !== null);
            l === null ? (i = l = n) : (l = l.next = n);
        } else i = l = n;
        (t = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }),
            (e.updateQueue = t);
        return;
    }
    (e = t.lastBaseUpdate), e === null ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
}
function Do(e, n, t, r) {
    var i = e.updateQueue;
    $t = !1;
    var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a,
            s = u.next;
        (u.next = null), o === null ? (l = s) : (o.next = s), (o = u);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== o && (a === null ? (d.firstBaseUpdate = s) : (a.next = s), (d.lastBaseUpdate = u)));
    }
    if (l !== null) {
        var f = i.baseState;
        (o = 0), (d = s = u = null), (a = l);
        do {
            var g = a.lane,
                m = a.eventTime;
            if ((r & g) === g) {
                d !== null &&
                    (d = d.next =
                        { eventTime: m, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var y = e,
                        w = a;
                    switch (((g = n), (m = t), w.tag)) {
                        case 1:
                            if (((y = w.payload), typeof y == "function")) {
                                f = y.call(m, f, g);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (((y = w.payload), (g = typeof y == "function" ? y.call(m, f, g) : y), g == null))
                                break e;
                            f = Ue({}, f, g);
                            break e;
                        case 2:
                            $t = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64), (g = i.effects), g === null ? (i.effects = [a]) : g.push(a));
            } else
                (m = { eventTime: m, lane: g, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((s = d = m), (u = f)) : (d = d.next = m),
                    (o |= g);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (g = a), (a = g.next), (g.next = null), (i.lastBaseUpdate = g), (i.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (u = f),
            (i.baseState = u),
            (i.firstBaseUpdate = s),
            (i.lastBaseUpdate = d),
            (n = i.shared.interleaved),
            n !== null)
        ) {
            i = n;
            do (o |= i.lane), (i = i.next);
            while (i !== n);
        } else l === null && (i.shared.lanes = 0);
        (wr |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function Zp(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = t), typeof i != "function")) throw Error(U(191, i));
                i.call(r);
            }
        }
}
var gl = {},
    pt = nr(gl),
    ll = nr(gl),
    ol = nr(gl);
function hr(e) {
    if (e === gl) throw Error(U(174));
    return e;
}
function mc(e, n) {
    switch ((ze(ol, n), ze(ll, e), ze(pt, gl), (e = n.nodeType), e)) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : Gu(null, "");
            break;
        default:
            (e = e === 8 ? n.parentNode : n), (n = e.namespaceURI || null), (e = e.tagName), (n = Gu(n, e));
    }
    Ae(pt), ze(pt, n);
}
function si() {
    Ae(pt), Ae(ll), Ae(ol);
}
function Dm(e) {
    hr(ol.current);
    var n = hr(pt.current),
        t = Gu(n, e.type);
    n !== t && (ze(ll, e), ze(pt, t));
}
function gc(e) {
    ll.current === e && (Ae(pt), Ae(ll));
}
var $e = nr(0);
function Mo(e) {
    for (var n = e; n !== null; ) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")) return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n;
        } else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
}
var cu = [];
function vc() {
    for (var e = 0; e < cu.length; e++) cu[e]._workInProgressVersionPrimary = null;
    cu.length = 0;
}
var po = Pt.ReactCurrentDispatcher,
    fu = Pt.ReactCurrentBatchConfig,
    kr = 0,
    je = null,
    qe = null,
    Je = null,
    Fo = !1,
    Ui = !1,
    al = 0,
    Rw = 0;
function un() {
    throw Error(U(321));
}
function yc(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!lt(e[t], n[t])) return !1;
    return !0;
}
function kc(e, n, t, r, i, l) {
    if (
        ((kr = l),
        (je = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (po.current = e === null || e.memoizedState === null ? Dw : Mw),
        (e = t(r, i)),
        Ui)
    ) {
        l = 0;
        do {
            if (((Ui = !1), (al = 0), 25 <= l)) throw Error(U(301));
            (l += 1), (Je = qe = null), (n.updateQueue = null), (po.current = Fw), (e = t(r, i));
        } while (Ui);
    }
    if (((po.current = $o), (n = qe !== null && qe.next !== null), (kr = 0), (Je = qe = je = null), (Fo = !1), n))
        throw Error(U(300));
    return e;
}
function wc() {
    var e = al !== 0;
    return (al = 0), e;
}
function ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? (je.memoizedState = Je = e) : (Je = Je.next = e), Je;
}
function Gn() {
    if (qe === null) {
        var e = je.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var n = Je === null ? je.memoizedState : Je.next;
    if (n !== null) (Je = n), (qe = e);
    else {
        if (e === null) throw Error(U(310));
        (qe = e),
            (e = {
                memoizedState: qe.memoizedState,
                baseState: qe.baseState,
                baseQueue: qe.baseQueue,
                queue: qe.queue,
                next: null,
            }),
            Je === null ? (je.memoizedState = Je = e) : (Je = Je.next = e);
    }
    return Je;
}
function ul(e, n) {
    return typeof n == "function" ? n(e) : n;
}
function pu(e) {
    var n = Gn(),
        t = n.queue;
    if (t === null) throw Error(U(311));
    t.lastRenderedReducer = e;
    var r = qe,
        i = r.baseQueue,
        l = t.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            (i.next = l.next), (l.next = o);
        }
        (r.baseQueue = i = l), (t.pending = null);
    }
    if (i !== null) {
        (l = i.next), (r = r.baseState);
        var a = (o = null),
            u = null,
            s = l;
        do {
            var d = s.lane;
            if ((kr & d) === d)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var f = {
                    lane: d,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                u === null ? ((a = u = f), (o = r)) : (u = u.next = f), (je.lanes |= d), (wr |= d);
            }
            s = s.next;
        } while (s !== null && s !== l);
        u === null ? (o = r) : (u.next = a),
            lt(r, n.memoizedState) || (bn = !0),
            (n.memoizedState = r),
            (n.baseState = o),
            (n.baseQueue = u),
            (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
        i = e;
        do (l = i.lane), (je.lanes |= l), (wr |= l), (i = i.next);
        while (i !== e);
    } else i === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
}
function du(e) {
    var n = Gn(),
        t = n.queue;
    if (t === null) throw Error(U(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        i = t.pending,
        l = n.memoizedState;
    if (i !== null) {
        t.pending = null;
        var o = (i = i.next);
        do (l = e(l, o.action)), (o = o.next);
        while (o !== i);
        lt(l, n.memoizedState) || (bn = !0),
            (n.memoizedState = l),
            n.baseQueue === null && (n.baseState = l),
            (t.lastRenderedState = l);
    }
    return [l, r];
}
function Mm() {}
function Fm(e, n) {
    var t = je,
        r = Gn(),
        i = n(),
        l = !lt(r.memoizedState, i);
    if (
        (l && ((r.memoizedState = i), (bn = !0)),
        (r = r.queue),
        xc(Bm.bind(null, t, r, e), [e]),
        r.getSnapshot !== n || l || (Je !== null && Je.memoizedState.tag & 1))
    ) {
        if (((t.flags |= 2048), sl(9, jm.bind(null, t, r, i, n), void 0, null), en === null)) throw Error(U(349));
        kr & 30 || $m(t, n, i);
    }
    return i;
}
function $m(e, n, t) {
    (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        (n = je.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }), (je.updateQueue = n), (n.stores = [e]))
            : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function jm(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), Um(n) && Hm(e);
}
function Bm(e, n, t) {
    return t(function () {
        Um(n) && Hm(e);
    });
}
function Um(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !lt(e, t);
    } catch {
        return !0;
    }
}
function Hm(e) {
    var n = _t(e, 1);
    n !== null && rt(n, e, 1, -1);
}
function Jp(e) {
    var n = ut();
    return (
        typeof e == "function" && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ul,
            lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = Aw.bind(null, je, e)),
        [n.memoizedState, e]
    );
}
function sl(e, n, t, r) {
    return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        (n = je.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }), (je.updateQueue = n), (n.lastEffect = e.next = e))
            : ((t = n.lastEffect),
              t === null
                  ? (n.lastEffect = e.next = e)
                  : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
        e
    );
}
function Vm() {
    return Gn().memoizedState;
}
function ho(e, n, t, r) {
    var i = ut();
    (je.flags |= e), (i.memoizedState = sl(1 | n, t, void 0, r === void 0 ? null : r));
}
function ra(e, n, t, r) {
    var i = Gn();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (qe !== null) {
        var o = qe.memoizedState;
        if (((l = o.destroy), r !== null && yc(r, o.deps))) {
            i.memoizedState = sl(n, t, l, r);
            return;
        }
    }
    (je.flags |= e), (i.memoizedState = sl(1 | n, t, l, r));
}
function ed(e, n) {
    return ho(8390656, 8, e, n);
}
function xc(e, n) {
    return ra(2048, 8, e, n);
}
function Wm(e, n) {
    return ra(4, 2, e, n);
}
function Qm(e, n) {
    return ra(4, 4, e, n);
}
function Gm(e, n) {
    if (typeof n == "function")
        return (
            (e = e()),
            n(e),
            function () {
                n(null);
            }
        );
    if (n != null)
        return (
            (e = e()),
            (n.current = e),
            function () {
                n.current = null;
            }
        );
}
function Ym(e, n, t) {
    return (t = t != null ? t.concat([e]) : null), ra(4, 4, Gm.bind(null, n, e), t);
}
function Sc() {}
function qm(e, n) {
    var t = Gn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && yc(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
}
function Xm(e, n) {
    var t = Gn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && yc(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Km(e, n, t) {
    return kr & 21
        ? (lt(t, n) || ((t = tm()), (je.lanes |= t), (wr |= t), (e.baseState = !0)), n)
        : (e.baseState && ((e.baseState = !1), (bn = !0)), (e.memoizedState = t));
}
function zw(e, n) {
    var t = Te;
    (Te = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = fu.transition;
    fu.transition = {};
    try {
        e(!1), n();
    } finally {
        (Te = t), (fu.transition = r);
    }
}
function Zm() {
    return Gn().memoizedState;
}
function Ow(e, n, t) {
    var r = Xt(e);
    if (((t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }), Jm(e))) eg(n, t);
    else if (((t = Om(e, n, t, r)), t !== null)) {
        var i = vn();
        rt(t, e, r, i), ng(t, n, r);
    }
}
function Aw(e, n, t) {
    var r = Xt(e),
        i = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Jm(e)) eg(n, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = n.lastRenderedReducer), l !== null))
            try {
                var o = n.lastRenderedState,
                    a = l(o, t);
                if (((i.hasEagerState = !0), (i.eagerState = a), lt(a, o))) {
                    var u = n.interleaved;
                    u === null ? ((i.next = i), dc(n)) : ((i.next = u.next), (u.next = i)), (n.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (t = Om(e, n, i, r)), t !== null && ((i = vn()), rt(t, e, r, i), ng(t, n, r));
    }
}
function Jm(e) {
    var n = e.alternate;
    return e === je || (n !== null && n === je);
}
function eg(e, n) {
    Ui = Fo = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
}
function ng(e, n, t) {
    if (t & 4194240) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), Js(e, t);
    }
}
var $o = {
        readContext: Qn,
        useCallback: un,
        useContext: un,
        useEffect: un,
        useImperativeHandle: un,
        useInsertionEffect: un,
        useLayoutEffect: un,
        useMemo: un,
        useReducer: un,
        useRef: un,
        useState: un,
        useDebugValue: un,
        useDeferredValue: un,
        useTransition: un,
        useMutableSource: un,
        useSyncExternalStore: un,
        useId: un,
        unstable_isNewReconciler: !1,
    },
    Dw = {
        readContext: Qn,
        useCallback: function (e, n) {
            return (ut().memoizedState = [e, n === void 0 ? null : n]), e;
        },
        useContext: Qn,
        useEffect: ed,
        useImperativeHandle: function (e, n, t) {
            return (t = t != null ? t.concat([e]) : null), ho(4194308, 4, Gm.bind(null, n, e), t);
        },
        useLayoutEffect: function (e, n) {
            return ho(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
            return ho(4, 2, e, n);
        },
        useMemo: function (e, n) {
            var t = ut();
            return (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
        },
        useReducer: function (e, n, t) {
            var r = ut();
            return (
                (n = t !== void 0 ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = Ow.bind(null, je, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var n = ut();
            return (e = { current: e }), (n.memoizedState = e);
        },
        useState: Jp,
        useDebugValue: Sc,
        useDeferredValue: function (e) {
            return (ut().memoizedState = e);
        },
        useTransition: function () {
            var e = Jp(!1),
                n = e[0];
            return (e = zw.bind(null, e[1])), (ut().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, t) {
            var r = je,
                i = ut();
            if (Me) {
                if (t === void 0) throw Error(U(407));
                t = t();
            } else {
                if (((t = n()), en === null)) throw Error(U(349));
                kr & 30 || $m(r, n, t);
            }
            i.memoizedState = t;
            var l = { value: t, getSnapshot: n };
            return (
                (i.queue = l),
                ed(Bm.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                sl(9, jm.bind(null, r, l, t, n), void 0, null),
                t
            );
        },
        useId: function () {
            var e = ut(),
                n = en.identifierPrefix;
            if (Me) {
                var t = St,
                    r = xt;
                (t = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + t),
                    (n = ":" + n + "R" + t),
                    (t = al++),
                    0 < t && (n += "H" + t.toString(32)),
                    (n += ":");
            } else (t = Rw++), (n = ":" + n + "r" + t.toString(32) + ":");
            return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
    },
    Mw = {
        readContext: Qn,
        useCallback: qm,
        useContext: Qn,
        useEffect: xc,
        useImperativeHandle: Ym,
        useInsertionEffect: Wm,
        useLayoutEffect: Qm,
        useMemo: Xm,
        useReducer: pu,
        useRef: Vm,
        useState: function () {
            return pu(ul);
        },
        useDebugValue: Sc,
        useDeferredValue: function (e) {
            var n = Gn();
            return Km(n, qe.memoizedState, e);
        },
        useTransition: function () {
            var e = pu(ul)[0],
                n = Gn().memoizedState;
            return [e, n];
        },
        useMutableSource: Mm,
        useSyncExternalStore: Fm,
        useId: Zm,
        unstable_isNewReconciler: !1,
    },
    Fw = {
        readContext: Qn,
        useCallback: qm,
        useContext: Qn,
        useEffect: xc,
        useImperativeHandle: Ym,
        useInsertionEffect: Wm,
        useLayoutEffect: Qm,
        useMemo: Xm,
        useReducer: du,
        useRef: Vm,
        useState: function () {
            return du(ul);
        },
        useDebugValue: Sc,
        useDeferredValue: function (e) {
            var n = Gn();
            return qe === null ? (n.memoizedState = e) : Km(n, qe.memoizedState, e);
        },
        useTransition: function () {
            var e = du(ul)[0],
                n = Gn().memoizedState;
            return [e, n];
        },
        useMutableSource: Mm,
        useSyncExternalStore: Fm,
        useId: Zm,
        unstable_isNewReconciler: !1,
    };
function Jn(e, n) {
    if (e && e.defaultProps) {
        (n = Ue({}, n)), (e = e.defaultProps);
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n;
    }
    return n;
}
function hs(e, n, t, r) {
    (n = e.memoizedState),
        (t = t(r, n)),
        (t = t == null ? n : Ue({}, n, t)),
        (e.memoizedState = t),
        e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ia = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Cr(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = vn(),
            i = Xt(e),
            l = bt(r, i);
        (l.payload = n), t != null && (l.callback = t), (n = Yt(e, l, i)), n !== null && (rt(n, e, i, r), fo(n, e, i));
    },
    enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = vn(),
            i = Xt(e),
            l = bt(r, i);
        (l.tag = 1),
            (l.payload = n),
            t != null && (l.callback = t),
            (n = Yt(e, l, i)),
            n !== null && (rt(n, e, i, r), fo(n, e, i));
    },
    enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = vn(),
            r = Xt(e),
            i = bt(t, r);
        (i.tag = 2), n != null && (i.callback = n), (n = Yt(e, i, r)), n !== null && (rt(n, e, r, t), fo(n, e, r));
    },
};
function nd(e, n, t, r, i, l, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, l, o)
            : n.prototype && n.prototype.isPureReactComponent
              ? !nl(t, r) || !nl(i, l)
              : !0
    );
}
function tg(e, n, t) {
    var r = !1,
        i = Jt,
        l = n.contextType;
    return (
        typeof l == "object" && l !== null
            ? (l = Qn(l))
            : ((i = En(n) ? vr : pn.current), (r = n.contextTypes), (l = (r = r != null) ? oi(e, i) : Jt)),
        (n = new n(t, l)),
        (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ia),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        n
    );
}
function td(e, n, t, r) {
    (e = n.state),
        typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
        typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && ia.enqueueReplaceState(n, n.state, null);
}
function ms(e, n, t, r) {
    var i = e.stateNode;
    (i.props = t), (i.state = e.memoizedState), (i.refs = {}), hc(e);
    var l = n.contextType;
    typeof l == "object" && l !== null ? (i.context = Qn(l)) : ((l = En(n) ? vr : pn.current), (i.context = oi(e, l))),
        (i.state = e.memoizedState),
        (l = n.getDerivedStateFromProps),
        typeof l == "function" && (hs(e, n, l, t), (i.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((n = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            n !== i.state && ia.enqueueReplaceState(i, i.state, null),
            Do(e, t, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ci(e, n) {
    try {
        var t = "",
            r = n;
        do (t += pk(r)), (r = r.return);
        while (r);
        var i = t;
    } catch (l) {
        i =
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack;
    }
    return { value: e, source: n, stack: i, digest: null };
}
function hu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function gs(e, n) {
    try {
        console.error(n.value);
    } catch (t) {
        setTimeout(function () {
            throw t;
        });
    }
}
var $w = typeof WeakMap == "function" ? WeakMap : Map;
function rg(e, n, t) {
    (t = bt(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
        (t.callback = function () {
            Bo || ((Bo = !0), (_s = r)), gs(e, n);
        }),
        t
    );
}
function ig(e, n, t) {
    (t = bt(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = n.value;
        (t.payload = function () {
            return r(i);
        }),
            (t.callback = function () {
                gs(e, n);
            });
    }
    var l = e.stateNode;
    return (
        l !== null &&
            typeof l.componentDidCatch == "function" &&
            (t.callback = function () {
                gs(e, n), typeof r != "function" && (qt === null ? (qt = new Set([this])) : qt.add(this));
                var o = n.stack;
                this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
            }),
        t
    );
}
function rd(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new $w();
        var i = new Set();
        r.set(n, i);
    } else (i = r.get(n)), i === void 0 && ((i = new Set()), r.set(n, i));
    i.has(t) || (i.add(t), (e = Jw.bind(null, e, n, t)), n.then(e, e));
}
function id(e) {
    do {
        var n;
        if (((n = e.tag === 13) && ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)), n)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function ld(e, n, t, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === n
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (t.flags |= 131072),
                (t.flags &= -52805),
                t.tag === 1 && (t.alternate === null ? (t.tag = 17) : ((n = bt(-1, 1)), (n.tag = 2), Yt(t, n, 1))),
                (t.lanes |= 1)),
          e);
}
var jw = Pt.ReactCurrentOwner,
    bn = !1;
function mn(e, n, t, r) {
    n.child = e === null ? zm(n, null, t, r) : ui(n, e.child, t, r);
}
function od(e, n, t, r, i) {
    t = t.render;
    var l = n.ref;
    return (
        ti(n, i),
        (r = kc(e, n, t, r, l, i)),
        (t = wc()),
        e !== null && !bn
            ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i), Tt(e, n, i))
            : (Me && t && ac(n), (n.flags |= 1), mn(e, n, r, i), n.child)
    );
}
function ad(e, n, t, r, i) {
    if (e === null) {
        var l = t.type;
        return typeof l == "function" &&
            !Ic(l) &&
            l.defaultProps === void 0 &&
            t.compare === null &&
            t.defaultProps === void 0
            ? ((n.tag = 15), (n.type = l), lg(e, n, l, r, i))
            : ((e = yo(t.type, null, r, n, n.mode, i)), (e.ref = n.ref), (e.return = n), (n.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
        var o = l.memoizedProps;
        if (((t = t.compare), (t = t !== null ? t : nl), t(o, r) && e.ref === n.ref)) return Tt(e, n, i);
    }
    return (n.flags |= 1), (e = Kt(l, r)), (e.ref = n.ref), (e.return = n), (n.child = e);
}
function lg(e, n, t, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (nl(l, r) && e.ref === n.ref)
            if (((bn = !1), (n.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (bn = !0);
            else return (n.lanes = e.lanes), Tt(e, n, i);
    }
    return vs(e, n, t, r, i);
}
function og(e, n, t) {
    var r = n.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(n.mode & 1))
            (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ze(Kr, Nn), (Nn |= t);
        else {
            if (!(t & 1073741824))
                return (
                    (e = l !== null ? l.baseLanes | t : t),
                    (n.lanes = n.childLanes = 1073741824),
                    (n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (n.updateQueue = null),
                    ze(Kr, Nn),
                    (Nn |= e),
                    null
                );
            (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = l !== null ? l.baseLanes : t),
                ze(Kr, Nn),
                (Nn |= r);
        }
    else l !== null ? ((r = l.baseLanes | t), (n.memoizedState = null)) : (r = t), ze(Kr, Nn), (Nn |= r);
    return mn(e, n, i, t), n.child;
}
function ag(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) && ((n.flags |= 512), (n.flags |= 2097152));
}
function vs(e, n, t, r, i) {
    var l = En(t) ? vr : pn.current;
    return (
        (l = oi(n, l)),
        ti(n, i),
        (t = kc(e, n, t, r, l, i)),
        (r = wc()),
        e !== null && !bn
            ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i), Tt(e, n, i))
            : (Me && r && ac(n), (n.flags |= 1), mn(e, n, t, i), n.child)
    );
}
function ud(e, n, t, r, i) {
    if (En(t)) {
        var l = !0;
        No(n);
    } else l = !1;
    if ((ti(n, i), n.stateNode === null)) mo(e, n), tg(n, t, r), ms(n, t, r, i), (r = !0);
    else if (e === null) {
        var o = n.stateNode,
            a = n.memoizedProps;
        o.props = a;
        var u = o.context,
            s = t.contextType;
        typeof s == "object" && s !== null ? (s = Qn(s)) : ((s = En(t) ? vr : pn.current), (s = oi(n, s)));
        var d = t.getDerivedStateFromProps,
            f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== r || u !== s) && td(n, o, r, s)),
            ($t = !1);
        var g = n.memoizedState;
        (o.state = g),
            Do(n, r, o, i),
            (u = n.memoizedState),
            a !== r || g !== u || Cn.current || $t
                ? (typeof d == "function" && (hs(n, t, d, r), (u = n.memoizedState)),
                  (a = $t || nd(n, t, a, r, g, u, s))
                      ? (f ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" && o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (n.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
                        (n.memoizedProps = r),
                        (n.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = a))
                : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), (r = !1));
    } else {
        (o = n.stateNode),
            Am(e, n),
            (a = n.memoizedProps),
            (s = n.type === n.elementType ? a : Jn(n.type, a)),
            (o.props = s),
            (f = n.pendingProps),
            (g = o.context),
            (u = t.contextType),
            typeof u == "object" && u !== null ? (u = Qn(u)) : ((u = En(t) ? vr : pn.current), (u = oi(n, u)));
        var m = t.getDerivedStateFromProps;
        (d = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== f || g !== u) && td(n, o, r, u)),
            ($t = !1),
            (g = n.memoizedState),
            (o.state = g),
            Do(n, r, o, i);
        var y = n.memoizedState;
        a !== f || g !== y || Cn.current || $t
            ? (typeof m == "function" && (hs(n, t, m, r), (y = n.memoizedState)),
              (s = $t || nd(n, t, s, r, g, y, u) || !1)
                  ? (d ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u),
                        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)),
                    typeof o.componentDidUpdate == "function" && (n.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && g === e.memoizedState) ||
                        (n.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && g === e.memoizedState) ||
                        (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = y)),
              (o.props = r),
              (o.state = y),
              (o.context = u),
              (r = s))
            : (typeof o.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && g === e.memoizedState) ||
                  (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && g === e.memoizedState) ||
                  (n.flags |= 1024),
              (r = !1));
    }
    return ys(e, n, t, r, l, i);
}
function ys(e, n, t, r, i, l) {
    ag(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return i && Gp(n, t, !1), Tt(e, n, l);
    (r = n.stateNode), (jw.current = n);
    var a = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (n.flags |= 1),
        e !== null && o ? ((n.child = ui(n, e.child, null, l)), (n.child = ui(n, null, a, l))) : mn(e, n, a, l),
        (n.memoizedState = r.state),
        i && Gp(n, t, !0),
        n.child
    );
}
function ug(e) {
    var n = e.stateNode;
    n.pendingContext ? Qp(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Qp(e, n.context, !1),
        mc(e, n.containerInfo);
}
function sd(e, n, t, r, i) {
    return ai(), sc(i), (n.flags |= 256), mn(e, n, t, r), n.child;
}
var ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function sg(e, n, t) {
    var r = n.pendingProps,
        i = $e.current,
        l = !1,
        o = (n.flags & 128) !== 0,
        a;
    if (
        ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? ((l = !0), (n.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        ze($e, i & 1),
        e === null)
    )
        return (
            ps(n),
            (e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (n.mode & 1 ? (e.data === "$!" ? (n.lanes = 8) : (n.lanes = 1073741824)) : (n.lanes = 1), null)
                : ((o = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = n.mode),
                        (l = n.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = o)) : (l = aa(o, r, 0, null)),
                        (e = gr(e, r, t, null)),
                        (l.return = n),
                        (e.return = n),
                        (l.sibling = e),
                        (n.child = l),
                        (n.child.memoizedState = ws(t)),
                        (n.memoizedState = ks),
                        e)
                      : bc(n, o))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return Bw(e, n, o, r, a, i, t);
    if (l) {
        (l = r.fallback), (o = n.mode), (i = e.child), (a = i.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && n.child !== i
                ? ((r = n.child), (r.childLanes = 0), (r.pendingProps = u), (n.deletions = null))
                : ((r = Kt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (l = Kt(a, l)) : ((l = gr(l, o, t, null)), (l.flags |= 2)),
            (l.return = n),
            (r.return = n),
            (r.sibling = l),
            (n.child = r),
            (r = l),
            (l = n.child),
            (o = e.child.memoizedState),
            (o = o === null ? ws(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }),
            (l.memoizedState = o),
            (l.childLanes = e.childLanes & ~t),
            (n.memoizedState = ks),
            r
        );
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = Kt(l, { mode: "visible", children: r.children })),
        !(n.mode & 1) && (r.lanes = t),
        (r.return = n),
        (r.sibling = null),
        e !== null && ((t = n.deletions), t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r
    );
}
function bc(e, n) {
    return (n = aa({ mode: "visible", children: n }, e.mode, 0, null)), (n.return = e), (e.child = n);
}
function Kl(e, n, t, r) {
    return (
        r !== null && sc(r),
        ui(n, e.child, null, t),
        (e = bc(n, n.pendingProps.children)),
        (e.flags |= 2),
        (n.memoizedState = null),
        e
    );
}
function Bw(e, n, t, r, i, l, o) {
    if (t)
        return n.flags & 256
            ? ((n.flags &= -257), (r = hu(Error(U(422)))), Kl(e, n, o, r))
            : n.memoizedState !== null
              ? ((n.child = e.child), (n.flags |= 128), null)
              : ((l = r.fallback),
                (i = n.mode),
                (r = aa({ mode: "visible", children: r.children }, i, 0, null)),
                (l = gr(l, i, o, null)),
                (l.flags |= 2),
                (r.return = n),
                (l.return = n),
                (r.sibling = l),
                (n.child = r),
                n.mode & 1 && ui(n, e.child, null, o),
                (n.child.memoizedState = ws(o)),
                (n.memoizedState = ks),
                l);
    if (!(n.mode & 1)) return Kl(e, n, o, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (l = Error(U(419))), (r = hu(l, r, void 0)), Kl(e, n, o, r);
    }
    if (((a = (o & e.childLanes) !== 0), bn || a)) {
        if (((r = en), r !== null)) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | o) ? 0 : i),
                i !== 0 && i !== l.retryLane && ((l.retryLane = i), _t(e, i), rt(r, e, i, -1));
        }
        return Lc(), (r = hu(Error(U(421)))), Kl(e, n, o, r);
    }
    return i.data === "$?"
        ? ((n.flags |= 128), (n.child = e.child), (n = ex.bind(null, e)), (i._reactRetry = n), null)
        : ((e = l.treeContext),
          (Rn = Gt(i.nextSibling)),
          (zn = n),
          (Me = !0),
          (nt = null),
          e !== null && ((jn[Bn++] = xt), (jn[Bn++] = St), (jn[Bn++] = yr), (xt = e.id), (St = e.overflow), (yr = n)),
          (n = bc(n, r.children)),
          (n.flags |= 4096),
          n);
}
function cd(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), ds(e.return, n, t);
}
function mu(e, n, t, r, i) {
    var l = e.memoizedState;
    l === null
        ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: i })
        : ((l.isBackwards = n),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = t),
          (l.tailMode = i));
}
function cg(e, n, t) {
    var r = n.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if ((mn(e, n, r.children, t), (r = $e.current), r & 2)) (r = (r & 1) | 2), (n.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && cd(e, t, n);
                else if (e.tag === 19) cd(e, t, n);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === n) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ze($e, r), !(n.mode & 1))) n.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (t = n.child, i = null; t !== null; )
                    (e = t.alternate), e !== null && Mo(e) === null && (i = t), (t = t.sibling);
                (t = i),
                    t === null ? ((i = n.child), (n.child = null)) : ((i = t.sibling), (t.sibling = null)),
                    mu(n, !1, i, t, l);
                break;
            case "backwards":
                for (t = null, i = n.child, n.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Mo(e) === null)) {
                        n.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = t), (t = i), (i = e);
                }
                mu(n, !0, t, null, l);
                break;
            case "together":
                mu(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null;
        }
    return n.child;
}
function mo(e, n) {
    !(n.mode & 1) && e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Tt(e, n, t) {
    if ((e !== null && (n.dependencies = e.dependencies), (wr |= n.lanes), !(t & n.childLanes))) return null;
    if (e !== null && n.child !== e.child) throw Error(U(153));
    if (n.child !== null) {
        for (e = n.child, t = Kt(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
            (e = e.sibling), (t = t.sibling = Kt(e, e.pendingProps)), (t.return = n);
        t.sibling = null;
    }
    return n.child;
}
function Uw(e, n, t) {
    switch (n.tag) {
        case 3:
            ug(n), ai();
            break;
        case 5:
            Dm(n);
            break;
        case 1:
            En(n.type) && No(n);
            break;
        case 4:
            mc(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                i = n.memoizedProps.value;
            ze(Oo, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = n.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ze($e, $e.current & 1), (n.flags |= 128), null)
                    : t & n.child.childLanes
                      ? sg(e, n, t)
                      : (ze($e, $e.current & 1), (e = Tt(e, n, t)), e !== null ? e.sibling : null);
            ze($e, $e.current & 1);
            break;
        case 19:
            if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                if (r) return cg(e, n, t);
                n.flags |= 128;
            }
            if (
                ((i = n.memoizedState),
                i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                ze($e, $e.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (n.lanes = 0), og(e, n, t);
    }
    return Tt(e, n, t);
}
var fg, xs, pg, dg;
fg = function (e, n) {
    for (var t = n.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === n) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
};
xs = function () {};
pg = function (e, n, t, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = n.stateNode), hr(pt.current);
        var l = null;
        switch (t) {
            case "input":
                (i = Hu(e, i)), (r = Hu(e, r)), (l = []);
                break;
            case "select":
                (i = Ue({}, i, { value: void 0 })), (r = Ue({}, r, { value: void 0 })), (l = []);
                break;
            case "textarea":
                (i = Qu(e, i)), (r = Qu(e, r)), (l = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Lo);
        }
        Yu(t, r);
        var o;
        t = null;
        for (s in i)
            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var a = i[s];
                    for (o in a) a.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                        s !== "children" &&
                        s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Yi.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (((a = i != null ? i[s] : void 0), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
                if (s === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (t || (t = {}), (t[o] = ""));
                        for (o in u) u.hasOwnProperty(o) && a[o] !== u[o] && (t || (t = {}), (t[o] = u[o]));
                    } else t || (l || (l = []), l.push(s, t)), (t = u);
                else
                    s === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (a = a ? a.__html : void 0),
                          u != null && a !== u && (l = l || []).push(s, u))
                        : s === "children"
                          ? (typeof u != "string" && typeof u != "number") || (l = l || []).push(s, "" + u)
                          : s !== "suppressContentEditableWarning" &&
                            s !== "suppressHydrationWarning" &&
                            (Yi.hasOwnProperty(s)
                                ? (u != null && s === "onScroll" && Oe("scroll", e), l || a === u || (l = []))
                                : (l = l || []).push(s, u));
        }
        t && (l = l || []).push("style", t);
        var s = l;
        (n.updateQueue = s) && (n.flags |= 4);
    }
};
dg = function (e, n, t, r) {
    t !== r && (n.flags |= 4);
};
function Li(e, n) {
    if (!Me)
        switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var t = null; n !== null; ) n.alternate !== null && (t = n), (n = n.sibling);
                t === null ? (e.tail = null) : (t.sibling = null);
                break;
            case "collapsed":
                t = e.tail;
                for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
                r === null ? (n || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function sn(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var i = e.child; i !== null; )
            (t |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (t |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Hw(e, n, t) {
    var r = n.pendingProps;
    switch ((uc(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return sn(n), null;
        case 1:
            return En(n.type) && Io(), sn(n), null;
        case 3:
            return (
                (r = n.stateNode),
                si(),
                Ae(Cn),
                Ae(pn),
                vc(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (ql(n)
                        ? (n.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                          ((n.flags |= 1024), nt !== null && (Ls(nt), (nt = null)))),
                xs(e, n),
                sn(n),
                null
            );
        case 5:
            gc(n);
            var i = hr(ol.current);
            if (((t = n.type), e !== null && n.stateNode != null))
                pg(e, n, t, r, i), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(U(166));
                    return sn(n), null;
                }
                if (((e = hr(pt.current)), ql(n))) {
                    (r = n.stateNode), (t = n.type);
                    var l = n.memoizedProps;
                    switch (((r[ct] = n), (r[il] = l), (e = (n.mode & 1) !== 0), t)) {
                        case "dialog":
                            Oe("cancel", r), Oe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Oe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Di.length; i++) Oe(Di[i], r);
                            break;
                        case "source":
                            Oe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Oe("error", r), Oe("load", r);
                            break;
                        case "details":
                            Oe("toggle", r);
                            break;
                        case "input":
                            kp(r, l), Oe("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!l.multiple }), Oe("invalid", r);
                            break;
                        case "textarea":
                            xp(r, l), Oe("invalid", r);
                    }
                    Yu(t, l), (i = null);
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (l.suppressHydrationWarning !== !0 && Yl(r.textContent, a, e),
                                      (i = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (l.suppressHydrationWarning !== !0 && Yl(r.textContent, a, e),
                                      (i = ["children", "" + a]))
                                : Yi.hasOwnProperty(o) && a != null && o === "onScroll" && Oe("scroll", r);
                        }
                    switch (t) {
                        case "input":
                            jl(r), wp(r, l, !0);
                            break;
                        case "textarea":
                            jl(r), Sp(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Lo);
                    }
                    (r = i), (n.updateQueue = r), r !== null && (n.flags |= 4);
                } else {
                    (o = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Bh(t)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? t === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = o.createElement(t, { is: r.is }))
                                  : ((e = o.createElement(t)),
                                    t === "select" &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, t)),
                        (e[ct] = n),
                        (e[il] = r),
                        fg(e, n, !1, !1),
                        (n.stateNode = e);
                    e: {
                        switch (((o = qu(t, r)), t)) {
                            case "dialog":
                                Oe("cancel", e), Oe("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Oe("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Di.length; i++) Oe(Di[i], e);
                                i = r;
                                break;
                            case "source":
                                Oe("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Oe("error", e), Oe("load", e), (i = r);
                                break;
                            case "details":
                                Oe("toggle", e), (i = r);
                                break;
                            case "input":
                                kp(e, r), (i = Hu(e, r)), Oe("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = Ue({}, r, { value: void 0 })),
                                    Oe("invalid", e);
                                break;
                            case "textarea":
                                xp(e, r), (i = Qu(e, r)), Oe("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Yu(t, i), (a = i);
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var u = a[l];
                                l === "style"
                                    ? Vh(e, u)
                                    : l === "dangerouslySetInnerHTML"
                                      ? ((u = u ? u.__html : void 0), u != null && Uh(e, u))
                                      : l === "children"
                                        ? typeof u == "string"
                                            ? (t !== "textarea" || u !== "") && qi(e, u)
                                            : typeof u == "number" && qi(e, "" + u)
                                        : l !== "suppressContentEditableWarning" &&
                                          l !== "suppressHydrationWarning" &&
                                          l !== "autoFocus" &&
                                          (Yi.hasOwnProperty(l)
                                              ? u != null && l === "onScroll" && Oe("scroll", e)
                                              : u != null && Gs(e, l, u, o));
                            }
                        switch (t) {
                            case "input":
                                jl(e), wp(e, r, !1);
                                break;
                            case "textarea":
                                jl(e), Sp(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (l = r.value),
                                    l != null
                                        ? Zr(e, !!r.multiple, l, !1)
                                        : r.defaultValue != null && Zr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Lo);
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (n.flags |= 4);
                }
                n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
            }
            return sn(n), null;
        case 6:
            if (e && n.stateNode != null) dg(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null) throw Error(U(166));
                if (((t = hr(ol.current)), hr(pt.current), ql(n))) {
                    if (
                        ((r = n.stateNode),
                        (t = n.memoizedProps),
                        (r[ct] = n),
                        (l = r.nodeValue !== t) && ((e = zn), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Yl(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Yl(r.nodeValue, t, (e.mode & 1) !== 0);
                        }
                    l && (n.flags |= 4);
                } else (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)), (r[ct] = n), (n.stateNode = r);
            }
            return sn(n), null;
        case 13:
            if (
                (Ae($e),
                (r = n.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (Me && Rn !== null && n.mode & 1 && !(n.flags & 128)) Nm(), ai(), (n.flags |= 98560), (l = !1);
                else if (((l = ql(n)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(U(318));
                        if (((l = n.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(U(317));
                        l[ct] = n;
                    } else ai(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
                    sn(n), (l = !1);
                } else nt !== null && (Ls(nt), (nt = null)), (l = !0);
                if (!l) return n.flags & 65536 ? n : null;
            }
            return n.flags & 128
                ? ((n.lanes = t), n)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((n.child.flags |= 8192),
                      n.mode & 1 && (e === null || $e.current & 1 ? Xe === 0 && (Xe = 3) : Lc())),
                  n.updateQueue !== null && (n.flags |= 4),
                  sn(n),
                  null);
        case 4:
            return si(), xs(e, n), e === null && tl(n.stateNode.containerInfo), sn(n), null;
        case 10:
            return pc(n.type._context), sn(n), null;
        case 17:
            return En(n.type) && Io(), sn(n), null;
        case 19:
            if ((Ae($e), (l = n.memoizedState), l === null)) return sn(n), null;
            if (((r = (n.flags & 128) !== 0), (o = l.rendering), o === null))
                if (r) Li(l, !1);
                else {
                    if (Xe !== 0 || (e !== null && e.flags & 128))
                        for (e = n.child; e !== null; ) {
                            if (((o = Mo(e)), o !== null)) {
                                for (
                                    n.flags |= 128,
                                        Li(l, !1),
                                        r = o.updateQueue,
                                        r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child;
                                    t !== null;

                                )
                                    (l = t),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (o = l.alternate),
                                        o === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = o.memoizedProps),
                                              (l.memoizedState = o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (t = t.sibling);
                                return ze($e, ($e.current & 1) | 2), n.child;
                            }
                            e = e.sibling;
                        }
                    l.tail !== null && We() > fi && ((n.flags |= 128), (r = !0), Li(l, !1), (n.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Mo(o)), e !== null)) {
                        if (
                            ((n.flags |= 128),
                            (r = !0),
                            (t = e.updateQueue),
                            t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                            Li(l, !0),
                            l.tail === null && l.tailMode === "hidden" && !o.alternate && !Me)
                        )
                            return sn(n), null;
                    } else
                        2 * We() - l.renderingStartTime > fi &&
                            t !== 1073741824 &&
                            ((n.flags |= 128), (r = !0), Li(l, !1), (n.lanes = 4194304));
                l.isBackwards
                    ? ((o.sibling = n.child), (n.child = o))
                    : ((t = l.last), t !== null ? (t.sibling = o) : (n.child = o), (l.last = o));
            }
            return l.tail !== null
                ? ((n = l.tail),
                  (l.rendering = n),
                  (l.tail = n.sibling),
                  (l.renderingStartTime = We()),
                  (n.sibling = null),
                  (t = $e.current),
                  ze($e, r ? (t & 1) | 2 : t & 1),
                  n)
                : (sn(n), null);
        case 22:
        case 23:
            return (
                Pc(),
                (r = n.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
                r && n.mode & 1 ? Nn & 1073741824 && (sn(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : sn(n),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(U(156, n.tag));
}
function Vw(e, n) {
    switch ((uc(n), n.tag)) {
        case 1:
            return En(n.type) && Io(), (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
        case 3:
            return (
                si(),
                Ae(Cn),
                Ae(pn),
                vc(),
                (e = n.flags),
                e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 5:
            return gc(n), null;
        case 13:
            if ((Ae($e), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
                if (n.alternate === null) throw Error(U(340));
                ai();
            }
            return (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
        case 19:
            return Ae($e), null;
        case 4:
            return si(), null;
        case 10:
            return pc(n.type._context), null;
        case 22:
        case 23:
            return Pc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Zl = !1,
    cn = !1,
    Ww = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
function Xr(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null);
            } catch (r) {
                Ve(e, n, r);
            }
        else t.current = null;
}
function Ss(e, n, t) {
    try {
        t();
    } catch (r) {
        Ve(e, n, r);
    }
}
var fd = !1;
function Qw(e, n) {
    if (((ls = _o), (e = ym()), oc(e))) {
        if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                t = ((t = e.ownerDocument) && t.defaultView) || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var i = r.anchorOffset,
                        l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType, l.nodeType;
                    } catch {
                        t = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        u = -1,
                        s = 0,
                        d = 0,
                        f = e,
                        g = null;
                    n: for (;;) {
                        for (
                            var m;
                            f !== t || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                                f !== l || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                                f.nodeType === 3 && (o += f.nodeValue.length),
                                (m = f.firstChild) !== null;

                        )
                            (g = f), (f = m);
                        for (;;) {
                            if (f === e) break n;
                            if (
                                (g === t && ++s === i && (a = o),
                                g === l && ++d === r && (u = o),
                                (m = f.nextSibling) !== null)
                            )
                                break;
                            (f = g), (g = f.parentNode);
                        }
                        f = m;
                    }
                    t = a === -1 || u === -1 ? null : { start: a, end: u };
                } else t = null;
            }
        t = t || { start: 0, end: 0 };
    } else t = null;
    for (os = { focusedElem: e, selectionRange: t }, _o = !1, Z = n; Z !== null; )
        if (((n = Z), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = n), (Z = e);
        else
            for (; Z !== null; ) {
                n = Z;
                try {
                    var y = n.alternate;
                    if (n.flags & 1024)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var w = y.memoizedProps,
                                        z = y.memoizedState,
                                        v = n.stateNode,
                                        k = v.getSnapshotBeforeUpdate(n.elementType === n.type ? w : Jn(n.type, w), z);
                                    v.__reactInternalSnapshotBeforeUpdate = k;
                                }
                                break;
                            case 3:
                                var S = n.stateNode.containerInfo;
                                S.nodeType === 1
                                    ? (S.textContent = "")
                                    : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(U(163));
                        }
                } catch (R) {
                    Ve(n, n.return, R);
                }
                if (((e = n.sibling), e !== null)) {
                    (e.return = n.return), (Z = e);
                    break;
                }
                Z = n.return;
            }
    return (y = fd), (fd = !1), y;
}
function Hi(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                (i.destroy = void 0), l !== void 0 && Ss(n, t, l);
            }
            i = i.next;
        } while (i !== r);
    }
}
function la(e, n) {
    if (((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
        var t = (n = n.next);
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
            }
            t = t.next;
        } while (t !== n);
    }
}
function bs(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t;
        }
        typeof n == "function" ? n(e) : (n.current = e);
    }
}
function hg(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), hg(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((n = e.stateNode), n !== null && (delete n[ct], delete n[il], delete n[ss], delete n[Pw], delete n[Lw])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function mg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pd(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || mg(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Cs(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            n
                ? t.nodeType === 8
                    ? t.parentNode.insertBefore(e, n)
                    : t.insertBefore(e, n)
                : (t.nodeType === 8 ? ((n = t.parentNode), n.insertBefore(e, t)) : ((n = t), n.appendChild(e)),
                  (t = t._reactRootContainer),
                  t != null || n.onclick !== null || (n.onclick = Lo));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Cs(e, n, t), e = e.sibling; e !== null; ) Cs(e, n, t), (e = e.sibling);
}
function Es(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Es(e, n, t), e = e.sibling; e !== null; ) Es(e, n, t), (e = e.sibling);
}
var ln = null,
    et = !1;
function Dt(e, n, t) {
    for (t = t.child; t !== null; ) gg(e, n, t), (t = t.sibling);
}
function gg(e, n, t) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
        try {
            ft.onCommitFiberUnmount(Ko, t);
        } catch {}
    switch (t.tag) {
        case 5:
            cn || Xr(t, n);
        case 6:
            var r = ln,
                i = et;
            (ln = null),
                Dt(e, n, t),
                (ln = r),
                (et = i),
                ln !== null &&
                    (et
                        ? ((e = ln),
                          (t = t.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
                        : ln.removeChild(t.stateNode));
            break;
        case 18:
            ln !== null &&
                (et
                    ? ((e = ln),
                      (t = t.stateNode),
                      e.nodeType === 8 ? uu(e.parentNode, t) : e.nodeType === 1 && uu(e, t),
                      Ji(e))
                    : uu(ln, t.stateNode));
            break;
        case 4:
            (r = ln), (i = et), (ln = t.stateNode.containerInfo), (et = !0), Dt(e, n, t), (ln = r), (et = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!cn && ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        o = l.destroy;
                    (l = l.tag), o !== void 0 && (l & 2 || l & 4) && Ss(t, n, o), (i = i.next);
                } while (i !== r);
            }
            Dt(e, n, t);
            break;
        case 1:
            if (!cn && (Xr(t, n), (r = t.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = t.memoizedProps), (r.state = t.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    Ve(t, n, a);
                }
            Dt(e, n, t);
            break;
        case 21:
            Dt(e, n, t);
            break;
        case 22:
            t.mode & 1 ? ((cn = (r = cn) || t.memoizedState !== null), Dt(e, n, t), (cn = r)) : Dt(e, n, t);
            break;
        default:
            Dt(e, n, t);
    }
}
function dd(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new Ww()),
            n.forEach(function (r) {
                var i = nx.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(i, i));
            });
    }
}
function Zn(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            try {
                var l = e,
                    o = n,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ln = a.stateNode), (et = !1);
                            break e;
                        case 3:
                            (ln = a.stateNode.containerInfo), (et = !0);
                            break e;
                        case 4:
                            (ln = a.stateNode.containerInfo), (et = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ln === null) throw Error(U(160));
                gg(l, o, i), (ln = null), (et = !1);
                var u = i.alternate;
                u !== null && (u.return = null), (i.return = null);
            } catch (s) {
                Ve(i, n, s);
            }
        }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) vg(n, e), (n = n.sibling);
}
function vg(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Zn(n, e), at(e), r & 4)) {
                try {
                    Hi(3, e, e.return), la(3, e);
                } catch (w) {
                    Ve(e, e.return, w);
                }
                try {
                    Hi(5, e, e.return);
                } catch (w) {
                    Ve(e, e.return, w);
                }
            }
            break;
        case 1:
            Zn(n, e), at(e), r & 512 && t !== null && Xr(t, t.return);
            break;
        case 5:
            if ((Zn(n, e), at(e), r & 512 && t !== null && Xr(t, t.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    qi(i, "");
                } catch (w) {
                    Ve(e, e.return, w);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    o = t !== null ? t.memoizedProps : l,
                    a = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        a === "input" && l.type === "radio" && l.name != null && $h(i, l), qu(a, o);
                        var s = qu(a, l);
                        for (o = 0; o < u.length; o += 2) {
                            var d = u[o],
                                f = u[o + 1];
                            d === "style"
                                ? Vh(i, f)
                                : d === "dangerouslySetInnerHTML"
                                  ? Uh(i, f)
                                  : d === "children"
                                    ? qi(i, f)
                                    : Gs(i, d, f, s);
                        }
                        switch (a) {
                            case "input":
                                Vu(i, l);
                                break;
                            case "textarea":
                                jh(i, l);
                                break;
                            case "select":
                                var g = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var m = l.value;
                                m != null
                                    ? Zr(i, !!l.multiple, m, !1)
                                    : g !== !!l.multiple &&
                                      (l.defaultValue != null
                                          ? Zr(i, !!l.multiple, l.defaultValue, !0)
                                          : Zr(i, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        i[il] = l;
                    } catch (w) {
                        Ve(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((Zn(n, e), at(e), r & 4)) {
                if (e.stateNode === null) throw Error(U(162));
                (i = e.stateNode), (l = e.memoizedProps);
                try {
                    i.nodeValue = l;
                } catch (w) {
                    Ve(e, e.return, w);
                }
            }
            break;
        case 3:
            if ((Zn(n, e), at(e), r & 4 && t !== null && t.memoizedState.isDehydrated))
                try {
                    Ji(n.containerInfo);
                } catch (w) {
                    Ve(e, e.return, w);
                }
            break;
        case 4:
            Zn(n, e), at(e);
            break;
        case 13:
            Zn(n, e),
                at(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((l = i.memoizedState !== null),
                    (i.stateNode.isHidden = l),
                    !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (_c = We())),
                r & 4 && dd(e);
            break;
        case 22:
            if (
                ((d = t !== null && t.memoizedState !== null),
                e.mode & 1 ? ((cn = (s = cn) || d), Zn(n, e), (cn = s)) : Zn(n, e),
                at(e),
                r & 8192)
            ) {
                if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !d && e.mode & 1))
                    for (Z = e, d = e.child; d !== null; ) {
                        for (f = Z = d; Z !== null; ) {
                            switch (((g = Z), (m = g.child), g.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hi(4, g, g.return);
                                    break;
                                case 1:
                                    Xr(g, g.return);
                                    var y = g.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        (r = g), (t = g.return);
                                        try {
                                            (n = r),
                                                (y.props = n.memoizedProps),
                                                (y.state = n.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (w) {
                                            Ve(r, t, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Xr(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        md(f);
                                        continue;
                                    }
                            }
                            m !== null ? ((m.return = g), (Z = m)) : md(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (i = f.stateNode),
                                    s
                                        ? ((l = i.style),
                                          typeof l.setProperty == "function"
                                              ? l.setProperty("display", "none", "important")
                                              : (l.display = "none"))
                                        : ((a = f.stateNode),
                                          (u = f.memoizedProps.style),
                                          (o = u != null && u.hasOwnProperty("display") ? u.display : null),
                                          (a.style.display = Hh("display", o)));
                            } catch (w) {
                                Ve(e, e.return, w);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                            } catch (w) {
                                Ve(e, e.return, w);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            Zn(n, e), at(e), r & 4 && dd(e);
            break;
        case 21:
            break;
        default:
            Zn(n, e), at(e);
    }
}
function at(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null; ) {
                    if (mg(t)) {
                        var r = t;
                        break e;
                    }
                    t = t.return;
                }
                throw Error(U(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (qi(i, ""), (r.flags &= -33));
                    var l = pd(e);
                    Es(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = pd(e);
                    Cs(e, a, o);
                    break;
                default:
                    throw Error(U(161));
            }
        } catch (u) {
            Ve(e, e.return, u);
        }
        e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
}
function Gw(e, n, t) {
    (Z = e), yg(e);
}
function yg(e, n, t) {
    for (var r = (e.mode & 1) !== 0; Z !== null; ) {
        var i = Z,
            l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Zl;
            if (!o) {
                var a = i.alternate,
                    u = (a !== null && a.memoizedState !== null) || cn;
                a = Zl;
                var s = cn;
                if (((Zl = o), (cn = u) && !s))
                    for (Z = i; Z !== null; )
                        (o = Z),
                            (u = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? gd(i)
                                : u !== null
                                  ? ((u.return = o), (Z = u))
                                  : gd(i);
                for (; l !== null; ) (Z = l), yg(l), (l = l.sibling);
                (Z = i), (Zl = a), (cn = s);
            }
            hd(e);
        } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (Z = l)) : hd(e);
    }
}
function hd(e) {
    for (; Z !== null; ) {
        var n = Z;
        if (n.flags & 8772) {
            var t = n.alternate;
            try {
                if (n.flags & 8772)
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            cn || la(5, n);
                            break;
                        case 1:
                            var r = n.stateNode;
                            if (n.flags & 4 && !cn)
                                if (t === null) r.componentDidMount();
                                else {
                                    var i = n.elementType === n.type ? t.memoizedProps : Jn(n.type, t.memoizedProps);
                                    r.componentDidUpdate(i, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = n.updateQueue;
                            l !== null && Zp(n, l, r);
                            break;
                        case 3:
                            var o = n.updateQueue;
                            if (o !== null) {
                                if (((t = null), n.child !== null))
                                    switch (n.child.tag) {
                                        case 5:
                                            t = n.child.stateNode;
                                            break;
                                        case 1:
                                            t = n.child.stateNode;
                                    }
                                Zp(n, o, t);
                            }
                            break;
                        case 5:
                            var a = n.stateNode;
                            if (t === null && n.flags & 4) {
                                t = a;
                                var u = n.memoizedProps;
                                switch (n.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && t.focus();
                                        break;
                                    case "img":
                                        u.src && (t.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var s = n.alternate;
                                if (s !== null) {
                                    var d = s.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && Ji(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(U(163));
                    }
                cn || (n.flags & 512 && bs(n));
            } catch (g) {
                Ve(n, n.return, g);
            }
        }
        if (n === e) {
            Z = null;
            break;
        }
        if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (Z = t);
            break;
        }
        Z = n.return;
    }
}
function md(e) {
    for (; Z !== null; ) {
        var n = Z;
        if (n === e) {
            Z = null;
            break;
        }
        var t = n.sibling;
        if (t !== null) {
            (t.return = n.return), (Z = t);
            break;
        }
        Z = n.return;
    }
}
function gd(e) {
    for (; Z !== null; ) {
        var n = Z;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        la(4, n);
                    } catch (u) {
                        Ve(n, t, u);
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = n.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            Ve(n, i, u);
                        }
                    }
                    var l = n.return;
                    try {
                        bs(n);
                    } catch (u) {
                        Ve(n, l, u);
                    }
                    break;
                case 5:
                    var o = n.return;
                    try {
                        bs(n);
                    } catch (u) {
                        Ve(n, o, u);
                    }
            }
        } catch (u) {
            Ve(n, n.return, u);
        }
        if (n === e) {
            Z = null;
            break;
        }
        var a = n.sibling;
        if (a !== null) {
            (a.return = n.return), (Z = a);
            break;
        }
        Z = n.return;
    }
}
var Yw = Math.ceil,
    jo = Pt.ReactCurrentDispatcher,
    Cc = Pt.ReactCurrentOwner,
    Vn = Pt.ReactCurrentBatchConfig,
    we = 0,
    en = null,
    Ye = null,
    on = 0,
    Nn = 0,
    Kr = nr(0),
    Xe = 0,
    cl = null,
    wr = 0,
    oa = 0,
    Ec = 0,
    Vi = null,
    Sn = null,
    _c = 0,
    fi = 1 / 0,
    kt = null,
    Bo = !1,
    _s = null,
    qt = null,
    Jl = !1,
    Ht = null,
    Uo = 0,
    Wi = 0,
    Ts = null,
    go = -1,
    vo = 0;
function vn() {
    return we & 6 ? We() : go !== -1 ? go : (go = We());
}
function Xt(e) {
    return e.mode & 1
        ? we & 2 && on !== 0
            ? on & -on
            : Nw.transition !== null
              ? (vo === 0 && (vo = tm()), vo)
              : ((e = Te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sm(e.type))), e)
        : 1;
}
function rt(e, n, t, r) {
    if (50 < Wi) throw ((Wi = 0), (Ts = null), Error(U(185)));
    dl(e, t, r),
        (!(we & 2) || e !== en) &&
            (e === en && (!(we & 2) && (oa |= t), Xe === 4 && Bt(e, on)),
            _n(e, r),
            t === 1 && we === 0 && !(n.mode & 1) && ((fi = We() + 500), ta && tr()));
}
function _n(e, n) {
    var t = e.callbackNode;
    Nk(e, n);
    var r = Eo(e, e === en ? on : 0);
    if (r === 0) t !== null && Ep(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
        if ((t != null && Ep(t), n === 1))
            e.tag === 0 ? Iw(vd.bind(null, e)) : Pm(vd.bind(null, e)),
                _w(function () {
                    !(we & 6) && tr();
                }),
                (t = null);
        else {
            switch (rm(r)) {
                case 1:
                    t = Zs;
                    break;
                case 4:
                    t = em;
                    break;
                case 16:
                    t = Co;
                    break;
                case 536870912:
                    t = nm;
                    break;
                default:
                    t = Co;
            }
            t = _g(t, kg.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
    }
}
function kg(e, n) {
    if (((go = -1), (vo = 0), we & 6)) throw Error(U(327));
    var t = e.callbackNode;
    if (ri() && e.callbackNode !== t) return null;
    var r = Eo(e, e === en ? on : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Ho(e, r);
    else {
        n = r;
        var i = we;
        we |= 2;
        var l = xg();
        (en !== e || on !== n) && ((kt = null), (fi = We() + 500), mr(e, n));
        do
            try {
                Kw();
                break;
            } catch (a) {
                wg(e, a);
            }
        while (!0);
        fc(), (jo.current = l), (we = i), Ye !== null ? (n = 0) : ((en = null), (on = 0), (n = Xe));
    }
    if (n !== 0) {
        if ((n === 2 && ((i = es(e)), i !== 0 && ((r = i), (n = Ps(e, i)))), n === 1))
            throw ((t = cl), mr(e, 0), Bt(e, r), _n(e, We()), t);
        if (n === 6) Bt(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !qw(i) &&
                    ((n = Ho(e, r)), n === 2 && ((l = es(e)), l !== 0 && ((r = l), (n = Ps(e, l)))), n === 1))
            )
                throw ((t = cl), mr(e, 0), Bt(e, r), _n(e, We()), t);
            switch (((e.finishedWork = i), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                    throw Error(U(345));
                case 2:
                    cr(e, Sn, kt);
                    break;
                case 3:
                    if ((Bt(e, r), (r & 130023424) === r && ((n = _c + 500 - We()), 10 < n))) {
                        if (Eo(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            vn(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = us(cr.bind(null, e, Sn, kt), n);
                        break;
                    }
                    cr(e, Sn, kt);
                    break;
                case 4:
                    if ((Bt(e, r), (r & 4194240) === r)) break;
                    for (n = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - tt(r);
                        (l = 1 << o), (o = n[o]), o > i && (i = o), (r &= ~l);
                    }
                    if (
                        ((r = i),
                        (r = We() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * Yw(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = us(cr.bind(null, e, Sn, kt), r);
                        break;
                    }
                    cr(e, Sn, kt);
                    break;
                case 5:
                    cr(e, Sn, kt);
                    break;
                default:
                    throw Error(U(329));
            }
        }
    }
    return _n(e, We()), e.callbackNode === t ? kg.bind(null, e) : null;
}
function Ps(e, n) {
    var t = Vi;
    return (
        e.current.memoizedState.isDehydrated && (mr(e, n).flags |= 256),
        (e = Ho(e, n)),
        e !== 2 && ((n = Sn), (Sn = t), n !== null && Ls(n)),
        e
    );
}
function Ls(e) {
    Sn === null ? (Sn = e) : Sn.push.apply(Sn, e);
}
function qw(e) {
    for (var n = e; ; ) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && ((t = t.stores), t !== null))
                for (var r = 0; r < t.length; r++) {
                    var i = t[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!lt(l(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((t = n.child), n.subtreeFlags & 16384 && t !== null)) (t.return = n), (n = t);
        else {
            if (n === e) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) return !0;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }
    return !0;
}
function Bt(e, n) {
    for (n &= ~Ec, n &= ~oa, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
        var t = 31 - tt(n),
            r = 1 << t;
        (e[t] = -1), (n &= ~r);
    }
}
function vd(e) {
    if (we & 6) throw Error(U(327));
    ri();
    var n = Eo(e, 0);
    if (!(n & 1)) return _n(e, We()), null;
    var t = Ho(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = es(e);
        r !== 0 && ((n = r), (t = Ps(e, r)));
    }
    if (t === 1) throw ((t = cl), mr(e, 0), Bt(e, n), _n(e, We()), t);
    if (t === 6) throw Error(U(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), cr(e, Sn, kt), _n(e, We()), null;
}
function Tc(e, n) {
    var t = we;
    we |= 1;
    try {
        return e(n);
    } finally {
        (we = t), we === 0 && ((fi = We() + 500), ta && tr());
    }
}
function xr(e) {
    Ht !== null && Ht.tag === 0 && !(we & 6) && ri();
    var n = we;
    we |= 1;
    var t = Vn.transition,
        r = Te;
    try {
        if (((Vn.transition = null), (Te = 1), e)) return e();
    } finally {
        (Te = r), (Vn.transition = t), (we = n), !(we & 6) && tr();
    }
}
function Pc() {
    (Nn = Kr.current), Ae(Kr);
}
function mr(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Ew(t)), Ye !== null))
        for (t = Ye.return; t !== null; ) {
            var r = t;
            switch ((uc(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Io();
                    break;
                case 3:
                    si(), Ae(Cn), Ae(pn), vc();
                    break;
                case 5:
                    gc(r);
                    break;
                case 4:
                    si();
                    break;
                case 13:
                    Ae($e);
                    break;
                case 19:
                    Ae($e);
                    break;
                case 10:
                    pc(r.type._context);
                    break;
                case 22:
                case 23:
                    Pc();
            }
            t = t.return;
        }
    if (
        ((en = e),
        (Ye = e = Kt(e.current, null)),
        (on = Nn = n),
        (Xe = 0),
        (cl = null),
        (Ec = oa = wr = 0),
        (Sn = Vi = null),
        dr !== null)
    ) {
        for (n = 0; n < dr.length; n++)
            if (((t = dr[n]), (r = t.interleaved), r !== null)) {
                t.interleaved = null;
                var i = r.next,
                    l = t.pending;
                if (l !== null) {
                    var o = l.next;
                    (l.next = i), (r.next = o);
                }
                t.pending = r;
            }
        dr = null;
    }
    return e;
}
function wg(e, n) {
    do {
        var t = Ye;
        try {
            if ((fc(), (po.current = $o), Fo)) {
                for (var r = je.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Fo = !1;
            }
            if (
                ((kr = 0),
                (Je = qe = je = null),
                (Ui = !1),
                (al = 0),
                (Cc.current = null),
                t === null || t.return === null)
            ) {
                (Xe = 1), (cl = n), (Ye = null);
                break;
            }
            e: {
                var l = e,
                    o = t.return,
                    a = t,
                    u = n;
                if (((n = on), (a.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
                    var s = u,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = d.alternate;
                        g
                            ? ((d.updateQueue = g.updateQueue),
                              (d.memoizedState = g.memoizedState),
                              (d.lanes = g.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var m = id(o);
                    if (m !== null) {
                        (m.flags &= -257), ld(m, o, a, l, n), m.mode & 1 && rd(l, s, n), (n = m), (u = s);
                        var y = n.updateQueue;
                        if (y === null) {
                            var w = new Set();
                            w.add(u), (n.updateQueue = w);
                        } else y.add(u);
                        break e;
                    } else {
                        if (!(n & 1)) {
                            rd(l, s, n), Lc();
                            break e;
                        }
                        u = Error(U(426));
                    }
                } else if (Me && a.mode & 1) {
                    var z = id(o);
                    if (z !== null) {
                        !(z.flags & 65536) && (z.flags |= 256), ld(z, o, a, l, n), sc(ci(u, a));
                        break e;
                    }
                }
                (l = u = ci(u, a)), Xe !== 4 && (Xe = 2), Vi === null ? (Vi = [l]) : Vi.push(l), (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (n &= -n), (l.lanes |= n);
                            var v = rg(l, u, n);
                            Kp(l, v);
                            break e;
                        case 1:
                            a = u;
                            var k = l.type,
                                S = l.stateNode;
                            if (
                                !(l.flags & 128) &&
                                (typeof k.getDerivedStateFromError == "function" ||
                                    (S !== null &&
                                        typeof S.componentDidCatch == "function" &&
                                        (qt === null || !qt.has(S))))
                            ) {
                                (l.flags |= 65536), (n &= -n), (l.lanes |= n);
                                var R = ig(l, a, n);
                                Kp(l, R);
                                break e;
                            }
                    }
                    l = l.return;
                } while (l !== null);
            }
            bg(t);
        } catch (O) {
            (n = O), Ye === t && t !== null && (Ye = t = t.return);
            continue;
        }
        break;
    } while (!0);
}
function xg() {
    var e = jo.current;
    return (jo.current = $o), e === null ? $o : e;
}
function Lc() {
    (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
        en === null || (!(wr & 268435455) && !(oa & 268435455)) || Bt(en, on);
}
function Ho(e, n) {
    var t = we;
    we |= 2;
    var r = xg();
    (en !== e || on !== n) && ((kt = null), mr(e, n));
    do
        try {
            Xw();
            break;
        } catch (i) {
            wg(e, i);
        }
    while (!0);
    if ((fc(), (we = t), (jo.current = r), Ye !== null)) throw Error(U(261));
    return (en = null), (on = 0), Xe;
}
function Xw() {
    for (; Ye !== null; ) Sg(Ye);
}
function Kw() {
    for (; Ye !== null && !Sk(); ) Sg(Ye);
}
function Sg(e) {
    var n = Eg(e.alternate, e, Nn);
    (e.memoizedProps = e.pendingProps), n === null ? bg(e) : (Ye = n), (Cc.current = null);
}
function bg(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (((e = n.return), n.flags & 32768)) {
            if (((t = Vw(t, n)), t !== null)) {
                (t.flags &= 32767), (Ye = t);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Xe = 6), (Ye = null);
                return;
            }
        } else if (((t = Hw(t, n, Nn)), t !== null)) {
            Ye = t;
            return;
        }
        if (((n = n.sibling), n !== null)) {
            Ye = n;
            return;
        }
        Ye = n = e;
    } while (n !== null);
    Xe === 0 && (Xe = 5);
}
function cr(e, n, t) {
    var r = Te,
        i = Vn.transition;
    try {
        (Vn.transition = null), (Te = 1), Zw(e, n, t, r);
    } finally {
        (Vn.transition = i), (Te = r);
    }
    return null;
}
function Zw(e, n, t, r) {
    do ri();
    while (Ht !== null);
    if (we & 6) throw Error(U(327));
    t = e.finishedWork;
    var i = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(U(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = t.lanes | t.childLanes;
    if (
        (Rk(e, l),
        e === en && ((Ye = en = null), (on = 0)),
        (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
            Jl ||
            ((Jl = !0),
            _g(Co, function () {
                return ri(), null;
            })),
        (l = (t.flags & 15990) !== 0),
        t.subtreeFlags & 15990 || l)
    ) {
        (l = Vn.transition), (Vn.transition = null);
        var o = Te;
        Te = 1;
        var a = we;
        (we |= 4),
            (Cc.current = null),
            Qw(e, t),
            vg(t, e),
            yw(os),
            (_o = !!ls),
            (os = ls = null),
            (e.current = t),
            Gw(t),
            bk(),
            (we = a),
            (Te = o),
            (Vn.transition = l);
    } else e.current = t;
    if (
        (Jl && ((Jl = !1), (Ht = e), (Uo = i)),
        (l = e.pendingLanes),
        l === 0 && (qt = null),
        _k(t.stateNode),
        _n(e, We()),
        n !== null)
    )
        for (r = e.onRecoverableError, t = 0; t < n.length; t++)
            (i = n[t]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Bo) throw ((Bo = !1), (e = _s), (_s = null), e);
    return (
        Uo & 1 && e.tag !== 0 && ri(),
        (l = e.pendingLanes),
        l & 1 ? (e === Ts ? Wi++ : ((Wi = 0), (Ts = e))) : (Wi = 0),
        tr(),
        null
    );
}
function ri() {
    if (Ht !== null) {
        var e = rm(Uo),
            n = Vn.transition,
            t = Te;
        try {
            if (((Vn.transition = null), (Te = 16 > e ? 16 : e), Ht === null)) var r = !1;
            else {
                if (((e = Ht), (Ht = null), (Uo = 0), we & 6)) throw Error(U(331));
                var i = we;
                for (we |= 4, Z = e.current; Z !== null; ) {
                    var l = Z,
                        o = l.child;
                    if (Z.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (Z = s; Z !== null; ) {
                                    var d = Z;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hi(8, d, l);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (Z = f);
                                    else
                                        for (; Z !== null; ) {
                                            d = Z;
                                            var g = d.sibling,
                                                m = d.return;
                                            if ((hg(d), d === s)) {
                                                Z = null;
                                                break;
                                            }
                                            if (g !== null) {
                                                (g.return = m), (Z = g);
                                                break;
                                            }
                                            Z = m;
                                        }
                                }
                            }
                            var y = l.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var z = w.sibling;
                                        (w.sibling = null), (w = z);
                                    } while (w !== null);
                                }
                            }
                            Z = l;
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (Z = o);
                    else
                        e: for (; Z !== null; ) {
                            if (((l = Z), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hi(9, l, l.return);
                                }
                            var v = l.sibling;
                            if (v !== null) {
                                (v.return = l.return), (Z = v);
                                break e;
                            }
                            Z = l.return;
                        }
                }
                var k = e.current;
                for (Z = k; Z !== null; ) {
                    o = Z;
                    var S = o.child;
                    if (o.subtreeFlags & 2064 && S !== null) (S.return = o), (Z = S);
                    else
                        e: for (o = k; Z !== null; ) {
                            if (((a = Z), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            la(9, a);
                                    }
                                } catch (O) {
                                    Ve(a, a.return, O);
                                }
                            if (a === o) {
                                Z = null;
                                break e;
                            }
                            var R = a.sibling;
                            if (R !== null) {
                                (R.return = a.return), (Z = R);
                                break e;
                            }
                            Z = a.return;
                        }
                }
                if (((we = i), tr(), ft && typeof ft.onPostCommitFiberRoot == "function"))
                    try {
                        ft.onPostCommitFiberRoot(Ko, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (Te = t), (Vn.transition = n);
        }
    }
    return !1;
}
function yd(e, n, t) {
    (n = ci(t, n)), (n = rg(e, n, 1)), (e = Yt(e, n, 1)), (n = vn()), e !== null && (dl(e, 1, n), _n(e, n));
}
function Ve(e, n, t) {
    if (e.tag === 3) yd(e, e, t);
    else
        for (; n !== null; ) {
            if (n.tag === 3) {
                yd(n, e, t);
                break;
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (
                    typeof n.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r)))
                ) {
                    (e = ci(t, e)),
                        (e = ig(n, e, 1)),
                        (n = Yt(n, e, 1)),
                        (e = vn()),
                        n !== null && (dl(n, 1, e), _n(n, e));
                    break;
                }
            }
            n = n.return;
        }
}
function Jw(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
        (n = vn()),
        (e.pingedLanes |= e.suspendedLanes & t),
        en === e &&
            (on & t) === t &&
            (Xe === 4 || (Xe === 3 && (on & 130023424) === on && 500 > We() - _c) ? mr(e, 0) : (Ec |= t)),
        _n(e, n);
}
function Cg(e, n) {
    n === 0 && (e.mode & 1 ? ((n = Hl), (Hl <<= 1), !(Hl & 130023424) && (Hl = 4194304)) : (n = 1));
    var t = vn();
    (e = _t(e, n)), e !== null && (dl(e, n, t), _n(e, t));
}
function ex(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), Cg(e, t);
}
function nx(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (t = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(U(314));
    }
    r !== null && r.delete(n), Cg(e, t);
}
var Eg;
Eg = function (e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || Cn.current) bn = !0;
        else {
            if (!(e.lanes & t) && !(n.flags & 128)) return (bn = !1), Uw(e, n, t);
            bn = !!(e.flags & 131072);
        }
    else (bn = !1), Me && n.flags & 1048576 && Lm(n, zo, n.index);
    switch (((n.lanes = 0), n.tag)) {
        case 2:
            var r = n.type;
            mo(e, n), (e = n.pendingProps);
            var i = oi(n, pn.current);
            ti(n, t), (i = kc(null, n, r, e, i, t));
            var l = wc();
            return (
                (n.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((n.tag = 1),
                      (n.memoizedState = null),
                      (n.updateQueue = null),
                      En(r) ? ((l = !0), No(n)) : (l = !1),
                      (n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      hc(n),
                      (i.updater = ia),
                      (n.stateNode = i),
                      (i._reactInternals = n),
                      ms(n, r, e, t),
                      (n = ys(null, n, r, !0, l, t)))
                    : ((n.tag = 0), Me && l && ac(n), mn(null, n, i, t), (n = n.child)),
                n
            );
        case 16:
            r = n.elementType;
            e: {
                switch (
                    (mo(e, n),
                    (e = n.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (n.type = r),
                    (i = n.tag = rx(r)),
                    (e = Jn(r, e)),
                    i)
                ) {
                    case 0:
                        n = vs(null, n, r, e, t);
                        break e;
                    case 1:
                        n = ud(null, n, r, e, t);
                        break e;
                    case 11:
                        n = od(null, n, r, e, t);
                        break e;
                    case 14:
                        n = ad(null, n, r, Jn(r.type, e), t);
                        break e;
                }
                throw Error(U(306, r, ""));
            }
            return n;
        case 0:
            return (r = n.type), (i = n.pendingProps), (i = n.elementType === r ? i : Jn(r, i)), vs(e, n, r, i, t);
        case 1:
            return (r = n.type), (i = n.pendingProps), (i = n.elementType === r ? i : Jn(r, i)), ud(e, n, r, i, t);
        case 3:
            e: {
                if ((ug(n), e === null)) throw Error(U(387));
                (r = n.pendingProps), (l = n.memoizedState), (i = l.element), Am(e, n), Do(n, r, null, t);
                var o = n.memoizedState;
                if (((r = o.element), l.isDehydrated))
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (n.updateQueue.baseState = l),
                        (n.memoizedState = l),
                        n.flags & 256)
                    ) {
                        (i = ci(Error(U(423)), n)), (n = sd(e, n, r, t, i));
                        break e;
                    } else if (r !== i) {
                        (i = ci(Error(U(424)), n)), (n = sd(e, n, r, t, i));
                        break e;
                    } else
                        for (
                            Rn = Gt(n.stateNode.containerInfo.firstChild),
                                zn = n,
                                Me = !0,
                                nt = null,
                                t = zm(n, null, r, t),
                                n.child = t;
                            t;

                        )
                            (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
                else {
                    if ((ai(), r === i)) {
                        n = Tt(e, n, t);
                        break e;
                    }
                    mn(e, n, r, t);
                }
                n = n.child;
            }
            return n;
        case 5:
            return (
                Dm(n),
                e === null && ps(n),
                (r = n.type),
                (i = n.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (o = i.children),
                as(r, i) ? (o = null) : l !== null && as(r, l) && (n.flags |= 32),
                ag(e, n),
                mn(e, n, o, t),
                n.child
            );
        case 6:
            return e === null && ps(n), null;
        case 13:
            return sg(e, n, t);
        case 4:
            return (
                mc(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                e === null ? (n.child = ui(n, null, r, t)) : mn(e, n, r, t),
                n.child
            );
        case 11:
            return (r = n.type), (i = n.pendingProps), (i = n.elementType === r ? i : Jn(r, i)), od(e, n, r, i, t);
        case 7:
            return mn(e, n, n.pendingProps, t), n.child;
        case 8:
            return mn(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return mn(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (
                    ((r = n.type._context),
                    (i = n.pendingProps),
                    (l = n.memoizedProps),
                    (o = i.value),
                    ze(Oo, r._currentValue),
                    (r._currentValue = o),
                    l !== null)
                )
                    if (lt(l.value, o)) {
                        if (l.children === i.children && !Cn.current) {
                            n = Tt(e, n, t);
                            break e;
                        }
                    } else
                        for (l = n.child, l !== null && (l.return = n); l !== null; ) {
                            var a = l.dependencies;
                            if (a !== null) {
                                o = l.child;
                                for (var u = a.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (l.tag === 1) {
                                            (u = bt(-1, t & -t)), (u.tag = 2);
                                            var s = l.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var d = s.pending;
                                                d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (l.lanes |= t),
                                            (u = l.alternate),
                                            u !== null && (u.lanes |= t),
                                            ds(l.return, t, n),
                                            (a.lanes |= t);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (l.tag === 10) o = l.type === n.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (((o = l.return), o === null)) throw Error(U(341));
                                (o.lanes |= t),
                                    (a = o.alternate),
                                    a !== null && (a.lanes |= t),
                                    ds(o, t, n),
                                    (o = l.sibling);
                            } else o = l.child;
                            if (o !== null) o.return = l;
                            else
                                for (o = l; o !== null; ) {
                                    if (o === n) {
                                        o = null;
                                        break;
                                    }
                                    if (((l = o.sibling), l !== null)) {
                                        (l.return = o.return), (o = l);
                                        break;
                                    }
                                    o = o.return;
                                }
                            l = o;
                        }
                mn(e, n, i.children, t), (n = n.child);
            }
            return n;
        case 9:
            return (
                (i = n.type),
                (r = n.pendingProps.children),
                ti(n, t),
                (i = Qn(i)),
                (r = r(i)),
                (n.flags |= 1),
                mn(e, n, r, t),
                n.child
            );
        case 14:
            return (r = n.type), (i = Jn(r, n.pendingProps)), (i = Jn(r.type, i)), ad(e, n, r, i, t);
        case 15:
            return lg(e, n, n.type, n.pendingProps, t);
        case 17:
            return (
                (r = n.type),
                (i = n.pendingProps),
                (i = n.elementType === r ? i : Jn(r, i)),
                mo(e, n),
                (n.tag = 1),
                En(r) ? ((e = !0), No(n)) : (e = !1),
                ti(n, t),
                tg(n, r, i),
                ms(n, r, i, t),
                ys(null, n, r, !0, e, t)
            );
        case 19:
            return cg(e, n, t);
        case 22:
            return og(e, n, t);
    }
    throw Error(U(156, n.tag));
};
function _g(e, n) {
    return Jh(e, n);
}
function tx(e, n, t, r) {
    (this.tag = e),
        (this.key = t),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Hn(e, n, t, r) {
    return new tx(e, n, t, r);
}
function Ic(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rx(e) {
    if (typeof e == "function") return Ic(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === qs)) return 11;
        if (e === Xs) return 14;
    }
    return 2;
}
function Kt(e, n) {
    var t = e.alternate;
    return (
        t === null
            ? ((t = Hn(e.tag, n, e.key, e.mode)),
              (t.elementType = e.elementType),
              (t.type = e.type),
              (t.stateNode = e.stateNode),
              (t.alternate = e),
              (e.alternate = t))
            : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
        (t.flags = e.flags & 14680064),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
    );
}
function yo(e, n, t, r, i, l) {
    var o = 2;
    if (((r = e), typeof e == "function")) Ic(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case Br:
                return gr(t.children, i, l, n);
            case Ys:
                (o = 8), (i |= 8);
                break;
            case $u:
                return (e = Hn(12, t, n, i | 2)), (e.elementType = $u), (e.lanes = l), e;
            case ju:
                return (e = Hn(13, t, n, i)), (e.elementType = ju), (e.lanes = l), e;
            case Bu:
                return (e = Hn(19, t, n, i)), (e.elementType = Bu), (e.lanes = l), e;
            case Dh:
                return aa(t, i, l, n);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Oh:
                            o = 10;
                            break e;
                        case Ah:
                            o = 9;
                            break e;
                        case qs:
                            o = 11;
                            break e;
                        case Xs:
                            o = 14;
                            break e;
                        case Ft:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(U(130, e == null ? e : typeof e, ""));
        }
    return (n = Hn(o, t, n, i)), (n.elementType = e), (n.type = r), (n.lanes = l), n;
}
function gr(e, n, t, r) {
    return (e = Hn(7, e, r, n)), (e.lanes = t), e;
}
function aa(e, n, t, r) {
    return (e = Hn(22, e, r, n)), (e.elementType = Dh), (e.lanes = t), (e.stateNode = { isHidden: !1 }), e;
}
function gu(e, n, t) {
    return (e = Hn(6, e, null, n)), (e.lanes = t), e;
}
function vu(e, n, t) {
    return (
        (n = Hn(4, e.children !== null ? e.children : [], e.key, n)),
        (n.lanes = t),
        (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        n
    );
}
function ix(e, n, t, r, i) {
    (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ka(0)),
        (this.expirationTimes = Ka(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ka(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Nc(e, n, t, r, i, l, o, a, u) {
    return (
        (e = new ix(e, n, t, a, u)),
        n === 1 ? ((n = 1), l === !0 && (n |= 8)) : (n = 0),
        (l = Hn(3, null, null, n)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        hc(l),
        e
    );
}
function lx(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: jr, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Tg(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
        if (Cr(e) !== e || e.tag !== 1) throw Error(U(170));
        var n = e;
        do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (En(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            n = n.return;
        } while (n !== null);
        throw Error(U(171));
    }
    if (e.tag === 1) {
        var t = e.type;
        if (En(t)) return Tm(e, t, n);
    }
    return n;
}
function Pg(e, n, t, r, i, l, o, a, u) {
    return (
        (e = Nc(t, r, !0, e, i, l, o, a, u)),
        (e.context = Tg(null)),
        (t = e.current),
        (r = vn()),
        (i = Xt(t)),
        (l = bt(r, i)),
        (l.callback = n ?? null),
        Yt(t, l, i),
        (e.current.lanes = i),
        dl(e, i, r),
        _n(e, r),
        e
    );
}
function ua(e, n, t, r) {
    var i = n.current,
        l = vn(),
        o = Xt(i);
    return (
        (t = Tg(t)),
        n.context === null ? (n.context = t) : (n.pendingContext = t),
        (n = bt(l, o)),
        (n.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (n.callback = r),
        (e = Yt(i, n, o)),
        e !== null && (rt(e, i, o, l), fo(e, i, o)),
        o
    );
}
function Vo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function kd(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n;
    }
}
function Rc(e, n) {
    kd(e, n), (e = e.alternate) && kd(e, n);
}
function ox() {
    return null;
}
var Lg =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function zc(e) {
    this._internalRoot = e;
}
sa.prototype.render = zc.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) throw Error(U(409));
    ua(e, n, null, null);
};
sa.prototype.unmount = zc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        xr(function () {
            ua(null, e, null, null);
        }),
            (n[Et] = null);
    }
};
function sa(e) {
    this._internalRoot = e;
}
sa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var n = om();
        e = { blockedOn: null, target: e, priority: n };
        for (var t = 0; t < jt.length && n !== 0 && n < jt[t].priority; t++);
        jt.splice(t, 0, e), t === 0 && um(e);
    }
};
function Oc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ca(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function wd() {}
function ax(e, n, t, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var s = Vo(o);
                l.call(s);
            };
        }
        var o = Pg(n, r, e, 0, null, !1, !1, "", wd);
        return (e._reactRootContainer = o), (e[Et] = o.current), tl(e.nodeType === 8 ? e.parentNode : e), xr(), o;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var s = Vo(u);
            a.call(s);
        };
    }
    var u = Nc(e, 0, !1, null, null, !1, !1, "", wd);
    return (
        (e._reactRootContainer = u),
        (e[Et] = u.current),
        tl(e.nodeType === 8 ? e.parentNode : e),
        xr(function () {
            ua(n, u, t, r);
        }),
        u
    );
}
function fa(e, n, t, r, i) {
    var l = t._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var u = Vo(o);
                a.call(u);
            };
        }
        ua(n, o, e, i);
    } else o = ax(t, n, e, i, r);
    return Vo(o);
}
im = function (e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = Ai(n.pendingLanes);
                t !== 0 && (Js(n, t | 1), _n(n, We()), !(we & 6) && ((fi = We() + 500), tr()));
            }
            break;
        case 13:
            xr(function () {
                var r = _t(e, 1);
                if (r !== null) {
                    var i = vn();
                    rt(r, e, 1, i);
                }
            }),
                Rc(e, 1);
    }
};
ec = function (e) {
    if (e.tag === 13) {
        var n = _t(e, 134217728);
        if (n !== null) {
            var t = vn();
            rt(n, e, 134217728, t);
        }
        Rc(e, 134217728);
    }
};
lm = function (e) {
    if (e.tag === 13) {
        var n = Xt(e),
            t = _t(e, n);
        if (t !== null) {
            var r = vn();
            rt(t, e, n, r);
        }
        Rc(e, n);
    }
};
om = function () {
    return Te;
};
am = function (e, n) {
    var t = Te;
    try {
        return (Te = e), n();
    } finally {
        Te = t;
    }
};
Ku = function (e, n, t) {
    switch (n) {
        case "input":
            if ((Vu(e, t), (n = t.name), t.type === "radio" && n != null)) {
                for (t = e; t.parentNode; ) t = t.parentNode;
                for (
                    t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0;
                    n < t.length;
                    n++
                ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var i = na(r);
                        if (!i) throw Error(U(90));
                        Fh(r), Vu(r, i);
                    }
                }
            }
            break;
        case "textarea":
            jh(e, t);
            break;
        case "select":
            (n = t.value), n != null && Zr(e, !!t.multiple, n, !1);
    }
};
Gh = Tc;
Yh = xr;
var ux = { usingClientEntryPoint: !1, Events: [ml, Wr, na, Wh, Qh, Tc] },
    Ii = { findFiberByHostInstance: pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    sx = {
        bundleType: Ii.bundleType,
        version: Ii.version,
        rendererPackageName: Ii.rendererPackageName,
        rendererConfig: Ii.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Kh(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ii.findFiberByHostInstance || ox,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eo.isDisabled && eo.supportsFiber)
        try {
            (Ko = eo.inject(sx)), (ft = eo);
        } catch {}
}
An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ux;
An.createPortal = function (e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(n)) throw Error(U(200));
    return lx(e, n, null, t);
};
An.createRoot = function (e, n) {
    if (!Oc(e)) throw Error(U(299));
    var t = !1,
        r = "",
        i = Lg;
    return (
        n != null &&
            (n.unstable_strictMode === !0 && (t = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (n = Nc(e, 1, !1, null, null, t, !1, r, i)),
        (e[Et] = n.current),
        tl(e.nodeType === 8 ? e.parentNode : e),
        new zc(n)
    );
};
An.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function" ? Error(U(188)) : ((e = Object.keys(e).join(",")), Error(U(268, e)));
    return (e = Kh(n)), (e = e === null ? null : e.stateNode), e;
};
An.flushSync = function (e) {
    return xr(e);
};
An.hydrate = function (e, n, t) {
    if (!ca(n)) throw Error(U(200));
    return fa(null, e, n, !0, t);
};
An.hydrateRoot = function (e, n, t) {
    if (!Oc(e)) throw Error(U(405));
    var r = (t != null && t.hydratedSources) || null,
        i = !1,
        l = "",
        o = Lg;
    if (
        (t != null &&
            (t.unstable_strictMode === !0 && (i = !0),
            t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (n = Pg(n, null, e, 1, t ?? null, i, !1, l, o)),
        (e[Et] = n.current),
        tl(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (t = r[e]),
                (i = t._getVersion),
                (i = i(t._source)),
                n.mutableSourceEagerHydrationData == null
                    ? (n.mutableSourceEagerHydrationData = [t, i])
                    : n.mutableSourceEagerHydrationData.push(t, i);
    return new sa(n);
};
An.render = function (e, n, t) {
    if (!ca(n)) throw Error(U(200));
    return fa(null, e, n, !1, t);
};
An.unmountComponentAtNode = function (e) {
    if (!ca(e)) throw Error(U(40));
    return e._reactRootContainer
        ? (xr(function () {
              fa(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Et] = null);
              });
          }),
          !0)
        : !1;
};
An.unstable_batchedUpdates = Tc;
An.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
    if (!ca(t)) throw Error(U(200));
    if (e == null || e._reactInternals === void 0) throw Error(U(38));
    return fa(e, n, t, !1, r);
};
An.version = "18.3.1-next-f1338f8080-20240426";
function Ig() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig);
        } catch (e) {
            console.error(e);
        }
}
Ig(), (Ih.exports = An);
var cx = Ih.exports,
    xd = cx;
(Mu.createRoot = xd.createRoot), (Mu.hydrateRoot = xd.hydrateRoot);
function fx({ sendMessage: e, isLoading: n, input: t, onInputChange: r, onClearMessages: i, forceDisabled: l, ...o }) {
    const a = Du.useRef(null),
        u = Du.useRef(null),
        [s, d] = ie.useState(t);
    ie.useEffect(() => {
        var y;
        !t && s && ((y = a.current) == null || y.focus()), d(t);
    }, [t, s]),
        ie.useEffect(() => {
            a.current && !n && !o.RENDER_TARGET_ID && a.current.focus();
        }, [n, o.RENDER_TARGET_ID]);
    function f() {
        a.current &&
            ((a.current.style.height = "inherit"),
            (a.current.style.height = `${Math.min(184, a.current.scrollHeight)}px`));
    }
    ie.useLayoutEffect(f, []);
    const g = (y) => {
            r(y), f();
        },
        m = n || !t.trim() || l;
    return V.jsxs(V.Fragment, {
        children: [
            i &&
                V.jsx("div", {
                    className: "text-[10px] flex justify-start px-4 py-1",
                    children: V.jsx("button", { className: "hover:underline", onClick: i, children: "Clear Messages" }),
                }),
            V.jsxs("form", {
                ref: u,
                onSubmit: e,
                className: "flex items-end gap-2 bg-[#E5E8ED] p-4",
                children: [
                    V.jsx(
                        "div",
                        {
                            className: "flex-1",
                            children: V.jsx("textarea", {
                                ref: a,
                                disabled: n,
                                autoComplete: "off",
                                autoFocus: !o.RENDER_TARGET_ID,
                                value: t,
                                onChange: g,
                                maxLength: 1e3,
                                rows: 1,
                                className: "bg-white resize-none rounded-[24px] w-full px-4 py-2 disabled:opacity-50",
                                onKeyDown: (y) => {
                                    var w;
                                    y.key === "Enter" &&
                                        !y.shiftKey &&
                                        (y.preventDefault(), m || (w = u.current) == null || w.requestSubmit());
                                },
                            }),
                        },
                        "input"
                    ),
                    V.jsx("button", {
                        disabled: m,
                        type: "submit",
                        className: "rounded-full px-6 py-3  disabled:opacity-50 hover:opacity-75 transition-opacity",
                        style: { background: o.BUTTON_BACKGROUND_COLOR },
                        children: n
                            ? V.jsxs("svg", {
                                  className: "animate-spin size-4 text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                      V.jsx("circle", {
                                          className: "opacity-25",
                                          cx: "12",
                                          cy: "12",
                                          r: "10",
                                          stroke: o.BUTTON_TEXT_COLOR,
                                          strokeWidth: "4",
                                      }),
                                      V.jsx("path", {
                                          className: "opacity-75",
                                          fill: o.BUTTON_TEXT_COLOR,
                                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                      }),
                                  ],
                              })
                            : V.jsx("svg", {
                                  className: "size-4",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: V.jsx("g", {
                                      id: "Icon-Right",
                                      children: V.jsxs("g", {
                                          id: "Group",
                                          children: [
                                              V.jsx("line", {
                                                  id: "Line",
                                                  x1: "8",
                                                  y1: "12",
                                                  x2: "8",
                                                  y2: "4.00304",
                                                  stroke: o.BUTTON_TEXT_COLOR,
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                              }),
                                              V.jsx("path", {
                                                  id: "Rectangle",
                                                  d: "M5 5.91785L7.91785 3L10.8357 5.91785",
                                                  stroke: o.BUTTON_TEXT_COLOR,
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
const px =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Background'%3e%3ccircle%20id='Ellipse'%20cx='9'%20cy='9'%20r='9'%20fill='%230AA653'/%3e%3cg%20id='Group'%3e%3cpath%20id='Rectangle%202'%20d='M5.45413%2010.3395C5.29517%2010.1816%205.21569%2010.1027%205.18591%2010.0117C5.15972%209.93162%205.15972%209.84539%205.18591%209.76533C5.21569%209.67432%205.29517%209.5954%205.45413%209.43755L5.91243%208.98246C6.07139%208.82461%206.15087%208.74568%206.24252%208.71611C6.32314%208.6901%206.40998%208.6901%206.4906%208.71611C6.58225%208.74568%206.66173%208.82461%206.8207%208.98246L9.04581%2011.192C9.20477%2011.3499%209.28425%2011.4288%209.31403%2011.5198C9.34023%2011.5999%209.34023%2011.6861%209.31403%2011.7661C9.28425%2011.8572%209.20477%2011.9361%209.04581%2012.0939L8.58752%2012.549C8.42855%2012.7069%208.34907%2012.7858%208.25742%2012.8154C8.1768%2012.8414%208.08996%2012.8414%208.00934%2012.8154C7.91769%2012.7858%207.83821%2012.7069%207.67925%2012.549L5.45413%2010.3395Z'%20fill='white'/%3e%3cpath%20id='Rectangle%202%20Copy'%20d='M12.1792%206.25101C12.3381%206.09316%2012.4176%206.01423%2012.5093%205.98466C12.5899%205.95865%2012.6767%205.95865%2012.7573%205.98466C12.849%206.01423%2012.9285%206.09316%2013.0874%206.25101L13.5457%206.7061C13.7047%206.86395%2013.7842%206.94287%2013.814%207.03388C13.8401%207.11394%2013.8401%207.20017%2013.814%207.28023C13.7842%207.37124%2013.7047%207.45016%2013.5457%207.60801L8.58749%2012.5316C8.42853%2012.6894%208.34905%2012.7684%208.2574%2012.7979C8.17678%2012.8239%208.08994%2012.8239%208.00932%2012.7979C7.91767%2012.7684%207.83818%2012.6894%207.67922%2012.5316L7.22093%2012.0765C7.06197%2011.9186%206.98248%2011.8397%206.95271%2011.7487C6.92651%2011.6686%206.92651%2011.5824%206.95271%2011.5024C6.98249%2011.4113%207.06197%2011.3324%207.22093%2011.1746L12.1792%206.25101Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function dx({ title: e, titleId: n, ...t }, r) {
    return ie.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n,
            },
            t
        ),
        e ? ie.createElement("title", { id: n }, e) : null,
        ie.createElement("path", {
            fillRule: "evenodd",
            d: "M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z",
            clipRule: "evenodd",
        })
    );
}
const hx = ie.forwardRef(dx);
function mx({ title: e, titleId: n, ...t }, r) {
    return ie.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n,
            },
            t
        ),
        e ? ie.createElement("title", { id: n }, e) : null,
        ie.createElement("path", {
            fillRule: "evenodd",
            d: "M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z",
            clipRule: "evenodd",
        })
    );
}
const gx = ie.forwardRef(mx);
function vx({ title: e, titleId: n, ...t }, r) {
    return ie.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n,
            },
            t
        ),
        e ? ie.createElement("title", { id: n }, e) : null,
        ie.createElement("path", {
            fillRule: "evenodd",
            d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
            clipRule: "evenodd",
        })
    );
}
const yx = ie.forwardRef(vx);
function kx({ title: e, titleId: n, ...t }, r) {
    return ie.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n,
            },
            t
        ),
        e ? ie.createElement("title", { id: n }, e) : null,
        ie.createElement("path", {
            fillRule: "evenodd",
            d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
            clipRule: "evenodd",
        })
    );
}
const wx = ie.forwardRef(kx);
function xx(e, n) {
    const t = {};
    return (e[e.length - 1] === "" ? [...e, ""] : e)
        .join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " "))
        .trim();
}
const Sx = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    bx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    Cx = {};
function Sd(e, n) {
    return (Cx.jsx ? bx : Sx).test(e);
}
const Ex = /[ \t\n\f\r]/g;
function _x(e) {
    return typeof e == "object" ? (e.type === "text" ? bd(e.value) : !1) : bd(e);
}
function bd(e) {
    return e.replace(Ex, "") === "";
}
class vl {
    constructor(n, t, r) {
        (this.property = n), (this.normal = t), r && (this.space = r);
    }
}
vl.prototype.property = {};
vl.prototype.normal = {};
vl.prototype.space = null;
function Ng(e, n) {
    const t = {},
        r = {};
    let i = -1;
    for (; ++i < e.length; ) Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
    return new vl(t, r, n);
}
function Is(e) {
    return e.toLowerCase();
}
class Yn {
    constructor(n, t) {
        (this.property = n), (this.attribute = t);
    }
}
Yn.prototype.space = null;
Yn.prototype.boolean = !1;
Yn.prototype.booleanish = !1;
Yn.prototype.overloadedBoolean = !1;
Yn.prototype.number = !1;
Yn.prototype.commaSeparated = !1;
Yn.prototype.spaceSeparated = !1;
Yn.prototype.commaOrSpaceSeparated = !1;
Yn.prototype.mustUseProperty = !1;
Yn.prototype.defined = !1;
let Tx = 0;
const le = Er(),
    Ge = Er(),
    Rg = Er(),
    H = Er(),
    Re = Er(),
    ii = Er(),
    In = Er();
function Er() {
    return 2 ** ++Tx;
}
const Ns = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                boolean: le,
                booleanish: Ge,
                commaOrSpaceSeparated: In,
                commaSeparated: ii,
                number: H,
                overloadedBoolean: Rg,
                spaceSeparated: Re,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    yu = Object.keys(Ns);
class Ac extends Yn {
    constructor(n, t, r, i) {
        let l = -1;
        if ((super(n, t), Cd(this, "space", i), typeof r == "number"))
            for (; ++l < yu.length; ) {
                const o = yu[l];
                Cd(this, yu[l], (r & Ns[o]) === Ns[o]);
            }
    }
}
Ac.prototype.defined = !0;
function Cd(e, n, t) {
    t && (e[n] = t);
}
const Px = {}.hasOwnProperty;
function mi(e) {
    const n = {},
        t = {};
    let r;
    for (r in e.properties)
        if (Px.call(e.properties, r)) {
            const i = e.properties[r],
                l = new Ac(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0),
                (n[r] = l),
                (t[Is(r)] = r),
                (t[Is(l.attribute)] = r);
        }
    return new vl(n, t, e.space);
}
const zg = mi({
        space: "xlink",
        transform(e, n) {
            return "xlink:" + n.slice(5).toLowerCase();
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
        },
    }),
    Og = mi({
        space: "xml",
        transform(e, n) {
            return "xml:" + n.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
    });
function Ag(e, n) {
    return n in e ? e[n] : n;
}
function Dg(e, n) {
    return Ag(e, n.toLowerCase());
}
const Mg = mi({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: Dg,
        properties: { xmlns: null, xmlnsXLink: null },
    }),
    Fg = mi({
        transform(e, n) {
            return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: Ge,
            ariaAutoComplete: null,
            ariaBusy: Ge,
            ariaChecked: Ge,
            ariaColCount: H,
            ariaColIndex: H,
            ariaColSpan: H,
            ariaControls: Re,
            ariaCurrent: null,
            ariaDescribedBy: Re,
            ariaDetails: null,
            ariaDisabled: Ge,
            ariaDropEffect: Re,
            ariaErrorMessage: null,
            ariaExpanded: Ge,
            ariaFlowTo: Re,
            ariaGrabbed: Ge,
            ariaHasPopup: null,
            ariaHidden: Ge,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: Re,
            ariaLevel: H,
            ariaLive: null,
            ariaModal: Ge,
            ariaMultiLine: Ge,
            ariaMultiSelectable: Ge,
            ariaOrientation: null,
            ariaOwns: Re,
            ariaPlaceholder: null,
            ariaPosInSet: H,
            ariaPressed: Ge,
            ariaReadOnly: Ge,
            ariaRelevant: null,
            ariaRequired: Ge,
            ariaRoleDescription: Re,
            ariaRowCount: H,
            ariaRowIndex: H,
            ariaRowSpan: H,
            ariaSelected: Ge,
            ariaSetSize: H,
            ariaSort: null,
            ariaValueMax: H,
            ariaValueMin: H,
            ariaValueNow: H,
            ariaValueText: null,
            role: null,
        },
    }),
    Lx = mi({
        space: "html",
        attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" },
        transform: Dg,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: ii,
            acceptCharset: Re,
            accessKey: Re,
            action: null,
            allow: null,
            allowFullScreen: le,
            allowPaymentRequest: le,
            allowUserMedia: le,
            alt: null,
            as: null,
            async: le,
            autoCapitalize: null,
            autoComplete: Re,
            autoFocus: le,
            autoPlay: le,
            blocking: Re,
            capture: null,
            charSet: null,
            checked: le,
            cite: null,
            className: Re,
            cols: H,
            colSpan: null,
            content: null,
            contentEditable: Ge,
            controls: le,
            controlsList: Re,
            coords: H | ii,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: le,
            defer: le,
            dir: null,
            dirName: null,
            disabled: le,
            download: Rg,
            draggable: Ge,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: le,
            formTarget: null,
            headers: Re,
            height: H,
            hidden: le,
            high: H,
            href: null,
            hrefLang: null,
            htmlFor: Re,
            httpEquiv: Re,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: le,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: le,
            itemId: null,
            itemProp: Re,
            itemRef: Re,
            itemScope: le,
            itemType: Re,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: le,
            low: H,
            manifest: null,
            max: null,
            maxLength: H,
            media: null,
            method: null,
            min: null,
            minLength: H,
            multiple: le,
            muted: le,
            name: null,
            nonce: null,
            noModule: le,
            noValidate: le,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: le,
            optimum: H,
            pattern: null,
            ping: Re,
            placeholder: null,
            playsInline: le,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: le,
            referrerPolicy: null,
            rel: Re,
            required: le,
            reversed: le,
            rows: H,
            rowSpan: H,
            sandbox: Re,
            scope: null,
            scoped: le,
            seamless: le,
            selected: le,
            shadowRootClonable: le,
            shadowRootDelegatesFocus: le,
            shadowRootMode: null,
            shape: null,
            size: H,
            sizes: null,
            slot: null,
            span: H,
            spellCheck: Ge,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: H,
            step: null,
            style: null,
            tabIndex: H,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: le,
            useMap: null,
            value: Ge,
            width: H,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: Re,
            axis: null,
            background: null,
            bgColor: null,
            border: H,
            borderColor: null,
            bottomMargin: H,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: le,
            declare: le,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: H,
            leftMargin: H,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: H,
            marginWidth: H,
            noResize: le,
            noHref: le,
            noShade: le,
            noWrap: le,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: H,
            rules: null,
            scheme: null,
            scrolling: Ge,
            standby: null,
            summary: null,
            text: null,
            topMargin: H,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: H,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: le,
            disableRemotePlayback: le,
            prefix: null,
            property: null,
            results: H,
            security: null,
            unselectable: null,
        },
    }),
    Ix = mi({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
        },
        transform: Ag,
        properties: {
            about: In,
            accentHeight: H,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: H,
            amplitude: H,
            arabicForm: null,
            ascent: H,
            attributeName: null,
            attributeType: null,
            azimuth: H,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: H,
            by: null,
            calcMode: null,
            capHeight: H,
            className: Re,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: H,
            diffuseConstant: H,
            direction: null,
            display: null,
            dur: null,
            divisor: H,
            dominantBaseline: null,
            download: le,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: H,
            enableBackground: null,
            end: null,
            event: null,
            exponent: H,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: H,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: ii,
            g2: ii,
            glyphName: ii,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: H,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: H,
            horizOriginX: H,
            horizOriginY: H,
            id: null,
            ideographic: H,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: H,
            k: H,
            k1: H,
            k2: H,
            k3: H,
            k4: H,
            kernelMatrix: In,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: H,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: H,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: H,
            overlineThickness: H,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: H,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: Re,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: H,
            pointsAtY: H,
            pointsAtZ: H,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: In,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: In,
            rev: In,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: In,
            requiredFeatures: In,
            requiredFonts: In,
            requiredFormats: In,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: H,
            specularExponent: H,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: H,
            strikethroughThickness: H,
            string: null,
            stroke: null,
            strokeDashArray: In,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: H,
            strokeOpacity: H,
            strokeWidth: null,
            style: null,
            surfaceScale: H,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: In,
            tabIndex: H,
            tableValues: null,
            target: null,
            targetX: H,
            targetY: H,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: In,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: H,
            underlineThickness: H,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: H,
            values: null,
            vAlphabetic: H,
            vMathematical: H,
            vectorEffect: null,
            vHanging: H,
            vIdeographic: H,
            version: null,
            vertAdvY: H,
            vertOriginX: H,
            vertOriginY: H,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: H,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
        },
    }),
    Nx = /^data[-\w.:]+$/i,
    Ed = /-[a-z]/g,
    Rx = /[A-Z]/g;
function zx(e, n) {
    const t = Is(n);
    let r = n,
        i = Yn;
    if (t in e.normal) return e.property[e.normal[t]];
    if (t.length > 4 && t.slice(0, 4) === "data" && Nx.test(n)) {
        if (n.charAt(4) === "-") {
            const l = n.slice(5).replace(Ed, Ax);
            r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
        } else {
            const l = n.slice(4);
            if (!Ed.test(l)) {
                let o = l.replace(Rx, Ox);
                o.charAt(0) !== "-" && (o = "-" + o), (n = "data" + o);
            }
        }
        i = Ac;
    }
    return new i(r, n);
}
function Ox(e) {
    return "-" + e.toLowerCase();
}
function Ax(e) {
    return e.charAt(1).toUpperCase();
}
const Dx = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
    },
    Mx = Ng([Og, zg, Mg, Fg, Lx], "html"),
    Dc = Ng([Og, zg, Mg, Fg, Ix], "svg");
function Fx(e) {
    return e.join(" ").trim();
}
var $g = {},
    _d = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    $x = /\n/g,
    jx = /^\s*/,
    Bx = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    Ux = /^:\s*/,
    Hx = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    Vx = /^[;\s]*/,
    Wx = /^\s+|\s+$/g,
    Qx = `
`,
    Td = "/",
    Pd = "*",
    fr = "",
    Gx = "comment",
    Yx = "declaration",
    qx = function (e, n) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        n = n || {};
        var t = 1,
            r = 1;
        function i(y) {
            var w = y.match($x);
            w && (t += w.length);
            var z = y.lastIndexOf(Qx);
            r = ~z ? y.length - z : r + y.length;
        }
        function l() {
            var y = { line: t, column: r };
            return function (w) {
                return (w.position = new o(y)), s(), w;
            };
        }
        function o(y) {
            (this.start = y), (this.end = { line: t, column: r }), (this.source = n.source);
        }
        o.prototype.content = e;
        function a(y) {
            var w = new Error(n.source + ":" + t + ":" + r + ": " + y);
            if (((w.reason = y), (w.filename = n.source), (w.line = t), (w.column = r), (w.source = e), !n.silent))
                throw w;
        }
        function u(y) {
            var w = y.exec(e);
            if (w) {
                var z = w[0];
                return i(z), (e = e.slice(z.length)), w;
            }
        }
        function s() {
            u(jx);
        }
        function d(y) {
            var w;
            for (y = y || []; (w = f()); ) w !== !1 && y.push(w);
            return y;
        }
        function f() {
            var y = l();
            if (!(Td != e.charAt(0) || Pd != e.charAt(1))) {
                for (var w = 2; fr != e.charAt(w) && (Pd != e.charAt(w) || Td != e.charAt(w + 1)); ) ++w;
                if (((w += 2), fr === e.charAt(w - 1))) return a("End of comment missing");
                var z = e.slice(2, w - 2);
                return (r += 2), i(z), (e = e.slice(w)), (r += 2), y({ type: Gx, comment: z });
            }
        }
        function g() {
            var y = l(),
                w = u(Bx);
            if (w) {
                if ((f(), !u(Ux))) return a("property missing ':'");
                var z = u(Hx),
                    v = y({ type: Yx, property: Ld(w[0].replace(_d, fr)), value: z ? Ld(z[0].replace(_d, fr)) : fr });
                return u(Vx), v;
            }
        }
        function m() {
            var y = [];
            d(y);
            for (var w; (w = g()); ) w !== !1 && (y.push(w), d(y));
            return y;
        }
        return s(), m();
    };
function Ld(e) {
    return e ? e.replace(Wx, fr) : fr;
}
var Xx =
    (Au && Au.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty($g, "__esModule", { value: !0 });
var Kx = Xx(qx);
function Zx(e, n) {
    var t = null;
    if (!e || typeof e != "string") return t;
    var r = (0, Kx.default)(e),
        i = typeof n == "function";
    return (
        r.forEach(function (l) {
            if (l.type === "declaration") {
                var o = l.property,
                    a = l.value;
                i ? n(o, a, l) : a && ((t = t || {}), (t[o] = a));
            }
        }),
        t
    );
}
var Id = ($g.default = Zx);
const Jx = Id.default || Id,
    jg = Bg("end"),
    Mc = Bg("start");
function Bg(e) {
    return n;
    function n(t) {
        const r = (t && t.position && t.position[e]) || {};
        if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
            return {
                line: r.line,
                column: r.column,
                offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
            };
    }
}
function e5(e) {
    const n = Mc(e),
        t = jg(e);
    if (n && t) return { start: n, end: t };
}
function Qi(e) {
    return !e || typeof e != "object"
        ? ""
        : "position" in e || "type" in e
          ? Nd(e.position)
          : "start" in e || "end" in e
            ? Nd(e)
            : "line" in e || "column" in e
              ? Rs(e)
              : "";
}
function Rs(e) {
    return Rd(e && e.line) + ":" + Rd(e && e.column);
}
function Nd(e) {
    return Rs(e && e.start) + "-" + Rs(e && e.end);
}
function Rd(e) {
    return e && typeof e == "number" ? e : 1;
}
class dn extends Error {
    constructor(n, t, r) {
        super(), typeof t == "string" && ((r = t), (t = void 0));
        let i = "",
            l = {},
            o = !1;
        if (
            (t &&
                ("line" in t && "column" in t
                    ? (l = { place: t })
                    : "start" in t && "end" in t
                      ? (l = { place: t })
                      : "type" in t
                        ? (l = { ancestors: [t], place: t.position })
                        : (l = { ...t })),
            typeof n == "string" ? (i = n) : !l.cause && n && ((o = !0), (i = n.message), (l.cause = n)),
            !l.ruleId && !l.source && typeof r == "string")
        ) {
            const u = r.indexOf(":");
            u === -1 ? (l.ruleId = r) : ((l.source = r.slice(0, u)), (l.ruleId = r.slice(u + 1)));
        }
        if (!l.place && l.ancestors && l.ancestors) {
            const u = l.ancestors[l.ancestors.length - 1];
            u && (l.place = u.position);
        }
        const a = l.place && "start" in l.place ? l.place.start : l.place;
        (this.ancestors = l.ancestors || void 0),
            (this.cause = l.cause || void 0),
            (this.column = a ? a.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = i),
            (this.line = a ? a.line : void 0),
            (this.name = Qi(l.place) || "1:1"),
            (this.place = l.place || void 0),
            (this.reason = this.message),
            (this.ruleId = l.ruleId || void 0),
            (this.source = l.source || void 0),
            (this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
    }
}
dn.prototype.file = "";
dn.prototype.name = "";
dn.prototype.reason = "";
dn.prototype.message = "";
dn.prototype.stack = "";
dn.prototype.column = void 0;
dn.prototype.line = void 0;
dn.prototype.ancestors = void 0;
dn.prototype.cause = void 0;
dn.prototype.fatal = void 0;
dn.prototype.place = void 0;
dn.prototype.ruleId = void 0;
dn.prototype.source = void 0;
const Fc = {}.hasOwnProperty,
    n5 = new Map(),
    t5 = /[A-Z]/g,
    r5 = /-([a-z])/g,
    i5 = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    l5 = new Set(["td", "th"]),
    Ug = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function o5(e, n) {
    if (!n || n.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const t = n.filePath || void 0;
    let r;
    if (n.development) {
        if (typeof n.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        r = h5(t, n.jsxDEV);
    } else {
        if (typeof n.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof n.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        r = d5(t, n.jsx, n.jsxs);
    }
    const i = {
            Fragment: n.Fragment,
            ancestors: [],
            components: n.components || {},
            create: r,
            elementAttributeNameCase: n.elementAttributeNameCase || "react",
            evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
            filePath: t,
            ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
            passKeys: n.passKeys !== !1,
            passNode: n.passNode || !1,
            schema: n.space === "svg" ? Dc : Mx,
            stylePropertyNameCase: n.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: n.tableCellAlignToStyle !== !1,
        },
        l = Hg(i, e, void 0);
    return l && typeof l != "string" ? l : i.create(e, i.Fragment, { children: l || void 0 }, void 0);
}
function Hg(e, n, t) {
    if (n.type === "element") return a5(e, n, t);
    if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression") return u5(e, n);
    if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") return c5(e, n, t);
    if (n.type === "mdxjsEsm") return s5(e, n);
    if (n.type === "root") return f5(e, n, t);
    if (n.type === "text") return p5(e, n);
}
function a5(e, n, t) {
    const r = e.schema;
    let i = r;
    n.tagName.toLowerCase() === "svg" && r.space === "html" && ((i = Dc), (e.schema = i)), e.ancestors.push(n);
    const l = Wg(e, n.tagName, !1),
        o = m5(e, n);
    let a = jc(e, n);
    return (
        i5.has(n.tagName) &&
            (a = a.filter(function (u) {
                return typeof u == "string" ? !_x(u) : !0;
            })),
        Vg(e, o, l, n),
        $c(o, a),
        e.ancestors.pop(),
        (e.schema = r),
        e.create(n, l, o, t)
    );
}
function u5(e, n) {
    if (n.data && n.data.estree && e.evaluater) {
        const r = n.data.estree.body[0];
        return r.type, e.evaluater.evaluateExpression(r.expression);
    }
    fl(e, n.position);
}
function s5(e, n) {
    if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
    fl(e, n.position);
}
function c5(e, n, t) {
    const r = e.schema;
    let i = r;
    n.name === "svg" && r.space === "html" && ((i = Dc), (e.schema = i)), e.ancestors.push(n);
    const l = n.name === null ? e.Fragment : Wg(e, n.name, !0),
        o = g5(e, n),
        a = jc(e, n);
    return Vg(e, o, l, n), $c(o, a), e.ancestors.pop(), (e.schema = r), e.create(n, l, o, t);
}
function f5(e, n, t) {
    const r = {};
    return $c(r, jc(e, n)), e.create(n, e.Fragment, r, t);
}
function p5(e, n) {
    return n.value;
}
function Vg(e, n, t, r) {
    typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function $c(e, n) {
    if (n.length > 0) {
        const t = n.length > 1 ? n : n[0];
        t && (e.children = t);
    }
}
function d5(e, n, t) {
    return r;
    function r(i, l, o, a) {
        const s = Array.isArray(o.children) ? t : n;
        return a ? s(l, o, a) : s(l, o);
    }
}
function h5(e, n) {
    return t;
    function t(r, i, l, o) {
        const a = Array.isArray(l.children),
            u = Mc(r);
        return n(
            i,
            l,
            o,
            a,
            { columnNumber: u ? u.column - 1 : void 0, fileName: e, lineNumber: u ? u.line : void 0 },
            void 0
        );
    }
}
function m5(e, n) {
    const t = {};
    let r, i;
    for (i in n.properties)
        if (i !== "children" && Fc.call(n.properties, i)) {
            const l = v5(e, i, n.properties[i]);
            if (l) {
                const [o, a] = l;
                e.tableCellAlignToStyle && o === "align" && typeof a == "string" && l5.has(n.tagName)
                    ? (r = a)
                    : (t[o] = a);
            }
        }
    if (r) {
        const l = t.style || (t.style = {});
        l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return t;
}
function g5(e, n) {
    const t = {};
    for (const r of n.attributes)
        if (r.type === "mdxJsxExpressionAttribute")
            if (r.data && r.data.estree && e.evaluater) {
                const l = r.data.estree.body[0];
                l.type;
                const o = l.expression;
                o.type;
                const a = o.properties[0];
                a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument));
            } else fl(e, n.position);
        else {
            const i = r.name;
            let l;
            if (r.value && typeof r.value == "object")
                if (r.value.data && r.value.data.estree && e.evaluater) {
                    const a = r.value.data.estree.body[0];
                    a.type, (l = e.evaluater.evaluateExpression(a.expression));
                } else fl(e, n.position);
            else l = r.value === null ? !0 : r.value;
            t[i] = l;
        }
    return t;
}
function jc(e, n) {
    const t = [];
    let r = -1;
    const i = e.passKeys ? new Map() : n5;
    for (; ++r < n.children.length; ) {
        const l = n.children[r];
        let o;
        if (e.passKeys) {
            const u =
                l.type === "element"
                    ? l.tagName
                    : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement"
                      ? l.name
                      : void 0;
            if (u) {
                const s = i.get(u) || 0;
                (o = u + "-" + s), i.set(u, s + 1);
            }
        }
        const a = Hg(e, l, o);
        a !== void 0 && t.push(a);
    }
    return t;
}
function v5(e, n, t) {
    const r = zx(e.schema, n);
    if (!(t == null || (typeof t == "number" && Number.isNaN(t)))) {
        if ((Array.isArray(t) && (t = r.commaSeparated ? xx(t) : Fx(t)), r.property === "style")) {
            let i = typeof t == "object" ? t : y5(e, String(t));
            return e.stylePropertyNameCase === "css" && (i = k5(i)), ["style", i];
        }
        return [e.elementAttributeNameCase === "react" && r.space ? Dx[r.property] || r.property : r.attribute, t];
    }
}
function y5(e, n) {
    const t = {};
    try {
        Jx(n, r);
    } catch (i) {
        if (!e.ignoreInvalidStyle) {
            const l = i,
                o = new dn("Cannot parse `style` attribute", {
                    ancestors: e.ancestors,
                    cause: l,
                    ruleId: "style",
                    source: "hast-util-to-jsx-runtime",
                });
            throw ((o.file = e.filePath || void 0), (o.url = Ug + "#cannot-parse-style-attribute"), o);
        }
    }
    return t;
    function r(i, l) {
        let o = i;
        o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), (o = o.replace(r5, x5))),
            (t[o] = l);
    }
}
function Wg(e, n, t) {
    let r;
    if (!t) r = { type: "Literal", value: n };
    else if (n.includes(".")) {
        const i = n.split(".");
        let l = -1,
            o;
        for (; ++l < i.length; ) {
            const a = Sd(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
            o = o
                ? {
                      type: "MemberExpression",
                      object: o,
                      property: a,
                      computed: !!(l && a.type === "Literal"),
                      optional: !1,
                  }
                : a;
        }
        r = o;
    } else r = Sd(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
    if (r.type === "Literal") {
        const i = r.value;
        return Fc.call(e.components, i) ? e.components[i] : i;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    fl(e);
}
function fl(e, n) {
    const t = new dn("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: n,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime",
    });
    throw ((t.file = e.filePath || void 0), (t.url = Ug + "#cannot-handle-mdx-estrees-without-createevaluater"), t);
}
function k5(e) {
    const n = {};
    let t;
    for (t in e) Fc.call(e, t) && (n[w5(t)] = e[t]);
    return n;
}
function w5(e) {
    let n = e.replace(t5, S5);
    return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function x5(e, n) {
    return n.toUpperCase();
}
function S5(e) {
    return "-" + e.toLowerCase();
}
const ku = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"],
    },
    b5 = {};
function Bc(e, n) {
    const t = b5,
        r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0,
        i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
    return Qg(e, r, i);
}
function Qg(e, n, t) {
    if (C5(e)) {
        if ("value" in e) return e.type === "html" && !t ? "" : e.value;
        if (n && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return zd(e.children, n, t);
    }
    return Array.isArray(e) ? zd(e, n, t) : "";
}
function zd(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) r[i] = Qg(e[i], n, t);
    return r.join("");
}
function C5(e) {
    return !!(e && typeof e == "object");
}
const Od = document.createElement("i");
function Uc(e) {
    const n = "&" + e + ";";
    Od.innerHTML = n;
    const t = Od.textContent;
    return (t.charCodeAt(t.length - 1) === 59 && e !== "semi") || t === n ? !1 : t;
}
function Wn(e, n, t, r) {
    const i = e.length;
    let l = 0,
        o;
    if ((n < 0 ? (n = -n > i ? 0 : i + n) : (n = n > i ? i : n), (t = t > 0 ? t : 0), r.length < 1e4))
        (o = Array.from(r)), o.unshift(n, t), e.splice(...o);
    else
        for (t && e.splice(n, t); l < r.length; )
            (o = r.slice(l, l + 1e4)), o.unshift(n, 0), e.splice(...o), (l += 1e4), (n += 1e4);
}
function Un(e, n) {
    return e.length > 0 ? (Wn(e, e.length, 0, n), e) : n;
}
const Ad = {}.hasOwnProperty;
function Gg(e) {
    const n = {};
    let t = -1;
    for (; ++t < e.length; ) E5(n, e[t]);
    return n;
}
function E5(e, n) {
    let t;
    for (t in n) {
        const i = (Ad.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            l = n[t];
        let o;
        if (l)
            for (o in l) {
                Ad.call(i, o) || (i[o] = []);
                const a = l[o];
                _5(i[o], Array.isArray(a) ? a : a ? [a] : []);
            }
    }
}
function _5(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length; ) (n[t].add === "after" ? e : r).push(n[t]);
    Wn(e, 0, 0, r);
}
function Yg(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 ||
        t === 11 ||
        (t > 13 && t < 32) ||
        (t > 126 && t < 160) ||
        (t > 55295 && t < 57344) ||
        (t > 64975 && t < 65008) ||
        (t & 65535) === 65535 ||
        (t & 65535) === 65534 ||
        t > 1114111
        ? "�"
        : String.fromCodePoint(t);
}
function it(e) {
    return e
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
}
const gn = rr(/[A-Za-z]/),
    fn = rr(/[\dA-Za-z]/),
    T5 = rr(/[#-'*+\--9=?A-Z^-~]/);
function Wo(e) {
    return e !== null && (e < 32 || e === 127);
}
const zs = rr(/\d/),
    P5 = rr(/[\dA-Fa-f]/),
    L5 = rr(/[!-/:-@[-`{-~]/);
function ne(e) {
    return e !== null && e < -2;
}
function Ie(e) {
    return e !== null && (e < 0 || e === 32);
}
function de(e) {
    return e === -2 || e === -1 || e === 32;
}
const pa = rr(new RegExp("\\p{P}|\\p{S}", "u")),
    Sr = rr(/\s/);
function rr(e) {
    return n;
    function n(t) {
        return t !== null && t > -1 && e.test(String.fromCharCode(t));
    }
}
function gi(e) {
    const n = [];
    let t = -1,
        r = 0,
        i = 0;
    for (; ++t < e.length; ) {
        const l = e.charCodeAt(t);
        let o = "";
        if (l === 37 && fn(e.charCodeAt(t + 1)) && fn(e.charCodeAt(t + 2))) i = 2;
        else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
            const a = e.charCodeAt(t + 1);
            l < 56320 && a > 56319 && a < 57344 ? ((o = String.fromCharCode(l, a)), (i = 1)) : (o = "�");
        } else o = String.fromCharCode(l);
        o && (n.push(e.slice(r, t), encodeURIComponent(o)), (r = t + i + 1), (o = "")), i && ((t += i), (i = 0));
    }
    return n.join("") + e.slice(r);
}
function ke(e, n, t, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let l = 0;
    return o;
    function o(u) {
        return de(u) ? (e.enter(t), a(u)) : n(u);
    }
    function a(u) {
        return de(u) && l++ < i ? (e.consume(u), a) : (e.exit(t), n(u));
    }
}
const I5 = { tokenize: N5 };
function N5(e) {
    const n = e.attempt(this.parser.constructs.contentInitial, r, i);
    let t;
    return n;
    function r(a) {
        if (a === null) {
            e.consume(a);
            return;
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ke(e, n, "linePrefix");
    }
    function i(a) {
        return e.enter("paragraph"), l(a);
    }
    function l(a) {
        const u = e.enter("chunkText", { contentType: "text", previous: t });
        return t && (t.next = u), (t = u), o(a);
    }
    function o(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return;
        }
        return ne(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
    }
}
const R5 = { tokenize: z5 },
    Dd = { tokenize: O5 };
function z5(e) {
    const n = this,
        t = [];
    let r = 0,
        i,
        l,
        o;
    return a;
    function a(S) {
        if (r < t.length) {
            const R = t[r];
            return (n.containerState = R[1]), e.attempt(R[0].continuation, u, s)(S);
        }
        return s(S);
    }
    function u(S) {
        if ((r++, n.containerState._closeFlow)) {
            (n.containerState._closeFlow = void 0), i && k();
            const R = n.events.length;
            let O = R,
                E;
            for (; O--; )
                if (n.events[O][0] === "exit" && n.events[O][1].type === "chunkFlow") {
                    E = n.events[O][1].end;
                    break;
                }
            v(r);
            let F = R;
            for (; F < n.events.length; ) (n.events[F][1].end = Object.assign({}, E)), F++;
            return Wn(n.events, O + 1, 0, n.events.slice(R)), (n.events.length = F), s(S);
        }
        return a(S);
    }
    function s(S) {
        if (r === t.length) {
            if (!i) return g(S);
            if (i.currentConstruct && i.currentConstruct.concrete) return y(S);
            n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
        }
        return (n.containerState = {}), e.check(Dd, d, f)(S);
    }
    function d(S) {
        return i && k(), v(r), g(S);
    }
    function f(S) {
        return (n.parser.lazy[n.now().line] = r !== t.length), (o = n.now().offset), y(S);
    }
    function g(S) {
        return (n.containerState = {}), e.attempt(Dd, m, y)(S);
    }
    function m(S) {
        return r++, t.push([n.currentConstruct, n.containerState]), g(S);
    }
    function y(S) {
        if (S === null) {
            i && k(), v(0), e.consume(S);
            return;
        }
        return (
            (i = i || n.parser.flow(n.now())),
            e.enter("chunkFlow", { contentType: "flow", previous: l, _tokenizer: i }),
            w(S)
        );
    }
    function w(S) {
        if (S === null) {
            z(e.exit("chunkFlow"), !0), v(0), e.consume(S);
            return;
        }
        return ne(S) ? (e.consume(S), z(e.exit("chunkFlow")), (r = 0), (n.interrupt = void 0), a) : (e.consume(S), w);
    }
    function z(S, R) {
        const O = n.sliceStream(S);
        if (
            (R && O.push(null),
            (S.previous = l),
            l && (l.next = S),
            (l = S),
            i.defineSkip(S.start),
            i.write(O),
            n.parser.lazy[S.start.line])
        ) {
            let E = i.events.length;
            for (; E--; )
                if (i.events[E][1].start.offset < o && (!i.events[E][1].end || i.events[E][1].end.offset > o)) return;
            const F = n.events.length;
            let M = F,
                q,
                L;
            for (; M--; )
                if (n.events[M][0] === "exit" && n.events[M][1].type === "chunkFlow") {
                    if (q) {
                        L = n.events[M][1].end;
                        break;
                    }
                    q = !0;
                }
            for (v(r), E = F; E < n.events.length; ) (n.events[E][1].end = Object.assign({}, L)), E++;
            Wn(n.events, M + 1, 0, n.events.slice(F)), (n.events.length = E);
        }
    }
    function v(S) {
        let R = t.length;
        for (; R-- > S; ) {
            const O = t[R];
            (n.containerState = O[1]), O[0].exit.call(n, e);
        }
        t.length = S;
    }
    function k() {
        i.write([null]), (l = void 0), (i = void 0), (n.containerState._closeFlow = void 0);
    }
}
function O5(e, n, t) {
    return ke(
        e,
        e.attempt(this.parser.constructs.document, n, t),
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
}
function Qo(e) {
    if (e === null || Ie(e) || Sr(e)) return 1;
    if (pa(e)) return 2;
}
function da(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) {
        const l = e[i].resolveAll;
        l && !r.includes(l) && ((n = l(n, t)), r.push(l));
    }
    return n;
}
const Os = { name: "attention", tokenize: D5, resolveAll: A5 };
function A5(e, n) {
    let t = -1,
        r,
        i,
        l,
        o,
        a,
        u,
        s,
        d;
    for (; ++t < e.length; )
        if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
            for (r = t; r--; )
                if (
                    e[r][0] === "exit" &&
                    e[r][1].type === "attentionSequence" &&
                    e[r][1]._open &&
                    n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)
                ) {
                    if (
                        (e[r][1]._close || e[t][1]._open) &&
                        (e[t][1].end.offset - e[t][1].start.offset) % 3 &&
                        !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3)
                    )
                        continue;
                    u =
                        e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1
                            ? 2
                            : 1;
                    const f = Object.assign({}, e[r][1].end),
                        g = Object.assign({}, e[t][1].start);
                    Md(f, -u),
                        Md(g, u),
                        (o = {
                            type: u > 1 ? "strongSequence" : "emphasisSequence",
                            start: f,
                            end: Object.assign({}, e[r][1].end),
                        }),
                        (a = {
                            type: u > 1 ? "strongSequence" : "emphasisSequence",
                            start: Object.assign({}, e[t][1].start),
                            end: g,
                        }),
                        (l = {
                            type: u > 1 ? "strongText" : "emphasisText",
                            start: Object.assign({}, e[r][1].end),
                            end: Object.assign({}, e[t][1].start),
                        }),
                        (i = {
                            type: u > 1 ? "strong" : "emphasis",
                            start: Object.assign({}, o.start),
                            end: Object.assign({}, a.end),
                        }),
                        (e[r][1].end = Object.assign({}, o.start)),
                        (e[t][1].start = Object.assign({}, a.end)),
                        (s = []),
                        e[r][1].end.offset - e[r][1].start.offset &&
                            (s = Un(s, [
                                ["enter", e[r][1], n],
                                ["exit", e[r][1], n],
                            ])),
                        (s = Un(s, [
                            ["enter", i, n],
                            ["enter", o, n],
                            ["exit", o, n],
                            ["enter", l, n],
                        ])),
                        (s = Un(s, da(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n))),
                        (s = Un(s, [
                            ["exit", l, n],
                            ["enter", a, n],
                            ["exit", a, n],
                            ["exit", i, n],
                        ])),
                        e[t][1].end.offset - e[t][1].start.offset
                            ? ((d = 2),
                              (s = Un(s, [
                                  ["enter", e[t][1], n],
                                  ["exit", e[t][1], n],
                              ])))
                            : (d = 0),
                        Wn(e, r - 1, t - r + 3, s),
                        (t = r + s.length - d - 2);
                    break;
                }
        }
    for (t = -1; ++t < e.length; ) e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
    return e;
}
function D5(e, n) {
    const t = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Qo(r);
    let l;
    return o;
    function o(u) {
        return (l = u), e.enter("attentionSequence"), a(u);
    }
    function a(u) {
        if (u === l) return e.consume(u), a;
        const s = e.exit("attentionSequence"),
            d = Qo(u),
            f = !d || (d === 2 && i) || t.includes(u),
            g = !i || (i === 2 && d) || t.includes(r);
        return (s._open = !!(l === 42 ? f : f && (i || !g))), (s._close = !!(l === 42 ? g : g && (d || !f))), n(u);
    }
}
function Md(e, n) {
    (e.column += n), (e.offset += n), (e._bufferIndex += n);
}
const M5 = { name: "autolink", tokenize: F5 };
function F5(e, n, t) {
    let r = 0;
    return i;
    function i(m) {
        return (
            e.enter("autolink"),
            e.enter("autolinkMarker"),
            e.consume(m),
            e.exit("autolinkMarker"),
            e.enter("autolinkProtocol"),
            l
        );
    }
    function l(m) {
        return gn(m) ? (e.consume(m), o) : m === 64 ? t(m) : s(m);
    }
    function o(m) {
        return m === 43 || m === 45 || m === 46 || fn(m) ? ((r = 1), a(m)) : s(m);
    }
    function a(m) {
        return m === 58
            ? (e.consume(m), (r = 0), u)
            : (m === 43 || m === 45 || m === 46 || fn(m)) && r++ < 32
              ? (e.consume(m), a)
              : ((r = 0), s(m));
    }
    function u(m) {
        return m === 62
            ? (e.exit("autolinkProtocol"),
              e.enter("autolinkMarker"),
              e.consume(m),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              n)
            : m === null || m === 32 || m === 60 || Wo(m)
              ? t(m)
              : (e.consume(m), u);
    }
    function s(m) {
        return m === 64 ? (e.consume(m), d) : T5(m) ? (e.consume(m), s) : t(m);
    }
    function d(m) {
        return fn(m) ? f(m) : t(m);
    }
    function f(m) {
        return m === 46
            ? (e.consume(m), (r = 0), d)
            : m === 62
              ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
                e.enter("autolinkMarker"),
                e.consume(m),
                e.exit("autolinkMarker"),
                e.exit("autolink"),
                n)
              : g(m);
    }
    function g(m) {
        if ((m === 45 || fn(m)) && r++ < 63) {
            const y = m === 45 ? g : f;
            return e.consume(m), y;
        }
        return t(m);
    }
}
const yl = { tokenize: $5, partial: !0 };
function $5(e, n, t) {
    return r;
    function r(l) {
        return de(l) ? ke(e, i, "linePrefix")(l) : i(l);
    }
    function i(l) {
        return l === null || ne(l) ? n(l) : t(l);
    }
}
const qg = { name: "blockQuote", tokenize: j5, continuation: { tokenize: B5 }, exit: U5 };
function j5(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        if (o === 62) {
            const a = r.containerState;
            return (
                a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(o),
                e.exit("blockQuoteMarker"),
                l
            );
        }
        return t(o);
    }
    function l(o) {
        return de(o)
            ? (e.enter("blockQuotePrefixWhitespace"),
              e.consume(o),
              e.exit("blockQuotePrefixWhitespace"),
              e.exit("blockQuotePrefix"),
              n)
            : (e.exit("blockQuotePrefix"), n(o));
    }
}
function B5(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return de(o)
            ? ke(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
            : l(o);
    }
    function l(o) {
        return e.attempt(qg, n, t)(o);
    }
}
function U5(e) {
    e.exit("blockQuote");
}
const Xg = { name: "characterEscape", tokenize: H5 };
function H5(e, n, t) {
    return r;
    function r(l) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
    }
    function i(l) {
        return L5(l)
            ? (e.enter("characterEscapeValue"),
              e.consume(l),
              e.exit("characterEscapeValue"),
              e.exit("characterEscape"),
              n)
            : t(l);
    }
}
const Kg = { name: "characterReference", tokenize: V5 };
function V5(e, n, t) {
    const r = this;
    let i = 0,
        l,
        o;
    return a;
    function a(f) {
        return (
            e.enter("characterReference"),
            e.enter("characterReferenceMarker"),
            e.consume(f),
            e.exit("characterReferenceMarker"),
            u
        );
    }
    function u(f) {
        return f === 35
            ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s)
            : (e.enter("characterReferenceValue"), (l = 31), (o = fn), d(f));
    }
    function s(f) {
        return f === 88 || f === 120
            ? (e.enter("characterReferenceMarkerHexadecimal"),
              e.consume(f),
              e.exit("characterReferenceMarkerHexadecimal"),
              e.enter("characterReferenceValue"),
              (l = 6),
              (o = P5),
              d)
            : (e.enter("characterReferenceValue"), (l = 7), (o = zs), d(f));
    }
    function d(f) {
        if (f === 59 && i) {
            const g = e.exit("characterReferenceValue");
            return o === fn && !Uc(r.sliceSerialize(g))
                ? t(f)
                : (e.enter("characterReferenceMarker"),
                  e.consume(f),
                  e.exit("characterReferenceMarker"),
                  e.exit("characterReference"),
                  n);
        }
        return o(f) && i++ < l ? (e.consume(f), d) : t(f);
    }
}
const Fd = { tokenize: Q5, partial: !0 },
    $d = { name: "codeFenced", tokenize: W5, concrete: !0 };
function W5(e, n, t) {
    const r = this,
        i = { tokenize: O, partial: !0 };
    let l = 0,
        o = 0,
        a;
    return u;
    function u(E) {
        return s(E);
    }
    function s(E) {
        const F = r.events[r.events.length - 1];
        return (
            (l = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0),
            (a = E),
            e.enter("codeFenced"),
            e.enter("codeFencedFence"),
            e.enter("codeFencedFenceSequence"),
            d(E)
        );
    }
    function d(E) {
        return E === a
            ? (o++, e.consume(E), d)
            : o < 3
              ? t(E)
              : (e.exit("codeFencedFenceSequence"), de(E) ? ke(e, f, "whitespace")(E) : f(E));
    }
    function f(E) {
        return E === null || ne(E)
            ? (e.exit("codeFencedFence"), r.interrupt ? n(E) : e.check(Fd, w, R)(E))
            : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), g(E));
    }
    function g(E) {
        return E === null || ne(E)
            ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(E))
            : de(E)
              ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ke(e, m, "whitespace")(E))
              : E === 96 && E === a
                ? t(E)
                : (e.consume(E), g);
    }
    function m(E) {
        return E === null || ne(E)
            ? f(E)
            : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), y(E));
    }
    function y(E) {
        return E === null || ne(E)
            ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(E))
            : E === 96 && E === a
              ? t(E)
              : (e.consume(E), y);
    }
    function w(E) {
        return e.attempt(i, R, z)(E);
    }
    function z(E) {
        return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), v;
    }
    function v(E) {
        return l > 0 && de(E) ? ke(e, k, "linePrefix", l + 1)(E) : k(E);
    }
    function k(E) {
        return E === null || ne(E) ? e.check(Fd, w, R)(E) : (e.enter("codeFlowValue"), S(E));
    }
    function S(E) {
        return E === null || ne(E) ? (e.exit("codeFlowValue"), k(E)) : (e.consume(E), S);
    }
    function R(E) {
        return e.exit("codeFenced"), n(E);
    }
    function O(E, F, M) {
        let q = 0;
        return L;
        function L(fe) {
            return E.enter("lineEnding"), E.consume(fe), E.exit("lineEnding"), G;
        }
        function G(fe) {
            return (
                E.enter("codeFencedFence"),
                de(fe)
                    ? ke(E, X, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(fe)
                    : X(fe)
            );
        }
        function X(fe) {
            return fe === a ? (E.enter("codeFencedFenceSequence"), oe(fe)) : M(fe);
        }
        function oe(fe) {
            return fe === a
                ? (q++, E.consume(fe), oe)
                : q >= o
                  ? (E.exit("codeFencedFenceSequence"), de(fe) ? ke(E, Pe, "whitespace")(fe) : Pe(fe))
                  : M(fe);
        }
        function Pe(fe) {
            return fe === null || ne(fe) ? (E.exit("codeFencedFence"), F(fe)) : M(fe);
        }
    }
}
function Q5(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return o === null ? t(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
    }
    function l(o) {
        return r.parser.lazy[r.now().line] ? t(o) : n(o);
    }
}
const wu = { name: "codeIndented", tokenize: Y5 },
    G5 = { tokenize: q5, partial: !0 };
function Y5(e, n, t) {
    const r = this;
    return i;
    function i(s) {
        return e.enter("codeIndented"), ke(e, l, "linePrefix", 5)(s);
    }
    function l(s) {
        const d = r.events[r.events.length - 1];
        return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? o(s) : t(s);
    }
    function o(s) {
        return s === null ? u(s) : ne(s) ? e.attempt(G5, o, u)(s) : (e.enter("codeFlowValue"), a(s));
    }
    function a(s) {
        return s === null || ne(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
    }
    function u(s) {
        return e.exit("codeIndented"), n(s);
    }
}
function q5(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return r.parser.lazy[r.now().line]
            ? t(o)
            : ne(o)
              ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i)
              : ke(e, l, "linePrefix", 5)(o);
    }
    function l(o) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4
            ? n(o)
            : ne(o)
              ? i(o)
              : t(o);
    }
}
const X5 = { name: "codeText", tokenize: J5, resolve: K5, previous: Z5 };
function K5(e) {
    let n = e.length - 4,
        t = 3,
        r,
        i;
    if (
        (e[t][1].type === "lineEnding" || e[t][1].type === "space") &&
        (e[n][1].type === "lineEnding" || e[n][1].type === "space")
    ) {
        for (r = t; ++r < n; )
            if (e[r][1].type === "codeTextData") {
                (e[t][1].type = "codeTextPadding"), (e[n][1].type = "codeTextPadding"), (t += 2), (n -= 2);
                break;
            }
    }
    for (r = t - 1, n++; ++r <= n; )
        i === void 0
            ? r !== n && e[r][1].type !== "lineEnding" && (i = r)
            : (r === n || e[r][1].type === "lineEnding") &&
              ((e[i][1].type = "codeTextData"),
              r !== i + 2 &&
                  ((e[i][1].end = e[r - 1][1].end), e.splice(i + 2, r - i - 2), (n -= r - i - 2), (r = i + 2)),
              (i = void 0));
    return e;
}
function Z5(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function J5(e, n, t) {
    let r = 0,
        i,
        l;
    return o;
    function o(f) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
    }
    function a(f) {
        return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), u(f));
    }
    function u(f) {
        return f === null
            ? t(f)
            : f === 32
              ? (e.enter("space"), e.consume(f), e.exit("space"), u)
              : f === 96
                ? ((l = e.enter("codeTextSequence")), (i = 0), d(f))
                : ne(f)
                  ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u)
                  : (e.enter("codeTextData"), s(f));
    }
    function s(f) {
        return f === null || f === 32 || f === 96 || ne(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s);
    }
    function d(f) {
        return f === 96
            ? (e.consume(f), i++, d)
            : i === r
              ? (e.exit("codeTextSequence"), e.exit("codeText"), n(f))
              : ((l.type = "codeTextData"), s(f));
    }
}
class eS {
    constructor(n) {
        (this.left = n ? [...n] : []), (this.right = []);
    }
    get(n) {
        if (n < 0 || n >= this.left.length + this.right.length)
            throw new RangeError(
                "Cannot access index `" +
                    n +
                    "` in a splice buffer of size `" +
                    (this.left.length + this.right.length) +
                    "`"
            );
        return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
    }
    get length() {
        return this.left.length + this.right.length;
    }
    shift() {
        return this.setCursor(0), this.right.pop();
    }
    slice(n, t) {
        const r = t ?? Number.POSITIVE_INFINITY;
        return r < this.left.length
            ? this.left.slice(n, r)
            : n > this.left.length
              ? this.right
                    .slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length)
                    .reverse()
              : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(n, t, r) {
        const i = t || 0;
        this.setCursor(Math.trunc(n));
        const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return r && Ni(this.left, r), l.reverse();
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(n) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
    }
    pushMany(n) {
        this.setCursor(Number.POSITIVE_INFINITY), Ni(this.left, n);
    }
    unshift(n) {
        this.setCursor(0), this.right.push(n);
    }
    unshiftMany(n) {
        this.setCursor(0), Ni(this.right, n.reverse());
    }
    setCursor(n) {
        if (
            !(
                n === this.left.length ||
                (n > this.left.length && this.right.length === 0) ||
                (n < 0 && this.left.length === 0)
            )
        )
            if (n < this.left.length) {
                const t = this.left.splice(n, Number.POSITIVE_INFINITY);
                Ni(this.right, t.reverse());
            } else {
                const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
                Ni(this.left, t.reverse());
            }
    }
}
function Ni(e, n) {
    let t = 0;
    if (n.length < 1e4) e.push(...n);
    else for (; t < n.length; ) e.push(...n.slice(t, t + 1e4)), (t += 1e4);
}
function Zg(e) {
    const n = {};
    let t = -1,
        r,
        i,
        l,
        o,
        a,
        u,
        s;
    const d = new eS(e);
    for (; ++t < d.length; ) {
        for (; t in n; ) t = n[t];
        if (
            ((r = d.get(t)),
            t &&
                r[1].type === "chunkFlow" &&
                d.get(t - 1)[1].type === "listItemPrefix" &&
                ((u = r[1]._tokenizer.events),
                (l = 0),
                l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2),
                l < u.length && u[l][1].type === "content"))
        )
            for (; ++l < u.length && u[l][1].type !== "content"; )
                u[l][1].type === "chunkText" && ((u[l][1]._isInFirstContentOfListItem = !0), l++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(n, nS(d, t)), (t = n[t]), (s = !0));
        else if (r[1]._container) {
            for (
                l = t, i = void 0;
                l-- && ((o = d.get(l)), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");

            )
                o[0] === "enter" && (i && (d.get(i)[1].type = "lineEndingBlank"), (o[1].type = "lineEnding"), (i = l));
            i &&
                ((r[1].end = Object.assign({}, d.get(i)[1].start)),
                (a = d.slice(i, t)),
                a.unshift(r),
                d.splice(i, t - i + 1, a));
        }
    }
    return Wn(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !s;
}
function nS(e, n) {
    const t = e.get(n)[1],
        r = e.get(n)[2];
    let i = n - 1;
    const l = [],
        o = t._tokenizer || r.parser[t.contentType](t.start),
        a = o.events,
        u = [],
        s = {};
    let d,
        f,
        g = -1,
        m = t,
        y = 0,
        w = 0;
    const z = [w];
    for (; m; ) {
        for (; e.get(++i)[1] !== m; );
        l.push(i),
            m._tokenizer ||
                ((d = r.sliceStream(m)),
                m.next || d.push(null),
                f && o.defineSkip(m.start),
                m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
                o.write(d),
                m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
            (f = m),
            (m = m.next);
    }
    for (m = t; ++g < a.length; )
        a[g][0] === "exit" &&
            a[g - 1][0] === "enter" &&
            a[g][1].type === a[g - 1][1].type &&
            a[g][1].start.line !== a[g][1].end.line &&
            ((w = g + 1), z.push(w), (m._tokenizer = void 0), (m.previous = void 0), (m = m.next));
    for (o.events = [], m ? ((m._tokenizer = void 0), (m.previous = void 0)) : z.pop(), g = z.length; g--; ) {
        const v = a.slice(z[g], z[g + 1]),
            k = l.pop();
        u.push([k, k + v.length - 1]), e.splice(k, 2, v);
    }
    for (u.reverse(), g = -1; ++g < u.length; ) (s[y + u[g][0]] = y + u[g][1]), (y += u[g][1] - u[g][0] - 1);
    return s;
}
const tS = { tokenize: lS, resolve: iS },
    rS = { tokenize: oS, partial: !0 };
function iS(e) {
    return Zg(e), e;
}
function lS(e, n) {
    let t;
    return r;
    function r(a) {
        return e.enter("content"), (t = e.enter("chunkContent", { contentType: "content" })), i(a);
    }
    function i(a) {
        return a === null ? l(a) : ne(a) ? e.check(rS, o, l)(a) : (e.consume(a), i);
    }
    function l(a) {
        return e.exit("chunkContent"), e.exit("content"), n(a);
    }
    function o(a) {
        return (
            e.consume(a),
            e.exit("chunkContent"),
            (t.next = e.enter("chunkContent", { contentType: "content", previous: t })),
            (t = t.next),
            i
        );
    }
}
function oS(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return (
            e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), ke(e, l, "linePrefix")
        );
    }
    function l(o) {
        if (o === null || ne(o)) return t(o);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") &&
            a &&
            a[1].type === "linePrefix" &&
            a[2].sliceSerialize(a[1], !0).length >= 4
            ? n(o)
            : e.interrupt(r.parser.constructs.flow, t, n)(o);
    }
}
function Jg(e, n, t, r, i, l, o, a, u) {
    const s = u || Number.POSITIVE_INFINITY;
    let d = 0;
    return f;
    function f(v) {
        return v === 60
            ? (e.enter(r), e.enter(i), e.enter(l), e.consume(v), e.exit(l), g)
            : v === null || v === 32 || v === 41 || Wo(v)
              ? t(v)
              : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), w(v));
    }
    function g(v) {
        return v === 62
            ? (e.enter(l), e.consume(v), e.exit(l), e.exit(i), e.exit(r), n)
            : (e.enter(a), e.enter("chunkString", { contentType: "string" }), m(v));
    }
    function m(v) {
        return v === 62
            ? (e.exit("chunkString"), e.exit(a), g(v))
            : v === null || v === 60 || ne(v)
              ? t(v)
              : (e.consume(v), v === 92 ? y : m);
    }
    function y(v) {
        return v === 60 || v === 62 || v === 92 ? (e.consume(v), m) : m(v);
    }
    function w(v) {
        return !d && (v === null || v === 41 || Ie(v))
            ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(v))
            : d < s && v === 40
              ? (e.consume(v), d++, w)
              : v === 41
                ? (e.consume(v), d--, w)
                : v === null || v === 32 || v === 40 || Wo(v)
                  ? t(v)
                  : (e.consume(v), v === 92 ? z : w);
    }
    function z(v) {
        return v === 40 || v === 41 || v === 92 ? (e.consume(v), w) : w(v);
    }
}
function e0(e, n, t, r, i, l) {
    const o = this;
    let a = 0,
        u;
    return s;
    function s(m) {
        return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), d;
    }
    function d(m) {
        return a > 999 ||
            m === null ||
            m === 91 ||
            (m === 93 && !u) ||
            (m === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs)
            ? t(m)
            : m === 93
              ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), n)
              : ne(m)
                ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), d)
                : (e.enter("chunkString", { contentType: "string" }), f(m));
    }
    function f(m) {
        return m === null || m === 91 || m === 93 || ne(m) || a++ > 999
            ? (e.exit("chunkString"), d(m))
            : (e.consume(m), u || (u = !de(m)), m === 92 ? g : f);
    }
    function g(m) {
        return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m);
    }
}
function n0(e, n, t, r, i, l) {
    let o;
    return a;
    function a(g) {
        return g === 34 || g === 39 || g === 40
            ? (e.enter(r), e.enter(i), e.consume(g), e.exit(i), (o = g === 40 ? 41 : g), u)
            : t(g);
    }
    function u(g) {
        return g === o ? (e.enter(i), e.consume(g), e.exit(i), e.exit(r), n) : (e.enter(l), s(g));
    }
    function s(g) {
        return g === o
            ? (e.exit(l), u(o))
            : g === null
              ? t(g)
              : ne(g)
                ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), ke(e, s, "linePrefix"))
                : (e.enter("chunkString", { contentType: "string" }), d(g));
    }
    function d(g) {
        return g === o || g === null || ne(g) ? (e.exit("chunkString"), s(g)) : (e.consume(g), g === 92 ? f : d);
    }
    function f(g) {
        return g === o || g === 92 ? (e.consume(g), d) : d(g);
    }
}
function Gi(e, n) {
    let t;
    return r;
    function r(i) {
        return ne(i)
            ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (t = !0), r)
            : de(i)
              ? ke(e, r, t ? "linePrefix" : "lineSuffix")(i)
              : n(i);
    }
}
const aS = { name: "definition", tokenize: sS },
    uS = { tokenize: cS, partial: !0 };
function sS(e, n, t) {
    const r = this;
    let i;
    return l;
    function l(m) {
        return e.enter("definition"), o(m);
    }
    function o(m) {
        return e0.call(r, e, a, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(m);
    }
    function a(m) {
        return (
            (i = it(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
            m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), u) : t(m)
        );
    }
    function u(m) {
        return Ie(m) ? Gi(e, s)(m) : s(m);
    }
    function s(m) {
        return Jg(
            e,
            d,
            t,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString"
        )(m);
    }
    function d(m) {
        return e.attempt(uS, f, f)(m);
    }
    function f(m) {
        return de(m) ? ke(e, g, "whitespace")(m) : g(m);
    }
    function g(m) {
        return m === null || ne(m) ? (e.exit("definition"), r.parser.defined.push(i), n(m)) : t(m);
    }
}
function cS(e, n, t) {
    return r;
    function r(a) {
        return Ie(a) ? Gi(e, i)(a) : t(a);
    }
    function i(a) {
        return n0(e, l, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
    }
    function l(a) {
        return de(a) ? ke(e, o, "whitespace")(a) : o(a);
    }
    function o(a) {
        return a === null || ne(a) ? n(a) : t(a);
    }
}
const fS = { name: "hardBreakEscape", tokenize: pS };
function pS(e, n, t) {
    return r;
    function r(l) {
        return e.enter("hardBreakEscape"), e.consume(l), i;
    }
    function i(l) {
        return ne(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l);
    }
}
const dS = { name: "headingAtx", tokenize: mS, resolve: hS };
function hS(e, n) {
    let t = e.length - 2,
        r = 3,
        i,
        l;
    return (
        e[r][1].type === "whitespace" && (r += 2),
        t - 2 > r && e[t][1].type === "whitespace" && (t -= 2),
        e[t][1].type === "atxHeadingSequence" &&
            (r === t - 1 || (t - 4 > r && e[t - 2][1].type === "whitespace")) &&
            (t -= r + 1 === t ? 2 : 4),
        t > r &&
            ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[t][1].end }),
            (l = { type: "chunkText", start: e[r][1].start, end: e[t][1].end, contentType: "text" }),
            Wn(e, r, t - r + 1, [
                ["enter", i, n],
                ["enter", l, n],
                ["exit", l, n],
                ["exit", i, n],
            ])),
        e
    );
}
function mS(e, n, t) {
    let r = 0;
    return i;
    function i(d) {
        return e.enter("atxHeading"), l(d);
    }
    function l(d) {
        return e.enter("atxHeadingSequence"), o(d);
    }
    function o(d) {
        return d === 35 && r++ < 6
            ? (e.consume(d), o)
            : d === null || Ie(d)
              ? (e.exit("atxHeadingSequence"), a(d))
              : t(d);
    }
    function a(d) {
        return d === 35
            ? (e.enter("atxHeadingSequence"), u(d))
            : d === null || ne(d)
              ? (e.exit("atxHeading"), n(d))
              : de(d)
                ? ke(e, a, "whitespace")(d)
                : (e.enter("atxHeadingText"), s(d));
    }
    function u(d) {
        return d === 35 ? (e.consume(d), u) : (e.exit("atxHeadingSequence"), a(d));
    }
    function s(d) {
        return d === null || d === 35 || Ie(d) ? (e.exit("atxHeadingText"), a(d)) : (e.consume(d), s);
    }
}
const gS = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "search",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
    ],
    jd = ["pre", "script", "style", "textarea"],
    vS = { name: "htmlFlow", tokenize: xS, resolveTo: wS, concrete: !0 },
    yS = { tokenize: bS, partial: !0 },
    kS = { tokenize: SS, partial: !0 };
function wS(e) {
    let n = e.length;
    for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); );
    return (
        n > 1 &&
            e[n - 2][1].type === "linePrefix" &&
            ((e[n][1].start = e[n - 2][1].start), (e[n + 1][1].start = e[n - 2][1].start), e.splice(n - 2, 2)),
        e
    );
}
function xS(e, n, t) {
    const r = this;
    let i, l, o, a, u;
    return s;
    function s(T) {
        return d(T);
    }
    function d(T) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(T), f;
    }
    function f(T) {
        return T === 33
            ? (e.consume(T), g)
            : T === 47
              ? (e.consume(T), (l = !0), w)
              : T === 63
                ? (e.consume(T), (i = 3), r.interrupt ? n : b)
                : gn(T)
                  ? (e.consume(T), (o = String.fromCharCode(T)), z)
                  : t(T);
    }
    function g(T) {
        return T === 45
            ? (e.consume(T), (i = 2), m)
            : T === 91
              ? (e.consume(T), (i = 5), (a = 0), y)
              : gn(T)
                ? (e.consume(T), (i = 4), r.interrupt ? n : b)
                : t(T);
    }
    function m(T) {
        return T === 45 ? (e.consume(T), r.interrupt ? n : b) : t(T);
    }
    function y(T) {
        const Fe = "CDATA[";
        return T === Fe.charCodeAt(a++) ? (e.consume(T), a === Fe.length ? (r.interrupt ? n : X) : y) : t(T);
    }
    function w(T) {
        return gn(T) ? (e.consume(T), (o = String.fromCharCode(T)), z) : t(T);
    }
    function z(T) {
        if (T === null || T === 47 || T === 62 || Ie(T)) {
            const Fe = T === 47,
                Tn = o.toLowerCase();
            return !Fe && !l && jd.includes(Tn)
                ? ((i = 1), r.interrupt ? n(T) : X(T))
                : gS.includes(o.toLowerCase())
                  ? ((i = 6), Fe ? (e.consume(T), v) : r.interrupt ? n(T) : X(T))
                  : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? t(T) : l ? k(T) : S(T));
        }
        return T === 45 || fn(T) ? (e.consume(T), (o += String.fromCharCode(T)), z) : t(T);
    }
    function v(T) {
        return T === 62 ? (e.consume(T), r.interrupt ? n : X) : t(T);
    }
    function k(T) {
        return de(T) ? (e.consume(T), k) : L(T);
    }
    function S(T) {
        return T === 47
            ? (e.consume(T), L)
            : T === 58 || T === 95 || gn(T)
              ? (e.consume(T), R)
              : de(T)
                ? (e.consume(T), S)
                : L(T);
    }
    function R(T) {
        return T === 45 || T === 46 || T === 58 || T === 95 || fn(T) ? (e.consume(T), R) : O(T);
    }
    function O(T) {
        return T === 61 ? (e.consume(T), E) : de(T) ? (e.consume(T), O) : S(T);
    }
    function E(T) {
        return T === null || T === 60 || T === 61 || T === 62 || T === 96
            ? t(T)
            : T === 34 || T === 39
              ? (e.consume(T), (u = T), F)
              : de(T)
                ? (e.consume(T), E)
                : M(T);
    }
    function F(T) {
        return T === u ? (e.consume(T), (u = null), q) : T === null || ne(T) ? t(T) : (e.consume(T), F);
    }
    function M(T) {
        return T === null || T === 34 || T === 39 || T === 47 || T === 60 || T === 61 || T === 62 || T === 96 || Ie(T)
            ? O(T)
            : (e.consume(T), M);
    }
    function q(T) {
        return T === 47 || T === 62 || de(T) ? S(T) : t(T);
    }
    function L(T) {
        return T === 62 ? (e.consume(T), G) : t(T);
    }
    function G(T) {
        return T === null || ne(T) ? X(T) : de(T) ? (e.consume(T), G) : t(T);
    }
    function X(T) {
        return T === 45 && i === 2
            ? (e.consume(T), He)
            : T === 60 && i === 1
              ? (e.consume(T), De)
              : T === 62 && i === 4
                ? (e.consume(T), me)
                : T === 63 && i === 3
                  ? (e.consume(T), b)
                  : T === 93 && i === 5
                    ? (e.consume(T), ee)
                    : ne(T) && (i === 6 || i === 7)
                      ? (e.exit("htmlFlowData"), e.check(yS, Se, oe)(T))
                      : T === null || ne(T)
                        ? (e.exit("htmlFlowData"), oe(T))
                        : (e.consume(T), X);
    }
    function oe(T) {
        return e.check(kS, Pe, Se)(T);
    }
    function Pe(T) {
        return e.enter("lineEnding"), e.consume(T), e.exit("lineEnding"), fe;
    }
    function fe(T) {
        return T === null || ne(T) ? oe(T) : (e.enter("htmlFlowData"), X(T));
    }
    function He(T) {
        return T === 45 ? (e.consume(T), b) : X(T);
    }
    function De(T) {
        return T === 47 ? (e.consume(T), (o = ""), Q) : X(T);
    }
    function Q(T) {
        if (T === 62) {
            const Fe = o.toLowerCase();
            return jd.includes(Fe) ? (e.consume(T), me) : X(T);
        }
        return gn(T) && o.length < 8 ? (e.consume(T), (o += String.fromCharCode(T)), Q) : X(T);
    }
    function ee(T) {
        return T === 93 ? (e.consume(T), b) : X(T);
    }
    function b(T) {
        return T === 62 ? (e.consume(T), me) : T === 45 && i === 2 ? (e.consume(T), b) : X(T);
    }
    function me(T) {
        return T === null || ne(T) ? (e.exit("htmlFlowData"), Se(T)) : (e.consume(T), me);
    }
    function Se(T) {
        return e.exit("htmlFlow"), n(T);
    }
}
function SS(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return ne(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : t(o);
    }
    function l(o) {
        return r.parser.lazy[r.now().line] ? t(o) : n(o);
    }
}
function bS(e, n, t) {
    return r;
    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(yl, n, t);
    }
}
const CS = { name: "htmlText", tokenize: ES };
function ES(e, n, t) {
    const r = this;
    let i, l, o;
    return a;
    function a(b) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), u;
    }
    function u(b) {
        return b === 33
            ? (e.consume(b), s)
            : b === 47
              ? (e.consume(b), O)
              : b === 63
                ? (e.consume(b), S)
                : gn(b)
                  ? (e.consume(b), M)
                  : t(b);
    }
    function s(b) {
        return b === 45 ? (e.consume(b), d) : b === 91 ? (e.consume(b), (l = 0), y) : gn(b) ? (e.consume(b), k) : t(b);
    }
    function d(b) {
        return b === 45 ? (e.consume(b), m) : t(b);
    }
    function f(b) {
        return b === null ? t(b) : b === 45 ? (e.consume(b), g) : ne(b) ? ((o = f), De(b)) : (e.consume(b), f);
    }
    function g(b) {
        return b === 45 ? (e.consume(b), m) : f(b);
    }
    function m(b) {
        return b === 62 ? He(b) : b === 45 ? g(b) : f(b);
    }
    function y(b) {
        const me = "CDATA[";
        return b === me.charCodeAt(l++) ? (e.consume(b), l === me.length ? w : y) : t(b);
    }
    function w(b) {
        return b === null ? t(b) : b === 93 ? (e.consume(b), z) : ne(b) ? ((o = w), De(b)) : (e.consume(b), w);
    }
    function z(b) {
        return b === 93 ? (e.consume(b), v) : w(b);
    }
    function v(b) {
        return b === 62 ? He(b) : b === 93 ? (e.consume(b), v) : w(b);
    }
    function k(b) {
        return b === null || b === 62 ? He(b) : ne(b) ? ((o = k), De(b)) : (e.consume(b), k);
    }
    function S(b) {
        return b === null ? t(b) : b === 63 ? (e.consume(b), R) : ne(b) ? ((o = S), De(b)) : (e.consume(b), S);
    }
    function R(b) {
        return b === 62 ? He(b) : S(b);
    }
    function O(b) {
        return gn(b) ? (e.consume(b), E) : t(b);
    }
    function E(b) {
        return b === 45 || fn(b) ? (e.consume(b), E) : F(b);
    }
    function F(b) {
        return ne(b) ? ((o = F), De(b)) : de(b) ? (e.consume(b), F) : He(b);
    }
    function M(b) {
        return b === 45 || fn(b) ? (e.consume(b), M) : b === 47 || b === 62 || Ie(b) ? q(b) : t(b);
    }
    function q(b) {
        return b === 47
            ? (e.consume(b), He)
            : b === 58 || b === 95 || gn(b)
              ? (e.consume(b), L)
              : ne(b)
                ? ((o = q), De(b))
                : de(b)
                  ? (e.consume(b), q)
                  : He(b);
    }
    function L(b) {
        return b === 45 || b === 46 || b === 58 || b === 95 || fn(b) ? (e.consume(b), L) : G(b);
    }
    function G(b) {
        return b === 61 ? (e.consume(b), X) : ne(b) ? ((o = G), De(b)) : de(b) ? (e.consume(b), G) : q(b);
    }
    function X(b) {
        return b === null || b === 60 || b === 61 || b === 62 || b === 96
            ? t(b)
            : b === 34 || b === 39
              ? (e.consume(b), (i = b), oe)
              : ne(b)
                ? ((o = X), De(b))
                : de(b)
                  ? (e.consume(b), X)
                  : (e.consume(b), Pe);
    }
    function oe(b) {
        return b === i
            ? (e.consume(b), (i = void 0), fe)
            : b === null
              ? t(b)
              : ne(b)
                ? ((o = oe), De(b))
                : (e.consume(b), oe);
    }
    function Pe(b) {
        return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96
            ? t(b)
            : b === 47 || b === 62 || Ie(b)
              ? q(b)
              : (e.consume(b), Pe);
    }
    function fe(b) {
        return b === 47 || b === 62 || Ie(b) ? q(b) : t(b);
    }
    function He(b) {
        return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(b);
    }
    function De(b) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), Q;
    }
    function Q(b) {
        return de(b)
            ? ke(e, ee, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b)
            : ee(b);
    }
    function ee(b) {
        return e.enter("htmlTextData"), o(b);
    }
}
const Hc = { name: "labelEnd", tokenize: NS, resolveTo: IS, resolveAll: LS },
    _S = { tokenize: RS },
    TS = { tokenize: zS },
    PS = { tokenize: OS };
function LS(e) {
    let n = -1;
    for (; ++n < e.length; ) {
        const t = e[n][1];
        (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") &&
            (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), (t.type = "data"), n++);
    }
    return e;
}
function IS(e, n) {
    let t = e.length,
        r = 0,
        i,
        l,
        o,
        a;
    for (; t--; )
        if (((i = e[t][1]), l)) {
            if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
            e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
        } else if (o) {
            if (
                e[t][0] === "enter" &&
                (i.type === "labelImage" || i.type === "labelLink") &&
                !i._balanced &&
                ((l = t), i.type !== "labelLink")
            ) {
                r = 2;
                break;
            }
        } else i.type === "labelEnd" && (o = t);
    const u = {
            type: e[l][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
        },
        s = { type: "label", start: Object.assign({}, e[l][1].start), end: Object.assign({}, e[o][1].end) },
        d = {
            type: "labelText",
            start: Object.assign({}, e[l + r + 2][1].end),
            end: Object.assign({}, e[o - 2][1].start),
        };
    return (
        (a = [
            ["enter", u, n],
            ["enter", s, n],
        ]),
        (a = Un(a, e.slice(l + 1, l + r + 3))),
        (a = Un(a, [["enter", d, n]])),
        (a = Un(a, da(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n))),
        (a = Un(a, [["exit", d, n], e[o - 2], e[o - 1], ["exit", s, n]])),
        (a = Un(a, e.slice(o + 1))),
        (a = Un(a, [["exit", u, n]])),
        Wn(e, l, e.length, a),
        e
    );
}
function NS(e, n, t) {
    const r = this;
    let i = r.events.length,
        l,
        o;
    for (; i--; )
        if (
            (r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") &&
            !r.events[i][1]._balanced
        ) {
            l = r.events[i][1];
            break;
        }
    return a;
    function a(g) {
        return l
            ? l._inactive
                ? f(g)
                : ((o = r.parser.defined.includes(it(r.sliceSerialize({ start: l.end, end: r.now() })))),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(g),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  u)
            : t(g);
    }
    function u(g) {
        return g === 40 ? e.attempt(_S, d, o ? d : f)(g) : g === 91 ? e.attempt(TS, d, o ? s : f)(g) : o ? d(g) : f(g);
    }
    function s(g) {
        return e.attempt(PS, d, f)(g);
    }
    function d(g) {
        return n(g);
    }
    function f(g) {
        return (l._balanced = !0), t(g);
    }
}
function RS(e, n, t) {
    return r;
    function r(f) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
    }
    function i(f) {
        return Ie(f) ? Gi(e, l)(f) : l(f);
    }
    function l(f) {
        return f === 41
            ? d(f)
            : Jg(
                  e,
                  o,
                  a,
                  "resourceDestination",
                  "resourceDestinationLiteral",
                  "resourceDestinationLiteralMarker",
                  "resourceDestinationRaw",
                  "resourceDestinationString",
                  32
              )(f);
    }
    function o(f) {
        return Ie(f) ? Gi(e, u)(f) : d(f);
    }
    function a(f) {
        return t(f);
    }
    function u(f) {
        return f === 34 || f === 39 || f === 40
            ? n0(e, s, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f)
            : d(f);
    }
    function s(f) {
        return Ie(f) ? Gi(e, d)(f) : d(f);
    }
    function d(f) {
        return f === 41
            ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), n)
            : t(f);
    }
}
function zS(e, n, t) {
    const r = this;
    return i;
    function i(a) {
        return e0.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
    }
    function l(a) {
        return r.parser.defined.includes(it(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)))
            ? n(a)
            : t(a);
    }
    function o(a) {
        return t(a);
    }
}
function OS(e, n, t) {
    return r;
    function r(l) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
    }
    function i(l) {
        return l === 93
            ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), n)
            : t(l);
    }
}
const AS = { name: "labelStartImage", tokenize: DS, resolveAll: Hc.resolveAll };
function DS(e, n, t) {
    const r = this;
    return i;
    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l;
    }
    function l(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : t(a);
    }
    function o(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
    }
}
const MS = { name: "labelStartLink", tokenize: FS, resolveAll: Hc.resolveAll };
function FS(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return (
            e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l
        );
    }
    function l(o) {
        return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(o) : n(o);
    }
}
const xu = { name: "lineEnding", tokenize: $S };
function $S(e, n) {
    return t;
    function t(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ke(e, n, "linePrefix");
    }
}
const ko = { name: "thematicBreak", tokenize: jS };
function jS(e, n, t) {
    let r = 0,
        i;
    return l;
    function l(s) {
        return e.enter("thematicBreak"), o(s);
    }
    function o(s) {
        return (i = s), a(s);
    }
    function a(s) {
        return s === i
            ? (e.enter("thematicBreakSequence"), u(s))
            : r >= 3 && (s === null || ne(s))
              ? (e.exit("thematicBreak"), n(s))
              : t(s);
    }
    function u(s) {
        return s === i
            ? (e.consume(s), r++, u)
            : (e.exit("thematicBreakSequence"), de(s) ? ke(e, a, "whitespace")(s) : a(s));
    }
}
const xn = { name: "list", tokenize: HS, continuation: { tokenize: VS }, exit: QS },
    BS = { tokenize: GS, partial: !0 },
    US = { tokenize: WS, partial: !0 };
function HS(e, n, t) {
    const r = this,
        i = r.events[r.events.length - 1];
    let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        o = 0;
    return a;
    function a(m) {
        const y = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
        if (y === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : zs(m)) {
            if (
                (r.containerState.type || ((r.containerState.type = y), e.enter(y, { _container: !0 })),
                y === "listUnordered")
            )
                return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(ko, t, s)(m) : s(m);
            if (!r.interrupt || m === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(m);
        }
        return t(m);
    }
    function u(m) {
        return zs(m) && ++o < 10
            ? (e.consume(m), u)
            : (!r.interrupt || o < 2) &&
                (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46)
              ? (e.exit("listItemValue"), s(m))
              : t(m);
    }
    function s(m) {
        return (
            e.enter("listItemMarker"),
            e.consume(m),
            e.exit("listItemMarker"),
            (r.containerState.marker = r.containerState.marker || m),
            e.check(yl, r.interrupt ? t : d, e.attempt(BS, g, f))
        );
    }
    function d(m) {
        return (r.containerState.initialBlankLine = !0), l++, g(m);
    }
    function f(m) {
        return de(m)
            ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), g)
            : t(m);
    }
    function g(m) {
        return (r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length), n(m);
    }
}
function VS(e, n, t) {
    const r = this;
    return (r.containerState._closeFlow = void 0), e.check(yl, i, l);
    function i(a) {
        return (
            (r.containerState.furtherBlankLines =
                r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
            ke(e, n, "listItemIndent", r.containerState.size + 1)(a)
        );
    }
    function l(a) {
        return r.containerState.furtherBlankLines || !de(a)
            ? ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), o(a))
            : ((r.containerState.furtherBlankLines = void 0),
              (r.containerState.initialBlankLine = void 0),
              e.attempt(US, n, o)(a));
    }
    function o(a) {
        return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            ke(
                e,
                e.attempt(xn, n, t),
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
            )(a)
        );
    }
}
function WS(e, n, t) {
    const r = this;
    return ke(e, i, "listItemIndent", r.containerState.size + 1);
    function i(l) {
        const o = r.events[r.events.length - 1];
        return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size
            ? n(l)
            : t(l);
    }
}
function QS(e) {
    e.exit(this.containerState.type);
}
function GS(e, n, t) {
    const r = this;
    return ke(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function i(l) {
        const o = r.events[r.events.length - 1];
        return !de(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l);
    }
}
const Bd = { name: "setextUnderline", tokenize: qS, resolveTo: YS };
function YS(e, n) {
    let t = e.length,
        r,
        i,
        l;
    for (; t--; )
        if (e[t][0] === "enter") {
            if (e[t][1].type === "content") {
                r = t;
                break;
            }
            e[t][1].type === "paragraph" && (i = t);
        } else e[t][1].type === "content" && e.splice(t, 1), !l && e[t][1].type === "definition" && (l = t);
    const o = {
        type: "setextHeading",
        start: Object.assign({}, e[i][1].start),
        end: Object.assign({}, e[e.length - 1][1].end),
    };
    return (
        (e[i][1].type = "setextHeadingText"),
        l
            ? (e.splice(i, 0, ["enter", o, n]),
              e.splice(l + 1, 0, ["exit", e[r][1], n]),
              (e[r][1].end = Object.assign({}, e[l][1].end)))
            : (e[r][1] = o),
        e.push(["exit", o, n]),
        e
    );
}
function qS(e, n, t) {
    const r = this;
    let i;
    return l;
    function l(s) {
        let d = r.events.length,
            f;
        for (; d--; )
            if (
                r.events[d][1].type !== "lineEnding" &&
                r.events[d][1].type !== "linePrefix" &&
                r.events[d][1].type !== "content"
            ) {
                f = r.events[d][1].type === "paragraph";
                break;
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || f)
            ? (e.enter("setextHeadingLine"), (i = s), o(s))
            : t(s);
    }
    function o(s) {
        return e.enter("setextHeadingLineSequence"), a(s);
    }
    function a(s) {
        return s === i
            ? (e.consume(s), a)
            : (e.exit("setextHeadingLineSequence"), de(s) ? ke(e, u, "lineSuffix")(s) : u(s));
    }
    function u(s) {
        return s === null || ne(s) ? (e.exit("setextHeadingLine"), n(s)) : t(s);
    }
}
const XS = { tokenize: KS };
function KS(e) {
    const n = this,
        t = e.attempt(
            yl,
            r,
            e.attempt(
                this.parser.constructs.flowInitial,
                i,
                ke(e, e.attempt(this.parser.constructs.flow, i, e.attempt(tS, i)), "linePrefix")
            )
        );
    return t;
    function r(l) {
        if (l === null) {
            e.consume(l);
            return;
        }
        return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), (n.currentConstruct = void 0), t;
    }
    function i(l) {
        if (l === null) {
            e.consume(l);
            return;
        }
        return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), (n.currentConstruct = void 0), t;
    }
}
const ZS = { resolveAll: r0() },
    JS = t0("string"),
    e3 = t0("text");
function t0(e) {
    return { tokenize: n, resolveAll: r0(e === "text" ? n3 : void 0) };
    function n(t) {
        const r = this,
            i = this.parser.constructs[e],
            l = t.attempt(i, o, a);
        return o;
        function o(d) {
            return s(d) ? l(d) : a(d);
        }
        function a(d) {
            if (d === null) {
                t.consume(d);
                return;
            }
            return t.enter("data"), t.consume(d), u;
        }
        function u(d) {
            return s(d) ? (t.exit("data"), l(d)) : (t.consume(d), u);
        }
        function s(d) {
            if (d === null) return !0;
            const f = i[d];
            let g = -1;
            if (f)
                for (; ++g < f.length; ) {
                    const m = f[g];
                    if (!m.previous || m.previous.call(r, r.previous)) return !0;
                }
            return !1;
        }
    }
}
function r0(e) {
    return n;
    function n(t, r) {
        let i = -1,
            l;
        for (; ++i <= t.length; )
            l === void 0
                ? t[i] && t[i][1].type === "data" && ((l = i), i++)
                : (!t[i] || t[i][1].type !== "data") &&
                  (i !== l + 2 && ((t[l][1].end = t[i - 1][1].end), t.splice(l + 2, i - l - 2), (i = l + 2)),
                  (l = void 0));
        return e ? e(t, r) : t;
    }
}
function n3(e, n) {
    let t = 0;
    for (; ++t <= e.length; )
        if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
            const r = e[t - 1][1],
                i = n.sliceStream(r);
            let l = i.length,
                o = -1,
                a = 0,
                u;
            for (; l--; ) {
                const s = i[l];
                if (typeof s == "string") {
                    for (o = s.length; s.charCodeAt(o - 1) === 32; ) a++, o--;
                    if (o) break;
                    o = -1;
                } else if (s === -2) (u = !0), a++;
                else if (s !== -1) {
                    l++;
                    break;
                }
            }
            if (a) {
                const s = {
                    type: t === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a,
                        _index: r.start._index + l,
                        _bufferIndex: l ? o : r.start._bufferIndex + o,
                    },
                    end: Object.assign({}, r.end),
                };
                (r.end = Object.assign({}, s.start)),
                    r.start.offset === r.end.offset
                        ? Object.assign(r, s)
                        : (e.splice(t, 0, ["enter", s, n], ["exit", s, n]), (t += 2));
            }
            t++;
        }
    return e;
}
function t3(e, n, t) {
    let r = Object.assign(t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 }, {
        _index: 0,
        _bufferIndex: -1,
    });
    const i = {},
        l = [];
    let o = [],
        a = [];
    const u = { consume: k, enter: S, exit: R, attempt: F(O), check: F(E), interrupt: F(E, { interrupt: !0 }) },
        s = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: m,
            sliceSerialize: g,
            now: y,
            defineSkip: w,
            write: f,
        };
    let d = n.tokenize.call(s, u);
    return n.resolveAll && l.push(n), s;
    function f(G) {
        return (
            (o = Un(o, G)), z(), o[o.length - 1] !== null ? [] : (M(n, 0), (s.events = da(l, s.events, s)), s.events)
        );
    }
    function g(G, X) {
        return i3(m(G), X);
    }
    function m(G) {
        return r3(o, G);
    }
    function y() {
        const { line: G, column: X, offset: oe, _index: Pe, _bufferIndex: fe } = r;
        return { line: G, column: X, offset: oe, _index: Pe, _bufferIndex: fe };
    }
    function w(G) {
        (i[G.line] = G.column), L();
    }
    function z() {
        let G;
        for (; r._index < o.length; ) {
            const X = o[r._index];
            if (typeof X == "string")
                for (
                    G = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                    r._index === G && r._bufferIndex < X.length;

                )
                    v(X.charCodeAt(r._bufferIndex));
            else v(X);
        }
    }
    function v(G) {
        d = d(G);
    }
    function k(G) {
        ne(G) ? (r.line++, (r.column = 1), (r.offset += G === -3 ? 2 : 1), L()) : G !== -1 && (r.column++, r.offset++),
            r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++, r._bufferIndex === o[r._index].length && ((r._bufferIndex = -1), r._index++)),
            (s.previous = G);
    }
    function S(G, X) {
        const oe = X || {};
        return (oe.type = G), (oe.start = y()), s.events.push(["enter", oe, s]), a.push(oe), oe;
    }
    function R(G) {
        const X = a.pop();
        return (X.end = y()), s.events.push(["exit", X, s]), X;
    }
    function O(G, X) {
        M(G, X.from);
    }
    function E(G, X) {
        X.restore();
    }
    function F(G, X) {
        return oe;
        function oe(Pe, fe, He) {
            let De, Q, ee, b;
            return Array.isArray(Pe) ? Se(Pe) : "tokenize" in Pe ? Se([Pe]) : me(Pe);
            function me(Le) {
                return Mn;
                function Mn(ot) {
                    const ht = ot !== null && Le[ot],
                        It = ot !== null && Le.null,
                        _r = [
                            ...(Array.isArray(ht) ? ht : ht ? [ht] : []),
                            ...(Array.isArray(It) ? It : It ? [It] : []),
                        ];
                    return Se(_r)(ot);
                }
            }
            function Se(Le) {
                return (De = Le), (Q = 0), Le.length === 0 ? He : T(Le[Q]);
            }
            function T(Le) {
                return Mn;
                function Mn(ot) {
                    return (
                        (b = q()),
                        (ee = Le),
                        Le.partial || (s.currentConstruct = Le),
                        Le.name && s.parser.constructs.disable.null.includes(Le.name)
                            ? Tn()
                            : Le.tokenize.call(X ? Object.assign(Object.create(s), X) : s, u, Fe, Tn)(ot)
                    );
                }
            }
            function Fe(Le) {
                return G(ee, b), fe;
            }
            function Tn(Le) {
                return b.restore(), ++Q < De.length ? T(De[Q]) : He;
            }
        }
    }
    function M(G, X) {
        G.resolveAll && !l.includes(G) && l.push(G),
            G.resolve && Wn(s.events, X, s.events.length - X, G.resolve(s.events.slice(X), s)),
            G.resolveTo && (s.events = G.resolveTo(s.events, s));
    }
    function q() {
        const G = y(),
            X = s.previous,
            oe = s.currentConstruct,
            Pe = s.events.length,
            fe = Array.from(a);
        return { restore: He, from: Pe };
        function He() {
            (r = G), (s.previous = X), (s.currentConstruct = oe), (s.events.length = Pe), (a = fe), L();
        }
    }
    function L() {
        r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
    }
}
function r3(e, n) {
    const t = n.start._index,
        r = n.start._bufferIndex,
        i = n.end._index,
        l = n.end._bufferIndex;
    let o;
    if (t === i) o = [e[t].slice(r, l)];
    else {
        if (((o = e.slice(t, i)), r > -1)) {
            const a = o[0];
            typeof a == "string" ? (o[0] = a.slice(r)) : o.shift();
        }
        l > 0 && o.push(e[i].slice(0, l));
    }
    return o;
}
function i3(e, n) {
    let t = -1;
    const r = [];
    let i;
    for (; ++t < e.length; ) {
        const l = e[t];
        let o;
        if (typeof l == "string") o = l;
        else
            switch (l) {
                case -5: {
                    o = "\r";
                    break;
                }
                case -4: {
                    o = `
`;
                    break;
                }
                case -3: {
                    o = `\r
`;
                    break;
                }
                case -2: {
                    o = n ? " " : "   ";
                    break;
                }
                case -1: {
                    if (!n && i) continue;
                    o = " ";
                    break;
                }
                default:
                    o = String.fromCharCode(l);
            }
        (i = l === -2), r.push(o);
    }
    return r.join("");
}
const l3 = {
        42: xn,
        43: xn,
        45: xn,
        48: xn,
        49: xn,
        50: xn,
        51: xn,
        52: xn,
        53: xn,
        54: xn,
        55: xn,
        56: xn,
        57: xn,
        62: qg,
    },
    o3 = { 91: aS },
    a3 = { [-2]: wu, [-1]: wu, 32: wu },
    u3 = { 35: dS, 42: ko, 45: [Bd, ko], 60: vS, 61: Bd, 95: ko, 96: $d, 126: $d },
    s3 = { 38: Kg, 92: Xg },
    c3 = {
        [-5]: xu,
        [-4]: xu,
        [-3]: xu,
        33: AS,
        38: Kg,
        42: Os,
        60: [M5, CS],
        91: MS,
        92: [fS, Xg],
        93: Hc,
        95: Os,
        96: X5,
    },
    f3 = { null: [Os, ZS] },
    p3 = { null: [42, 95] },
    d3 = { null: [] },
    h3 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                attentionMarkers: p3,
                contentInitial: o3,
                disable: d3,
                document: l3,
                flow: u3,
                flowInitial: a3,
                insideSpan: f3,
                string: s3,
                text: c3,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    );
function m3(e) {
    const t = Gg([h3, ...((e || {}).extensions || [])]),
        r = {
            defined: [],
            lazy: {},
            constructs: t,
            content: i(I5),
            document: i(R5),
            flow: i(XS),
            string: i(JS),
            text: i(e3),
        };
    return r;
    function i(l) {
        return o;
        function o(a) {
            return t3(r, l, a);
        }
    }
}
function g3(e) {
    for (; !Zg(e); );
    return e;
}
const Ud = /[\0\t\n\r]/g;
function v3() {
    let e = 1,
        n = "",
        t = !0,
        r;
    return i;
    function i(l, o, a) {
        const u = [];
        let s, d, f, g, m;
        for (
            l = n + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)),
                f = 0,
                n = "",
                t && (l.charCodeAt(0) === 65279 && f++, (t = void 0));
            f < l.length;

        ) {
            if (
                ((Ud.lastIndex = f),
                (s = Ud.exec(l)),
                (g = s && s.index !== void 0 ? s.index : l.length),
                (m = l.charCodeAt(g)),
                !s)
            ) {
                n = l.slice(f);
                break;
            }
            if (m === 10 && f === g && r) u.push(-3), (r = void 0);
            else
                switch ((r && (u.push(-5), (r = void 0)), f < g && (u.push(l.slice(f, g)), (e += g - f)), m)) {
                    case 0: {
                        u.push(65533), e++;
                        break;
                    }
                    case 9: {
                        for (d = Math.ceil(e / 4) * 4, u.push(-2); e++ < d; ) u.push(-1);
                        break;
                    }
                    case 10: {
                        u.push(-4), (e = 1);
                        break;
                    }
                    default:
                        (r = !0), (e = 1);
                }
            f = g + 1;
        }
        return a && (r && u.push(-5), n && u.push(n), u.push(null)), u;
    }
}
const y3 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function k3(e) {
    return e.replace(y3, w3);
}
function w3(e, n, t) {
    if (n) return n;
    if (t.charCodeAt(0) === 35) {
        const i = t.charCodeAt(1),
            l = i === 120 || i === 88;
        return Yg(t.slice(l ? 2 : 1), l ? 16 : 10);
    }
    return Uc(t) || e;
}
const i0 = {}.hasOwnProperty;
function x3(e, n, t) {
    return (
        typeof n != "string" && ((t = n), (n = void 0)),
        S3(t)(
            g3(
                m3(t)
                    .document()
                    .write(v3()(e, n, !0))
            )
        )
    );
}
function S3(e) {
    const n = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: l(bl),
            autolinkProtocol: q,
            autolinkEmail: q,
            atxHeading: l(wl),
            blockQuote: l(It),
            characterEscape: q,
            characterReference: q,
            codeFenced: l(_r),
            codeFencedFenceInfo: o,
            codeFencedFenceMeta: o,
            codeIndented: l(_r, o),
            codeText: l(va, o),
            codeTextData: q,
            data: q,
            codeFlowValue: q,
            definition: l(ya),
            definitionDestinationString: o,
            definitionLabelString: o,
            definitionTitleString: o,
            emphasis: l(vi),
            hardBreakEscape: l(xl),
            hardBreakTrailing: l(xl),
            htmlFlow: l(Sl, o),
            htmlFlowData: q,
            htmlText: l(Sl, o),
            htmlTextData: q,
            image: l(yi),
            label: o,
            link: l(bl),
            listItem: l(Cl),
            listItemValue: g,
            listOrdered: l(ki, f),
            listUnordered: l(ki),
            paragraph: l(El),
            reference: T,
            referenceString: o,
            resourceDestinationString: o,
            resourceTitleString: o,
            setextHeading: l(wl),
            strong: l(_l),
            thematicBreak: l(Pl),
        },
        exit: {
            atxHeading: u(),
            atxHeadingSequence: O,
            autolink: u(),
            autolinkEmail: ht,
            autolinkProtocol: ot,
            blockQuote: u(),
            characterEscapeValue: L,
            characterReferenceMarkerHexadecimal: Tn,
            characterReferenceMarkerNumeric: Tn,
            characterReferenceValue: Le,
            characterReference: Mn,
            codeFenced: u(z),
            codeFencedFence: w,
            codeFencedFenceInfo: m,
            codeFencedFenceMeta: y,
            codeFlowValue: L,
            codeIndented: u(v),
            codeText: u(fe),
            codeTextData: L,
            data: L,
            definition: u(),
            definitionDestinationString: R,
            definitionLabelString: k,
            definitionTitleString: S,
            emphasis: u(),
            hardBreakEscape: u(X),
            hardBreakTrailing: u(X),
            htmlFlow: u(oe),
            htmlFlowData: L,
            htmlText: u(Pe),
            htmlTextData: L,
            image: u(De),
            label: ee,
            labelText: Q,
            lineEnding: G,
            link: u(He),
            listItem: u(),
            listOrdered: u(),
            listUnordered: u(),
            paragraph: u(),
            referenceString: Fe,
            resourceDestinationString: b,
            resourceTitleString: me,
            resource: Se,
            setextHeading: u(M),
            setextHeadingLineSequence: F,
            setextHeadingText: E,
            strong: u(),
            thematicBreak: u(),
        },
    };
    l0(n, (e || {}).mdastExtensions || []);
    const t = {};
    return r;
    function r(A) {
        let W = { type: "root", children: [] };
        const re = { stack: [W], tokenStack: [], config: n, enter: a, exit: s, buffer: o, resume: d, data: t },
            se = [];
        let be = -1;
        for (; ++be < A.length; )
            if (A[be][1].type === "listOrdered" || A[be][1].type === "listUnordered")
                if (A[be][0] === "enter") se.push(be);
                else {
                    const Pn = se.pop();
                    be = i(A, Pn, be);
                }
        for (be = -1; ++be < A.length; ) {
            const Pn = n[A[be][0]];
            i0.call(Pn, A[be][1].type) &&
                Pn[A[be][1].type].call(Object.assign({ sliceSerialize: A[be][2].sliceSerialize }, re), A[be][1]);
        }
        if (re.tokenStack.length > 0) {
            const Pn = re.tokenStack[re.tokenStack.length - 1];
            (Pn[1] || Hd).call(re, void 0, Pn[0]);
        }
        for (
            W.position = {
                start: Mt(A.length > 0 ? A[0][1].start : { line: 1, column: 1, offset: 0 }),
                end: Mt(A.length > 0 ? A[A.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
            },
                be = -1;
            ++be < n.transforms.length;

        )
            W = n.transforms[be](W) || W;
        return W;
    }
    function i(A, W, re) {
        let se = W - 1,
            be = -1,
            Pn = !1,
            mt,
            Fn,
            Nt,
            ir;
        for (; ++se <= re; ) {
            const hn = A[se];
            switch (hn[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote": {
                    hn[0] === "enter" ? be++ : be--, (ir = void 0);
                    break;
                }
                case "lineEndingBlank": {
                    hn[0] === "enter" && (mt && !ir && !be && !Nt && (Nt = se), (ir = void 0));
                    break;
                }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    ir = void 0;
            }
            if (
                (!be && hn[0] === "enter" && hn[1].type === "listItemPrefix") ||
                (be === -1 && hn[0] === "exit" && (hn[1].type === "listUnordered" || hn[1].type === "listOrdered"))
            ) {
                if (mt) {
                    let gt = se;
                    for (Fn = void 0; gt--; ) {
                        const $n = A[gt];
                        if ($n[1].type === "lineEnding" || $n[1].type === "lineEndingBlank") {
                            if ($n[0] === "exit") continue;
                            Fn && ((A[Fn][1].type = "lineEndingBlank"), (Pn = !0)),
                                ($n[1].type = "lineEnding"),
                                (Fn = gt);
                        } else if (
                            !(
                                $n[1].type === "linePrefix" ||
                                $n[1].type === "blockQuotePrefix" ||
                                $n[1].type === "blockQuotePrefixWhitespace" ||
                                $n[1].type === "blockQuoteMarker" ||
                                $n[1].type === "listItemIndent"
                            )
                        )
                            break;
                    }
                    Nt && (!Fn || Nt < Fn) && (mt._spread = !0),
                        (mt.end = Object.assign({}, Fn ? A[Fn][1].start : hn[1].end)),
                        A.splice(Fn || se, 0, ["exit", mt, hn[2]]),
                        se++,
                        re++;
                }
                if (hn[1].type === "listItemPrefix") {
                    const gt = { type: "listItem", _spread: !1, start: Object.assign({}, hn[1].start), end: void 0 };
                    (mt = gt), A.splice(se, 0, ["enter", gt, hn[2]]), se++, re++, (Nt = void 0), (ir = !0);
                }
            }
        }
        return (A[W][1]._spread = Pn), re;
    }
    function l(A, W) {
        return re;
        function re(se) {
            a.call(this, A(se), se), W && W.call(this, se);
        }
    }
    function o() {
        this.stack.push({ type: "fragment", children: [] });
    }
    function a(A, W, re) {
        this.stack[this.stack.length - 1].children.push(A),
            this.stack.push(A),
            this.tokenStack.push([W, re]),
            (A.position = { start: Mt(W.start), end: void 0 });
    }
    function u(A) {
        return W;
        function W(re) {
            A && A.call(this, re), s.call(this, re);
        }
    }
    function s(A, W) {
        const re = this.stack.pop(),
            se = this.tokenStack.pop();
        if (se) se[0].type !== A.type && (W ? W.call(this, A, se[0]) : (se[1] || Hd).call(this, A, se[0]));
        else
            throw new Error(
                "Cannot close `" + A.type + "` (" + Qi({ start: A.start, end: A.end }) + "): it’s not open"
            );
        re.position.end = Mt(A.end);
    }
    function d() {
        return Bc(this.stack.pop());
    }
    function f() {
        this.data.expectingFirstListItemValue = !0;
    }
    function g(A) {
        if (this.data.expectingFirstListItemValue) {
            const W = this.stack[this.stack.length - 2];
            (W.start = Number.parseInt(this.sliceSerialize(A), 10)), (this.data.expectingFirstListItemValue = void 0);
        }
    }
    function m() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.lang = A;
    }
    function y() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.meta = A;
    }
    function w() {
        this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
    }
    function z() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        (W.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), (this.data.flowCodeInside = void 0);
    }
    function v() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = A.replace(/(\r?\n|\r)$/g, "");
    }
    function k(A) {
        const W = this.resume(),
            re = this.stack[this.stack.length - 1];
        (re.label = W), (re.identifier = it(this.sliceSerialize(A)).toLowerCase());
    }
    function S() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.title = A;
    }
    function R() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.url = A;
    }
    function O(A) {
        const W = this.stack[this.stack.length - 1];
        if (!W.depth) {
            const re = this.sliceSerialize(A).length;
            W.depth = re;
        }
    }
    function E() {
        this.data.setextHeadingSlurpLineEnding = !0;
    }
    function F(A) {
        const W = this.stack[this.stack.length - 1];
        W.depth = this.sliceSerialize(A).codePointAt(0) === 61 ? 1 : 2;
    }
    function M() {
        this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function q(A) {
        const re = this.stack[this.stack.length - 1].children;
        let se = re[re.length - 1];
        (!se || se.type !== "text") && ((se = Tl()), (se.position = { start: Mt(A.start), end: void 0 }), re.push(se)),
            this.stack.push(se);
    }
    function L(A) {
        const W = this.stack.pop();
        (W.value += this.sliceSerialize(A)), (W.position.end = Mt(A.end));
    }
    function G(A) {
        const W = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const re = W.children[W.children.length - 1];
            (re.position.end = Mt(A.end)), (this.data.atHardBreak = void 0);
            return;
        }
        !this.data.setextHeadingSlurpLineEnding &&
            n.canContainEols.includes(W.type) &&
            (q.call(this, A), L.call(this, A));
    }
    function X() {
        this.data.atHardBreak = !0;
    }
    function oe() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = A;
    }
    function Pe() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = A;
    }
    function fe() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = A;
    }
    function He() {
        const A = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const W = this.data.referenceType || "shortcut";
            (A.type += "Reference"), (A.referenceType = W), delete A.url, delete A.title;
        } else delete A.identifier, delete A.label;
        this.data.referenceType = void 0;
    }
    function De() {
        const A = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const W = this.data.referenceType || "shortcut";
            (A.type += "Reference"), (A.referenceType = W), delete A.url, delete A.title;
        } else delete A.identifier, delete A.label;
        this.data.referenceType = void 0;
    }
    function Q(A) {
        const W = this.sliceSerialize(A),
            re = this.stack[this.stack.length - 2];
        (re.label = k3(W)), (re.identifier = it(W).toLowerCase());
    }
    function ee() {
        const A = this.stack[this.stack.length - 1],
            W = this.resume(),
            re = this.stack[this.stack.length - 1];
        if (((this.data.inReference = !0), re.type === "link")) {
            const se = A.children;
            re.children = se;
        } else re.alt = W;
    }
    function b() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.url = A;
    }
    function me() {
        const A = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.title = A;
    }
    function Se() {
        this.data.inReference = void 0;
    }
    function T() {
        this.data.referenceType = "collapsed";
    }
    function Fe(A) {
        const W = this.resume(),
            re = this.stack[this.stack.length - 1];
        (re.label = W), (re.identifier = it(this.sliceSerialize(A)).toLowerCase()), (this.data.referenceType = "full");
    }
    function Tn(A) {
        this.data.characterReferenceType = A.type;
    }
    function Le(A) {
        const W = this.sliceSerialize(A),
            re = this.data.characterReferenceType;
        let se;
        re
            ? ((se = Yg(W, re === "characterReferenceMarkerNumeric" ? 10 : 16)),
              (this.data.characterReferenceType = void 0))
            : (se = Uc(W));
        const be = this.stack[this.stack.length - 1];
        be.value += se;
    }
    function Mn(A) {
        const W = this.stack.pop();
        W.position.end = Mt(A.end);
    }
    function ot(A) {
        L.call(this, A);
        const W = this.stack[this.stack.length - 1];
        W.url = this.sliceSerialize(A);
    }
    function ht(A) {
        L.call(this, A);
        const W = this.stack[this.stack.length - 1];
        W.url = "mailto:" + this.sliceSerialize(A);
    }
    function It() {
        return { type: "blockquote", children: [] };
    }
    function _r() {
        return { type: "code", lang: null, meta: null, value: "" };
    }
    function va() {
        return { type: "inlineCode", value: "" };
    }
    function ya() {
        return { type: "definition", identifier: "", label: null, title: null, url: "" };
    }
    function vi() {
        return { type: "emphasis", children: [] };
    }
    function wl() {
        return { type: "heading", depth: 0, children: [] };
    }
    function xl() {
        return { type: "break" };
    }
    function Sl() {
        return { type: "html", value: "" };
    }
    function yi() {
        return { type: "image", title: null, url: "", alt: null };
    }
    function bl() {
        return { type: "link", title: null, url: "", children: [] };
    }
    function ki(A) {
        return { type: "list", ordered: A.type === "listOrdered", start: null, spread: A._spread, children: [] };
    }
    function Cl(A) {
        return { type: "listItem", spread: A._spread, checked: null, children: [] };
    }
    function El() {
        return { type: "paragraph", children: [] };
    }
    function _l() {
        return { type: "strong", children: [] };
    }
    function Tl() {
        return { type: "text", value: "" };
    }
    function Pl() {
        return { type: "thematicBreak" };
    }
}
function Mt(e) {
    return { line: e.line, column: e.column, offset: e.offset };
}
function l0(e, n) {
    let t = -1;
    for (; ++t < n.length; ) {
        const r = n[t];
        Array.isArray(r) ? l0(e, r) : b3(e, r);
    }
}
function b3(e, n) {
    let t;
    for (t in n)
        if (i0.call(n, t))
            switch (t) {
                case "canContainEols": {
                    const r = n[t];
                    r && e[t].push(...r);
                    break;
                }
                case "transforms": {
                    const r = n[t];
                    r && e[t].push(...r);
                    break;
                }
                case "enter":
                case "exit": {
                    const r = n[t];
                    r && Object.assign(e[t], r);
                    break;
                }
            }
}
function Hd(e, n) {
    throw e
        ? new Error(
              "Cannot close `" +
                  e.type +
                  "` (" +
                  Qi({ start: e.start, end: e.end }) +
                  "): a different token (`" +
                  n.type +
                  "`, " +
                  Qi({ start: n.start, end: n.end }) +
                  ") is open"
          )
        : new Error(
              "Cannot close document, a token (`" +
                  n.type +
                  "`, " +
                  Qi({ start: n.start, end: n.end }) +
                  ") is still open"
          );
}
function C3(e) {
    const n = this;
    n.parser = t;
    function t(r) {
        return x3(r, {
            ...n.data("settings"),
            ...e,
            extensions: n.data("micromarkExtensions") || [],
            mdastExtensions: n.data("fromMarkdownExtensions") || [],
        });
    }
}
function E3(e, n) {
    const t = { type: "element", tagName: "blockquote", properties: {}, children: e.wrap(e.all(n), !0) };
    return e.patch(n, t), e.applyData(n, t);
}
function _3(e, n) {
    const t = { type: "element", tagName: "br", properties: {}, children: [] };
    return (
        e.patch(n, t),
        [
            e.applyData(n, t),
            {
                type: "text",
                value: `
`,
            },
        ]
    );
}
function T3(e, n) {
    const t = n.value
            ? n.value +
              `
`
            : "",
        r = {};
    n.lang && (r.className = ["language-" + n.lang]);
    let i = { type: "element", tagName: "code", properties: r, children: [{ type: "text", value: t }] };
    return (
        n.meta && (i.data = { meta: n.meta }),
        e.patch(n, i),
        (i = e.applyData(n, i)),
        (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
        e.patch(n, i),
        i
    );
}
function P3(e, n) {
    const t = { type: "element", tagName: "del", properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
function L3(e, n) {
    const t = { type: "element", tagName: "em", properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
function I3(e, n) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        r = String(n.identifier).toUpperCase(),
        i = gi(r.toLowerCase()),
        l = e.footnoteOrder.indexOf(r);
    let o,
        a = e.footnoteCounts.get(r);
    a === void 0 ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length)) : (o = l + 1),
        (a += 1),
        e.footnoteCounts.set(r, a);
    const u = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + t + "fn-" + i,
            id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"],
        },
        children: [{ type: "text", value: String(o) }],
    };
    e.patch(n, u);
    const s = { type: "element", tagName: "sup", properties: {}, children: [u] };
    return e.patch(n, s), e.applyData(n, s);
}
function N3(e, n) {
    const t = { type: "element", tagName: "h" + n.depth, properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
function R3(e, n) {
    if (e.options.allowDangerousHtml) {
        const t = { type: "raw", value: n.value };
        return e.patch(n, t), e.applyData(n, t);
    }
}
function o0(e, n) {
    const t = n.referenceType;
    let r = "]";
    if (
        (t === "collapsed" ? (r += "[]") : t === "full" && (r += "[" + (n.label || n.identifier) + "]"),
        n.type === "imageReference")
    )
        return [{ type: "text", value: "![" + n.alt + r }];
    const i = e.all(n),
        l = i[0];
    l && l.type === "text" ? (l.value = "[" + l.value) : i.unshift({ type: "text", value: "[" });
    const o = i[i.length - 1];
    return o && o.type === "text" ? (o.value += r) : i.push({ type: "text", value: r }), i;
}
function z3(e, n) {
    const t = String(n.identifier).toUpperCase(),
        r = e.definitionById.get(t);
    if (!r) return o0(e, n);
    const i = { src: gi(r.url || ""), alt: n.alt };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = { type: "element", tagName: "img", properties: i, children: [] };
    return e.patch(n, l), e.applyData(n, l);
}
function O3(e, n) {
    const t = { src: gi(n.url) };
    n.alt !== null && n.alt !== void 0 && (t.alt = n.alt),
        n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = { type: "element", tagName: "img", properties: t, children: [] };
    return e.patch(n, r), e.applyData(n, r);
}
function A3(e, n) {
    const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
    e.patch(n, t);
    const r = { type: "element", tagName: "code", properties: {}, children: [t] };
    return e.patch(n, r), e.applyData(n, r);
}
function D3(e, n) {
    const t = String(n.identifier).toUpperCase(),
        r = e.definitionById.get(t);
    if (!r) return o0(e, n);
    const i = { href: gi(r.url || "") };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = { type: "element", tagName: "a", properties: i, children: e.all(n) };
    return e.patch(n, l), e.applyData(n, l);
}
function M3(e, n) {
    const t = { href: gi(n.url) };
    n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = { type: "element", tagName: "a", properties: t, children: e.all(n) };
    return e.patch(n, r), e.applyData(n, r);
}
function F3(e, n, t) {
    const r = e.all(n),
        i = t ? $3(t) : a0(n),
        l = {},
        o = [];
    if (typeof n.checked == "boolean") {
        const d = r[0];
        let f;
        d && d.type === "element" && d.tagName === "p"
            ? (f = d)
            : ((f = { type: "element", tagName: "p", properties: {}, children: [] }), r.unshift(f)),
            f.children.length > 0 && f.children.unshift({ type: "text", value: " " }),
            f.children.unshift({
                type: "element",
                tagName: "input",
                properties: { type: "checkbox", checked: n.checked, disabled: !0 },
                children: [],
            }),
            (l.className = ["task-list-item"]);
    }
    let a = -1;
    for (; ++a < r.length; ) {
        const d = r[a];
        (i || a !== 0 || d.type !== "element" || d.tagName !== "p") &&
            o.push({
                type: "text",
                value: `
`,
            }),
            d.type === "element" && d.tagName === "p" && !i ? o.push(...d.children) : o.push(d);
    }
    const u = r[r.length - 1];
    u &&
        (i || u.type !== "element" || u.tagName !== "p") &&
        o.push({
            type: "text",
            value: `
`,
        });
    const s = { type: "element", tagName: "li", properties: l, children: o };
    return e.patch(n, s), e.applyData(n, s);
}
function $3(e) {
    let n = !1;
    if (e.type === "list") {
        n = e.spread || !1;
        const t = e.children;
        let r = -1;
        for (; !n && ++r < t.length; ) n = a0(t[r]);
    }
    return n;
}
function a0(e) {
    const n = e.spread;
    return n ?? e.children.length > 1;
}
function j3(e, n) {
    const t = {},
        r = e.all(n);
    let i = -1;
    for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
        const o = r[i];
        if (
            o.type === "element" &&
            o.tagName === "li" &&
            o.properties &&
            Array.isArray(o.properties.className) &&
            o.properties.className.includes("task-list-item")
        ) {
            t.className = ["contains-task-list"];
            break;
        }
    }
    const l = { type: "element", tagName: n.ordered ? "ol" : "ul", properties: t, children: e.wrap(r, !0) };
    return e.patch(n, l), e.applyData(n, l);
}
function B3(e, n) {
    const t = { type: "element", tagName: "p", properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
function U3(e, n) {
    const t = { type: "root", children: e.wrap(e.all(n)) };
    return e.patch(n, t), e.applyData(n, t);
}
function H3(e, n) {
    const t = { type: "element", tagName: "strong", properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
function V3(e, n) {
    const t = e.all(n),
        r = t.shift(),
        i = [];
    if (r) {
        const o = { type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0) };
        e.patch(n.children[0], o), i.push(o);
    }
    if (t.length > 0) {
        const o = { type: "element", tagName: "tbody", properties: {}, children: e.wrap(t, !0) },
            a = Mc(n.children[1]),
            u = jg(n.children[n.children.length - 1]);
        a && u && (o.position = { start: a, end: u }), i.push(o);
    }
    const l = { type: "element", tagName: "table", properties: {}, children: e.wrap(i, !0) };
    return e.patch(n, l), e.applyData(n, l);
}
function W3(e, n, t) {
    const r = t ? t.children : void 0,
        l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td",
        o = t && t.type === "table" ? t.align : void 0,
        a = o ? o.length : n.children.length;
    let u = -1;
    const s = [];
    for (; ++u < a; ) {
        const f = n.children[u],
            g = {},
            m = o ? o[u] : void 0;
        m && (g.align = m);
        let y = { type: "element", tagName: l, properties: g, children: [] };
        f && ((y.children = e.all(f)), e.patch(f, y), (y = e.applyData(f, y))), s.push(y);
    }
    const d = { type: "element", tagName: "tr", properties: {}, children: e.wrap(s, !0) };
    return e.patch(n, d), e.applyData(n, d);
}
function Q3(e, n) {
    const t = { type: "element", tagName: "td", properties: {}, children: e.all(n) };
    return e.patch(n, t), e.applyData(n, t);
}
const Vd = 9,
    Wd = 32;
function G3(e) {
    const n = String(e),
        t = /\r?\n|\r/g;
    let r = t.exec(n),
        i = 0;
    const l = [];
    for (; r; ) l.push(Qd(n.slice(i, r.index), i > 0, !0), r[0]), (i = r.index + r[0].length), (r = t.exec(n));
    return l.push(Qd(n.slice(i), i > 0, !1)), l.join("");
}
function Qd(e, n, t) {
    let r = 0,
        i = e.length;
    if (n) {
        let l = e.codePointAt(r);
        for (; l === Vd || l === Wd; ) r++, (l = e.codePointAt(r));
    }
    if (t) {
        let l = e.codePointAt(i - 1);
        for (; l === Vd || l === Wd; ) i--, (l = e.codePointAt(i - 1));
    }
    return i > r ? e.slice(r, i) : "";
}
function Y3(e, n) {
    const t = { type: "text", value: G3(String(n.value)) };
    return e.patch(n, t), e.applyData(n, t);
}
function q3(e, n) {
    const t = { type: "element", tagName: "hr", properties: {}, children: [] };
    return e.patch(n, t), e.applyData(n, t);
}
const X3 = {
    blockquote: E3,
    break: _3,
    code: T3,
    delete: P3,
    emphasis: L3,
    footnoteReference: I3,
    heading: N3,
    html: R3,
    imageReference: z3,
    image: O3,
    inlineCode: A3,
    linkReference: D3,
    link: M3,
    listItem: F3,
    list: j3,
    paragraph: B3,
    root: U3,
    strong: H3,
    table: V3,
    tableCell: Q3,
    tableRow: W3,
    text: Y3,
    thematicBreak: q3,
    toml: no,
    yaml: no,
    definition: no,
    footnoteDefinition: no,
};
function no() {}
const u0 = -1,
    ha = 0,
    Go = 1,
    Yo = 2,
    Vc = 3,
    Wc = 4,
    Qc = 5,
    Gc = 6,
    s0 = 7,
    c0 = 8,
    Gd = typeof self == "object" ? self : globalThis,
    K3 = (e, n) => {
        const t = (i, l) => (e.set(l, i), i),
            r = (i) => {
                if (e.has(i)) return e.get(i);
                const [l, o] = n[i];
                switch (l) {
                    case ha:
                    case u0:
                        return t(o, i);
                    case Go: {
                        const a = t([], i);
                        for (const u of o) a.push(r(u));
                        return a;
                    }
                    case Yo: {
                        const a = t({}, i);
                        for (const [u, s] of o) a[r(u)] = r(s);
                        return a;
                    }
                    case Vc:
                        return t(new Date(o), i);
                    case Wc: {
                        const { source: a, flags: u } = o;
                        return t(new RegExp(a, u), i);
                    }
                    case Qc: {
                        const a = t(new Map(), i);
                        for (const [u, s] of o) a.set(r(u), r(s));
                        return a;
                    }
                    case Gc: {
                        const a = t(new Set(), i);
                        for (const u of o) a.add(r(u));
                        return a;
                    }
                    case s0: {
                        const { name: a, message: u } = o;
                        return t(new Gd[a](u), i);
                    }
                    case c0:
                        return t(BigInt(o), i);
                    case "BigInt":
                        return t(Object(BigInt(o)), i);
                }
                return t(new Gd[l](o), i);
            };
        return r;
    },
    Yd = (e) => K3(new Map(), e)(0),
    Fr = "",
    { toString: Z3 } = {},
    { keys: J3 } = Object,
    Ri = (e) => {
        const n = typeof e;
        if (n !== "object" || !e) return [ha, n];
        const t = Z3.call(e).slice(8, -1);
        switch (t) {
            case "Array":
                return [Go, Fr];
            case "Object":
                return [Yo, Fr];
            case "Date":
                return [Vc, Fr];
            case "RegExp":
                return [Wc, Fr];
            case "Map":
                return [Qc, Fr];
            case "Set":
                return [Gc, Fr];
        }
        return t.includes("Array") ? [Go, t] : t.includes("Error") ? [s0, t] : [Yo, t];
    },
    to = ([e, n]) => e === ha && (n === "function" || n === "symbol"),
    eb = (e, n, t, r) => {
        const i = (o, a) => {
                const u = r.push(o) - 1;
                return t.set(a, u), u;
            },
            l = (o) => {
                if (t.has(o)) return t.get(o);
                let [a, u] = Ri(o);
                switch (a) {
                    case ha: {
                        let d = o;
                        switch (u) {
                            case "bigint":
                                (a = c0), (d = o.toString());
                                break;
                            case "function":
                            case "symbol":
                                if (e) throw new TypeError("unable to serialize " + u);
                                d = null;
                                break;
                            case "undefined":
                                return i([u0], o);
                        }
                        return i([a, d], o);
                    }
                    case Go: {
                        if (u) return i([u, [...o]], o);
                        const d = [],
                            f = i([a, d], o);
                        for (const g of o) d.push(l(g));
                        return f;
                    }
                    case Yo: {
                        if (u)
                            switch (u) {
                                case "BigInt":
                                    return i([u, o.toString()], o);
                                case "Boolean":
                                case "Number":
                                case "String":
                                    return i([u, o.valueOf()], o);
                            }
                        if (n && "toJSON" in o) return l(o.toJSON());
                        const d = [],
                            f = i([a, d], o);
                        for (const g of J3(o)) (e || !to(Ri(o[g]))) && d.push([l(g), l(o[g])]);
                        return f;
                    }
                    case Vc:
                        return i([a, o.toISOString()], o);
                    case Wc: {
                        const { source: d, flags: f } = o;
                        return i([a, { source: d, flags: f }], o);
                    }
                    case Qc: {
                        const d = [],
                            f = i([a, d], o);
                        for (const [g, m] of o) (e || !(to(Ri(g)) || to(Ri(m)))) && d.push([l(g), l(m)]);
                        return f;
                    }
                    case Gc: {
                        const d = [],
                            f = i([a, d], o);
                        for (const g of o) (e || !to(Ri(g))) && d.push(l(g));
                        return f;
                    }
                }
                const { message: s } = o;
                return i([a, { name: u, message: s }], o);
            };
        return l;
    },
    qd = (e, { json: n, lossy: t } = {}) => {
        const r = [];
        return eb(!(n || t), !!n, new Map(), r)(e), r;
    },
    qo =
        typeof structuredClone == "function"
            ? (e, n) => (n && ("json" in n || "lossy" in n) ? Yd(qd(e, n)) : structuredClone(e))
            : (e, n) => Yd(qd(e, n));
function nb(e, n) {
    const t = [{ type: "text", value: "↩" }];
    return (
        n > 1 &&
            t.push({ type: "element", tagName: "sup", properties: {}, children: [{ type: "text", value: String(n) }] }),
        t
    );
}
function tb(e, n) {
    return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function rb(e) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        t = e.options.footnoteBackContent || nb,
        r = e.options.footnoteBackLabel || tb,
        i = e.options.footnoteLabel || "Footnotes",
        l = e.options.footnoteLabelTagName || "h2",
        o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
        a = [];
    let u = -1;
    for (; ++u < e.footnoteOrder.length; ) {
        const s = e.footnoteById.get(e.footnoteOrder[u]);
        if (!s) continue;
        const d = e.all(s),
            f = String(s.identifier).toUpperCase(),
            g = gi(f.toLowerCase());
        let m = 0;
        const y = [],
            w = e.footnoteCounts.get(f);
        for (; w !== void 0 && ++m <= w; ) {
            y.length > 0 && y.push({ type: "text", value: " " });
            let k = typeof t == "string" ? t : t(u, m);
            typeof k == "string" && (k = { type: "text", value: k }),
                y.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                        href: "#" + n + "fnref-" + g + (m > 1 ? "-" + m : ""),
                        dataFootnoteBackref: "",
                        ariaLabel: typeof r == "string" ? r : r(u, m),
                        className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(k) ? k : [k],
                });
        }
        const z = d[d.length - 1];
        if (z && z.type === "element" && z.tagName === "p") {
            const k = z.children[z.children.length - 1];
            k && k.type === "text" ? (k.value += " ") : z.children.push({ type: "text", value: " " }),
                z.children.push(...y);
        } else d.push(...y);
        const v = { type: "element", tagName: "li", properties: { id: n + "fn-" + g }, children: e.wrap(d, !0) };
        e.patch(s, v), a.push(v);
    }
    if (a.length !== 0)
        return {
            type: "element",
            tagName: "section",
            properties: { dataFootnotes: !0, className: ["footnotes"] },
            children: [
                {
                    type: "element",
                    tagName: l,
                    properties: { ...qo(o), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                },
                {
                    type: "text",
                    value: `
`,
                },
                { type: "element", tagName: "ol", properties: {}, children: e.wrap(a, !0) },
                {
                    type: "text",
                    value: `
`,
                },
            ],
        };
}
const ma = function (e) {
    if (e == null) return ab;
    if (typeof e == "function") return ga(e);
    if (typeof e == "object") return Array.isArray(e) ? ib(e) : lb(e);
    if (typeof e == "string") return ob(e);
    throw new Error("Expected function, string, or object as test");
};
function ib(e) {
    const n = [];
    let t = -1;
    for (; ++t < e.length; ) n[t] = ma(e[t]);
    return ga(r);
    function r(...i) {
        let l = -1;
        for (; ++l < n.length; ) if (n[l].apply(this, i)) return !0;
        return !1;
    }
}
function lb(e) {
    const n = e;
    return ga(t);
    function t(r) {
        const i = r;
        let l;
        for (l in e) if (i[l] !== n[l]) return !1;
        return !0;
    }
}
function ob(e) {
    return ga(n);
    function n(t) {
        return t && t.type === e;
    }
}
function ga(e) {
    return n;
    function n(t, r, i) {
        return !!(ub(t) && e.call(this, t, typeof r == "number" ? r : void 0, i || void 0));
    }
}
function ab() {
    return !0;
}
function ub(e) {
    return e !== null && typeof e == "object" && "type" in e;
}
const f0 = [],
    sb = !0,
    As = !1,
    cb = "skip";
function p0(e, n, t, r) {
    let i;
    typeof n == "function" && typeof t != "function" ? ((r = t), (t = n)) : (i = n);
    const l = ma(i),
        o = r ? -1 : 1;
    a(e, void 0, [])();
    function a(u, s, d) {
        const f = u && typeof u == "object" ? u : {};
        if (typeof f.type == "string") {
            const m = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
            Object.defineProperty(g, "name", { value: "node (" + (u.type + (m ? "<" + m + ">" : "")) + ")" });
        }
        return g;
        function g() {
            let m = f0,
                y,
                w,
                z;
            if ((!n || l(u, s, d[d.length - 1] || void 0)) && ((m = fb(t(u, d))), m[0] === As)) return m;
            if ("children" in u && u.children) {
                const v = u;
                if (v.children && m[0] !== cb)
                    for (w = (r ? v.children.length : -1) + o, z = d.concat(v); w > -1 && w < v.children.length; ) {
                        const k = v.children[w];
                        if (((y = a(k, w, z)()), y[0] === As)) return y;
                        w = typeof y[1] == "number" ? y[1] : w + o;
                    }
            }
            return m;
        }
    }
}
function fb(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [sb, e] : e == null ? f0 : [e];
}
function Yc(e, n, t, r) {
    let i, l, o;
    typeof n == "function" && typeof t != "function" ? ((l = void 0), (o = n), (i = t)) : ((l = n), (o = t), (i = r)),
        p0(e, l, a, i);
    function a(u, s) {
        const d = s[s.length - 1],
            f = d ? d.children.indexOf(u) : void 0;
        return o(u, f, d);
    }
}
const Ds = {}.hasOwnProperty,
    pb = {};
function db(e, n) {
    const t = n || pb,
        r = new Map(),
        i = new Map(),
        l = new Map(),
        o = { ...X3, ...t.handlers },
        a = {
            all: s,
            applyData: mb,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: l,
            footnoteOrder: [],
            handlers: o,
            one: u,
            options: t,
            patch: hb,
            wrap: vb,
        };
    return (
        Yc(e, function (d) {
            if (d.type === "definition" || d.type === "footnoteDefinition") {
                const f = d.type === "definition" ? r : i,
                    g = String(d.identifier).toUpperCase();
                f.has(g) || f.set(g, d);
            }
        }),
        a
    );
    function u(d, f) {
        const g = d.type,
            m = a.handlers[g];
        if (Ds.call(a.handlers, g) && m) return m(a, d, f);
        if (a.options.passThrough && a.options.passThrough.includes(g)) {
            if ("children" in d) {
                const { children: w, ...z } = d,
                    v = qo(z);
                return (v.children = a.all(d)), v;
            }
            return qo(d);
        }
        return (a.options.unknownHandler || gb)(a, d, f);
    }
    function s(d) {
        const f = [];
        if ("children" in d) {
            const g = d.children;
            let m = -1;
            for (; ++m < g.length; ) {
                const y = a.one(g[m], d);
                if (y) {
                    if (
                        m &&
                        g[m - 1].type === "break" &&
                        (!Array.isArray(y) && y.type === "text" && (y.value = Xd(y.value)),
                        !Array.isArray(y) && y.type === "element")
                    ) {
                        const w = y.children[0];
                        w && w.type === "text" && (w.value = Xd(w.value));
                    }
                    Array.isArray(y) ? f.push(...y) : f.push(y);
                }
            }
        }
        return f;
    }
}
function hb(e, n) {
    e.position && (n.position = e5(e));
}
function mb(e, n) {
    let t = n;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            l = e.data.hProperties;
        if (typeof r == "string")
            if (t.type === "element") t.tagName = r;
            else {
                const o = "children" in t ? t.children : [t];
                t = { type: "element", tagName: r, properties: {}, children: o };
            }
        t.type === "element" && l && Object.assign(t.properties, qo(l)),
            "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
    }
    return t;
}
function gb(e, n) {
    const t = n.data || {},
        r =
            "value" in n && !(Ds.call(t, "hProperties") || Ds.call(t, "hChildren"))
                ? { type: "text", value: n.value }
                : { type: "element", tagName: "div", properties: {}, children: e.all(n) };
    return e.patch(n, r), e.applyData(n, r);
}
function vb(e, n) {
    const t = [];
    let r = -1;
    for (
        n &&
        t.push({
            type: "text",
            value: `
`,
        });
        ++r < e.length;

    )
        r &&
            t.push({
                type: "text",
                value: `
`,
            }),
            t.push(e[r]);
    return (
        n &&
            e.length > 0 &&
            t.push({
                type: "text",
                value: `
`,
            }),
        t
    );
}
function Xd(e) {
    let n = 0,
        t = e.charCodeAt(n);
    for (; t === 9 || t === 32; ) n++, (t = e.charCodeAt(n));
    return e.slice(n);
}
function Kd(e, n) {
    const t = db(e, n),
        r = t.one(e, void 0),
        i = rb(t),
        l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
    return (
        i &&
            l.children.push(
                {
                    type: "text",
                    value: `
`,
                },
                i
            ),
        l
    );
}
function yb(e, n) {
    return e && "run" in e
        ? async function (t, r) {
              const i = Kd(t, { file: r, ...n });
              await e.run(i, r);
          }
        : function (t, r) {
              return Kd(t, { file: r, ...(n || e) });
          };
}
function Zd(e) {
    if (e) throw e;
}
var wo = Object.prototype.hasOwnProperty,
    d0 = Object.prototype.toString,
    Jd = Object.defineProperty,
    eh = Object.getOwnPropertyDescriptor,
    nh = function (n) {
        return typeof Array.isArray == "function" ? Array.isArray(n) : d0.call(n) === "[object Array]";
    },
    th = function (n) {
        if (!n || d0.call(n) !== "[object Object]") return !1;
        var t = wo.call(n, "constructor"),
            r = n.constructor && n.constructor.prototype && wo.call(n.constructor.prototype, "isPrototypeOf");
        if (n.constructor && !t && !r) return !1;
        var i;
        for (i in n);
        return typeof i > "u" || wo.call(n, i);
    },
    rh = function (n, t) {
        Jd && t.name === "__proto__"
            ? Jd(n, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 })
            : (n[t.name] = t.newValue);
    },
    ih = function (n, t) {
        if (t === "__proto__")
            if (wo.call(n, t)) {
                if (eh) return eh(n, t).value;
            } else return;
        return n[t];
    },
    kb = function e() {
        var n,
            t,
            r,
            i,
            l,
            o,
            a = arguments[0],
            u = 1,
            s = arguments.length,
            d = !1;
        for (
            typeof a == "boolean" && ((d = a), (a = arguments[1] || {}), (u = 2)),
                (a == null || (typeof a != "object" && typeof a != "function")) && (a = {});
            u < s;
            ++u
        )
            if (((n = arguments[u]), n != null))
                for (t in n)
                    (r = ih(a, t)),
                        (i = ih(n, t)),
                        a !== i &&
                            (d && i && (th(i) || (l = nh(i)))
                                ? (l ? ((l = !1), (o = r && nh(r) ? r : [])) : (o = r && th(r) ? r : {}),
                                  rh(a, { name: t, newValue: e(d, o, i) }))
                                : typeof i < "u" && rh(a, { name: t, newValue: i }));
        return a;
    };
const Su = js(kb);
function Ms(e) {
    if (typeof e != "object" || e === null) return !1;
    const n = Object.getPrototypeOf(e);
    return (
        (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
    );
}
function wb() {
    const e = [],
        n = { run: t, use: r };
    return n;
    function t(...i) {
        let l = -1;
        const o = i.pop();
        if (typeof o != "function") throw new TypeError("Expected function as last argument, not " + o);
        a(null, ...i);
        function a(u, ...s) {
            const d = e[++l];
            let f = -1;
            if (u) {
                o(u);
                return;
            }
            for (; ++f < i.length; ) (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
            (i = s), d ? xb(d, a)(...s) : o(null, ...s);
        }
    }
    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), n;
    }
}
function xb(e, n) {
    let t;
    return r;
    function r(...o) {
        const a = e.length > o.length;
        let u;
        a && o.push(i);
        try {
            u = e.apply(this, o);
        } catch (s) {
            const d = s;
            if (a && t) throw d;
            return i(d);
        }
        a || (u && u.then && typeof u.then == "function" ? u.then(l, i) : u instanceof Error ? i(u) : l(u));
    }
    function i(o, ...a) {
        t || ((t = !0), n(o, ...a));
    }
    function l(o) {
        i(null, o);
    }
}
const st = { basename: Sb, dirname: bb, extname: Cb, join: Eb, sep: "/" };
function Sb(e, n) {
    if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
    kl(e);
    let t = 0,
        r = -1,
        i = e.length,
        l;
    if (n === void 0 || n.length === 0 || n.length > e.length) {
        for (; i--; )
            if (e.codePointAt(i) === 47) {
                if (l) {
                    t = i + 1;
                    break;
                }
            } else r < 0 && ((l = !0), (r = i + 1));
        return r < 0 ? "" : e.slice(t, r);
    }
    if (n === e) return "";
    let o = -1,
        a = n.length - 1;
    for (; i--; )
        if (e.codePointAt(i) === 47) {
            if (l) {
                t = i + 1;
                break;
            }
        } else
            o < 0 && ((l = !0), (o = i + 1)),
                a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : ((a = -1), (r = o)));
    return t === r ? (r = o) : r < 0 && (r = e.length), e.slice(t, r);
}
function bb(e) {
    if ((kl(e), e.length === 0)) return ".";
    let n = -1,
        t = e.length,
        r;
    for (; --t; )
        if (e.codePointAt(t) === 47) {
            if (r) {
                n = t;
                break;
            }
        } else r || (r = !0);
    return n < 0 ? (e.codePointAt(0) === 47 ? "/" : ".") : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function Cb(e) {
    kl(e);
    let n = e.length,
        t = -1,
        r = 0,
        i = -1,
        l = 0,
        o;
    for (; n--; ) {
        const a = e.codePointAt(n);
        if (a === 47) {
            if (o) {
                r = n + 1;
                break;
            }
            continue;
        }
        t < 0 && ((o = !0), (t = n + 1)), a === 46 ? (i < 0 ? (i = n) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
    }
    return i < 0 || t < 0 || l === 0 || (l === 1 && i === t - 1 && i === r + 1) ? "" : e.slice(i, t);
}
function Eb(...e) {
    let n = -1,
        t;
    for (; ++n < e.length; ) kl(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
    return t === void 0 ? "." : _b(t);
}
function _b(e) {
    kl(e);
    const n = e.codePointAt(0) === 47;
    let t = Tb(e, !n);
    return (
        t.length === 0 && !n && (t = "."),
        t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"),
        n ? "/" + t : t
    );
}
function Tb(e, n) {
    let t = "",
        r = 0,
        i = -1,
        l = 0,
        o = -1,
        a,
        u;
    for (; ++o <= e.length; ) {
        if (o < e.length) a = e.codePointAt(o);
        else {
            if (a === 47) break;
            a = 47;
        }
        if (a === 47) {
            if (!(i === o - 1 || l === 1))
                if (i !== o - 1 && l === 2) {
                    if (
                        t.length < 2 ||
                        r !== 2 ||
                        t.codePointAt(t.length - 1) !== 46 ||
                        t.codePointAt(t.length - 2) !== 46
                    ) {
                        if (t.length > 2) {
                            if (((u = t.lastIndexOf("/")), u !== t.length - 1)) {
                                u < 0
                                    ? ((t = ""), (r = 0))
                                    : ((t = t.slice(0, u)), (r = t.length - 1 - t.lastIndexOf("/"))),
                                    (i = o),
                                    (l = 0);
                                continue;
                            }
                        } else if (t.length > 0) {
                            (t = ""), (r = 0), (i = o), (l = 0);
                            continue;
                        }
                    }
                    n && ((t = t.length > 0 ? t + "/.." : ".."), (r = 2));
                } else t.length > 0 ? (t += "/" + e.slice(i + 1, o)) : (t = e.slice(i + 1, o)), (r = o - i - 1);
            (i = o), (l = 0);
        } else a === 46 && l > -1 ? l++ : (l = -1);
    }
    return t;
}
function kl(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Pb = { cwd: Lb };
function Lb() {
    return "/";
}
function Fs(e) {
    return !!(
        e !== null &&
        typeof e == "object" &&
        "href" in e &&
        e.href &&
        "protocol" in e &&
        e.protocol &&
        e.auth === void 0
    );
}
function Ib(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Fs(e)) {
        const n = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
        );
        throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
    }
    if (e.protocol !== "file:") {
        const n = new TypeError("The URL must be of scheme file");
        throw ((n.code = "ERR_INVALID_URL_SCHEME"), n);
    }
    return Nb(e);
}
function Nb(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
    }
    const n = e.pathname;
    let t = -1;
    for (; ++t < n.length; )
        if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
            const r = n.codePointAt(t + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
            }
        }
    return decodeURIComponent(n);
}
const bu = ["history", "path", "basename", "stem", "extname", "dirname"];
class h0 {
    constructor(n) {
        let t;
        n ? (Fs(n) ? (t = { path: n }) : typeof n == "string" || Rb(n) ? (t = { value: n }) : (t = n)) : (t = {}),
            (this.cwd = Pb.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
        let r = -1;
        for (; ++r < bu.length; ) {
            const l = bu[r];
            l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === "history" ? [...t[l]] : t[l]);
        }
        let i;
        for (i in t) bu.includes(i) || (this[i] = t[i]);
    }
    get basename() {
        return typeof this.path == "string" ? st.basename(this.path) : void 0;
    }
    set basename(n) {
        Eu(n, "basename"), Cu(n, "basename"), (this.path = st.join(this.dirname || "", n));
    }
    get dirname() {
        return typeof this.path == "string" ? st.dirname(this.path) : void 0;
    }
    set dirname(n) {
        lh(this.basename, "dirname"), (this.path = st.join(n || "", this.basename));
    }
    get extname() {
        return typeof this.path == "string" ? st.extname(this.path) : void 0;
    }
    set extname(n) {
        if ((Cu(n, "extname"), lh(this.dirname, "extname"), n)) {
            if (n.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (n.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = st.join(this.dirname, this.stem + (n || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(n) {
        Fs(n) && (n = Ib(n)), Eu(n, "path"), this.path !== n && this.history.push(n);
    }
    get stem() {
        return typeof this.path == "string" ? st.basename(this.path, this.extname) : void 0;
    }
    set stem(n) {
        Eu(n, "stem"), Cu(n, "stem"), (this.path = st.join(this.dirname || "", n + (this.extname || "")));
    }
    fail(n, t, r) {
        const i = this.message(n, t, r);
        throw ((i.fatal = !0), i);
    }
    info(n, t, r) {
        const i = this.message(n, t, r);
        return (i.fatal = void 0), i;
    }
    message(n, t, r) {
        const i = new dn(n, t, r);
        return (
            this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
            (i.fatal = !1),
            this.messages.push(i),
            i
        );
    }
    toString(n) {
        return this.value === void 0
            ? ""
            : typeof this.value == "string"
              ? this.value
              : new TextDecoder(n || void 0).decode(this.value);
    }
}
function Cu(e, n) {
    if (e && e.includes(st.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + st.sep + "`");
}
function Eu(e, n) {
    if (!e) throw new Error("`" + n + "` cannot be empty");
}
function lh(e, n) {
    if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Rb(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const zb = function (e) {
        const r = this.constructor.prototype,
            i = r[e],
            l = function () {
                return i.apply(l, arguments);
            };
        return Object.setPrototypeOf(l, r), l;
    },
    Ob = {}.hasOwnProperty;
class qc extends zb {
    constructor() {
        super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = wb());
    }
    copy() {
        const n = new qc();
        let t = -1;
        for (; ++t < this.attachers.length; ) {
            const r = this.attachers[t];
            n.use(...r);
        }
        return n.data(Su(!0, {}, this.namespace)), n;
    }
    data(n, t) {
        return typeof n == "string"
            ? arguments.length === 2
                ? (Pu("data", this.frozen), (this.namespace[n] = t), this)
                : (Ob.call(this.namespace, n) && this.namespace[n]) || void 0
            : n
              ? (Pu("data", this.frozen), (this.namespace = n), this)
              : this.namespace;
    }
    freeze() {
        if (this.frozen) return this;
        const n = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
            const [t, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = t.call(n, ...r);
            typeof i == "function" && this.transformers.use(i);
        }
        return (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this;
    }
    parse(n) {
        this.freeze();
        const t = ro(n),
            r = this.parser || this.Parser;
        return _u("parse", r), r(String(t), t);
    }
    process(n, t) {
        const r = this;
        return (
            this.freeze(),
            _u("process", this.parser || this.Parser),
            Tu("process", this.compiler || this.Compiler),
            t ? i(void 0, t) : new Promise(i)
        );
        function i(l, o) {
            const a = ro(n),
                u = r.parse(a);
            r.run(u, a, function (d, f, g) {
                if (d || !f || !g) return s(d);
                const m = f,
                    y = r.stringify(m, g);
                Mb(y) ? (g.value = y) : (g.result = y), s(d, g);
            });
            function s(d, f) {
                d || !f ? o(d) : l ? l(f) : t(void 0, f);
            }
        }
    }
    processSync(n) {
        let t = !1,
            r;
        return (
            this.freeze(),
            _u("processSync", this.parser || this.Parser),
            Tu("processSync", this.compiler || this.Compiler),
            this.process(n, i),
            ah("processSync", "process", t),
            r
        );
        function i(l, o) {
            (t = !0), Zd(l), (r = o);
        }
    }
    run(n, t, r) {
        oh(n), this.freeze();
        const i = this.transformers;
        return !r && typeof t == "function" && ((r = t), (t = void 0)), r ? l(void 0, r) : new Promise(l);
        function l(o, a) {
            const u = ro(t);
            i.run(n, u, s);
            function s(d, f, g) {
                const m = f || n;
                d ? a(d) : o ? o(m) : r(void 0, m, g);
            }
        }
    }
    runSync(n, t) {
        let r = !1,
            i;
        return this.run(n, t, l), ah("runSync", "run", r), i;
        function l(o, a) {
            Zd(o), (i = a), (r = !0);
        }
    }
    stringify(n, t) {
        this.freeze();
        const r = ro(t),
            i = this.compiler || this.Compiler;
        return Tu("stringify", i), oh(n), i(n, r);
    }
    use(n, ...t) {
        const r = this.attachers,
            i = this.namespace;
        if ((Pu("use", this.frozen), n != null))
            if (typeof n == "function") u(n, t);
            else if (typeof n == "object") Array.isArray(n) ? a(n) : o(n);
            else throw new TypeError("Expected usable value, not `" + n + "`");
        return this;
        function l(s) {
            if (typeof s == "function") u(s, []);
            else if (typeof s == "object")
                if (Array.isArray(s)) {
                    const [d, ...f] = s;
                    u(d, f);
                } else o(s);
            else throw new TypeError("Expected usable value, not `" + s + "`");
        }
        function o(s) {
            if (!("plugins" in s) && !("settings" in s))
                throw new Error(
                    "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
                );
            a(s.plugins), s.settings && (i.settings = Su(!0, i.settings, s.settings));
        }
        function a(s) {
            let d = -1;
            if (s != null)
                if (Array.isArray(s))
                    for (; ++d < s.length; ) {
                        const f = s[d];
                        l(f);
                    }
                else throw new TypeError("Expected a list of plugins, not `" + s + "`");
        }
        function u(s, d) {
            let f = -1,
                g = -1;
            for (; ++f < r.length; )
                if (r[f][0] === s) {
                    g = f;
                    break;
                }
            if (g === -1) r.push([s, ...d]);
            else if (d.length > 0) {
                let [m, ...y] = d;
                const w = r[g][1];
                Ms(w) && Ms(m) && (m = Su(!0, w, m)), (r[g] = [s, m, ...y]);
            }
        }
    }
}
const Ab = new qc().freeze();
function _u(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Tu(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Pu(e, n) {
    if (n)
        throw new Error(
            "Cannot call `" +
                e +
                "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
        );
}
function oh(e) {
    if (!Ms(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
}
function ah(e, n, t) {
    if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead");
}
function ro(e) {
    return Db(e) ? e : new h0(e);
}
function Db(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Mb(e) {
    return typeof e == "string" || Fb(e);
}
function Fb(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const $b = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    uh = [],
    sh = { allowDangerousHtml: !0 },
    jb = /^(https?|ircs?|mailto|xmpp)$/i,
    Bb = [
        { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
        { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
        { from: "allowNode", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowElement" },
        { from: "allowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowedElements" },
        { from: "disallowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "disallowedElements" },
        { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
        { from: "includeElementIndex", id: "#remove-includeelementindex" },
        { from: "includeNodeIndex", id: "change-includenodeindex-to-includeelementindex" },
        { from: "linkTarget", id: "remove-linktarget" },
        { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
        { from: "rawSourcePos", id: "#remove-rawsourcepos" },
        { from: "renderers", id: "change-renderers-to-components", to: "components" },
        { from: "source", id: "change-source-to-children", to: "children" },
        { from: "sourcePos", id: "#remove-sourcepos" },
        { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
        { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
    ];
function Ub(e) {
    const n = e.allowedElements,
        t = e.allowElement,
        r = e.children || "",
        i = e.className,
        l = e.components,
        o = e.disallowedElements,
        a = e.rehypePlugins || uh,
        u = e.remarkPlugins || uh,
        s = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...sh } : sh,
        d = e.skipHtml,
        f = e.unwrapDisallowed,
        g = e.urlTransform || Hb,
        m = Ab().use(C3).use(u).use(yb, s).use(a),
        y = new h0();
    typeof r == "string" && (y.value = r);
    for (const k of Bb)
        Object.hasOwn(e, k.from) &&
            ("" + k.from + (k.to ? "use `" + k.to + "` instead" : "remove it") + $b + k.id, void 0);
    const w = m.parse(y);
    let z = m.runSync(w, y);
    return (
        i &&
            (z = {
                type: "element",
                tagName: "div",
                properties: { className: i },
                children: z.type === "root" ? z.children : [z],
            }),
        Yc(z, v),
        o5(z, {
            Fragment: V.Fragment,
            components: l,
            ignoreInvalidStyle: !0,
            jsx: V.jsx,
            jsxs: V.jsxs,
            passKeys: !0,
            passNode: !0,
        })
    );
    function v(k, S, R) {
        if (k.type === "raw" && R && typeof S == "number")
            return d ? R.children.splice(S, 1) : (R.children[S] = { type: "text", value: k.value }), S;
        if (k.type === "element") {
            let O;
            for (O in ku)
                if (Object.hasOwn(ku, O) && Object.hasOwn(k.properties, O)) {
                    const E = k.properties[O],
                        F = ku[O];
                    (F === null || F.includes(k.tagName)) && (k.properties[O] = g(String(E || ""), O, k));
                }
        }
        if (k.type === "element") {
            let O = n ? !n.includes(k.tagName) : o ? o.includes(k.tagName) : !1;
            if ((!O && t && typeof S == "number" && (O = !t(k, S, R)), O && R && typeof S == "number"))
                return f && k.children ? R.children.splice(S, 1, ...k.children) : R.children.splice(S, 1), S;
        }
    }
}
function Hb(e) {
    const n = e.indexOf(":"),
        t = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
    return n < 0 || (i > -1 && n > i) || (t > -1 && n > t) || (r > -1 && n > r) || jb.test(e.slice(0, n)) ? e : "";
}
function ch(e, n) {
    const t = String(e);
    if (typeof n != "string") throw new TypeError("Expected character");
    let r = 0,
        i = t.indexOf(n);
    for (; i !== -1; ) r++, (i = t.indexOf(n, i + n.length));
    return r;
}
function Vb(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Wb(e, n, t) {
    const i = ma((t || {}).ignore || []),
        l = Qb(n);
    let o = -1;
    for (; ++o < l.length; ) p0(e, "text", a);
    function a(s, d) {
        let f = -1,
            g;
        for (; ++f < d.length; ) {
            const m = d[f],
                y = g ? g.children : void 0;
            if (i(m, y ? y.indexOf(m) : void 0, g)) return;
            g = m;
        }
        if (g) return u(s, d);
    }
    function u(s, d) {
        const f = d[d.length - 1],
            g = l[o][0],
            m = l[o][1];
        let y = 0;
        const z = f.children.indexOf(s);
        let v = !1,
            k = [];
        g.lastIndex = 0;
        let S = g.exec(s.value);
        for (; S; ) {
            const R = S.index,
                O = { index: S.index, input: S.input, stack: [...d, s] };
            let E = m(...S, O);
            if (
                (typeof E == "string" && (E = E.length > 0 ? { type: "text", value: E } : void 0),
                E === !1
                    ? (g.lastIndex = R + 1)
                    : (y !== R && k.push({ type: "text", value: s.value.slice(y, R) }),
                      Array.isArray(E) ? k.push(...E) : E && k.push(E),
                      (y = R + S[0].length),
                      (v = !0)),
                !g.global)
            )
                break;
            S = g.exec(s.value);
        }
        return (
            v
                ? (y < s.value.length && k.push({ type: "text", value: s.value.slice(y) }),
                  f.children.splice(z, 1, ...k))
                : (k = [s]),
            z + k.length
        );
    }
}
function Qb(e) {
    const n = [];
    if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
    const t = !e[0] || Array.isArray(e[0]) ? e : [e];
    let r = -1;
    for (; ++r < t.length; ) {
        const i = t[r];
        n.push([Gb(i[0]), Yb(i[1])]);
    }
    return n;
}
function Gb(e) {
    return typeof e == "string" ? new RegExp(Vb(e), "g") : e;
}
function Yb(e) {
    return typeof e == "function"
        ? e
        : function () {
              return e;
          };
}
const Lu = "phrasing",
    Iu = ["autolink", "link", "image", "label"];
function qb() {
    return {
        transforms: [t4],
        enter: { literalAutolink: Kb, literalAutolinkEmail: Nu, literalAutolinkHttp: Nu, literalAutolinkWww: Nu },
        exit: { literalAutolink: n4, literalAutolinkEmail: e4, literalAutolinkHttp: Zb, literalAutolinkWww: Jb },
    };
}
function Xb() {
    return {
        unsafe: [
            { character: "@", before: "[+\\-.\\w]", after: "[\\-.\\w]", inConstruct: Lu, notInConstruct: Iu },
            { character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: Lu, notInConstruct: Iu },
            { character: ":", before: "[ps]", after: "\\/", inConstruct: Lu, notInConstruct: Iu },
        ],
    };
}
function Kb(e) {
    this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Nu(e) {
    this.config.enter.autolinkProtocol.call(this, e);
}
function Zb(e) {
    this.config.exit.autolinkProtocol.call(this, e);
}
function Jb(e) {
    this.config.exit.data.call(this, e);
    const n = this.stack[this.stack.length - 1];
    n.type, (n.url = "http://" + this.sliceSerialize(e));
}
function e4(e) {
    this.config.exit.autolinkEmail.call(this, e);
}
function n4(e) {
    this.exit(e);
}
function t4(e) {
    Wb(
        e,
        [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, r4],
            [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), i4],
        ],
        { ignore: ["link", "linkReference"] }
    );
}
function r4(e, n, t, r, i) {
    let l = "";
    if (!m0(i) || (/^w/i.test(n) && ((t = n + t), (n = ""), (l = "http://")), !l4(t))) return !1;
    const o = o4(t + r);
    if (!o[0]) return !1;
    const a = { type: "link", title: null, url: l + n + o[0], children: [{ type: "text", value: n + o[0] }] };
    return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function i4(e, n, t, r) {
    return !m0(r, !0) || /[-\d_]$/.test(t)
        ? !1
        : { type: "link", title: null, url: "mailto:" + n + "@" + t, children: [{ type: "text", value: n + "@" + t }] };
}
function l4(e) {
    const n = e.split(".");
    return !(
        n.length < 2 ||
        (n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1]))) ||
        (n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])))
    );
}
function o4(e) {
    const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!n) return [e, void 0];
    e = e.slice(0, n.index);
    let t = n[0],
        r = t.indexOf(")");
    const i = ch(e, "(");
    let l = ch(e, ")");
    for (; r !== -1 && i > l; ) (e += t.slice(0, r + 1)), (t = t.slice(r + 1)), (r = t.indexOf(")")), l++;
    return [e, t];
}
function m0(e, n) {
    const t = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || Sr(t) || pa(t)) && (!n || t !== 47);
}
g0.peek = m4;
function a4() {
    this.buffer();
}
function u4(e) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function s4() {
    this.buffer();
}
function c4(e) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e);
}
function f4(e) {
    const n = this.resume(),
        t = this.stack[this.stack.length - 1];
    t.type, (t.identifier = it(this.sliceSerialize(e)).toLowerCase()), (t.label = n);
}
function p4(e) {
    this.exit(e);
}
function d4(e) {
    const n = this.resume(),
        t = this.stack[this.stack.length - 1];
    t.type, (t.identifier = it(this.sliceSerialize(e)).toLowerCase()), (t.label = n);
}
function h4(e) {
    this.exit(e);
}
function m4() {
    return "[";
}
function g0(e, n, t, r) {
    const i = t.createTracker(r);
    let l = i.move("[^");
    const o = t.enter("footnoteReference"),
        a = t.enter("reference");
    return (l += i.move(t.safe(t.associationId(e), { after: "]", before: l }))), a(), o(), (l += i.move("]")), l;
}
function g4() {
    return {
        enter: {
            gfmFootnoteCallString: a4,
            gfmFootnoteCall: u4,
            gfmFootnoteDefinitionLabelString: s4,
            gfmFootnoteDefinition: c4,
        },
        exit: {
            gfmFootnoteCallString: f4,
            gfmFootnoteCall: p4,
            gfmFootnoteDefinitionLabelString: d4,
            gfmFootnoteDefinition: h4,
        },
    };
}
function v4(e) {
    let n = !1;
    return (
        e && e.firstLineBlank && (n = !0),
        {
            handlers: { footnoteDefinition: t, footnoteReference: g0 },
            unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }],
        }
    );
    function t(r, i, l, o) {
        const a = l.createTracker(o);
        let u = a.move("[^");
        const s = l.enter("footnoteDefinition"),
            d = l.enter("label");
        return (
            (u += a.move(l.safe(l.associationId(r), { before: u, after: "]" }))),
            d(),
            (u += a.move("]:")),
            r.children &&
                r.children.length > 0 &&
                (a.shift(4),
                (u += a.move(
                    (n
                        ? `
`
                        : " ") + l.indentLines(l.containerFlow(r, a.current()), n ? v0 : y4)
                ))),
            s(),
            u
        );
    }
}
function y4(e, n, t) {
    return n === 0 ? e : v0(e, n, t);
}
function v0(e, n, t) {
    return (t ? "" : "    ") + e;
}
const k4 = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
y0.peek = C4;
function w4() {
    return { canContainEols: ["delete"], enter: { strikethrough: S4 }, exit: { strikethrough: b4 } };
}
function x4() {
    return { unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: k4 }], handlers: { delete: y0 } };
}
function S4(e) {
    this.enter({ type: "delete", children: [] }, e);
}
function b4(e) {
    this.exit(e);
}
function y0(e, n, t, r) {
    const i = t.createTracker(r),
        l = t.enter("strikethrough");
    let o = i.move("~~");
    return (o += t.containerPhrasing(e, { ...i.current(), before: o, after: "~" })), (o += i.move("~~")), l(), o;
}
function C4() {
    return "~";
}
function E4(e) {
    return e.length;
}
function _4(e, n) {
    const t = n || {},
        r = (t.align || []).concat(),
        i = t.stringLength || E4,
        l = [],
        o = [],
        a = [],
        u = [];
    let s = 0,
        d = -1;
    for (; ++d < e.length; ) {
        const w = [],
            z = [];
        let v = -1;
        for (e[d].length > s && (s = e[d].length); ++v < e[d].length; ) {
            const k = T4(e[d][v]);
            if (t.alignDelimiters !== !1) {
                const S = i(k);
                (z[v] = S), (u[v] === void 0 || S > u[v]) && (u[v] = S);
            }
            w.push(k);
        }
        (o[d] = w), (a[d] = z);
    }
    let f = -1;
    if (typeof r == "object" && "length" in r) for (; ++f < s; ) l[f] = fh(r[f]);
    else {
        const w = fh(r);
        for (; ++f < s; ) l[f] = w;
    }
    f = -1;
    const g = [],
        m = [];
    for (; ++f < s; ) {
        const w = l[f];
        let z = "",
            v = "";
        w === 99 ? ((z = ":"), (v = ":")) : w === 108 ? (z = ":") : w === 114 && (v = ":");
        let k = t.alignDelimiters === !1 ? 1 : Math.max(1, u[f] - z.length - v.length);
        const S = z + "-".repeat(k) + v;
        t.alignDelimiters !== !1 && ((k = z.length + k + v.length), k > u[f] && (u[f] = k), (m[f] = k)), (g[f] = S);
    }
    o.splice(1, 0, g), a.splice(1, 0, m), (d = -1);
    const y = [];
    for (; ++d < o.length; ) {
        const w = o[d],
            z = a[d];
        f = -1;
        const v = [];
        for (; ++f < s; ) {
            const k = w[f] || "";
            let S = "",
                R = "";
            if (t.alignDelimiters !== !1) {
                const O = u[f] - (z[f] || 0),
                    E = l[f];
                E === 114
                    ? (S = " ".repeat(O))
                    : E === 99
                      ? O % 2
                          ? ((S = " ".repeat(O / 2 + 0.5)), (R = " ".repeat(O / 2 - 0.5)))
                          : ((S = " ".repeat(O / 2)), (R = S))
                      : (R = " ".repeat(O));
            }
            t.delimiterStart !== !1 && !f && v.push("|"),
                t.padding !== !1 &&
                    !(t.alignDelimiters === !1 && k === "") &&
                    (t.delimiterStart !== !1 || f) &&
                    v.push(" "),
                t.alignDelimiters !== !1 && v.push(S),
                v.push(k),
                t.alignDelimiters !== !1 && v.push(R),
                t.padding !== !1 && v.push(" "),
                (t.delimiterEnd !== !1 || f !== s - 1) && v.push("|");
        }
        y.push(t.delimiterEnd === !1 ? v.join("").replace(/ +$/, "") : v.join(""));
    }
    return y.join(`
`);
}
function T4(e) {
    return e == null ? "" : String(e);
}
function fh(e) {
    const n = typeof e == "string" ? e.codePointAt(0) : 0;
    return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function P4(e, n, t, r) {
    const i = t.enter("blockquote"),
        l = t.createTracker(r);
    l.move("> "), l.shift(2);
    const o = t.indentLines(t.containerFlow(e, l.current()), L4);
    return i(), o;
}
function L4(e, n, t) {
    return ">" + (t ? "" : " ") + e;
}
function I4(e, n) {
    return ph(e, n.inConstruct, !0) && !ph(e, n.notInConstruct, !1);
}
function ph(e, n, t) {
    if ((typeof n == "string" && (n = [n]), !n || n.length === 0)) return t;
    let r = -1;
    for (; ++r < n.length; ) if (e.includes(n[r])) return !0;
    return !1;
}
function dh(e, n, t, r) {
    let i = -1;
    for (; ++i < t.unsafe.length; )
        if (
            t.unsafe[i].character ===
                `
` &&
            I4(t.stack, t.unsafe[i])
        )
            return /[ \t]/.test(r.before) ? "" : " ";
    return `\\
`;
}
function N4(e, n) {
    const t = String(e);
    let r = t.indexOf(n),
        i = r,
        l = 0,
        o = 0;
    if (typeof n != "string") throw new TypeError("Expected substring");
    for (; r !== -1; ) r === i ? ++l > o && (o = l) : (l = 1), (i = r + n.length), (r = t.indexOf(n, i));
    return o;
}
function R4(e, n) {
    return !!(
        n.options.fences === !1 &&
        e.value &&
        !e.lang &&
        /[^ \r\n]/.test(e.value) &&
        !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
    );
}
function z4(e) {
    const n = e.options.fence || "`";
    if (n !== "`" && n !== "~")
        throw new Error("Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`");
    return n;
}
function O4(e, n, t, r) {
    const i = z4(t),
        l = e.value || "",
        o = i === "`" ? "GraveAccent" : "Tilde";
    if (R4(e, t)) {
        const f = t.enter("codeIndented"),
            g = t.indentLines(l, A4);
        return f(), g;
    }
    const a = t.createTracker(r),
        u = i.repeat(Math.max(N4(l, i) + 1, 3)),
        s = t.enter("codeFenced");
    let d = a.move(u);
    if (e.lang) {
        const f = t.enter(`codeFencedLang${o}`);
        (d += a.move(t.safe(e.lang, { before: d, after: " ", encode: ["`"], ...a.current() }))), f();
    }
    if (e.lang && e.meta) {
        const f = t.enter(`codeFencedMeta${o}`);
        (d += a.move(" ")),
            (d += a.move(
                t.safe(e.meta, {
                    before: d,
                    after: `
`,
                    encode: ["`"],
                    ...a.current(),
                })
            )),
            f();
    }
    return (
        (d += a.move(`
`)),
        l &&
            (d += a.move(
                l +
                    `
`
            )),
        (d += a.move(u)),
        s(),
        d
    );
}
function A4(e, n, t) {
    return (t ? "" : "    ") + e;
}
function Xc(e) {
    const n = e.options.quote || '"';
    if (n !== '"' && n !== "'")
        throw new Error("Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`");
    return n;
}
function D4(e, n, t, r) {
    const i = Xc(t),
        l = i === '"' ? "Quote" : "Apostrophe",
        o = t.enter("definition");
    let a = t.enter("label");
    const u = t.createTracker(r);
    let s = u.move("[");
    return (
        (s += u.move(t.safe(t.associationId(e), { before: s, after: "]", ...u.current() }))),
        (s += u.move("]: ")),
        a(),
        !e.url || /[\0- \u007F]/.test(e.url)
            ? ((a = t.enter("destinationLiteral")),
              (s += u.move("<")),
              (s += u.move(t.safe(e.url, { before: s, after: ">", ...u.current() }))),
              (s += u.move(">")))
            : ((a = t.enter("destinationRaw")),
              (s += u.move(
                  t.safe(e.url, {
                      before: s,
                      after: e.title
                          ? " "
                          : `
`,
                      ...u.current(),
                  })
              ))),
        a(),
        e.title &&
            ((a = t.enter(`title${l}`)),
            (s += u.move(" " + i)),
            (s += u.move(t.safe(e.title, { before: s, after: i, ...u.current() }))),
            (s += u.move(i)),
            a()),
        o(),
        s
    );
}
function M4(e) {
    const n = e.options.emphasis || "*";
    if (n !== "*" && n !== "_")
        throw new Error("Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`");
    return n;
}
k0.peek = F4;
function k0(e, n, t, r) {
    const i = M4(t),
        l = t.enter("emphasis"),
        o = t.createTracker(r);
    let a = o.move(i);
    return (a += o.move(t.containerPhrasing(e, { before: a, after: i, ...o.current() }))), (a += o.move(i)), l(), a;
}
function F4(e, n, t) {
    return t.options.emphasis || "*";
}
function $4(e, n) {
    let t = !1;
    return (
        Yc(e, function (r) {
            if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break") return (t = !0), As;
        }),
        !!((!e.depth || e.depth < 3) && Bc(e) && (n.options.setext || t))
    );
}
function j4(e, n, t, r) {
    const i = Math.max(Math.min(6, e.depth || 1), 1),
        l = t.createTracker(r);
    if ($4(e, t)) {
        const d = t.enter("headingSetext"),
            f = t.enter("phrasing"),
            g = t.containerPhrasing(e, {
                ...l.current(),
                before: `
`,
                after: `
`,
            });
        return (
            f(),
            d(),
            g +
                `
` +
                (i === 1 ? "=" : "-").repeat(
                    g.length -
                        (Math.max(
                            g.lastIndexOf("\r"),
                            g.lastIndexOf(`
`)
                        ) +
                            1)
                )
        );
    }
    const o = "#".repeat(i),
        a = t.enter("headingAtx"),
        u = t.enter("phrasing");
    l.move(o + " ");
    let s = t.containerPhrasing(e, {
        before: "# ",
        after: `
`,
        ...l.current(),
    });
    return (
        /^[\t ]/.test(s) && (s = "&#x" + s.charCodeAt(0).toString(16).toUpperCase() + ";" + s.slice(1)),
        (s = s ? o + " " + s : o),
        t.options.closeAtx && (s += " " + o),
        u(),
        a(),
        s
    );
}
w0.peek = B4;
function w0(e) {
    return e.value || "";
}
function B4() {
    return "<";
}
x0.peek = U4;
function x0(e, n, t, r) {
    const i = Xc(t),
        l = i === '"' ? "Quote" : "Apostrophe",
        o = t.enter("image");
    let a = t.enter("label");
    const u = t.createTracker(r);
    let s = u.move("![");
    return (
        (s += u.move(t.safe(e.alt, { before: s, after: "]", ...u.current() }))),
        (s += u.move("](")),
        a(),
        (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((a = t.enter("destinationLiteral")),
              (s += u.move("<")),
              (s += u.move(t.safe(e.url, { before: s, after: ">", ...u.current() }))),
              (s += u.move(">")))
            : ((a = t.enter("destinationRaw")),
              (s += u.move(t.safe(e.url, { before: s, after: e.title ? " " : ")", ...u.current() })))),
        a(),
        e.title &&
            ((a = t.enter(`title${l}`)),
            (s += u.move(" " + i)),
            (s += u.move(t.safe(e.title, { before: s, after: i, ...u.current() }))),
            (s += u.move(i)),
            a()),
        (s += u.move(")")),
        o(),
        s
    );
}
function U4() {
    return "!";
}
S0.peek = H4;
function S0(e, n, t, r) {
    const i = e.referenceType,
        l = t.enter("imageReference");
    let o = t.enter("label");
    const a = t.createTracker(r);
    let u = a.move("![");
    const s = t.safe(e.alt, { before: u, after: "]", ...a.current() });
    (u += a.move(s + "][")), o();
    const d = t.stack;
    (t.stack = []), (o = t.enter("reference"));
    const f = t.safe(t.associationId(e), { before: u, after: "]", ...a.current() });
    return (
        o(),
        (t.stack = d),
        l(),
        i === "full" || !s || s !== f
            ? (u += a.move(f + "]"))
            : i === "shortcut"
              ? (u = u.slice(0, -1))
              : (u += a.move("]")),
        u
    );
}
function H4() {
    return "!";
}
b0.peek = V4;
function b0(e, n, t) {
    let r = e.value || "",
        i = "`",
        l = -1;
    for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
    for (
        /[^ \r\n]/.test(r) && ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) && (r = " " + r + " ");
        ++l < t.unsafe.length;

    ) {
        const o = t.unsafe[l],
            a = t.compilePattern(o);
        let u;
        if (o.atBreak)
            for (; (u = a.exec(r)); ) {
                let s = u.index;
                r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--,
                    (r = r.slice(0, s) + " " + r.slice(u.index + 1));
            }
    }
    return i + r + i;
}
function V4() {
    return "`";
}
function C0(e, n) {
    const t = Bc(e);
    return !!(
        !n.options.resourceLink &&
        e.url &&
        !e.title &&
        e.children &&
        e.children.length === 1 &&
        e.children[0].type === "text" &&
        (t === e.url || "mailto:" + t === e.url) &&
        /^[a-z][a-z+.-]+:/i.test(e.url) &&
        !/[\0- <>\u007F]/.test(e.url)
    );
}
E0.peek = W4;
function E0(e, n, t, r) {
    const i = Xc(t),
        l = i === '"' ? "Quote" : "Apostrophe",
        o = t.createTracker(r);
    let a, u;
    if (C0(e, t)) {
        const d = t.stack;
        (t.stack = []), (a = t.enter("autolink"));
        let f = o.move("<");
        return (
            (f += o.move(t.containerPhrasing(e, { before: f, after: ">", ...o.current() }))),
            (f += o.move(">")),
            a(),
            (t.stack = d),
            f
        );
    }
    (a = t.enter("link")), (u = t.enter("label"));
    let s = o.move("[");
    return (
        (s += o.move(t.containerPhrasing(e, { before: s, after: "](", ...o.current() }))),
        (s += o.move("](")),
        u(),
        (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((u = t.enter("destinationLiteral")),
              (s += o.move("<")),
              (s += o.move(t.safe(e.url, { before: s, after: ">", ...o.current() }))),
              (s += o.move(">")))
            : ((u = t.enter("destinationRaw")),
              (s += o.move(t.safe(e.url, { before: s, after: e.title ? " " : ")", ...o.current() })))),
        u(),
        e.title &&
            ((u = t.enter(`title${l}`)),
            (s += o.move(" " + i)),
            (s += o.move(t.safe(e.title, { before: s, after: i, ...o.current() }))),
            (s += o.move(i)),
            u()),
        (s += o.move(")")),
        a(),
        s
    );
}
function W4(e, n, t) {
    return C0(e, t) ? "<" : "[";
}
_0.peek = Q4;
function _0(e, n, t, r) {
    const i = e.referenceType,
        l = t.enter("linkReference");
    let o = t.enter("label");
    const a = t.createTracker(r);
    let u = a.move("[");
    const s = t.containerPhrasing(e, { before: u, after: "]", ...a.current() });
    (u += a.move(s + "][")), o();
    const d = t.stack;
    (t.stack = []), (o = t.enter("reference"));
    const f = t.safe(t.associationId(e), { before: u, after: "]", ...a.current() });
    return (
        o(),
        (t.stack = d),
        l(),
        i === "full" || !s || s !== f
            ? (u += a.move(f + "]"))
            : i === "shortcut"
              ? (u = u.slice(0, -1))
              : (u += a.move("]")),
        u
    );
}
function Q4() {
    return "[";
}
function Kc(e) {
    const n = e.options.bullet || "*";
    if (n !== "*" && n !== "+" && n !== "-")
        throw new Error("Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return n;
}
function G4(e) {
    const n = Kc(e),
        t = e.options.bulletOther;
    if (!t) return n === "*" ? "-" : "*";
    if (t !== "*" && t !== "+" && t !== "-")
        throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (t === n) throw new Error("Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different");
    return t;
}
function Y4(e) {
    const n = e.options.bulletOrdered || ".";
    if (n !== "." && n !== ")")
        throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`");
    return n;
}
function T0(e) {
    const n = e.options.rule || "*";
    if (n !== "*" && n !== "-" && n !== "_")
        throw new Error("Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`");
    return n;
}
function q4(e, n, t, r) {
    const i = t.enter("list"),
        l = t.bulletCurrent;
    let o = e.ordered ? Y4(t) : Kc(t);
    const a = e.ordered ? (o === "." ? ")" : ".") : G4(t);
    let u = n && t.bulletLastUsed ? o === t.bulletLastUsed : !1;
    if (!e.ordered) {
        const d = e.children ? e.children[0] : void 0;
        if (
            ((o === "*" || o === "-") &&
                d &&
                (!d.children || !d.children[0]) &&
                t.stack[t.stack.length - 1] === "list" &&
                t.stack[t.stack.length - 2] === "listItem" &&
                t.stack[t.stack.length - 3] === "list" &&
                t.stack[t.stack.length - 4] === "listItem" &&
                t.indexStack[t.indexStack.length - 1] === 0 &&
                t.indexStack[t.indexStack.length - 2] === 0 &&
                t.indexStack[t.indexStack.length - 3] === 0 &&
                (u = !0),
            T0(t) === o && d)
        ) {
            let f = -1;
            for (; ++f < e.children.length; ) {
                const g = e.children[f];
                if (
                    g &&
                    g.type === "listItem" &&
                    g.children &&
                    g.children[0] &&
                    g.children[0].type === "thematicBreak"
                ) {
                    u = !0;
                    break;
                }
            }
        }
    }
    u && (o = a), (t.bulletCurrent = o);
    const s = t.containerFlow(e, r);
    return (t.bulletLastUsed = o), (t.bulletCurrent = l), i(), s;
}
function X4(e) {
    const n = e.options.listItemIndent || "one";
    if (n !== "tab" && n !== "one" && n !== "mixed")
        throw new Error(
            "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
        );
    return n;
}
function K4(e, n, t, r) {
    const i = X4(t);
    let l = t.bulletCurrent || Kc(t);
    n &&
        n.type === "list" &&
        n.ordered &&
        (l =
            (typeof n.start == "number" && n.start > -1 ? n.start : 1) +
            (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) +
            l);
    let o = l.length + 1;
    (i === "tab" || (i === "mixed" && ((n && n.type === "list" && n.spread) || e.spread))) &&
        (o = Math.ceil(o / 4) * 4);
    const a = t.createTracker(r);
    a.move(l + " ".repeat(o - l.length)), a.shift(o);
    const u = t.enter("listItem"),
        s = t.indentLines(t.containerFlow(e, a.current()), d);
    return u(), s;
    function d(f, g, m) {
        return g ? (m ? "" : " ".repeat(o)) + f : (m ? l : l + " ".repeat(o - l.length)) + f;
    }
}
function Z4(e, n, t, r) {
    const i = t.enter("paragraph"),
        l = t.enter("phrasing"),
        o = t.containerPhrasing(e, r);
    return l(), i(), o;
}
const J4 = ma([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective",
]);
function eC(e, n, t, r) {
    return (
        e.children.some(function (o) {
            return J4(o);
        })
            ? t.containerPhrasing
            : t.containerFlow
    ).call(t, e, r);
}
function nC(e) {
    const n = e.options.strong || "*";
    if (n !== "*" && n !== "_")
        throw new Error("Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`");
    return n;
}
P0.peek = tC;
function P0(e, n, t, r) {
    const i = nC(t),
        l = t.enter("strong"),
        o = t.createTracker(r);
    let a = o.move(i + i);
    return (a += o.move(t.containerPhrasing(e, { before: a, after: i, ...o.current() }))), (a += o.move(i + i)), l(), a;
}
function tC(e, n, t) {
    return t.options.strong || "*";
}
function rC(e, n, t, r) {
    return t.safe(e.value, r);
}
function iC(e) {
    const n = e.options.ruleRepetition || 3;
    if (n < 3)
        throw new Error(
            "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
        );
    return n;
}
function lC(e, n, t) {
    const r = (T0(t) + (t.options.ruleSpaces ? " " : "")).repeat(iC(t));
    return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const L0 = {
    blockquote: P4,
    break: dh,
    code: O4,
    definition: D4,
    emphasis: k0,
    hardBreak: dh,
    heading: j4,
    html: w0,
    image: x0,
    imageReference: S0,
    inlineCode: b0,
    link: E0,
    linkReference: _0,
    list: q4,
    listItem: K4,
    paragraph: Z4,
    root: eC,
    strong: P0,
    text: rC,
    thematicBreak: lC,
};
function oC() {
    return {
        enter: { table: aC, tableData: hh, tableHeader: hh, tableRow: sC },
        exit: { codeText: cC, table: uC, tableData: Ru, tableHeader: Ru, tableRow: Ru },
    };
}
function aC(e) {
    const n = e._align;
    this.enter(
        {
            type: "table",
            align: n.map(function (t) {
                return t === "none" ? null : t;
            }),
            children: [],
        },
        e
    ),
        (this.data.inTable = !0);
}
function uC(e) {
    this.exit(e), (this.data.inTable = void 0);
}
function sC(e) {
    this.enter({ type: "tableRow", children: [] }, e);
}
function Ru(e) {
    this.exit(e);
}
function hh(e) {
    this.enter({ type: "tableCell", children: [] }, e);
}
function cC(e) {
    let n = this.resume();
    this.data.inTable && (n = n.replace(/\\([\\|])/g, fC));
    const t = this.stack[this.stack.length - 1];
    t.type, (t.value = n), this.exit(e);
}
function fC(e, n) {
    return n === "|" ? n : e;
}
function pC(e) {
    const n = e || {},
        t = n.tableCellPadding,
        r = n.tablePipeAlign,
        i = n.stringLength,
        l = t ? " " : "|";
    return {
        unsafe: [
            { character: "\r", inConstruct: "tableCell" },
            {
                character: `
`,
                inConstruct: "tableCell",
            },
            { atBreak: !0, character: "|", after: "[    :-]" },
            { character: "|", inConstruct: "tableCell" },
            { atBreak: !0, character: ":", after: "-" },
            { atBreak: !0, character: "-", after: "[:|-]" },
        ],
        handlers: { inlineCode: g, table: o, tableCell: u, tableRow: a },
    };
    function o(m, y, w, z) {
        return s(d(m, w, z), m.align);
    }
    function a(m, y, w, z) {
        const v = f(m, w, z),
            k = s([v]);
        return k.slice(
            0,
            k.indexOf(`
`)
        );
    }
    function u(m, y, w, z) {
        const v = w.enter("tableCell"),
            k = w.enter("phrasing"),
            S = w.containerPhrasing(m, { ...z, before: l, after: l });
        return k(), v(), S;
    }
    function s(m, y) {
        return _4(m, { align: y, alignDelimiters: r, padding: t, stringLength: i });
    }
    function d(m, y, w) {
        const z = m.children;
        let v = -1;
        const k = [],
            S = y.enter("table");
        for (; ++v < z.length; ) k[v] = f(z[v], y, w);
        return S(), k;
    }
    function f(m, y, w) {
        const z = m.children;
        let v = -1;
        const k = [],
            S = y.enter("tableRow");
        for (; ++v < z.length; ) k[v] = u(z[v], m, y, w);
        return S(), k;
    }
    function g(m, y, w) {
        let z = L0.inlineCode(m, y, w);
        return w.stack.includes("tableCell") && (z = z.replace(/\|/g, "\\$&")), z;
    }
}
function dC() {
    return { exit: { taskListCheckValueChecked: mh, taskListCheckValueUnchecked: mh, paragraph: mC } };
}
function hC() {
    return { unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }], handlers: { listItem: gC } };
}
function mh(e) {
    const n = this.stack[this.stack.length - 2];
    n.type, (n.checked = e.type === "taskListCheckValueChecked");
}
function mC(e) {
    const n = this.stack[this.stack.length - 2];
    if (n && n.type === "listItem" && typeof n.checked == "boolean") {
        const t = this.stack[this.stack.length - 1];
        t.type;
        const r = t.children[0];
        if (r && r.type === "text") {
            const i = n.children;
            let l = -1,
                o;
            for (; ++l < i.length; ) {
                const a = i[l];
                if (a.type === "paragraph") {
                    o = a;
                    break;
                }
            }
            o === t &&
                ((r.value = r.value.slice(1)),
                r.value.length === 0
                    ? t.children.shift()
                    : t.position &&
                      r.position &&
                      typeof r.position.start.offset == "number" &&
                      (r.position.start.column++,
                      r.position.start.offset++,
                      (t.position.start = Object.assign({}, r.position.start))));
        }
    }
    this.exit(e);
}
function gC(e, n, t, r) {
    const i = e.children[0],
        l = typeof e.checked == "boolean" && i && i.type === "paragraph",
        o = "[" + (e.checked ? "x" : " ") + "] ",
        a = t.createTracker(r);
    l && a.move(o);
    let u = L0.listItem(e, n, t, { ...r, ...a.current() });
    return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
    function s(d) {
        return d + o;
    }
}
function vC() {
    return [qb(), g4(), w4(), oC(), dC()];
}
function yC(e) {
    return { extensions: [Xb(), v4(e), x4(), pC(e), hC()] };
}
const kC = { tokenize: EC, partial: !0 },
    I0 = { tokenize: _C, partial: !0 },
    N0 = { tokenize: TC, partial: !0 },
    R0 = { tokenize: PC, partial: !0 },
    wC = { tokenize: LC, partial: !0 },
    z0 = { name: "wwwAutolink", tokenize: bC, previous: A0 },
    O0 = { name: "protocolAutolink", tokenize: CC, previous: D0 },
    Lt = { name: "emailAutolink", tokenize: SC, previous: M0 },
    dt = {};
function xC() {
    return { text: dt };
}
let ur = 48;
for (; ur < 123; ) (dt[ur] = Lt), ur++, ur === 58 ? (ur = 65) : ur === 91 && (ur = 97);
dt[43] = Lt;
dt[45] = Lt;
dt[46] = Lt;
dt[95] = Lt;
dt[72] = [Lt, O0];
dt[104] = [Lt, O0];
dt[87] = [Lt, z0];
dt[119] = [Lt, z0];
function SC(e, n, t) {
    const r = this;
    let i, l;
    return o;
    function o(f) {
        return !$s(f) || !M0.call(r, r.previous) || Zc(r.events)
            ? t(f)
            : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
    }
    function a(f) {
        return $s(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), u) : t(f);
    }
    function u(f) {
        return f === 46 ? e.check(wC, d, s)(f) : f === 45 || f === 95 || fn(f) ? ((l = !0), e.consume(f), u) : d(f);
    }
    function s(f) {
        return e.consume(f), (i = !0), u;
    }
    function d(f) {
        return l && i && gn(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(f)) : t(f);
    }
}
function bC(e, n, t) {
    const r = this;
    return i;
    function i(o) {
        return (o !== 87 && o !== 119) || !A0.call(r, r.previous) || Zc(r.events)
            ? t(o)
            : (e.enter("literalAutolink"),
              e.enter("literalAutolinkWww"),
              e.check(kC, e.attempt(I0, e.attempt(N0, l), t), t)(o));
    }
    function l(o) {
        return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(o);
    }
}
function CC(e, n, t) {
    const r = this;
    let i = "",
        l = !1;
    return o;
    function o(f) {
        return (f === 72 || f === 104) && D0.call(r, r.previous) && !Zc(r.events)
            ? (e.enter("literalAutolink"),
              e.enter("literalAutolinkHttp"),
              (i += String.fromCodePoint(f)),
              e.consume(f),
              a)
            : t(f);
    }
    function a(f) {
        if (gn(f) && i.length < 5) return (i += String.fromCodePoint(f)), e.consume(f), a;
        if (f === 58) {
            const g = i.toLowerCase();
            if (g === "http" || g === "https") return e.consume(f), u;
        }
        return t(f);
    }
    function u(f) {
        return f === 47 ? (e.consume(f), l ? s : ((l = !0), u)) : t(f);
    }
    function s(f) {
        return f === null || Wo(f) || Ie(f) || Sr(f) || pa(f) ? t(f) : e.attempt(I0, e.attempt(N0, d), t)(f);
    }
    function d(f) {
        return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(f);
    }
}
function EC(e, n, t) {
    let r = 0;
    return i;
    function i(o) {
        return (o === 87 || o === 119) && r < 3
            ? (r++, e.consume(o), i)
            : o === 46 && r === 3
              ? (e.consume(o), l)
              : t(o);
    }
    function l(o) {
        return o === null ? t(o) : n(o);
    }
}
function _C(e, n, t) {
    let r, i, l;
    return o;
    function o(s) {
        return s === 46 || s === 95
            ? e.check(R0, u, a)(s)
            : s === null || Ie(s) || Sr(s) || (s !== 45 && pa(s))
              ? u(s)
              : ((l = !0), e.consume(s), o);
    }
    function a(s) {
        return s === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(s), o;
    }
    function u(s) {
        return i || r || !l ? t(s) : n(s);
    }
}
function TC(e, n) {
    let t = 0,
        r = 0;
    return i;
    function i(o) {
        return o === 40
            ? (t++, e.consume(o), i)
            : o === 41 && r < t
              ? l(o)
              : o === 33 ||
                  o === 34 ||
                  o === 38 ||
                  o === 39 ||
                  o === 41 ||
                  o === 42 ||
                  o === 44 ||
                  o === 46 ||
                  o === 58 ||
                  o === 59 ||
                  o === 60 ||
                  o === 63 ||
                  o === 93 ||
                  o === 95 ||
                  o === 126
                ? e.check(R0, n, l)(o)
                : o === null || Ie(o) || Sr(o)
                  ? n(o)
                  : (e.consume(o), i);
    }
    function l(o) {
        return o === 41 && r++, e.consume(o), i;
    }
}
function PC(e, n, t) {
    return r;
    function r(a) {
        return a === 33 ||
            a === 34 ||
            a === 39 ||
            a === 41 ||
            a === 42 ||
            a === 44 ||
            a === 46 ||
            a === 58 ||
            a === 59 ||
            a === 63 ||
            a === 95 ||
            a === 126
            ? (e.consume(a), r)
            : a === 38
              ? (e.consume(a), l)
              : a === 93
                ? (e.consume(a), i)
                : a === 60 || a === null || Ie(a) || Sr(a)
                  ? n(a)
                  : t(a);
    }
    function i(a) {
        return a === null || a === 40 || a === 91 || Ie(a) || Sr(a) ? n(a) : r(a);
    }
    function l(a) {
        return gn(a) ? o(a) : t(a);
    }
    function o(a) {
        return a === 59 ? (e.consume(a), r) : gn(a) ? (e.consume(a), o) : t(a);
    }
}
function LC(e, n, t) {
    return r;
    function r(l) {
        return e.consume(l), i;
    }
    function i(l) {
        return fn(l) ? t(l) : n(l);
    }
}
function A0(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Ie(e);
}
function D0(e) {
    return !gn(e);
}
function M0(e) {
    return !(e === 47 || $s(e));
}
function $s(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || fn(e);
}
function Zc(e) {
    let n = e.length,
        t = !1;
    for (; n--; ) {
        const r = e[n][1];
        if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
            t = !0;
            break;
        }
        if (r._gfmAutolinkLiteralWalkedInto) {
            t = !1;
            break;
        }
    }
    return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
const IC = { tokenize: FC, partial: !0 };
function NC() {
    return {
        document: { 91: { name: "gfmFootnoteDefinition", tokenize: AC, continuation: { tokenize: DC }, exit: MC } },
        text: {
            91: { name: "gfmFootnoteCall", tokenize: OC },
            93: { name: "gfmPotentialFootnoteCall", add: "after", tokenize: RC, resolveTo: zC },
        },
    };
}
function RC(e, n, t) {
    const r = this;
    let i = r.events.length;
    const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let o;
    for (; i--; ) {
        const u = r.events[i][1];
        if (u.type === "labelImage") {
            o = u;
            break;
        }
        if (
            u.type === "gfmFootnoteCall" ||
            u.type === "labelLink" ||
            u.type === "label" ||
            u.type === "image" ||
            u.type === "link"
        )
            break;
    }
    return a;
    function a(u) {
        if (!o || !o._balanced) return t(u);
        const s = it(r.sliceSerialize({ start: o.end, end: r.now() }));
        return s.codePointAt(0) !== 94 || !l.includes(s.slice(1))
            ? t(u)
            : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), n(u));
    }
}
function zC(e, n) {
    let t = e.length;
    for (; t--; )
        if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
            e[t][1];
            break;
        }
    (e[t + 1][1].type = "data"), (e[t + 3][1].type = "gfmFootnoteCallLabelMarker");
    const r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[t + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
        },
        i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[t + 3][1].end),
            end: Object.assign({}, e[t + 3][1].end),
        };
    i.end.column++, i.end.offset++, i.end._bufferIndex++;
    const l = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
        },
        o = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, l.start),
            end: Object.assign({}, l.end),
        },
        a = [
            e[t + 1],
            e[t + 2],
            ["enter", r, n],
            e[t + 3],
            e[t + 4],
            ["enter", i, n],
            ["exit", i, n],
            ["enter", l, n],
            ["enter", o, n],
            ["exit", o, n],
            ["exit", l, n],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, n],
        ];
    return e.splice(t, e.length - t + 1, ...a), e;
}
function OC(e, n, t) {
    const r = this,
        i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let l = 0,
        o;
    return a;
    function a(f) {
        return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(f),
            e.exit("gfmFootnoteCallLabelMarker"),
            u
        );
    }
    function u(f) {
        return f !== 94
            ? t(f)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(f),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              s);
    }
    function s(f) {
        if (l > 999 || (f === 93 && !o) || f === null || f === 91 || Ie(f)) return t(f);
        if (f === 93) {
            e.exit("chunkString");
            const g = e.exit("gfmFootnoteCallString");
            return i.includes(it(r.sliceSerialize(g)))
                ? (e.enter("gfmFootnoteCallLabelMarker"),
                  e.consume(f),
                  e.exit("gfmFootnoteCallLabelMarker"),
                  e.exit("gfmFootnoteCall"),
                  n)
                : t(f);
        }
        return Ie(f) || (o = !0), l++, e.consume(f), f === 92 ? d : s;
    }
    function d(f) {
        return f === 91 || f === 92 || f === 93 ? (e.consume(f), l++, s) : s(f);
    }
}
function AC(e, n, t) {
    const r = this,
        i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let l,
        o = 0,
        a;
    return u;
    function u(y) {
        return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(y),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            s
        );
    }
    function s(y) {
        return y === 94
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(y),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              d)
            : t(y);
    }
    function d(y) {
        if (o > 999 || (y === 93 && !a) || y === null || y === 91 || Ie(y)) return t(y);
        if (y === 93) {
            e.exit("chunkString");
            const w = e.exit("gfmFootnoteDefinitionLabelString");
            return (
                (l = it(r.sliceSerialize(w))),
                e.enter("gfmFootnoteDefinitionLabelMarker"),
                e.consume(y),
                e.exit("gfmFootnoteDefinitionLabelMarker"),
                e.exit("gfmFootnoteDefinitionLabel"),
                g
            );
        }
        return Ie(y) || (a = !0), o++, e.consume(y), y === 92 ? f : d;
    }
    function f(y) {
        return y === 91 || y === 92 || y === 93 ? (e.consume(y), o++, d) : d(y);
    }
    function g(y) {
        return y === 58
            ? (e.enter("definitionMarker"),
              e.consume(y),
              e.exit("definitionMarker"),
              i.includes(l) || i.push(l),
              ke(e, m, "gfmFootnoteDefinitionWhitespace"))
            : t(y);
    }
    function m(y) {
        return n(y);
    }
}
function DC(e, n, t) {
    return e.check(yl, n, e.attempt(IC, n, t));
}
function MC(e) {
    e.exit("gfmFootnoteDefinition");
}
function FC(e, n, t) {
    const r = this;
    return ke(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(l) {
        const o = r.events[r.events.length - 1];
        return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4
            ? n(l)
            : t(l);
    }
}
function $C(e) {
    let t = (e || {}).singleTilde;
    const r = { name: "strikethrough", tokenize: l, resolveAll: i };
    return t == null && (t = !0), { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } };
    function i(o, a) {
        let u = -1;
        for (; ++u < o.length; )
            if (o[u][0] === "enter" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._close) {
                let s = u;
                for (; s--; )
                    if (
                        o[s][0] === "exit" &&
                        o[s][1].type === "strikethroughSequenceTemporary" &&
                        o[s][1]._open &&
                        o[u][1].end.offset - o[u][1].start.offset === o[s][1].end.offset - o[s][1].start.offset
                    ) {
                        (o[u][1].type = "strikethroughSequence"), (o[s][1].type = "strikethroughSequence");
                        const d = {
                                type: "strikethrough",
                                start: Object.assign({}, o[s][1].start),
                                end: Object.assign({}, o[u][1].end),
                            },
                            f = {
                                type: "strikethroughText",
                                start: Object.assign({}, o[s][1].end),
                                end: Object.assign({}, o[u][1].start),
                            },
                            g = [
                                ["enter", d, a],
                                ["enter", o[s][1], a],
                                ["exit", o[s][1], a],
                                ["enter", f, a],
                            ],
                            m = a.parser.constructs.insideSpan.null;
                        m && Wn(g, g.length, 0, da(m, o.slice(s + 1, u), a)),
                            Wn(g, g.length, 0, [
                                ["exit", f, a],
                                ["enter", o[u][1], a],
                                ["exit", o[u][1], a],
                                ["exit", d, a],
                            ]),
                            Wn(o, s - 1, u - s + 3, g),
                            (u = s + g.length - 2);
                        break;
                    }
            }
        for (u = -1; ++u < o.length; ) o[u][1].type === "strikethroughSequenceTemporary" && (o[u][1].type = "data");
        return o;
    }
    function l(o, a, u) {
        const s = this.previous,
            d = this.events;
        let f = 0;
        return g;
        function g(y) {
            return s === 126 && d[d.length - 1][1].type !== "characterEscape"
                ? u(y)
                : (o.enter("strikethroughSequenceTemporary"), m(y));
        }
        function m(y) {
            const w = Qo(s);
            if (y === 126) return f > 1 ? u(y) : (o.consume(y), f++, m);
            if (f < 2 && !t) return u(y);
            const z = o.exit("strikethroughSequenceTemporary"),
                v = Qo(y);
            return (z._open = !v || (v === 2 && !!w)), (z._close = !w || (w === 2 && !!v)), a(y);
        }
    }
}
class jC {
    constructor() {
        this.map = [];
    }
    add(n, t, r) {
        BC(this, n, t, r);
    }
    consume(n) {
        if (
            (this.map.sort(function (l, o) {
                return l[0] - o[0];
            }),
            this.map.length === 0)
        )
            return;
        let t = this.map.length;
        const r = [];
        for (; t > 0; )
            (t -= 1), r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), (n.length = this.map[t][0]);
        r.push(n.slice()), (n.length = 0);
        let i = r.pop();
        for (; i; ) {
            for (const l of i) n.push(l);
            i = r.pop();
        }
        this.map.length = 0;
    }
}
function BC(e, n, t, r) {
    let i = 0;
    if (!(t === 0 && r.length === 0)) {
        for (; i < e.map.length; ) {
            if (e.map[i][0] === n) {
                (e.map[i][1] += t), e.map[i][2].push(...r);
                return;
            }
            i += 1;
        }
        e.map.push([n, t, r]);
    }
}
function UC(e, n) {
    let t = !1;
    const r = [];
    for (; n < e.length; ) {
        const i = e[n];
        if (t) {
            if (i[0] === "enter")
                i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
            else if (i[1].type === "tableContent") {
                if (e[n - 1][1].type === "tableDelimiterMarker") {
                    const l = r.length - 1;
                    r[l] = r[l] === "left" ? "center" : "right";
                }
            } else if (i[1].type === "tableDelimiterRow") break;
        } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
        n += 1;
    }
    return r;
}
function HC() {
    return { flow: { null: { name: "table", tokenize: VC, resolveAll: WC } } };
}
function VC(e, n, t) {
    const r = this;
    let i = 0,
        l = 0,
        o;
    return a;
    function a(L) {
        let G = r.events.length - 1;
        for (; G > -1; ) {
            const Pe = r.events[G][1].type;
            if (Pe === "lineEnding" || Pe === "linePrefix") G--;
            else break;
        }
        const X = G > -1 ? r.events[G][1].type : null,
            oe = X === "tableHead" || X === "tableRow" ? E : u;
        return oe === E && r.parser.lazy[r.now().line] ? t(L) : oe(L);
    }
    function u(L) {
        return e.enter("tableHead"), e.enter("tableRow"), s(L);
    }
    function s(L) {
        return L === 124 || ((o = !0), (l += 1)), d(L);
    }
    function d(L) {
        return L === null
            ? t(L)
            : ne(L)
              ? l > 1
                  ? ((l = 0),
                    (r.interrupt = !0),
                    e.exit("tableRow"),
                    e.enter("lineEnding"),
                    e.consume(L),
                    e.exit("lineEnding"),
                    m)
                  : t(L)
              : de(L)
                ? ke(e, d, "whitespace")(L)
                : ((l += 1),
                  o && ((o = !1), (i += 1)),
                  L === 124
                      ? (e.enter("tableCellDivider"), e.consume(L), e.exit("tableCellDivider"), (o = !0), d)
                      : (e.enter("data"), f(L)));
    }
    function f(L) {
        return L === null || L === 124 || Ie(L) ? (e.exit("data"), d(L)) : (e.consume(L), L === 92 ? g : f);
    }
    function g(L) {
        return L === 92 || L === 124 ? (e.consume(L), f) : f(L);
    }
    function m(L) {
        return (
            (r.interrupt = !1),
            r.parser.lazy[r.now().line]
                ? t(L)
                : (e.enter("tableDelimiterRow"),
                  (o = !1),
                  de(L)
                      ? ke(
                            e,
                            y,
                            "linePrefix",
                            r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
                        )(L)
                      : y(L))
        );
    }
    function y(L) {
        return L === 45 || L === 58
            ? z(L)
            : L === 124
              ? ((o = !0), e.enter("tableCellDivider"), e.consume(L), e.exit("tableCellDivider"), w)
              : O(L);
    }
    function w(L) {
        return de(L) ? ke(e, z, "whitespace")(L) : z(L);
    }
    function z(L) {
        return L === 58
            ? ((l += 1), (o = !0), e.enter("tableDelimiterMarker"), e.consume(L), e.exit("tableDelimiterMarker"), v)
            : L === 45
              ? ((l += 1), v(L))
              : L === null || ne(L)
                ? R(L)
                : O(L);
    }
    function v(L) {
        return L === 45 ? (e.enter("tableDelimiterFiller"), k(L)) : O(L);
    }
    function k(L) {
        return L === 45
            ? (e.consume(L), k)
            : L === 58
              ? ((o = !0),
                e.exit("tableDelimiterFiller"),
                e.enter("tableDelimiterMarker"),
                e.consume(L),
                e.exit("tableDelimiterMarker"),
                S)
              : (e.exit("tableDelimiterFiller"), S(L));
    }
    function S(L) {
        return de(L) ? ke(e, R, "whitespace")(L) : R(L);
    }
    function R(L) {
        return L === 124
            ? y(L)
            : L === null || ne(L)
              ? !o || i !== l
                  ? O(L)
                  : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(L))
              : O(L);
    }
    function O(L) {
        return t(L);
    }
    function E(L) {
        return e.enter("tableRow"), F(L);
    }
    function F(L) {
        return L === 124
            ? (e.enter("tableCellDivider"), e.consume(L), e.exit("tableCellDivider"), F)
            : L === null || ne(L)
              ? (e.exit("tableRow"), n(L))
              : de(L)
                ? ke(e, F, "whitespace")(L)
                : (e.enter("data"), M(L));
    }
    function M(L) {
        return L === null || L === 124 || Ie(L) ? (e.exit("data"), F(L)) : (e.consume(L), L === 92 ? q : M);
    }
    function q(L) {
        return L === 92 || L === 124 ? (e.consume(L), M) : M(L);
    }
}
function WC(e, n) {
    let t = -1,
        r = !0,
        i = 0,
        l = [0, 0, 0, 0],
        o = [0, 0, 0, 0],
        a = !1,
        u = 0,
        s,
        d,
        f;
    const g = new jC();
    for (; ++t < e.length; ) {
        const m = e[t],
            y = m[1];
        m[0] === "enter"
            ? y.type === "tableHead"
                ? ((a = !1),
                  u !== 0 && (gh(g, n, u, s, d), (d = void 0), (u = 0)),
                  (s = { type: "table", start: Object.assign({}, y.start), end: Object.assign({}, y.end) }),
                  g.add(t, 0, [["enter", s, n]]))
                : y.type === "tableRow" || y.type === "tableDelimiterRow"
                  ? ((r = !0),
                    (f = void 0),
                    (l = [0, 0, 0, 0]),
                    (o = [0, t + 1, 0, 0]),
                    a &&
                        ((a = !1),
                        (d = { type: "tableBody", start: Object.assign({}, y.start), end: Object.assign({}, y.end) }),
                        g.add(t, 0, [["enter", d, n]])),
                    (i = y.type === "tableDelimiterRow" ? 2 : d ? 3 : 1))
                  : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller")
                    ? ((r = !1),
                      o[2] === 0 &&
                          (l[1] !== 0 && ((o[0] = o[1]), (f = io(g, n, l, i, void 0, f)), (l = [0, 0, 0, 0])),
                          (o[2] = t)))
                    : y.type === "tableCellDivider" &&
                      (r
                          ? (r = !1)
                          : (l[1] !== 0 && ((o[0] = o[1]), (f = io(g, n, l, i, void 0, f))),
                            (l = o),
                            (o = [l[1], t, 0, 0])))
            : y.type === "tableHead"
              ? ((a = !0), (u = t))
              : y.type === "tableRow" || y.type === "tableDelimiterRow"
                ? ((u = t),
                  l[1] !== 0 ? ((o[0] = o[1]), (f = io(g, n, l, i, t, f))) : o[1] !== 0 && (f = io(g, n, o, i, t, f)),
                  (i = 0))
                : i &&
                  (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") &&
                  (o[3] = t);
    }
    for (u !== 0 && gh(g, n, u, s, d), g.consume(n.events), t = -1; ++t < n.events.length; ) {
        const m = n.events[t];
        m[0] === "enter" && m[1].type === "table" && (m[1]._align = UC(n.events, t));
    }
    return e;
}
function io(e, n, t, r, i, l) {
    const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
        a = "tableContent";
    t[0] !== 0 && ((l.end = Object.assign({}, $r(n.events, t[0]))), e.add(t[0], 0, [["exit", l, n]]));
    const u = $r(n.events, t[1]);
    if (
        ((l = { type: o, start: Object.assign({}, u), end: Object.assign({}, u) }),
        e.add(t[1], 0, [["enter", l, n]]),
        t[2] !== 0)
    ) {
        const s = $r(n.events, t[2]),
            d = $r(n.events, t[3]),
            f = { type: a, start: Object.assign({}, s), end: Object.assign({}, d) };
        if ((e.add(t[2], 0, [["enter", f, n]]), r !== 2)) {
            const g = n.events[t[2]],
                m = n.events[t[3]];
            if (
                ((g[1].end = Object.assign({}, m[1].end)),
                (g[1].type = "chunkText"),
                (g[1].contentType = "text"),
                t[3] > t[2] + 1)
            ) {
                const y = t[2] + 1,
                    w = t[3] - t[2] - 1;
                e.add(y, w, []);
            }
        }
        e.add(t[3] + 1, 0, [["exit", f, n]]);
    }
    return (
        i !== void 0 && ((l.end = Object.assign({}, $r(n.events, i))), e.add(i, 0, [["exit", l, n]]), (l = void 0)), l
    );
}
function gh(e, n, t, r, i) {
    const l = [],
        o = $r(n.events, t);
    i && ((i.end = Object.assign({}, o)), l.push(["exit", i, n])),
        (r.end = Object.assign({}, o)),
        l.push(["exit", r, n]),
        e.add(t + 1, 0, l);
}
function $r(e, n) {
    const t = e[n],
        r = t[0] === "enter" ? "start" : "end";
    return t[1][r];
}
const QC = { name: "tasklistCheck", tokenize: YC };
function GC() {
    return { text: { 91: QC } };
}
function YC(e, n, t) {
    const r = this;
    return i;
    function i(u) {
        return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
            ? t(u)
            : (e.enter("taskListCheck"),
              e.enter("taskListCheckMarker"),
              e.consume(u),
              e.exit("taskListCheckMarker"),
              l);
    }
    function l(u) {
        return Ie(u)
            ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), o)
            : u === 88 || u === 120
              ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), o)
              : t(u);
    }
    function o(u) {
        return u === 93
            ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a)
            : t(u);
    }
    function a(u) {
        return ne(u) ? n(u) : de(u) ? e.check({ tokenize: qC }, n, t)(u) : t(u);
    }
}
function qC(e, n, t) {
    return ke(e, r, "whitespace");
    function r(i) {
        return i === null ? t(i) : n(i);
    }
}
function XC(e) {
    return Gg([xC(), NC(), $C(e), HC(), GC()]);
}
const KC = {};
function ZC(e) {
    const n = this,
        t = e || KC,
        r = n.data(),
        i = r.micromarkExtensions || (r.micromarkExtensions = []),
        l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
        o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push(XC(t)), l.push(vC()), o.push(yC(t));
}
const JC = () =>
    V.jsx("div", {
        className: "inline-flex font-sans",
        children: "Thinking..."
            .split("")
            .map((n, t) =>
                V.jsx(
                    "span",
                    {
                        className: "inline-block thinking-bounce motion-reduce:animate-none",
                        style: { animationDelay: `${t * 0.1}s` },
                        children: n,
                    },
                    t
                )
            ),
    });
function eE({
    messages: e,
    sendMessage: n,
    initialMessage: t,
    isLoading: r,
    input: i,
    onInputChange: l,
    onClearMessages: o,
    ...a
}) {
    const u = ie.useRef(null);
    ie.useEffect(() => {
        u.current && (u.current.scrollTop = u.current.scrollHeight);
    }, [e]);
    function s(d) {
        const f = new Date(d);
        return `${f.toLocaleDateString("en", { hour12: !0, dateStyle: "full" })} | ${f.toLocaleTimeString("en", { hour12: !0, timeStyle: "short" })}`;
    }
    return V.jsxs("div", {
        className: "w-full overflow-y-auto overflow-x-hidden md:h-full flex flex-col",
        children: [
            V.jsxs("div", {
                ref: u,
                className: "w-full overflow-y-auto overflow-x-hidden h-full flex flex-col p-4",
                children: [
                    t && V.jsx(ie.Fragment, { children: V.jsx(vh, { ...a, message: t, isLoading: !t.receivedTime }) }),
                    e == null
                        ? void 0
                        : e.map((d, f) =>
                              V.jsxs(
                                  ie.Fragment,
                                  {
                                      children: [
                                          d.receivedTime &&
                                              f === 0 &&
                                              V.jsx("p", {
                                                  className: "text-center text-sm mb-2 text-[#5B6987]",
                                                  children: s(d.receivedTime),
                                              }),
                                          d.receivedTime &&
                                              f > 0 &&
                                              e[f - 1].receivedTime &&
                                              new Date(d.receivedTime).getHours() !==
                                                  new Date(e[f - 1].receivedTime).getHours() &&
                                              V.jsx("p", {
                                                  className: "text-center text-sm mb-2 text-[#5B6987]",
                                                  children: s(d.receivedTime),
                                              }),
                                          V.jsx(vh, { ...a, message: d, isLoading: !d.receivedTime }),
                                      ],
                                  },
                                  d.id
                              )
                          ),
                ],
            }),
            V.jsx(fx, {
                ...a,
                isLoading: r,
                sendMessage: n,
                input: i,
                onInputChange: l,
                onClearMessages: e != null && e.length && (e == null ? void 0 : e.length) > 1 ? o : void 0,
                forceDisabled: a.forceDisabled,
            }),
        ],
    });
}
const vh = ({ message: e, isLoading: n, ...t }) => {
    const r = e.role === "user" ? void 0 : t.LOGO,
        i = e.role === "user" ? t.SECONDARY_COLOR : t.PRIMARY_COLOR,
        l = e.role === "user" ? t.SECONDARY_TEXT : t.PRIMARY_TEXT,
        o = (s) => new Date(s).toLocaleTimeString("en", { timeStyle: "short", hour12: !0 }),
        a = (s) => {
            s && window.parent.postMessage({ type: "openLink", payload: s }, "*");
        },
        u = (s) =>
            s.role !== "user"
                ? null
                : s.isError
                  ? V.jsx(yx, { className: "size-4 text-red-500" })
                  : s.receivedTime && s.role === "user"
                    ? V.jsx("img", { src: px, alt: "check", className: "size-4" })
                    : V.jsxs("svg", {
                          className: "animate-spin size-4 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                              V.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: t.PRIMARY_COLOR,
                                  strokeWidth: "4",
                              }),
                              V.jsx("path", {
                                  className: "opacity-75",
                                  fill: t.PRIMARY_COLOR,
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                          ],
                      });
    return n && e.role !== "user"
        ? V.jsxs("div", {
              className: "mb-4 animate-pulse flex items-end w-[85%] gap-2 fade-in",
              children: [
                  V.jsx("div", { className: "h-8 w-8 bg-gray-200 mb-4 rounded-full" }),
                  V.jsx("div", { className: "h-12 bg-gray-200 flex-1 mb-4 rounded-3xl rounded-bl-none" }),
              ],
          })
        : V.jsxs("div", {
              className: `mb-4 flex flex-col fade-in ${e.role === "user" ? "items-end" : "items-start"}`,
              children: [
                  V.jsxs("div", {
                      className: "max-w-[85%] flex items-end gap-2",
                      children: [
                          r &&
                              V.jsx("div", {
                                  className: "rounded-full h-8 w-8 shrink-0 flex items-center justify-center",
                                  style: { background: i },
                                  children: V.jsx("img", { src: r, className: "w-4 h-4", alt: "Agent icon" }),
                              }),
                          V.jsx("div", {
                              className: `w-full flex-1 inline-block p-4 rounded-3xl ${e.role === "user" ? "rounded-br-none" : "rounded-bl-none"}`,
                              style: { background: i, color: l },
                              children:
                                  e.role === "user"
                                      ? e.content
                                      : !e.content && e.reasoning
                                        ? V.jsx(JC, {})
                                        : V.jsx(Ub, {
                                              remarkPlugins: [ZC],
                                              components: {
                                                  h1: ({ children: s }) =>
                                                      V.jsx("h1", {
                                                          className: "text-[1.7rem] font-extrabold  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  h2: ({ children: s }) =>
                                                      V.jsx("h2", {
                                                          className: "text-2xl font-extrabold  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  h3: ({ children: s }) =>
                                                      V.jsx("h3", {
                                                          className: "text-xl font-extrabold  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  h4: ({ children: s }) =>
                                                      V.jsx("h4", {
                                                          className: "text-lg font-extrabold  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  ul: ({ children: s }) =>
                                                      V.jsx("ul", {
                                                          className: "list-disc pl-6  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  ol: ({ children: s }) =>
                                                      V.jsx("ol", {
                                                          className: "list-decimal pl-6  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  hr: () =>
                                                      V.jsx("hr", {
                                                          className: "border-t border-white/50 last:mb-0 my-4",
                                                      }),
                                                  blockquote: ({ children: s }) =>
                                                      V.jsx("blockquote", {
                                                          className: "border-l border-white pl-6 last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  code: ({ children: s }) =>
                                                      V.jsx("code", {
                                                          className: "text-xs p-1 rounded bg-white/10",
                                                          children: s,
                                                      }),
                                                  pre: ({ children: s, ...d }) =>
                                                      V.jsx("pre", {
                                                          className:
                                                              "text-xs last:mb-0 mb-4 p-2 rounded border border-white/50 bg-white/10 overflow-auto [&>code]:bg-transparent",
                                                          ...d,
                                                          children: s,
                                                      }),
                                                  table: ({ children: s }) =>
                                                      V.jsx("table", {
                                                          className:
                                                              "table-auto  border-l border-t rounded border-collapse border-white/50 bg-white/10 w-full  last:mb-0 mb-4",
                                                          children: s,
                                                      }),
                                                  tr: ({ children: s }) =>
                                                      V.jsx("tr", {
                                                          className: "border-b border-white/50",
                                                          children: s,
                                                      }),
                                                  td: ({ children: s }) =>
                                                      V.jsx("td", {
                                                          className: "p-2 text-sm border-r border-white/50",
                                                          children: s,
                                                      }),
                                                  th: ({ children: s }) =>
                                                      V.jsx("th", {
                                                          className: "p-2 border-r border-white/50",
                                                          children: s,
                                                      }),
                                                  p: (s) =>
                                                      V.jsx("p", {
                                                          className: "font-sans whitespace-pre-wrap last:mb-0 mb-4",
                                                          ...s,
                                                      }),
                                                  a: ({ children: s, href: d }) =>
                                                      V.jsx("span", {
                                                          className: "underline text-left inline cursor-pointer",
                                                          onClick: () => a(d),
                                                          children: s,
                                                      }),
                                                  em: ({ children: s }) =>
                                                      V.jsx("em", { className: "italic", children: s }),
                                                  strong: ({ children: s }) =>
                                                      V.jsx("strong", { className: "font-extrabold", children: s }),
                                                  img: ({ src: s, alt: d }) =>
                                                      V.jsx("img", {
                                                          src: s,
                                                          alt: d,
                                                          className: "w-[75%] h-auto last:mb-0 mb-4",
                                                      }),
                                              },
                                              children: e.content,
                                          }),
                          }),
                          u(e),
                      ],
                  }),
                  e.sentTime &&
                      e.role !== "user" &&
                      V.jsxs("p", {
                          className: "pl-10 text-[10px] text-[#5B6987]",
                          children: ["Sent ", o(e.sentTime)],
                      }),
                  e.role === "user" &&
                      (e.receivedTime
                          ? V.jsxs("p", {
                                className: "pr-6 text-[10px] text-[#5B6987]",
                                children: ["Read ", o(e.receivedTime)],
                            })
                          : V.jsxs("p", {
                                className: "pr-6 text-[10px] text-[#5B6987]",
                                children: ["Sent ", o(e.sentTime)],
                            })),
              ],
          });
};
var rn = [];
for (var zu = 0; zu < 256; ++zu) rn.push((zu + 256).toString(16).slice(1));
function nE(e, n = 0) {
    return (
        rn[e[n + 0]] +
        rn[e[n + 1]] +
        rn[e[n + 2]] +
        rn[e[n + 3]] +
        "-" +
        rn[e[n + 4]] +
        rn[e[n + 5]] +
        "-" +
        rn[e[n + 6]] +
        rn[e[n + 7]] +
        "-" +
        rn[e[n + 8]] +
        rn[e[n + 9]] +
        "-" +
        rn[e[n + 10]] +
        rn[e[n + 11]] +
        rn[e[n + 12]] +
        rn[e[n + 13]] +
        rn[e[n + 14]] +
        rn[e[n + 15]]
    ).toLowerCase();
}
var lo,
    tE = new Uint8Array(16);
function rE() {
    if (!lo && ((lo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !lo))
        throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
    return lo(tE);
}
var iE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const yh = { randomUUID: iE };
function Ou(e, n, t) {
    if (yh.randomUUID && !n && !e) return yh.randomUUID();
    e = e || {};
    var r = e.random || (e.rng || rE)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), nE(r);
}
const Jc = ie.createContext({
        accessToken: null,
        refreshToken: async () => {},
        makeAuthenticatedRequest: async () => new Response(),
    }),
    lE = ({ children: e, agentId: n, apiKey: t }) => {
        const [r, i] = ie.useState(null),
            l = ie.useCallback(async () => {
                try {
                    const u = await fetch(`https://cloud.digitalocean.com/gen-ai/auth/agents/${n}/token`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "X-Api-Key": t },
                        body: JSON.stringify({}),
                    });
                    if (!u.ok)
                        throw u.status === 401
                            ? new Error("Invalid API key")
                            : u.status === 404
                              ? new Error("Agent not found")
                              : new Error("Failed to issue access token");
                    const s = await u.json();
                    i(s.access_token);
                } catch (u) {
                    console.error(u);
                }
            }, [n, t]);
        ie.useEffect(() => {
            r || l();
        }, [r, l]);
        const o = ie.useCallback(async () => {
            try {
                const s = await (
                    await fetch(`https://cloud.digitalocean.com/gen-ai/auth/agents/${n}/token?refresh_token=${r}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json", "X-Api-Key": t },
                        body: JSON.stringify({}),
                    })
                ).json();
                i(s.access_token);
            } catch (u) {
                console.error("Failed to refresh access token", u);
            }
        }, [r, n, t]);
        ie.useEffect(() => {
            const u = setInterval(() => {
                o();
            }, 24e4);
            return () => clearInterval(u);
        }, [o]);
        const a = async (u, s = {}, d = !0) => {
            if (!r) throw new Error("Access token not available");
            const f = await fetch(u, { ...s, headers: { ...s.headers, Authorization: `Bearer ${r}` } });
            return (f.status === 401 || f.status === 403) && d ? (await o(), a(u, s, !1)) : f;
        };
        return V.jsx(Jc.Provider, {
            value: { accessToken: r, refreshToken: o, makeAuthenticatedRequest: a },
            children: e,
        });
    };
function oE(e) {
    const { makeAuthenticatedRequest: n } = ie.useContext(Jc),
        t = {
            id: Ou(),
            role: "assistant",
            content: e.STARTING_MESSAGE,
            sentTime: new Date().toISOString(),
            receivedTime: new Date().toISOString(),
        },
        [r, i] = ie.useState([]),
        [l, o] = ie.useState(!1),
        [a, u] = ie.useState("");
    ie.useEffect(() => {
        try {
            const y = localStorage.getItem("messages");
            y && i(JSON.parse(y));
        } catch (y) {
            console.error("Failed to load from localstorage", y);
        }
    }, []),
        ie.useEffect(() => {
            if (!(r.length < 2))
                try {
                    localStorage.setItem("messages", JSON.stringify(r.slice(-15)));
                } catch (y) {
                    console.error("Failed to save to localstorage", y);
                }
        }, [r]);
    const s = () => {
            try {
                localStorage.removeItem("messages");
            } catch (y) {
                console.error("Failed to remove from localstorage", y);
            }
            i([]);
        },
        d = (y) => {
            u(y.target.value);
        },
        f = (y, w) => {
            o(!1),
                i((z) =>
                    z.map((v) =>
                        v.id === w
                            ? {
                                  ...v,
                                  content: "There was an issue processing your request. Please try again.",
                                  isError: !0,
                                  receivedTime: new Date().toISOString(),
                                  sentTime: new Date().toISOString(),
                              }
                            : v.id === y
                              ? { ...v, isError: !0, receivedTime: new Date().toISOString() }
                              : v
                    )
                );
        };
    function g(y, w, z, v) {
        var k, S, R;
        try {
            let O = "",
                E = "",
                F = !1;
            if (y) {
                y.startsWith("{") || (y = y.slice(y.indexOf("{"))),
                    y.endsWith("}") || (y = y.slice(0, y.lastIndexOf("}") + 1));
                try {
                    const M = JSON.parse(y);
                    (O =
                        ((k = M.choices[0].delta) == null ? void 0 : k.content) ||
                        ((S = M.choices[0].message) == null ? void 0 : S.content) ||
                        ""),
                        (E = M.model || ""),
                        M.guardrails &&
                            ((R = M.guardrails.triggered_guardrails) == null ? void 0 : R.length) > 0 &&
                            (F = !0);
                } catch {
                    O = "";
                }
            }
            i((M) =>
                M.map((q) => {
                    if (q.id === w) {
                        const L = E == null ? void 0 : E.toLowerCase().includes("deepseek");
                        let G = q.content,
                            X = q.reasoning || "",
                            oe = X.includes("</think>");
                        return (
                            L && v && X && !q.content
                                ? ((oe = !0), (G = "There was an issue processing your request. Please try again."))
                                : L && !oe
                                  ? (X += O)
                                  : (G += O),
                            {
                                ...q,
                                reasoning: X,
                                sentTime: q.sentTime || new Date().toISOString(),
                                receivedTime: q.receivedTime || new Date().toISOString(),
                                reasoningCompletedTime: oe
                                    ? q.reasoningCompletedTime || new Date().toISOString()
                                    : void 0,
                                content: v ? G.trim() : G,
                                isComplete: !!v,
                            }
                        );
                    }
                    return q.id === z
                        ? {
                              ...q,
                              receivedTime: new Date().toISOString(),
                              isGuardrailFlagged: q.isGuardrailFlagged || F,
                          }
                        : q;
                })
            );
        } catch (O) {
            console.error("Failed to parse JSON:", O);
        }
    }
    const m = async (y) => {
        var v;
        y.preventDefault();
        const w = Ou(),
            z = Ou();
        i((k) => [
            ...k,
            { id: w, role: "user", content: a.trim(), sentTime: new Date().toISOString(), receivedTime: "" },
            { id: z, role: "assistant", content: "", sentTime: "", receivedTime: "" },
        ]),
            o(!0);
        try {
            const k = await n(`${e.API_URL}/api/v1/chat/completions`, {
                method: "POST",
                body: JSON.stringify({
                    messages: [
                        ...r.map((E) => (E.isGuardrailFlagged ? { ...E, content: "[REDACTED]" } : E)),
                        { id: w, role: "user", content: a, sentTime: new Date().toISOString(), receivedTime: "" },
                    ],
                    stream: !0,
                    include_functions_info: !0,
                    include_retrieval_info: !0,
                    include_guardrails_info: !0,
                }),
                headers: { "Content-Type": "application/json" },
            });
            if (!k.ok) throw new Error("Network response was not ok");
            const S = (v = k.body) == null ? void 0 : v.getReader();
            let R = "";
            const O = () => {
                S == null ||
                    S.read()
                        .then(({ value: E, done: F }) => {
                            if (F) {
                                g(R, z, w, !0), u(""), o(!1);
                                return;
                            }
                            R += new TextDecoder().decode(E);
                            const M = R.split(`
`);
                            (R = M.pop() || ""),
                                M.forEach((q) => {
                                    q && g(q, z, w);
                                }),
                                O();
                        })
                        .catch((E) => {
                            console.error("Failed to read response", E), f(w, z);
                        });
            };
            O();
        } catch (k) {
            console.error("Failed to read response", k), f(w, z);
        }
    };
    return V.jsxs("div", {
        className: "flex flex-col justify-between w-full h-full",
        children: [
            V.jsxs("div", {
                className: "flex py-2 px-4 items-center justify-between",
                style: { background: e.PRIMARY_COLOR },
                children: [
                    V.jsx("p", {
                        className: "font-semibold",
                        style: { color: e.PRIMARY_TEXT },
                        children: e.AGENT_NAME,
                    }),
                    !e.RENDER_TARGET_ID &&
                        V.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                V.jsx("button", {
                                    onClick: e.onExpand,
                                    children: e.isExpanded
                                        ? V.jsx(hx, { className: "size-4", style: { color: e.PRIMARY_TEXT } })
                                        : V.jsx(gx, { className: "size-4", style: { color: e.PRIMARY_TEXT } }),
                                }),
                                V.jsx("button", {
                                    onClick: e.onClose,
                                    children: V.jsx(wx, { className: "size-5", style: { color: e.PRIMARY_TEXT } }),
                                }),
                            ],
                        }),
                ],
            }),
            V.jsx(eE, {
                ...e,
                messages: r,
                initialMessage: r.length === 0 ? t : void 0,
                sendMessage: m,
                isLoading: l,
                input: a,
                onInputChange: d,
                onClearMessages: s,
                forceDisabled: e.forceDisabled,
            }),
        ],
    });
}
const aE =
    "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Close-32'%3e%3cpath%20id='icon-close-32'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.2071%2010.2071C23.5976%209.81658%2023.5976%209.18342%2023.2071%208.79289C22.8166%208.40237%2022.1834%208.40237%2021.7929%208.79289L16%2014.5858L10.2071%208.79289C9.81658%208.40237%209.18342%208.40237%208.79289%208.79289C8.40237%209.18342%208.40237%209.81658%208.79289%2010.2071L14.5858%2016L8.79289%2021.7929C8.40237%2022.1834%208.40237%2022.8166%208.79289%2023.2071C9.18342%2023.5976%209.81658%2023.5976%2010.2071%2023.2071L16%2017.4142L21.7929%2023.2071C22.1834%2023.5976%2022.8166%2023.5976%2023.2071%2023.2071C23.5976%2022.8166%2023.5976%2022.1834%2023.2071%2021.7929L17.4142%2016L23.2071%2010.2071Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";
function uE(e) {
    const [n, t] = ie.useState(!1),
        [r, i] = ie.useState(!1),
        { accessToken: l } = ie.useContext(Jc);
    ie.useEffect(() => {
        const u = (d) => {
                if (d.key === "Escape") {
                    const buttonText = document.getElementsByName("buttonText")[0];
                    if (buttonText)   { buttonText.style.display = ""; }
                    const initialWidth = Be.INITIAL_WIDTH  || "80px";
                    const initialHeight = Be.INITIAL_HEIGHT  || "80px";
                    t(!1);
                    window.parent.postMessage({ type: "resize", payload: { width: initialWidth, height: initialHeight } }, "*");
                }
            },
            s = (d) => {
                if (d.data.type === "close") {
                    const buttonText = document.getElementsByName("buttonText")[0];
                    if (buttonText)   { buttonText.style.display = ""; }
                    const initialWidth = Be.INITIAL_WIDTH  || "80px";
                    const initialHeight = Be.INITIAL_HEIGHT  || "80px";
                    t(!1);
                    window.parent.postMessage({ type: "resize", payload: { width: initialWidth, height: initialHeight } }, "*");

                                        
                }
            };
        return (
            window.addEventListener("message", s),
            window.addEventListener("keydown", u),
            () => {
                window.removeEventListener("message", s), window.removeEventListener("keydown", u);
            }
        );
    }, []);
    
    const buttonText = document.getElementsByName("buttonText")[0];
    const o = () => {
            const u = !r;
            window.parent.postMessage(
                { type: "resize", payload: { width: u ? "100%" : "440px", height: u ? "100%" : "800px", expanded: u } },
                "*"
            ),
                i(u);
        },
        a = () => {
            if (l) {
                if (n) {
                    const initialWidth = Be.INITIAL_WIDTH  || "80px";
                    const initialHeight = Be.INITIAL_HEIGHT  || "80px";
                    window.parent.postMessage({ type: "resize", payload: { width: initialWidth, height: initialHeight } }, "*");
                    if (buttonText)   { buttonText.style.display = ""; }
                } else {
                    if (buttonText)   buttonText.style.display = "none";
                    window.parent.postMessage(
                        {
                            type: "resize",
                            payload: { width: r ? "100%" : "440px", height: r ? "100%" : "800px", expanded: r },
                        },
                        "*"
                    );
                }
                t((u) => !u);
            }
        };
    return V.jsxs(V.Fragment, {
        children: [
            (!n || (n && !r)) &&
                !e.RENDER_TARGET_ID &&
                V.jsx("div", {
                    className: "fixed bottom-1 right-1 z-50 rounded",
                    children: V.jsx("button", {
                        onClick: a,
                        disabled: !l,
                        className: e.BUTTON_TEXT_DISPLAY && e.BUTTON_TEXT_DISPLAY !== ""
                            ? "min-w-4 min-h-4 gap-2 flex shadow shadow-black/50 items-center justify-center hover:opacity-75 transition-opacity disabled:pointer-events-none disabled:opacity-50"
                            : "w-16 h-16 flex shadow shadow-black/50 items-center justify-center rounded-full hover:opacity-75 transition-opacity disabled:pointer-events-none disabled:opacity-50",
                        style: e.BUTTON_TEXT_DISPLAY && e.BUTTON_TEXT_DISPLAY !== ""
                            ? { background: e.PRIMARY_COLOR, borderRadius: "2rem", minHeight: "4em", minWidth: "4em" }
                            : { background: e.PRIMARY_COLOR },
                        children: [
                            V.jsx("img", {
                                className: "w-8 h-8 object-contain",
                                style: e.BUTTON_TEXT_DISPLAY && e.BUTTON_TEXT_DISPLAY !== "" && !n ? { marginLeft: "2em" } : {},
                                src: n ? aE : e.LOGO,
                                alt: e.AGENT_NAME,
                                name: "logoTarget"
                            }),
                            e.BUTTON_TEXT_DISPLAY && e.BUTTON_TEXT_DISPLAY !== "" && V.jsx("div", {
                                className: "font-semibold",
                                style: { marginRight: "2em", textWrap: "nowrap" },
                                children: e.BUTTON_TEXT_DISPLAY,
                                name: "buttonText"
                            })
                        ]
                    }),
                }),
            (n || !!e.RENDER_TARGET_ID) &&
                V.jsx("div", {
                    className: `${e.RENDER_TARGET_ID ? "absolute top-0 left-0 w-full h-full" : `fixed overflow-hidden shadow-md rounded fade-in ${r ? "top-0 z-[1000] left-0 p-8 sm:p-16 bg-gray-500/50 h-screen w-screen flex items-center justify-center" : "right-3 bottom-20 w-[400px] h-[600px] max-h-[calc(100vh-10rem)] max-w-[calc(100vw-2rem)]"}`}  `,
                    children: V.jsx("div", {
                        className: "bg-white w-full h-full overflow-hidden",
                        children: V.jsx(oE, { ...e, onClose: a, isExpanded: r, onExpand: o, forceDisabled: !l }),
                    }),
                }),
        ],
    });
}
var F0 = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ (function (e, n) {
    (function (t, r) {
        e.exports = r();
    })(Au, function () {
        for (
            var t = function (c, p, h) {
                    return p === void 0 && (p = 0), h === void 0 && (h = 1), c < p ? p : c > h ? h : c;
                },
                r = t,
                i = function (c) {
                    (c._clipped = !1), (c._unclipped = c.slice(0));
                    for (var p = 0; p <= 3; p++)
                        p < 3
                            ? ((c[p] < 0 || c[p] > 255) && (c._clipped = !0), (c[p] = r(c[p], 0, 255)))
                            : p === 3 && (c[p] = r(c[p], 0, 1));
                    return c;
                },
                l = {},
                o = 0,
                a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
            o < a.length;
            o += 1
        ) {
            var u = a[o];
            l["[object " + u + "]"] = u.toLowerCase();
        }
        var s = function (c) {
                return l[Object.prototype.toString.call(c)] || "object";
            },
            d = s,
            f = function (c, p) {
                return (
                    p === void 0 && (p = null),
                    c.length >= 3
                        ? Array.prototype.slice.call(c)
                        : d(c[0]) == "object" && p
                          ? p
                                .split("")
                                .filter(function (h) {
                                    return c[0][h] !== void 0;
                                })
                                .map(function (h) {
                                    return c[0][h];
                                })
                          : c[0]
                );
            },
            g = s,
            m = function (c) {
                if (c.length < 2) return null;
                var p = c.length - 1;
                return g(c[p]) == "string" ? c[p].toLowerCase() : null;
            },
            y = Math.PI,
            w = {
                clip_rgb: i,
                limit: t,
                type: s,
                unpack: f,
                last: m,
                PI: y,
                TWOPI: y * 2,
                PITHIRD: y / 3,
                DEG2RAD: y / 180,
                RAD2DEG: 180 / y,
            },
            z = { format: {}, autodetect: [] },
            v = w.last,
            k = w.clip_rgb,
            S = w.type,
            R = z,
            O = function () {
                for (var p = [], h = arguments.length; h--; ) p[h] = arguments[h];
                var x = this;
                if (S(p[0]) === "object" && p[0].constructor && p[0].constructor === this.constructor) return p[0];
                var _ = v(p),
                    P = !1;
                if (!_) {
                    (P = !0),
                        R.sorted ||
                            ((R.autodetect = R.autodetect.sort(function ($, Y) {
                                return Y.p - $.p;
                            })),
                            (R.sorted = !0));
                    for (var C = 0, I = R.autodetect; C < I.length; C += 1) {
                        var N = I[C];
                        if (((_ = N.test.apply(N, p)), _)) break;
                    }
                }
                if (R.format[_]) {
                    var D = R.format[_].apply(null, P ? p : p.slice(0, -1));
                    x._rgb = k(D);
                } else throw new Error("unknown format: " + p);
                x._rgb.length === 3 && x._rgb.push(1);
            };
        O.prototype.toString = function () {
            return S(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
        };
        var E = O,
            F = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(F.Color, [null].concat(c)))();
            };
        (F.Color = E), (F.version = "2.4.2");
        var M = F,
            q = w.unpack,
            L = Math.max,
            G = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = q(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2];
                (x = x / 255), (_ = _ / 255), (P = P / 255);
                var C = 1 - L(x, L(_, P)),
                    I = C < 1 ? 1 / (1 - C) : 0,
                    N = (1 - x - C) * I,
                    D = (1 - _ - C) * I,
                    $ = (1 - P - C) * I;
                return [N, D, $, C];
            },
            X = G,
            oe = w.unpack,
            Pe = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = oe(c, "cmyk");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P = c[3],
                    C = c.length > 4 ? c[4] : 1;
                return P === 1
                    ? [0, 0, 0, C]
                    : [
                          h >= 1 ? 0 : 255 * (1 - h) * (1 - P),
                          x >= 1 ? 0 : 255 * (1 - x) * (1 - P),
                          _ >= 1 ? 0 : 255 * (1 - _) * (1 - P),
                          C,
                      ];
            },
            fe = Pe,
            He = M,
            De = E,
            Q = z,
            ee = w.unpack,
            b = w.type,
            me = X;
        (De.prototype.cmyk = function () {
            return me(this._rgb);
        }),
            (He.cmyk = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(De, [null].concat(c, ["cmyk"])))();
            }),
            (Q.format.cmyk = fe),
            Q.autodetect.push({
                p: 2,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = ee(c, "cmyk")), b(c) === "array" && c.length === 4)) return "cmyk";
                },
            });
        var Se = w.unpack,
            T = w.last,
            Fe = function (c) {
                return Math.round(c * 100) / 100;
            },
            Tn = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Se(c, "hsla"),
                    x = T(c) || "lsa";
                return (
                    (h[0] = Fe(h[0] || 0)),
                    (h[1] = Fe(h[1] * 100) + "%"),
                    (h[2] = Fe(h[2] * 100) + "%"),
                    x === "hsla" || (h.length > 3 && h[3] < 1)
                        ? ((h[3] = h.length > 3 ? h[3] : 1), (x = "hsla"))
                        : (h.length = 3),
                    x + "(" + h.join(",") + ")"
                );
            },
            Le = Tn,
            Mn = w.unpack,
            ot = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = Mn(c, "rgba");
                var h = c[0],
                    x = c[1],
                    _ = c[2];
                (h /= 255), (x /= 255), (_ /= 255);
                var P = Math.min(h, x, _),
                    C = Math.max(h, x, _),
                    I = (C + P) / 2,
                    N,
                    D;
                return (
                    C === P ? ((N = 0), (D = Number.NaN)) : (N = I < 0.5 ? (C - P) / (C + P) : (C - P) / (2 - C - P)),
                    h == C
                        ? (D = (x - _) / (C - P))
                        : x == C
                          ? (D = 2 + (_ - h) / (C - P))
                          : _ == C && (D = 4 + (h - x) / (C - P)),
                    (D *= 60),
                    D < 0 && (D += 360),
                    c.length > 3 && c[3] !== void 0 ? [D, N, I, c[3]] : [D, N, I]
                );
            },
            ht = ot,
            It = w.unpack,
            _r = w.last,
            va = Le,
            ya = ht,
            vi = Math.round,
            wl = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = It(c, "rgba"),
                    x = _r(c) || "rgb";
                return x.substr(0, 3) == "hsl"
                    ? va(ya(h), x)
                    : ((h[0] = vi(h[0])),
                      (h[1] = vi(h[1])),
                      (h[2] = vi(h[2])),
                      (x === "rgba" || (h.length > 3 && h[3] < 1)) && ((h[3] = h.length > 3 ? h[3] : 1), (x = "rgba")),
                      x + "(" + h.slice(0, x === "rgb" ? 3 : 4).join(",") + ")");
            },
            xl = wl,
            Sl = w.unpack,
            yi = Math.round,
            bl = function () {
                for (var c, p = [], h = arguments.length; h--; ) p[h] = arguments[h];
                p = Sl(p, "hsl");
                var x = p[0],
                    _ = p[1],
                    P = p[2],
                    C,
                    I,
                    N;
                if (_ === 0) C = I = N = P * 255;
                else {
                    var D = [0, 0, 0],
                        $ = [0, 0, 0],
                        Y = P < 0.5 ? P * (1 + _) : P + _ - P * _,
                        j = 2 * P - Y,
                        J = x / 360;
                    (D[0] = J + 1 / 3), (D[1] = J), (D[2] = J - 1 / 3);
                    for (var K = 0; K < 3; K++)
                        D[K] < 0 && (D[K] += 1),
                            D[K] > 1 && (D[K] -= 1),
                            6 * D[K] < 1
                                ? ($[K] = j + (Y - j) * 6 * D[K])
                                : 2 * D[K] < 1
                                  ? ($[K] = Y)
                                  : 3 * D[K] < 2
                                    ? ($[K] = j + (Y - j) * (2 / 3 - D[K]) * 6)
                                    : ($[K] = j);
                    (c = [yi($[0] * 255), yi($[1] * 255), yi($[2] * 255)]), (C = c[0]), (I = c[1]), (N = c[2]);
                }
                return p.length > 3 ? [C, I, N, p[3]] : [C, I, N, 1];
            },
            ki = bl,
            Cl = ki,
            El = z,
            _l = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            Tl = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            Pl = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            A =
                /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            W = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            re =
                /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            se = Math.round,
            be = function (c) {
                c = c.toLowerCase().trim();
                var p;
                if (El.format.named)
                    try {
                        return El.format.named(c);
                    } catch {}
                if ((p = c.match(_l))) {
                    for (var h = p.slice(1, 4), x = 0; x < 3; x++) h[x] = +h[x];
                    return (h[3] = 1), h;
                }
                if ((p = c.match(Tl))) {
                    for (var _ = p.slice(1, 5), P = 0; P < 4; P++) _[P] = +_[P];
                    return _;
                }
                if ((p = c.match(Pl))) {
                    for (var C = p.slice(1, 4), I = 0; I < 3; I++) C[I] = se(C[I] * 2.55);
                    return (C[3] = 1), C;
                }
                if ((p = c.match(A))) {
                    for (var N = p.slice(1, 5), D = 0; D < 3; D++) N[D] = se(N[D] * 2.55);
                    return (N[3] = +N[3]), N;
                }
                if ((p = c.match(W))) {
                    var $ = p.slice(1, 4);
                    ($[1] *= 0.01), ($[2] *= 0.01);
                    var Y = Cl($);
                    return (Y[3] = 1), Y;
                }
                if ((p = c.match(re))) {
                    var j = p.slice(1, 4);
                    (j[1] *= 0.01), (j[2] *= 0.01);
                    var J = Cl(j);
                    return (J[3] = +p[4]), J;
                }
            };
        be.test = function (c) {
            return _l.test(c) || Tl.test(c) || Pl.test(c) || A.test(c) || W.test(c) || re.test(c);
        };
        var Pn = be,
            mt = M,
            Fn = E,
            Nt = z,
            ir = w.type,
            hn = xl,
            gt = Pn;
        (Fn.prototype.css = function (c) {
            return hn(this._rgb, c);
        }),
            (mt.css = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(Fn, [null].concat(c, ["css"])))();
            }),
            (Nt.format.css = gt),
            Nt.autodetect.push({
                p: 5,
                test: function (c) {
                    for (var p = [], h = arguments.length - 1; h-- > 0; ) p[h] = arguments[h + 1];
                    if (!p.length && ir(c) === "string" && gt.test(c)) return "css";
                },
            });
        var $n = E,
            H0 = M,
            V0 = z,
            W0 = w.unpack;
        (V0.format.gl = function () {
            for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
            var h = W0(c, "rgba");
            return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h;
        }),
            (H0.gl = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply($n, [null].concat(c, ["gl"])))();
            }),
            ($n.prototype.gl = function () {
                var c = this._rgb;
                return [c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
            });
        var Q0 = w.unpack,
            G0 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Q0(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = Math.min(x, _, P),
                    I = Math.max(x, _, P),
                    N = I - C,
                    D = (N * 100) / 255,
                    $ = (C / (255 - N)) * 100,
                    Y;
                return (
                    N === 0
                        ? (Y = Number.NaN)
                        : (x === I && (Y = (_ - P) / N),
                          _ === I && (Y = 2 + (P - x) / N),
                          P === I && (Y = 4 + (x - _) / N),
                          (Y *= 60),
                          Y < 0 && (Y += 360)),
                    [Y, D, $]
                );
            },
            Y0 = G0,
            q0 = w.unpack,
            X0 = Math.floor,
            K0 = function () {
                for (var c, p, h, x, _, P, C = [], I = arguments.length; I--; ) C[I] = arguments[I];
                C = q0(C, "hcg");
                var N = C[0],
                    D = C[1],
                    $ = C[2],
                    Y,
                    j,
                    J;
                $ = $ * 255;
                var K = D * 255;
                if (D === 0) Y = j = J = $;
                else {
                    N === 360 && (N = 0), N > 360 && (N -= 360), N < 0 && (N += 360), (N /= 60);
                    var ae = X0(N),
                        pe = N - ae,
                        ve = $ * (1 - D),
                        xe = ve + K * (1 - pe),
                        nn = ve + K * pe,
                        Ze = ve + K;
                    switch (ae) {
                        case 0:
                            (c = [Ze, nn, ve]), (Y = c[0]), (j = c[1]), (J = c[2]);
                            break;
                        case 1:
                            (p = [xe, Ze, ve]), (Y = p[0]), (j = p[1]), (J = p[2]);
                            break;
                        case 2:
                            (h = [ve, Ze, nn]), (Y = h[0]), (j = h[1]), (J = h[2]);
                            break;
                        case 3:
                            (x = [ve, xe, Ze]), (Y = x[0]), (j = x[1]), (J = x[2]);
                            break;
                        case 4:
                            (_ = [nn, ve, Ze]), (Y = _[0]), (j = _[1]), (J = _[2]);
                            break;
                        case 5:
                            (P = [Ze, ve, xe]), (Y = P[0]), (j = P[1]), (J = P[2]);
                            break;
                    }
                }
                return [Y, j, J, C.length > 3 ? C[3] : 1];
            },
            Z0 = K0,
            J0 = w.unpack,
            e1 = w.type,
            n1 = M,
            ef = E,
            nf = z,
            t1 = Y0;
        (ef.prototype.hcg = function () {
            return t1(this._rgb);
        }),
            (n1.hcg = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(ef, [null].concat(c, ["hcg"])))();
            }),
            (nf.format.hcg = Z0),
            nf.autodetect.push({
                p: 1,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = J0(c, "hcg")), e1(c) === "array" && c.length === 3)) return "hcg";
                },
            });
        var r1 = w.unpack,
            i1 = w.last,
            Ll = Math.round,
            l1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = r1(c, "rgba"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = h[3],
                    I = i1(c) || "auto";
                C === void 0 && (C = 1),
                    I === "auto" && (I = C < 1 ? "rgba" : "rgb"),
                    (x = Ll(x)),
                    (_ = Ll(_)),
                    (P = Ll(P));
                var N = (x << 16) | (_ << 8) | P,
                    D = "000000" + N.toString(16);
                D = D.substr(D.length - 6);
                var $ = "0" + Ll(C * 255).toString(16);
                switch ((($ = $.substr($.length - 2)), I.toLowerCase())) {
                    case "rgba":
                        return "#" + D + $;
                    case "argb":
                        return "#" + $ + D;
                    default:
                        return "#" + D;
                }
            },
            tf = l1,
            o1 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            a1 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            u1 = function (c) {
                if (c.match(o1)) {
                    (c.length === 4 || c.length === 7) && (c = c.substr(1)),
                        c.length === 3 && ((c = c.split("")), (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]));
                    var p = parseInt(c, 16),
                        h = p >> 16,
                        x = (p >> 8) & 255,
                        _ = p & 255;
                    return [h, x, _, 1];
                }
                if (c.match(a1)) {
                    (c.length === 5 || c.length === 9) && (c = c.substr(1)),
                        c.length === 4 &&
                            ((c = c.split("")), (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2] + c[3] + c[3]));
                    var P = parseInt(c, 16),
                        C = (P >> 24) & 255,
                        I = (P >> 16) & 255,
                        N = (P >> 8) & 255,
                        D = Math.round(((P & 255) / 255) * 100) / 100;
                    return [C, I, N, D];
                }
                throw new Error("unknown hex color: " + c);
            },
            rf = u1,
            s1 = M,
            lf = E,
            c1 = w.type,
            of = z,
            f1 = tf;
        (lf.prototype.hex = function (c) {
            return f1(this._rgb, c);
        }),
            (s1.hex = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(lf, [null].concat(c, ["hex"])))();
            }),
            (of.format.hex = rf),
            of.autodetect.push({
                p: 4,
                test: function (c) {
                    for (var p = [], h = arguments.length - 1; h-- > 0; ) p[h] = arguments[h + 1];
                    if (!p.length && c1(c) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(c.length) >= 0) return "hex";
                },
            });
        var p1 = w.unpack,
            af = w.TWOPI,
            d1 = Math.min,
            h1 = Math.sqrt,
            m1 = Math.acos,
            g1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = p1(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2];
                (x /= 255), (_ /= 255), (P /= 255);
                var C,
                    I = d1(x, _, P),
                    N = (x + _ + P) / 3,
                    D = N > 0 ? 1 - I / N : 0;
                return (
                    D === 0
                        ? (C = NaN)
                        : ((C = (x - _ + (x - P)) / 2),
                          (C /= h1((x - _) * (x - _) + (x - P) * (_ - P))),
                          (C = m1(C)),
                          P > _ && (C = af - C),
                          (C /= af)),
                    [C * 360, D, N]
                );
            },
            v1 = g1,
            y1 = w.unpack,
            ka = w.limit,
            Tr = w.TWOPI,
            wa = w.PITHIRD,
            Pr = Math.cos,
            k1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = y1(c, "hsi");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P,
                    C,
                    I;
                return (
                    isNaN(h) && (h = 0),
                    isNaN(x) && (x = 0),
                    h > 360 && (h -= 360),
                    h < 0 && (h += 360),
                    (h /= 360),
                    h < 1 / 3
                        ? ((I = (1 - x) / 3), (P = (1 + (x * Pr(Tr * h)) / Pr(wa - Tr * h)) / 3), (C = 1 - (I + P)))
                        : h < 2 / 3
                          ? ((h -= 1 / 3),
                            (P = (1 - x) / 3),
                            (C = (1 + (x * Pr(Tr * h)) / Pr(wa - Tr * h)) / 3),
                            (I = 1 - (P + C)))
                          : ((h -= 2 / 3),
                            (C = (1 - x) / 3),
                            (I = (1 + (x * Pr(Tr * h)) / Pr(wa - Tr * h)) / 3),
                            (P = 1 - (C + I))),
                    (P = ka(_ * P * 3)),
                    (C = ka(_ * C * 3)),
                    (I = ka(_ * I * 3)),
                    [P * 255, C * 255, I * 255, c.length > 3 ? c[3] : 1]
                );
            },
            w1 = k1,
            x1 = w.unpack,
            S1 = w.type,
            b1 = M,
            uf = E,
            sf = z,
            C1 = v1;
        (uf.prototype.hsi = function () {
            return C1(this._rgb);
        }),
            (b1.hsi = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(uf, [null].concat(c, ["hsi"])))();
            }),
            (sf.format.hsi = w1),
            sf.autodetect.push({
                p: 2,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = x1(c, "hsi")), S1(c) === "array" && c.length === 3)) return "hsi";
                },
            });
        var E1 = w.unpack,
            _1 = w.type,
            T1 = M,
            cf = E,
            ff = z,
            P1 = ht;
        (cf.prototype.hsl = function () {
            return P1(this._rgb);
        }),
            (T1.hsl = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(cf, [null].concat(c, ["hsl"])))();
            }),
            (ff.format.hsl = ki),
            ff.autodetect.push({
                p: 2,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = E1(c, "hsl")), _1(c) === "array" && c.length === 3)) return "hsl";
                },
            });
        var L1 = w.unpack,
            I1 = Math.min,
            N1 = Math.max,
            R1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = L1(c, "rgb");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P = I1(h, x, _),
                    C = N1(h, x, _),
                    I = C - P,
                    N,
                    D,
                    $;
                return (
                    ($ = C / 255),
                    C === 0
                        ? ((N = Number.NaN), (D = 0))
                        : ((D = I / C),
                          h === C && (N = (x - _) / I),
                          x === C && (N = 2 + (_ - h) / I),
                          _ === C && (N = 4 + (h - x) / I),
                          (N *= 60),
                          N < 0 && (N += 360)),
                    [N, D, $]
                );
            },
            z1 = R1,
            O1 = w.unpack,
            A1 = Math.floor,
            D1 = function () {
                for (var c, p, h, x, _, P, C = [], I = arguments.length; I--; ) C[I] = arguments[I];
                C = O1(C, "hsv");
                var N = C[0],
                    D = C[1],
                    $ = C[2],
                    Y,
                    j,
                    J;
                if ((($ *= 255), D === 0)) Y = j = J = $;
                else {
                    N === 360 && (N = 0), N > 360 && (N -= 360), N < 0 && (N += 360), (N /= 60);
                    var K = A1(N),
                        ae = N - K,
                        pe = $ * (1 - D),
                        ve = $ * (1 - D * ae),
                        xe = $ * (1 - D * (1 - ae));
                    switch (K) {
                        case 0:
                            (c = [$, xe, pe]), (Y = c[0]), (j = c[1]), (J = c[2]);
                            break;
                        case 1:
                            (p = [ve, $, pe]), (Y = p[0]), (j = p[1]), (J = p[2]);
                            break;
                        case 2:
                            (h = [pe, $, xe]), (Y = h[0]), (j = h[1]), (J = h[2]);
                            break;
                        case 3:
                            (x = [pe, ve, $]), (Y = x[0]), (j = x[1]), (J = x[2]);
                            break;
                        case 4:
                            (_ = [xe, pe, $]), (Y = _[0]), (j = _[1]), (J = _[2]);
                            break;
                        case 5:
                            (P = [$, pe, ve]), (Y = P[0]), (j = P[1]), (J = P[2]);
                            break;
                    }
                }
                return [Y, j, J, C.length > 3 ? C[3] : 1];
            },
            M1 = D1,
            F1 = w.unpack,
            $1 = w.type,
            j1 = M,
            pf = E,
            df = z,
            B1 = z1;
        (pf.prototype.hsv = function () {
            return B1(this._rgb);
        }),
            (j1.hsv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(pf, [null].concat(c, ["hsv"])))();
            }),
            (df.format.hsv = M1),
            df.autodetect.push({
                p: 2,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = F1(c, "hsv")), $1(c) === "array" && c.length === 3)) return "hsv";
                },
            });
        var Il = {
                Kn: 18,
                Xn: 0.95047,
                Yn: 1,
                Zn: 1.08883,
                t0: 0.137931034,
                t1: 0.206896552,
                t2: 0.12841855,
                t3: 0.008856452,
            },
            Lr = Il,
            U1 = w.unpack,
            hf = Math.pow,
            H1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = U1(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = V1(x, _, P),
                    I = C[0],
                    N = C[1],
                    D = C[2],
                    $ = 116 * N - 16;
                return [$ < 0 ? 0 : $, 500 * (I - N), 200 * (N - D)];
            },
            xa = function (c) {
                return (c /= 255) <= 0.04045 ? c / 12.92 : hf((c + 0.055) / 1.055, 2.4);
            },
            Sa = function (c) {
                return c > Lr.t3 ? hf(c, 1 / 3) : c / Lr.t2 + Lr.t0;
            },
            V1 = function (c, p, h) {
                (c = xa(c)), (p = xa(p)), (h = xa(h));
                var x = Sa((0.4124564 * c + 0.3575761 * p + 0.1804375 * h) / Lr.Xn),
                    _ = Sa((0.2126729 * c + 0.7151522 * p + 0.072175 * h) / Lr.Yn),
                    P = Sa((0.0193339 * c + 0.119192 * p + 0.9503041 * h) / Lr.Zn);
                return [x, _, P];
            },
            mf = H1,
            Ir = Il,
            W1 = w.unpack,
            Q1 = Math.pow,
            G1 = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = W1(c, "lab");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P,
                    C,
                    I,
                    N,
                    D,
                    $;
                return (
                    (C = (h + 16) / 116),
                    (P = isNaN(x) ? C : C + x / 500),
                    (I = isNaN(_) ? C : C - _ / 200),
                    (C = Ir.Yn * Ca(C)),
                    (P = Ir.Xn * Ca(P)),
                    (I = Ir.Zn * Ca(I)),
                    (N = ba(3.2404542 * P - 1.5371385 * C - 0.4985314 * I)),
                    (D = ba(-0.969266 * P + 1.8760108 * C + 0.041556 * I)),
                    ($ = ba(0.0556434 * P - 0.2040259 * C + 1.0572252 * I)),
                    [N, D, $, c.length > 3 ? c[3] : 1]
                );
            },
            ba = function (c) {
                return 255 * (c <= 0.00304 ? 12.92 * c : 1.055 * Q1(c, 1 / 2.4) - 0.055);
            },
            Ca = function (c) {
                return c > Ir.t1 ? c * c * c : Ir.t2 * (c - Ir.t0);
            },
            gf = G1,
            Y1 = w.unpack,
            q1 = w.type,
            X1 = M,
            vf = E,
            yf = z,
            K1 = mf;
        (vf.prototype.lab = function () {
            return K1(this._rgb);
        }),
            (X1.lab = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(vf, [null].concat(c, ["lab"])))();
            }),
            (yf.format.lab = gf),
            yf.autodetect.push({
                p: 2,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = Y1(c, "lab")), q1(c) === "array" && c.length === 3)) return "lab";
                },
            });
        var Z1 = w.unpack,
            J1 = w.RAD2DEG,
            ev = Math.sqrt,
            nv = Math.atan2,
            tv = Math.round,
            rv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Z1(c, "lab"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = ev(_ * _ + P * P),
                    I = (nv(P, _) * J1 + 360) % 360;
                return tv(C * 1e4) === 0 && (I = Number.NaN), [x, C, I];
            },
            kf = rv,
            iv = w.unpack,
            lv = mf,
            ov = kf,
            av = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = iv(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = lv(x, _, P),
                    I = C[0],
                    N = C[1],
                    D = C[2];
                return ov(I, N, D);
            },
            uv = av,
            sv = w.unpack,
            cv = w.DEG2RAD,
            fv = Math.sin,
            pv = Math.cos,
            dv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = sv(c, "lch"),
                    x = h[0],
                    _ = h[1],
                    P = h[2];
                return isNaN(P) && (P = 0), (P = P * cv), [x, pv(P) * _, fv(P) * _];
            },
            wf = dv,
            hv = w.unpack,
            mv = wf,
            gv = gf,
            vv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = hv(c, "lch");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P = mv(h, x, _),
                    C = P[0],
                    I = P[1],
                    N = P[2],
                    D = gv(C, I, N),
                    $ = D[0],
                    Y = D[1],
                    j = D[2];
                return [$, Y, j, c.length > 3 ? c[3] : 1];
            },
            xf = vv,
            yv = w.unpack,
            kv = xf,
            wv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = yv(c, "hcl").reverse();
                return kv.apply(void 0, h);
            },
            xv = wv,
            Sv = w.unpack,
            bv = w.type,
            Sf = M,
            Nl = E,
            Ea = z,
            bf = uv;
        (Nl.prototype.lch = function () {
            return bf(this._rgb);
        }),
            (Nl.prototype.hcl = function () {
                return bf(this._rgb).reverse();
            }),
            (Sf.lch = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(Nl, [null].concat(c, ["lch"])))();
            }),
            (Sf.hcl = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(Nl, [null].concat(c, ["hcl"])))();
            }),
            (Ea.format.lch = xf),
            (Ea.format.hcl = xv),
            ["lch", "hcl"].forEach(function (c) {
                return Ea.autodetect.push({
                    p: 2,
                    test: function () {
                        for (var p = [], h = arguments.length; h--; ) p[h] = arguments[h];
                        if (((p = Sv(p, c)), bv(p) === "array" && p.length === 3)) return c;
                    },
                });
            });
        var Cv = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32",
            },
            Cf = Cv,
            Ev = E,
            Ef = z,
            _v = w.type,
            wi = Cf,
            Tv = rf,
            Pv = tf;
        (Ev.prototype.name = function () {
            for (var c = Pv(this._rgb, "rgb"), p = 0, h = Object.keys(wi); p < h.length; p += 1) {
                var x = h[p];
                if (wi[x] === c) return x.toLowerCase();
            }
            return c;
        }),
            (Ef.format.named = function (c) {
                if (((c = c.toLowerCase()), wi[c])) return Tv(wi[c]);
                throw new Error("unknown color name: " + c);
            }),
            Ef.autodetect.push({
                p: 5,
                test: function (c) {
                    for (var p = [], h = arguments.length - 1; h-- > 0; ) p[h] = arguments[h + 1];
                    if (!p.length && _v(c) === "string" && wi[c.toLowerCase()]) return "named";
                },
            });
        var Lv = w.unpack,
            Iv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Lv(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2];
                return (x << 16) + (_ << 8) + P;
            },
            Nv = Iv,
            Rv = w.type,
            zv = function (c) {
                if (Rv(c) == "number" && c >= 0 && c <= 16777215) {
                    var p = c >> 16,
                        h = (c >> 8) & 255,
                        x = c & 255;
                    return [p, h, x, 1];
                }
                throw new Error("unknown num color: " + c);
            },
            Ov = zv,
            Av = M,
            _f = E,
            Tf = z,
            Dv = w.type,
            Mv = Nv;
        (_f.prototype.num = function () {
            return Mv(this._rgb);
        }),
            (Av.num = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(_f, [null].concat(c, ["num"])))();
            }),
            (Tf.format.num = Ov),
            Tf.autodetect.push({
                p: 5,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (c.length === 1 && Dv(c[0]) === "number" && c[0] >= 0 && c[0] <= 16777215) return "num";
                },
            });
        var Fv = M,
            _a = E,
            Pf = z,
            Lf = w.unpack,
            If = w.type,
            Nf = Math.round;
        (_a.prototype.rgb = function (c) {
            return c === void 0 && (c = !0), c === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Nf);
        }),
            (_a.prototype.rgba = function (c) {
                return (
                    c === void 0 && (c = !0),
                    this._rgb.slice(0, 4).map(function (p, h) {
                        return h < 3 ? (c === !1 ? p : Nf(p)) : p;
                    })
                );
            }),
            (Fv.rgb = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(_a, [null].concat(c, ["rgb"])))();
            }),
            (Pf.format.rgb = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Lf(c, "rgba");
                return h[3] === void 0 && (h[3] = 1), h;
            }),
            Pf.autodetect.push({
                p: 3,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (
                        ((c = Lf(c, "rgba")),
                        If(c) === "array" &&
                            (c.length === 3 || (c.length === 4 && If(c[3]) == "number" && c[3] >= 0 && c[3] <= 1)))
                    )
                        return "rgb";
                },
            });
        var Rl = Math.log,
            $v = function (c) {
                var p = c / 100,
                    h,
                    x,
                    _;
                return (
                    p < 66
                        ? ((h = 255),
                          (x =
                              p < 6
                                  ? 0
                                  : -155.25485562709179 -
                                    0.44596950469579133 * (x = p - 2) +
                                    104.49216199393888 * Rl(x)),
                          (_ =
                              p < 20
                                  ? 0
                                  : -254.76935184120902 +
                                    0.8274096064007395 * (_ = p - 10) +
                                    115.67994401066147 * Rl(_)))
                        : ((h = 351.97690566805693 + 0.114206453784165 * (h = p - 55) - 40.25366309332127 * Rl(h)),
                          (x = 325.4494125711974 + 0.07943456536662342 * (x = p - 50) - 28.0852963507957 * Rl(x)),
                          (_ = 255)),
                    [h, x, _, 1]
                );
            },
            Rf = $v,
            jv = Rf,
            Bv = w.unpack,
            Uv = Math.round,
            Hv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                for (var h = Bv(c, "rgb"), x = h[0], _ = h[2], P = 1e3, C = 4e4, I = 0.4, N; C - P > I; ) {
                    N = (C + P) * 0.5;
                    var D = jv(N);
                    D[2] / D[0] >= _ / x ? (C = N) : (P = N);
                }
                return Uv(N);
            },
            Vv = Hv,
            Ta = M,
            zl = E,
            Pa = z,
            Wv = Vv;
        (zl.prototype.temp =
            zl.prototype.kelvin =
            zl.prototype.temperature =
                function () {
                    return Wv(this._rgb);
                }),
            (Ta.temp =
                Ta.kelvin =
                Ta.temperature =
                    function () {
                        for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                        return new (Function.prototype.bind.apply(zl, [null].concat(c, ["temp"])))();
                    }),
            (Pa.format.temp = Pa.format.kelvin = Pa.format.temperature = Rf);
        var Qv = w.unpack,
            La = Math.cbrt,
            Gv = Math.pow,
            Yv = Math.sign,
            qv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = Qv(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = [Ia(x / 255), Ia(_ / 255), Ia(P / 255)],
                    I = C[0],
                    N = C[1],
                    D = C[2],
                    $ = La(0.4122214708 * I + 0.5363325363 * N + 0.0514459929 * D),
                    Y = La(0.2119034982 * I + 0.6806995451 * N + 0.1073969566 * D),
                    j = La(0.0883024619 * I + 0.2817188376 * N + 0.6299787005 * D);
                return [
                    0.2104542553 * $ + 0.793617785 * Y - 0.0040720468 * j,
                    1.9779984951 * $ - 2.428592205 * Y + 0.4505937099 * j,
                    0.0259040371 * $ + 0.7827717662 * Y - 0.808675766 * j,
                ];
            },
            zf = qv;
        function Ia(c) {
            var p = Math.abs(c);
            return p < 0.04045 ? c / 12.92 : (Yv(c) || 1) * Gv((p + 0.055) / 1.055, 2.4);
        }
        var Xv = w.unpack,
            Ol = Math.pow,
            Kv = Math.sign,
            Zv = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = Xv(c, "lab");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P = Ol(h + 0.3963377774 * x + 0.2158037573 * _, 3),
                    C = Ol(h - 0.1055613458 * x - 0.0638541728 * _, 3),
                    I = Ol(h - 0.0894841775 * x - 1.291485548 * _, 3);
                return [
                    255 * Na(4.0767416621 * P - 3.3077115913 * C + 0.2309699292 * I),
                    255 * Na(-1.2684380046 * P + 2.6097574011 * C - 0.3413193965 * I),
                    255 * Na(-0.0041960863 * P - 0.7034186147 * C + 1.707614701 * I),
                    c.length > 3 ? c[3] : 1,
                ];
            },
            Of = Zv;
        function Na(c) {
            var p = Math.abs(c);
            return p > 0.0031308 ? (Kv(c) || 1) * (1.055 * Ol(p, 1 / 2.4) - 0.055) : c * 12.92;
        }
        var Jv = w.unpack,
            ey = w.type,
            ny = M,
            Af = E,
            Df = z,
            ty = zf;
        (Af.prototype.oklab = function () {
            return ty(this._rgb);
        }),
            (ny.oklab = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(Af, [null].concat(c, ["oklab"])))();
            }),
            (Df.format.oklab = Of),
            Df.autodetect.push({
                p: 3,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = Jv(c, "oklab")), ey(c) === "array" && c.length === 3)) return "oklab";
                },
            });
        var ry = w.unpack,
            iy = zf,
            ly = kf,
            oy = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                var h = ry(c, "rgb"),
                    x = h[0],
                    _ = h[1],
                    P = h[2],
                    C = iy(x, _, P),
                    I = C[0],
                    N = C[1],
                    D = C[2];
                return ly(I, N, D);
            },
            ay = oy,
            uy = w.unpack,
            sy = wf,
            cy = Of,
            fy = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                c = uy(c, "lch");
                var h = c[0],
                    x = c[1],
                    _ = c[2],
                    P = sy(h, x, _),
                    C = P[0],
                    I = P[1],
                    N = P[2],
                    D = cy(C, I, N),
                    $ = D[0],
                    Y = D[1],
                    j = D[2];
                return [$, Y, j, c.length > 3 ? c[3] : 1];
            },
            py = fy,
            dy = w.unpack,
            hy = w.type,
            my = M,
            Mf = E,
            Ff = z,
            gy = ay;
        (Mf.prototype.oklch = function () {
            return gy(this._rgb);
        }),
            (my.oklch = function () {
                for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                return new (Function.prototype.bind.apply(Mf, [null].concat(c, ["oklch"])))();
            }),
            (Ff.format.oklch = py),
            Ff.autodetect.push({
                p: 3,
                test: function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    if (((c = dy(c, "oklch")), hy(c) === "array" && c.length === 3)) return "oklch";
                },
            });
        var $f = E,
            vy = w.type;
        $f.prototype.alpha = function (c, p) {
            return (
                p === void 0 && (p = !1),
                c !== void 0 && vy(c) === "number"
                    ? p
                        ? ((this._rgb[3] = c), this)
                        : new $f([this._rgb[0], this._rgb[1], this._rgb[2], c], "rgb")
                    : this._rgb[3]
            );
        };
        var yy = E;
        yy.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        };
        var lr = E,
            ky = Il;
        (lr.prototype.darken = function (c) {
            c === void 0 && (c = 1);
            var p = this,
                h = p.lab();
            return (h[0] -= ky.Kn * c), new lr(h, "lab").alpha(p.alpha(), !0);
        }),
            (lr.prototype.brighten = function (c) {
                return c === void 0 && (c = 1), this.darken(-c);
            }),
            (lr.prototype.darker = lr.prototype.darken),
            (lr.prototype.brighter = lr.prototype.brighten);
        var wy = E;
        wy.prototype.get = function (c) {
            var p = c.split("."),
                h = p[0],
                x = p[1],
                _ = this[h]();
            if (x) {
                var P = h.indexOf(x) - (h.substr(0, 2) === "ok" ? 2 : 0);
                if (P > -1) return _[P];
                throw new Error("unknown channel " + x + " in mode " + h);
            } else return _;
        };
        var Nr = E,
            xy = w.type,
            Sy = Math.pow,
            by = 1e-7,
            Cy = 20;
        Nr.prototype.luminance = function (c) {
            if (c !== void 0 && xy(c) === "number") {
                if (c === 0) return new Nr([0, 0, 0, this._rgb[3]], "rgb");
                if (c === 1) return new Nr([255, 255, 255, this._rgb[3]], "rgb");
                var p = this.luminance(),
                    h = "rgb",
                    x = Cy,
                    _ = function (C, I) {
                        var N = C.interpolate(I, 0.5, h),
                            D = N.luminance();
                        return Math.abs(c - D) < by || !x-- ? N : D > c ? _(C, N) : _(N, I);
                    },
                    P = (p > c ? _(new Nr([0, 0, 0]), this) : _(this, new Nr([255, 255, 255]))).rgb();
                return new Nr(P.concat([this._rgb[3]]));
            }
            return Ey.apply(void 0, this._rgb.slice(0, 3));
        };
        var Ey = function (c, p, h) {
                return (c = Ra(c)), (p = Ra(p)), (h = Ra(h)), 0.2126 * c + 0.7152 * p + 0.0722 * h;
            },
            Ra = function (c) {
                return (c /= 255), c <= 0.03928 ? c / 12.92 : Sy((c + 0.055) / 1.055, 2.4);
            },
            Ln = {},
            jf = E,
            Bf = w.type,
            Al = Ln,
            Uf = function (c, p, h) {
                h === void 0 && (h = 0.5);
                for (var x = [], _ = arguments.length - 3; _-- > 0; ) x[_] = arguments[_ + 3];
                var P = x[0] || "lrgb";
                if ((!Al[P] && !x.length && (P = Object.keys(Al)[0]), !Al[P]))
                    throw new Error("interpolation mode " + P + " is not defined");
                return (
                    Bf(c) !== "object" && (c = new jf(c)),
                    Bf(p) !== "object" && (p = new jf(p)),
                    Al[P](c, p, h).alpha(c.alpha() + h * (p.alpha() - c.alpha()))
                );
            },
            Hf = E,
            _y = Uf;
        Hf.prototype.mix = Hf.prototype.interpolate = function (c, p) {
            p === void 0 && (p = 0.5);
            for (var h = [], x = arguments.length - 2; x-- > 0; ) h[x] = arguments[x + 2];
            return _y.apply(void 0, [this, c, p].concat(h));
        };
        var Vf = E;
        Vf.prototype.premultiply = function (c) {
            c === void 0 && (c = !1);
            var p = this._rgb,
                h = p[3];
            return c
                ? ((this._rgb = [p[0] * h, p[1] * h, p[2] * h, h]), this)
                : new Vf([p[0] * h, p[1] * h, p[2] * h, h], "rgb");
        };
        var za = E,
            Ty = Il;
        (za.prototype.saturate = function (c) {
            c === void 0 && (c = 1);
            var p = this,
                h = p.lch();
            return (h[1] += Ty.Kn * c), h[1] < 0 && (h[1] = 0), new za(h, "lch").alpha(p.alpha(), !0);
        }),
            (za.prototype.desaturate = function (c) {
                return c === void 0 && (c = 1), this.saturate(-c);
            });
        var Wf = E,
            Qf = w.type;
        Wf.prototype.set = function (c, p, h) {
            h === void 0 && (h = !1);
            var x = c.split("."),
                _ = x[0],
                P = x[1],
                C = this[_]();
            if (P) {
                var I = _.indexOf(P) - (_.substr(0, 2) === "ok" ? 2 : 0);
                if (I > -1) {
                    if (Qf(p) == "string")
                        switch (p.charAt(0)) {
                            case "+":
                                C[I] += +p;
                                break;
                            case "-":
                                C[I] += +p;
                                break;
                            case "*":
                                C[I] *= +p.substr(1);
                                break;
                            case "/":
                                C[I] /= +p.substr(1);
                                break;
                            default:
                                C[I] = +p;
                        }
                    else if (Qf(p) === "number") C[I] = p;
                    else throw new Error("unsupported value for Color.set");
                    var N = new Wf(C, _);
                    return h ? ((this._rgb = N._rgb), this) : N;
                }
                throw new Error("unknown channel " + P + " in mode " + _);
            } else return C;
        };
        var Py = E,
            Ly = function (c, p, h) {
                var x = c._rgb,
                    _ = p._rgb;
                return new Py(x[0] + h * (_[0] - x[0]), x[1] + h * (_[1] - x[1]), x[2] + h * (_[2] - x[2]), "rgb");
            };
        Ln.rgb = Ly;
        var Iy = E,
            Oa = Math.sqrt,
            Rr = Math.pow,
            Ny = function (c, p, h) {
                var x = c._rgb,
                    _ = x[0],
                    P = x[1],
                    C = x[2],
                    I = p._rgb,
                    N = I[0],
                    D = I[1],
                    $ = I[2];
                return new Iy(
                    Oa(Rr(_, 2) * (1 - h) + Rr(N, 2) * h),
                    Oa(Rr(P, 2) * (1 - h) + Rr(D, 2) * h),
                    Oa(Rr(C, 2) * (1 - h) + Rr($, 2) * h),
                    "rgb"
                );
            };
        Ln.lrgb = Ny;
        var Ry = E,
            zy = function (c, p, h) {
                var x = c.lab(),
                    _ = p.lab();
                return new Ry(x[0] + h * (_[0] - x[0]), x[1] + h * (_[1] - x[1]), x[2] + h * (_[2] - x[2]), "lab");
            };
        Ln.lab = zy;
        var Gf = E,
            zr = function (c, p, h, x) {
                var _, P, C, I;
                x === "hsl"
                    ? ((C = c.hsl()), (I = p.hsl()))
                    : x === "hsv"
                      ? ((C = c.hsv()), (I = p.hsv()))
                      : x === "hcg"
                        ? ((C = c.hcg()), (I = p.hcg()))
                        : x === "hsi"
                          ? ((C = c.hsi()), (I = p.hsi()))
                          : x === "lch" || x === "hcl"
                            ? ((x = "hcl"), (C = c.hcl()), (I = p.hcl()))
                            : x === "oklch" && ((C = c.oklch().reverse()), (I = p.oklch().reverse()));
                var N, D, $, Y, j, J;
                (x.substr(0, 1) === "h" || x === "oklch") &&
                    ((_ = C), (N = _[0]), ($ = _[1]), (j = _[2]), (P = I), (D = P[0]), (Y = P[1]), (J = P[2]));
                var K, ae, pe, ve;
                return (
                    !isNaN(N) && !isNaN(D)
                        ? (D > N && D - N > 180
                              ? (ve = D - (N + 360))
                              : D < N && N - D > 180
                                ? (ve = D + 360 - N)
                                : (ve = D - N),
                          (ae = N + h * ve))
                        : isNaN(N)
                          ? isNaN(D)
                              ? (ae = Number.NaN)
                              : ((ae = D), (j == 1 || j == 0) && x != "hsv" && (K = Y))
                          : ((ae = N), (J == 1 || J == 0) && x != "hsv" && (K = $)),
                    K === void 0 && (K = $ + h * (Y - $)),
                    (pe = j + h * (J - j)),
                    x === "oklch" ? new Gf([pe, K, ae], x) : new Gf([ae, K, pe], x)
                );
            },
            Oy = zr,
            Yf = function (c, p, h) {
                return Oy(c, p, h, "lch");
            };
        (Ln.lch = Yf), (Ln.hcl = Yf);
        var Ay = E,
            Dy = function (c, p, h) {
                var x = c.num(),
                    _ = p.num();
                return new Ay(x + h * (_ - x), "num");
            };
        Ln.num = Dy;
        var My = zr,
            Fy = function (c, p, h) {
                return My(c, p, h, "hcg");
            };
        Ln.hcg = Fy;
        var $y = zr,
            jy = function (c, p, h) {
                return $y(c, p, h, "hsi");
            };
        Ln.hsi = jy;
        var By = zr,
            Uy = function (c, p, h) {
                return By(c, p, h, "hsl");
            };
        Ln.hsl = Uy;
        var Hy = zr,
            Vy = function (c, p, h) {
                return Hy(c, p, h, "hsv");
            };
        Ln.hsv = Vy;
        var Wy = E,
            Qy = function (c, p, h) {
                var x = c.oklab(),
                    _ = p.oklab();
                return new Wy(x[0] + h * (_[0] - x[0]), x[1] + h * (_[1] - x[1]), x[2] + h * (_[2] - x[2]), "oklab");
            };
        Ln.oklab = Qy;
        var Gy = zr,
            Yy = function (c, p, h) {
                return Gy(c, p, h, "oklch");
            };
        Ln.oklch = Yy;
        var Aa = E,
            qy = w.clip_rgb,
            Da = Math.pow,
            Ma = Math.sqrt,
            Fa = Math.PI,
            qf = Math.cos,
            Xf = Math.sin,
            Xy = Math.atan2,
            Ky = function (c, p, h) {
                p === void 0 && (p = "lrgb"), h === void 0 && (h = null);
                var x = c.length;
                h ||
                    (h = Array.from(new Array(x)).map(function () {
                        return 1;
                    }));
                var _ =
                    x /
                    h.reduce(function (ae, pe) {
                        return ae + pe;
                    });
                if (
                    (h.forEach(function (ae, pe) {
                        h[pe] *= _;
                    }),
                    (c = c.map(function (ae) {
                        return new Aa(ae);
                    })),
                    p === "lrgb")
                )
                    return Zy(c, h);
                for (var P = c.shift(), C = P.get(p), I = [], N = 0, D = 0, $ = 0; $ < C.length; $++)
                    if (
                        ((C[$] = (C[$] || 0) * h[0]),
                        I.push(isNaN(C[$]) ? 0 : h[0]),
                        p.charAt($) === "h" && !isNaN(C[$]))
                    ) {
                        var Y = (C[$] / 180) * Fa;
                        (N += qf(Y) * h[0]), (D += Xf(Y) * h[0]);
                    }
                var j = P.alpha() * h[0];
                c.forEach(function (ae, pe) {
                    var ve = ae.get(p);
                    j += ae.alpha() * h[pe + 1];
                    for (var xe = 0; xe < C.length; xe++)
                        if (!isNaN(ve[xe]))
                            if (((I[xe] += h[pe + 1]), p.charAt(xe) === "h")) {
                                var nn = (ve[xe] / 180) * Fa;
                                (N += qf(nn) * h[pe + 1]), (D += Xf(nn) * h[pe + 1]);
                            } else C[xe] += ve[xe] * h[pe + 1];
                });
                for (var J = 0; J < C.length; J++)
                    if (p.charAt(J) === "h") {
                        for (var K = (Xy(D / I[J], N / I[J]) / Fa) * 180; K < 0; ) K += 360;
                        for (; K >= 360; ) K -= 360;
                        C[J] = K;
                    } else C[J] = C[J] / I[J];
                return (j /= x), new Aa(C, p).alpha(j > 0.99999 ? 1 : j, !0);
            },
            Zy = function (c, p) {
                for (var h = c.length, x = [0, 0, 0, 0], _ = 0; _ < c.length; _++) {
                    var P = c[_],
                        C = p[_] / h,
                        I = P._rgb;
                    (x[0] += Da(I[0], 2) * C), (x[1] += Da(I[1], 2) * C), (x[2] += Da(I[2], 2) * C), (x[3] += I[3] * C);
                }
                return (
                    (x[0] = Ma(x[0])),
                    (x[1] = Ma(x[1])),
                    (x[2] = Ma(x[2])),
                    x[3] > 0.9999999 && (x[3] = 1),
                    new Aa(qy(x))
                );
            },
            qn = M,
            Or = w.type,
            Jy = Math.pow,
            $a = function (c) {
                var p = "rgb",
                    h = qn("#ccc"),
                    x = 0,
                    _ = [0, 1],
                    P = [],
                    C = [0, 0],
                    I = !1,
                    N = [],
                    D = !1,
                    $ = 0,
                    Y = 1,
                    j = !1,
                    J = {},
                    K = !0,
                    ae = 1,
                    pe = function (B) {
                        if (
                            ((B = B || ["#fff", "#000"]),
                            B &&
                                Or(B) === "string" &&
                                qn.brewer &&
                                qn.brewer[B.toLowerCase()] &&
                                (B = qn.brewer[B.toLowerCase()]),
                            Or(B) === "array")
                        ) {
                            B.length === 1 && (B = [B[0], B[0]]), (B = B.slice(0));
                            for (var te = 0; te < B.length; te++) B[te] = qn(B[te]);
                            P.length = 0;
                            for (var ce = 0; ce < B.length; ce++) P.push(ce / (B.length - 1));
                        }
                        return wn(), (N = B);
                    },
                    ve = function (B) {
                        if (I != null) {
                            for (var te = I.length - 1, ce = 0; ce < te && B >= I[ce]; ) ce++;
                            return ce - 1;
                        }
                        return 0;
                    },
                    xe = function (B) {
                        return B;
                    },
                    nn = function (B) {
                        return B;
                    },
                    Ze = function (B, te) {
                        var ce, ue;
                        if ((te == null && (te = !1), isNaN(B) || B === null)) return h;
                        if (te) ue = B;
                        else if (I && I.length > 2) {
                            var tn = ve(B);
                            ue = tn / (I.length - 2);
                        } else Y !== $ ? (ue = (B - $) / (Y - $)) : (ue = 1);
                        (ue = nn(ue)),
                            te || (ue = xe(ue)),
                            ae !== 1 && (ue = Jy(ue, ae)),
                            (ue = C[0] + ue * (1 - C[0] - C[1])),
                            (ue = Math.min(1, Math.max(0, ue)));
                        var Ne = Math.floor(ue * 1e4);
                        if (K && J[Ne]) ce = J[Ne];
                        else {
                            if (Or(N) === "array")
                                for (var ye = 0; ye < P.length; ye++) {
                                    var Ce = P[ye];
                                    if (ue <= Ce) {
                                        ce = N[ye];
                                        break;
                                    }
                                    if (ue >= Ce && ye === P.length - 1) {
                                        ce = N[ye];
                                        break;
                                    }
                                    if (ue > Ce && ue < P[ye + 1]) {
                                        (ue = (ue - Ce) / (P[ye + 1] - Ce)),
                                            (ce = qn.interpolate(N[ye], N[ye + 1], ue, p));
                                        break;
                                    }
                                }
                            else Or(N) === "function" && (ce = N(ue));
                            K && (J[Ne] = ce);
                        }
                        return ce;
                    },
                    wn = function () {
                        return (J = {});
                    };
                pe(c);
                var ge = function (B) {
                    var te = qn(Ze(B));
                    return D && te[D] ? te[D]() : te;
                };
                return (
                    (ge.classes = function (B) {
                        if (B != null) {
                            if (Or(B) === "array") (I = B), (_ = [B[0], B[B.length - 1]]);
                            else {
                                var te = qn.analyze(_);
                                B === 0 ? (I = [te.min, te.max]) : (I = qn.limits(te, "e", B));
                            }
                            return ge;
                        }
                        return I;
                    }),
                    (ge.domain = function (B) {
                        if (!arguments.length) return _;
                        ($ = B[0]), (Y = B[B.length - 1]), (P = []);
                        var te = N.length;
                        if (B.length === te && $ !== Y)
                            for (var ce = 0, ue = Array.from(B); ce < ue.length; ce += 1) {
                                var tn = ue[ce];
                                P.push((tn - $) / (Y - $));
                            }
                        else {
                            for (var Ne = 0; Ne < te; Ne++) P.push(Ne / (te - 1));
                            if (B.length > 2) {
                                var ye = B.map(function (Ee, _e) {
                                        return _e / (B.length - 1);
                                    }),
                                    Ce = B.map(function (Ee) {
                                        return (Ee - $) / (Y - $);
                                    });
                                Ce.every(function (Ee, _e) {
                                    return ye[_e] === Ee;
                                }) ||
                                    (nn = function (Ee) {
                                        if (Ee <= 0 || Ee >= 1) return Ee;
                                        for (var _e = 0; Ee >= Ce[_e + 1]; ) _e++;
                                        var Kn = (Ee - Ce[_e]) / (Ce[_e + 1] - Ce[_e]),
                                            Ot = ye[_e] + Kn * (ye[_e + 1] - ye[_e]);
                                        return Ot;
                                    });
                            }
                        }
                        return (_ = [$, Y]), ge;
                    }),
                    (ge.mode = function (B) {
                        return arguments.length ? ((p = B), wn(), ge) : p;
                    }),
                    (ge.range = function (B, te) {
                        return pe(B), ge;
                    }),
                    (ge.out = function (B) {
                        return (D = B), ge;
                    }),
                    (ge.spread = function (B) {
                        return arguments.length ? ((x = B), ge) : x;
                    }),
                    (ge.correctLightness = function (B) {
                        return (
                            B == null && (B = !0),
                            (j = B),
                            wn(),
                            j
                                ? (xe = function (te) {
                                      for (
                                          var ce = Ze(0, !0).lab()[0],
                                              ue = Ze(1, !0).lab()[0],
                                              tn = ce > ue,
                                              Ne = Ze(te, !0).lab()[0],
                                              ye = ce + (ue - ce) * te,
                                              Ce = Ne - ye,
                                              Ee = 0,
                                              _e = 1,
                                              Kn = 20;
                                          Math.abs(Ce) > 0.01 && Kn-- > 0;

                                      )
                                          (function () {
                                              return (
                                                  tn && (Ce *= -1),
                                                  Ce < 0
                                                      ? ((Ee = te), (te += (_e - te) * 0.5))
                                                      : ((_e = te), (te += (Ee - te) * 0.5)),
                                                  (Ne = Ze(te, !0).lab()[0]),
                                                  (Ce = Ne - ye)
                                              );
                                          })();
                                      return te;
                                  })
                                : (xe = function (te) {
                                      return te;
                                  }),
                            ge
                        );
                    }),
                    (ge.padding = function (B) {
                        return B != null ? (Or(B) === "number" && (B = [B, B]), (C = B), ge) : C;
                    }),
                    (ge.colors = function (B, te) {
                        arguments.length < 2 && (te = "hex");
                        var ce = [];
                        if (arguments.length === 0) ce = N.slice(0);
                        else if (B === 1) ce = [ge(0.5)];
                        else if (B > 1) {
                            var ue = _[0],
                                tn = _[1] - ue;
                            ce = e2(0, B).map(function (_e) {
                                return ge(ue + (_e / (B - 1)) * tn);
                            });
                        } else {
                            c = [];
                            var Ne = [];
                            if (I && I.length > 2)
                                for (var ye = 1, Ce = I.length, Ee = 1 <= Ce; Ee ? ye < Ce : ye > Ce; Ee ? ye++ : ye--)
                                    Ne.push((I[ye - 1] + I[ye]) * 0.5);
                            else Ne = _;
                            ce = Ne.map(function (_e) {
                                return ge(_e);
                            });
                        }
                        return (
                            qn[te] &&
                                (ce = ce.map(function (_e) {
                                    return _e[te]();
                                })),
                            ce
                        );
                    }),
                    (ge.cache = function (B) {
                        return B != null ? ((K = B), ge) : K;
                    }),
                    (ge.gamma = function (B) {
                        return B != null ? ((ae = B), ge) : ae;
                    }),
                    (ge.nodata = function (B) {
                        return B != null ? ((h = qn(B)), ge) : h;
                    }),
                    ge
                );
            };
        function e2(c, p, h) {
            for (var x = [], _ = c < p, P = p, C = c; _ ? C < P : C > P; _ ? C++ : C--) x.push(C);
            return x;
        }
        var xi = E,
            n2 = $a,
            t2 = function (c) {
                for (var p = [1, 1], h = 1; h < c; h++) {
                    for (var x = [1], _ = 1; _ <= p.length; _++) x[_] = (p[_] || 0) + p[_ - 1];
                    p = x;
                }
                return p;
            },
            r2 = function (c) {
                var p, h, x, _, P, C, I;
                if (
                    ((c = c.map(function (j) {
                        return new xi(j);
                    })),
                    c.length === 2)
                )
                    (p = c.map(function (j) {
                        return j.lab();
                    })),
                        (P = p[0]),
                        (C = p[1]),
                        (_ = function (j) {
                            var J = [0, 1, 2].map(function (K) {
                                return P[K] + j * (C[K] - P[K]);
                            });
                            return new xi(J, "lab");
                        });
                else if (c.length === 3)
                    (h = c.map(function (j) {
                        return j.lab();
                    })),
                        (P = h[0]),
                        (C = h[1]),
                        (I = h[2]),
                        (_ = function (j) {
                            var J = [0, 1, 2].map(function (K) {
                                return (1 - j) * (1 - j) * P[K] + 2 * (1 - j) * j * C[K] + j * j * I[K];
                            });
                            return new xi(J, "lab");
                        });
                else if (c.length === 4) {
                    var N;
                    (x = c.map(function (j) {
                        return j.lab();
                    })),
                        (P = x[0]),
                        (C = x[1]),
                        (I = x[2]),
                        (N = x[3]),
                        (_ = function (j) {
                            var J = [0, 1, 2].map(function (K) {
                                return (
                                    (1 - j) * (1 - j) * (1 - j) * P[K] +
                                    3 * (1 - j) * (1 - j) * j * C[K] +
                                    3 * (1 - j) * j * j * I[K] +
                                    j * j * j * N[K]
                                );
                            });
                            return new xi(J, "lab");
                        });
                } else if (c.length >= 5) {
                    var D, $, Y;
                    (D = c.map(function (j) {
                        return j.lab();
                    })),
                        (Y = c.length - 1),
                        ($ = t2(Y)),
                        (_ = function (j) {
                            var J = 1 - j,
                                K = [0, 1, 2].map(function (ae) {
                                    return D.reduce(function (pe, ve, xe) {
                                        return pe + $[xe] * Math.pow(J, Y - xe) * Math.pow(j, xe) * ve[ae];
                                    }, 0);
                                });
                            return new xi(K, "lab");
                        });
                } else throw new RangeError("No point in running bezier with only one color.");
                return _;
            },
            i2 = function (c) {
                var p = r2(c);
                return (
                    (p.scale = function () {
                        return n2(p);
                    }),
                    p
                );
            },
            ja = M,
            Xn = function (c, p, h) {
                if (!Xn[h]) throw new Error("unknown blend mode " + h);
                return Xn[h](c, p);
            },
            Rt = function (c) {
                return function (p, h) {
                    var x = ja(h).rgb(),
                        _ = ja(p).rgb();
                    return ja.rgb(c(x, _));
                };
            },
            zt = function (c) {
                return function (p, h) {
                    var x = [];
                    return (x[0] = c(p[0], h[0])), (x[1] = c(p[1], h[1])), (x[2] = c(p[2], h[2])), x;
                };
            },
            l2 = function (c) {
                return c;
            },
            o2 = function (c, p) {
                return (c * p) / 255;
            },
            a2 = function (c, p) {
                return c > p ? p : c;
            },
            u2 = function (c, p) {
                return c > p ? c : p;
            },
            s2 = function (c, p) {
                return 255 * (1 - (1 - c / 255) * (1 - p / 255));
            },
            c2 = function (c, p) {
                return p < 128 ? (2 * c * p) / 255 : 255 * (1 - 2 * (1 - c / 255) * (1 - p / 255));
            },
            f2 = function (c, p) {
                return 255 * (1 - (1 - p / 255) / (c / 255));
            },
            p2 = function (c, p) {
                return c === 255 ? 255 : ((c = (255 * (p / 255)) / (1 - c / 255)), c > 255 ? 255 : c);
            };
        (Xn.normal = Rt(zt(l2))),
            (Xn.multiply = Rt(zt(o2))),
            (Xn.screen = Rt(zt(s2))),
            (Xn.overlay = Rt(zt(c2))),
            (Xn.darken = Rt(zt(a2))),
            (Xn.lighten = Rt(zt(u2))),
            (Xn.dodge = Rt(zt(p2))),
            (Xn.burn = Rt(zt(f2)));
        for (
            var d2 = Xn,
                Ba = w.type,
                h2 = w.clip_rgb,
                m2 = w.TWOPI,
                g2 = Math.pow,
                v2 = Math.sin,
                y2 = Math.cos,
                Kf = M,
                k2 = function (c, p, h, x, _) {
                    c === void 0 && (c = 300),
                        p === void 0 && (p = -1.5),
                        h === void 0 && (h = 1),
                        x === void 0 && (x = 1),
                        _ === void 0 && (_ = [0, 1]);
                    var P = 0,
                        C;
                    Ba(_) === "array" ? (C = _[1] - _[0]) : ((C = 0), (_ = [_, _]));
                    var I = function (N) {
                        var D = m2 * ((c + 120) / 360 + p * N),
                            $ = g2(_[0] + C * N, x),
                            Y = P !== 0 ? h[0] + N * P : h,
                            j = (Y * $ * (1 - $)) / 2,
                            J = y2(D),
                            K = v2(D),
                            ae = $ + j * (-0.14861 * J + 1.78277 * K),
                            pe = $ + j * (-0.29227 * J - 0.90649 * K),
                            ve = $ + j * (1.97294 * J);
                        return Kf(h2([ae * 255, pe * 255, ve * 255, 1]));
                    };
                    return (
                        (I.start = function (N) {
                            return N == null ? c : ((c = N), I);
                        }),
                        (I.rotations = function (N) {
                            return N == null ? p : ((p = N), I);
                        }),
                        (I.gamma = function (N) {
                            return N == null ? x : ((x = N), I);
                        }),
                        (I.hue = function (N) {
                            return N == null
                                ? h
                                : ((h = N),
                                  Ba(h) === "array" ? ((P = h[1] - h[0]), P === 0 && (h = h[1])) : (P = 0),
                                  I);
                        }),
                        (I.lightness = function (N) {
                            return N == null
                                ? _
                                : (Ba(N) === "array" ? ((_ = N), (C = N[1] - N[0])) : ((_ = [N, N]), (C = 0)), I);
                        }),
                        (I.scale = function () {
                            return Kf.scale(I);
                        }),
                        I.hue(h),
                        I
                    );
                },
                w2 = E,
                x2 = "0123456789abcdef",
                S2 = Math.floor,
                b2 = Math.random,
                C2 = function () {
                    for (var c = "#", p = 0; p < 6; p++) c += x2.charAt(S2(b2() * 16));
                    return new w2(c, "hex");
                },
                Ua = s,
                Zf = Math.log,
                E2 = Math.pow,
                _2 = Math.floor,
                T2 = Math.abs,
                Jf = function (c, p) {
                    p === void 0 && (p = null);
                    var h = { min: Number.MAX_VALUE, max: Number.MAX_VALUE * -1, sum: 0, values: [], count: 0 };
                    return (
                        Ua(c) === "object" && (c = Object.values(c)),
                        c.forEach(function (x) {
                            p && Ua(x) === "object" && (x = x[p]),
                                x != null &&
                                    !isNaN(x) &&
                                    (h.values.push(x),
                                    (h.sum += x),
                                    x < h.min && (h.min = x),
                                    x > h.max && (h.max = x),
                                    (h.count += 1));
                        }),
                        (h.domain = [h.min, h.max]),
                        (h.limits = function (x, _) {
                            return ep(h, x, _);
                        }),
                        h
                    );
                },
                ep = function (c, p, h) {
                    p === void 0 && (p = "equal"), h === void 0 && (h = 7), Ua(c) == "array" && (c = Jf(c));
                    var x = c.min,
                        _ = c.max,
                        P = c.values.sort(function (Va, Wa) {
                            return Va - Wa;
                        });
                    if (h === 1) return [x, _];
                    var C = [];
                    if ((p.substr(0, 1) === "c" && (C.push(x), C.push(_)), p.substr(0, 1) === "e")) {
                        C.push(x);
                        for (var I = 1; I < h; I++) C.push(x + (I / h) * (_ - x));
                        C.push(_);
                    } else if (p.substr(0, 1) === "l") {
                        if (x <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                        var N = Math.LOG10E * Zf(x),
                            D = Math.LOG10E * Zf(_);
                        C.push(x);
                        for (var $ = 1; $ < h; $++) C.push(E2(10, N + ($ / h) * (D - N)));
                        C.push(_);
                    } else if (p.substr(0, 1) === "q") {
                        C.push(x);
                        for (var Y = 1; Y < h; Y++) {
                            var j = ((P.length - 1) * Y) / h,
                                J = _2(j);
                            if (J === j) C.push(P[J]);
                            else {
                                var K = j - J;
                                C.push(P[J] * (1 - K) + P[J + 1] * K);
                            }
                        }
                        C.push(_);
                    } else if (p.substr(0, 1) === "k") {
                        var ae,
                            pe = P.length,
                            ve = new Array(pe),
                            xe = new Array(h),
                            nn = !0,
                            Ze = 0,
                            wn = null;
                        (wn = []), wn.push(x);
                        for (var ge = 1; ge < h; ge++) wn.push(x + (ge / h) * (_ - x));
                        for (wn.push(_); nn; ) {
                            for (var B = 0; B < h; B++) xe[B] = 0;
                            for (var te = 0; te < pe; te++)
                                for (var ce = P[te], ue = Number.MAX_VALUE, tn = void 0, Ne = 0; Ne < h; Ne++) {
                                    var ye = T2(wn[Ne] - ce);
                                    ye < ue && ((ue = ye), (tn = Ne)), xe[tn]++, (ve[te] = tn);
                                }
                            for (var Ce = new Array(h), Ee = 0; Ee < h; Ee++) Ce[Ee] = null;
                            for (var _e = 0; _e < pe; _e++)
                                (ae = ve[_e]), Ce[ae] === null ? (Ce[ae] = P[_e]) : (Ce[ae] += P[_e]);
                            for (var Kn = 0; Kn < h; Kn++) Ce[Kn] *= 1 / xe[Kn];
                            nn = !1;
                            for (var Ot = 0; Ot < h; Ot++)
                                if (Ce[Ot] !== wn[Ot]) {
                                    nn = !0;
                                    break;
                                }
                            (wn = Ce), Ze++, Ze > 200 && (nn = !1);
                        }
                        for (var At = {}, Ar = 0; Ar < h; Ar++) At[Ar] = [];
                        for (var Dr = 0; Dr < pe; Dr++) (ae = ve[Dr]), At[ae].push(P[Dr]);
                        for (var yt = [], or = 0; or < h; or++) yt.push(At[or][0]), yt.push(At[or][At[or].length - 1]);
                        (yt = yt.sort(function (Va, Wa) {
                            return Va - Wa;
                        })),
                            C.push(yt[0]);
                        for (var Si = 1; Si < yt.length; Si += 2) {
                            var ar = yt[Si];
                            !isNaN(ar) && C.indexOf(ar) === -1 && C.push(ar);
                        }
                    }
                    return C;
                },
                np = { analyze: Jf, limits: ep },
                tp = E,
                P2 = function (c, p) {
                    (c = new tp(c)), (p = new tp(p));
                    var h = c.luminance(),
                        x = p.luminance();
                    return h > x ? (h + 0.05) / (x + 0.05) : (x + 0.05) / (h + 0.05);
                },
                rp = E,
                vt = Math.sqrt,
                Qe = Math.pow,
                L2 = Math.min,
                I2 = Math.max,
                ip = Math.atan2,
                lp = Math.abs,
                Dl = Math.cos,
                op = Math.sin,
                N2 = Math.exp,
                ap = Math.PI,
                R2 = function (c, p, h, x, _) {
                    h === void 0 && (h = 1), x === void 0 && (x = 1), _ === void 0 && (_ = 1);
                    var P = function (ar) {
                            return (360 * ar) / (2 * ap);
                        },
                        C = function (ar) {
                            return (2 * ap * ar) / 360;
                        };
                    (c = new rp(c)), (p = new rp(p));
                    var I = Array.from(c.lab()),
                        N = I[0],
                        D = I[1],
                        $ = I[2],
                        Y = Array.from(p.lab()),
                        j = Y[0],
                        J = Y[1],
                        K = Y[2],
                        ae = (N + j) / 2,
                        pe = vt(Qe(D, 2) + Qe($, 2)),
                        ve = vt(Qe(J, 2) + Qe(K, 2)),
                        xe = (pe + ve) / 2,
                        nn = 0.5 * (1 - vt(Qe(xe, 7) / (Qe(xe, 7) + Qe(25, 7)))),
                        Ze = D * (1 + nn),
                        wn = J * (1 + nn),
                        ge = vt(Qe(Ze, 2) + Qe($, 2)),
                        B = vt(Qe(wn, 2) + Qe(K, 2)),
                        te = (ge + B) / 2,
                        ce = P(ip($, Ze)),
                        ue = P(ip(K, wn)),
                        tn = ce >= 0 ? ce : ce + 360,
                        Ne = ue >= 0 ? ue : ue + 360,
                        ye = lp(tn - Ne) > 180 ? (tn + Ne + 360) / 2 : (tn + Ne) / 2,
                        Ce =
                            1 -
                            0.17 * Dl(C(ye - 30)) +
                            0.24 * Dl(C(2 * ye)) +
                            0.32 * Dl(C(3 * ye + 6)) -
                            0.2 * Dl(C(4 * ye - 63)),
                        Ee = Ne - tn;
                    (Ee = lp(Ee) <= 180 ? Ee : Ne <= tn ? Ee + 360 : Ee - 360), (Ee = 2 * vt(ge * B) * op(C(Ee) / 2));
                    var _e = j - N,
                        Kn = B - ge,
                        Ot = 1 + (0.015 * Qe(ae - 50, 2)) / vt(20 + Qe(ae - 50, 2)),
                        At = 1 + 0.045 * te,
                        Ar = 1 + 0.015 * te * Ce,
                        Dr = 30 * N2(-Qe((ye - 275) / 25, 2)),
                        yt = 2 * vt(Qe(te, 7) / (Qe(te, 7) + Qe(25, 7))),
                        or = -yt * op(2 * C(Dr)),
                        Si = vt(
                            Qe(_e / (h * Ot), 2) +
                                Qe(Kn / (x * At), 2) +
                                Qe(Ee / (_ * Ar), 2) +
                                or * (Kn / (x * At)) * (Ee / (_ * Ar))
                        );
                    return I2(0, L2(100, Si));
                },
                up = E,
                z2 = function (c, p, h) {
                    h === void 0 && (h = "lab"), (c = new up(c)), (p = new up(p));
                    var x = c.get(h),
                        _ = p.get(h),
                        P = 0;
                    for (var C in x) {
                        var I = (x[C] || 0) - (_[C] || 0);
                        P += I * I;
                    }
                    return Math.sqrt(P);
                },
                O2 = E,
                A2 = function () {
                    for (var c = [], p = arguments.length; p--; ) c[p] = arguments[p];
                    try {
                        return new (Function.prototype.bind.apply(O2, [null].concat(c)))(), !0;
                    } catch {
                        return !1;
                    }
                },
                sp = M,
                cp = $a,
                D2 = {
                    cool: function () {
                        return cp([sp.hsl(180, 1, 0.9), sp.hsl(250, 0.7, 0.4)]);
                    },
                    hot: function () {
                        return cp(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                    },
                },
                Ml = {
                    OrRd: [
                        "#fff7ec",
                        "#fee8c8",
                        "#fdd49e",
                        "#fdbb84",
                        "#fc8d59",
                        "#ef6548",
                        "#d7301f",
                        "#b30000",
                        "#7f0000",
                    ],
                    PuBu: [
                        "#fff7fb",
                        "#ece7f2",
                        "#d0d1e6",
                        "#a6bddb",
                        "#74a9cf",
                        "#3690c0",
                        "#0570b0",
                        "#045a8d",
                        "#023858",
                    ],
                    BuPu: [
                        "#f7fcfd",
                        "#e0ecf4",
                        "#bfd3e6",
                        "#9ebcda",
                        "#8c96c6",
                        "#8c6bb1",
                        "#88419d",
                        "#810f7c",
                        "#4d004b",
                    ],
                    Oranges: [
                        "#fff5eb",
                        "#fee6ce",
                        "#fdd0a2",
                        "#fdae6b",
                        "#fd8d3c",
                        "#f16913",
                        "#d94801",
                        "#a63603",
                        "#7f2704",
                    ],
                    BuGn: [
                        "#f7fcfd",
                        "#e5f5f9",
                        "#ccece6",
                        "#99d8c9",
                        "#66c2a4",
                        "#41ae76",
                        "#238b45",
                        "#006d2c",
                        "#00441b",
                    ],
                    YlOrBr: [
                        "#ffffe5",
                        "#fff7bc",
                        "#fee391",
                        "#fec44f",
                        "#fe9929",
                        "#ec7014",
                        "#cc4c02",
                        "#993404",
                        "#662506",
                    ],
                    YlGn: [
                        "#ffffe5",
                        "#f7fcb9",
                        "#d9f0a3",
                        "#addd8e",
                        "#78c679",
                        "#41ab5d",
                        "#238443",
                        "#006837",
                        "#004529",
                    ],
                    Reds: [
                        "#fff5f0",
                        "#fee0d2",
                        "#fcbba1",
                        "#fc9272",
                        "#fb6a4a",
                        "#ef3b2c",
                        "#cb181d",
                        "#a50f15",
                        "#67000d",
                    ],
                    RdPu: [
                        "#fff7f3",
                        "#fde0dd",
                        "#fcc5c0",
                        "#fa9fb5",
                        "#f768a1",
                        "#dd3497",
                        "#ae017e",
                        "#7a0177",
                        "#49006a",
                    ],
                    Greens: [
                        "#f7fcf5",
                        "#e5f5e0",
                        "#c7e9c0",
                        "#a1d99b",
                        "#74c476",
                        "#41ab5d",
                        "#238b45",
                        "#006d2c",
                        "#00441b",
                    ],
                    YlGnBu: [
                        "#ffffd9",
                        "#edf8b1",
                        "#c7e9b4",
                        "#7fcdbb",
                        "#41b6c4",
                        "#1d91c0",
                        "#225ea8",
                        "#253494",
                        "#081d58",
                    ],
                    Purples: [
                        "#fcfbfd",
                        "#efedf5",
                        "#dadaeb",
                        "#bcbddc",
                        "#9e9ac8",
                        "#807dba",
                        "#6a51a3",
                        "#54278f",
                        "#3f007d",
                    ],
                    GnBu: [
                        "#f7fcf0",
                        "#e0f3db",
                        "#ccebc5",
                        "#a8ddb5",
                        "#7bccc4",
                        "#4eb3d3",
                        "#2b8cbe",
                        "#0868ac",
                        "#084081",
                    ],
                    Greys: [
                        "#ffffff",
                        "#f0f0f0",
                        "#d9d9d9",
                        "#bdbdbd",
                        "#969696",
                        "#737373",
                        "#525252",
                        "#252525",
                        "#000000",
                    ],
                    YlOrRd: [
                        "#ffffcc",
                        "#ffeda0",
                        "#fed976",
                        "#feb24c",
                        "#fd8d3c",
                        "#fc4e2a",
                        "#e31a1c",
                        "#bd0026",
                        "#800026",
                    ],
                    PuRd: [
                        "#f7f4f9",
                        "#e7e1ef",
                        "#d4b9da",
                        "#c994c7",
                        "#df65b0",
                        "#e7298a",
                        "#ce1256",
                        "#980043",
                        "#67001f",
                    ],
                    Blues: [
                        "#f7fbff",
                        "#deebf7",
                        "#c6dbef",
                        "#9ecae1",
                        "#6baed6",
                        "#4292c6",
                        "#2171b5",
                        "#08519c",
                        "#08306b",
                    ],
                    PuBuGn: [
                        "#fff7fb",
                        "#ece2f0",
                        "#d0d1e6",
                        "#a6bddb",
                        "#67a9cf",
                        "#3690c0",
                        "#02818a",
                        "#016c59",
                        "#014636",
                    ],
                    Viridis: [
                        "#440154",
                        "#482777",
                        "#3f4a8a",
                        "#31678e",
                        "#26838f",
                        "#1f9d8a",
                        "#6cce5a",
                        "#b6de2b",
                        "#fee825",
                    ],
                    Spectral: [
                        "#9e0142",
                        "#d53e4f",
                        "#f46d43",
                        "#fdae61",
                        "#fee08b",
                        "#ffffbf",
                        "#e6f598",
                        "#abdda4",
                        "#66c2a5",
                        "#3288bd",
                        "#5e4fa2",
                    ],
                    RdYlGn: [
                        "#a50026",
                        "#d73027",
                        "#f46d43",
                        "#fdae61",
                        "#fee08b",
                        "#ffffbf",
                        "#d9ef8b",
                        "#a6d96a",
                        "#66bd63",
                        "#1a9850",
                        "#006837",
                    ],
                    RdBu: [
                        "#67001f",
                        "#b2182b",
                        "#d6604d",
                        "#f4a582",
                        "#fddbc7",
                        "#f7f7f7",
                        "#d1e5f0",
                        "#92c5de",
                        "#4393c3",
                        "#2166ac",
                        "#053061",
                    ],
                    PiYG: [
                        "#8e0152",
                        "#c51b7d",
                        "#de77ae",
                        "#f1b6da",
                        "#fde0ef",
                        "#f7f7f7",
                        "#e6f5d0",
                        "#b8e186",
                        "#7fbc41",
                        "#4d9221",
                        "#276419",
                    ],
                    PRGn: [
                        "#40004b",
                        "#762a83",
                        "#9970ab",
                        "#c2a5cf",
                        "#e7d4e8",
                        "#f7f7f7",
                        "#d9f0d3",
                        "#a6dba0",
                        "#5aae61",
                        "#1b7837",
                        "#00441b",
                    ],
                    RdYlBu: [
                        "#a50026",
                        "#d73027",
                        "#f46d43",
                        "#fdae61",
                        "#fee090",
                        "#ffffbf",
                        "#e0f3f8",
                        "#abd9e9",
                        "#74add1",
                        "#4575b4",
                        "#313695",
                    ],
                    BrBG: [
                        "#543005",
                        "#8c510a",
                        "#bf812d",
                        "#dfc27d",
                        "#f6e8c3",
                        "#f5f5f5",
                        "#c7eae5",
                        "#80cdc1",
                        "#35978f",
                        "#01665e",
                        "#003c30",
                    ],
                    RdGy: [
                        "#67001f",
                        "#b2182b",
                        "#d6604d",
                        "#f4a582",
                        "#fddbc7",
                        "#ffffff",
                        "#e0e0e0",
                        "#bababa",
                        "#878787",
                        "#4d4d4d",
                        "#1a1a1a",
                    ],
                    PuOr: [
                        "#7f3b08",
                        "#b35806",
                        "#e08214",
                        "#fdb863",
                        "#fee0b6",
                        "#f7f7f7",
                        "#d8daeb",
                        "#b2abd2",
                        "#8073ac",
                        "#542788",
                        "#2d004b",
                    ],
                    Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                    Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                    Set1: [
                        "#e41a1c",
                        "#377eb8",
                        "#4daf4a",
                        "#984ea3",
                        "#ff7f00",
                        "#ffff33",
                        "#a65628",
                        "#f781bf",
                        "#999999",
                    ],
                    Set3: [
                        "#8dd3c7",
                        "#ffffb3",
                        "#bebada",
                        "#fb8072",
                        "#80b1d3",
                        "#fdb462",
                        "#b3de69",
                        "#fccde5",
                        "#d9d9d9",
                        "#bc80bd",
                        "#ccebc5",
                        "#ffed6f",
                    ],
                    Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                    Paired: [
                        "#a6cee3",
                        "#1f78b4",
                        "#b2df8a",
                        "#33a02c",
                        "#fb9a99",
                        "#e31a1c",
                        "#fdbf6f",
                        "#ff7f00",
                        "#cab2d6",
                        "#6a3d9a",
                        "#ffff99",
                        "#b15928",
                    ],
                    Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                    Pastel1: [
                        "#fbb4ae",
                        "#b3cde3",
                        "#ccebc5",
                        "#decbe4",
                        "#fed9a6",
                        "#ffffcc",
                        "#e5d8bd",
                        "#fddaec",
                        "#f2f2f2",
                    ],
                },
                Ha = 0,
                fp = Object.keys(Ml);
            Ha < fp.length;
            Ha += 1
        ) {
            var pp = fp[Ha];
            Ml[pp.toLowerCase()] = Ml[pp];
        }
        var M2 = Ml,
            Ke = M;
        (Ke.average = Ky),
            (Ke.bezier = i2),
            (Ke.blend = d2),
            (Ke.cubehelix = k2),
            (Ke.mix = Ke.interpolate = Uf),
            (Ke.random = C2),
            (Ke.scale = $a),
            (Ke.analyze = np.analyze),
            (Ke.contrast = P2),
            (Ke.deltaE = R2),
            (Ke.distance = z2),
            (Ke.limits = np.limits),
            (Ke.valid = A2),
            (Ke.scales = D2),
            (Ke.colors = Cf),
            (Ke.brewer = M2);
        var F2 = Ke;
        return F2;
    });
})(F0);
var sE = F0.exports;
const cE = js(sE);
function $0(e) {
    return cE(e).luminance() < 0.5;
}
function j0(e) {
    return (
        /^#[0-9A-Fa-f]{6}$/i.test(e) ||
        /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/i.test(e) ||
        /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d{1,2})\)$/i.test(e)
    );
}
const fE = new URLSearchParams(window.location.search),
    B0 = fE.get("config");
if (!B0) throw new Error("config is required");
const Be = JSON.parse(B0);
if (!Be.API_URL) throw new Error("API_URL is required");
if (!Be.API_KEY) throw new Error("API_KEY is required");
if (!Be.AGENT_NAME) throw new Error("AGENT_NAME is required");
if (!Be.PRIMARY_COLOR) throw new Error("PRIMARY_COLOR is required");
if (!Be.SECONDARY_COLOR) throw new Error("SECONDARY_COLOR is required");
if (!Be.LOGO) throw new Error("LOGO is required");
if (!Be.STARTING_MESSAGE) throw new Error("STARTING_MESSAGE is required");
if (!Be.AGENT_ID) throw new Error("AGENT_ID is required");
if (!j0(Be.PRIMARY_COLOR)) throw new Error("PRIMARY_COLOR is not a valid color");
if (!j0(Be.SECONDARY_COLOR)) throw new Error("SECONDARY_COLOR is not a valid color");
Be.PRIMARY_TEXT = $0(Be.PRIMARY_COLOR) ? "rgba(255,255,255,.95)" : "rgba(0,0,0,.95)";
Be.SECONDARY_TEXT = $0(Be.SECONDARY_COLOR) ? "rgba(255,255,255,.95)" : "rgba(0,0,0,.95)";
Be.BUTTON_BACKGROUND_COLOR = Be.BUTTON_BACKGROUND_COLOR || Be.PRIMARY_COLOR;
Be.BUTTON_TEXT_COLOR = Be.BUTTON_TEXT_COLOR || Be.PRIMARY_TEXT;
Be.BUTTON_TEXT_DISPLAY = Be.BUTTON_TEXT_DISPLAY || "";

const U0 = document.getElementById("do-genai-embed");
if (!U0) throw new Error("Mounting element with id 'do-genai-embed' not found");
Mu.createRoot(U0).render(
    V.jsx(Du.StrictMode, {
        children: V.jsx("div", {
            id: "do-genai-embed-container",
            children: V.jsx(lE, { agentId: Be.AGENT_ID, apiKey: Be.API_KEY, children: V.jsx(uE, { ...Be }) }),
        }),
    })
);
