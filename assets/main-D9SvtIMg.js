import { R as H, r as P, j as f, c as vt } from "./index-BlnmAowk.js";
var ge = (e) => e.type === "checkbox",
  ce = (e) => e instanceof Date,
  B = (e) => e == null;
const et = (e) => typeof e == "object";
var M = (e) => !B(e) && !Array.isArray(e) && et(e) && !ce(e),
  xt = (e) =>
    M(e) && e.target ? (ge(e.target) ? e.target.checked : e.target.value) : e,
  pt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  wt = (e, s) => e.has(pt(s)),
  bt = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return M(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Ee =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Z(e) {
  let s;
  const r = Array.isArray(e);
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(Ee && (e instanceof Blob || e instanceof FileList)) && (r || M(e)))
    if (((s = r ? [] : {}), !r && !bt(e))) s = e;
    else for (const n in e) e.hasOwnProperty(n) && (s[n] = Z(e[n]));
  else return e;
  return s;
}
var me = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  j = (e) => e === void 0,
  g = (e, s, r) => {
    if (!s || !M(e)) return r;
    const n = me(s.split(/[,[\].]+?/)).reduce((l, o) => (B(l) ? l : l[o]), e);
    return j(n) || n === e ? (j(e[s]) ? r : e[s]) : n;
  },
  se = (e) => typeof e == "boolean",
  Ne = (e) => /^\w*$/.test(e),
  tt = (e) => me(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  D = (e, s, r) => {
    let n = -1;
    const l = Ne(s) ? [s] : tt(s),
      o = l.length,
      h = o - 1;
    for (; ++n < o; ) {
      const y = l[n];
      let k = r;
      if (n !== h) {
        const $ = e[y];
        k = M($) || Array.isArray($) ? $ : isNaN(+l[n + 1]) ? {} : [];
      }
      if (y === "__proto__") return;
      (e[y] = k), (e = e[y]);
    }
    return e;
  };
const He = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  X = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  te = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
H.createContext(null);
var _t = (e, s, r, n = !0) => {
    const l = { defaultValues: s._defaultValues };
    for (const o in e)
      Object.defineProperty(l, o, {
        get: () => {
          const h = o;
          return (
            s._proxyFormState[h] !== X.all &&
              (s._proxyFormState[h] = !n || X.all),
            r && (r[h] = !0),
            e[h]
          );
        },
      });
    return l;
  },
  W = (e) => M(e) && !Object.keys(e).length,
  kt = (e, s, r, n) => {
    r(e);
    const { name: l, ...o } = e;
    return (
      W(o) ||
      Object.keys(o).length >= Object.keys(s).length ||
      Object.keys(o).find((h) => s[h] === (!n || X.all))
    );
  },
  Fe = (e) => (Array.isArray(e) ? e : [e]);
function At(e) {
  const s = H.useRef(e);
  (s.current = e),
    H.useEffect(() => {
      const r =
        !e.disabled &&
        s.current.subject &&
        s.current.subject.subscribe({ next: s.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var Y = (e) => typeof e == "string",
  St = (e, s, r, n, l) =>
    Y(e)
      ? (n && s.watch.add(e), g(r, e, l))
      : Array.isArray(e)
      ? e.map((o) => (n && s.watch.add(o), g(r, o)))
      : (n && (s.watchAll = !0), r),
  Vt = (e, s, r, n, l) =>
    s
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: l || !0 },
        }
      : {},
  We = (e) => ({
    isOnSubmit: !e || e === X.onSubmit,
    isOnBlur: e === X.onBlur,
    isOnChange: e === X.onChange,
    isOnAll: e === X.all,
    isOnTouch: e === X.onTouched,
  }),
  Ge = (e, s, r) =>
    !r &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      ));
const ye = (e, s, r, n) => {
  for (const l of r || Object.keys(e)) {
    const o = g(e, l);
    if (o) {
      const { _f: h, ...y } = o;
      if (h) {
        if (h.refs && h.refs[0] && s(h.refs[0], l) && !n) break;
        if (h.ref && s(h.ref, h.name) && !n) break;
        ye(y, s);
      } else M(y) && ye(y, s);
    }
  }
};
var Ft = (e, s, r) => {
    const n = me(g(e, r));
    return D(n, "root", s[r]), D(e, r, n), e;
  },
  Te = (e) => e.type === "file",
  ie = (e) => typeof e == "function",
  pe = (e) => {
    if (!Ee) return !1;
    const s = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  xe = (e) => Y(e),
  Le = (e) => e.type === "radio",
  we = (e) => e instanceof RegExp;
const Ze = { value: !1, isValid: !1 },
  Ke = { value: !0, isValid: !0 };
var rt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !j(e[0].attributes.value)
        ? j(e[0].value) || e[0].value === ""
          ? Ke
          : { value: e[0].value, isValid: !0 }
        : Ke
      : Ze;
  }
  return Ze;
};
const Je = { isValid: !1, value: null };
var st = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (s, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : s,
        Je
      )
    : Je;
function Qe(e, s, r = "validate") {
  if (xe(e) || (Array.isArray(e) && e.every(xe)) || (se(e) && !e))
    return { type: r, message: xe(e) ? e : "", ref: s };
}
var le = (e) => (M(e) && !we(e) ? e : { value: e, message: "" }),
  Xe = async (e, s, r, n, l) => {
    const {
        ref: o,
        refs: h,
        required: y,
        maxLength: k,
        minLength: $,
        min: S,
        max: p,
        pattern: K,
        validate: O,
        name: T,
        valueAsNumber: U,
        mount: I,
        disabled: q,
      } = e._f,
      b = g(s, T);
    if (!I || q) return {};
    const J = h ? h[0] : o,
      Q = (v) => {
        n &&
          J.reportValidity &&
          (J.setCustomValidity(se(v) ? "" : v || ""), J.reportValidity());
      },
      C = {},
      re = Le(o),
      ae = ge(o),
      ee = re || ae,
      _ =
        ((U || Te(o)) && j(o.value) && j(b)) ||
        (pe(o) && o.value === "") ||
        b === "" ||
        (Array.isArray(b) && !b.length),
      x = Vt.bind(null, T, r, C),
      V = (v, w, F, E = te.maxLength, R = te.minLength) => {
        const G = v ? w : F;
        C[T] = { type: v ? E : R, message: G, ref: o, ...x(v ? E : R, G) };
      };
    if (
      l
        ? !Array.isArray(b) || !b.length
        : y &&
          ((!ee && (_ || B(b))) ||
            (se(b) && !b) ||
            (ae && !rt(h).isValid) ||
            (re && !st(h).isValid))
    ) {
      const { value: v, message: w } = xe(y)
        ? { value: !!y, message: y }
        : le(y);
      if (
        v &&
        ((C[T] = {
          type: te.required,
          message: w,
          ref: J,
          ...x(te.required, w),
        }),
        !r)
      )
        return Q(w), C;
    }
    if (!_ && (!B(S) || !B(p))) {
      let v, w;
      const F = le(p),
        E = le(S);
      if (!B(b) && !isNaN(b)) {
        const R = o.valueAsNumber || (b && +b);
        B(F.value) || (v = R > F.value), B(E.value) || (w = R < E.value);
      } else {
        const R = o.valueAsDate || new Date(b),
          G = (fe) => new Date(new Date().toDateString() + " " + fe),
          ue = o.type == "time",
          de = o.type == "week";
        Y(F.value) &&
          b &&
          (v = ue
            ? G(b) > G(F.value)
            : de
            ? b > F.value
            : R > new Date(F.value)),
          Y(E.value) &&
            b &&
            (w = ue
              ? G(b) < G(E.value)
              : de
              ? b < E.value
              : R < new Date(E.value));
      }
      if ((v || w) && (V(!!v, F.message, E.message, te.max, te.min), !r))
        return Q(C[T].message), C;
    }
    if ((k || $) && !_ && (Y(b) || (l && Array.isArray(b)))) {
      const v = le(k),
        w = le($),
        F = !B(v.value) && b.length > +v.value,
        E = !B(w.value) && b.length < +w.value;
      if ((F || E) && (V(F, v.message, w.message), !r))
        return Q(C[T].message), C;
    }
    if (K && !_ && Y(b)) {
      const { value: v, message: w } = le(K);
      if (
        we(v) &&
        !b.match(v) &&
        ((C[T] = { type: te.pattern, message: w, ref: o, ...x(te.pattern, w) }),
        !r)
      )
        return Q(w), C;
    }
    if (O) {
      if (ie(O)) {
        const v = await O(b, s),
          w = Qe(v, J);
        if (w && ((C[T] = { ...w, ...x(te.validate, w.message) }), !r))
          return Q(w.message), C;
      } else if (M(O)) {
        let v = {};
        for (const w in O) {
          if (!W(v) && !r) break;
          const F = Qe(await O[w](b, s), J, w);
          F &&
            ((v = { ...F, ...x(w, F.message) }), Q(F.message), r && (C[T] = v));
        }
        if (!W(v) && ((C[T] = { ref: J, ...v }), !r)) return C;
      }
    }
    return Q(!0), C;
  };
function Dt(e, s) {
  const r = s.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = j(e) ? n++ : e[s[n++]];
  return e;
}
function Ct(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !j(e[s])) return !1;
  return !0;
}
function L(e, s) {
  const r = Array.isArray(s) ? s : Ne(s) ? [s] : tt(s),
    n = r.length === 1 ? e : Dt(e, r),
    l = r.length - 1,
    o = r[l];
  return (
    n && delete n[o],
    l !== 0 &&
      ((M(n) && W(n)) || (Array.isArray(n) && Ct(n))) &&
      L(e, r.slice(0, -1)),
    e
  );
}
var De = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (l) => {
        for (const o of e) o.next && o.next(l);
      },
      subscribe: (l) => (
        e.push(l),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== l);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  be = (e) => B(e) || !et(e);
