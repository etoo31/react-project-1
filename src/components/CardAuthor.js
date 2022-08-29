import React from 'react'

export default function CardAuthor(props) {
  // it consist of only a div with class course-author
  return (
    <div className = 'course-author'>{props.author}</div>
  )
}
