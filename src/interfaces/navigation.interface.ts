export interface iMenu {
  text: string
  to?: string
  name?: string
  children?: iMenu[]
  category?: string
  disabled?: boolean
  external?: boolean
}
