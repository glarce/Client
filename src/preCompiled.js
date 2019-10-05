;(async () => {
  const { get } = await import('axios')

  const App = import('./app')
  let config = get('./config.js')

  await Promise.all([App, config])
  config = config.data

  const app = new App(config)
  app.init()
})