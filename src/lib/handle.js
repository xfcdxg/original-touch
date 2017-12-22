import mockWindow from 'mock-window'
import { bind, unbind } from './'

const onMouseDown = e => {

}

const onStart = e => {

}

export default (
  (el, opts) => {
    const { document } = mockWindow()

    if (!document) return

    if ('ontouchstart' in document) {
      bind('touchstart', onStart)
    } else {
      bind('mousedown', onMouseDown)
    }
  }
)
