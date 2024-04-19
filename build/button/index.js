import { defineComponent as l, toRefs as u, createVNode as p } from "vue";
const r = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, n = /* @__PURE__ */ l({
  name: "SButton",
  props: r,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: a,
      disabled: s
    } = u(t);
    return () => {
      const d = e.default ? e.default() : "按钮";
      return p("button", {
        class: `s-btn s-btn--${o.value} s-btn--${a.value}`,
        disabled: s.value
      }, [d]);
    };
  }
}), f = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  f as default
};
