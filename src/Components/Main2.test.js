import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'
import  Main  from './Main'

test('comprobación de nodo', () => {
    const coincidencia = () => (
      // eslint-disable-next-line jsx-a11y/heading-has-content
      <h1></h1>
    );
     render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText('Project Gutenberg ebook')).toBeInstanceOf(Node);
  });