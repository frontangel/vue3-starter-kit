import { DirectiveBinding, ObjectDirective, Ref } from 'vue';
import { useWindow } from '~/utils/window.utils.ts';

interface BindingValue {
  callback: (hasChildren: boolean) => void
  modelValue: Ref<boolean>
}

const detectChildren: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<BindingValue>) {
    const { value } = binding
    const callback = value.callback

    const { observeTeleport } = useWindow()
    const observer = observeTeleport('', callback, el) || null
    if (!observer) return

    (el as any).__vueMutationObserver__ = observer
    callback(el.children.length > 0)
  },

  unmounted(el: HTMLElement) {
    if ((el as any).__vueMutationObserver__) {
      (el as any).__vueMutationObserver__.disconnect()
      delete (el as any).__vueMutationObserver__
    }
  }
}

export default detectChildren
