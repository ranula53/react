import React from 'react'
import './TopicBox.css'

export default function TopicBox(props) {
  return (
    <div>
        <span className="text">my favourite food is {props.ranula} it price is {props.price}</span>
        {props.children}
    </div>
  )
}
