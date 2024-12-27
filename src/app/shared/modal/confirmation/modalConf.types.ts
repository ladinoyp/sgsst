export interface ModalConf{
    open: boolean
    close: ()=>void
    delete: ()=>void
    title: string
    title2?: string
}