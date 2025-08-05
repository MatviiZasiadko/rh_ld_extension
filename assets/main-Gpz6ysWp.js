import { R as $, r as K, j as f, c as vr } from "./index-QlLMW6Qq.js";
var ge = (e) => e.type === "checkbox",
  ue = (e) => e instanceof Date,
  U = (e) => e == null;
const er = (e) => typeof e == "object";
var L = (e) => !U(e) && !Array.isArray(e) && er(e) && !ue(e),
  xr = (e) =>
    L(e) && e.target ? (ge(e.target) ? e.target.checked : e.target.value) : e,
  pr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  wr = (e, s) => e.has(pr(s)),
  br = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return L(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Te =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Z(e) {
  let s;
  const t = Array.isArray(e);
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(Te && (e instanceof Blob || e instanceof FileList)) && (t || L(e)))
    if (((s = t ? [] : {}), !t && !br(e))) s = e;
    else for (const a in e) e.hasOwnProperty(a) && (s[a] = Z(e[a]));
  else return e;
  return s;
}
var me = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  E = (e) => e === void 0,
  g = (e, s, t) => {
    if (!s || !L(e)) return t;
    const a = me(s.split(/[,[\].]+?/)).reduce((l, o) => (U(l) ? l : l[o]), e);
    return E(a) || a === e ? (E(e[s]) ? t : e[s]) : a;
  },
  ie = (e) => typeof e == "boolean",
  je = (e) => /^\w*$/.test(e),
  rr = (e) => me(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  F = (e, s, t) => {
    let a = -1;
    const l = je(s) ? [s] : rr(s),
      o = l.length,
      h = o - 1;
    for (; ++a < o; ) {
      const y = l[a];
      let _ = t;
      if (a !== h) {
        const R = e[y];
        _ = L(R) || Array.isArray(R) ? R : isNaN(+l[a + 1]) ? {} : [];
      }
      if (y === "__proto__") return;
      (e[y] = _), (e = e[y]);
    }
    return e;
  };
const He = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ee = {
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
$.createContext(null);
var _r = (e, s, t, a = !0) => {
    const l = { defaultValues: s._defaultValues };
    for (const o in e)
      Object.defineProperty(l, o, {
        get: () => {
          const h = o;
          return (
            s._proxyFormState[h] !== ee.all &&
              (s._proxyFormState[h] = !a || ee.all),
            t && (t[h] = !0),
            e[h]
          );
        },
      });
    return l;
  },
  z = (e) => L(e) && !Object.keys(e).length,
  Ar = (e, s, t, a) => {
    t(e);
    const { name: l, ...o } = e;
    return (
      z(o) ||
      Object.keys(o).length >= Object.keys(s).length ||
      Object.keys(o).find((h) => s[h] === (!a || ee.all))
    );
  },
  Fe = (e) => (Array.isArray(e) ? e : [e]);
function Vr(e) {
  const s = $.useRef(e);
  (s.current = e),
    $.useEffect(() => {
      const t =
        !e.disabled &&
        s.current.subject &&
        s.current.subject.subscribe({ next: s.current.next });
      return () => {
        t && t.unsubscribe();
      };
    }, [e.disabled]);
}
var re = (e) => typeof e == "string",
  kr = (e, s, t, a, l) =>
    re(e)
      ? (a && s.watch.add(e), g(t, e, l))
      : Array.isArray(e)
      ? e.map((o) => (a && s.watch.add(o), g(t, o)))
      : (a && (s.watchAll = !0), t),
  Sr = (e, s, t, a, l) =>
    s
      ? {
          ...t[e],
          types: { ...(t[e] && t[e].types ? t[e].types : {}), [a]: l || !0 },
        }
      : {},
  We = (e) => ({
    isOnSubmit: !e || e === ee.onSubmit,
    isOnBlur: e === ee.onBlur,
    isOnChange: e === ee.onChange,
    isOnAll: e === ee.all,
    isOnTouch: e === ee.onTouched,
  }),
  Ge = (e, s, t) =>
    !t &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some(
        (a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))
      ));
const ye = (e, s, t, a) => {
  for (const l of t || Object.keys(e)) {
    const o = g(e, l);
    if (o) {
      const { _f: h, ...y } = o;
      if (h) {
        if (h.refs && h.refs[0] && s(h.refs[0], l) && !a) break;
        if (h.ref && s(h.ref, h.name) && !a) break;
        ye(y, s);
      } else L(y) && ye(y, s);
    }
  }
};
var Fr = (e, s, t) => {
    const a = me(g(e, t));
    return F(a, "root", s[t]), F(e, t, a), e;
  },
  Ne = (e) => e.type === "file",
  ae = (e) => typeof e == "function",
  pe = (e) => {
    if (!Te) return !1;
    const s = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  xe = (e) => re(e),
  Le = (e) => e.type === "radio",
  we = (e) => e instanceof RegExp;
const Ze = { value: !1, isValid: !1 },
  Ke = { value: !0, isValid: !0 };
var tr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e
        .filter((t) => t && t.checked && !t.disabled)
        .map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !E(e[0].attributes.value)
        ? E(e[0].value) || e[0].value === ""
          ? Ke
          : { value: e[0].value, isValid: !0 }
        : Ke
      : Ze;
  }
  return Ze;
};
const Je = { isValid: !1, value: null };
var sr = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (s, t) =>
          t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : s,
        Je
      )
    : Je;
