import { getGifs } from '../../helpers/getGifs';



describe('Probando getGifs', () => {
    
    test('debe traer 10 gifs ', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    test('debe traer 0 gifs si no recibe parametros', async() => {
        
        const gifs = await getGifs(' ');

        expect( gifs.length ).toBe( 0 );

    })
    

})
