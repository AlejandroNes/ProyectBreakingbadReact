import { useState } from "react"
import { Boton } from "./components/Boton"
import { Informacion } from "./components/Informacion"
import { Titulo } from "./components/Titulo"

export const App = () => {

    const [aleatorio, setAleatorio] = useState(1)

    //funciones
    const numeroAleatorio = () => {
        const numRandom = Math.ceil(Math.random() * 20);
        setAleatorio(numRandom)
    }

    return (
        <div>
            <Titulo />
            <Informacion aleatorio={aleatorio} />
            <Boton numeroAleatorio={numeroAleatorio} />
        </div>
    )
}
