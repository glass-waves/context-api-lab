/*
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '../../state/ThemeProvider';


describe('App component', () => {
    afterEach(() => cleanup());
    it('renders App', async () => {
        const { asFragment } = render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );
        await screen.findAllByTestId('listitem');
        expect(asFragment()).toMatchSnapshot();
    });
});
