export function useWindow() {
  const getColorScheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const setDataTheme = (value: 'dark' | 'light' | 'system') => document.documentElement.setAttribute('data-theme', value)
  const applyTheme = (value: 'dark' | 'light' | 'system') => {
    const payload = value === 'system' ? getColorScheme() : value
    setDataTheme(payload)
  }

  const observeTeleport = (elementId: string, externalCallback: Function) => {
    const targetNode = document.getElementById(elementId);
    if (!targetNode) return

    const config = { childList: true };

    const callback = function(mutationsList: any[]) {
      for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          externalCallback(!!mutation.addedNodes.length)
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    return observer
  }

  return {
    getColorScheme,
    setDataTheme,
    applyTheme,
    observeTeleport
  }
}