function ne(e, s) {
  if (be(e) || be(s)) return e === s;
  if (ce(e) && ce(s)) return e.getTime() === s.getTime();
  const r = Object.keys(e),
    n = Object.keys(s);
  if (r.length !== n.length) return !1;
  for (const l of r) {
    const o = e[l];
    if (!n.includes(l)) return !1;
    if (l !== "ref") {
      const h = s[l];
      if (
        (ce(o) && ce(h)) ||
        (M(o) && M(h)) ||
        (Array.isArray(o) && Array.isArray(h))
          ? !ne(o, h)
          : o !== h
      )
        return !1;
    }
  }
  return !0;
}
var it = (e) => e.type === "select-multiple",
  jt = (e) => Le(e) || ge(e),
  Ce = (e) => pe(e) && e.isConnected,
  nt = (e) => {
    for (const s in e) if (ie(e[s])) return !0;
    return !1;
  };
function _e(e, s = {}) {
  const r = Array.isArray(e);
  if (M(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (M(e[n]) && !nt(e[n]))
        ? ((s[n] = Array.isArray(e[n]) ? [] : {}), _e(e[n], s[n]))
        : B(e[n]) || (s[n] = !0);
  return s;
}
function at(e, s, r) {
  const n = Array.isArray(e);
  if (M(e) || n)
    for (const l in e)
      Array.isArray(e[l]) || (M(e[l]) && !nt(e[l]))
        ? j(s) || be(r[l])
          ? (r[l] = Array.isArray(e[l]) ? _e(e[l], []) : { ..._e(e[l]) })
          : at(e[l], B(s) ? {} : s[l], r[l])
        : (r[l] = !ne(e[l], s[l]));
  return r;
}
var ve = (e, s) => at(e, s, _e(s)),
  ot = (e, { valueAsNumber: s, valueAsDate: r, setValueAs: n }) =>
    j(e)
      ? e
      : s
      ? e === ""
        ? NaN
        : e && +e
      : r && Y(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function je(e) {
  const s = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : s.disabled))
    return Te(s)
      ? s.files
      : Le(s)
      ? st(e.refs).value
      : it(s)
      ? [...s.selectedOptions].map(({ value: r }) => r)
      : ge(s)
      ? rt(e.refs).value
      : ot(j(s.value) ? e.ref.value : s.value, e);
}
var Et = (e, s, r, n) => {
    const l = {};
    for (const o of e) {
      const h = g(s, o);
      h && D(l, o, h._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: n,
    };
  },
  he = (e) =>
    j(e)
      ? e
      : we(e)
      ? e.source
      : M(e)
      ? we(e.value)
        ? e.value.source
        : e.value
      : e,
  Nt = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ye(e, s, r) {
  const n = g(e, r);
  if (n || Ne(r)) return { error: n, name: r };
  const l = r.split(".");
  for (; l.length; ) {
    const o = l.join("."),
      h = g(s, o),
      y = g(e, o);
    if (h && !Array.isArray(h) && r !== o) return { name: r };
    if (y && y.type) return { name: o, error: y };
    l.pop();
  }
  return { name: r };
}
var Tt = (e, s, r, n, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
      ? !(s || e)
      : (r ? n.isOnBlur : l.isOnBlur)
      ? !e
      : (r ? n.isOnChange : l.isOnChange)
      ? e
      : !0,
  Lt = (e, s) => !me(g(e, s)).length && L(e, s);
const Mt = {
  mode: X.onSubmit,
  reValidateMode: X.onChange,
  shouldFocusError: !0,
};
function qt(e = {}) {
  let s = { ...Mt, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: ie(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    n = {},
    l =
      M(s.defaultValues) || M(s.values)
        ? Z(s.defaultValues || s.values) || {}
        : {},
    o = s.shouldUnregister ? {} : Z(l),
    h = { action: !1, mount: !1, watch: !1 },
    y = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    k,
    $ = 0;
  const S = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: De(), array: De(), state: De() },
    K = We(s.mode),
    O = We(s.reValidateMode),
    T = s.criteriaMode === X.all,
    U = (t) => (i) => {
      clearTimeout($), ($ = setTimeout(t, i));
    },
    I = async (t) => {
      if (S.isValid || t) {
        const i = s.resolver ? W((await ee()).errors) : await x(n, !0);
        i !== r.isValid && p.state.next({ isValid: i });
      }
    },
    q = (t, i) => {
      (S.isValidating || S.validatingFields) &&
        ((t || Array.from(y.mount)).forEach((a) => {
          a && (i ? D(r.validatingFields, a, i) : L(r.validatingFields, a));
        }),
        p.state.next({
          validatingFields: r.validatingFields,
          isValidating: !W(r.validatingFields),
        }));
    },
    b = (t, i = [], a, d, u = !0, c = !0) => {
      if (d && a) {
        if (((h.action = !0), c && Array.isArray(g(n, t)))) {
          const m = a(g(n, t), d.argA, d.argB);
          u && D(n, t, m);
        }
        if (c && Array.isArray(g(r.errors, t))) {
          const m = a(g(r.errors, t), d.argA, d.argB);
          u && D(r.errors, t, m), Lt(r.errors, t);
        }
        if (S.touchedFields && c && Array.isArray(g(r.touchedFields, t))) {
          const m = a(g(r.touchedFields, t), d.argA, d.argB);
          u && D(r.touchedFields, t, m);
        }
        S.dirtyFields && (r.dirtyFields = ve(l, o)),
          p.state.next({
            name: t,
            isDirty: v(t, i),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else D(o, t, i);
    },
    J = (t, i) => {
      D(r.errors, t, i), p.state.next({ errors: r.errors });
    },
    Q = (t) => {
      (r.errors = t), p.state.next({ errors: r.errors, isValid: !1 });
    },
    C = (t, i, a, d) => {
      const u = g(n, t);
      if (u) {
        const c = g(o, t, j(a) ? g(l, t) : a);
        j(c) || (d && d.defaultChecked) || i
          ? D(o, t, i ? c : je(u._f))
          : E(t, c),
          h.mount && I();
      }
    },
    re = (t, i, a, d, u) => {
      let c = !1,
        m = !1;
      const A = { name: t },
        N = !!(g(n, t) && g(n, t)._f.disabled);
      if (!a || d) {
        S.isDirty &&
          ((m = r.isDirty),
          (r.isDirty = A.isDirty = v()),
          (c = m !== A.isDirty));
        const z = N || ne(g(l, t), i);
        (m = !!(!N && g(r.dirtyFields, t))),
          z || N ? L(r.dirtyFields, t) : D(r.dirtyFields, t, !0),
          (A.dirtyFields = r.dirtyFields),
          (c = c || (S.dirtyFields && m !== !z));
      }
      if (a) {
        const z = g(r.touchedFields, t);
        z ||
          (D(r.touchedFields, t, a),
          (A.touchedFields = r.touchedFields),
          (c = c || (S.touchedFields && z !== a)));
      }
      return c && u && p.state.next(A), c ? A : {};
    },
    ae = (t, i, a, d) => {
      const u = g(r.errors, t),
        c = S.isValid && se(i) && r.isValid !== i;
      if (
        (e.delayError && a
          ? ((k = U(() => J(t, a))), k(e.delayError))
          : (clearTimeout($),
            (k = null),
            a ? D(r.errors, t, a) : L(r.errors, t)),
        (a ? !ne(u, a) : u) || !W(d) || c)
      ) {
        const m = {
          ...d,
          ...(c && se(i) ? { isValid: i } : {}),
          errors: r.errors,
          name: t,
        };
        (r = { ...r, ...m }), p.state.next(m);
      }
    },
    ee = async (t) => {
      q(t, !0);
      const i = await s.resolver(
        o,
        s.context,
        Et(t || y.mount, n, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return q(t), i;
    },
    _ = async (t) => {
      const { errors: i } = await ee(t);
      if (t)
        for (const a of t) {
          const d = g(i, a);
          d ? D(r.errors, a, d) : L(r.errors, a);
        }
      else r.errors = i;
      return i;
    },
    x = async (t, i, a = { valid: !0 }) => {
      for (const d in t) {
        const u = t[d];
        if (u) {
          const { _f: c, ...m } = u;
          if (c) {
            const A = y.array.has(c.name);
            q([d], !0);
            const N = await Xe(u, o, T, s.shouldUseNativeValidation && !i, A);
            if ((q([d]), N[c.name] && ((a.valid = !1), i))) break;
            !i &&
              (g(N, c.name)
                ? A
                  ? Ft(r.errors, N, c.name)
                  : D(r.errors, c.name, N[c.name])
                : L(r.errors, c.name));
          }
          m && (await x(m, i, a));
        }
      }
      return a.valid;
    },
    V = () => {
      for (const t of y.unMount) {
        const i = g(n, t);
        i &&
          (i._f.refs ? i._f.refs.every((a) => !Ce(a)) : !Ce(i._f.ref)) &&
          ke(t);
      }
      y.unMount = new Set();
    },
    v = (t, i) => (t && i && D(o, t, i), !ne(Me(), l)),
    w = (t, i, a) =>
      St(t, y, { ...(h.mount ? o : j(i) ? l : Y(t) ? { [t]: i } : i) }, a, i),
    F = (t) => me(g(h.mount ? o : l, t, e.shouldUnregister ? g(l, t, []) : [])),
    E = (t, i, a = {}) => {
      const d = g(n, t);
      let u = i;
      if (d) {
        const c = d._f;
        c &&
          (!c.disabled && D(o, t, ot(i, c)),
          (u = pe(c.ref) && B(i) ? "" : i),
          it(c.ref)
            ? [...c.ref.options].forEach(
                (m) => (m.selected = u.includes(m.value))
              )
            : c.refs
            ? ge(c.ref)
              ? c.refs.length > 1
                ? c.refs.forEach(
                    (m) =>
                      (!m.defaultChecked || !m.disabled) &&
                      (m.checked = Array.isArray(u)
                        ? !!u.find((A) => A === m.value)
                        : u === m.value)
                  )
                : c.refs[0] && (c.refs[0].checked = !!u)
              : c.refs.forEach((m) => (m.checked = m.value === u))
            : Te(c.ref)
            ? (c.ref.value = "")
            : ((c.ref.value = u),
              c.ref.type || p.values.next({ name: t, values: { ...o } })));
      }
      (a.shouldDirty || a.shouldTouch) &&
        re(t, u, a.shouldTouch, a.shouldDirty, !0),
        a.shouldValidate && fe(t);
    },
    R = (t, i, a) => {
      for (const d in i) {
        const u = i[d],
          c = `${t}.${d}`,
          m = g(n, c);
        (y.array.has(t) || !be(u) || (m && !m._f)) && !ce(u)
          ? R(c, u, a)
          : E(c, u, a);
      }
    },
    G = (t, i, a = {}) => {
      const d = g(n, t),
        u = y.array.has(t),
        c = Z(i);
      D(o, t, c),
        u
          ? (p.array.next({ name: t, values: { ...o } }),
            (S.isDirty || S.dirtyFields) &&
              a.shouldDirty &&
              p.state.next({
                name: t,
                dirtyFields: ve(l, o),
                isDirty: v(t, c),
              }))
          : d && !d._f && !B(c)
          ? R(t, c, a)
          : E(t, c, a),
        Ge(t, y) && p.state.next({ ...r }),
        p.values.next({ name: h.mount ? t : void 0, values: { ...o } });
    },
    ue = async (t) => {
      h.mount = !0;
      const i = t.target;
      let a = i.name,
        d = !0;
      const u = g(n, a),
        c = () => (i.type ? je(u._f) : xt(t)),
        m = (A) => {
          d = Number.isNaN(A) || A === g(o, a, A);
        };
      if (u) {
        let A, N;
        const z = c(),
          oe = t.type === He.BLUR || t.type === He.FOCUS_OUT,
          yt =
            (!Nt(u._f) && !s.resolver && !g(r.errors, a) && !u._f.deps) ||
            Tt(oe, g(r.touchedFields, a), r.isSubmitted, O, K),
          Se = Ge(a, y, oe);
        D(o, a, z),
          oe
            ? (u._f.onBlur && u._f.onBlur(t), k && k(0))
            : u._f.onChange && u._f.onChange(t);
        const Ve = re(a, z, oe, !1),
          gt = !W(Ve) || Se;
        if (
          (!oe && p.values.next({ name: a, type: t.type, values: { ...o } }),
          yt)
        )
          return (
            S.isValid && I(), gt && p.state.next({ name: a, ...(Se ? {} : Ve) })
          );
        if ((!oe && Se && p.state.next({ ...r }), s.resolver)) {
          const { errors: $e } = await ee([a]);
          if ((m(z), d)) {
            const mt = Ye(r.errors, n, a),
              ze = Ye($e, n, mt.name || a);
            (A = ze.error), (a = ze.name), (N = W($e));
          }
        } else
          q([a], !0),
            (A = (await Xe(u, o, T, s.shouldUseNativeValidation))[a]),
            q([a]),
            m(z),
            d && (A ? (N = !1) : S.isValid && (N = await x(n, !0)));
        d && (u._f.deps && fe(u._f.deps), ae(a, N, A, Ve));
      }
    },
    de = (t, i) => {
      if (g(r.errors, i) && t.focus) return t.focus(), 1;
    },
    fe = async (t, i = {}) => {
      let a, d;
      const u = Fe(t);
      if (s.resolver) {
        const c = await _(j(t) ? t : u);
        (a = W(c)), (d = t ? !u.some((m) => g(c, m)) : a);
      } else
        t
          ? ((d = (
              await Promise.all(
                u.map(async (c) => {
                  const m = g(n, c);
                  return await x(m && m._f ? { [c]: m } : m);
                })
              )
            ).every(Boolean)),
            !(!d && !r.isValid) && I())
          : (d = a = await x(n));
      return (
        p.state.next({
          ...(!Y(t) || (S.isValid && a !== r.isValid) ? {} : { name: t }),
          ...(s.resolver || !t ? { isValid: a } : {}),
          errors: r.errors,
        }),
        i.shouldFocus && !d && ye(n, de, t ? u : y.mount),
        d
      );
    },
    Me = (t) => {
      const i = { ...(h.mount ? o : l) };
      return j(t) ? i : Y(t) ? g(i, t) : t.map((a) => g(i, a));
    },
    qe = (t, i) => ({
      invalid: !!g((i || r).errors, t),
      isDirty: !!g((i || r).dirtyFields, t),
      isTouched: !!g((i || r).touchedFields, t),
      isValidating: !!g((i || r).validatingFields, t),
      error: g((i || r).errors, t),
    }),
    ut = (t) => {
      t && Fe(t).forEach((i) => L(r.errors, i)),
        p.state.next({ errors: t ? r.errors : {} });
    },
    Ie = (t, i, a) => {
      const d = (g(n, t, { _f: {} })._f || {}).ref,
        u = g(r.errors, t) || {},
        { ref: c, message: m, type: A, ...N } = u;
      D(r.errors, t, { ...N, ...i, ref: d }),
        p.state.next({ name: t, errors: r.errors, isValid: !1 }),
        a && a.shouldFocus && d && d.focus && d.focus();
    },
    dt = (t, i) =>
      ie(t)
        ? p.values.subscribe({ next: (a) => t(w(void 0, i), a) })
        : w(t, i, !0),
    ke = (t, i = {}) => {
      for (const a of t ? Fe(t) : y.mount)
        y.mount.delete(a),
          y.array.delete(a),
          i.keepValue || (L(n, a), L(o, a)),
          !i.keepError && L(r.errors, a),
          !i.keepDirty && L(r.dirtyFields, a),
          !i.keepTouched && L(r.touchedFields, a),
          !i.keepIsValidating && L(r.validatingFields, a),
          !s.shouldUnregister && !i.keepDefaultValue && L(l, a);
      p.values.next({ values: { ...o } }),
        p.state.next({ ...r, ...(i.keepDirty ? { isDirty: v() } : {}) }),
        !i.keepIsValid && I();
    },
    Re = ({ disabled: t, name: i, field: a, fields: d, value: u }) => {
      if ((se(t) && h.mount) || t) {
        const c = t ? void 0 : j(u) ? je(a ? a._f : g(d, i)._f) : u;
        D(o, i, c), re(i, c, !1, !1, !0);
      }
    },
    Ae = (t, i = {}) => {
      let a = g(n, t);
      const d = se(i.disabled);
      return (
        D(n, t, {
          ...(a || {}),
          _f: {
            ...(a && a._f ? a._f : { ref: { name: t } }),
            name: t,
            mount: !0,
            ...i,
          },
        }),
        y.mount.add(t),
        a
          ? Re({ field: a, disabled: i.disabled, name: t, value: i.value })
          : C(t, !0, i.value),
        {
          ...(d ? { disabled: i.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!i.required,
                min: he(i.min),
                max: he(i.max),
                minLength: he(i.minLength),
                maxLength: he(i.maxLength),
                pattern: he(i.pattern),
              }
            : {}),
          name: t,
          onChange: ue,
          onBlur: ue,
          ref: (u) => {
            if (u) {
              Ae(t, i), (a = g(n, t));
              const c =
                  (j(u.value) &&
                    u.querySelectorAll &&
                    u.querySelectorAll("input,select,textarea")[0]) ||
                  u,
                m = jt(c),
                A = a._f.refs || [];
              if (m ? A.find((N) => N === c) : c === a._f.ref) return;
              D(n, t, {
                _f: {
                  ...a._f,
                  ...(m
                    ? {
                        refs: [
                          ...A.filter(Ce),
                          c,
                          ...(Array.isArray(g(l, t)) ? [{}] : []),
                        ],
                        ref: { type: c.type, name: t },
                      }
                    : { ref: c }),
                },
              }),
                C(t, !1, void 0, c);
            } else
              (a = g(n, t, {})),
                a._f && (a._f.mount = !1),
                (s.shouldUnregister || i.shouldUnregister) &&
                  !(wt(y.array, t) && h.action) &&
                  y.unMount.add(t);
          },
        }
      );
    },
    Oe = () => s.shouldFocusError && ye(n, de, y.mount),
    ft = (t) => {
      se(t) &&
        (p.state.next({ disabled: t }),
        ye(
          n,
          (i, a) => {
            const d = g(n, a);
            d &&
              ((i.disabled = d._f.disabled || t),
              Array.isArray(d._f.refs) &&
                d._f.refs.forEach((u) => {
                  u.disabled = d._f.disabled || t;
                }));
          },
          0,
          !1
        ));
    },
    Ue = (t, i) => async (a) => {
      let d;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let u = Z(o);
      if ((p.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: c, values: m } = await ee();
        (r.errors = c), (u = m);
      } else await x(n);
      if ((L(r.errors, "root"), W(r.errors))) {
        p.state.next({ errors: {} });
        try {
          await t(u, a);
        } catch (c) {
          d = c;
        }
      } else i && (await i({ ...r.errors }, a)), Oe(), setTimeout(Oe);
      if (
        (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: W(r.errors) && !d,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        d)
      )
        throw d;
    },
    ht = (t, i = {}) => {
      g(n, t) &&
        (j(i.defaultValue)
          ? G(t, Z(g(l, t)))
          : (G(t, i.defaultValue), D(l, t, Z(i.defaultValue))),
        i.keepTouched || L(r.touchedFields, t),
        i.keepDirty ||
          (L(r.dirtyFields, t),
          (r.isDirty = i.defaultValue ? v(t, Z(g(l, t))) : v())),
        i.keepError || (L(r.errors, t), S.isValid && I()),
        p.state.next({ ...r }));
    },
    Pe = (t, i = {}) => {
      const a = t ? Z(t) : l,
        d = Z(a),
        u = W(t),
        c = u ? l : d;
      if ((i.keepDefaultValues || (l = a), !i.keepValues)) {
        if (i.keepDirtyValues)
          for (const m of y.mount)
            g(r.dirtyFields, m) ? D(c, m, g(o, m)) : G(m, g(c, m));
        else {
          if (Ee && j(t))
            for (const m of y.mount) {
              const A = g(n, m);
              if (A && A._f) {
                const N = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
                if (pe(N)) {
                  const z = N.closest("form");
                  if (z) {
                    z.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (o = e.shouldUnregister ? (i.keepDefaultValues ? Z(l) : {}) : Z(c)),
          p.array.next({ values: { ...c } }),
          p.values.next({ values: { ...c } });
      }
      (y = {
        mount: i.keepDirtyValues ? y.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (h.mount = !S.isValid || !!i.keepIsValid || !!i.keepDirtyValues),
        (h.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: i.keepSubmitCount ? r.submitCount : 0,
          isDirty: u
            ? !1
            : i.keepDirty
            ? r.isDirty
            : !!(i.keepDefaultValues && !ne(t, l)),
          isSubmitted: i.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: u
            ? []
            : i.keepDirtyValues
            ? i.keepDefaultValues && o
              ? ve(l, o)
              : r.dirtyFields
            : i.keepDefaultValues && t
            ? ve(l, t)
            : {},
          touchedFields: i.keepTouched ? r.touchedFields : {},
          errors: i.keepErrors ? r.errors : {},
          isSubmitSuccessful: i.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Be = (t, i) => Pe(ie(t) ? t(o) : t, i);
  return {
    control: {
      register: Ae,
      unregister: ke,
      getFieldState: qe,
      handleSubmit: Ue,
      setError: Ie,
      _executeSchema: ee,
      _getWatch: w,
      _getDirty: v,
      _updateValid: I,
      _removeUnmounted: V,
      _updateFieldArray: b,
      _updateDisabledField: Re,
      _getFieldArray: F,
      _reset: Pe,
      _resetDefaultValues: () =>
        ie(s.defaultValues) &&
        s.defaultValues().then((t) => {
          Be(t, s.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: (t) => {
        r = { ...r, ...t };
      },
      _disableForm: ft,
      _subjects: p,
      _proxyFormState: S,
      _setErrors: Q,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return h;
      },
      set _state(t) {
        h = t;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return y;
      },
      set _names(t) {
        y = t;
      },
      get _formState() {
        return r;
      },
      set _formState(t) {
        r = t;
      },
      get _options() {
        return s;
      },
      set _options(t) {
        s = { ...s, ...t };
      },
    },
    trigger: fe,
    register: Ae,
    handleSubmit: Ue,
    watch: dt,
    setValue: G,
    getValues: Me,
    reset: Be,
    resetField: ht,
    clearErrors: ut,
    unregister: ke,
    setError: Ie,
    setFocus: (t, i = {}) => {
      const a = g(n, t),
        d = a && a._f;
      if (d) {
        const u = d.refs ? d.refs[0] : d.ref;
        u.focus && (u.focus(), i.shouldSelect && u.select());
      }
    },
    getFieldState: qe,
  };
}
function lt(e = {}) {
  const s = H.useRef(),
    r = H.useRef(),
    [n, l] = H.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ie(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: ie(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current || (s.current = { ...qt(e), formState: n });
  const o = s.current.control;
  return (
    (o._options = e),
    At({
      subject: o._subjects.state,
      next: (h) => {
        kt(h, o._proxyFormState, o._updateFormState, !0) &&
          l({ ...o._formState });
      },
    }),
    H.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    H.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const h = o._getDirty();
        h !== n.isDirty && o._subjects.state.next({ isDirty: h });
      }
    }, [o, n.isDirty]),
    H.useEffect(() => {
      e.values && !ne(e.values, r.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (r.current = e.values),
          l((h) => ({ ...h })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    H.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    H.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    H.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (s.current.formState = _t(n, o)),
    s.current
  );
}
const It =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.0007%2012C15.0007%2013.6569%2013.6576%2015%2012.0007%2015C10.3439%2015%209.00073%2013.6569%209.00073%2012C9.00073%2010.3431%2010.3439%209%2012.0007%209C13.6576%209%2015.0007%2010.3431%2015.0007%2012Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.0012%205C7.52354%205%203.73326%207.94288%202.45898%2012C3.73324%2016.0571%207.52354%2019%2012.0012%2019C16.4788%2019%2020.2691%2016.0571%2021.5434%2012C20.2691%207.94291%2016.4788%205%2012.0012%205Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Rt =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.99902%203L20.999%2021M9.8433%209.91364C9.32066%2010.4536%208.99902%2011.1892%208.99902%2012C8.99902%2013.6569%2010.3422%2015%2011.999%2015C12.8215%2015%2013.5667%2014.669%2014.1086%2014.133M6.49902%206.64715C4.59972%207.90034%203.15305%209.78394%202.45703%2012C3.73128%2016.0571%207.52159%2019%2011.9992%2019C13.9881%2019%2015.8414%2018.4194%2017.3988%2017.4184M10.999%205.04939C11.328%205.01673%2011.6617%205%2011.9992%205C16.4769%205%2020.2672%207.94291%2021.5414%2012C21.2607%2012.894%2020.8577%2013.7338%2020.3522%2014.5'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Ot = ({ setIsLoading: e, setIsLoggedIn: s }) => {
    const {
        register: r,
        handleSubmit: n,
        formState: { errors: l },
      } = lt({}),
      [o, h] = P.useState("password"),
      [y, k] = P.useState(""),
      $ = () => {
        h(o === "password" ? "text" : "password");
      },
      S = "crm-s.com",
      p = async (K) => {
        try {
          const { email: O, password: T } = K;
          e(!0);
          const U = await fetch(`https://${S}/api/v1/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: O, password: T }),
          });
          if (!U.ok)
            throw (
              (U.status >= 400 && U.status < 500
                ? k("Email or password is incorrect")
                : U.status >= 500 &&
                  k("Problem with server. Please try again later"),
              new Error(U))
            );
          const I = await U.json(),
            q = I.data.token,
            b = I.data.user.name;
          console.log("login data", I),
            chrome.storage.local.set({ accessToken: q, userName: b }, () => {
              console.log("Token saved successfully"), s(!0);
            });
        } catch {
        } finally {
          e(!1);
        }
      };
    return f.jsxs("form", {
      className: "login-form",
      onSubmit: n(p),
      children: [
        f.jsx("h2", { children: "Login in CRM" }),
        f.jsxs("div", {
          className: "inputControl",
          children: [
            f.jsx("input", {
              type: "text",
              className: l.email ? "error" : "",
              ...r("email", {
                required: "This field is required.",
                pattern: {
                  value: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid format.",
                },
              }),
              placeholder: "Email",
            }),
            l.email &&
              f.jsx("span", {
                className: "error-message",
                children: l.email.message,
              }),
          ],
        }),
        f.jsxs("div", {
          className: "inputControl",
          children: [
            f.jsx("input", {
              type: o,
              className: l.password ? "error" : "",
              ...r("password", {
                required: "This field is required.",
                minLength: {
                  value: 6,
                  message: "This field must be at least 6 characters long.",
                },
              }),
              placeholder: "Password",
            }),
            f.jsx("span", {
              onClick: $,
              className: "eye-icon",
              children:
                o === "password"
                  ? f.jsx("img", { src: Rt, alt: "eye-slash" })
                  : f.jsx("img", { src: It, alt: "eye" }),
            }),
            l.password &&
              f.jsx("span", {
                className: "error-message",
                children: l.password.message,
              }),
          ],
        }),
        f.jsx("button", {
          type: "submit",
          className: "submitBtn",
          children: "Sign in",
        }),
        y && f.jsx("span", { className: "error-message", children: y }),
      ],
    });
  },
  ct = ({ text: e }) =>
    f.jsxs("div", {
      className: "loader-wrapper",
      children: [
        f.jsx("span", { className: "loader" }),
        f.jsx("span", { className: "loader-text", children: e }),
      ],
    }),
  Ut = ({ logOut: e }) => {
    const {
        register: s,
        handleSubmit: r,
        formState: { errors: n },
        reset: l,
        setValue: o,
      } = lt({ defaultValues: { pagination: 1 } }),
      [h, y] = P.useState(!1),
      [k, $] = P.useState(50),
      [S, p] = P.useState(0),
      [K, O] = P.useState(0),
      [T, U] = P.useState(!1),
      [I, q] = P.useState(""),
      [b, J] = P.useState("");
    P.useEffect(() => {
      $(h ? 20 : 50);
    }, [h]),
      P.useEffect(() => {
        (() => {
          chrome.storage.local.get(["initSearchValues"], function (x) {
            x.initSearchValues &&
              (console.log("result", x.initSearchValues),
              l(x.initSearchValues));
          }),
            chrome.storage.local.get("userName", function (x) {
              x.userName && (console.log("result", x.userName), J(x.userName));
            }),
            chrome.storage.local.get("isLowInternetMode", function (x) {
              x.isLowInternetMode !== void 0 && y(x.isLowInternetMode);
            });
        })();
      }, [l]);
    function Q() {
      chrome.storage.local.get("accessToken", function (_) {
        const x = _.accessToken;
        x && x.trim() !== ""
          ? e(x)
          : console.error("Access token is missing or empty.");
      });
    }
    const C = () => {
        o("pagination", 1);
      },
      re = (_) => {
        const x = _.target.checked;
        y(x), chrome.storage.local.set({ isLowInternetMode: x });
      };
    function ae() {
      console.log("im in collectData");
      let _ = Array.from(document.querySelectorAll("a[href]"))
        .filter(
          (x) =>
            !x.href.includes("translate") &&
            x.href.includes("linkedin.com/company")
        )
        .map((x) => {
          const V = x.innerHTML,
            F =
              new DOMParser()
                .parseFromString(V, "text/html")
                .querySelector("h3") ?? null,
            E = x.href,
            R = (F == null ? void 0 : F.textContent) || "";
          return R.trim()
            ? {
                company_name: R.trim(),
                company_linkedin: E.split("?")[0].replace(
                  /\/\/[a-z]+\.linkedin\.com/,
                  "//www.linkedin.com"
                ),
              }
            : null;
        });
      if (
        ((_ = _.filter((x) => x).filter(
          (x, V, v) =>
            V === v.findIndex((w) => w.company_linkedin === x.company_linkedin)
        )),
        _ && _.length > 0)
      ) {
        const x = _.filter((V) => V) || [];
        console.log(
          "data",
          _.filter((V) => V)
        ),
          chrome.storage.local.get("accessToken", function (V) {
            const v = V.accessToken;
            v && v.trim() !== ""
              ? chrome.runtime.sendMessage(
                  {
                    action: "companiesArray",
                    companiesArray: x,
                    accessToken: v,
                  },
                  (w) => {
                    w.success
                      ? console.log("Response from background:", w)
                      : console.error("Error from background:", w.error);
                  }
                )
              : console.error("Access token is missing or empty.");
          });
      } else return console.log("data is empty", _), "data is empty";
    }
    const ee = async (_) => {
      let x;
      _.city
        ? (x = `site:linkedin.com headquarters: "${_.city}" AND "${_.country}" Industry: ${_.industry} AND company size: ${_.companySize}`)
        : (x = `site:linkedin.com headquarters: "${_.country}" Industry: ${_.industry} AND company size: ${_.companySize}`);
      const V = `https://www.google.com/search?q=${encodeURIComponent(
        x
      )}&start=${(_.pagination - 1) * k}&num=${k}`;
      chrome.storage.local.set({
        initSearchValues: _,
        requestData: {},
        error: "",
        isLowInternetMode: h,
      });
      const v = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      v.length > 0
        ? (U(!0),
          chrome.tabs.update(v[0].id, { url: V }, () => {
            const w = (F, E) => {
              F === v[0].id &&
                E.status === "complete" &&
                (chrome.tabs.onUpdated.removeListener(w),
                chrome.scripting
                  .executeScript({ target: { tabId: v[0].id }, func: ae })
                  .then((R) => {
                    R[0].result === "data is empty" &&
                      (q("No data found."),
                      setTimeout(() => {
                        U(!1), q("");
                      }, 5e3));
                  }));
            };
            chrome.tabs.onUpdated.addListener(w);
          }))
        : console.log("No active tab found.");
    };
    return (
      P.useEffect(() => {
        if (!T) return;
        const _ = () => {
          chrome.storage.local.get(["requestData"], function (V) {
            if (
              (console.log("requestDataSearchForm", V.requestData),
              !V.requestData.resolvedCount || !V.requestData.totalChunks)
            ) {
              console.log("No progress data found.", V.requestData);
              return;
            }
            p(V.requestData.resolvedCount),
              O(V.requestData.totalChunks),
              V.requestData.resolvedCount === V.requestData.totalChunks &&
                (chrome.storage.local.get("error", function (v) {
                  v.error
                    ? q(v.error)
                    : q("Дані успішно завантажені в Discord!");
                }),
                setTimeout(() => {
                  q(""),
                    p(0),
                    O(0),
                    console.log("last log"),
                    chrome.storage.local.set({ requestData: {}, error: "" }),
                    U(!1);
                }, 5e3),
                clearInterval(x));
          });
        };
        _();
        const x = setInterval(_, 1e3);
        return () => {
          clearInterval(x),
            q(""),
            p(0),
            O(0),
            U(!1),
            chrome.storage.local.set({ requestData: {}, error: "" });
        };
      }, [T]),
      f.jsxs(f.Fragment, {
        children: [
          T && K === 0 && !I && f.jsx(ct, { text: "Collecting data..." }),
          !!I && f.jsx("div", { className: "completion-message", children: I }),
          K > 0
            ? f.jsxs("div", {
                children: [
                  f.jsxs("p", {
                    children: ["Обробляється запит ", S * 2, " з ", K * 2],
                  }),
                  f.jsx("progress", { value: S, max: K }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  f.jsxs("form", {
                    className: "form",
                    onSubmit: r(ee),
                    children: [
                      f.jsxs("div", {
                        className: "form-group",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "Country:",
                              f.jsx("input", {
                                type: "text",
                                ...s("country", { required: !0 }),
                              }),
                            ],
                          }),
                          n.country &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "form-group",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "City:",
                              f.jsx("input", {
                                type: "text",
                                ...s("city", { required: !1 }),
                              }),
                            ],
                          }),
                          n.city &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "form-group",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "Industry:",
                              f.jsx("input", {
                                type: "text",
                                ...s("industry", { required: !0 }),
                              }),
                            ],
                          }),
                          n.industry &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "form-group",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "Company size:",
                              f.jsxs("select", {
                                ...s("companySize", { required: !0 }),
                                children: [
                                  f.jsx("option", {
                                    value: "",
                                    children: "Select Company Size",
                                  }),
                                  f.jsx("option", {
                                    value: "2-10 employees",
                                    children: "2-10 employees",
                                  }),
                                  f.jsx("option", {
                                    value: "11-50 employees",
                                    children: "11-50 employees",
                                  }),
                                  f.jsx("option", {
                                    value: "51-200 employees",
                                    children: "51-200 employees",
                                  }),
                                  f.jsx("option", {
                                    value: "201-500 employees",
                                    children: "201-500 employees",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.companySize &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "form-group",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "Page number:",
                              f.jsx("input", {
                                className: "inputPagination",
                                type: "number",
                                min: 1,
                                ...s("pagination", { required: !0 }),
                              }),
                              f.jsx("button", {
                                type: "button",
                                className: "resetBtn",
                                onClick: C,
                                children: "Reset",
                              }),
                            ],
                          }),
                          n.pagination &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "form-group checkbox-group",
                        children: f.jsxs("label", {
                          children: [
                            f.jsx("input", {
                              type: "checkbox",
                              checked: h,
                              onChange: re,
                            }),
                            "Low Internet Mode (",
                            k,
                            " results per page)",
                          ],
                        }),
                      }),
                      f.jsx("button", {
                        className: "submitBtn",
                        type: "submit",
                        children: "Search",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "info-wrapper",
                    children: [
                      f.jsx("span", { children: b }),
                      f.jsx("a", {
                        className: "logoutBtn",
                        onClick: Q,
                        children: "Logout",
                      }),
                    ],
                  }),
                ],
              }),
        ],
      })
    );
  };
function Pt() {
  const e = "crm-s.com",
    [s, r] = P.useState(!1),
    [n, l] = P.useState(!1);
  P.useEffect(() => {
    chrome.storage.local.get("accessToken", function (y) {
      const k = y.accessToken;
      k && k.trim() !== "" && (console.log("accessToken", k), h(k));
    });
    function h(y) {
      l(!0),
        fetch(`https://${e}/api/v1/auth/me`, {
          method: "GET",
          headers: { Authorization: `Bearer ${y}` },
        })
          .then((k) => {
            if ((l(!1), !k.ok))
              throw new Error(`HTTP error! Status: ${k.status}`);
            return k.json();
          })
          .then((k) => {
            console.log("Authentication successful:", k), r(!0);
          })
          .catch((k) => {
            l(!0), console.error("Authentication error:", k);
          });
    }
  }, []);
  function o(h) {
    l(!0),
      fetch(`https://${e}/api/v1/auth/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${h}` },
      })
        .then((y) => {
          if ((l(!1), !y.ok))
            throw new Error(`HTTP error! Status: ${y.status}`);
          return y.json();
        })
        .then((y) => {
          chrome.storage.local.set(
            {
              accessToken: "",
              userName: "",
              initSearchValues: {},
              requestData: {},
              error: "",
            },
            function () {
              r(!1), console.log("Token removed successfully");
            }
          ),
            console.log("Logout successful:", y);
        })
        .catch((y) => {
          l(!1), console.error("Logout error:", y);
        })
        .catch((y) => {
          console.error("Error during logout:", y);
        });
  }
  return f.jsxs(f.Fragment, {
    children: [
      n && f.jsx(ct, { text: "Wait a second..." }),
      f.jsx("h1", { children: "Google Scrape" }),
      s
        ? f.jsx(Ut, { logOut: o })
        : f.jsx(Ot, { setIsLoggedIn: r, setIsLoading: l }),
    ],
  });
}
vt.createRoot(document.getElementById("root")).render(
  f.jsx(H.StrictMode, { children: f.jsx(Pt, {}) })
);
