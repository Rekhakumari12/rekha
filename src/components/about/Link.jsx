import React from 'react'
export default function IconLink({ path, iconClass }) {
	console.log(path)
	return (
		<>
			{
				<a href={path} target="_blank" rel="noreferrer" style={{ color: path === "rekhakumari44400@gmail.com" ? 'black' : "" }}>
					<i className={iconClass}></i>
				</a>
			}
		</>

	)
}
