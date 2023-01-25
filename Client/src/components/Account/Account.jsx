import React from 'react'
import style from './Account.module.css'
import { Link } from 'react-router-dom'

const Account = ({handleToggle}) => {
  return (
   	<div className={style.menu} >
		<ul>
			<li>
				<Link to='/'>My orders</Link> 
			</li>
			<li>
				<Link to=''>My account</Link>
			</li>
			<li>
			 <Link to="/createProduct" className={style.textLink} onClick={handleToggle}>Create Product </Link>
			</li>
			<li>
				<a href="/">Sign out</a>
			</li>
		</ul>
	</div>
  )
}

export default Account