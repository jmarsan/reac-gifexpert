import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const usefetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
        const getImages = async() => {
            const newImages = await getGifs( category );
            setImages(newImages);
            setIsLoading(false)
        }
        
        useEffect( () => {
            getImages();
        }, [])

    return{ /** 2.+ */
        images,
        isLoading
    }

}

/** 1.- El archivo es .js porque no estámos devolviendo ningún jsx, esto tiene la ventaja de que se 
 *  podrían exportar a reactNative directamente.
 *  2.- return{ images: images, isLoading: isLoading }, se queda como está arriba ya que en ECMAScript 6 tenemos
 *  una propiedad que apunta al mismo nombre de una variable se puede resumir.
*/