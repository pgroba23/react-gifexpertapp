import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe('Probando <AddCategory />', () => {
    
    //const setCategories = () => {};
    const setCategories = jest.fn(); //en si es una funcion como antes pero puedo chequear como fue usada

    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> )

    beforeEach( () => {
        jest.clearAllMocks();//si tuvieramos alguna simulacion o mock de algo, para que se limpie
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    })

    test('debe retornar un AddCategory', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe cambiar caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola capoo';
        input.simulate('change',{ target: { value } });

        const input2 = wrapper.find('p');
        expect( input2.text().trim() ).toBe(value);

    });

    test('NO debe postear info con el submit ', () => {

        //dispara el submit
        wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });

        expect( setCategories ).not.toHaveBeenCalled();//esperamos que no haya sido llamada (sacando el not es el positivo)
        
    })
    
    
    
});


