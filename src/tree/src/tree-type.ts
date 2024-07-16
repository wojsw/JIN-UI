import { ExtractPropTypes, PropType } from "vue";

export const treeProps = {
    data: Object as PropType<Array<IInnerTreeNode>>,
    required: true
} as const

export interface ITreeNode {
    label: string,
    id?:string,
    children?: ITreeNode[],

    selected?: boolean,
    checked?: boolean,
    expanded?: boolean,

    disableSelect?: boolean,
    disableCheck?: boolean,
    disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
    parentId?: string,
    level?: number,
    isLeaf?: boolean
}