import { IInnerTreeNode, ITreeNode } from "./tree-type"
export function generateInnerTree(tree: ITreeNode[]): IInnerTreeNode[] {
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode

    if (cur.children) {
      return prev.concat(o, generateInnerTree(cur.children))
    } else {
        return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}

const tree = [
  {
    label: "docs",
    id: "docs"
  },
  {
    label: "packages",
    id: "packages",
    expanded: true,
    children: [
      {
        label: "plugin-vue",
        id: "plugin-vue"
      },
      {
        label: "vite",
        id: "vite",
        expanded: true
      }
    ]
  }
]
console.log(generateInnerTree(tree));
