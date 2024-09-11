

import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react';

import App from '../(views)/page';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    
  });
});