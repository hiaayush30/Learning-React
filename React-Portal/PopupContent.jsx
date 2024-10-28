import { createPortal } from 'react-dom'

function PopupContent({copied}) {
  return createPortal(
    <div style={{position:'absolute',bottom:'3rem'}}>
      {copied ? 'Copied to Clipboard':''}
    </div>
  ,document.querySelector('#popup'))
}

export default PopupContent
