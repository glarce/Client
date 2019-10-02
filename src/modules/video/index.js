let videoConfig = {}

export function loadModuleConfig(config) {
  videoConfig = config
}

export default class Video {
  constructor(config) {
    this.config = config

    const { id, vids, width, height } = config.videoData

    this.element = document.createElement('a-video')

    this.element.setAttribute('id', `videoScreen${id}`)
    this.element.setAttribute('rotation', '-90 0 0')
    this.element.setAttribute('src', `#vid${id}`)
    this.element.setAttribute('autoplay', true)
    this.element.setAttribute('width', width)
    this.element.setAttribute('height', height)

    this.assets = document.createElement('video')
    
    this.assets.setAttribute('id', `vid${id}`)
    this.assets.setAttribute('preload', 'auto')
    this.assets.setAttribute('class', 'vidh')
    this.assets.setAttribute('loop', true)
    this.assets.setAttribute('webkit-playsinline', true)
    this.assets.setAttribute('playsinline', true)
    this.assets.setAttribute('controls', true)

    for (const video of vids) {
      const source = document.createElement('source')

      source.setAttribute('type', `video/${video.extension}`)
      source.setAttribute('src', video.url)

      this.assets.appendChild(source)
    }
  }
}