export interface iMenu {
  text: string
  to: string
  children?: iMenu[]
  disabled?: boolean
}
