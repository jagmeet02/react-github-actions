import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the name', () => {
    render(<App />)
    expect(screen.getByText('Jagmeet Singh')).toBeInTheDocument()
  })
})
