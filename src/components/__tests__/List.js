import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List, {inputPlaceholder} from '../List';

describe('Lista', () => {

    describe('adicionando itens', () => {

        test('Itens devem ser adicionados', ()=>{
            const { getByText, getByPlaceholderText, getByTestId } = render(
                <List />
            );
            const input = getByPlaceholderText(inputPlaceholder);
            const form = getByTestId('form');

            fireEvent.change(input, {
                target: { value: 'abacaxi'}
            });
            fireEvent.submit(form);

            const firstItem = getByText('abacaxi');
            expect(firstItem).toBeDefined();
            expect(firstItem.tagName).toBe('LI');
            expect(input.value).toBe('');

            fireEvent.change(input, {
                target: { value: 'uva'}
            });
            fireEvent.submit(form);

            const secondItem = getByText('uva');
            expect(secondItem).toBeDefined();
            expect(secondItem.tagName).toBe('LI');
            expect(secondItem.parentNode.childElementCount).toBe(2);
            expect(input.value).toBe('');
        });
    });
});
