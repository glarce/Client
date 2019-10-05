require('./modules/video')
require('./modules/aframe')

export default class App {
  constructor(config) {
    this.config = config
  }

  async init() {
    const { name, codes, modules } = this.config
    document.getElementsByTagName('title')[0].innerText = name

    for (const module of modules) {
      const { loadModuleConfig } = require(`./modules/${module.name}`)
      loadModuleConfig(this.config)
    }
    
    for (const code of codes) {
      const module = require(`./modules/${code.contentType}`)
      const marker = new module.default(code)

      const aMarker = document.createElement('a-marker')
      aMarker.setAttribute('id', `marker${code.id}`)
      aMarker.setAttribute('type', 'barcode')
      aMarker.setAttribute('value', code.scan)
      aMarker.appendChild(marker.element)

      document.getElementById('assets').appendChild(marker.assets)
      document.getElementById('scene').appendChild(aMarker)
    }
  }
}
