import * as inquirer from "inquirer"
import { red } from "kolorist"
import {createComponentInfo} from '../shared/create-component';

const CREATE_TYPE = ["component", "lib-entry"]

export async function onCreate(args = { type: "" }) {
  let { type } = args

  if (!type) {
    const result = await inquirer.prompt([
      {
        name: "type",
        type: "list",
        message: "（必填）请选择创建类型",
        choices: CREATE_TYPE,
        default: 0
      }
    ])
    console.log('result', result);
    
    type = result.type
  }

  if (!CREATE_TYPE.includes(type)) {
    console.log(
      red(
        `当前类型仅支持 ${CREATE_TYPE.join(",")}，您输入的是${type}, 请重新选择！`
      )
    )
    return onCreate()
  }

  try {
    switch(type){
        case 'component':
            const info = await inquirer.prompt([
                {
                    name:'name',
                    type: 'input',
                    message: '请输入组件name',
                    validate(value: string) {
                        if (value.trim() === '') {
                            return '组件name不能为空'
                        }
                        return true;
                    }
                },
                {
                    name:'title',
                    type: 'input',
                    message: '请输入组件中文名称， 将用作文档列表中表示',
                    validate(value: string) {
                        if (value.trim() === '') {
                            return '组件中文名称不能为空'
                        }
                        return true;
                    }
                },
                {
                    name:'category',
                    type: 'input',
                    message: '请输入组件文档，将用于分档列表分类',
                    validate(value: string) {
                        if (value.trim() === '') {
                            return '组件中文名称不能为空'
                        }
                        return true;
                    }
                }
            ])
            // 创建组件文件
            createComponentInfo(info)
            break;
        default:
            break
    }
  } catch (error) {
    
  }
}
