import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import loginUser from "../../redux/actions/userLogin";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import Carousel from '../../components/Carousel/Carousel'
import { useSelector } from "react-redux";
import ImagenHome from "../../components/ImagenHome/ImagenHome";

const Home = () => {

  const dispatch = useDispatch()
  const { user, isAuthenticated } = useAuth0();

  useEffect(()=>{
    if(user){
      dispatch(loginUser(user))
    }
  },[dispatch,user])

  return (
    <div className={style.container}>
      <Carousel/>
      <ImagenHome/>
      <ContainerProduct />
      <Pagination />
      
    </div>
  );
};

export default Home;
