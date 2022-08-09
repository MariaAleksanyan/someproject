import style from "./index.module.css";
import bigpic from "../../Img/bigpic.svg"


export let Home = () => {
    return <div>
    <div className={style.grid}>
        <div>
        <p className={style.title}>WEB MAGNAT</p>
        <p className={style.text}>Web Magnat-ը վեբ կայքերի պատրաստման և ուսուցման կենտրոն է։
             Մենք շուկայում ենք արդեն 4 տարի և ունենք փորձառու, շուկայի
            պահանջներին բավարարող առաջադեմ մասնագետներ, ովքեր յուրաքանչյուրին ցուցաբերում 
             են անհատական մոտեցում:</p>
             </div>
             <div>
             <img src={bigpic}  alt='bigpic' className={style.bigpic}/>
             </div>
             </div>
             <div className={style.dasyntacner}>
             <h1>Դասընթացներ</h1>
             </div>
             <div className={style.grid2}>
                <div>
                <h2>JAVASCRIPT</h2>
                <p>
                Նրանց, ովքեր ունեն HTML / CSS / բազային գիտելիքներ
                 և ցանկանում են ձեռք բերել ամենաակտուալ ծրագրավորման լեզուներից մեկը:
                </p>
                </div>
                <div>
                <h2>REACT NATIVE</h2>
                <p>
                Նրանց, ովքեր ցանկանում են 
                ստեղծել մոբայլ հավելվածներ IOS և Android պլատֆոռմների համար:
                </p> 
                </div>
                <div>
                <h2>REACT JS</h2>
                <p>
                Նրանց, ովքեր ունեն HTML / CSS / JavaScript բազային գիտելիքներ և 
                ցանկանում են ձեռք բերել ավելի խորքային գիտելիքներ 
                ու դառնալ ավելի պահանջված ու բարձր վարձատրվող մասնագետ։
                </p> 
                </div>
                <div>
                <h2>Python Django</h2>
                <p>
                Նրանց, ովքեր ցանկանում են դառնալ ակտուալ Backend ծրագրավորող:
                </p> 
                </div>
             </div>
             </div>
             
        }