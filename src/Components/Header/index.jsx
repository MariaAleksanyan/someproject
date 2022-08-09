import style from "./index.module.css";
import logo from "../../Img/logo.svg";
import { Route } from "react-router-dom";

export let Header = () =>{
  return <div className={style.opshidiv}>
    <div className={style.header}>
   <div> <img src={logo}  alt='Home' className={style.logo}/></div>
     <div><p>Մեր Մասին</p></div>
     <div><p>Դասընթացներ <sup>new</sup></p></div>
     <div><p>Հետադարձ Կապ</p></div>
     <div><button>Գրանցում</button></div>
    </div>
    </div>
    }