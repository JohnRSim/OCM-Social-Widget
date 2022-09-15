function X() {
}
function Yt(t) {
  return t();
}
function tr() {
  return /* @__PURE__ */ Object.create(null);
}
function Me(t) {
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
function ln(t) {
  return Object.keys(t).length === 0;
}
function an(t, ...e) {
  if (t == null)
    return X;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function et(t, e, n) {
  t.$$.on_destroy.push(an(e, n));
}
function sn(t) {
  return t && yt(t.destroy) ? t.destroy : X;
}
function f(t, e) {
  t.appendChild(e);
}
function k(t, e, n) {
  t.insertBefore(e, n || null);
}
function z(t) {
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
function T() {
  return K(" ");
}
function U(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function un(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function cn(t) {
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
function H(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function fn(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
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
function $e(t) {
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
function pn() {
  const t = Bt();
  return (e, n, { cancelable: o = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const i = fn(e, n, { cancelable: o });
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
  Tt || (Tt = !0, Pr.then(Qe));
}
function dn() {
  return Or(), Pr;
}
function xt(t) {
  st.push(t);
}
const At = /* @__PURE__ */ new Set();
let tt = 0;
function Qe() {
  const t = Xe;
  do {
    for (; tt < Re.length; ) {
      const e = Re[tt];
      tt++, $e(e), gn(e.$$);
    }
    for ($e(null), Re.length = 0, tt = 0; jt.length; )
      jt.pop()();
    for (let e = 0; e < st.length; e += 1) {
      const n = st[e];
      At.has(n) || (At.add(n), n());
    }
    st.length = 0;
  } while (Re.length);
  for (; rr.length; )
    rr.pop()();
  Tt = !1, At.clear(), $e(t);
}
function gn(t) {
  if (t.fragment !== null) {
    t.update(), Me(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xt);
  }
}
const yn = /* @__PURE__ */ new Set();
function hn(t, e) {
  t && t.i && (yn.delete(t), t.i(e));
}
function Mn(t, e, n, o) {
  const { fragment: r, on_mount: i, on_destroy: l, after_update: a } = t.$$;
  r && r.m(e, n), o || xt(() => {
    const u = i.map(Yt).filter(yt);
    l ? l.push(...u) : Me(u), t.$$.on_mount = [];
  }), a.forEach(xt);
}
function mn(t, e) {
  const n = t.$$;
  n.fragment !== null && (Me(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function An(t, e) {
  t.$$.dirty[0] === -1 && (Re.push(t), Or(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kr(t, e, n, o, r, i, l, a = [-1]) {
  const u = Xe;
  $e(t);
  const s = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: X,
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
    const m = y.length ? y[0] : p;
    return s.ctx && r(s.ctx[d], s.ctx[d] = m) && (!s.skip_bound && s.bound[d] && s.bound[d](m), c && An(t, d)), p;
  }) : [], s.update(), c = !0, Me(s.before_update), s.fragment = o ? o(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = cn(e.target);
      s.fragment && s.fragment.l(d), d.forEach(z);
    } else
      s.fragment && s.fragment.c();
    e.intro && hn(t.$$.fragment), Mn(t, e.target, e.anchor, e.customElement), Qe();
  }
  $e(u);
}
let $t;
typeof HTMLElement == "function" && ($t = class extends HTMLElement {
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
    Me(this.$$.on_disconnect);
  }
  $destroy() {
    mn(this, 1), this.$destroy = X;
  }
  $on(t, e) {
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !ln(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const bn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9InNlYXJjaCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBvcGFjaXR5PSIwIi8+PHBhdGggZmlsbD0iIzQwM0I1MiIgZD0iTTIwLjcxIDE5LjI5bC0zLjQtMy4zOUE3LjkyIDcuOTIgMCAwIDAgMTkgMTFhOCA4IDAgMSAwLTggOCA3LjkyIDcuOTIgMCAwIDAgNC45LTEuNjlsMy4zOSAzLjRhMSAxIDAgMCAwIDEuNDIgMCAxIDEgMCAwIDAgMC0xLjQyek01IDExYTYgNiAwIDEgMSA2IDYgNiA2IDAgMCAxLTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==", nr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImFycm93LWlvcy1mb3J3YXJkIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEwIDE5YTEgMSAwIDAgMS0uNjQtLjIzIDEgMSAwIDAgMS0uMTMtMS40MUwxMy43MSAxMiA5LjM5IDYuNjNhMSAxIDAgMCAxIC4xNS0xLjQxIDEgMSAwIDAgMSAxLjQ2LjE1bDQuODMgNmExIDEgMCAwIDEgMCAxLjI3bC01IDZBMSAxIDAgMCAxIDEwIDE5eiIvPjwvZz48L2c+PC9zdmc+", In = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9Imdsb2JlIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJNMjIgMTJBMTAgMTAgMCAwIDAgMTIgMmExMCAxMCAwIDAgMCAwIDIwIDEwIDEwIDAgMCAwIDEwLTEwem0tMi4wNy0xSDE3YTEyLjkxIDEyLjkxIDAgMCAwLTIuMzMtNi41NEE4IDggMCAwIDEgMTkuOTMgMTF6TTkuMDggMTNIMTVhMTEuNDQgMTEuNDQgMCAwIDEtMyA2LjYxQTExIDExIDAgMCAxIDkuMDggMTN6bTAtMkExMS40IDExLjQgMCAwIDEgMTIgNC40YTExLjE5IDExLjE5IDAgMCAxIDMgNi42em0uMzYtNi41N0ExMy4xOCAxMy4xOCAwIDAgMCA3LjA3IDExaC0zYTggOCAwIDAgMSA1LjM3LTYuNTd6TTQuMDcgMTNoM2ExMi44NiAxMi44NiAwIDAgMCAyLjM1IDYuNTZBOCA4IDAgMCAxIDQuMDcgMTN6bTEwLjU1IDYuNTVBMTMuMTQgMTMuMTQgMCAwIDAgMTcgMTNoMi45NWE4IDggMCAwIDEtNS4zMyA2LjU1eiIvPjwvZz48L2c+PC9zdmc+", Sn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImxvY2siPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgb3BhY2l0eT0iMCIvPjxwYXRoIGQ9Ik0xNyA4aC0xVjYuMTFhNCA0IDAgMSAwLTggMFY4SDdhMyAzIDAgMCAwLTMgM3Y4YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtOGEzIDMgMCAwIDAtMy0zem0tNy0xLjg5QTIuMDYgMi4wNiAwIDAgMSAxMiA0YTIuMDYgMi4wNiAwIDAgMSAyIDIuMTFWOGgtNHpNMTggMTlhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LThhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIvPjxwYXRoIGQ9Ik0xMiAxMmEzIDMgMCAxIDAgMyAzIDMgMyAwIDAgMC0zLTN6bTAgNGExIDEgMCAxIDEgMS0xIDEgMSAwIDAgMS0xIDF6Ii8+PC9nPjwvZz48L3N2Zz4=", Mt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9InBlcnNvbiI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBvcGFjaXR5PSIwIi8+PHBhdGggZD0iTTEyIDExYTQgNCAwIDEgMC00LTQgNCA0IDAgMCAwIDQgNHptMC02YTIgMiAwIDEgMS0yIDIgMiAyIDAgMCAxIDItMnoiLz48cGF0aCBkPSJNMTIgMTNhNyA3IDAgMCAwLTcgNyAxIDEgMCAwIDAgMiAwIDUgNSAwIDAgMSAxMCAwIDEgMSAwIDAgMCAyIDAgNyA3IDAgMCAwLTctN3oiLz48L2c+PC9nPjwvc3ZnPg==", or = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImNsb3NlIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMiAxMikiIG9wYWNpdHk9IjAiLz48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEzLjQxIDEybDQuMy00LjI5YTEgMSAwIDEgMC0xLjQyLTEuNDJMMTIgMTAuNTlsLTQuMjktNC4zYTEgMSAwIDAgMC0xLjQyIDEuNDJsNC4zIDQuMjktNC4zIDQuMjlhMSAxIDAgMCAwIDAgMS40MiAxIDEgMCAwIDAgMS40MiAwbDQuMjktNC4zIDQuMjkgNC4zYTEgMSAwIDAgMCAxLjQyIDAgMSAxIDAgMCAwIDAtMS40MnoiLz48L2c+PC9nPjwvc3ZnPg==", vn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OTQiIGhlaWdodD0iNjA3Ij48ZyBmaWxsPSIjMDU3MmNkIj48cGF0aCBkPSJNMjQxLjYuMWE1MiA1MiAwIDAgMC0xNC4xIDIuMmwtMi4yLjZhMTMuMiAxMy4yIDAgMCAwLTUgMS41bC0xLjEuMy0xLjYuNC0yLjEgMS4yYTEwMS4zIDEwMS4zIDAgMCAwLTEyIDUuOGwtMS42IDEtMS41LjlhNS4yIDUuMiAwIDAgMC0xIC4zbC0uOSAxLTYuNCA0LjUtMi4yIDIuNWE5NyA5NyAwIDAgMC0xNy44IDIxLjlsLTEgMS41LTIuNyA1LjUtMS42IDIuOC0uMyAxLjUtLjMgMS4zLS42LjktLjMgMS41LS42IDEuMy0uMyAxLjItMS42IDUuNS0uNiAyLjUtMi4yIDE1YzAgMi42LS4zIDMuMi0xLjUgMy4ybC00LjMgMS4yLTMgMS0xMC4yIDQuMmE3Ny42IDc3LjYgMCAwIDAtMTYuNyAxMS4xbC0xMC43IDEwLjgtMi41IDMtMS41IDItLjQuMi0zLjMgNS4zLS4zLjYtLjQuNi0uOSAxLjgtMS4yIDEuOS0uMy4zLTIuOCA2LjJhMzguNSAzOC41IDAgMCAwLTIuNSA2LjdsLTEuMiA0LjYtLjYgMS42LS4zIDEtLjMgMmE3OS40IDc5LjQgMCAwIDAtMS42IDI3LjUgNjYuOCA2Ni44IDAgMCAwIDEuOSAxMS43bC4zIDEuMi42IDEuNWExOS43IDE5LjcgMCAwIDAgMS42IDUuM2wuMyAxLjUuNiAxIC4zIDEuMi4zIDEuMiAxLjUgMi44YTY5IDY5IDAgMCAwIDQgOC4zbDUuMyA4IDEuNSAyLjFhMTA4IDEwOCAwIDAgMCAyMi41IDIwLjcgNzcuOSA3Ny45IDAgMCAwIDQyLjggMTIuOWg2LjhsMS44LTFhOS42IDkuNiAwIDAgMCAzLjQtMi40IDE1IDE1IDAgMCAwIDMuNy01LjJsLjYtMi41di00LjNjLTEtMy40LTEuOS01LjItNC03LjQtMi41LTIuOC03LTQuMy0xMy00LjNsLTQuNi0uMy0zLjMtLjYtNS45LTEuNmEzMC41IDMwLjUgMCAwIDEtNy0zbC00LjctMi4yLTEtLjYtMS41LTEtMi43LTEuOGE2OS45IDY5LjkgMCAwIDEtMjAtMjVsLS42LTItLjctMS42LS4zLTEtMS41LTQuOS0uMy0xLjItLjYtMi41LS43LTMuN2ExMDcuMSAxMDcuMSAwIDAgMSAuNy0yMGwuNi0yLjQuMy0xLjNjMC0xLjIgMS4yLTQuNiAyLjUtNi43bC4zLTEuM2E1Mi4zIDUyLjMgMCAwIDEgNy4zLTEyLjkgNzEuNCA3MS40IDAgMCAxIDEzLjktMTMuMiA5OC44IDk4LjggMCAwIDEgMTEuNC02LjJsNy40LTIuNCAzLjQtLjdhMTQyIDE0MiAwIDAgMSAyMS4yLTIuMWMuMy0uNi0xLTkuNi0xLjItMTEuMUwxODcuNCA5MGE4MiA4MiAwIDAgMSAxLTEybC42LTMgLjYtMi4yLjMtMS4yLjYtMS45LjMtMWMwLS44IDEtMyAzLjQtOGE2NS45IDY1LjkgMCAwIDEgMjMuMS0yNC45IDY3LjQgNjcuNCAwIDAgMSAxOC41LTcuM2wzLS43YTcyLjcgNzIuNyAwIDAgMSAyNC40IDEuM2wzIC45IDEuNi42IDEgLjMgOS4yIDQuMyAzIDIuMiAyLjUgMS41IDIuMiAxLjZBNjIuMiA2Mi4yIDAgMCAxIDI5OS44IDU3bDQuMyA3Yy4zIDEgMS4zIDEuMyAxLjkuN2wxLjgtLjYgMS42LS4zIDEuNS0uNyAxLjUtLjMgMS42LS42IDIuNC0uNiA4LTEuMmE2Mi4yIDYyLjIgMCAwIDEgMjggMy40bDIgLjZhNjIuNSA2Mi41IDAgMCAxIDMyLjIgMzJsMSAyLjIuNiAxLjguMyAxLjIuNiAxLjMuMyAxLjUuNiAxLjUuMyAxIDEgMi43LjYgMi41aDEuNWwyLjgtLjMgNC0uNiA0LjMtLjZhMTAyLjggMTAyLjggMCAwIDEgMTkuNC42bDUuOCAxLjUgMS42LjMgMSAuMyAyLjcgMS4zYTUwLjIgNTAuMiAwIDAgMSAxMC44IDUuOCA2OSA2OSAwIDAgMSAxOSAyMC4zbDMuMSA2LjIgMSAyLjUuOSAyLjEuNiAxLjkgMS4yIDUuNWE2NS45IDY1LjkgMCAwIDEtLjYgMjYuOGMtLjMgMi44LTEgNC42LTEuMiA1bC0uMy44LS4zIDEuNi0xIDEuOC0uNiAxLjJhMzQuNSAzNC41IDAgMCAxLTQgNy43IDYxIDYxIDAgMCAxLTE3IDE4LjhsLTMgMi4yLTkuMiA0LjktMS42LjYtMi40IDEtMy4xLjlhMjAgMjAgMCAwIDEtNi41IDEuMiAzNC41IDM0LjUgMCAwIDAtOS4yIDIuMSAyOCAyOCAwIDAgMC01LjMgNS4zIDE0LjggMTQuOCAwIDAgMC0xLjUgN2wuMyAzLjEuMyAxLjNhMTQuMiAxNC4yIDAgMCAwIDcuMSA3LjdsMi4yLjloNC42YTQwIDQwIDAgMCAwIDkuMi0xIDQ2LjIgNDYuMiAwIDAgMCAxMi0zLjNsMS4zLS4zIDEuNS0uNiAyLjgtMS4zYTg4LjQgODguNCAwIDAgMCAxOC40LTEwLjdsMy4xLTIuNWE4NCA4NCAwIDAgMCAxMC41LTEwLjVsMi43LTMgMS45LTIuOCAxLjUtMS45LjMtLjMgMS4zLTIuNGE2My4xIDYzLjEgMCAwIDAgNS44LTEwLjJsMS4zLTMgMS4yLTIuNS4zLTEuMy4zLS42LjMtMS41IDEtMS45LjItMS41YTU1LjcgNTUuNyAwIDAgMCAyLjgtMTEuMWMuNi0xLjUgMS05IDEuMy0xNS40YTc0LjIgNzQuMiAwIDAgMC0zLjctMjUuNWwtLjQtMS4zLS42LTEuMmE2OCA2OCAwIDAgMC02LjctMTZsLTEuNi0yLjItLjMtLjlhMTIuOSAxMi45IDAgMCAxLTIuNS0zLjdsLTEuNS0yLjEtMS4yLTEuM2MwLS4zIDAtLjYtMS45LTIuOGwtMi4xLTIuNGE5MS43IDkxLjcgMCAwIDAtMTQuMi0xMi42bC0yLjgtMS45LS4zLS4zLTIuMS0xLjJhMzguMiAzOC4yIDAgMCAwLTUuMy0zLjEgMzcuMyAzNy4zIDAgMCAwLTYuNC0zbC04LTMuMi0zLjEtLjktMy0uNi0yLjUtLjZhOTguMiA5OC4yIDAgMCAwLTE2LTEuNmMtMi41IDAtMy4xIDAtMy43LS42bC0uNy0xLjItLjMtMS0uNi0uNS0xLjItMi41LTEuNi0yLjgtLjktMS4yLS45LTEuNmExMjEuMyAxMjEuMyAwIDAgMC0xNS43LTE3LjhsLTMtMi41LTIuNS0xLjhhMyAzIDAgMCAwLS43LS42bC02LjEtMy43YTQ5LjkgNDkuOSAwIDAgMC05LjktNS4zIDkuNSA5LjUgMCAwIDEtMy40LTEuNWwtMS4yLS4zLTEuMi0uM2ExNC40IDE0LjQgMCAwIDAtNS0xLjZsLTEuMi0uMy0yLjEtLjYtMi4yLS42Yy0xLjItLjYtNS41LTEuMi0xNC44LTEuOGgtOS44bC02LjguNmMtMS41IDAtMS44IDAtMi44LTEuM2E5OC4yIDk4LjIgMCAwIDAtMTcuNS0xNi42bC0yLjItMS4yLTIuNy0xLjktMi4yLTEuMmE5Ny42IDk3LjYgMCAwIDAtMjkuMi0xMGwtMy4xLS43YTE0MS44IDE0MS44IDAgMCAwLTE3LjMtLjNabTM3IDE1Mi4xLTIuOCAxLjktMS4yIDEuMnY1Ny4zbDMzLjUuMyAzMy42LjMgMSAuNiAyIDIuMSAxIDEuM3Y3N2gxOS43YzE3LjkgMCAxOS43IDAgMjEtLjcgMS44LS42IDIuNC0uOSAzLjMtMi40bC42LTEuM3YtOTUuNEwzNjcgMTk0Yy0yMC4zIDAtMjMuNy0uMy0yNC4zLS42LTEuOC0xLjMtMi44LTEuOS0zLjQtMy4xbC0uNi0xLjZ2LTM3LjJoLTI5LjJabTcwLjIgMTUuN3YxNS40aDM0LjFjLjQgMCAwLS42LS42LTFsLTIuNy0yLjQtNy40LTYuNy0zLjQtMy4xLTMtMi44LTMuNS0zLTMuNy0zLjUtNy43LTctMS44LTEuM1ptLTEzNS4yIDU1LjdjLTEuMiAwLTMuNCAyLjUtMy43IDMuN2wtLjMgNDMuMS42IDQzLjEgMS42IDIuMiAxLjIgMWg5LjVjOCAwIDkuNi4yIDkuOS41bC4zIDIxIC4zIDIwLjYgMy40LTMgNC42LTQuNCAyLjItMi4ycTEwLjYtMTAgMjEuOC0xOS43bDkuMy04LjYgMi4xLTEuOCAxLjktMS42IDEuMi0uOWgyNi4ybDI2LjEtLjMgMS42LTEuNSAxLjgtMS42di04NS45bC0uOS0xLjItMS44LTEuOC0xLS43LTU4LjUtLjNabTEwOSAxMi40LjYuM3YzMy41TDMyMyAzMDRjLS4zLjYtMSAuNi0yNC42LjZIMjc0bC0xIDEtMi43IDIuNC00LjcgNC4zLTQgMy43LTMuMyAzLTMuMSAyLjktMy43IDMuMy00IDRjLTEuMiAxLjMtMi44IDEuNi0yLjggMXYtMjUuNmgtMTEuNGMtMTAuMSAwLTExLjQgMC0xMS43LS42bC0uMy0zNC4yYzAtMzUuNCAwLTMzLjggMS42LTM0LjFsNDkuOC0uNFoiLz48cGF0aCBkPSJtMjYxLjMgMjcxLjcuMyAxOC40IDEtLjMgMi43LTIuMWEzMiAzMiAwIDAgMCA0LjMtMi44bDEuNi0xYTE1NC45IDE1NC45IDAgMCAxIDE3LjItMTFsLjYtLjYtMi43LTIuNS01LjktMy43LTQuOS0zLjRhMjEuMiAyMS4yIDAgMCAxLTIuOC0yLjFsLTEuMi0uNi0xLjItMS0xLjktMS4ycS0zLjMtMi40LTYuOC00LjZaIi8+PC9nPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NyA0OTApIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iTnVuaXRvLUJvbGQsIE51bml0byIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHg9Ii0yOTYuOSIgeT0iMCI+T3JhY2xlIENvbnRlbnQgTWFuYWdlbWVudDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NyA0MzEpIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjQ4IiBmb250LWZhbWlseT0iTnVuaXRvLUJvbGQsIE51bml0byIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHg9Ii00Ny44IiB5PSIwIj5GcmVlPC90c3Bhbj48L3RleHQ+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3IC01NykiPjxyZWN0IHdpZHRoPSI1ODUiIGhlaWdodD0iMTAxIiByeD0iNTAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIgNTYzKSIgZmlsbD0iI2Y2ZjdmOSIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNSA2MzQpIiBmaWxsPSIjMDU3MmNkIiBmb250LXNpemU9IjYxIiBmb250LWZhbWlseT0iTnVuaXRvLUJsYWNrLCBOdW5pdG8iIGZvbnQtd2VpZ2h0PSI4MDAiPjx0c3BhbiB4PSItMjA1LjgiIHk9IjAiPlNvY2lhbCBXaWRnZXQ8L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+";
function wn(t) {
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
var Ln = function() {
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
}, ir = typeof Symbol < "u" && Symbol, Cn = Ln, Dn = function() {
  return typeof ir != "function" || typeof Symbol != "function" || typeof ir("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Cn();
}, Nn = "Function.prototype.bind called on incompatible ", bt = Array.prototype.slice, En = Object.prototype.toString, jn = "[object Function]", Tn = function(e) {
  var n = this;
  if (typeof n != "function" || En.call(n) !== jn)
    throw new TypeError(Nn + n);
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
}, xn = Tn, Qt = Function.prototype.bind || xn, _n = Qt, Pn = _n.call(Function.call, Object.prototype.hasOwnProperty), D, _e = SyntaxError, Fr = Function, Te = TypeError, It = function(t) {
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
}, On = ve ? function() {
  try {
    return arguments.callee, St;
  } catch {
    try {
      return ve(arguments, "callee").get;
    } catch {
      return St;
    }
  }
}() : St, De = Dn(), ge = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, Ee = {}, kn = typeof Uint8Array > "u" ? D : ge(Uint8Array), xe = {
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
  "%ThrowTypeError%": On,
  "%TypedArray%": kn,
  "%TypeError%": Te,
  "%Uint8Array%": typeof Uint8Array > "u" ? D : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? D : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? D : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? D : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? D : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? D : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? D : WeakSet
}, Fn = function t(e) {
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
}, Je = Qt, ft = Pn, zn = Je.call(Function.call, Array.prototype.concat), Un = Je.call(Function.apply, Array.prototype.splice), ar = Je.call(Function.call, String.prototype.replace), pt = Je.call(Function.call, String.prototype.slice), Wn = Je.call(Function.call, RegExp.prototype.exec), Yn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Rn = /\\(\\)?/g, Bn = function(e) {
  var n = pt(e, 0, 1), o = pt(e, -1);
  if (n === "%" && o !== "%")
    throw new _e("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && n !== "%")
    throw new _e("invalid intrinsic syntax, expected opening `%`");
  var r = [];
  return ar(e, Yn, function(i, l, a, u) {
    r[r.length] = a ? ar(u, Rn, "$1") : l || i;
  }), r;
}, $n = function(e, n) {
  var o = e, r;
  if (ft(lr, o) && (r = lr[o], o = "%" + r[0] + "%"), ft(xe, o)) {
    var i = xe[o];
    if (i === Ee && (i = Fn(o)), typeof i > "u" && !n)
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
  if (Wn(/^%?[^%]*%?$/, e) === null)
    throw new _e("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = Bn(e), r = o.length > 0 ? o[0] : "", i = $n("%" + r + "%", n), l = i.name, a = i.value, u = !1, s = i.alias;
  s && (r = s[0], Un(o, zn([0, 1], s)));
  for (var c = 1, d = !0; c < o.length; c += 1) {
    var p = o[c], y = pt(p, 0, 1), m = pt(p, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
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
  var e = Qt, n = Gt, o = n("%Function.prototype.apply%"), r = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || e.call(r, o), l = n("%Object.getOwnPropertyDescriptor%", !0), a = n("%Object.defineProperty%", !0), u = n("%Math.max%");
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
var Ur = Gt, Wr = zr.exports, Qn = Wr(Ur("String.prototype.indexOf")), Gn = function(e, n) {
  var o = Ur(e, !!n);
  return typeof o == "function" && Qn(e, ".prototype.") > -1 ? Wr(o) : o;
};
const Hn = {}, Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hn
}, Symbol.toStringTag, { value: "Module" })), Xn = /* @__PURE__ */ wn(Zn);
var Ht = typeof Map == "function" && Map.prototype, vt = Object.getOwnPropertyDescriptor && Ht ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, dt = Ht && vt && typeof vt.get == "function" ? vt.get : null, Jn = Ht && Map.prototype.forEach, Zt = typeof Set == "function" && Set.prototype, wt = Object.getOwnPropertyDescriptor && Zt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, gt = Zt && wt && typeof wt.get == "function" ? wt.get : null, Vn = Zt && Set.prototype.forEach, qn = typeof WeakMap == "function" && WeakMap.prototype, Ge = qn ? WeakMap.prototype.has : null, Kn = typeof WeakSet == "function" && WeakSet.prototype, He = Kn ? WeakSet.prototype.has : null, eo = typeof WeakRef == "function" && WeakRef.prototype, sr = eo ? WeakRef.prototype.deref : null, to = Boolean.prototype.valueOf, ro = Object.prototype.toString, no = Function.prototype.toString, oo = String.prototype.match, Xt = String.prototype.slice, he = String.prototype.replace, io = String.prototype.toUpperCase, ur = String.prototype.toLowerCase, Yr = RegExp.prototype.test, cr = Array.prototype.concat, le = Array.prototype.join, lo = Array.prototype.slice, fr = Math.floor, _t = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Lt = Object.getOwnPropertySymbols, Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Pe = typeof Symbol == "function" && typeof Symbol.iterator == "object", Z = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Pe ? "object" : "symbol") ? Symbol.toStringTag : null, Rr = Object.prototype.propertyIsEnumerable, pr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
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
var Ot = Xn, gr = Ot.custom, yr = $r(gr) ? gr : null, ao = function t(e, n, o, r) {
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
  var d = Co(i, o);
  if (typeof r > "u")
    r = [];
  else if (Qr(r, e) >= 0)
    return "[Circular]";
  function p(E, F, J) {
    if (F && (r = lo.call(r), r.push(F)), J) {
      var q = {
        depth: i.depth
      };
      return ye(i, "quoteStyle") && (q.quoteStyle = i.quoteStyle), t(E, q, o + 1, r);
    }
    return t(E, i, o + 1, r);
  }
  if (typeof e == "function" && !hr(e)) {
    var y = Mo(e), m = rt(e, p);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (m.length > 0 ? " { " + le.call(m, ", ") + " }" : "");
  }
  if ($r(e)) {
    var A = Pe ? he.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Pt.call(e);
    return typeof e == "object" && !Pe ? Ue(A) : A;
  }
  if (vo(e)) {
    for (var w = "<" + ur.call(String(e.nodeName)), I = e.attributes || [], M = 0; M < I.length; M++)
      w += " " + I[M].name + "=" + Br(so(I[M].value), "double", i);
    return w += ">", e.childNodes && e.childNodes.length && (w += "..."), w += "</" + ur.call(String(e.nodeName)) + ">", w;
  }
  if (kt(e)) {
    if (e.length === 0)
      return "[]";
    var v = rt(e, p);
    return d && !Lo(v) ? "[" + Ft(v, d) + "]" : "[ " + le.call(v, ", ") + " ]";
  }
  if (co(e)) {
    var W = rt(e, p);
    return !("cause" in Error.prototype) && "cause" in e && !Rr.call(e, "cause") ? "{ [" + String(e) + "] " + le.call(cr.call("[cause]: " + p(e.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + le.call(W, ", ") + " }";
  }
  if (typeof e == "object" && l) {
    if (yr && typeof e[yr] == "function" && Ot)
      return Ot(e, { depth: c - o });
    if (l !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (mo(e)) {
    var j = [];
    return Jn.call(e, function(E, F) {
      j.push(p(F, e, !0) + " => " + p(E, e));
    }), Mr("Map", dt.call(e), j, d);
  }
  if (Io(e)) {
    var P = [];
    return Vn.call(e, function(E) {
      P.push(p(E, e));
    }), Mr("Set", gt.call(e), P, d);
  }
  if (Ao(e))
    return Ct("WeakMap");
  if (So(e))
    return Ct("WeakSet");
  if (bo(e))
    return Ct("WeakRef");
  if (po(e))
    return Ue(p(Number(e)));
  if (yo(e))
    return Ue(p(_t.call(e)));
  if (go(e))
    return Ue(to.call(e));
  if (fo(e))
    return Ue(p(String(e)));
  if (!uo(e) && !hr(e)) {
    var N = rt(e, p), L = pr ? pr(e) === Object.prototype : e instanceof Object || e.constructor === Object, b = e instanceof Object ? "" : "null prototype", C = !L && Z && Object(e) === e && Z in e ? Xt.call(me(e), 8, -1) : b ? "Object" : "", x = L || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", _ = x + (C || b ? "[" + le.call(cr.call([], C || [], b || []), ": ") + "] " : "");
    return N.length === 0 ? _ + "{}" : d ? _ + "{" + Ft(N, d) + "}" : _ + "{ " + le.call(N, ", ") + " }";
  }
  return String(e);
};
function Br(t, e, n) {
  var o = (n.quoteStyle || e) === "double" ? '"' : "'";
  return o + t + o;
}
function so(t) {
  return he.call(String(t), /"/g, "&quot;");
}
function kt(t) {
  return me(t) === "[object Array]" && (!Z || !(typeof t == "object" && Z in t));
}
function uo(t) {
  return me(t) === "[object Date]" && (!Z || !(typeof t == "object" && Z in t));
}
function hr(t) {
  return me(t) === "[object RegExp]" && (!Z || !(typeof t == "object" && Z in t));
}
function co(t) {
  return me(t) === "[object Error]" && (!Z || !(typeof t == "object" && Z in t));
}
function fo(t) {
  return me(t) === "[object String]" && (!Z || !(typeof t == "object" && Z in t));
}
function po(t) {
  return me(t) === "[object Number]" && (!Z || !(typeof t == "object" && Z in t));
}
function go(t) {
  return me(t) === "[object Boolean]" && (!Z || !(typeof t == "object" && Z in t));
}
function $r(t) {
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
function yo(t) {
  if (!t || typeof t != "object" || !_t)
    return !1;
  try {
    return _t.call(t), !0;
  } catch {
  }
  return !1;
}
var ho = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function ye(t, e) {
  return ho.call(t, e);
}
function me(t) {
  return ro.call(t);
}
function Mo(t) {
  if (t.name)
    return t.name;
  var e = oo.call(no.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Qr(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, o = t.length; n < o; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function mo(t) {
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
function Ao(t) {
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
function bo(t) {
  if (!sr || !t || typeof t != "object")
    return !1;
  try {
    return sr.call(t), !0;
  } catch {
  }
  return !1;
}
function Io(t) {
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
function So(t) {
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
function vo(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Gr(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, o = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Gr(Xt.call(t, 0, e.maxStringLength), e) + o;
  }
  var r = he.call(he.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, wo);
  return Br(r, "single", e);
}
function wo(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + io.call(e.toString(16));
}
function Ue(t) {
  return "Object(" + t + ")";
}
function Ct(t) {
  return t + " { ? }";
}
function Mr(t, e, n, o) {
  var r = o ? Ft(n, o) : le.call(n, ", ");
  return t + " (" + e + ") {" + r + "}";
}
function Lo(t) {
  for (var e = 0; e < t.length; e++)
    if (Qr(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Co(t, e) {
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
var Jt = Gt, ke = Gn, Do = ao, No = Jt("%TypeError%"), nt = Jt("%WeakMap%", !0), ot = Jt("%Map%", !0), Eo = ke("WeakMap.prototype.get", !0), jo = ke("WeakMap.prototype.set", !0), To = ke("WeakMap.prototype.has", !0), xo = ke("Map.prototype.get", !0), _o = ke("Map.prototype.set", !0), Po = ke("Map.prototype.has", !0), Vt = function(t, e) {
  for (var n = t, o; (o = n.next) !== null; n = o)
    if (o.key === e)
      return n.next = o.next, o.next = t.next, t.next = o, o;
}, Oo = function(t, e) {
  var n = Vt(t, e);
  return n && n.value;
}, ko = function(t, e, n) {
  var o = Vt(t, e);
  o ? o.value = n : t.next = {
    key: e,
    next: t.next,
    value: n
  };
}, Fo = function(t, e) {
  return !!Vt(t, e);
}, zo = function() {
  var e, n, o, r = {
    assert: function(i) {
      if (!r.has(i))
        throw new No("Side channel does not contain " + Do(i));
    },
    get: function(i) {
      if (nt && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return Eo(e, i);
      } else if (ot) {
        if (n)
          return xo(n, i);
      } else if (o)
        return Oo(o, i);
    },
    has: function(i) {
      if (nt && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return To(e, i);
      } else if (ot) {
        if (n)
          return Po(n, i);
      } else if (o)
        return Fo(o, i);
      return !1;
    },
    set: function(i, l) {
      nt && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new nt()), jo(e, i, l)) : ot ? (n || (n = new ot()), _o(n, i, l)) : (o || (o = { key: {}, next: null }), ko(o, i, l));
    }
  };
  return r;
}, Uo = String.prototype.replace, Wo = /%20/g, Dt = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, qt = {
  default: Dt.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Uo.call(t, Wo, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Dt.RFC1738,
  RFC3986: Dt.RFC3986
}, Yo = qt, Nt = Object.prototype.hasOwnProperty, Se = Array.isArray, ie = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Ro = function(e) {
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
}, Bo = function t(e, n, o) {
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
}, Qo = function(t, e, n) {
  var o = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return o.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(o);
  } catch {
    return o;
  }
}, Go = function(e, n, o, r, i) {
  if (e.length === 0)
    return e;
  var l = e;
  if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), o === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var a = "", u = 0; u < l.length; ++u) {
    var s = l.charCodeAt(u);
    if (s === 45 || s === 46 || s === 95 || s === 126 || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || i === Yo.RFC1738 && (s === 40 || s === 41)) {
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
}, Ho = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], o = [], r = 0; r < n.length; ++r)
    for (var i = n[r], l = i.obj[i.prop], a = Object.keys(l), u = 0; u < a.length; ++u) {
      var s = a[u], c = l[s];
      typeof c == "object" && c !== null && o.indexOf(c) === -1 && (n.push({ obj: l, prop: s }), o.push(c));
    }
  return Ro(n), e;
}, Zo = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Xo = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Jo = function(e, n) {
  return [].concat(e, n);
}, Vo = function(e, n) {
  if (Se(e)) {
    for (var o = [], r = 0; r < e.length; r += 1)
      o.push(n(e[r]));
    return o;
  }
  return n(e);
}, Zr = {
  arrayToObject: Hr,
  assign: $o,
  combine: Jo,
  compact: Ho,
  decode: Qo,
  encode: Go,
  isBuffer: Xo,
  isRegExp: Zo,
  maybeMap: Vo,
  merge: Bo
}, Xr = zo, zt = Zr, Ze = qt, qo = Object.prototype.hasOwnProperty, mr = {
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
}, ue = Array.isArray, Ko = String.prototype.split, ei = Array.prototype.push, Jr = function(t, e) {
  ei.apply(t, ue(e) ? e : [e]);
}, ti = Date.prototype.toISOString, Ar = Ze.default, Q = {
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
    return ti.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ri = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Et = {}, ni = function t(e, n, o, r, i, l, a, u, s, c, d, p, y, m, A, w) {
  for (var I = e, M = w, v = 0, W = !1; (M = M.get(Et)) !== void 0 && !W; ) {
    var j = M.get(e);
    if (v += 1, typeof j < "u") {
      if (j === v)
        throw new RangeError("Cyclic object value");
      W = !0;
    }
    typeof M.get(Et) > "u" && (v = 0);
  }
  if (typeof u == "function" ? I = u(n, I) : I instanceof Date ? I = d(I) : o === "comma" && ue(I) && (I = zt.maybeMap(I, function(fe) {
    return fe instanceof Date ? d(fe) : fe;
  })), I === null) {
    if (i)
      return a && !m ? a(n, Q.encoder, A, "key", p) : n;
    I = "";
  }
  if (ri(I) || zt.isBuffer(I)) {
    if (a) {
      var P = m ? n : a(n, Q.encoder, A, "key", p);
      if (o === "comma" && m) {
        for (var N = Ko.call(String(I), ","), L = "", b = 0; b < N.length; ++b)
          L += (b === 0 ? "" : ",") + y(a(N[b], Q.encoder, A, "value", p));
        return [y(P) + (r && ue(I) && N.length === 1 ? "[]" : "") + "=" + L];
      }
      return [y(P) + "=" + y(a(I, Q.encoder, A, "value", p))];
    }
    return [y(n) + "=" + y(String(I))];
  }
  var C = [];
  if (typeof I > "u")
    return C;
  var x;
  if (o === "comma" && ue(I))
    x = [{ value: I.length > 0 ? I.join(",") || null : void 0 }];
  else if (ue(u))
    x = u;
  else {
    var _ = Object.keys(I);
    x = s ? _.sort(s) : _;
  }
  for (var E = r && ue(I) && I.length === 1 ? n + "[]" : n, F = 0; F < x.length; ++F) {
    var J = x[F], q = typeof J == "object" && typeof J.value < "u" ? J.value : I[J];
    if (!(l && q === null)) {
      var we = ue(I) ? typeof o == "function" ? o(E, J) : E : E + (c ? "." + J : "[" + J + "]");
      w.set(e, v);
      var ce = Xr();
      ce.set(Et, w), Jr(C, t(
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
        m,
        A,
        ce
      ));
    }
  }
  return C;
}, oi = function(e) {
  if (!e)
    return Q;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || Q.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var o = Ze.default;
  if (typeof e.format < "u") {
    if (!qo.call(Ze.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    o = e.format;
  }
  var r = Ze.formatters[o], i = Q.filter;
  return (typeof e.filter == "function" || ue(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Q.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Q.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Q.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Q.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Q.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Q.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Q.encodeValuesOnly,
    filter: i,
    format: o,
    formatter: r,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Q.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Q.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Q.strictNullHandling
  };
}, ii = function(t, e) {
  var n = t, o = oi(e), r, i;
  typeof o.filter == "function" ? (i = o.filter, n = i("", n)) : ue(o.filter) && (i = o.filter, r = i);
  var l = [];
  if (typeof n != "object" || n === null)
    return "";
  var a;
  e && e.arrayFormat in mr ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var u = mr[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = u === "comma" && e && e.commaRoundTrip;
  r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
  for (var c = Xr(), d = 0; d < r.length; ++d) {
    var p = r[d];
    o.skipNulls && n[p] === null || Jr(l, ni(
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
  var y = l.join(o.delimiter), m = o.addQueryPrefix === !0 ? "?" : "";
  return o.charsetSentinel && (o.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), y.length > 0 ? m + y : "";
}, Oe = Zr, Ut = Object.prototype.hasOwnProperty, li = Array.isArray, B = {
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
}, ai = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Vr = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, si = "utf8=%26%2310003%3B", ui = "utf8=%E2%9C%93", ci = function(e, n) {
  var o = {}, r = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, l = r.split(n.delimiter, i), a = -1, u, s = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < l.length; ++u)
      l[u].indexOf("utf8=") === 0 && (l[u] === ui ? s = "utf-8" : l[u] === si && (s = "iso-8859-1"), a = u, u = l.length);
  for (u = 0; u < l.length; ++u)
    if (u !== a) {
      var c = l[u], d = c.indexOf("]="), p = d === -1 ? c.indexOf("=") : d + 1, y, m;
      p === -1 ? (y = n.decoder(c, B.decoder, s, "key"), m = n.strictNullHandling ? null : "") : (y = n.decoder(c.slice(0, p), B.decoder, s, "key"), m = Oe.maybeMap(
        Vr(c.slice(p + 1), n),
        function(A) {
          return n.decoder(A, B.decoder, s, "value");
        }
      )), m && n.interpretNumericEntities && s === "iso-8859-1" && (m = ai(m)), c.indexOf("[]=") > -1 && (m = li(m) ? [m] : m), Ut.call(o, y) ? o[y] = Oe.combine(o[y], m) : o[y] = m;
    }
  return o;
}, fi = function(t, e, n, o) {
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
}, pi = function(e, n, o, r) {
  if (!!e) {
    var i = o.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, l = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, u = o.depth > 0 && l.exec(i), s = u ? i.slice(0, u.index) : i, c = [];
    if (s) {
      if (!o.plainObjects && Ut.call(Object.prototype, s) && !o.allowPrototypes)
        return;
      c.push(s);
    }
    for (var d = 0; o.depth > 0 && (u = a.exec(i)) !== null && d < o.depth; ) {
      if (d += 1, !o.plainObjects && Ut.call(Object.prototype, u[1].slice(1, -1)) && !o.allowPrototypes)
        return;
      c.push(u[1]);
    }
    return u && c.push("[" + i.slice(u.index) + "]"), fi(c, n, o, r);
  }
}, di = function(e) {
  if (!e)
    return B;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? B.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? B.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : B.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : B.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : B.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : B.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : B.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : B.decoder,
    delimiter: typeof e.delimiter == "string" || Oe.isRegExp(e.delimiter) ? e.delimiter : B.delimiter,
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : B.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : B.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : B.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : B.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : B.strictNullHandling
  };
}, gi = function(t, e) {
  var n = di(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var o = typeof t == "string" ? ci(t, n) : t, r = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(o), l = 0; l < i.length; ++l) {
    var a = i[l], u = pi(a, o[a], n, typeof t == "string");
    r = Oe.merge(r, u, n);
  }
  return n.allowSparse === !0 ? r : Oe.compact(r);
}, yi = ii, hi = gi, Mi = qt, mi = {
  formats: Mi,
  parse: hi,
  stringify: yi
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
          c.mode = "cors", o.auth.type === "passThrough" ? (c.headers["Content-Type"] = "application/json", c.body = JSON.stringify(o.data)) : o.auth.type === "multipart" ? c.headers["Content-Type"] = "multipart/form-data" : (c.headers["Content-Type"] = "application/x-www-form-urlencoded", c.body = mi.stringify(o.data));
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
const Ai = "https://idcs-57bc9b02b2954c38a1fdb14dc7edbe1c.identity.oraclecloud.com", bi = "88d7c1cbddbc40479353a153e5f948ca", Ii = "cf231b42-2399-4503-a42e-a08c31e7ac5e", Si = "https://1ABA33B6ED08480492BB2FB081CF85B2.cec.ocp.oraclecloud.com:443/urn:opc:cec:all", vi = "", wi = "", Li = "", Ci = "", Di = "", it = {
  idcsUrl: Ai,
  clientId: bi,
  clientSecret: Ii,
  oauthScopeUrl: Si,
  mobileClientId: vi,
  redirectUri: wi,
  accessToken: Li,
  credentialsStored: Ci,
  registrationProfileID: Di
};
class Ni {
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
const Ei = "https://ocegen2-fishbowlpartner.cec.ocp.oraclecloud.com", ji = "", Ti = "", xi = "", qr = {
  contentServer: Ei,
  CDN: ji,
  channelToken: Ti,
  repositoryId: xi
}, pe = new Kt(), de = qr.contentServer;
class _i {
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
const Pi = qr.contentServer, br = `${Pi}/osn/fc/RemoteJSONBatch`, Ir = new Kt();
class Oi {
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
      e = g("li"), n = g("span"), r = K(o), h(n, "class", i = "label " + t[15].icon), H(e, "active", t[0] === t[15].name);
    },
    m(s, c) {
      k(s, e, c), f(e, n), f(n, r), l || (a = U(e, "click", u), l = !0);
    },
    p(s, c) {
      t = s, c & 2 && o !== (o = t[15].name + "") && ae(r, o), c & 2 && i !== (i = "label " + t[15].icon) && h(n, "class", i), c & 3 && H(e, "active", t[0] === t[15].name);
    },
    d(s) {
      s && z(e), l = !1, a();
    }
  };
}
function ki(t) {
  let e, n, o, r, i, l, a, u, s, c, d = t[1], p = [];
  for (let y = 0; y < d.length; y += 1)
    p[y] = vr(Sr(t, d, y));
  return {
    c() {
      e = g("nav"), n = g("div"), o = T(), r = g("ul");
      for (let y = 0; y < p.length; y += 1)
        p[y].c();
      i = T(), l = g("li"), a = T(), u = g("div"), this.c = X, h(n, "class", "sidebar"), h(l, "class", "highlight"), te(l, "transform", "translateX(" + t[2] + "px)"), te(l, "width", t[3] + "px"), h(u, "class", "sidebar"), h(e, "class", "tablist");
    },
    m(y, m) {
      k(y, e, m), f(e, n), f(e, o), f(e, r);
      for (let A = 0; A < p.length; A += 1)
        p[A].m(r, null);
      f(r, i), f(r, l), t[11](r), f(e, a), f(e, u), s || (c = [
        U(window, "resize", t[5]),
        U(r, "touchstart", t[7], { passive: !0 }),
        U(r, "touchend", t[8], { passive: !0 })
      ], s = !0);
    },
    p(y, [m]) {
      if (m & 67) {
        d = y[1];
        let A;
        for (A = 0; A < d.length; A += 1) {
          const w = Sr(y, d, A);
          p[A] ? p[A].p(w, m) : (p[A] = vr(w), p[A].c(), p[A].m(r, i));
        }
        for (; A < p.length; A += 1)
          p[A].d(1);
        p.length = d.length;
      }
      m & 4 && te(l, "transform", "translateX(" + y[2] + "px)"), m & 8 && te(l, "width", y[3] + "px");
    },
    i: X,
    o: X,
    d(y) {
      y && z(e), ht(p, y), t[11](null), s = !1, Me(c);
    }
  };
}
function Fi(t, e, n) {
  let { hasTabs: o = [] } = e, { activeTab: r = "" } = e;
  const i = pn(), l = Bt();
  let a = 0, u = 0, s, c = !1;
  _r(() => {
    n(9, c = !0);
  });
  async function d() {
    await dn();
    const M = s.getElementsByClassName("active");
    M && M.length > 0 && (n(2, a = M[0].offsetLeft), n(3, u = M[0].offsetWidth - 12));
  }
  function p(M) {
    console.log(`[Dispatch Event][${M.action}]`, M), i(M.action, M), l.dispatchEvent && l.dispatchEvent(new CustomEvent(M.action, { detail: M }));
  }
  function y(M, v) {
    n(2, a = M.target.offsetLeft), n(0, r = v.name), p({
      action: "tab",
      name: v.name,
      path: v.path
    });
  }
  function m() {
    p({ action: "scrollStart" });
  }
  function A() {
    p({ action: "scrollEnd" });
  }
  const w = (M, v) => {
    y(v, M);
  };
  function I(M) {
    jt[M ? "unshift" : "push"](() => {
      s = M, n(4, s);
    });
  }
  return t.$$set = (M) => {
    "hasTabs" in M && n(1, o = M.hasTabs), "activeTab" in M && n(0, r = M.activeTab);
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
    m,
    A,
    c,
    w,
    I
  ];
}
class zi extends $t {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.tablist{display:flex;background:#f9fafc;border-radius:100px}.tablist ul{margin:0px;padding:0px;display:flex;position:relative;max-width:966px;min-width:320px;margin:0px auto;flex:2;overflow-x:auto;scrollbar-width:none}@media only screen and (min-width: 769px){.tablist ul{overflow-x:hidden}}.tablist li{list-style:none;flex:1;text-align:center;color:#403b52;font-weight:bold;opacity:0.5;transition:opacity 0.2s;cursor:pointer;z-index:10;position:relative}.tablist li:hover,.tablist li.active{opacity:1}.highlight{position:absolute;bottom:6px;left:6px;right:6px;background-color:#fff;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transition:-webkit-transform 0.25s !important;transition:-webkit-transform 0.25s !important;transition:transform 0.25s !important;transition:transform 0.25s, -webkit-transform 0.25s !important;opacity:1 !important;top:6px;border-radius:100px;z-index:0 !important;position:absolute !important}.tablist li:first-child.active~.highlight{-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(0) scaleX(0.5)}.tablist li:nth-child(2).active~.highlight{-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(50%) scaleX(0.5)}:global([dir='rtl'] .tablist li:first-child.active ~ .highlight){-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(50%) scaleX(0.5)}:global([dir='rtl'] .tablist li:nth-child(2).active ~ .highlight){-webkit-transform:translateX(0) scaleX(0.5);transform:translateX(0) scaleX(0.5)}.tablist li span{background-size:contain;background-repeat:no-repeat;min-height:38px;line-height:38px}.tablist li span{min-height:50px;line-height:50px}.highlight{background-color:#fff}@media only screen and (min-width: 768px){}.label{pointer-events:none}</style>", kr(
      this,
      {
        target: this.shadowRoot,
        props: xr(this.attributes),
        customElement: !0
      },
      Fi,
      ki,
      Rt,
      { hasTabs: 1, activeTab: 0 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), Qe()));
  }
  static get observedAttributes() {
    return ["hasTabs", "activeTab"];
  }
  get hasTabs() {
    return this.$$.ctx[1];
  }
  set hasTabs(e) {
    this.$$set({ hasTabs: e }), Qe();
  }
  get activeTab() {
    return this.$$.ctx[0];
  }
  set activeTab(e) {
    this.$$set({ activeTab: e }), Qe();
  }
}
customElements.define("header-tabs", zi);
const Ne = [];
function mt(t, e = X) {
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
  function l(a, u = X) {
    const s = [a, u];
    return o.add(s), o.size === 1 && (n = e(r) || X), a(t), () => {
      o.delete(s), o.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: l };
}
const ut = { instance: "dev" }, We = {
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
  let t = We;
  if (localStorage.getItem(`${ut.instance}_user`)) {
    const r = JSON.parse(localStorage.getItem(`${ut.instance}_user`));
    t = {
      ...We,
      ...r
    };
  } else
    t = We;
  const { subscribe: e, set: n, update: o } = mt(t);
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
    reset: () => (localStorage.setItem(`${ut.instance}_user`, We), n(We))
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
function Wi() {
  let t = lt;
  t = JSON.parse(localStorage.getItem("following")) || lt;
  const { subscribe: e, set: n, update: o } = mt(t);
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
const Be = Wi();
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
function Yi() {
  let t = at;
  t = JSON.parse(localStorage.getItem("followers")) || at;
  const { subscribe: e, set: n, update: o } = mt(t);
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
const Wt = Yi();
Wt.subscribe((t) => {
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
function Ri() {
  let t = Ye;
  if (localStorage.getItem(`${ct.instance}_people`)) {
    const r = JSON.parse(localStorage.getItem(`${ct.instance}_people`));
    t = {
      ...Ye,
      ...r
    };
  } else
    t = Ye;
  const { subscribe: e, set: n, update: o } = mt(t);
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
const Ie = Ri();
Ie.subscribe((t) => {
  localStorage.setItem(`${ct.instance}_people`, JSON.stringify(t));
});
function wr(t, e, n) {
  const o = t.slice();
  return o[53] = e[n], o;
}
function Lr(t, e, n) {
  const o = t.slice();
  return o[53] = e[n], o;
}
function Cr(t, e, n) {
  const o = t.slice();
  return o[53] = e[n], o;
}
function Dr(t) {
  let e, n, o, r, i;
  return {
    c() {
      e = g("nav"), n = g("header-tabs");
    },
    m(l, a) {
      k(l, e, a), f(e, n), r || (i = [
        U(n, "tab", t[36]),
        sn(o = sl.call(null, n, {
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
      l && z(e), r = !1, Me(i);
    }
  };
}
function Bi(t) {
  let e;
  function n(i, l) {
    return i[13] && i[13].length > 0 ? Hi : Gi;
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
      i && z(e), r.d();
    }
  };
}
function $i(t) {
  let e;
  function n(i, l) {
    return i[16].stats.followers === 0 ? Ki : qi;
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
      i && z(e), r.d();
    }
  };
}
function Qi(t) {
  let e;
  function n(i, l) {
    return i[16].stats.following === 0 ? nl : rl;
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
      i && z(e), r.d();
    }
  };
}
function Gi(t) {
  let e;
  function n(i, l) {
    return i[10] ? Xi : Zi;
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
      i && z(e), r.d();
    }
  };
}
function Hi(t) {
  let e, n = t[13], o = [];
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
      if (i[0] & 2367491) {
        n = r[13];
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
      r && z(e), ht(o, r);
    }
  };
}
function Zi(t) {
  let e;
  return {
    c() {
      e = K("No users found.");
    },
    m(n, o) {
      k(n, e, o);
    },
    d(n) {
      n && z(e);
    }
  };
}
function Xi(t) {
  let e;
  return {
    c() {
      e = K("Searching...");
    },
    m(n, o) {
      k(n, e, o);
    },
    d(n) {
      n && z(e);
    }
  };
}
function Ji(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = Mt) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[53]] ? t[0].profile[t[53]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 8193 && o !== (o = r[0].profile[r[53]] ? r[0].profile[r[53]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function Vi(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[53]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[53]] ? t[0].profile[t[53]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 8193 && !ne(e.src, n = r[0].profilePhoto[r[53]].img) && h(e, "src", n), i[0] & 8193 && o !== (o = r[0].profile[r[53]] ? r[0].profile[r[53]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function Nr(t) {
  let e, n, o;
  function r() {
    return t[39](t[53]);
  }
  return {
    c() {
      e = g("button"), e.textContent = "Follow";
    },
    m(i, l) {
      k(i, e, l), n || (o = U(e, "click", r), n = !0);
    },
    p(i, l) {
      t = i;
    },
    d(i) {
      i && z(e), n = !1, o();
    }
  };
}
function Er(t) {
  let e, n, o, r, i, l, a, u = (t[0].profile[t[53]] ? t[0].profile[t[53]].displayName : "") + "", s, c, d, p, y, m = (t[0].profile[t[53]] ? t[0].profile[t[53]].displayName : "") + "", A, w, I, M = (t[0].profile[t[53]] ? t[0].profile[t[53]].eMailAddress : "") + "", v, W;
  function j(b, C) {
    return C[0] & 8192 && (i = null), i == null && (i = !!b[21](b[53])), i ? Vi : Ji;
  }
  let P = j(t, [-1, -1]), N = P(t), L = !t[1].following[t[53]] && Nr(t);
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), N.c(), l = T(), a = g("figcaption"), s = K(u), c = T(), d = g("dd"), L && L.c(), p = T(), y = g("b"), A = K(m), w = T(), I = g("p"), v = K(M), W = T(), h(I, "class", "email");
    },
    m(b, C) {
      k(b, e, C), f(e, n), f(n, o), f(o, r), N.m(r, null), f(r, l), f(r, a), f(a, s), f(o, c), f(n, d), L && L.m(d, null), f(d, p), f(d, y), f(y, A), f(d, w), f(d, I), f(I, v), f(e, W);
    },
    p(b, C) {
      P === (P = j(b, C)) && N ? N.p(b, C) : (N.d(1), N = P(b), N && (N.c(), N.m(r, l))), C[0] & 8193 && u !== (u = (b[0].profile[b[53]] ? b[0].profile[b[53]].displayName : "") + "") && ae(s, u), b[1].following[b[53]] ? L && (L.d(1), L = null) : L ? L.p(b, C) : (L = Nr(b), L.c(), L.m(d, p)), C[0] & 8193 && m !== (m = (b[0].profile[b[53]] ? b[0].profile[b[53]].displayName : "") + "") && ae(A, m), C[0] & 8193 && M !== (M = (b[0].profile[b[53]] ? b[0].profile[b[53]].eMailAddress : "") + "") && ae(v, M);
    },
    d(b) {
      b && z(e), N.d(), L && L.d();
    }
  };
}
function qi(t) {
  let e, n = t[15], o = [];
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
      if (i[0] & 2654213) {
        n = r[15];
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
      r && z(e), ht(o, r);
    }
  };
}
function Ki(t) {
  let e;
  return {
    c() {
      e = g("div"), e.textContent = "You have no followers", h(e, "class", "info");
    },
    m(n, o) {
      k(n, e, o);
    },
    p: X,
    d(n) {
      n && z(e);
    }
  };
}
function el(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = Mt) || h(e, "src", n), h(e, "alt", o = t[2].followers[t[53]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 32772 && o !== (o = r[2].followers[r[53]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function tl(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[53]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[53]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 32769 && !ne(e.src, n = r[0].profilePhoto[r[53]].img) && h(e, "src", n), i[0] & 32769 && o !== (o = r[0].profile[r[53]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function jr(t) {
  let e, n, o, r, i, l, a, u = t[2].followers[t[53]].displayName + "", s, c, d, p, y, m, A = t[2].followers[t[53]].displayName + "", w, I, M, v = t[2].followers[t[53]].eMailAddress + "", W, j, P, N;
  function L(_, E) {
    return E[0] & 32768 && (i = null), i == null && (i = !!_[21](_[53])), i ? tl : el;
  }
  let b = L(t, [-1, -1]), C = b(t);
  function x() {
    return t[38](t[53]);
  }
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), C.c(), l = T(), a = g("figcaption"), s = K(u), c = T(), d = g("dd"), p = g("button"), p.textContent = "Unfollow", y = T(), m = g("b"), w = K(A), I = T(), M = g("p"), W = K(v), j = T(), h(M, "class", "email");
    },
    m(_, E) {
      k(_, e, E), f(e, n), f(n, o), f(o, r), C.m(r, null), f(r, l), f(r, a), f(a, s), f(o, c), f(n, d), f(d, p), f(d, y), f(d, m), f(m, w), f(d, I), f(d, M), f(M, W), f(e, j), P || (N = U(p, "click", x), P = !0);
    },
    p(_, E) {
      t = _, b === (b = L(t, E)) && C ? C.p(t, E) : (C.d(1), C = b(t), C && (C.c(), C.m(r, l))), E[0] & 32772 && u !== (u = t[2].followers[t[53]].displayName + "") && ae(s, u), E[0] & 32772 && A !== (A = t[2].followers[t[53]].displayName + "") && ae(w, A), E[0] & 32772 && v !== (v = t[2].followers[t[53]].eMailAddress + "") && ae(W, v);
    },
    d(_) {
      _ && z(e), C.d(), P = !1, N();
    }
  };
}
function rl(t) {
  let e, n = t[14], o = [];
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
      if (i[0] & 4734979) {
        n = r[14];
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
      r && z(e), ht(o, r);
    }
  };
}
function nl(t) {
  let e;
  return {
    c() {
      e = g("div"), e.textContent = "You have no connections", h(e, "class", "info");
    },
    m(n, o) {
      k(n, e, o);
    },
    p: X,
    d(n) {
      n && z(e);
    }
  };
}
function ol(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[22]([t[53]])) || h(e, "src", n), h(e, "alt", o = t[1].following[t[53]].displayName);
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 16384 && !ne(e.src, n = r[22]([r[53]])) && h(e, "src", n), i[0] & 16386 && o !== (o = r[1].following[r[53]].displayName) && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function il(t) {
  let e, n, o;
  return {
    c() {
      e = g("img"), ne(e.src, n = t[0].profilePhoto[t[53]].img) || h(e, "src", n), h(e, "alt", o = t[0].profile[t[53]] ? t[0].profile[t[53]].displayName : "");
    },
    m(r, i) {
      k(r, e, i);
    },
    p(r, i) {
      i[0] & 16385 && !ne(e.src, n = r[0].profilePhoto[r[53]].img) && h(e, "src", n), i[0] & 16385 && o !== (o = r[0].profile[r[53]] ? r[0].profile[r[53]].displayName : "") && h(e, "alt", o);
    },
    d(r) {
      r && z(e);
    }
  };
}
function Tr(t) {
  let e, n, o, r, i, l, a = t[1].following[t[53]].displayName + "", u, s, c, d, p, y, m = t[1].following[t[53]].displayName + "", A, w, I, M = t[1].following[t[53]].eMailAddress + "", v, W, j, P;
  function N(x, _) {
    return typeof x[0].profilePhoto[x[53]] < "u" && x[0].profilePhoto[x[53]].img ? il : ol;
  }
  let L = N(t), b = L(t);
  function C() {
    return t[37](t[53]);
  }
  return {
    c() {
      e = g("li"), n = g("dl"), o = g("dt"), r = g("figure"), b.c(), i = T(), l = g("figcaption"), u = K(a), s = T(), c = g("dd"), d = g("button"), d.textContent = "Unfollow", p = T(), y = g("b"), A = K(m), w = T(), I = g("p"), v = K(M), W = T(), h(I, "class", "email");
    },
    m(x, _) {
      k(x, e, _), f(e, n), f(n, o), f(o, r), b.m(r, null), f(r, i), f(r, l), f(l, u), f(o, s), f(n, c), f(c, d), f(c, p), f(c, y), f(y, A), f(c, w), f(c, I), f(I, v), f(e, W), j || (P = U(d, "click", C), j = !0);
    },
    p(x, _) {
      t = x, L === (L = N(t)) && b ? b.p(t, _) : (b.d(1), b = L(t), b && (b.c(), b.m(r, i))), _[0] & 16386 && a !== (a = t[1].following[t[53]].displayName + "") && ae(u, a), _[0] & 16386 && m !== (m = t[1].following[t[53]].displayName + "") && ae(A, m), _[0] & 16386 && M !== (M = t[1].following[t[53]].eMailAddress + "") && ae(v, M);
    },
    d(x) {
      x && z(e), b.d(), j = !1, P();
    }
  };
}
function ll(t) {
  let e, n, o, r, i, l, a, u, s, c, d, p, y, m, A, w, I, M, v, W, j, P, N, L, b, C, x, _, E, F, J, q, we, ce, fe, se, Ae, Fe, Ve, G = t[9] !== "Search" && Dr(t);
  function qe(O, R) {
    return O[9] === "Following" ? Qi : O[9] === "Followers" ? $i : Bi;
  }
  let Le = qe(t), ee = Le(t);
  return {
    c() {
      e = g("section"), n = g("div"), o = g("div"), r = g("article"), i = g("header"), l = g("img"), u = T(), s = g("form"), c = g("div"), d = g("input"), p = T(), y = g("div"), y.innerHTML = "<hr/>", m = T(), A = g("div"), w = g("input"), I = T(), M = g("div"), v = g("input"), W = T(), j = g("div"), P = g("button"), P.textContent = "Login", N = T(), L = g("article"), b = g("header"), C = g("fieldset"), x = g("legend"), x.innerHTML = '<label for="socialUserSearch">Search:</label>', _ = T(), E = g("div"), F = g("input"), J = T(), q = g("button"), we = T(), G && G.c(), ce = T(), ee.c(), fe = T(), se = g("footer"), Ae = g("button"), Ae.textContent = "Logout", this.c = X, h(l, "width", "300"), ne(l.src, a = vn) || h(l, "src", a), h(l, "alt", "BitmapBytes - OCM Social Widget"), h(d, "autocapitalize", "none"), h(d, "enterkeyhint", "next"), h(d, "id", "ocmInstanceURL"), h(d, "type", "search"), h(d, "placeholder", "OCM Instance URL"), h(c, "class", "field"), te(c, "background-image", "url(" + In + ")"), H(c, "active", t[4]), h(y, "class", "hr"), h(w, "autocorrect", "off"), h(w, "autocapitalize", "none"), h(w, "autocomplete", "username"), h(w, "enterkeyhint", "next"), h(w, "id", "username"), h(w, "type", "search"), h(w, "placeholder", "Username"), h(A, "class", "field"), te(A, "margin-bottom", "10px"), te(A, "background-image", "url(" + Mt + ")"), H(A, "active", t[5]), h(v, "autocapitalize", "none"), h(v, "enterkeyhint", "next"), h(v, "id", "password"), h(v, "type", "password"), h(v, "placeholder", "Password"), h(M, "class", "field"), te(M, "margin-bottom", "10px"), te(M, "background-image", "url(" + Sn + ")"), H(M, "active", t[6]), h(j, "class", "loginAction"), h(r, "class", "loginWidget"), h(F, "autocapitalize", "none"), h(F, "enterkeyhint", "next"), h(F, "id", "socialUserSearch"), h(F, "type", "search"), h(F, "placeholder", "Search Network Users..."), te(q, "background-image", "url(" + (t[9] === "Search" ? or : nr) + ")"), h(E, "class", "userSearchField"), te(E, "background-image", "url(" + bn + ")"), H(E, "active", t[3]), h(L, "class", "socialWidget"), h(o, "class", "widgetFlipper"), h(n, "class", "widgetWrapper"), H(n, "flip", t[7]), h(Ae, "class", "logout"), H(se, "hidden", !t[7]), H(se, "show", t[7]), h(e, "class", "bitmapbytes-socialWidget");
    },
    m(O, R) {
      k(O, e, R), f(e, n), f(n, o), f(o, r), f(r, i), f(i, l), f(r, u), f(r, s), f(s, c), f(c, d), f(s, p), f(s, y), f(s, m), f(s, A), f(A, w), Ce(w, t[11]), f(s, I), f(s, M), f(M, v), Ce(v, t[12]), f(s, W), f(s, j), f(j, P), f(o, N), f(o, L), f(L, b), f(b, C), f(C, x), f(C, _), f(C, E), f(E, F), Ce(F, t[8]), f(E, J), f(E, q), f(L, we), G && G.m(L, null), f(L, ce), ee.m(L, null), f(e, fe), f(e, se), f(se, Ae), Fe || (Ve = [
        U(d, "focus", t[24]),
        U(d, "blur", t[25]),
        U(w, "input", t[26]),
        U(w, "focus", t[27]),
        U(w, "blur", t[28]),
        U(v, "input", t[29]),
        U(v, "focus", t[30]),
        U(v, "blur", t[31]),
        U(P, "click", t[17]),
        U(s, "submit", un(al)),
        U(F, "input", t[32]),
        U(F, "keypress", t[23]),
        U(F, "focus", t[33]),
        U(F, "blur", t[34]),
        U(q, "click", t[35]),
        U(Ae, "click", t[40])
      ], Fe = !0);
    },
    p(O, R) {
      R[0] & 16 && H(c, "active", O[4]), R[0] & 2048 && Ce(w, O[11]), R[0] & 32 && H(A, "active", O[5]), R[0] & 4096 && v.value !== O[12] && Ce(v, O[12]), R[0] & 64 && H(M, "active", O[6]), R[0] & 256 && Ce(F, O[8]), R[0] & 512 && te(q, "background-image", "url(" + (O[9] === "Search" ? or : nr) + ")"), R[0] & 8 && H(E, "active", O[3]), O[9] !== "Search" ? G ? G.p(O, R) : (G = Dr(O), G.c(), G.m(L, ce)) : G && (G.d(1), G = null), Le === (Le = qe(O)) && ee ? ee.p(O, R) : (ee.d(1), ee = Le(O), ee && (ee.c(), ee.m(L, null))), R[0] & 128 && H(n, "flip", O[7]), R[0] & 128 && H(se, "hidden", !O[7]), R[0] & 128 && H(se, "show", O[7]);
    },
    i: X,
    o: X,
    d(O) {
      O && z(e), G && G.d(), ee.d(), Fe = !1, Me(Ve);
    }
  };
}
function al() {
}
function sl(t, e) {
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
function ul(t, e, n) {
  let o, r, i, l, a, u, s;
  et(t, je, (S) => n(16, l = S)), et(t, Ie, (S) => n(0, a = S)), et(t, Be, (S) => n(1, u = S)), et(t, Wt, (S) => n(2, s = S));
  const c = new _i(), d = new Oi(), p = new Ni();
  let y = !1, m = !1, A = !1, w = !1, I = !1, M, v = "Following", W = !1, j = [], P = "", N = "";
  _r(() => {
  });
  function L() {
    const [S, re] = p.login(P, N, "https://1ABA33B6ED08480492BB2FB081CF85B2.cec.ocp.oraclecloud.com:443/urn:opc:cec:all");
    S.then((Y) => {
      if (console.log("[OCE][Auth][Logged In][Token]", Y), typeof Y.error < "u") {
        console.error("IDCS OCE Auth Error: ", Y.error);
        return;
      }
      je.updateSession(Y.access_token, "oce");
      let $ = l.sessionID ? l.sessionID : Date.now();
      const [V, oe] = c.getConnectionInfo(l.session.oce, l.useSessionRequests, $);
      V.then((be) => {
        console.log("[connection]", be), $ = l.useSessionRequests ? $ : be.apiRandomID, je.updateConnectionInfo(be.languageLocale, be.apiVersion, $), je.updateProfileInfo(be.user, "oce"), n(7, I = !0), _(), E(), b();
      });
    }).catch((Y) => {
      console.error("IDCS OCE Auth Error: ", Y);
    });
  }
  function b() {
    console.log("[refreshUserStats]");
    const [S, re] = c.getUserStats(l.profile.oce.id, l.session.oce);
    S.then((Y) => {
      const $ = {
        followers: 0,
        following: 0,
        newConversations: 0
      };
      Y.items.forEach((V, oe) => {
        V.name === "FOLLOWERS_COUNT" && ($.followers = V.count), V.name === "FOLLOWING_COUNT" && ($.following = V.count), V.name === "NEW_CONVERSATIONS_COUNT" && ($.newConversations = V.count);
      }), je.updateStats($);
    });
  }
  function C(S) {
    if (console.log("[followUser]", S, j), j.indexOf(S) >= 0)
      return;
    j.push(S);
    const [re, Y] = c.addToFollowers(S, l.session.oce, l.sessionID);
    re.then(($) => {
      console.log("[followUser]", $), Be.addFollowingUser(a.profile[S]), j.splice(j.indexOf(S), 1), b();
    });
  }
  function x(S) {
    if (console.log("[unfollowUser]", S, j), j.indexOf(S) >= 0)
      return;
    j.push(S);
    const [re, Y] = c.removeFollower(S, l.session.oce, l.sessionID);
    re.then(($) => {
      console.log("[unfollowUser]", $), Be.removeFollowingUser(S), j.splice(j.indexOf(S), 1), b();
    });
  }
  function _() {
    console.log("[userFollowing]", l.profile.oce);
    const [S, re] = c.getFollowingUsers(l.profile.oce.id, l.session.oce);
    S.then((Y) => {
      console.log("userFollowing", Y), Be.addFollowing(Y.items);
    });
  }
  function E() {
    console.log("[userFollowers]");
    const [S, re] = c.getFollowers(l.profile.oce.id, l.session.oce);
    S.then((Y) => {
      console.log("userFollowers", Y), Wt.addFollowers(Y.items);
    });
  }
  function F(S) {
    if (console.log("[searchUser]"), S === "button" && v === "Search") {
      n(9, v = "Following"), n(8, M = "");
      return;
    }
    n(10, W = !0), n(9, v = "Search"), Ie.updateVal("searchResults", []);
    const re = M && M.length > 0 ? M.toLowerCase() : null, [Y, $] = c.getPeople(re, l.session.oce);
    Y.then((V) => {
      if (console.log("[People]", V), V && V.items) {
        const oe = [];
        V.items.forEach((ze, on) => {
          Ie.updateProfileInfo(ze), oe.push(ze.id);
        }), a.searchEnabled, Ie.updateVal("searchResults", oe), n(10, W = !1);
        const [be, fl] = d.getProfilePictureDataUri(oe, l.session.oce, l.sessionID);
        be.then((ze) => {
          console.log("[getProfilePictureDataUri]", ze), oe.forEach((on, er) => {
            Ie.updateProfileImg(oe[er], ze[er].returnValue);
          });
        });
      }
    });
  }
  function J(S) {
    return typeof a.profilePhoto[S] < "u" && a.profilePhoto[S].img;
  }
  function q(S) {
    const [re, Y] = d.getProfilePictureDataUri(S, l.session.oce, l.sessionID);
    return re.then(($) => {
      console.log("[getProfilePictureDataUri]", $), S.forEach((V, oe) => {
        Ie.updateProfileImg(S[oe], $[oe].returnValue);
      });
    }), Mt;
  }
  function we(S) {
    S.charCode === 13 && F();
  }
  const ce = () => {
    n(4, m = !0);
  }, fe = () => {
    n(4, m = !1);
  };
  function se() {
    P = this.value, n(11, P);
  }
  const Ae = () => {
    n(5, A = !0);
  }, Fe = () => {
    n(5, A = !1);
  };
  function Ve() {
    N = this.value, n(12, N);
  }
  const G = () => {
    n(6, w = !0);
  }, qe = () => {
    n(6, w = !1);
  };
  function Le() {
    M = this.value, n(8, M);
  }
  const ee = () => {
    n(3, y = !0);
  }, O = () => {
    n(3, y = !1);
  }, R = () => {
    F("button");
  }, Kr = (S) => {
    n(9, v = S.detail.name);
  }, en = (S) => {
    x(S);
  }, tn = (S) => {
    x(S);
  }, rn = (S) => {
    C(S);
  }, nn = () => {
    n(7, I = !1);
  };
  return t.$$.update = () => {
    t.$$.dirty[0] & 1 && a.profilePhoto, t.$$.dirty[0] & 4 && n(15, o = s.activeFollowers.length > 0 ? s.activeFollowers : []), t.$$.dirty[0] & 2 && n(14, r = u.activeFollowing.length > 0 ? u.activeFollowing : []), t.$$.dirty[0] & 1 && n(13, i = a.searchResults.length > 0 ? a.searchResults : []);
  }, [
    a,
    u,
    s,
    y,
    m,
    A,
    w,
    I,
    M,
    v,
    W,
    P,
    N,
    i,
    r,
    o,
    l,
    L,
    C,
    x,
    F,
    J,
    q,
    we,
    ce,
    fe,
    se,
    Ae,
    Fe,
    Ve,
    G,
    qe,
    Le,
    ee,
    O,
    R,
    Kr,
    en,
    tn,
    rn,
    nn
  ];
}
class cl extends $t {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = `<style>footer{display:flex;justify-content:right;opacity:0}footer.hidden{visibility:hidden}footer.show{visibility:visible;animation-name:show;animation-duration:0.3s;animation-delay:0.4s;animation-fill-mode:forwards}@keyframes show{0%{opacity:0}100%{opacity:1}}.logout{margin:20px;border:0px;cursor:pointer;border-radius:100px;padding:6px 16px;font-weight:600;font-size:0.875em;transition:color 0.3s, background 0.3s;color:#BAC2CA}.logout:hover{background:#F3F4F6;color:#403b52}.widgetWrapper{background-color:transparent;width:440px;height:618px;perspective:1000px}.widgetWrapper.flip .widgetFlipper{transform:rotateY(180deg)}.loginWidget,.socialWidget{position:absolute;width:100%;height:100%;min-height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.socialWidget{display:flex;flex-direction:column;transform:rotateY(180deg)}.socialWidget main{flex:1}article{background:#fff;border-radius:26px 26px 20px 20px;box-shadow:0px 2px 4px  0px rgba(0,0,0,0.15);min-width:400px;min-height:100px;overflow:hidden;height:558px;position:relative}.widgetFlipper{position:relative;width:100%;height:100%;min-height:100%;text-align:center;transition:transform 0.6s;transform-style:preserve-3d}.info{border:solid 4px #F9FAFC;border-radius:20px;padding:10px;margin:10px 20px;font-weight:bold;text-align:center;color:rgb(15 23 42)}legend{display:none}.loginWidget header{text-align:center;margin:20px}.loginWidget form{margin:20px}.loginWidget .hr{height:6px;background:#F9FAFC;border-radius:20px;margin:10px 0px}.loginWidget .hr hr{display:none}.loginAction{display:flex;justify-content:center}.loginWidget button{border:0px;border-radius:100px;background:#3F83D3;color:#fff;text-align:center;min-height:48px;padding:0px 20px;font-weight:bold;letter-spacing:1px;width:200px;cursor:pointer;transition:background 0.3s;font-size:1.1em;;}.field,.userSearchField{display:flex;background:#F9FAFC;box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.1);border-radius:100px;padding-left:48px;background-repeat:no-repeat;background-size:26px;background-position:10px center;transition:box-shadow 0.3s, background 0.3s}.field{padding-right:10px
	}.field:hover,.field.active,.userSearchField:hover,.userSearchField.active{background-color:#fff;box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.4),0px 1px 2px 0px rgba(0,0,0,0.1)}.field ::placeholder,.userSearchField ::placeholder{color:#687889;font-weight:600}input{border:0px;background:0px;height:48px;font-weight:500;flex:1;font-size:1.05em
	}input:-webkit-autofill{-webkit-background-clip:text}.userSearchField button{width:48px;height:48px;border-radius:50%;background:#8F9BA8;box-shadow:inset 0px 0px 0px 3px #7C8B9A;border:0px;background-repeat:no-repeat;background-size:30px;background-position:center;cursor:pointer;transition:background 0.3s}button:hover{background-color:#7C8B9A}fieldset{border:0px;padding:6px 6px 10px;margin:0px}nav{border-top:solid 0.5px #F5F5F5;border-bottom:solid 0.5px #F5F5F5;padding:6px 12px}main ul{margin:0px 10px 10px 10px;padding:0px}main li{list-style:none;border-bottom:solid 4px #F9FAFC}main li:last-child{border:0px}dl{display:flex;border-radius:15px;background:#fff;transition:background 0.3s;padding:10px 0px
	}dl:hover{background:#f9fafc;cursor:pointer}dd{flex:1;margin:0px;padding:0px;text-align:left;display:flex;flex-direction:column;justify-content:center;position:relative}dd button{position:absolute;top:0px;right:10px;border:0px;border-radius:40px;font-weight:400;font-size:0.75em;padding:4px 8px;cursor:pointer;box-shadow:inset 0px 0px 1px 0px rgba(0,0,0,0.15)
	}dd button:hover{color:#fff}dd .email{display:none;font-size:0.875em}figure{margin:0px;padding:0px 10px}dt figcaption{display:none}dt img{width:50px;height:50px;border-radius:14px;overflow:hidden;display:block;border:solid 3px #ECEEF0}main{overflow-y:auto;overflow-x:hidden;margin-right:10px}p{font-size:0.875em;padding:0px;margin:0px}.bitmapbytes-socialWidget{width:440px;position:relative;margin:20px auto}.bitmapbytes-socialWidget ::-webkit-scrollbar{display:block;width:8px}.bitmapbytes-socialWidget ::-webkit-scrollbar-thumb{background:#7C8B9A;border-radius:100px}.bitmapbytes-socialWidget ::-webkit-scrollbar-button{width:8px;height:10px}</style>`, kr(
      this,
      {
        target: this.shadowRoot,
        props: xr(this.attributes),
        customElement: !0
      },
      ul,
      ll,
      Rt,
      {},
      null,
      [-1, -1]
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("ocm-social-widget", cl);
