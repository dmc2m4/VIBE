import React from "react";
import style from "./Account.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOutGoogle } from "../../LogOutGoogle/LogOutGoogle";

const Account = () => {

	const { logout} = useAuth0();

  const clearCacheData = () => {
    caches.keys().then((name) => {
      name.forEach((name) => {
        caches.delete(name);
      });
    });
  };
	
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <a href='/' className='title'>
            My orders
          </a>
        </li>
        <li>
          <a href='/'>My account</a>
        </li>
				<li
          onClick={() => {
            clearCacheData();
          }}
        >
          {" "}
          <LogOutGoogle />{" "}
        </li>
    
      </ul>
    </div>
  );
};

export default Account;
