import { useEventBus } from '@vueuse/core';
import { INotificationOptions } from '~/interfaces/notification.interface.ts';

export function useNotify() {
  function notify(payload: string | INotificationOptions) {
    const notificationsBus = useEventBus<string>('notification')

    const options: INotificationOptions = {
      message: ''
    }
    if (typeof payload === 'string') {
      options.message = payload
    } else {
      Object.assign(options, payload)
    }

    notificationsBus.emit('notify', options)
  }

  return { notify }
}
