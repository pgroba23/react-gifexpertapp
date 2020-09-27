import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe('Probando <AddCategory />', () => {
    
    const setCategories = () => {};

    const wrapper = shallow( <AddCategory setCategories={ setCategories }/> )

    test('debe retornar un AddCategory', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
});


