import React from 'react'
import './CopyMessage.css'

const CopyMessage = (props) => {

  return (
    <div
      className="copy_message"
      style={{ display: props.value ? "block" : "none" }}
    >
      Copied to Clipboard!
    </div>
  )
}

export default CopyMessage