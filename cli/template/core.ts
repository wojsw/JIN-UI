// 创建组件核心文件模版
import { upperFirst } from "./utils"
export default function genCoreTemplate(name: string) {
  const className = "s-" + name
  const compName = "S" + upperFirst(name)

  const propsTypeName = upperFirst(name) + "Props"
  const propsName = name + "Props"

  const propsFileName = "s-" + name
  return `
import { defineComponent, toRefs } from "vue"
import { ${propsTypeName}, ${propsName} } from "./${name}-type"

export default defineComponent({
    name: "${compName}",
    props: ${propsName},
    setup(props: ${propsTypeName}) {
        return () => {
            <div class="${className}"></div>
        }
    }
})
    `
}
