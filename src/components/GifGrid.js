import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

   
    return (
        <>
            <h2 className="animate__jello">{ category }</h2>
            {
                loading && <p className="animate__flash">Loading..</p>
            }
            <div className="card-grid">
                    {
                        images.map( img => 
                            <GifGridItem 
                                key= { img.id }
                                {...img} //envia el contenido como parametro
                            />
                        )
                    }
            </div>
        </>
    )
}
