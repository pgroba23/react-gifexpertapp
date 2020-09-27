import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem'
import '@testing-library/jest-dom';


describe('Probando GifGridItem', () => {
    
    const title = 'Esto es un titulo';
    const url = 'https://localhost/imagen.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>);

    test('debe mostrar el componente correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener un parrafo con el title ', () => {
        
        const p = wrapper.find('p').text().trim();

        expect( p ).toBe( title );

    });

    test('debe terner la imagen del url y el alt de los props ', () => {
        
        const img = wrapper.find('img');

        const { src, alt } = img.props();

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });


    test('debe utilizar el animate__fadeIn como class ', () => {
        
        const div = wrapper.find('div');
        const { className } = div.props();

        //console.log(className);
        expect( className ).toContain('animate__fadeIn');
        //expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    
    
    
    


});