function Qe(e, s, t = "validate") {
  if (xe(e) || (Array.isArray(e) && e.every(xe)) || (ie(e) && !e))
    return { type: t, message: xe(e) ? e : "", ref: s };
}
var le = (e) => (L(e) && !we(e) ? e : { value: e, message: "" }),
  Xe = async (e, s, t, a, l) => {
    const {
        ref: o,
        refs: h,
        required: y,
        maxLength: _,
        minLength: R,
        min: k,
        max: p,
        pattern: J,
        validate: I,
        name: D,
        valueAsNumber: H,
        mount: P,
        disabled: W,
      } = e._f,
      b = g(s, D);
    if (!P || W) return {};
    const Q = h ? h[0] : o,
      X = (x) => {
        a &&
          Q.reportValidity &&
          (Q.setCustomValidity(ie(x) ? "" : x || ""), Q.reportValidity());
      },
      v = {},
      w = Le(o),
      S = ge(o),
      C = w || S,
      M =
        ((H || Ne(o)) && E(o.value) && E(b)) ||
        (pe(o) && o.value === "") ||
        b === "" ||
        (Array.isArray(b) && !b.length),
      q = Sr.bind(null, D, t, v),
      se = (x, A, j, O = te.maxLength, Y = te.minLength) => {
        const G = x ? A : j;
        v[D] = { type: x ? O : Y, message: G, ref: o, ...q(x ? O : Y, G) };
      };
    if (
      l
        ? !Array.isArray(b) || !b.length
        : y &&
          ((!C && (M || U(b))) ||
            (ie(b) && !b) ||
            (S && !tr(h).isValid) ||
            (w && !sr(h).isValid))
    ) {
      const { value: x, message: A } = xe(y)
        ? { value: !!y, message: y }
        : le(y);
      if (
        x &&
        ((v[D] = {
          type: te.required,
          message: A,
          ref: Q,
          ...q(te.required, A),
        }),
        !t)
      )
        return X(A), v;
    }
    if (!M && (!U(k) || !U(p))) {
      let x, A;
      const j = le(p),
        O = le(k);
      if (!U(b) && !isNaN(b)) {
        const Y = o.valueAsNumber || (b && +b);
        U(j.value) || (x = Y > j.value), U(O.value) || (A = Y < O.value);
      } else {
        const Y = o.valueAsDate || new Date(b),
          G = (fe) => new Date(new Date().toDateString() + " " + fe),
          ce = o.type == "time",
          de = o.type == "week";
        re(j.value) &&
          b &&
          (x = ce
            ? G(b) > G(j.value)
            : de
            ? b > j.value
            : Y > new Date(j.value)),
          re(O.value) &&
            b &&
            (A = ce
              ? G(b) < G(O.value)
              : de
              ? b < O.value
              : Y < new Date(O.value));
      }
      if ((x || A) && (se(!!x, j.message, O.message, te.max, te.min), !t))
        return X(v[D].message), v;
    }
    if ((_ || R) && !M && (re(b) || (l && Array.isArray(b)))) {
      const x = le(_),
        A = le(R),
        j = !U(x.value) && b.length > +x.value,
        O = !U(A.value) && b.length < +A.value;
      if ((j || O) && (se(j, x.message, A.message), !t))
        return X(v[D].message), v;
    }
    if (J && !M && re(b)) {
      const { value: x, message: A } = le(J);
      if (
        we(x) &&
        !b.match(x) &&
        ((v[D] = { type: te.pattern, message: A, ref: o, ...q(te.pattern, A) }),
        !t)
      )
        return X(A), v;
    }
    if (I) {
      if (ae(I)) {
        const x = await I(b, s),
          A = Qe(x, Q);
        if (A && ((v[D] = { ...A, ...q(te.validate, A.message) }), !t))
          return X(A.message), v;
      } else if (L(I)) {
        let x = {};
        for (const A in I) {
          if (!z(x) && !t) break;
          const j = Qe(await I[A](b, s), Q, A);
          j &&
            ((x = { ...j, ...q(A, j.message) }), X(j.message), t && (v[D] = x));
        }
        if (!z(x) && ((v[D] = { ref: Q, ...x }), !t)) return v;
      }
    }
    return X(!0), v;
  };
