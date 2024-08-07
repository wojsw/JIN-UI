import { Command } from "commander"
import { onCreate } from "../commmand/create"

const cmd = new Command()

cmd
  .command("create")
  .description("创建一个组件模版或配置文件")
  .option("-t --type <type>", "创建类型，可选值：component")
  .action(onCreate)

cmd.parse()
