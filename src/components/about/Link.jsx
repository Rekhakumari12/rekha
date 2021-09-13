import React from 'react'
export default function IconLink({path,iconClass}) {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <i className={iconClass}></i>
    </a>
  )
}
