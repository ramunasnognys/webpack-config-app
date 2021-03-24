(() => {
  "use strict";
  var e = {
      169: (e, n, t) => {
        t.d(n, { Z: () => a });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([e.id, "body{background:#f0f;color:#f3ff47}", ""]);
        const a = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (r && o[s[0]]) ||
                  (t &&
                    (s[2]
                      ? (s[2] = "".concat(t, " and ").concat(s[2]))
                      : (s[2] = t)),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      379: (e, n, t) => {
        var r,
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          a = [];
        function i(e) {
          for (var n = -1, t = 0; t < a.length; t++)
            if (a[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function c(e, n) {
          for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var c = e[o],
              s = n.base ? c[0] + n.base : c[0],
              l = t[s] || 0,
              u = "".concat(s, " ").concat(l);
            t[s] = l + 1;
            var d = i(u),
              f = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== d
              ? (a[d].references++, a[d].updater(f))
              : a.push({ identifier: u, updater: h(f, n), references: 1 }),
              r.push(u);
          }
          return r;
        }
        function s(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var a = t.nc;
            a && (r.nonce = a);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(n);
          }
          return n;
        }
        var l,
          u =
            ((l = []),
            function (e, n) {
              return (l[e] = n), l.filter(Boolean).join("\n");
            });
        function d(e, n, t, r) {
          var o = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = u(n, o);
          else {
            var a = document.createTextNode(o),
              i = e.childNodes;
            i[n] && e.removeChild(i[n]),
              i.length ? e.insertBefore(a, i[n]) : e.appendChild(a);
          }
        }
        function f(e, n, t) {
          var r = t.css,
            o = t.media,
            a = t.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            a &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          v = 0;
        function h(e, n) {
          var t, r, o;
          if (n.singleton) {
            var a = v++;
            (t = p || (p = s(n))),
              (r = d.bind(null, t, a, !1)),
              (o = d.bind(null, t, a, !0));
          } else
            (t = s(n)),
              (r = f.bind(null, t, n)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else o();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = c((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var o = i(t[r]);
                a[o].references--;
              }
              for (var s = c(e, n), l = 0; l < t.length; l++) {
                var u = i(t[l]);
                0 === a[u].references && (a[u].updater(), a.splice(u, 1));
              }
              t = s;
            }
          };
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      const e = "hello friend! CONTENT";
      var n = document.createElement("div");
      n.id = "message";
      var r = document.createTextNode(e);
      n.appendChild(r),
        document.body.appendChild(n),
        document.write(e),
        console.log("eagle boilerplate APP");
      var o = t(379),
        a = t.n(o),
        i = t(169);
      a()(i.Z, { insert: "head", singleton: !1 }),
        i.Z.locals,
        console.log("Hey you");
    })();
})();
