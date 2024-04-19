import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
export default {
  themeConfig: {
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "按钮", link: "/components/Button" },
          { text: "Form 表单", link: "/components/Form" },
          { text: "Test", link: "/components/Test" }
        ]
      }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
}
