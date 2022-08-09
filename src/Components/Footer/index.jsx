import style from "./index.module.css";
import phone from "../../Img/phone.svg"
import map from "../../Img/map.svg"
import insta from "../../Img/insta.svg"
import fb from "../../Img/fb.svg"
import linkedin from "../../Img/linkedin.svg"
import footer from "../../Img/footer.svg"



export let Footer = () =>{
    return <div className={style.opshi}>
        <div className={style.icongrid}>
            <div className={style.icongrid2}>
         <div><img src={phone}  alt='phone' className={style.phone}/>+374 94 04 00 74</div>
         <div>
        <a href="https://www.google.com/maps/place/23+Tumanyan+St,+Yerevan,
         +Armenia/@40.1843572,44.5143937,21z/data=!4m5!3m4!1s0x406abce2fe27c563:
         0x88e589a8556751a9!8m2!3d40.1843381!4d44.5144135"><img src={map}  alt='map' 
         className={style.map}/>Թումանյան 23 </a>
         </div>
         <div className={style.grid3}><img src={insta}  alt='insta' className={style.insta}/>
         <img src={fb}  alt='phone' className={style.fb}/>
         <img src={linkedin}  alt='phone' className={style.linkedin}/></div>
         </div>
         <div><img src={footer}  alt='footer' className={style.footer}/> </div>
        </div>
        <div className={style.takimas}><p>Web Magnat / Web Development and Training Company LLC</p></div>
      </div>
      }