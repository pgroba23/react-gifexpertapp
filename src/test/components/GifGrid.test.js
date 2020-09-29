import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Pruebas sobre GifGrid', () => {
    
    const category = 'One Punch';

    test('GifGrid debe hacer match con su snapshot ', () => {

        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category }/> );
       
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar items cuando se cargan imagenes useFetchGifs ', () => {
        
        const gifs =[ {
            id: 'ABC',
            title: 'texto',
            url: 'https://localhost/probandoimagen.jpg',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();

    })
    
    


})

