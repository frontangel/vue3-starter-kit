if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vue3-starter-kit/sw.js', { scope: '/vue3-starter-kit/' })})}