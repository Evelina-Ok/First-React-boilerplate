import style from "./Main.module.scss"
import { Greetings } from "../Greetings/Greetings.jsx"


export const Main = () => {
    return (
    <>
    <main className={style.mainStyle}>
        <h1></h1>

        <h3>
        <Greetings name=" Lucy"/>
        <Greetings name=" Brian"/>
        <Greetings name=" Saoirse"/>
        </h3>
        
    </main>
    </>
    )
}