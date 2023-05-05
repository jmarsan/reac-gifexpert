import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { usefetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    /** 3.+ Custom Hook useFetchGifs. 
     *  En vez de desestructurar un array, desestructuramos un objeto {}
     *  para regresesar lo que queramos del custom hook.
     */
    const{ images, isLoading } = usefetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            { /** 4.+ Mostrar mensaje "cargando..." */
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } /** 2.+ Esparcir properties */
                        />
                    ))
                }
            </div>
        </>
    )
}

/** Apuntes
 *  1.- Cada vez que React encuentra un cambio en el componente, lo vuelve a ejecutar para redibujarlo,
 *      pero hay ciertas funciones especiales que pueden sobrevivir y mantener el estado (useEffect). 
 *      "useEffect" sirve para disparar efectos secundarios, que son procesos que ejecutamos cuando algo ocurra
 *  2.- Esparcir las properties -> con el operador spread mandamos todas las propiedades de la imagen como 
 *      properties del componente.
 *  3.- Custom Hooks -> Un hook que creamos de cero, van a tener relación con algún estado o para reutilizar
 *      funcionalidades, nos ayudará a ahorrar código o lógica en un componente. Lo podremos reutilizar en 
 *      otros hooks, DRY don't repeat yourself.
 *  4.- Con este ternario: 
 *          "isLoading
            ? ( <h2>Cargando...</h2> )
            : null"
        si isLoading es true muestra el h2, si no, no pasa nada ya que :null en react no se renderiza. Pero 
        es más elegante y claro de la manera en que está implementado, es un if corto,
        si isLoading es true, ejecuta lo que hay despues del && que es un and lógico
 */