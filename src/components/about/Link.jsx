import React from 'react'
export default function IconLink({path,iconClass}) {
  return (
    <>
    
    {!path==="rekhakumari44400@gmail.com"?
    <a href={path} target="_blank" rel="noreferrer">
      <i className={iconClass}></i>
    </a>:
    <a href="mailto:rekhakumari44400@gmail.com" style={{color:'black'}}>
      <i 
    className={iconClass}></i></a>}
    </>
    
  )
}
