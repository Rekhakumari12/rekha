import React from 'react'
export default function IconLink({ path, iconClass }) {
  // console.log(path)
  return (
    <>
      {
        <a href={'mailto:' + path} target="_top" rel="noreferrer" style={{ color: path === "rekhakumari44400@gmail.com" ? 'black' : "" }}>
          <i className={iconClass}></i>
        </a>
      }
    </>

  )
}
