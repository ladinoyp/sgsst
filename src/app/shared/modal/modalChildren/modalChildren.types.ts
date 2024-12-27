import { ReactNode } from "react"

export interface ModalChildrenTypes{
    open: boolean
    close: ()=>void
    title: string
    title2: string
    save?: ()=>void
    children?: JSX.Element|ReactNode
}