import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Users,
  filterAdmin,
  filterBanned,
  switchAdmin,
  switchBan,
} from "../../redux/actions/dashboardUsers";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [management, setManagement] = useState({});
  const [filter, setFilter] = useState("users");
  const users = useSelector((state) => state.AllUsers);
  const admins = useSelector((state) => state.UsersAdmin);
  const banneds = useSelector((state) => state.UsersBanned);
  const swap = useSelector((state) => state.Swap);

  function handleClick(user) {
    setManagement(user);
  }

  function applyFilter() {
    if (filter === "admins") {
      return admins;
    }
    if (filter === "banneds") {
      return banneds;
    }
    return users;
  }

  useEffect(() => {
    dispatch(Users());
    dispatch(filterAdmin());
    dispatch(filterBanned());
  }, [dispatch, swap]);

  return (
    <div className={style.dashboardContainer}>
      <div>
        <button value="users" onClick={(e) => setFilter(e.target.value)}>
          Users
        </button>
        <button value="admins" onClick={(e) => setFilter(e.target.value)}>
          Admins
        </button>
        <button value="banneds" onClick={(e) => setFilter(e.target.value)}>
          Banneds
        </button>
        <div>
          {applyFilter()?.map((user, i) => {
            return (
              <button
                value={user.id}
                onClick={() => handleClick(user)}
                key={i}
                className={style.cardUser}
              >
                <img
                  src={user.img}
                  alt="profile picture"
                  className={style.dashboardImg}
                />
                <h4>{user.name}</h4>
              </button>
            );
          })}
        </div>
      </div>
      {management.id ? (
        <div>
          <button onClick={() => setManagement({})}>X</button>
          <h4>{management.name}</h4>
          <div>
            <h4>is admin</h4>
            <button onClick={() => dispatch(switchAdmin(management.id))}>
              x
            </button>
          </div>
          <div>
            <h4>is banned</h4>
            <button onClick={() => dispatch(switchBan(management.id))}>
              x
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
