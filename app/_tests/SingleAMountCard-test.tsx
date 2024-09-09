

import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react';

import App from '../page';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    
  });
});