function Dr(e, s) {
  const t = s.slice(0, -1).length;
  let a = 0;
  for (; a < t; ) e = E(e) ? a++ : e[s[a++]];
  return e;
}
function Cr(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !E(e[s])) return !1;
  return !0;
}
function N(e, s) {
  const t = Array.isArray(s) ? s : je(s) ? [s] : rr(s),
    a = t.length === 1 ? e : Dr(e, t),
    l = t.length - 1,
    o = t[l];
  return (
    a && delete a[o],
    l !== 0 &&
      ((L(a) && z(a)) || (Array.isArray(a) && Cr(a))) &&
      N(e, t.slice(0, -1)),
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
  be = (e) => U(e) || !er(e);
function ne(e, s) {
  if (be(e) || be(s)) return e === s;
  if (ue(e) && ue(s)) return e.getTime() === s.getTime();
  const t = Object.keys(e),
    a = Object.keys(s);
  if (t.length !== a.length) return !1;
  for (const l of t) {
    const o = e[l];
    if (!a.includes(l)) return !1;
    if (l !== "ref") {
      const h = s[l];
      if (
        (ue(o) && ue(h)) ||
        (L(o) && L(h)) ||
        (Array.isArray(o) && Array.isArray(h))
          ? !ne(o, h)
          : o !== h
      )
        return !1;
    }
  }
  return !0;
}
var ir = (e) => e.type === "select-multiple",
  Er = (e) => Le(e) || ge(e),
  Ce = (e) => pe(e) && e.isConnected,
  ar = (e) => {
    for (const s in e) if (ae(e[s])) return !0;
    return !1;
  };
function _e(e, s = {}) {
  const t = Array.isArray(e);
  if (L(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || (L(e[a]) && !ar(e[a]))
        ? ((s[a] = Array.isArray(e[a]) ? [] : {}), _e(e[a], s[a]))
        : U(e[a]) || (s[a] = !0);
  return s;
}
function nr(e, s, t) {
  const a = Array.isArray(e);
  if (L(e) || a)
    for (const l in e)
      Array.isArray(e[l]) || (L(e[l]) && !ar(e[l]))
        ? E(s) || be(t[l])
          ? (t[l] = Array.isArray(e[l]) ? _e(e[l], []) : { ..._e(e[l]) })
          : nr(e[l], U(s) ? {} : s[l], t[l])
        : (t[l] = !ne(e[l], s[l]));
  return t;
}
var ve = (e, s) => nr(e, s, _e(s)),
  or = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: a }) =>
    E(e)
      ? e
      : s
      ? e === ""
        ? NaN
        : e && +e
      : t && re(e)
      ? new Date(e)
      : a
      ? a(e)
      : e;
function Ee(e) {
  const s = e.ref;
  if (!(e.refs ? e.refs.every((t) => t.disabled) : s.disabled))
    return Ne(s)
      ? s.files
      : Le(s)
      ? sr(e.refs).value
      : ir(s)
      ? [...s.selectedOptions].map(({ value: t }) => t)
      : ge(s)
      ? tr(e.refs).value
      : or(E(s.value) ? e.ref.value : s.value, e);
}
var Tr = (e, s, t, a) => {
    const l = {};
    for (const o of e) {
      const h = g(s, o);
      h && F(l, o, h._f);
    }
    return {
      criteriaMode: t,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: a,
    };
  },
  he = (e) =>
    E(e)
      ? e
      : we(e)
      ? e.source
      : L(e)
      ? we(e.value)
        ? e.value.source
        : e.value
      : e,
  jr = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ye(e, s, t) {
  const a = g(e, t);
  if (a || je(t)) return { error: a, name: t };
  const l = t.split(".");
  for (; l.length; ) {
    const o = l.join("."),
      h = g(s, o),
      y = g(e, o);
    if (h && !Array.isArray(h) && t !== o) return { name: t };
    if (y && y.type) return { name: o, error: y };
    l.pop();
  }
  return { name: t };
}
var Nr = (e, s, t, a, l) =>
    l.isOnAll
      ? !1
      : !t && l.isOnTouch
      ? !(s || e)
      : (t ? a.isOnBlur : l.isOnBlur)
      ? !e
      : (t ? a.isOnChange : l.isOnChange)
      ? e
      : !0,
  Lr = (e, s) => !me(g(e, s)).length && N(e, s);
const qr = {
  mode: ee.onSubmit,
  reValidateMode: ee.onChange,
  shouldFocusError: !0,
};
function Rr(e = {}) {
  let s = { ...qr, ...e },
    t = {
      submitCount: 0,
      isDirty: !1,
      isLoading: ae(s.defaultValues),
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
    a = {},
    l =
      L(s.defaultValues) || L(s.values)
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
    _,
    R = 0;
  const k = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: De(), array: De(), state: De() },
    J = We(s.mode),
    I = We(s.reValidateMode),
    D = s.criteriaMode === ee.all,
    H = (r) => (i) => {
      clearTimeout(R), (R = setTimeout(r, i));
    },
    P = async (r) => {
      if (k.isValid || r) {
        const i = s.resolver ? z((await C()).errors) : await q(a, !0);
        i !== t.isValid && p.state.next({ isValid: i });
      }
    },
    W = (r, i) => {
      (k.isValidating || k.validatingFields) &&
        ((r || Array.from(y.mount)).forEach((n) => {
          n && (i ? F(t.validatingFields, n, i) : N(t.validatingFields, n));
        }),
        p.state.next({
          validatingFields: t.validatingFields,
          isValidating: !z(t.validatingFields),
        }));
    },
    b = (r, i = [], n, d, c = !0, u = !0) => {
      if (d && n) {
        if (((h.action = !0), u && Array.isArray(g(a, r)))) {
          const m = n(g(a, r), d.argA, d.argB);
          c && F(a, r, m);
        }
        if (u && Array.isArray(g(t.errors, r))) {
          const m = n(g(t.errors, r), d.argA, d.argB);
          c && F(t.errors, r, m), Lr(t.errors, r);
        }
        if (k.touchedFields && u && Array.isArray(g(t.touchedFields, r))) {
          const m = n(g(t.touchedFields, r), d.argA, d.argB);
          c && F(t.touchedFields, r, m);
        }
        k.dirtyFields && (t.dirtyFields = ve(l, o)),
          p.state.next({
            name: r,
            isDirty: x(r, i),
            dirtyFields: t.dirtyFields,
            errors: t.errors,
            isValid: t.isValid,
          });
      } else F(o, r, i);
    },
    Q = (r, i) => {
      F(t.errors, r, i), p.state.next({ errors: t.errors });
    },
    X = (r) => {
      (t.errors = r), p.state.next({ errors: t.errors, isValid: !1 });
    },
    v = (r, i, n, d) => {
      const c = g(a, r);
      if (c) {
        const u = g(o, r, E(n) ? g(l, r) : n);
        E(u) || (d && d.defaultChecked) || i
          ? F(o, r, i ? u : Ee(c._f))
          : O(r, u),
          h.mount && P();
      }
    },
    w = (r, i, n, d, c) => {
      let u = !1,
        m = !1;
      const V = { name: r },
        T = !!(g(a, r) && g(a, r)._f.disabled);
      if (!n || d) {
        k.isDirty &&
          ((m = t.isDirty),
          (t.isDirty = V.isDirty = x()),
          (u = m !== V.isDirty));
        const B = T || ne(g(l, r), i);
        (m = !!(!T && g(t.dirtyFields, r))),
          B || T ? N(t.dirtyFields, r) : F(t.dirtyFields, r, !0),
          (V.dirtyFields = t.dirtyFields),
          (u = u || (k.dirtyFields && m !== !B));
      }
      if (n) {
        const B = g(t.touchedFields, r);
        B ||
          (F(t.touchedFields, r, n),
          (V.touchedFields = t.touchedFields),
          (u = u || (k.touchedFields && B !== n)));
      }
      return u && c && p.state.next(V), u ? V : {};
    },
    S = (r, i, n, d) => {
      const c = g(t.errors, r),
        u = k.isValid && ie(i) && t.isValid !== i;
      if (
        (e.delayError && n
          ? ((_ = H(() => Q(r, n))), _(e.delayError))
          : (clearTimeout(R),
            (_ = null),
            n ? F(t.errors, r, n) : N(t.errors, r)),
        (n ? !ne(c, n) : c) || !z(d) || u)
      ) {
        const m = {
          ...d,
          ...(u && ie(i) ? { isValid: i } : {}),
          errors: t.errors,
          name: r,
        };
        (t = { ...t, ...m }), p.state.next(m);
      }
    },
    C = async (r) => {
      W(r, !0);
      const i = await s.resolver(
        o,
        s.context,
        Tr(r || y.mount, a, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return W(r), i;
    },
    M = async (r) => {
      const { errors: i } = await C(r);
      if (r)
        for (const n of r) {
          const d = g(i, n);
          d ? F(t.errors, n, d) : N(t.errors, n);
        }
      else t.errors = i;
      return i;
    },
    q = async (r, i, n = { valid: !0 }) => {
      for (const d in r) {
        const c = r[d];
        if (c) {
          const { _f: u, ...m } = c;
          if (u) {
            const V = y.array.has(u.name);
            W([d], !0);
            const T = await Xe(c, o, D, s.shouldUseNativeValidation && !i, V);
            if ((W([d]), T[u.name] && ((n.valid = !1), i))) break;
            !i &&
              (g(T, u.name)
                ? V
                  ? Fr(t.errors, T, u.name)
                  : F(t.errors, u.name, T[u.name])
                : N(t.errors, u.name));
          }
          m && (await q(m, i, n));
        }
      }
      return n.valid;
    },
    se = () => {
      for (const r of y.unMount) {
        const i = g(a, r);
        i &&
          (i._f.refs ? i._f.refs.every((n) => !Ce(n)) : !Ce(i._f.ref)) &&
          Ae(r);
      }
      y.unMount = new Set();
    },
    x = (r, i) => (r && i && F(o, r, i), !ne(qe(), l)),
    A = (r, i, n) =>
      kr(r, y, { ...(h.mount ? o : E(i) ? l : re(r) ? { [r]: i } : i) }, n, i),
    j = (r) => me(g(h.mount ? o : l, r, e.shouldUnregister ? g(l, r, []) : [])),
    O = (r, i, n = {}) => {
      const d = g(a, r);
      let c = i;
      if (d) {
        const u = d._f;
        u &&
          (!u.disabled && F(o, r, or(i, u)),
          (c = pe(u.ref) && U(i) ? "" : i),
          ir(u.ref)
            ? [...u.ref.options].forEach(
                (m) => (m.selected = c.includes(m.value))
              )
            : u.refs
            ? ge(u.ref)
              ? u.refs.length > 1
                ? u.refs.forEach(
                    (m) =>
                      (!m.defaultChecked || !m.disabled) &&
                      (m.checked = Array.isArray(c)
                        ? !!c.find((V) => V === m.value)
                        : c === m.value)
                  )
                : u.refs[0] && (u.refs[0].checked = !!c)
              : u.refs.forEach((m) => (m.checked = m.value === c))
            : Ne(u.ref)
            ? (u.ref.value = "")
            : ((u.ref.value = c),
              u.ref.type || p.values.next({ name: r, values: { ...o } })));
      }
      (n.shouldDirty || n.shouldTouch) &&
        w(r, c, n.shouldTouch, n.shouldDirty, !0),
        n.shouldValidate && fe(r);
    },
    Y = (r, i, n) => {
      for (const d in i) {
        const c = i[d],
          u = `${r}.${d}`,
          m = g(a, u);
        (y.array.has(r) || !be(c) || (m && !m._f)) && !ue(c)
          ? Y(u, c, n)
          : O(u, c, n);
      }
    },
    G = (r, i, n = {}) => {
      const d = g(a, r),
        c = y.array.has(r),
        u = Z(i);
      F(o, r, u),
        c
          ? (p.array.next({ name: r, values: { ...o } }),
            (k.isDirty || k.dirtyFields) &&
              n.shouldDirty &&
              p.state.next({
                name: r,
                dirtyFields: ve(l, o),
                isDirty: x(r, u),
              }))
          : d && !d._f && !U(u)
          ? Y(r, u, n)
          : O(r, u, n),
        Ge(r, y) && p.state.next({ ...t }),
        p.values.next({ name: h.mount ? r : void 0, values: { ...o } });
    },
    ce = async (r) => {
      h.mount = !0;
      const i = r.target;
      let n = i.name,
        d = !0;
      const c = g(a, n),
        u = () => (i.type ? Ee(c._f) : xr(r)),
        m = (V) => {
          d = Number.isNaN(V) || V === g(o, n, V);
        };
      if (c) {
        let V, T;
        const B = u(),
          oe = r.type === He.BLUR || r.type === He.FOCUS_OUT,
          yr =
            (!jr(c._f) && !s.resolver && !g(t.errors, n) && !c._f.deps) ||
            Nr(oe, g(t.touchedFields, n), t.isSubmitted, I, J),
          ke = Ge(n, y, oe);
        F(o, n, B),
          oe
            ? (c._f.onBlur && c._f.onBlur(r), _ && _(0))
            : c._f.onChange && c._f.onChange(r);
        const Se = w(n, B, oe, !1),
          gr = !z(Se) || ke;
        if (
          (!oe && p.values.next({ name: n, type: r.type, values: { ...o } }),
          yr)
        )
          return (
            k.isValid && P(), gr && p.state.next({ name: n, ...(ke ? {} : Se) })
          );
        if ((!oe && ke && p.state.next({ ...t }), s.resolver)) {
          const { errors: $e } = await C([n]);
          if ((m(B), d)) {
            const mr = Ye(t.errors, a, n),
              ze = Ye($e, a, mr.name || n);
            (V = ze.error), (n = ze.name), (T = z($e));
          }
        } else
          W([n], !0),
            (V = (await Xe(c, o, D, s.shouldUseNativeValidation))[n]),
            W([n]),
            m(B),
            d && (V ? (T = !1) : k.isValid && (T = await q(a, !0)));
        d && (c._f.deps && fe(c._f.deps), S(n, T, V, Se));
      }
    },
    de = (r, i) => {
      if (g(t.errors, i) && r.focus) return r.focus(), 1;
    },
    fe = async (r, i = {}) => {
      let n, d;
      const c = Fe(r);
      if (s.resolver) {
        const u = await M(E(r) ? r : c);
        (n = z(u)), (d = r ? !c.some((m) => g(u, m)) : n);
      } else
        r
          ? ((d = (
              await Promise.all(
                c.map(async (u) => {
                  const m = g(a, u);
                  return await q(m && m._f ? { [u]: m } : m);
                })
              )
            ).every(Boolean)),
            !(!d && !t.isValid) && P())
          : (d = n = await q(a));
      return (
        p.state.next({
          ...(!re(r) || (k.isValid && n !== t.isValid) ? {} : { name: r }),
          ...(s.resolver || !r ? { isValid: n } : {}),
          errors: t.errors,
        }),
        i.shouldFocus && !d && ye(a, de, r ? c : y.mount),
        d
      );
    },
    qe = (r) => {
      const i = { ...(h.mount ? o : l) };
      return E(r) ? i : re(r) ? g(i, r) : r.map((n) => g(i, n));
    },
    Re = (r, i) => ({
      invalid: !!g((i || t).errors, r),
      isDirty: !!g((i || t).dirtyFields, r),
      isTouched: !!g((i || t).touchedFields, r),
      isValidating: !!g((i || t).validatingFields, r),
      error: g((i || t).errors, r),
    }),
    cr = (r) => {
      r && Fe(r).forEach((i) => N(t.errors, i)),
        p.state.next({ errors: r ? t.errors : {} });
    },
    Me = (r, i, n) => {
      const d = (g(a, r, { _f: {} })._f || {}).ref,
        c = g(t.errors, r) || {},
        { ref: u, message: m, type: V, ...T } = c;
      F(t.errors, r, { ...T, ...i, ref: d }),
        p.state.next({ name: r, errors: t.errors, isValid: !1 }),
        n && n.shouldFocus && d && d.focus && d.focus();
    },
    dr = (r, i) =>
      ae(r)
        ? p.values.subscribe({ next: (n) => r(A(void 0, i), n) })
        : A(r, i, !0),
    Ae = (r, i = {}) => {
      for (const n of r ? Fe(r) : y.mount)
        y.mount.delete(n),
          y.array.delete(n),
          i.keepValue || (N(a, n), N(o, n)),
          !i.keepError && N(t.errors, n),
          !i.keepDirty && N(t.dirtyFields, n),
          !i.keepTouched && N(t.touchedFields, n),
          !i.keepIsValidating && N(t.validatingFields, n),
          !s.shouldUnregister && !i.keepDefaultValue && N(l, n);
      p.values.next({ values: { ...o } }),
        p.state.next({ ...t, ...(i.keepDirty ? { isDirty: x() } : {}) }),
        !i.keepIsValid && P();
    },
    Oe = ({ disabled: r, name: i, field: n, fields: d, value: c }) => {
      if ((ie(r) && h.mount) || r) {
        const u = r ? void 0 : E(c) ? Ee(n ? n._f : g(d, i)._f) : c;
        F(o, i, u), w(i, u, !1, !1, !0);
      }
    },
    Ve = (r, i = {}) => {
      let n = g(a, r);
      const d = ie(i.disabled);
      return (
        F(a, r, {
          ...(n || {}),
          _f: {
            ...(n && n._f ? n._f : { ref: { name: r } }),
            name: r,
            mount: !0,
            ...i,
          },
        }),
        y.mount.add(r),
        n
          ? Oe({ field: n, disabled: i.disabled, name: r, value: i.value })
          : v(r, !0, i.value),
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
          name: r,
          onChange: ce,
          onBlur: ce,
          ref: (c) => {
            if (c) {
              Ve(r, i), (n = g(a, r));
              const u =
                  (E(c.value) &&
                    c.querySelectorAll &&
                    c.querySelectorAll("input,select,textarea")[0]) ||
                  c,
                m = Er(u),
                V = n._f.refs || [];
              if (m ? V.find((T) => T === u) : u === n._f.ref) return;
              F(a, r, {
                _f: {
                  ...n._f,
                  ...(m
                    ? {
                        refs: [
                          ...V.filter(Ce),
                          u,
                          ...(Array.isArray(g(l, r)) ? [{}] : []),
                        ],
                        ref: { type: u.type, name: r },
                      }
                    : { ref: u }),
                },
              }),
                v(r, !1, void 0, u);
            } else
              (n = g(a, r, {})),
                n._f && (n._f.mount = !1),
                (s.shouldUnregister || i.shouldUnregister) &&
                  !(wr(y.array, r) && h.action) &&
                  y.unMount.add(r);
          },
        }
      );
    },
    Ie = () => s.shouldFocusError && ye(a, de, y.mount),
    fr = (r) => {
      ie(r) &&
        (p.state.next({ disabled: r }),
        ye(
          a,
          (i, n) => {
            const d = g(a, n);
            d &&
              ((i.disabled = d._f.disabled || r),
              Array.isArray(d._f.refs) &&
                d._f.refs.forEach((c) => {
                  c.disabled = d._f.disabled || r;
                }));
          },
          0,
          !1
        ));
    },
    Ue = (r, i) => async (n) => {
      let d;
      n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
      let c = Z(o);
      if ((p.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: u, values: m } = await C();
        (t.errors = u), (c = m);
      } else await q(a);
      if ((N(t.errors, "root"), z(t.errors))) {
        p.state.next({ errors: {} });
        try {
          await r(c, n);
        } catch (u) {
          d = u;
        }
      } else i && (await i({ ...t.errors }, n)), Ie(), setTimeout(Ie);
      if (
        (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: z(t.errors) && !d,
          submitCount: t.submitCount + 1,
          errors: t.errors,
        }),
        d)
      )
        throw d;
    },
    hr = (r, i = {}) => {
      g(a, r) &&
        (E(i.defaultValue)
          ? G(r, Z(g(l, r)))
          : (G(r, i.defaultValue), F(l, r, Z(i.defaultValue))),
        i.keepTouched || N(t.touchedFields, r),
        i.keepDirty ||
          (N(t.dirtyFields, r),
          (t.isDirty = i.defaultValue ? x(r, Z(g(l, r))) : x())),
        i.keepError || (N(t.errors, r), k.isValid && P()),
        p.state.next({ ...t }));
    },
    Pe = (r, i = {}) => {
      const n = r ? Z(r) : l,
        d = Z(n),
        c = z(r),
        u = c ? l : d;
      if ((i.keepDefaultValues || (l = n), !i.keepValues)) {
        if (i.keepDirtyValues)
          for (const m of y.mount)
            g(t.dirtyFields, m) ? F(u, m, g(o, m)) : G(m, g(u, m));
        else {
          if (Te && E(r))
            for (const m of y.mount) {
              const V = g(a, m);
              if (V && V._f) {
                const T = Array.isArray(V._f.refs) ? V._f.refs[0] : V._f.ref;
                if (pe(T)) {
                  const B = T.closest("form");
                  if (B) {
                    B.reset();
                    break;
                  }
                }
              }
            }
          a = {};
        }
        (o = e.shouldUnregister ? (i.keepDefaultValues ? Z(l) : {}) : Z(u)),
          p.array.next({ values: { ...u } }),
          p.values.next({ values: { ...u } });
      }
      (y = {
        mount: i.keepDirtyValues ? y.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (h.mount = !k.isValid || !!i.keepIsValid || !!i.keepDirtyValues),
        (h.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: i.keepSubmitCount ? t.submitCount : 0,
          isDirty: c
            ? !1
            : i.keepDirty
            ? t.isDirty
            : !!(i.keepDefaultValues && !ne(r, l)),
          isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
          dirtyFields: c
            ? []
            : i.keepDirtyValues
            ? i.keepDefaultValues && o
              ? ve(l, o)
              : t.dirtyFields
            : i.keepDefaultValues && r
            ? ve(l, r)
            : {},
          touchedFields: i.keepTouched ? t.touchedFields : {},
          errors: i.keepErrors ? t.errors : {},
          isSubmitSuccessful: i.keepIsSubmitSuccessful
            ? t.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Be = (r, i) => Pe(ae(r) ? r(o) : r, i);
  return {
    control: {
      register: Ve,
      unregister: Ae,
      getFieldState: Re,
      handleSubmit: Ue,
      setError: Me,
      _executeSchema: C,
      _getWatch: A,
      _getDirty: x,
      _updateValid: P,
      _removeUnmounted: se,
      _updateFieldArray: b,
      _updateDisabledField: Oe,
      _getFieldArray: j,
      _reset: Pe,
      _resetDefaultValues: () =>
        ae(s.defaultValues) &&
        s.defaultValues().then((r) => {
          Be(r, s.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: (r) => {
        t = { ...t, ...r };
      },
      _disableForm: fr,
      _subjects: p,
      _proxyFormState: k,
      _setErrors: X,
      get _fields() {
        return a;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return h;
      },
      set _state(r) {
        h = r;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return y;
      },
      set _names(r) {
        y = r;
      },
      get _formState() {
        return t;
      },
      set _formState(r) {
        t = r;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = { ...s, ...r };
      },
    },
    trigger: fe,
    register: Ve,
    handleSubmit: Ue,
    watch: dr,
    setValue: G,
    getValues: qe,
    reset: Be,
    resetField: hr,
    clearErrors: cr,
    unregister: Ae,
    setError: Me,
    setFocus: (r, i = {}) => {
      const n = g(a, r),
        d = n && n._f;
      if (d) {
        const c = d.refs ? d.refs[0] : d.ref;
        c.focus && (c.focus(), i.shouldSelect && c.select());
      }
    },
    getFieldState: Re,
  };
}
function lr(e = {}) {
  const s = $.useRef(),
    t = $.useRef(),
    [a, l] = $.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ae(e.defaultValues),
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
      defaultValues: ae(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current || (s.current = { ...Rr(e), formState: a });
  const o = s.current.control;
  return (
    (o._options = e),
    Vr({
      subject: o._subjects.state,
      next: (h) => {
        Ar(h, o._proxyFormState, o._updateFormState, !0) &&
          l({ ...o._formState });
      },
    }),
    $.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    $.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const h = o._getDirty();
        h !== a.isDirty && o._subjects.state.next({ isDirty: h });
      }
    }, [o, a.isDirty]),
    $.useEffect(() => {
      e.values && !ne(e.values, t.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (t.current = e.values),
          l((h) => ({ ...h })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    $.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    $.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    $.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (s.current.formState = _r(a, o)),
    s.current
  );
}
const Mr =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.0007%2012C15.0007%2013.6569%2013.6576%2015%2012.0007%2015C10.3439%2015%209.00073%2013.6569%209.00073%2012C9.00073%2010.3431%2010.3439%209%2012.0007%209C13.6576%209%2015.0007%2010.3431%2015.0007%2012Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.0012%205C7.52354%205%203.73326%207.94288%202.45898%2012C3.73324%2016.0571%207.52354%2019%2012.0012%2019C16.4788%2019%2020.2691%2016.0571%2021.5434%2012C20.2691%207.94291%2016.4788%205%2012.0012%205Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Or =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.99902%203L20.999%2021M9.8433%209.91364C9.32066%2010.4536%208.99902%2011.1892%208.99902%2012C8.99902%2013.6569%2010.3422%2015%2011.999%2015C12.8215%2015%2013.5667%2014.669%2014.1086%2014.133M6.49902%206.64715C4.59972%207.90034%203.15305%209.78394%202.45703%2012C3.73128%2016.0571%207.52159%2019%2011.9992%2019C13.9881%2019%2015.8414%2018.4194%2017.3988%2017.4184M10.999%205.04939C11.328%205.01673%2011.6617%205%2011.9992%205C16.4769%205%2020.2672%207.94291%2021.5414%2012C21.2607%2012.894%2020.8577%2013.7338%2020.3522%2014.5'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Ir = ({ setIsLoading: e, setIsLoggedIn: s }) => {
    const {
        register: t,
        handleSubmit: a,
        formState: { errors: l },
      } = lr({}),
      [o, h] = K.useState("password"),
      [y, _] = K.useState(""),
      R = () => {
        h(o === "password" ? "text" : "password");
      },
      k = "crm-s.com",
      p = async (J) => {
        try {
          const { email: I, password: D } = J;
          e(!0);
          const H = await fetch(`https://${k}/api/v1/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: I, password: D }),
          });
          if (!H.ok)
            throw (
              (H.status >= 400 && H.status < 500
                ? _("Email or password is incorrect")
                : H.status >= 500 &&
                  _("Problem with server. Please try again later"),
              new Error(H))
            );
          const P = await H.json(),
            W = P.data.token,
            b = P.data.user.name;
          console.log("login data", P),
            chrome.storage.local.set({ accessToken: W, userName: b }, () => {
              console.log("Token saved successfully"), s(!0);
            });
        } catch {
        } finally {
          e(!1);
        }
      };
    return f.jsxs("form", {
      className: "login-form",
      onSubmit: a(p),
      children: [
        f.jsx("h2", { children: "Login in CRM" }),
        f.jsxs("div", {
          className: "inputControl",
          children: [
            f.jsx("input", {
              type: "text",
              className: l.email ? "error" : "",
              ...t("email", {
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
              ...t("password", {
                required: "This field is required.",
                minLength: {
                  value: 6,
                  message: "This field must be at least 6 characters long.",
                },
              }),
              placeholder: "Password",
            }),
            f.jsx("span", {
              onClick: R,
              className: "eye-icon",
              children:
                o === "password"
                  ? f.jsx("img", { src: Or, alt: "eye-slash" })
                  : f.jsx("img", { src: Mr, alt: "eye" }),
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
  ur = ({ text: e }) =>
    f.jsxs("div", {
      className: "loader-wrapper",
      children: [
        f.jsx("span", { className: "loader" }),
        f.jsx("span", { className: "loader-text", children: e }),
      ],
    }),
  Ur = ({ logOut: e }) => {
    const {
        register: s,
        handleSubmit: t,
        formState: { errors: a },
        reset: l,
        setValue: o,
      } = lr({ defaultValues: { pagination: 1 } }),
      h = 50,
      [y, _] = K.useState(0),
      [R, k] = K.useState(0),
      [p, J] = K.useState(!1),
      [I, D] = K.useState(""),
      [H, P] = K.useState("");
    K.useEffect(() => {
      (() => {
        chrome.storage.local.get(["initSearchValues"], function (w) {
          w.initSearchValues &&
            (console.log("result", w.initSearchValues), l(w.initSearchValues));
        }),
          chrome.storage.local.get("userName", function (w) {
            w.userName && (console.log("result", w.userName), P(w.userName));
          });
      })();
    }, [l]);
    function W() {
      chrome.storage.local.get("accessToken", function (v) {
        const w = v.accessToken;
        w && w.trim() !== ""
          ? e(w)
          : console.error("Access token is missing or empty.");
      });
    }
    const b = () => {
      o("pagination", 1);
    };
    function Q() {
      console.log("im in collectData");
      let v = Array.from(document.querySelectorAll("a[href]"))
        .filter(
          (w) =>
            !w.href.includes("translate") &&
            w.href.includes("linkedin.com/company")
        )
        .map((w) => {
          const S = w.innerHTML,
            q =
              new DOMParser()
                .parseFromString(S, "text/html")
                .querySelector("h3") ?? null,
            se = w.href,
            x = (q == null ? void 0 : q.textContent) || "";
          return x.trim()
            ? {
                company_name: x.trim(),
                company_linkedin: se
                  .split("?")[0]
                  .replace(/\/\/[a-z]+\.linkedin\.com/, "//www.linkedin.com"),
              }
            : null;
        });
      if (
        ((v = v
          .filter((w) => w)
          .filter(
            (w, S, C) =>
              S ===
              C.findIndex((M) => M.company_linkedin === w.company_linkedin)
          )),
        v && v.length > 0)
      ) {
        const w = v.filter((S) => S) || [];
        console.log(
          "data",
          v.filter((S) => S)
        ),
          chrome.storage.local.get("accessToken", function (S) {
            const C = S.accessToken;
            C && C.trim() !== ""
              ? chrome.runtime.sendMessage(
                  {
                    action: "companiesArray",
                    companiesArray: w,
                    accessToken: C,
                  },
                  (M) => {
                    M.success
                      ? console.log("Response from background:", M)
                      : console.error("Error from background:", M.error);
                  }
                )
              : console.error("Access token is missing or empty.");
          });
      } else return console.log("data is empty", v), "data is empty";
    }
    const X = async (v) => {
      let w;
      v.city
        ? (w = `site:linkedin.com headquarters: "${v.city}" AND "${v.country}" Industry: ${v.industry} AND company size: ${v.companySize}`)
        : (w = `site:linkedin.com headquarters: "${v.country}" Industry: ${v.industry} AND company size: ${v.companySize}`);
      const S = `https://www.google.com/search?q=${encodeURIComponent(
        w
      )}&start=${(v.pagination - 1) * h}&num=${h}`;
      chrome.storage.local.set({
        initSearchValues: v,
        requestData: {},
        error: "",
      });
      const C = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      C.length > 0
        ? (J(!0),
          chrome.tabs.update(C[0].id, { url: S }, () => {
            const M = (q, se) => {
              q === C[0].id &&
                se.status === "complete" &&
                (chrome.tabs.onUpdated.removeListener(M),
                chrome.scripting
                  .executeScript({ target: { tabId: C[0].id }, func: Q })
                  .then((x) => {
                    x[0].result === "data is empty" &&
                      (D("No data found."),
                      setTimeout(() => {
                        J(!1), D("");
                      }, 5e3));
                  }));
            };
            chrome.tabs.onUpdated.addListener(M);
          }))
        : console.log("No active tab found.");
    };
    return (
      K.useEffect(() => {
        if (!p) return;
        const v = () => {
          chrome.storage.local.get(["requestData"], function (S) {
            if (
              (console.log("requestDataSearchForm", S.requestData),
              !S.requestData.resolvedCount || !S.requestData.totalChunks)
            ) {
              console.log("No progress data found.", S.requestData);
              return;
            }
            _(S.requestData.resolvedCount),
              k(S.requestData.totalChunks),
              S.requestData.resolvedCount === S.requestData.totalChunks &&
                (chrome.storage.local.get("error", function (C) {
                  C.error
                    ? D(C.error)
                    : D("Дані успішно завантажені в Discord!");
                }),
                setTimeout(() => {
                  D(""),
                    _(0),
                    k(0),
                    console.log("last log"),
                    chrome.storage.local.set({ requestData: {}, error: "" }),
                    J(!1);
                }, 5e3),
                clearInterval(w));
          });
        };
        v();
        const w = setInterval(v, 1e3);
        return () => {
          clearInterval(w),
            D(""),
            _(0),
            k(0),
            J(!1),
            chrome.storage.local.set({ requestData: {}, error: "" });
        };
      }, [p]),
      f.jsxs(f.Fragment, {
        children: [
          p && R === 0 && !I && f.jsx(ur, { text: "Collecting data..." }),
          !!I && f.jsx("div", { className: "completion-message", children: I }),
          R > 0
            ? f.jsxs("div", {
                children: [
                  f.jsxs("p", {
                    children: ["Обробляється запит ", y, " з ", R],
                  }),
                  f.jsx("progress", { value: y, max: R }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  f.jsxs("form", {
                    className: "form",
                    onSubmit: t(X),
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
                          a.country &&
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
                          a.city &&
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
                          a.industry &&
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
                          a.companySize &&
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
                                onClick: b,
                                children: "Reset",
                              }),
                            ],
                          }),
                          a.pagination &&
                            f.jsx("span", {
                              className: "error-message",
                              children: "This field is required",
                            }),
                        ],
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
                      f.jsx("span", { children: H }),
                      f.jsx("a", {
                        className: "logoutBtn",
                        onClick: W,
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
function Pr() {
  const e = "crm-s.com",
    [s, t] = K.useState(!1),
    [a, l] = K.useState(!1);
  K.useEffect(() => {
    chrome.storage.local.get("accessToken", function (y) {
      const _ = y.accessToken;
      _ && _.trim() !== "" && (console.log("accessToken", _), h(_));
    });
    function h(y) {
      l(!0),
        fetch(`https://${e}/api/v1/auth/me`, {
          method: "GET",
          headers: { Authorization: `Bearer ${y}` },
        })
          .then((_) => {
            if ((l(!1), !_.ok))
              throw new Error(`HTTP error! Status: ${_.status}`);
            return _.json();
          })
          .then((_) => {
            console.log("Authentication successful:", _), t(!0);
          })
          .catch((_) => {
            l(!0), console.error("Authentication error:", _);
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
              t(!1), console.log("Token removed successfully");
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
      a && f.jsx(ur, { text: "Wait a second..." }),
      f.jsx("h1", { children: "Google Scrape" }),
      s
        ? f.jsx(Ur, { logOut: o })
        : f.jsx(Ir, { setIsLoggedIn: t, setIsLoading: l }),
    ],
  });
}
vr.createRoot(document.getElementById("root")).render(
  f.jsx($.StrictMode, { children: f.jsx(Pr, {}) })
);
