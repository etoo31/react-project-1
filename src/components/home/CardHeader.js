import React from 'react'

export default function CardHeader(props) {
  /* it consists of an h5 header */
  return (
    <h5 className="card-title">{props.title}</h5>
  )
}
