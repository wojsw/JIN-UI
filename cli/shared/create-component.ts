import { ensureDirSync, writeFileSync } from "fs-extra"
import { resolve } from "path"
import { lightBlue, lightGreen } from "kolorist"
import genCoreTemplate from "../template/core"

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

export function createComponentInfo(meta: ComponentMeta) {
  const { name } = meta

 

  // 拼接组件目录
  const componentDir = resolve("../src", name)

  const compSrcDir = resolve(componentDir, "src")
  const styleDir = resolve(componentDir, "style")
  const testDir = resolve(componentDir, "test")

  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  // 核心文件
  const coreFilePath = resolve(compSrcDir, name) + '.tsx'
  writeFileSync(coreFilePath, genCoreTemplate(name))

  console.log(
    lightBlue(
        `✅${name}目录创建生成`
    )
  );
  console.log(
    lightBlue(
        `✅组件目录：${componentDir }`
    )
  );
}
