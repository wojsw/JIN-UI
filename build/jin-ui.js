import { defineComponent as u, toRefs as d, createVNode as r } from "vue";
const i = {
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
}, n = /* @__PURE__ */ u({
  name: "SButton",
  props: i,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: s,
      disabled: a
    } = d(t);
    return () => {
      const l = e.default ? e.default() : "按钮";
      return r("button", {
        class: `s-btn s-btn--${o.value} s-btn--${s.value}`,
        disabled: a.value
      }, [l]);
    };
  }
}), p = {
  install(t) {
    t.component(n.name, n);
  }
}, c = [p], b = {
  version: "0.0.1",
  install(t) {
    c.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  b as default
};
