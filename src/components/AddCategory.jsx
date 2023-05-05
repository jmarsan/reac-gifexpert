import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => { se puede desesctruturar el event como se vé abajo
    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue( target.value);
    }

    const onSubmit = ( event ) => {
        // Para que no se recargue la página al mandar el formulario
        event.preventDefault();
        // Este if es para asegurarnos que el input va a tener mas de un caracter
        if( inputValue.trim().length <= 1 ) return;
        /** Añade lo del input a las categorias.
         *  Con un callback de categories, el input value, desestructuración del categories
         *  Lo que hace es definir el valor de categories al nuevo array
         */
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        // Vaciamos el input
        setInputValue('');

    }

    return (
        // <form onSubmit={ (event) => onSubmit(event)}> Como sólo hay un argumento se puede resumir
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) } Como sólo hay un argumento se puede resumir
                onChange={ onInputChange }
            />
        </form>
    )
}