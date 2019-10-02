import App from './app.js'

// Main code goes here
;(async () => {
  const data = await import('./app.json')
  const app = new App(data)
  await app.init()
})()
