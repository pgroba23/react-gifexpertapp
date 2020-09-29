import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log(images);

   
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}