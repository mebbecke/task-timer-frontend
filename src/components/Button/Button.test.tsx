import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders startIcon when provided', () => {
    render(
      <Button startIcon={<span data-testid="icon">Icon</span>}>Text</Button>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies disabled prop', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('passes additional props to button', () => {
    render(<Button aria-label="custom-label">Label</Button>);
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'custom-label',
    );
  });

  it('renders with different variants and sizes', () => {
    render(
      <Button variant="primary" size="icon">
        Primary
      </Button>,
    );
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });
});
