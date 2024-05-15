import { Ref } from 'vue'

export interface INotificationOptions {
  message: string
  variant?: 'info' | 'danger' | 'warning' | 'success'
  showClose?: boolean
  delay?: number
  position?: 'left' | 'center' | 'right'
}

export interface INotification extends INotificationOptions {
  id: number
  counter: Ref
  show: Ref
  isDeleted: boolean
  timeout: any
}
