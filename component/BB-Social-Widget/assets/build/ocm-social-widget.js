function J() {
}
function Yt(t) {
  return t();
}
function tr() {
  return /* @__PURE__ */ Object.create(null);
}
function me(t) {
  t.forEach(Yt);
}
function yt(t) {
  return typeof t == "function";
}
function Rt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ke;
function ne(t, e) {
  return Ke || (Ke = document.createElement("a")), Ke.href = e, t === Ke.href;
}
function an(t) {
  return Object.keys(t).length === 0;
}
function sn(t, ...e) {
  if (t == null)
    return J;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function et(t, e, n) {
  t.$$.on_destroy.push(sn(e, n));
}
function un(t) {
  return t && yt(t.destroy) ? t.destroy : J;
}
function f(t, e) {
  t.appendChild(e);
}
function k(t, e, n) {
  t.insertBefore(e, n || null);
}
function F(t) {
  t.parentNode.removeChild(t);
}
function ht(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function g(t) {
  return document.createElement(t);
}
function K(t) {
  return document.createTextNode(t);
}
function x() {
  return K(" ");
}
function W(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function cn(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function fn(t) {
  return Array.from(t.childNodes);
}
function ae(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ce(t, e) {
  t.value = e == null ? "" : e;
}
function te(t, e, n, o) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, o ? "important" : "");
}
function B(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function pn(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, o, e), r;
}
function xr(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let Xe;
function Qe(t) {
  Xe = t;
}
function Bt() {
  if (!Xe)
    throw new Error("Function called outside component initialization");
  return Xe;
}
function _r(t) {
  Bt().$$.on_mount.push(t);
}
function dn() {
  const t = Bt();
  return (e, n, { cancelable: o = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const i = pn(e, n, { cancelable: o });
      return r.slice().forEach((l) => {
        l.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
const Re = [], jt = [], st = [], rr = [], Pr = Promise.resolve();
let Tt = !1;
function Or() {
  Tt || (Tt = !0, Pr.then($e));
}
function gn() {
  return Or(), Pr;
}
function xt(t) {
  st.push(t);
}
const At = /* @__PURE__ */ new Set();
let tt = 0;
function $e() {
  const t = Xe;
  do {
    for (; tt < Re.length; ) {
      const e = Re[tt];
      tt++, Qe(e), yn(e.$$);
    }
    for (Qe(null), Re.length = 0, tt = 0; jt.length; )
      jt.pop()();
    for (let e = 0; e < st.length; e += 1) {
      const n = st[e];
      At.has(n) || (At.add(n), n());
    }
    st.length = 0;
  } while (Re.length);
  for (; rr.length; )
    rr.pop()();
  Tt = !1, At.clear(), Qe(t);
}
function yn(t) {
  if (t.fragment !== null) {
    t.update(), me(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xt);
  }
}
const hn = /* @__PURE__ */ new Set();
function mn(t, e) {
  t && t.i && (hn.delete(t), t.i(e));
}
function Mn(t, e, n, o) {
  const { fragment: r, on_mount: i, on_destroy: l, after_update: a } = t.$$;
  r && r.m(e, n), o || xt(() => {
    const u = i.map(Yt).filter(yt);
    l ? l.push(...u) : me(u), t.$$.on_mount = [];
  }), a.forEach(xt);
}
function An(t, e) {
  const n = t.$$;
  n.fragment !== null && (me(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bn(t, e) {
  t.$$.dirty[0] === -1 && (Re.push(t), Or(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kr(t, e, n, o, r, i, l, a = [-1]) {
  const u = Xe;
  Qe(t);
  const s = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: J,
    not_equal: r,
    bound: tr(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: tr(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(s.root);
  let c = !1;
  if (s.ctx = n ? n(t, e.props || {}, (d, p, ...y) => {
    const M = y.length ? y[0] : p;
    return s.ctx && r(s.ctx[d], s.ctx[d] = M) && (!s.skip_bound && s.bound[d] && s.bound[d](M), c && bn(t, d)), p;
  }) : [], s.update(), c = !0, me(s.before_update), s.fragment = o ? o(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = fn(e.target);
      s.fragment && s.fragment.l(d), d.forEach(F);
    } else
      s.fragment && s.fragment.c();
    e.intro && mn(t.$$.fragment), Mn(t, e.target, e.anchor, e.customElement), $e();
  }
  Qe(u);
}
let Qt;
typeof HTMLElement == "function" && (Qt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Yt).filter(yt);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    me(this.$$.on_disconnect);
  }
  $destroy() {
    An(this, 1), this.$destroy = J;
  }
  $on(t, e) {
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !an(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const In = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9InNlYXJjaCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBvcGFjaXR5PSIwIi8+PHBhdGggZmlsbD0iIzQwM0I1MiIgZD0iTTIwLjcxIDE5LjI5bC0zLjQtMy4zOUE3LjkyIDcuOTIgMCAwIDAgMTkgMTFhOCA4IDAgMSAwLTggOCA3LjkyIDcuOTIgMCAwIDAgNC45LTEuNjlsMy4zOSAzLjRhMSAxIDAgMCAwIDEuNDIgMCAxIDEgMCAwIDAgMC0xLjQyek01IDExYTYgNiAwIDEgMSA2IDYgNiA2IDAgMCAxLTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==", nr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImFycm93LWlvcy1mb3J3YXJkIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEwIDE5YTEgMSAwIDAgMS0uNjQtLjIzIDEgMSAwIDAgMS0uMTMtMS40MUwxMy43MSAxMiA5LjM5IDYuNjNhMSAxIDAgMCAxIC4xNS0xLjQxIDEgMSAwIDAgMSAxLjQ2LjE1bDQuODMgNmExIDEgMCAwIDEgMCAxLjI3bC01IDZBMSAxIDAgMCAxIDEwIDE5eiIvPjwvZz48L2c+PC9zdmc+", Sn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9Imdsb2JlIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJNMjIgMTJBMTAgMTAgMCAwIDAgMTIgMmExMCAxMCAwIDAgMCAwIDIwIDEwIDEwIDAgMCAwIDEwLTEwem0tMi4wNy0xSDE3YTEyLjkxIDEyLjkxIDAgMCAwLTIuMzMtNi41NEE4IDggMCAwIDEgMTkuOTMgMTF6TTkuMDggMTNIMTVhMTEuNDQgMTEuNDQgMCAwIDEtMyA2LjYxQTExIDExIDAgMCAxIDkuMDggMTN6bTAtMkExMS40IDExLjQgMCAwIDEgMTIgNC40YTExLjE5IDExLjE5IDAgMCAxIDMgNi42em0uMzYtNi41N0ExMy4xOCAxMy4xOCAwIDAgMCA3LjA3IDExaC0zYTggOCAwIDAgMSA1LjM3LTYuNTd6TTQuMDcgMTNoM2ExMi44NiAxMi44NiAwIDAgMCAyLjM1IDYuNTZBOCA4IDAgMCAxIDQuMDcgMTN6bTEwLjU1IDYuNTVBMTMuMTQgMTMuMTQgMCAwIDAgMTcgMTNoMi45NWE4IDggMCAwIDEtNS4zMyA2LjU1eiIvPjwvZz48L2c+PC9zdmc+", vn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImxvY2siPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgb3BhY2l0eT0iMCIvPjxwYXRoIGQ9Ik0xNyA4aC0xVjYuMTFhNCA0IDAgMSAwLTggMFY4SDdhMyAzIDAgMCAwLTMgM3Y4YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtOGEzIDMgMCAwIDAtMy0zem0tNy0xLjg5QTIuMDYgMi4wNiAwIDAgMSAxMiA0YTIuMDYgMi4wNiAwIDAgMSAyIDIuMTFWOGgtNHpNMTggMTlhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LThhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIvPjxwYXRoIGQ9Ik0xMiAxMmEzIDMgMCAxIDAgMyAzIDMgMyAwIDAgMC0zLTN6bTAgNGExIDEgMCAxIDEgMS0xIDEgMSAwIDAgMS0xIDF6Ii8+PC9nPjwvZz48L3N2Zz4=", mt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9InBlcnNvbiI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBvcGFjaXR5PSIwIi8+PHBhdGggZD0iTTEyIDExYTQgNCAwIDEgMC00LTQgNCA0IDAgMCAwIDQgNHptMC02YTIgMiAwIDEgMS0yIDIgMiAyIDAgMCAxIDItMnoiLz48cGF0aCBkPSJNMTIgMTNhNyA3IDAgMCAwLTcgNyAxIDEgMCAwIDAgMiAwIDUgNSAwIDAgMSAxMCAwIDEgMSAwIDAgMCAyIDAgNyA3IDAgMCAwLTctN3oiLz48L2c+PC9nPjwvc3ZnPg==", or = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImNsb3NlIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEzLjQxIDEybDQuMy00LjI5YTEgMSAwIDEgMC0xLjQyLTEuNDJMMTIgMTAuNTlsLTQuMjktNC4zYTEgMSAwIDAgMC0xLjQyIDEuNDJsNC4zIDQuMjktNC4zIDQuMjlhMSAxIDAgMCAwIDAgMS40MiAxIDEgMCAwIDAgMS40MiAwbDQuMjktNC4zIDQuMjkgNC4zYTEgMSAwIDAgMCAxLjQyIDAgMSAxIDAgMCAwIDAtMS40MnoiLz48L2c+PC9nPjwvc3ZnPg==", wn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OTQiIGhlaWdodD0iNjA3Ij48ZyBmaWxsPSIjMDU3MmNkIj48cGF0aCBkPSJNMjQxLjYuMWE1MiA1MiAwIDAgMC0xNC4xIDIuMmwtMi4yLjZhMTMuMiAxMy4yIDAgMCAwLTUgMS41bC0xLjEuMy0xLjYuNC0yLjEgMS4yYTEwMS4zIDEwMS4zIDAgMCAwLTEyIDUuOGwtMS42IDEtMS41LjlhNS4yIDUuMiAwIDAgMC0xIC4zbC0uOSAxLTYuNCA0LjUtMi4yIDIuNWE5NyA5NyAwIDAgMC0xNy44IDIxLjlsLTEgMS41LTIuNyA1LjUtMS42IDIuOC0uMyAxLjUtLjMgMS4zLS42LjktLjMgMS41LS42IDEuMy0uMyAxLjItMS42IDUuNS0uNiAyLjUtMi4yIDE1YzAgMi42LS4zIDMuMi0xLjUgMy4ybC00LjMgMS4yLTMgMS0xMC4yIDQuMmE3Ny42IDc3LjYgMCAwIDAtMTYuNyAxMS4xbC0xMC43IDEwLjgtMi41IDMtMS41IDItLjQuMi0zLjMgNS4zLS4zLjYtLjQuNi0uOSAxLjgtMS4yIDEuOS0uMy4zLTIuOCA2LjJhMzguNSAzOC41IDAgMCAwLTIuNSA2LjdsLTEuMiA0LjYtLjYgMS42LS4zIDEtLjMgMmE3OS40IDc5LjQgMCAwIDAtMS42IDI3LjUgNjYuOCA2Ni44IDAgMCAwIDEuOSAxMS43bC4zIDEuMi42IDEuNWExOS43IDE5LjcgMCAwIDAgMS42IDUuM2wuMyAxLjUuNiAxIC4zIDEuMi4zIDEuMiAxLjUgMi44YTY5IDY5IDAgMCAwIDQgOC4zbDUuMyA4IDEuNSAyLjFhMTA4IDEwOCAwIDAgMCAyMi41IDIwLjcgNzcuOSA3Ny45IDAgMCAwIDQyLjggMTIuOWg2LjhsMS44LTFhOS42IDkuNiAwIDAgMCAzLjQtMi40IDE1IDE1IDAgMCAwIDMuNy01LjJsLjYtMi41di00LjNjLTEtMy40LTEuOS01LjItNC03LjQtMi41LTIuOC03LTQuMy0xMy00LjNsLTQuNi0uMy0zLjMtLjYtNS45LTEuNmEzMC41IDMwLjUgMCAwIDEtNy0zbC00LjctMi4yLTEtLjYtMS41LTEtMi43LTEuOGE2OS45IDY5LjkgMCAwIDEtMjAtMjVsLS42LTItLjctMS42LS4zLTEtMS41LTQuOS0uMy0xLjItLjYtMi41LS43LTMuN2ExMDcuMSAxMDcuMSAwIDAgMSAuNy0yMGwuNi0yLjQuMy0xLjNjMC0xLjIgMS4yLTQuNiAyLjUtNi43bC4zLTEuM2E1Mi4zIDUyLjMgMCAwIDEgNy4zLTEyLjkgNzEuNCA3MS40IDAgMCAxIDEzLjktMTMuMiA5OC44IDk4LjggMCAwIDEgMTEuNC02LjJsNy40LTIuNCAzLjQtLjdhMTQyIDE0MiAwIDAgMSAyMS4yLTIuMWMuMy0uNi0xLTkuNi0xLjItMTEuMUwxODcuNCA5MGE4MiA4MiAwIDAgMSAxLTEybC42LTMgLjYtMi4yLjMtMS4yLjYtMS45LjMtMWMwLS44IDEtMyAzLjQtOGE2NS45IDY1LjkgMCAwIDEgMjMuMS0yNC45IDY3LjQgNjcuNCAwIDAgMSAxOC41LTcuM2wzLS43YTcyLjcgNzIuNyAwIDAgMSAyNC40IDEuM2wzIC45IDEuNi42IDEgLjMgOS4yIDQuMyAzIDIuMiAyLjUgMS41IDIuMiAxLjZBNjIuMiA2Mi4yIDAgMCAxIDI5OS44IDU3bDQuMyA3Yy4zIDEgMS4zIDEuMyAxLjkuN2wxLjgtLjYgMS42LS4zIDEuNS0uNyAxLjUtLjMgMS42LS42IDIuNC0uNiA4LTEuMmE2Mi4yIDYyLjIgMCAwIDEgMjggMy40bDIgLjZhNjIuNSA2Mi41IDAgMCAxIDMyLjIgMzJsMSAyLjIuNiAxLjguMyAxLjIuNiAxLjMuMyAxLjUuNiAxLjUuMyAxIDEgMi43LjYgMi41aDEuNWwyLjgtLjMgNC0uNiA0LjMtLjZhMTAyLjggMTAyLjggMCAwIDEgMTkuNC42bDUuOCAxLjUgMS42LjMgMSAuMyAyLjcgMS4zYTUwLjIgNTAuMiAwIDAgMSAxMC44IDUuOCA2OSA2OSAwIDAgMSAxOSAyMC4zbDMuMSA2LjIgMSAyLjUuOSAyLjEuNiAxLjkgMS4yIDUuNWE2NS45IDY1LjkgMCAwIDEtLjYgMjYuOGMtLjMgMi44LTEgNC42LTEuMiA1bC0uMy44LS4zIDEuNi0xIDEuOC0uNiAxLjJhMzQuNSAzNC41IDAgMCAxLTQgNy43IDYxIDYxIDAgMCAxLTE3IDE4LjhsLTMgMi4yLTkuMiA0LjktMS42LjYtMi40IDEtMy4xLjlhMjAgMjAgMCAwIDEtNi41IDEuMiAzNC41IDM0LjUgMCAwIDAtOS4yIDIuMSAyOCAyOCAwIDAgMC01LjMgNS4zIDE0LjggMTQuOCAwIDAgMC0xLjUgN2wuMyAzLjEuMyAxLjNhMTQuMiAxNC4yIDAgMCAwIDcuMSA3LjdsMi4yLjloNC42YTQwIDQwIDAgMCAwIDkuMi0xIDQ2LjIgNDYuMiAwIDAgMCAxMi0zLjNsMS4zLS4zIDEuNS0uNiAyLjgtMS4zYTg4LjQgODguNCAwIDAgMCAxOC40LTEwLjdsMy4xLTIuNWE4NCA4NCAwIDAgMCAxMC41LTEwLjVsMi43LTMgMS45LTIuOCAxLjUtMS45LjMtLjMgMS4zLTIuNGE2My4xIDYzLjEgMCAwIDAgNS44LTEwLjJsMS4zLTMgMS4yLTIuNS4zLTEuMy4zLS42LjMtMS41IDEtMS45LjItMS41YTU1LjcgNTUuNyAwIDAgMCAyLjgtMTEuMWMuNi0xLjUgMS05IDEuMy0xNS40YTc0LjIgNzQuMiAwIDAgMC0zLjctMjUuNWwtLjQtMS4zLS42LTEuMmE2OCA2OCAwIDAgMC02LjctMTZsLTEuNi0yLjItLjMtLjlhMTIuOSAxMi45IDAgMCAxLTIuNS0zLjdsLTEuNS0yLjEtMS4yLTEuM2MwLS4zIDAtLjYtMS45LTIuOGwtMi4xLTIuNGE5MS43IDkxLjcgMCAwIDAtMTQuMi0xMi42bC0yLjgtMS45LS4zLS4zLTIuMS0xLjJhMzguMiAzOC4yIDAgMCAwLTUuMy0zLjEgMzcuMyAzNy4zIDAgMCAwLTYuNC0zbC04LTMuMi0zLjEtLjktMy0uNi0yLjUtLjZhOTguMiA5OC4yIDAgMCAwLTE2LTEuNmMtMi41IDAtMy4xIDAtMy43LS42bC0uNy0xLjItLjMtMS0uNi0uNS0xLjItMi41LTEuNi0yLjgtLjktMS4yLS45LTEuNmExMjEuMyAxMjEuMyAwIDAgMC0xNS43LTE3LjhsLTMtMi41LTIuNS0xLjhhMyAzIDAgMCAwLS43LS42bC02LjEtMy43YTQ5LjkgNDkuOSAwIDAgMC05LjktNS4zIDkuNSA5LjUgMCAwIDEtMy40LTEuNWwtMS4yLS4zLTEuMi0uM2ExNC40IDE0LjQgMCAwIDAtNS0xLjZsLTEuMi0uMy0yLjEtLjYtMi4yLS42Yy0xLjItLjYtNS41LTEuMi0xNC44LTEuOGgtOS44bC02LjguNmMtMS41IDAtMS44IDAtMi44LTEuM2E5OC4yIDk4LjIgMCAwIDAtMTcuNS0xNi42bC0yLjItMS4yLTIuNy0xLjktMi4yLTEuMmE5Ny42IDk3LjYgMCAwIDAtMjkuMi0xMGwtMy4xLS43YTE0MS44IDE0MS44IDAgMCAwLTE3LjMtLjNabTM3IDE1Mi4xLTIuOCAxLjktMS4yIDEuMnY1Ny4zbDMzLjUuMyAzMy42LjMgMSAuNiAyIDIuMSAxIDEuM3Y3N2gxOS43YzE3LjkgMCAxOS43IDAgMjEtLjcgMS44LS42IDIuNC0uOSAzLjMtMi40bC42LTEuM3YtOTUuNEwzNjcgMTk0Yy0yMC4zIDAtMjMuNy0uMy0yNC4zLS42LTEuOC0xLjMtMi44LTEuOS0zLjQtMy4xbC0uNi0xLjZ2LTM3LjJoLTI5LjJabTcwLjIgMTUuN3YxNS40aDM0LjFjLjQgMCAwLS42LS42LTFsLTIuNy0yLjQtNy40LTYuNy0zLjQtMy4xLTMtMi44LTMuNS0zLTMuNy0zLjUtNy43LTctMS44LTEuM1ptLTEzNS4yIDU1LjdjLTEuMiAwLTMuNCAyLjUtMy43IDMuN2wtLjMgNDMuMS42IDQzLjEgMS42IDIuMiAxLjIgMWg5LjVjOCAwIDkuNi4yIDkuOS41bC4zIDIxIC4zIDIwLjYgMy40LTMgNC42LTQuNCAyLjItMi4ycTEwLjYtMTAgMjEuOC0xOS43bDkuMy04LjYgMi4xLTEuOCAxLjktMS42IDEuMi0uOWgyNi4ybDI2LjEtLjMgMS42LTEuNSAxLjgtMS42di04NS45bC0uOS0xLjItMS44LTEuOC0xLS43LTU4LjUtLjNabTEwOSAxMi40LjYuM3YzMy41TDMyMyAzMDRjLS4zLjYtMSAuNi0yNC42LjZIMjc0bC0xIDEtMi43IDIuNC00LjcgNC4zLTQgMy43LTMuMyAzLTMuMSAyLjktMy43IDMuMy00IDRjLTEuMiAxLjMtMi44IDEuNi0yLjggMXYtMjUuNmgtMTEuNGMtMTAuMSAwLTExLjQgMC0xMS43LS42bC0uMy0zNC4yYzAtMzUuNCAwLTMzLjggMS42LTM0LjFsNDkuOC0uNFoiLz48cGF0aCBkPSJtMjYxLjMgMjcxLjcuMyAxOC40IDEtLjMgMi43LTIuMWEzMiAzMiAwIDAgMCA0LjMtMi44bDEuNi0xYTE1NC45IDE1NC45IDAgMCAxIDE3LjItMTFsLjYtLjYtMi43LTIuNS01LjktMy43LTQuOS0zLjRhMjEuMiAyMS4yIDAgMCAxLTIuOC0yLjFsLTEuMi0uNi0xLjItMS0xLjktMS4ycS0zLjMtMi40LTYuOC00LjZaIi8+PC9nPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NyA0OTApIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iTnVuaXRvLUJvbGQsIE51bml0byIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHg9Ii0yOTYuOSIgeT0iMCI+T3JhY2xlIENvbnRlbnQgTWFuYWdlbWVudDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NyA0MzEpIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjQ4IiBmb250LWZhbWlseT0iTnVuaXRvLUJvbGQsIE51bml0byIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHg9Ii00Ny44IiB5PSIwIj5GcmVlPC90c3Bhbj48L3RleHQ+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3IC01NykiPjxyZWN0IHdpZHRoPSI1ODUiIGhlaWdodD0iMTAxIiByeD0iNTAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIgNTYzKSIgZmlsbD0iI2Y2ZjdmOSIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNSA2MzQpIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjYxIiBmb250LWZhbWlseT0iTnVuaXRvLUJsYWNrLCBOdW5pdG8iIGZvbnQtd2VpZ2h0PSI4MDAiPjx0c3BhbiB4PSItMjA1LjgiIHk9IjAiPlNvY2lhbCBXaWRnZXQ8L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+";
function Ln(t) {
  var e = t.default;
  if (typeof e == "function") {
    var n = function() {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(o) {
    var r = Object.getOwnPropertyDescriptor(t, o);
    Object.defineProperty(n, o, r.get ? r : {
      enumerable: !0,
      get: function() {
        return t[o];
      }
    });
  }), n;
}
var Cn = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), o = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
    return !1;
  var r = 42;
  e[n] = r;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = Object.getOwnPropertyDescriptor(e, n);
    if (l.value !== r || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, ir = typeof Symbol < "u" && Symbol, Dn = Cn, Nn = function() {
  return typeof ir != "function" || typeof Symbol != "function" || typeof ir("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Dn();
}, En = "Function.prototype.bind called on incompatible ", bt = Array.prototype.slice, jn = Object.prototype.toString, Tn = "[object Function]", xn = function(e) {
  var n = this;
  if (typeof n != "function" || jn.call(n) !== Tn)
    throw new TypeError(En + n);
  for (var o = bt.call(arguments, 1), r, i = function() {
    if (this instanceof r) {
      var c = n.apply(
        this,
        o.concat(bt.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return n.apply(
        e,
        o.concat(bt.call(arguments))
      );
  }, l = Math.max(0, n.length - o.length), a = [], u = 0; u < l; u++)
    a.push("$" + u);
  if (r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(i), n.prototype) {
    var s = function() {
    };
    s.prototype = n.prototype, r.prototype = new s(), s.prototype = null;
  }
  return r;
}, _n = xn, $t = Function.prototype.bind || _n, Pn = $t, On = Pn.call(Function.call, Object.prototype.hasOwnProperty), D, _e = SyntaxError, Fr = Function, Te = TypeError, It = function(t) {
  try {
    return Fr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, ve = Object.getOwnPropertyDescriptor;
if (ve)
  try {
    ve({}, "");
  } catch {
    ve = null;
  }
var St = function() {
  throw new Te();
}, kn = ve ? function() {
  try {
    return arguments.callee, St;
  } catch {
    try {
      return ve(arguments, "callee").get;
    } catch {
      return St;
    }
  }
}() : St, De = Nn(), ge = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, Ee = {}, Fn = typeof Uint8Array > "u" ? D : ge(Uint8Array), xe = {
  "%AggregateError%": typeof AggregateError > "u" ? D : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? D : ArrayBuffer,
  "%ArrayIteratorPrototype%": De ? ge([][Symbol.iterator]()) : D,
  "%AsyncFromSyncIteratorPrototype%": D,
  "%AsyncFunction%": Ee,
  "%AsyncGenerator%": Ee,
  "%AsyncGeneratorFunction%": Ee,
  "%AsyncIteratorPrototype%": Ee,
  "%Atomics%": typeof Atomics > "u" ? D : Atomics,
  "%BigInt%": typeof BigInt > "u" ? D : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? D : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? D : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? D : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? D : FinalizationRegistry,
  "%Function%": Fr,
  "%GeneratorFunction%": Ee,
  "%Int8Array%": typeof Int8Array > "u" ? D : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? D : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? D : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": De ? ge(ge([][Symbol.iterator]())) : D,
  "%JSON%": typeof JSON == "object" ? JSON : D,
  "%Map%": typeof Map > "u" ? D : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !De ? D : ge((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? D : Promise,
  "%Proxy%": typeof Proxy > "u" ? D : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? D : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? D : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !De ? D : ge((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? D : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": De ? ge(""[Symbol.iterator]()) : D,
  "%Symbol%": De ? Symbol : D,
  "%SyntaxError%": _e,
  "%ThrowTypeError%": kn,
  "%TypedArray%": Fn,
  "%TypeError%": Te,
  "%Uint8Array%": typeof Uint8Array > "u" ? D : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? D : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? D : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? D : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? D : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? D : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? D : WeakSet
}, zn = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = It("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = It("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = It("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var o = t("%AsyncGeneratorFunction%");
    o && (n = o.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var r = t("%AsyncGenerator%");
    r && (n = ge(r.prototype));
  }
  return xe[e] = n, n;
}, lr = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Je = $t, ft = On, Wn = Je.call(Function.call, Array.prototype.concat), Un = Je.call(Function.apply, Array.prototype.splice), ar = Je.call(Function.call, String.prototype.replace), pt = Je.call(Function.call, String.prototype.slice), Yn = Je.call(Function.call, RegExp.prototype.exec), Rn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Bn = /\\(\\)?/g, Qn = function(e) {
  var n = pt(e, 0, 1), o = pt(e, -1);
  if (n === "%" && o !== "%")
    throw new _e("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && n !== "%")
    throw new _e("invalid intrinsic syntax, expected opening `%`");
  var r = [];
  return ar(e, Rn, function(i, l, a, u) {
    r[r.length] = a ? ar(u, Bn, "$1") : l || i;
  }), r;
}, $n = function(e, n) {
  var o = e, r;
  if (ft(lr, o) && (r = lr[o], o = "%" + r[0] + "%"), ft(xe, o)) {
    var i = xe[o];
    if (i === Ee && (i = zn(o)), typeof i > "u" && !n)
      throw new Te("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: r,
      name: o,
      value: i
    };
  }
  throw new _e("intrinsic " + e + " does not exist!");
}, Gt = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Te("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Te('"allowMissing" argument must be a boolean');
  if (Yn(/^%?[^%]*%?$/, e) === null)
    throw new _e("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = Qn(e), r = o.length > 0 ? o[0] : "", i = $n("%" + r + "%", n), l = i.name, a = i.value, u = !1, s = i.alias;
  s && (r = s[0], Un(o, Wn([0, 1], s)));
  for (var c = 1, d = !0; c < o.length; c += 1) {
    var p = o[c], y = pt(p, 0, 1), M = pt(p, -1);
    if ((y === '"' || y === "'" || y === "`" || M === '"' || M === "'" || M === "`") && y !== M)
      throw new _e("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (u = !0), r += "." + p, l = "%" + r + "%", ft(xe, l))
      a = xe[l];
    else if (a != null) {
      if (!(p in a)) {
        if (!n)
          throw new Te("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (ve && c + 1 >= o.length) {
        var A = ve(a, p);
        d = !!A, d && "get" in A && !("originalValue" in A.get) ? a = A.get : a = a[p];
      } else
        d = ft(a, p), a = a[p];
      d && !u && (xe[l] = a);
    }
  }
  return a;
}, zr = { exports: {} };
(function(t) {
  var e = $t, n = Gt, o = n("%Function.prototype.apply%"), r = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || e.call(r, o), l = n("%Object.getOwnPropertyDescriptor%", !0), a = n("%Object.defineProperty%", !0), u = n("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = null;
    }
  t.exports = function(d) {
    var p = i(e, r, arguments);
    if (l && a) {
      var y = l(p, "length");
      y.configurable && a(
        p,
        "length",
        { value: 1 + u(0, d.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var s = function() {
    return i(e, o, arguments);
  };
  a ? a(t.exports, "apply", { value: s }) : t.exports.apply = s;
})(zr);
var Wr = Gt, Ur = zr.exports, Gn = Ur(Wr("String.prototype.indexOf")), Hn = function(e, n) {
  var o = Wr(e, !!n);
  return typeof o == "function" && Gn(e, ".prototype.") > -1 ? Ur(o) : o;
};
const Zn = {}, Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), Jn = /* @__PURE__ */ Ln(Xn);
var Ht = typeof Map == "function" && Map.prototype, vt = Object.getOwnPropertyDescriptor && Ht ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, dt = Ht && vt && typeof vt.get == "function" ? vt.get : null, Vn = Ht && Map.prototype.forEach, Zt = typeof Set == "function" && Set.prototype, wt = Object.getOwnPropertyDescriptor && Zt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, gt = Zt && wt && typeof wt.get == "function" ? wt.get : null, qn = Zt && Set.prototype.forEach, Kn = typeof WeakMap == "function" && WeakMap.prototype, Ge = Kn ? WeakMap.prototype.has : null, eo = typeof WeakSet == "function" && WeakSet.prototype, He = eo ? WeakSet.prototype.has : null, to = typeof WeakRef == "function" && WeakRef.prototype, sr = to ? WeakRef.prototype.deref : null, ro = Boolean.prototype.valueOf, no = Object.prototype.toString, oo = Function.prototype.toString, io = String.prototype.match, Xt = String.prototype.slice, he = String.prototype.replace, lo = String.prototype.toUpperCase, ur = String.prototype.toLowerCase, Yr = RegExp.prototype.test, cr = Array.prototype.concat, le = Array.prototype.join, ao = Array.prototype.slice, fr = Math.floor, _t = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Lt = Object.getOwnPropertySymbols, Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Pe = typeof Symbol == "function" && typeof Symbol.iterator == "object", X = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Pe ? "object" : "symbol") ? Symbol.toStringTag : null, Rr = Object.prototype.propertyIsEnumerable, pr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function dr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Yr.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var o = t < 0 ? -fr(-t) : fr(t);
    if (o !== t) {
      var r = String(o), i = Xt.call(e, r.length + 1);
      return he.call(r, n, "$&_") + "." + he.call(he.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return he.call(e, n, "$&_");
}
var Ot = Jn, gr = Ot.custom, yr = Qr(gr) ? gr : null, so = function t(e, n, o, r) {
  var i = n || {};
  if (ye(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (ye(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = ye(i, "customInspect") ? i.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (ye(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (ye(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Gr(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return a ? dr(e, u) : u;
  }
  if (typeof e == "bigint") {
    var s = String(e) + "n";
    return a ? dr(e, s) : s;
  }
  var c = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof o > "u" && (o = 0), o >= c && c > 0 && typeof e == "object")
    return kt(e) ? "[Array]" : "[Object]";
  var d = Do(i, o);
  if (typeof r > "u")
    r = [];
  else if ($r(r, e) >= 0)
    return "[Circular]";
  function p(j, z, H) {
    if (z && (r = ao.call(r), r.push(z)), H) {
      var q = {
        depth: i.depth
      };
      return ye(i, "quoteStyle") && (q.quoteStyle = i.quoteStyle), t(j, q, o + 1, r);
    }
    return t(j, i, o + 1, r);
  }
  if (typeof e == "function" && !hr(e)) {
    var y = Mo(e), M = rt(e, p);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (M.length > 0 ? " { " + le.call(M, ", ") + " }" : "");
  }
  if (Qr(e)) {
    var A = Pe ? he.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Pt.call(e);
    return typeof e == "object" && !Pe ? We(A) : A;
  }
  if (wo(e)) {
    for (var L = "<" + ur.call(String(e.nodeName)), I = e.attributes || [], m = 0; m < I.length; m++)
      L += " " + I[m].name + "=" + Br(uo(I[m].value), "double", i);
    return L += ">", e.childNodes && e.childNodes.length && (L += "..."), L += "</" + ur.call(String(e.nodeName)) + ">", L;
  }
  if (kt(e)) {
    if (e.length === 0)
      return "[]";
    var v = rt(e, p);
    return d && !Co(v) ? "[" + Ft(v, d) + "]" : "[ " + le.call(v, ", ") + " ]";
  }
  if (fo(e)) {
    var U = rt(e, p);
    return !("cause" in Error.prototype) && "cause" in e && !Rr.call(e, "cause") ? "{ [" + String(e) + "] " + le.call(cr.call("[cause]: " + p(e.cause), U), ", ") + " }" : U.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + le.call(U, ", ") + " }";
  }
  if (typeof e == "object" && l) {
    if (yr && typeof e[yr] == "function" && Ot)
      return Ot(e, { depth: c - o });
    if (l !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Ao(e)) {
    var P = [];
    return Vn.call(e, function(j, z) {
      P.push(p(z, e, !0) + " => " + p(j, e));
    }), mr("Map", dt.call(e), P, d);
  }
  if (So(e)) {
    var N = [];
    return qn.call(e, function(j) {
      N.push(p(j, e));
    }), mr("Set", gt.call(e), N, d);
  }
  if (bo(e))
    return Ct("WeakMap");
  if (vo(e))
    return Ct("WeakSet");
  if (Io(e))
    return Ct("WeakRef");
  if (go(e))
    return We(p(Number(e)));
  if (ho(e))
    return We(p(_t.call(e)));
  if (yo(e))
    return We(ro.call(e));
  if (po(e))
    return We(p(String(e)));
  if (!co(e) && !hr(e)) {
    var E = rt(e, p), w = pr ? pr(e) === Object.prototype : e instanceof Object || e.constructor === Object, b = e instanceof Object ? "" : "null prototype", C = !w && X && Object(e) === e && X in e ? Xt.call(Me(e), 8, -1) : b ? "Object" : "", O = w || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", T = O + (C || b ? "[" + le.call(cr.call([], C || [], b || []), ": ") + "] " : "");
    return E.length === 0 ? T + "{}" : d ? T + "{" + Ft(E, d) + "}" : T + "{ " + le.call(E, ", ") + " }";
  }
  return String(e);
};
function Br(t, e, n) {
  var o = (n.quoteStyle || e) === "double" ? '"' : "'";
  return o + t + o;
}
function uo(t) {
  return he.call(String(t), /"/g, "&quot;");
}
function kt(t) {
  return Me(t) === "[object Array]" && (!X || !(typeof t == "object" && X in t));
}
function co(t) {
  return Me(t) === "[object Date]" && (!X || !(typeof t == "object" && X in t));
}
function hr(t) {
  return Me(t) === "[object RegExp]" && (!X || !(typeof t == "object" && X in t));
}
function fo(t) {
  return Me(t) === "[object Error]" && (!X || !(typeof t == "object" && X in t));
}
function po(t) {
  return Me(t) === "[object String]" && (!X || !(typeof t == "object" && X in t));
}
function go(t) {
  return Me(t) === "[object Number]" && (!X || !(typeof t == "object" && X in t));
}
function yo(t) {
  return Me(t) === "[object Boolean]" && (!X || !(typeof t == "object" && X in t));
}
function Qr(t) {
  if (Pe)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Pt)
    return !1;
  try {
    return Pt.call(t), !0;
  } catch {
  }
  return !1;
}
function ho(t) {
  if (!t || typeof t != "object" || !_t)
    return !1;
  try {
    return _t.call(t), !0;
  } catch {
  }
  return !1;
}
var mo = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function ye(t, e) {
  return mo.call(t, e);
}
function Me(t) {
  return no.call(t);
}
function Mo(t) {
  if (t.name)
    return t.name;
  var e = io.call(oo.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function $r(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, o = t.length; n < o; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function Ao(t) {
  if (!dt || !t || typeof t != "object")
    return !1;
  try {
    dt.call(t);
    try {
      gt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function bo(t) {
  if (!Ge || !t || typeof t != "object")
    return !1;
  try {
    Ge.call(t, Ge);
    try {
      He.call(t, He);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Io(t) {
  if (!sr || !t || typeof t != "object")
    return !1;
  try {
    return sr.call(t), !0;
  } catch {
  }
  return !1;
}
function So(t) {
  if (!gt || !t || typeof t != "object")
    return !1;
  try {
    gt.call(t);
    try {
      dt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function vo(t) {
  if (!He || !t || typeof t != "object")
    return !1;
  try {
    He.call(t, He);
    try {
      Ge.call(t, Ge);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function wo(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Gr(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, o = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Gr(Xt.call(t, 0, e.maxStringLength), e) + o;
  }
  var r = he.call(he.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Lo);
  return Br(r, "single", e);
}
function Lo(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + lo.call(e.toString(16));
}
function We(t) {
  return "Object(" + t + ")";
}
function Ct(t) {
  return t + " { ? }";
}
function mr(t, e, n, o) {
  var r = o ? Ft(n, o) : le.call(n, ", ");
  return t + " (" + e + ") {" + r + "}";
}
function Co(t) {
  for (var e = 0; e < t.length; e++)
    if ($r(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Do(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = le.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: le.call(Array(e + 1), n)
  };
}
function Ft(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + le.call(t, "," + n) + `
` + e.prev;
}
function rt(t, e) {
  var n = kt(t), o = [];
  if (n) {
    o.length = t.length;
    for (var r = 0; r < t.length; r++)
      o[r] = ye(t, r) ? e(t[r], t) : "";
  }
  var i = typeof Lt == "function" ? Lt(t) : [], l;
  if (Pe) {
    l = {};
    for (var a = 0; a < i.length; a++)
      l["$" + i[a]] = i[a];
  }
  for (var u in t)
    !ye(t, u) || n && String(Number(u)) === u && u < t.length || Pe && l["$" + u] instanceof Symbol || (Yr.call(/[^\w$]/, u) ? o.push(e(u, t) + ": " + e(t[u], t)) : o.push(u + ": " + e(t[u], t)));
  if (typeof Lt == "function")
    for (var s = 0; s < i.length; s++)
      Rr.call(t, i[s]) && o.push("[" + e(i[s]) + "]: " + e(t[i[s]], t));
  return o;
}
var Jt = Gt, ke = Hn, No = so, Eo = Jt("%TypeError%"), nt = Jt("%WeakMap%", !0), ot = Jt("%Map%", !0), jo = ke("WeakMap.prototype.get", !0), To = ke("WeakMap.prototype.set", !0), xo = ke("WeakMap.prototype.has", !0), _o = ke("Map.prototype.get", !0), Po = ke("Map.prototype.set", !0), Oo = ke("Map.prototype.has", !0), Vt = function(t, e) {
  for (var n = t, o; (o = n.next) !== null; n = o)
    if (o.key === e)
      return n.next = o.next, o.next = t.next, t.next = o, o;
}, ko = function(t, e) {
  var n = Vt(t, e);
  return n && n.value;
}, Fo = function(t, e, n) {
  var o = Vt(t, e);
  o ? o.value = n : t.next = {
    key: e,
    next: t.next,
    value: n
  };
}, zo = function(t, e) {
  return !!Vt(t, e);
}, Wo = function() {
  var e, n, o, r = {
    assert: function(i) {
      if (!r.has(i))
        throw new Eo("Side channel does not contain " + No(i));
    },
    get: function(i) {
      if (nt && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return jo(e, i);
      } else if (ot) {
        if (n)
          return _o(n, i);
      } else if (o)
        return ko(o, i);
    },
    has: function(i) {
      if (nt && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return xo(e, i);
      } else if (ot) {
        if (n)
          return Oo(n, i);
      } else if (o)
        return zo(o, i);
      return !1;
    },
    set: function(i, l) {
      nt && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new nt()), To(e, i, l)) : ot ? (n || (n = new ot()), Po(n, i, l)) : (o || (o = { key: {}, next: null }), Fo(o, i, l));
    }
  };
  return r;
}, Uo = String.prototype.replace, Yo = /%20/g, Dt = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, qt = {
  default: Dt.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Uo.call(t, Yo, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Dt.RFC1738,
  RFC3986: Dt.RFC3986
}, Ro = qt, Nt = Object.prototype.hasOwnProperty, Se = Array.isArray, ie = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Bo = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), o = n.obj[n.prop];
    if (Se(o)) {
      for (var r = [], i = 0; i < o.length; ++i)
        typeof o[i] < "u" && r.push(o[i]);
      n.obj[n.prop] = r;
    }
  }
}, Hr = function(e, n) {
  for (var o = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, r = 0; r < e.length; ++r)
    typeof e[r] < "u" && (o[r] = e[r]);
  return o;
}, Qo = function t(e, n, o) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Se(e))
      e.push(n);
    else if (e && typeof e == "object")
      (o && (o.plainObjects || o.allowPrototypes) || !Nt.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var r = e;
  return Se(e) && !Se(n) && (r = Hr(e, o)), Se(e) && Se(n) ? (n.forEach(function(i, l) {
    if (Nt.call(e, l)) {
      var a = e[l];
      a && typeof a == "object" && i && typeof i == "object" ? e[l] = t(a, i, o) : e.push(i);
    } else
      e[l] = i;
  }), e) : Object.keys(n).reduce(function(i, l) {
    var a = n[l];
    return Nt.call(i, l) ? i[l] = t(i[l], a, o) : i[l] = a, i;
  }, r);
}, $o = function(e, n) {
  return Object.keys(n).reduce(function(o, r) {
    return o[r] = n[r], o;
  }, e);
}, Go = function(t, e, n) {
  var o = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return o.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(o);
  } catch {
    return o;
  }
}, Ho = function(e, n, o, r, i) {
  if (e.length === 0)
    return e;
  var l = e;
  if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), o === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var a = "", u = 0; u < l.length; ++u) {
    var s = l.charCodeAt(u);
    if (s === 45 || s === 46 || s === 95 || s === 126 || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || i === Ro.RFC1738 && (s === 40 || s === 41)) {
      a += l.charAt(u);
      continue;
    }
    if (s < 128) {
      a = a + ie[s];
      continue;
    }
    if (s < 2048) {
      a = a + (ie[192 | s >> 6] + ie[128 | s & 63]);
      continue;
    }
    if (s < 55296 || s >= 57344) {
      a = a + (ie[224 | s >> 12] + ie[128 | s >> 6 & 63] + ie[128 | s & 63]);
      continue;
    }
    u += 1, s = 65536 + ((s & 1023) << 10 | l.charCodeAt(u) & 1023), a += ie[240 | s >> 18] + ie[128 | s >> 12 & 63] + ie[128 | s >> 6 & 63] + ie[128 | s & 63];
  }
  return a;
}, Zo = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], o = [], r = 0; r < n.length; ++r)
    for (var i = n[r], l = i.obj[i.prop], a = Object.keys(l), u = 0; u < a.length; ++u) {
      var s = a[u], c = l[s];
      typeof c == "object" && c !== null && o.indexOf(c) === -1 && (n.push({ obj: l, prop: s }), o.push(c));
    }
  return Bo(n), e;
}, Xo = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Jo = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Vo = function(e, n) {
  return [].concat(e, n);
}, qo = function(e, n) {
  if (Se(e)) {
    for (var o = [], r = 0; r < e.length; r += 1)
      o.push(n(e[r]));
    return o;
  }
  return n(e);
}, Zr = {
  arrayToObject: Hr,
  assign: $o,
  combine: Vo,
  compact: Zo,
  decode: Go,
  encode: Ho,
  isBuffer: Jo,
  isRegExp: Xo,
  maybeMap: qo,
  merge: Qo
}, Xr = Wo, zt = Zr, Ze = qt, Ko = Object.prototype.hasOwnProperty, Mr = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, ue = Array.isArray, ei = String.prototype.split, ti = Array.prototype.push, Jr = function(t, e) {
  ti.apply(t, ue(e) ? e : [e]);
}, ri = Date.prototype.toISOString, Ar = Ze.default, G = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: zt.encode,
  encodeValuesOnly: !1,
  format: Ar,
  formatter: Ze.formatters[Ar],
  indices: !1,
  serializeDate: function(e) {
    return ri.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ni = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Et = {}, oi = function t(e, n, o, r, i, l, a, u, s, c, d, p, y, M, A, L) {
  for (var I = e, m = L, v = 0, U = !1; (m = m.get(Et)) !== void 0 && !U; ) {
    var P = m.get(e);
    if (v += 1, typeof P < "u") {
      if (P === v)
        throw new RangeError("Cyclic object value");
      U = !0;
    }
    typeof m.get(Et) > "u" && (v = 0);
  }
  if (typeof u == "function" ? I = u(n, I) : I instanceof Date ? I = d(I) : o === "comma" && ue(I) && (I = zt.maybeMap(I, function(fe) {
    return fe instanceof Date ? d(fe) : fe;
  })), I === null) {
    if (i)
      return a && !M ? a(n, G.encoder, A, "key", p) : n;
    I = "";
  }
  if (ni(I) || zt.isBuffer(I)) {
    if (a) {
      var N = M ? n : a(n, G.encoder, A, "key", p);
      if (o === "comma" && M) {
        for (var E = ei.call(String(I), ","), w = "", b = 0; b < E.length; ++b)
          w += (b === 0 ? "" : ",") + y(a(E[b], G.encoder, A, "value", p));
        return [y(N) + (r && ue(I) && E.length === 1 ? "[]" : "") + "=" + w];
      }
      return [y(N) + "=" + y(a(I, G.encoder, A, "value", p))];
    }
    return [y(n) + "=" + y(String(I))];
  }
  var C = [];
  if (typeof I > "u")
    return C;
  var O;
  if (o === "comma" && ue(I))
    O = [{ value: I.length > 0 ? I.join(",") || null : void 0 }];
  else if (ue(u))
    O = u;
  else {
    var T = Object.keys(I);
    O = s ? T.sort(s) : T;
  }
  for (var j = r && ue(I) && I.length === 1 ? n + "[]" : n, z = 0; z < O.length; ++z) {
    var H = O[z], q = typeof H == "object" && typeof H.value < "u" ? H.value : I[H];
    if (!(l && q === null)) {
      var we = ue(I) ? typeof o == "function" ? o(j, H) : j : j + (c ? "." + H : "[" + H + "]");
      L.set(e, v);
      var ce = Xr();
      ce.set(Et, L), Jr(C, t(
        q,
        we,
        o,
        r,
        i,
        l,
        a,
        u,
        s,
        c,
        d,
        p,
        y,
        M,
        A,
        ce
      ));
    }
  }
  return C;
}, ii = function(e) {
  if (!e)
    return G;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || G.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var o = Ze.default;
  if (typeof e.format < "u") {
    if (!Ko.call(Ze.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    o = e.format;
  }
  var r = Ze.formatters[o], i = G.filter;
  return (typeof e.filter == "function" || ue(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : G.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? G.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : G.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? G.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : G.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : G.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : G.encodeValuesOnly,
    filter: i,
    format: o,
    formatter: r,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : G.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : G.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : G.strictNullHandling
  };
}, li = function(t, e) {
  var n = t, o = ii(e), r, i;
  typeof o.filter == "function" ? (i = o.filter, n = i("", n)) : ue(o.filter) && (i = o.filter, r = i);
  var l = [];
  if (typeof n != "object" || n === null)
    return "";
  var a;
  e && e.arrayFormat in Mr ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var u = Mr[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = u === "comma" && e && e.commaRoundTrip;
  r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
  for (var c = Xr(), d = 0; d < r.length; ++d) {
    var p = r[d];
    o.skipNulls && n[p] === null || Jr(l, oi(
      n[p],
      p,
      u,
      s,
      o.strictNullHandling,
      o.skipNulls,
      o.encode ? o.encoder : null,
      o.filter,
      o.sort,
      o.allowDots,
      o.serializeDate,
      o.format,
      o.formatter,
      o.encodeValuesOnly,
      o.charset,
      c
    ));
  }
  var y = l.join(o.delimiter), M = o.addQueryPrefix === !0 ? "?" : "";
  return o.charsetSentinel && (o.charset === "iso-8859-1" ? M += "utf8=%26%2310003%3B&" : M += "utf8=%E2%9C%93&"), y.length > 0 ? M + y : "";
}, Oe = Zr, Wt = Object.prototype.hasOwnProperty, ai = Array.isArray, Q = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Oe.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, si = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Vr = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, ui = "utf8=%26%2310003%3B", ci = "utf8=%E2%9C%93", fi = function(e, n) {
  var o = {}, r = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, l = r.split(n.delimiter, i), a = -1, u, s = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < l.length; ++u)
      l[u].indexOf("utf8=") === 0 && (l[u] === ci ? s = "utf-8" : l[u] === ui && (s = "iso-8859-1"), a = u, u = l.length);
  for (u = 0; u < l.length; ++u)
    if (u !== a) {
      var c = l[u], d = c.indexOf("]="), p = d === -1 ? c.indexOf("=") : d + 1, y, M;
      p === -1 ? (y = n.decoder(c, Q.decoder, s, "key"), M = n.strictNullHandling ? null : "") : (y = n.decoder(c.slice(0, p), Q.decoder, s, "key"), M = Oe.maybeMap(
        Vr(c.slice(p + 1), n),
        function(A) {
          return n.decoder(A, Q.decoder, s, "value");
        }
      )), M && n.interpretNumericEntities && s === "iso-8859-1" && (M = si(M)), c.indexOf("[]=") > -1 && (M = ai(M) ? [M] : M), Wt.call(o, y) ? o[y] = Oe.combine(o[y], M) : o[y] = M;
    }
  return o;
}, pi = function(t, e, n, o) {
  for (var r = o ? e : Vr(e, n), i = t.length - 1; i >= 0; --i) {
    var l, a = t[i];
    if (a === "[]" && n.parseArrays)
      l = [].concat(r);
    else {
      l = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, s = parseInt(u, 10);
      !n.parseArrays && u === "" ? l = { 0: r } : !isNaN(s) && a !== u && String(s) === u && s >= 0 && n.parseArrays && s <= n.arrayLimit ? (l = [], l[s] = r) : u !== "__proto__" && (l[u] = r);
    }
    r = l;
  }
  return r;
}, di = function(e, n, o, r) {
  if (!!e) {
    var i = o.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, l = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, u = o.depth > 0 && l.exec(i), s = u ? i.slice(0, u.index) : i, c = [];
    if (s) {
      if (!o.plainObjects && Wt.call(Object.prototype, s) && !o.allowPrototypes)
        return;
      c.push(s);
    }
    for (var d = 0; o.depth > 0 && (u = a.exec(i)) !== null && d < o.depth; ) {
      if (d += 1, !o.plainObjects && Wt.call(Object.prototype, u[1].slice(1, -1)) && !o.allowPrototypes)
        return;
      c.push(u[1]);
    }
    return u && c.push("[" + i.slice(u.index) + "]"), pi(c, n, o, r);
  }
}, gi = function(e) {
  if (!e)
    return Q;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? Q.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Q.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Q.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Q.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Q.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Q.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Q.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Q.decoder,
    delimiter: typeof e.delimiter == "string" || Oe.isRegExp(e.delimiter) ? e.delimiter : Q.delimiter,
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Q.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Q.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Q.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Q.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Q.strictNullHandling
  };
}, yi = function(t, e) {
  var n = gi(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var o = typeof t == "string" ? fi(t, n) : t, r = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(o), l = 0; l < i.length; ++l) {
    var a = i[l], u = di(a, o[a], n, typeof t == "string");
    r = Oe.merge(r, u, n);
  }
  return n.allowSparse === !0 ? r : Oe.compact(r);
}, hi = li, mi = yi, Mi = qt, Ai = {
  formats: Mi,
  parse: mi,
  stringify: hi
};
class Kt {
  constructor(e) {
    if (this.agent = "atlas", this.APIVersion = 8118, this.languageLocale = "en", this.BCSerial = 0, e) {
      let { agent: n, APIVersion: o, languageLocale: r, BCSerial: i } = e;
      n && (this.agent = n), o && (this.APIVersion = o), r && (this.languageLocale = r), i && (this.BCSerial = i);
    }
  }
  send({ method: e, path: n, data: o, token: r, includeCred: i, sessionID: l }) {
    const a = window.fetch, u = new AbortController(), { signal: s } = u, c = {
      method: e,
      headers: {},
      signal: s
    };
    if (o && o !== "") {
      if (console.log("[AJAX][hasData]", o, typeof o), typeof o.type < "u")
        c.body = o;
      else if (o instanceof FormData)
        c.headers["Content-Type"] = "multipart/form-data";
      else if (n.indexOf("data") === -1)
        if (console.log("[AJAX][hasData][NoPath]"), o.auth) {
          if (console.log("[AJAX][hasData][NoPath][Auth]"), o.auth !== "passThrough") {
            const p = `${o.auth.username}:${o.auth.password}`;
            c.headers.Authorization = `Basic ${btoa(p)}`;
          }
          c.mode = "cors", o.auth.type === "passThrough" ? (c.headers["Content-Type"] = "application/json", c.body = JSON.stringify(o.data)) : o.auth.type === "multipart" ? c.headers["Content-Type"] = "multipart/form-data" : (c.headers["Content-Type"] = "application/x-www-form-urlencoded", c.body = Ai.stringify(o.data));
        } else
          console.log("[AJAX][hasData][NoPath][NoAuth]"), c.headers["Content-Type"] = "application/json", c.headers["X-Requested-With"] = "XMLHttpRequest", c.body = JSON.stringify(o);
      else
        console.log("[AJAX][hasData][PAth]"), c.body = o;
      typeof o.repositoryId < "u" && (c.headers["Content-Type"] = "application/json", c.headers["X-Requested-With"] = "XMLHttpRequest", c.body = JSON.stringify(o));
    } else
      console.log("[AJAX][NoData]");
    if (r && (console.log("[AJAX][hasToken]"), c.headers.Authorization = `Bearer ${r}`, c.credentials = "same-origin"), l) {
      c.credentials = "same-origin", c.headers = {}, c.headers.Authorization = `Bearer ${r}`, typeof o.type < "u" ? c.headers["Content-Type"] = o.type : c.headers["Content-Type"] = "application/json";
      const p = new Date(l);
      isNaN(p.getTime()) ? c.headers["X-Waggle-RandomID"] = l : c.headers["X-Waggle-ClientID"] = l, c.headers["X-Requested-With"] = "XMLHttpRequest", c.headers["X-Waggle-Agent"] = this.agent, c.headers["X-Waggle-APIVersion"] = this.APIVersion, c.headers["X-Waggle-ForceLanguage"] = this.languageLocale, n.toString().includes("/osn/bc") && (c.headers["X-Waggle-BCSerial"] = this.BCSerial);
    }
    return i && (c.credentials = "include"), console.log("[AJAX]", n, c), [
      a(`${n}`, c).then((p) => p.text()).then((p) => {
        try {
          return JSON.parse(p);
        } catch {
          return p;
        }
      }),
      u.abort.bind(u)
    ];
  }
  get(e, n) {
    return this.send({ method: "GET", path: e, token: n });
  }
  del(e, n, o, r, i) {
    return this.send({ method: "DELETE", path: e, data: n, token: o, includeCred: r, sessionID: i });
  }
  post(e, n, o, r, i) {
    return this.send({ method: "POST", path: e, data: n, token: o, includeCred: r, sessionID: i });
  }
  put(e, n, o, r, i) {
    return this.send({ method: "PUT", path: e, data: n, token: o, includeCred: r, sessionID: i });
  }
  patch(e, n, o, r, i) {
    return this.send({ method: "PATCH", path: e, data: n, token: o, includeCred: r, sessionID: i });
  }
}
const bi = "https://idcs-57bc9b02b2954c38a1fdb14dc7edbe1c.identity.oraclecloud.com", Ii = "88d7c1cbddbc40479353a153e5f948ca", Si = "cf231b42-2399-4503-a42e-a08c31e7ac5e", vi = "https://1ABA33B6ED08480492BB2FB081CF85B2.cec.ocp.oraclecloud.com:443/urn:opc:cec:all", wi = "", Li = "", Ci = "", Di = "", Ni = "", it = {
  idcsUrl: bi,
  clientId: Ii,
  clientSecret: Si,
  oauthScopeUrl: vi,
  mobileClientId: wi,
  redirectUri: Li,
  accessToken: Ci,
  credentialsStored: Di,
  registrationProfileID: Ni
};
class Ei {
  constructor(e) {
    this.api = new Kt(e);
  }
  login(e, n, o) {
    console.log("[IDCS][Login]");
    const r = {
      grant_type: "password",
      scope: o,
      username: e,
      password: n
    }, i = {
      auth: {
        username: it.clientId,
        password: it.clientSecret
      },
      data: r
    }, [l, a] = this.api.post(`${it.idcsUrl}/oauth2/v1/token`, i);
    return [l, a];
  }
  logout() {
    console.log("[IDCS][logout]");
    const [e, n] = this.api.get(`${it.idcsUrl}/oauth2/v1/userlogout`);
    return [e, n];
  }
}
const ji = "https://ocegen2-fishbowlpartner.cec.ocp.oraclecloud.com", Ti = "", xi = "", _i = "", qr = {
  contentServer: ji,
  CDN: Ti,
  channelToken: xi,
  repositoryId: _i
}, pe = new Kt(), de = qr.contentServer;
class Pi {
  constructor(e) {
    if (this.profilePhoto = null, e) {
      let { profilePhoto: n } = e;
      this.profilePhoto = n || null;
    }
  }
  getProfilePic(e, n) {
    console.log("[getProfilePic][me]");
    const [o, r] = pe.get(`${de}/osn/social/api/v1/pictures/${e}/profile`);
    return [o, r];
  }
  getProfilePicByID(e) {
    console.log("[getProfilePic][me]", e);
    let n = "/profile_blank.png";
    return typeof this.profilePhoto[e] < "u" && (n = this.profilePhoto[e].img), n;
  }
  getConnectionInfo(e, n, o) {
    console.log("[getConnectionInfo]");
    const r = n ? {
      enterHive: !0
    } : "", [i, l] = pe.post(`${de}/osn/social/api/v1/connections`, r, e, !0, o);
    return [i, l];
  }
  getPeople(e, n) {
    e = e ? `,"startsWith":"${e}"` : "", console.log("[getPeople]", e);
    const o = Date.now(), [r, i] = pe.get(`${de}/osn/social/api/v1/people?filter={"excludeHidden":true,"isEnabled":false,"isDisabled":false${e}}&cb=${o}`, n);
    return [r, i];
  }
  getUserStats(e, n) {
    console.log("[getUserStats]", e);
    const o = Date.now(), [r, i] = pe.get(`${de}/osn/social/api/v1/people/${e}/statistics?filter={"excludeFavoritesCount":true,"excludeFlagsCount":true,"excludeSocialObjectsCount":true}&cb=${o}`, n);
    return [r, i];
  }
  getFollowers(e, n) {
    console.log("[getFollowers]", e);
    const o = Date.now(), [r, i] = pe.get(`${de}/osn/social/api/v1/people/${e}/followers?cb=${o}`, n);
    return [r, i];
  }
  getFollowingUsers(e, n) {
    console.log("[getFollowingUsers]", e);
    const o = Date.now(), [r, i] = pe.get(`${de}/osn/social/api/v1/people/${e}/following?cb=${o}`, n);
    return [r, i];
  }
  addToFollowers(e, n, o) {
    console.log(`[addToFollowers][${e}]`);
    const r = "", [i, l] = pe.post(`${de}/osn/social/api/v1/people/${e}/followers`, r, n, !0, o);
    return [i, l];
  }
  removeFollower(e, n, o) {
    console.log(`[removeFollower][${e}]`);
    const r = "", [i, l] = pe.del(`${de}/osn/social/api/v1/people/${e}/followers`, r, n, !0, o);
    return [i, l];
  }
}
const Oi = qr.contentServer, br = `${Oi}/osn/fc/RemoteJSONBatch`, Ir = new Kt();
class ki {
  getProfilePictureDataUri(e, n, o) {
    console.log("[getProfilePictureDataUri]", e);
    const r = [];
    e.forEach((a, u) => {
      r.push({
        Arguments: [a],
        MethodName: "getProfileProfilePictureDataUri",
        ModuleName: "XUserModule$Server"
      });
    });
    const [i, l] = Ir.post(br, r, n, !0, o);
    return [i, l];
  }
  getMyProfilePic(e, n) {
    const o = [{
      Arguments: [],
      MethodName: "getMyScaledProfilePictureDataUri",
      ModuleName: "XUserModule$Server"
    }], [r, i] = Ir.post(br, o, e, !0, n);
    return [r, i];
  }
}
function Sr(t, e, n) {
  const o = t.slice();
  return o[15] = e[n], o[17] = n, o;
}
function vr(t) {
  let e, n, o = t[15].name + "", r, i, l, a;
  function u(...s) {
    return t[10](t[15], ...s);
  }
  return {
    c() {
      e = g("li"), n = g("span"), r = K(o), h(n, "class", i = "label " + t[15].icon), B(e, "active", t[0] === t[15].name);
    },
    m(s, c) {
      k(s, e, c), f(e, n), f(n, r), l || (a = W(e, "click", u), l = !0);
    },
    p(s, c) {
      t = s, c & 2 && o !== (o = t[15].name + "") && ae(r, o), c & 2 && i !== (i = "label " + t[15].icon) && h(n, "class", i), c & 3 && B(e, "active", t[0] === t[15].name);
    },
    d(s) {
      s && F(e), l = !1, a();
    }
  };
}
function Fi(t) {
  let e, n, o, r, i, l, a, u, s, c, d = t[1], p = [];
  for (let y = 0; y < d.length; y += 1)
    p[y] = vr(Sr(t, d, y));
  return {
    c() {
      e = g("nav"), n = g("div"), o = x(), r = g("ul");
      for (let y = 0; y < p.length; y += 1)
        p[y].c();
      i = x(), l = g("li"), a = x(), u = g("div"), this.c = J, h(n, "class", "sidebar"), h(l, "class", "highlight"), te(l, "transform", "translateX(" + t[2] + "px)"), te(l, "width", t[3] + "px"), h(u, "class", "sidebar"), h(e, "class", "tablist");
    },
    m(y, M) {
      k(y, e, M), f(e, n), f(e, o), f(e, r);
      for (let A = 0; A < p.length; A += 1)
        p[A].m(r, null);
      f(r, i), f(r, l), t[11](r), f(e, a), f(e, u), s || (c = [
        W(window, "resize", t[5]),
        W(r, "touchstart", t[7], { passive: !0 }),
        W(r, "touchend", t[8], { passive: !0 })
      ], s = !0);
    },
    p(y, [M]) {
      if (M & 67) {
        d = y[1];
        let A;
        for (A = 0; A < d.length; A += 1) {
          const L = Sr(y, d, A);
          p[A] ? p[A].p(L, M) : (p[A] = vr(L), p[A].c(), p[A].m(r, i));
        }
        for (; A < p.length; A += 1)
          p[A].d(1);
        p.length = d.length;
      }
      M & 4 && te(l, "transform", "translateX(" + y[2] + "px)"), M & 8 && te(l, "width", y[3] + "px");
    },
    i: J,
    o: J,
    d(y) {
      y && F(e), ht(p, y), t[11](null), s = !1, me(c);
    }
  };
}
function zi(t, e, n) {
  let { hasTabs: o = [] } = e, { activeTab: r = "" } = e;
  const i = dn(), l = Bt();
  let a = 0, u = 0, s, c = !1;
  _r(() => {
    n(9, c = !0);
  });
  async function d() {
    await gn();
    const m = s.getElementsByClassName("active");
    m && m.length > 0 && (n(2, a = m[0].offsetLeft), n(3, u = m[0].offsetWidth - 12));
  }
  function p(m) {
    console.log(`[Dispatch Event][${m.action}]`, m), i(m.action, m), l.dispatchEvent && l.dispatchEvent(new CustomEvent(m.action, { detail: m }));
  }
  function y(m, v) {
    n(2, a = m.target.offsetLeft), n(0, r = v.name), p({
      action: "tab",
      name: v.name,
      path: v.path
    });
  }
  function M() {
    p({ action: "scrollStart" });
  }
  function A() {
    p({ action: "scrollEnd" });
  }
  const L = (m, v) => {
    y(v, m);
  };
  function I(m) {
    jt[m ? "unshift" : "push"](() => {
      s = m, n(4, s);
    });
  }
  return t.$$set = (m) => {
    "hasTabs" in m && n(1, o = m.hasTabs), "activeTab" in m && n(0, r = m.activeTab);
  }, t.$$.update = () => {
    t.$$.dirty & 513 && c && r && d();
  }, [
    r,
    o,
    a,
    u,
    s,
    d,
    y,
    M,
    A,
    c,
    L,
    I
  ];
}
class Wi extends Qt {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.tablist{display:flex;background:#f9fafc;border-radius:100px}.tablist ul{margin:0px;padding:0px;display:flex;position:relative;max-width:966px;min-width:320px;margin:0px auto;flex:2;overflow-x:auto;scrollbar-width:none}@media only screen and (min-width: 769px){.tablist ul{overflow-x:hidden}}.tablist li{list-style:none;flex:1;text-align:center;color:#403b52;font-weight:bold;opacity:0.5;transition:opacity 0.2s;cursor:pointer;z-index:10;position:relative}.tablist li:hover,.tablist li.active{opacity:1}.highlight{position:absolute;bottom:6px;left:6px;right:6px;background-color:#fff;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transition:-webkit-transform 0.25s !important;transition:-webkit-transform 0.25s !important;transition:transform 0.25s !important;transition:transform 0.25s, -webkit-transform 0.25s !important;opacity:1 !important;top:6px;border-radius:100px;z-index:0 !important;position:absolute !important}.tablist li:first-child.active~.highlight{-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(0) scaleX(0.5)}.tablist li:nth-child(2).active~.highlight{-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(50%) scaleX(0.5)}:global([dir='rtl'] .tablist li:first-child.active ~ .highlight){-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(50%) scaleX(0.5)}:global([dir='rtl'] .tablist li:nth-child(2).active ~ .highlight){-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(0) scaleX(0.5)}.tablist li span{background-size:contain;background-repeat:no-repeat;min-height:38px;line-height:38px}.tablist li span{min-height:50px;line-height:50px}.highlight{background-color:#fff}@media only screen and (min-width: 768px){}.label{pointer-events:none}</style>", kr(
      this,
      {
        target: this.shadowRoot,
        props: xr(this.attributes),
        customElement: !0
      },
      zi,
      Fi,
      Rt,
      { hasTabs: 1, activeTab: 0 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), $e()));
  }
  static get observedAttributes() {
    return ["hasTabs", "activeTab"];
  }
  get hasTabs() {
    return this.$$.ctx[1];
  }
  set hasTabs(e) {
    this.$$set({ hasTabs: e }), $e();
  }
  get activeTab() {
    return this.$$.ctx[0];
  }
  set activeTab(e) {
    this.$$set({ activeTab: e }), $e();
  }
}
customElements.define("header-tabs", Wi);
const Ne = [];
function Mt(t, e = J) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function r(a) {
    if (Rt(t, a) && (t = a, n)) {
      const u = !Ne.length;
      for (const s of o)
        s[1](), Ne.push(s, t);
      if (u) {
        for (let s = 0; s < Ne.length; s += 2)
          Ne[s][0](Ne[s + 1]);
        Ne.length = 0;
      }
    }
  }
  function i(a) {
    r(a(t));
  }
  function l(a, u = J) {
    const s = [a, u];
    return o.add(s), o.size === 1 && (n = e(r) || J), a(t), () => {
      o.delete(s), o.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: l };
}
const ut = { instance: "dev" }, Ue = {
  useSessionRequests: !0,
  sessionID: null,
  agent: "BitmapSocialWidget",
  APIVersion: 8118,
  BCSerial: 0,
  session: {
    oce: ""
  },
  profile: {
    oce: {
      id: ""
    }
  },
  stats: {
    following: 0,
    followers: 0
  }
};
function Ui() {
  let t = Ue;
  if (localStorage.getItem(`${ut.instance}_user`)) {
    const r = JSON.parse(localStorage.getItem(`${ut.instance}_user`));
    t = {
      ...Ue,
      ...r
    };
  } else
    t = Ue;
  const { subscribe: e, set: n, update: o } = Mt(t);
  return {
    subscribe: e,
    clearSession: () => {
      console.info("[user][clearSession]"), o((r) => (r.session = {
        idcs: "",
        oce: "",
        facebook: ""
      }, r.sessionID = null, r));
    },
    updateToken: (r) => {
      o((i) => (i.userToken = r, i));
    },
    updateSession: (r, i) => {
      console.info("[user][updateSession]"), o((l) => (window.localStorage.setItem(`session_${i}`, JSON.stringify(r)), l.session[i] = r, l));
    },
    updateProfileInfo: (r, i) => {
      console.info("[user][updateProfileInfo]", r, i), o((l) => (l.profile[i] = r, l));
    },
    updateVal: (r, i) => {
      console.info("[user][updateVal]", r, i), o((l) => (typeof l[r] < "u" && (console.log("updating.........", l[r], i), l[r] = i), l));
    },
    updateStats: (r) => {
      console.info("[user][updateStats]", r), o((i) => (i.stats = r, i));
    },
    updateProps: (r) => {
      console.info("[user][updateProperties]", r), o((i) => (i.props = r, i));
    },
    updateOCEVal: (r, i) => {
      console.info("[user][updateOCEVal]", r, i), o((l) => (typeof l.profile.oce[r] < "u" && (console.log("updating.........", l.profile.oce[r], i), l.profile.oce[r] = i), l));
    },
    updateConnectionInfo: (r, i, l) => {
      console.log("[user][updateConnectionInfo]", r, i, l), o((a) => (a.APIVersion = i, a.sessionID = l, a.languageLocale = r, a));
    },
    reset: () => (localStorage.setItem(`${ut.instance}_user`, Ue), n(Ue))
  };
}
const je = Ui();
je.subscribe((t) => {
  localStorage.setItem(`${ut.instance}_user`, JSON.stringify(t));
});
const lt = {
  searchEnabled: !1,
  searchString: "",
  filter: [],
  activeFollowing: [],
  following: {}
};
function Yi() {
  let t = lt;
  t = JSON.parse(localStorage.getItem("following")) || lt;
  const { subscribe: e, set: n, update: o } = Mt(t);
  return {
    subscribe: e,
    updateVal: (r, i) => {
      console.info("[following][updateVal]", r, i), o((l) => (typeof l[r] < "u" && (console.log("updating.........", l[r], i), l[r] = i), l));
    },
    addFollowing: (r) => {
      console.info("[following][addFollowing]", r), o((i) => (i.activeFollowing = [], r.forEach((l, a) => {
        i.activeFollowing.indexOf(l.id) === -1 && (i.activeFollowing.push(l.id), i.following[l.id] = l);
      }), i));
    },
    addFollowingUser: (r) => {
      console.info("[following][addFollowingUser]", r), o((i) => (i.activeFollowing.push(r.id), i.following[r.id] = r, i));
    },
    removeFollowingUser: (r) => {
      console.info("[following][removeFollowingUser]", r), o((i) => (i.activeFollowing.splice(i.activeFollowing.indexOf(r), 1), delete i.following[r], i));
    },
    filterPeople: (r) => {
      console.info("[following][filterPeople]", r), o((i) => {
        if (console.log(i), i.searchEnabled = r.length > 0, i.searchString = r.length > 0 ? r : "", r.length > 0) {
          let l = [];
          l = i.profileMap.filter((a) => a.name.toLowerCase().startsWith(r.toLowerCase()) || a.email.toLowerCase().startsWith(r.toLowerCase())), i.filter = l.map((a) => a.id);
        }
        return i;
      });
    },
    reset: () => (localStorage.setItem("following", lt), n(lt))
  };
}
const Be = Yi();
Be.subscribe((t) => {
  localStorage.setItem("following", JSON.stringify(t));
});
const at = {
  searchEnabled: !1,
  searchString: "",
  filter: [],
  activeFollowers: [],
  followers: {}
};
function Ri() {
  let t = at;
  t = JSON.parse(localStorage.getItem("followers")) || at;
  const { subscribe: e, set: n, update: o } = Mt(t);
  return {
    subscribe: e,
    updateVal: (r, i) => {
      console.info("[followers][updateVal]", r, i), o((l) => (typeof l[r] < "u" && (console.log("updating.........", l[r], i), l[r] = i), l));
    },
    addFollowers: (r) => {
      console.info("[followers][addFollowers]", r), o((i) => (r.forEach((l, a) => {
        i.activeFollowers.indexOf(l.id) === -1 && (i.activeFollowers.push(l.id), i.followers[l.id] = l);
      }), i));
    },
    filterPeople: (r) => {
      console.info("[followers][filterPeople]", r), o((i) => {
        if (console.log(i), i.searchEnabled = r.length > 0, i.searchString = r.length > 0 ? r : "", r.length > 0) {
          let l = [];
          l = i.profileMap.filter((a) => a.name.toLowerCase().startsWith(r.toLowerCase()) || a.email.toLowerCase().startsWith(r.toLowerCase())), i.filter = l.map((a) => a.id);
        }
        return i;
      });
    },
    reset: () => (localStorage.setItem("followers", at), n(at))
  };
}
const Ut = Ri();
Ut.subscribe((t) => {
  localStorage.setItem("followers", JSON.stringify(t));
});
const ct = { instance: "dev" }, Ye = {
  activePage: "explorer",
  searchEnabled: !1,
  searchString: "",
  searchResults: [],
  filter: [],
  profileMap: [],
  availableProfiles: [],
  profilePhoto: {
    anonymous: {
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    }
  },
  profile: {},
  stats: {}
};
function Bi() {
  let t = Ye;
  if (localStorage.getItem(`${ct.instance}_people`)) {
    const r = JSON.parse(localStorage.getItem(`${ct.instance}_people`));
    t = {
      ...Ye,
      ...r
    };
  } else
    t = Ye;
  const { subscribe: e, set: n, update: o } = Mt(t);
  return {
    subscribe: e,
    updateProfileImg: (r, i) => {
      console.info("[people][updateProfileImg]", r, i), o((l) => (l.profilePhoto[r] = { img: i }, l));
    },
    updateProfileInfo: (r) => {
      console.info("[people][updateProfileInfo]", r), o((i) => {
        if (typeof r !== null && typeof r.id !== null) {
          i.availableProfiles.indexOf(r.id) === -1 && i.availableProfiles.push(r.id), i.profile[r.id] = r;
          const l = {
            id: r.id,
            name: r.displayName,
            email: r.name
          };
          i.profileMap.map((u) => u.id).indexOf(r.id) === -1 && i.profileMap.push(l);
        }
        return i;
      });
    },
    updateStats: (r) => {
      console.info("[people][updateStats]", r), o((i) => (i.stats = r, i));
    },
    updateVal: (r, i) => {
      console.info("[people][updateVal]", r, i), o((l) => (typeof l[r] < "u" && (console.log("updating.........", l[r], i), l[r] = i), l));
    },
    clearFilter: () => {
      console.info("[people][clearFilter]"), o((r) => (r.searchEnabled = !1, r.filter = [], r.searchString = "", r));
    },
    filterPeople: (r) => {
      console.info("[people][filterPeople]", r), o((i) => {
        if (console.log(i), i.searchEnabled = r.length > 0, i.searchString = r.length > 0 ? r : "", r.length > 0) {
          let l = [];
          l = i.profileMap.filter((a) => a.name.toLowerCase().startsWith(r.toLowerCase()) || a.email.toLowerCase().startsWith(r.toLowerCase())), i.filter = l.map((a) => a.id);
        }
        return i;
      });
    },
    createBlankProfile: (r) => {
      console.info("[people][createBlankProfile]", r), o((i) => (typeof i.profile[r] > "u" && (i.profile[r] = {
        addressCity: "",
        addressCountry: "",
        addressLine1: "",
        addressLine2: "",
        addressState: "",
        addressZipCode: "",
        displayName: "",
        title: "",
        organization: "",
        expertise: "",
        biography: "",
        profileID: r
      }), typeof i.profilePhoto[r] > "u" && (i.profilePhoto[r] = {
        img: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      }), typeof i.stats[r] > "u" && (i.stats[r] = {
        followers: 0,
        following: 0,
        newConversations: 0
      }), i));
    },
    reset: () => (localStorage.setItem(`${ct.instance}_people`, Ye), n(Ye))
  };
}
const Ie = Bi();
Ie.subscribe((t) => {
  localStorage.setItem(`${ct.instance}_people`, JSON.stringify(t));
});
function wr(t, e, n) {
  const o = t.slice();
  return o[54] = e[n], o;
}
function Lr(t, e, n) {
  const o = t.slice();
  return o[54] = e[n], o;
}
function Cr(t, e, n) {
  const o = t.slice();
  return o[54] = e[n], o;
}
function Dr(t) {
  let e, n, o, r, i;
  return {
    c() {
      e = g("nav"), n = g("header-tabs");
    },
    m(l, a) {
      k(l, e, a), f(e, n), r || (i = [
        W(n, "tab", t[37]),
        un(o = ul.call(null, n, {
          hasTabs: [
            {
              name: "Following",
              path: "/?tab=Tokens"
            },
            {
              name: "Followers",
              path: "/?tab=NFTs"
            }
          ],
          activeTab: t[9]
        }))
      ], r = !0);
    },
    p(l, a) {
      o && yt(o.update) && a[0] & 512 && o.update.call(null, {
        hasTabs: [
          {
            name: "Following",
            path: "/?tab=Tokens"
          },
          {
            name: "Followers",
            path: "/?tab=NFTs"
          }
        ],
        activeTab: l[9]
      });
    },
    d(l) {
      l && F(e), r = !1, me(i);
    }
  };
}
function Qi(t) {
  let e;
  function n(i, l) {
    return i[14] && i[14].length > 0 ? Zi : Hi;
  }
  let o = n(t), r = o(t);
  return {
    c() {
      e = g("main"), r.c();
    },
    m(i, l) {
      k(i, e, l), r.m(e, null);
    },
    p(i, l) {
      o === (o = n(i)) && r ? r.p(i, l) : (r.d(1), r = o(i), r && (r.c(), r.m(e, null)));
    },
    d(i) {
      i && F(e), r.d();
    }
  };
}
function $i(t) {
  let e;
  function n(i, l) {
    return i[17].stats.followers === 0 ? el : Ki;
  }
  let o = n(t), r = o(t);
  return {
    c() {
      e = g("main"), r.c();
    },
    m(i, l) {
      k(i, e, l), r.m(e, null);
    },
    p(i, l) {
      o === (o = n(i)) && r ? r.p(i, l) : (r.d(1), r = o(i), r && (r.c(), r.m(e, null)));
    },
    d(i) {
      i && F(e), r.d();
    }
  };
}
function Gi(t) {
  let e;
  function n(i, l) {
    return i[17].stats.following === 0 ? ol : nl;
  }
  let o = n(t), r = o(t);
  return {
    c() {
      e = g("main"), r.c();
    },
    m(i, l) {
      k(i, e, l), r.m(e, null);
    },
    p(i, l) {
      o === (o = n(i)) && r ? r.p(i, l) : (r.d(1), r = o(i), r && (r.c(), r.m(e, null)));
    },
    d(i) {
      i && F(e), r.d();
    }
  };
}
function Hi(t) {
  let e;
  function n(i, l) {
    return i[10] ? Ji : Xi;
  }
  let o = n(t), r = o(t);
  return {
    c() {
      e = g("div"), r.c(), h(e, "class", "info");
    },
    m(i, l) {
      k(i, e, l), r.m(e, null);
    },
    p(i, l) {
      o !== (o = n(i)) && (r.d(1), r = o(i), r && (r.c(), r.m(e, null)));
    },
    d(i) {
      i && F(e), r.d();
    }
  };
}
function Zi(t) {
  let e, n = t[14], o = [];
  for (let r = 0; r < n.length; r += 1)
    o[r] = Er(wr(t, n, r));
  return {
    c() {
      e = g("ul");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
    },
    m(r, i) {
      k(r, e, i);
      for (let l = 0; l < o.length; l += 1)
        o[l].m(e, null);
    },
    p(r, i) {
      if (i[0] & 4734979) {
        n = r[14];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const a = wr(r, n, l);
          o[l] ? o[l].p(a, i) : (o[l] = Er(a), o[l].c(), o[l].m(e, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = n.length;
      }
    },
    d(r) {
      r && F(e), ht(o, r);
    }
  };
}
function Xi(t) {
  let e;
  return {
    c() {
      e = K("No users found.");
    },
    m(n, o) {
      k(n, e, o);
    },
    d(n) {
      n && F(e);
    }
  };
}
function Ji(t) {
  let e;
  return {
    c() {
      e = K("Searching...");
    },
    m(n, o) {
      k(n, e, o);
    },
    d(n) {
      n && F(e);
    }
  };
}
function Vi(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = mt) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[54]] ? t[0].profile[t[54]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 16385 && o !== (o = r[0].profile[r[54]] ? r[0].profile[r[54]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function qi(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[54]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[54]] ? t[0].profile[t[54]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 16385 && !ne(e.src, n = r[0].profilePhoto[r[54]].img) && h(e, "src", n), i[0] & 16385 && o !== (o = r[0].profile[r[54]] ? r[0].profile[r[54]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function Nr(t) {
  let e, n, o;
  function r() {
    return t[40](t[54]);
  }
  return {
    c() {
      e = g("button"), e.textContent = "Follow";
    },
    m(i, l) {
      k(i, e, l), n || (o = W(e, "click", r), n = !0);
    },
    p(i, l) {
      t = i;
    },
    d(i) {
      i && F(e), n = !1, o();
    }
  };
}
function Er(t) {
  let e, n, o, r, i, l, a, u = (t[0].profile[t[54]] ? t[0].profile[t[54]].displayName : "") + "", s, c, d, p, y, M = (t[0].profile[t[54]] ? t[0].profile[t[54]].displayName : "") + "", A, L, I, m = (t[0].profile[t[54]] ? t[0].profile[t[54]].eMailAddress : "") + "", v, U;
  function P(b, C) {
    return C[0] & 16384 && (i = null), i == null && (i = !!b[22](b[54])), i ? qi : Vi;
  }
  let N = P(t, [-1, -1]), E = N(t), w = !t[1].following[t[54]] && Nr(t);
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), E.c(), l = x(), a = g("figcaption"), s = K(u), c = x(), d = g("dd"), w && w.c(), p = x(), y = g("b"), A = K(M), L = x(), I = g("p"), v = K(m), U = x(), h(I, "class", "email");
    },
    m(b, C) {
      k(b, e, C), f(e, n), f(n, o), f(o, r), E.m(r, null), f(r, l), f(r, a), f(a, s), f(o, c), f(n, d), w && w.m(d, null), f(d, p), f(d, y), f(y, A), f(d, L), f(d, I), f(I, v), f(e, U);
    },
    p(b, C) {
      N === (N = P(b, C)) && E ? E.p(b, C) : (E.d(1), E = N(b), E && (E.c(), E.m(r, l))), C[0] & 16385 && u !== (u = (b[0].profile[b[54]] ? b[0].profile[b[54]].displayName : "") + "") && ae(s, u), b[1].following[b[54]] ? w && (w.d(1), w = null) : w ? w.p(b, C) : (w = Nr(b), w.c(), w.m(d, p)), C[0] & 16385 && M !== (M = (b[0].profile[b[54]] ? b[0].profile[b[54]].displayName : "") + "") && ae(A, M), C[0] & 16385 && m !== (m = (b[0].profile[b[54]] ? b[0].profile[b[54]].eMailAddress : "") + "") && ae(v, m);
    },
    d(b) {
      b && F(e), E.d(), w && w.d();
    }
  };
}
function Ki(t) {
  let e, n = t[16], o = [];
  for (let r = 0; r < n.length; r += 1)
    o[r] = jr(Lr(t, n, r));
  return {
    c() {
      e = g("ul");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
    },
    m(r, i) {
      k(r, e, i);
      for (let l = 0; l < o.length; l += 1)
        o[l].m(e, null);
    },
    p(r, i) {
      if (i[0] & 5308421) {
        n = r[16];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const a = Lr(r, n, l);
          o[l] ? o[l].p(a, i) : (o[l] = jr(a), o[l].c(), o[l].m(e, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = n.length;
      }
    },
    d(r) {
      r && F(e), ht(o, r);
    }
  };
}
function el(t) {
  let e;
  return {
    c() {
      e = g("div"), e.textContent = "You have no followers", h(e, "class", "info");
    },
    m(n, o) {
      k(n, e, o);
    },
    p: J,
    d(n) {
      n && F(e);
    }
  };
}
function tl(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = mt) || h(e, "src", n), h(e, "alt", o = t[2].followers[t[54]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 65540 && o !== (o = r[2].followers[r[54]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function rl(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[54]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[54]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 65537 && !ne(e.src, n = r[0].profilePhoto[r[54]].img) && h(e, "src", n), i[0] & 65537 && o !== (o = r[0].profile[r[54]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function jr(t) {
  let e, n, o, r, i, l, a, u = t[2].followers[t[54]].displayName + "", s, c, d, p, y, M, A = t[2].followers[t[54]].displayName + "", L, I, m, v = t[2].followers[t[54]].eMailAddress + "", U, P, N, E;
  function w(T, j) {
    return j[0] & 65536 && (i = null), i == null && (i = !!T[22](T[54])), i ? rl : tl;
  }
  let b = w(t, [-1, -1]), C = b(t);
  function O() {
    return t[39](t[54]);
  }
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), C.c(), l = x(), a = g("figcaption"), s = K(u), c = x(), d = g("dd"), p = g("button"), p.textContent = "Unfollow", y = x(), M = g("b"), L = K(A), I = x(), m = g("p"), U = K(v), P = x(), h(m, "class", "email");
    },
    m(T, j) {
      k(T, e, j), f(e, n), f(n, o), f(o, r), C.m(r, null), f(r, l), f(r, a), f(a, s), f(o, c), f(n, d), f(d, p), f(d, y), f(d, M), f(M, L), f(d, I), f(d, m), f(m, U), f(e, P), N || (E = W(p, "click", O), N = !0);
    },
    p(T, j) {
      t = T, b === (b = w(t, j)) && C ? C.p(t, j) : (C.d(1), C = b(t), C && (C.c(), C.m(r, l))), j[0] & 65540 && u !== (u = t[2].followers[t[54]].displayName + "") && ae(s, u), j[0] & 65540 && A !== (A = t[2].followers[t[54]].displayName + "") && ae(L, A), j[0] & 65540 && v !== (v = t[2].followers[t[54]].eMailAddress + "") && ae(U, v);
    },
    d(T) {
      T && F(e), C.d(), N = !1, E();
    }
  };
}
function nl(t) {
  let e, n = t[15], o = [];
  for (let r = 0; r < n.length; r += 1)
    o[r] = Tr(Cr(t, n, r));
  return {
    c() {
      e = g("ul");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
    },
    m(r, i) {
      k(r, e, i);
      for (let l = 0; l < o.length; l += 1)
        o[l].m(e, null);
    },
    p(r, i) {
      if (i[0] & 9469955) {
        n = r[15];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const a = Cr(r, n, l);
          o[l] ? o[l].p(a, i) : (o[l] = Tr(a), o[l].c(), o[l].m(e, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = n.length;
      }
    },
    d(r) {
      r && F(e), ht(o, r);
    }
  };
}
function ol(t) {
  let e;
  return {
    c() {
      e = g("div"), e.textContent = "You have no connections", h(e, "class", "info");
    },
    m(n, o) {
      k(n, e, o);
    },
    p: J,
    d(n) {
      n && F(e);
    }
  };
}
function il(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[23]([t[54]])) || h(e, "src", n), h(e, "alt", o = t[1].following[t[54]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 32768 && !ne(e.src, n = r[23]([r[54]])) && h(e, "src", n), i[0] & 32770 && o !== (o = r[1].following[r[54]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function ll(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[54]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[54]] ? t[0].profile[t[54]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 32769 && !ne(e.src, n = r[0].profilePhoto[r[54]].img) && h(e, "src", n), i[0] & 32769 && o !== (o = r[0].profile[r[54]] ? r[0].profile[r[54]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && F(e);
    }
  };
}
function Tr(t) {
  let e, n, o, r, i, l, a = t[1].following[t[54]].displayName + "", u, s, c, d, p, y, M = t[1].following[t[54]].displayName + "", A, L, I, m = t[1].following[t[54]].eMailAddress + "", v, U, P, N;
  function E(O, T) {
    return typeof O[0].profilePhoto[O[54]] < "u" && O[0].profilePhoto[O[54]].img ? ll : il;
  }
  let w = E(t), b = w(t);
  function C() {
    return t[38](t[54]);
  }
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), b.c(), i = x(), l = g("figcaption"), u = K(a), s = x(), c = g("dd"), d = g("button"), d.textContent = "Unfollow", p = x(), y = g("b"), A = K(M), L = x(), I = g("p"), v = K(m), U = x(), h(I, "class", "email");
    },
    m(O, T) {
      k(O, e, T), f(e, n), f(n, o), f(o, r), b.m(r, null), f(r, i), f(r, l), f(l, u), f(o, s), f(n, c), f(c, d), f(c, p), f(c, y), f(y, A), f(c, L), f(c, I), f(I, v), f(e, U), P || (N = W(d, "click", C), P = !0);
    },
    p(O, T) {
      t = O, w === (w = E(t)) && b ? b.p(t, T) : (b.d(1), b = w(t), b && (b.c(), b.m(r, i))), T[0] & 32770 && a !== (a = t[1].following[t[54]].displayName + "") && ae(u, a), T[0] & 32770 && M !== (M = t[1].following[t[54]].displayName + "") && ae(A, M), T[0] & 32770 && m !== (m = t[1].following[t[54]].eMailAddress + "") && ae(v, m);
    },
    d(O) {
      O && F(e), b.d(), P = !1, N();
    }
  };
}
function al(t) {
  let e, n, o, r, i, l, a, u, s, c, d, p, y, M, A, L, I, m, v, U, P, N, E, w, b, C, O, T, j, z, H, q, we, ce, fe, se, Ae, Fe, Ve, Z = t[9] !== "Search" && Dr(t);
  function qe(_, Y) {
    return _[9] === "Following" ? Gi : _[9] === "Followers" ? $i : Qi;
  }
  let Le = qe(t), ee = Le(t);
  return {
    c() {
      e = g("section"), n = g("div"), o = g("div"), r = g("article"), i = g("header"), l = g("img"), u = x(), s = g("form"), c = g("div"), d = g("input"), p = x(), y = g("div"), y.innerHTML = "<hr/>", M = x(), A = g("div"), L = g("input"), I = x(), m = g("div"), v = g("input"), U = x(), P = g("div"), N = g("button"), N.textContent = "Login", E = x(), w = g("article"), b = g("header"), C = g("fieldset"), O = g("legend"), O.innerHTML = '<label for="socialUserSearch">Search:</label>', T = x(), j = g("div"), z = g("input"), H = x(), q = g("button"), we = x(), Z && Z.c(), ce = x(), ee.c(), fe = x(), se = g("footer"), Ae = g("button"), Ae.textContent = "Logout", this.c = J, h(l, "width", "300"), ne(l.src, a = wn) || h(l, "src", a), h(l, "alt", "BitmapBytes - OCM Social Widget"), h(d, "autocapitalize", "none"), h(d, "enterkeyhint", "next"), h(d, "id", "ocmInstanceURL"), h(d, "type", "search"), h(d, "placeholder", "OCM Instance URL"), h(c, "class", "field"), te(c, "background-image", "url(" + Sn + ")"), B(c, "active", t[4]), h(y, "class", "hr"), h(L, "autocorrect", "off"), h(L, "autocapitalize", "none"), h(L, "autocomplete", "username"), h(L, "enterkeyhint", "next"), h(L, "id", "username"), h(L, "type", "search"), h(L, "placeholder", "Username"), h(A, "class", "field"), te(A, "margin-bottom", "10px"), te(A, "background-image", "url(" + mt + ")"), B(A, "active", t[5]), h(v, "autocapitalize", "none"), h(v, "enterkeyhint", "next"), h(v, "id", "password"), h(v, "type", "password"), h(v, "placeholder", "Password"), h(m, "class", "field"), te(m, "margin-bottom", "10px"), te(m, "background-image", "url(" + vn + ")"), B(m, "active", t[6]), h(P, "class", "loginAction"), h(r, "class", "loginWidget"), B(r, "error", t[11]), h(z, "autocapitalize", "none"), h(z, "enterkeyhint", "next"), h(z, "id", "socialUserSearch"), h(z, "type", "search"), h(z, "placeholder", "Search Network Users..."), te(q, "background-image", "url(" + (t[9] === "Search" ? or : nr) + ")"), h(j, "class", "userSearchField"), te(j, "background-image", "url(" + In + ")"), B(j, "active", t[3]), h(w, "class", "socialWidget"), h(o, "class", "widgetFlipper"), h(n, "class", "widgetWrapper"), B(n, "flip", t[7]), h(Ae, "class", "logout"), B(se, "hidden", !t[7]), B(se, "show", t[7]), h(e, "class", "bitmapbytes-socialWidget");
    },
    m(_, Y) {
      k(_, e, Y), f(e, n), f(n, o), f(o, r), f(r, i), f(i, l), f(r, u), f(r, s), f(s, c), f(c, d), f(s, p), f(s, y), f(s, M), f(s, A), f(A, L), Ce(L, t[12]), f(s, I), f(s, m), f(m, v), Ce(v, t[13]), f(s, U), f(s, P), f(P, N), f(o, E), f(o, w), f(w, b), f(b, C), f(C, O), f(C, T), f(C, j), f(j, z), Ce(z, t[8]), f(j, H), f(j, q), f(w, we), Z && Z.m(w, null), f(w, ce), ee.m(w, null), f(e, fe), f(e, se), f(se, Ae), Fe || (Ve = [
        W(d, "focus", t[25]),
        W(d, "blur", t[26]),
        W(L, "input", t[27]),
        W(L, "focus", t[28]),
        W(L, "blur", t[29]),
        W(v, "input", t[30]),
        W(v, "focus", t[31]),
        W(v, "blur", t[32]),
        W(N, "click", t[18]),
        W(s, "submit", cn(sl)),
        W(z, "input", t[33]),
        W(z, "keypress", t[24]),
        W(z, "focus", t[34]),
        W(z, "blur", t[35]),
        W(q, "click", t[36]),
        W(Ae, "click", t[41])
      ], Fe = !0);
    },
    p(_, Y) {
      Y[0] & 16 && B(c, "active", _[4]), Y[0] & 4096 && Ce(L, _[12]), Y[0] & 32 && B(A, "active", _[5]), Y[0] & 8192 && v.value !== _[13] && Ce(v, _[13]), Y[0] & 64 && B(m, "active", _[6]), Y[0] & 2048 && B(r, "error", _[11]), Y[0] & 256 && Ce(z, _[8]), Y[0] & 512 && te(q, "background-image", "url(" + (_[9] === "Search" ? or : nr) + ")"), Y[0] & 8 && B(j, "active", _[3]), _[9] !== "Search" ? Z ? Z.p(_, Y) : (Z = Dr(_), Z.c(), Z.m(w, ce)) : Z && (Z.d(1), Z = null), Le === (Le = qe(_)) && ee ? ee.p(_, Y) : (ee.d(1), ee = Le(_), ee && (ee.c(), ee.m(w, null))), Y[0] & 128 && B(n, "flip", _[7]), Y[0] & 128 && B(se, "hidden", !_[7]), Y[0] & 128 && B(se, "show", _[7]);
    },
    i: J,
    o: J,
    d(_) {
      _ && F(e), Z && Z.d(), ee.d(), Fe = !1, me(Ve);
    }
  };
}
function sl() {
}
function ul(t, e) {
  const n = () => {
    Object.entries(e).forEach(([o, r]) => {
      t[o] = r;
    });
  };
  return n(), {
    update(o) {
      e = o, n();
    }
  };
}
function cl(t, e, n) {
  let o, r, i, l, a, u, s;
  et(t, je, (S) => n(17, l = S)), et(t, Ie, (S) => n(0, a = S)), et(t, Be, (S) => n(1, u = S)), et(t, Ut, (S) => n(2, s = S));
  const c = new Pi(), d = new ki(), p = new Ei();
  let y = !1, M = !1, A = !1, L = !1, I = !1, m, v = "Following", U = !1, P = !1, N = [], E = "", w = "";
  _r(() => {
  });
  function b() {
    const [S, re] = p.login(E, w, "https://1ABA33B6ED08480492BB2FB081CF85B2.cec.ocp.oraclecloud.com:443/urn:opc:cec:all");
    S.then((R) => {
      if (console.log("[OCE][Auth][Logged In][Token]", R), typeof R.error < "u") {
        console.error("IDCS OCE Auth Error: ", R.error), n(11, P = !0);
        return;
      }
      je.updateSession(R.access_token, "oce");
      let $ = l.sessionID ? l.sessionID : Date.now();
      const [V, oe] = c.getConnectionInfo(l.session.oce, l.useSessionRequests, $);
      V.then((be) => {
        console.log("[connection]", be), $ = l.useSessionRequests ? $ : be.apiRandomID, je.updateConnectionInfo(be.languageLocale, be.apiVersion, $), je.updateProfileInfo(be.user, "oce"), n(7, I = !0), j(), z(), C();
      });
    }).catch((R) => {
      console.error("IDCS OCE Auth Error: ", R), n(11, P = !0);
    });
  }
  function C() {
    console.log("[refreshUserStats]");
    const [S, re] = c.getUserStats(l.profile.oce.id, l.session.oce);
    S.then((R) => {
      const $ = {
        followers: 0,
        following: 0,
        newConversations: 0
      };
      R.items.forEach((V, oe) => {
        V.name === "FOLLOWERS_COUNT" && ($.followers = V.count), V.name === "FOLLOWING_COUNT" && ($.following = V.count), V.name === "NEW_CONVERSATIONS_COUNT" && ($.newConversations = V.count);
      }), je.updateStats($);
    });
  }
  function O(S) {
    if (console.log("[followUser]", S, N), N.indexOf(S) >= 0)
      return;
    N.push(S);
    const [re, R] = c.addToFollowers(S, l.session.oce, l.sessionID);
    re.then(($) => {
      console.log("[followUser]", $), Be.addFollowingUser(a.profile[S]), N.splice(N.indexOf(S), 1), C();
    });
  }
  function T(S) {
    if (console.log("[unfollowUser]", S, N), N.indexOf(S) >= 0)
      return;
    N.push(S);
    const [re, R] = c.removeFollower(S, l.session.oce, l.sessionID);
    re.then(($) => {
      console.log("[unfollowUser]", $), Be.removeFollowingUser(S), N.splice(N.indexOf(S), 1), C();
    });
  }
  function j() {
    console.log("[userFollowing]", l.profile.oce);
    const [S, re] = c.getFollowingUsers(l.profile.oce.id, l.session.oce);
    S.then((R) => {
      console.log("userFollowing", R), Be.addFollowing(R.items);
    });
  }
  function z() {
    console.log("[userFollowers]");
    const [S, re] = c.getFollowers(l.profile.oce.id, l.session.oce);
    S.then((R) => {
      console.log("userFollowers", R), Ut.addFollowers(R.items);
    });
  }
  function H(S) {
    if (console.log("[searchUser]"), S === "button" && v === "Search") {
      n(9, v = "Following"), n(8, m = "");
      return;
    }
    n(10, U = !0), n(9, v = "Search"), Ie.updateVal("searchResults", []);
    const re = m && m.length > 0 ? m.toLowerCase() : null, [R, $] = c.getPeople(re, l.session.oce);
    R.then((V) => {
      if (console.log("[People]", V), V && V.items) {
        const oe = [];
        V.items.forEach((ze, ln) => {
          Ie.updateProfileInfo(ze), oe.push(ze.id);
        }), a.searchEnabled, Ie.updateVal("searchResults", oe), n(10, U = !1);
        const [be, pl] = d.getProfilePictureDataUri(oe, l.session.oce, l.sessionID);
        be.then((ze) => {
          console.log("[getProfilePictureDataUri]", ze), oe.forEach((ln, er) => {
            Ie.updateProfileImg(oe[er], ze[er].returnValue);
          });
        });
      }
    });
  }
  function q(S) {
    return typeof a.profilePhoto[S] < "u" && a.profilePhoto[S].img;
  }
  function we(S) {
    const [re, R] = d.getProfilePictureDataUri(S, l.session.oce, l.sessionID);
    return re.then(($) => {
      console.log("[getProfilePictureDataUri]", $), S.forEach((V, oe) => {
        Ie.updateProfileImg(S[oe], $[oe].returnValue);
      });
    }), mt;
  }
  function ce(S) {
    S.charCode === 13 && H();
  }
  const fe = () => {
    n(11, P = !1), n(4, M = !0);
  }, se = () => {
    n(4, M = !1);
  };
  function Ae() {
    E = this.value, n(12, E);
  }
  const Fe = () => {
    n(11, P = !1), n(5, A = !0);
  }, Ve = () => {
    n(5, A = !1);
  };
  function Z() {
    w = this.value, n(13, w);
  }
  const qe = () => {
    n(11, P = !1), n(6, L = !0);
  }, Le = () => {
    n(6, L = !1);
  };
  function ee() {
    m = this.value, n(8, m);
  }
  const _ = () => {
    n(3, y = !0);
  }, Y = () => {
    n(3, y = !1);
  }, Kr = () => {
    H("button");
  }, en = (S) => {
    n(9, v = S.detail.name);
  }, tn = (S) => {
    T(S);
  }, rn = (S) => {
    T(S);
  }, nn = (S) => {
    O(S);
  }, on = () => {
    n(7, I = !1);
  };
  return t.$$.update = () => {
    t.$$.dirty[0] & 1 && a.profilePhoto, t.$$.dirty[0] & 4 && n(16, o = s.activeFollowers.length > 0 ? s.activeFollowers : []), t.$$.dirty[0] & 2 && n(15, r = u.activeFollowing.length > 0 ? u.activeFollowing : []), t.$$.dirty[0] & 1 && n(14, i = a.searchResults.length > 0 ? a.searchResults : []);
  }, [
    a,
    u,
    s,
    y,
    M,
    A,
    L,
    I,
    m,
    v,
    U,
    P,
    E,
    w,
    i,
    r,
    o,
    l,
    b,
    O,
    T,
    H,
    q,
    we,
    ce,
    fe,
    se,
    Ae,
    Fe,
    Ve,
    Z,
    qe,
    Le,
    ee,
    _,
    Y,
    Kr,
    en,
    tn,
    rn,
    nn,
    on
  ];
}
class fl extends Qt {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = `<style>footer{display:flex;justify-content:right;opacity:0}footer.hidden{visibility:hidden}footer.show{visibility:visible;animation-name:show;animation-duration:0.3s;animation-delay:0.4s;animation-fill-mode:forwards}@keyframes show{0%{opacity:0}100%{opacity:1}}.logout{margin:20px;border:0px;cursor:pointer;border-radius:100px;padding:6px 16px;font-weight:600;font-size:0.875em;transition:color 0.3s, background 0.3s;color:#BAC2CA}.logout:hover{background:#F3F4F6;color:#403b52}.widgetWrapper{background-color:transparent;width:440px;height:618px;perspective:1000px}.widgetWrapper.flip .widgetFlipper{transform:rotateY(180deg)}.loginWidget,.socialWidget{position:absolute;width:100%;height:100%;min-height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.socialWidget{display:flex;flex-direction:column;transform:rotateY(180deg)}.socialWidget main{flex:1}article{background:#fff;border-radius:26px 26px 20px 20px;box-shadow:0px 2px 4px  0px rgba(0,0,0,0.15);min-width:400px;min-height:100px;overflow:hidden;height:558px;position:relative}.widgetFlipper{position:relative;width:100%;height:100%;min-height:100%;text-align:center;transition:transform 0.6s;transform-style:preserve-3d}.info{border:solid 4px #F9FAFC;border-radius:20px;padding:10px;margin:10px 20px;font-weight:bold;text-align:center;color:rgb(15 23 42)}legend{display:none}.loginWidget header{text-align:center;margin:20px}.loginWidget form{margin:20px}.loginWidget .hr{height:6px;background:#F9FAFC;border-radius:20px;margin:10px 0px}.loginWidget .hr hr{display:none}.loginAction{display:flex;justify-content:center}.loginWidget button{border:0px;border-radius:100px;background:#3F83D3;color:#fff;text-align:center;min-height:48px;padding:0px 20px;font-weight:bold;letter-spacing:1px;width:200px;cursor:pointer;transition:background 0.3s;font-size:1.1em;;}.field,.userSearchField{display:flex;background:#F9FAFC;box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.1);border-radius:100px;padding-left:48px;background-repeat:no-repeat;background-size:26px;background-position:10px center;transition:box-shadow 0.3s, background 0.3s}.field{padding-right:10px
	}.field:hover,.field.active,.userSearchField:hover,.userSearchField.active{background-color:#fff;box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.4),0px 1px 2px 0px rgba(0,0,0,0.1)}.field ::placeholder,.userSearchField ::placeholder{color:#687889;font-weight:600}input{border:0px;background:0px;height:48px;font-weight:500;flex:1;font-size:1.05em;outline:none}input:-webkit-autofill{-webkit-background-clip:text}.userSearchField button{width:48px;height:48px;border-radius:50%;background:#8F9BA8;box-shadow:inset 0px 0px 0px 3px #7C8B9A;border:0px;background-repeat:no-repeat;background-size:30px;background-position:center;cursor:pointer;transition:background 0.3s}button:hover{background-color:#7C8B9A}fieldset{border:0px;padding:6px 6px 10px;margin:0px}nav{border-top:solid 0.5px #F5F5F5;border-bottom:solid 0.5px #F5F5F5;padding:6px 12px}main ul{margin:0px 10px 10px 10px;padding:0px}main li{list-style:none;border-bottom:solid 4px #F9FAFC}main li:last-child{border:0px}dl{display:flex;border-radius:15px;background:#fff;transition:background 0.3s;padding:10px 0px
	}dl:hover{background:#f9fafc;cursor:pointer}dd{flex:1;margin:0px;padding:0px;text-align:left;display:flex;flex-direction:column;justify-content:center;position:relative}dd button{position:absolute;top:0px;right:10px;border:0px;border-radius:40px;font-weight:400;font-size:0.75em;padding:4px 8px;cursor:pointer;box-shadow:inset 0px 0px 1px 0px rgba(0,0,0,0.15)
	}dd button:hover{color:#fff}dd .email{display:none;font-size:0.875em}figure{margin:0px;padding:0px 10px}dt figcaption{display:none}dt img{width:50px;height:50px;border-radius:14px;overflow:hidden;display:block;border:solid 3px #ECEEF0}main{overflow-y:auto;overflow-x:hidden;margin-right:10px}p{font-size:0.875em;padding:0px;margin:0px}.bitmapbytes-socialWidget{width:440px;position:relative;margin:20px auto}.bitmapbytes-socialWidget ::-webkit-scrollbar{display:block;width:8px}.bitmapbytes-socialWidget ::-webkit-scrollbar-thumb{background:#7C8B9A;border-radius:100px}.bitmapbytes-socialWidget ::-webkit-scrollbar-button{width:8px;height:10px}.loginWidget.error .field{box-shadow:inset 0px 0px 2px 0px red,0px 1px 2px 0px rgba(0,0,0,0.1)}.loginWidget.error{animation:shake 0.82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0, 0, 0);backface-visibility:hidden;perspective:1000px;box-shadow:inset 0px 0px 0px 2px red
	}@keyframes shake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}</style>`, kr(
      this,
      {
        target: this.shadowRoot,
        props: xr(this.attributes),
        customElement: !0
      },
      cl,
      al,
      Rt,
      {},
      null,
      [-1, -1]
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("ocm-social-widget", fl);
