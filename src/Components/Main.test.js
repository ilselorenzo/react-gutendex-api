import React from 'react'
import { render, screen } from '@testing-library/react'
import  Main  from './Main'

describe('Main', () => {
 it('renders appropriately', () => {
   render(<Main />)
   expect(screen.getByText(/Populary Books/i)).toBeInTheDocument()
 })
});