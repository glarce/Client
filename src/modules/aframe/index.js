import stringToHTML from '../../functions/stringToHTML'

export function loadModuleConfig () {}

export default class AFrame {
  constructor (data) {
    this.config = data

    const { js, assets } = this.config.aframeData
    this.assets = stringToHTML(assets)
    if (!this.assets) this.assets = document.createElement('div')

    // eslint-disable-next-line no-new-func
    this.config.func = new Function(js)
  }

  get element () {
    setTimeout(() => this.config.func(), 10)
    return stringToHTML(this.config.aframeData.aframe)
  }
}
