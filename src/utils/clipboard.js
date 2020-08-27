import { Notification } from 'element-ui'
import Clipboard from 'clipboard'

function clipboardSuccess () {
  Notification.success('复制成功')
}

function clipboardError () {
  Notification.success('复制失败')
}
/**
 *@param text {复制的内容}
 *@param event {事件}
 *@param options
 */
export default function handleClipboard (
  text,
  event,
  options = { showMessage: true }
) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })

  clipboard.on('success', e => {
    console.log(e)
    if (options.showMessage) {
      clipboardSuccess()
    }
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })

  clipboard.on('error', () => {
    if (options.showMessage) {
      clipboardError()
    }
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })

  clipboard.onClick(event)
}
