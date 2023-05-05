import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
/** Usando el archivo de barril, sustituimos las dos filas anteriores por: */
import { AddCategory, GifGrid } from './components';

 export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        // categories.push('Dexter'); Esto rompe el estado de React
        // console.log(newCategory)
        if( categories.includes(newCategory) ) return;
        /** Esta es la forma recomendada por este.
         *  Desesctructuras el array con ...Array y luego añades otra categoria 'Dexter'
         *  o al revés
         */
        setCategories( [ newCategory, ...categories] );
        // setCategories( cat => [...cat, 'Dexter'] );
        
    }

    // console.log(categories);

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) }
            />

            {/* Listado de Gifs */}
            <button onClick={ onAddCategory }>Agregar</button>
            {/* <ol> */}
                {/* categories es un array .map() permite recorrerlo y regresar algo nuevo */}
                    {/* { categories.map( category => {
                        return (
                            <div key={ category }>
                                <h3>{ category }</h3>
                                <li>{ category }</li>
                            </div>
                        )
                    })  */}
                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    ))
                }
                {/* <li>123</li> */}
            {/* </ol> */}
            {/* Gif Item */}

        </>
    )
 }