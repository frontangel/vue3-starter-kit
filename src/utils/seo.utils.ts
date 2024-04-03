export function useTitle(newTitle: string, keepBefore?: boolean, separator = ' - ') {
  const beforeTitle = keepBefore ? document.title.split(separator).pop() : ''
  const name = import.meta.env.VITE_APP_NAME
  const arr = [name, beforeTitle, newTitle]
  document.title = arr.filter(t => t).join(separator)
}
