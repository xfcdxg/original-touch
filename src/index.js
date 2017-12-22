import handle from './lib/handle'
import mockWindow from 'mock-window'

/**
 * @func
 *
 * @param el   {DOMElement}
 * @param opts {Object}
 *    @param handleStart {Function}
 *    @param handleMove  {Function}
 *    @param handleEnd   {Function}
 */

const _touch = (el, opts) => {
  handle(el, opts)
}

mockWindow({ _touch })

export default _touch
