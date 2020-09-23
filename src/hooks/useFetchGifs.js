import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifs( category )
            .then( img => {
                setState({
                    data: img,
                    loading: false,
                })
            })
    }, [ category ]);
    //     //useEffect es un Hook para que cada vez que se renderize la pagina, las funciones como en este caso getGifs
    //     //se ejecuten solo una vez ante cada renderizacion, sino por cada cambio de estado, react generaria un nuevo
    //     //array de Gifs. Los [] son para indicar que no tiene dependencias, si cambia category se vuelve llamar a get..

    return state;

}


