import React from 'react'
import style from './Account.module.css'

const Account = () => {
  return (
   	<div className={style.menu} >
		<ul>
			<li>
				<a href="/" className="title">My orders</a>
			</li>
			<li>
				<a href="/">My account</a>
			</li>
			<li>
				<a href="/">Sign out</a>
			</li>
		</ul>
	</div>
  )
}

export default Account