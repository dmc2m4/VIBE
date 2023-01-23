import React from 'react'
import { Link } from 'react-router-dom'
import style from './Account.module.css'

const Account = () => {
	return (
		<div className={style.menu} >
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<Link to="/createProduct">
						<a href="/">My account</a>
					</Link>
				</li>
				<li>
					<Link to="/">
						<a href="/">Sign out</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Account