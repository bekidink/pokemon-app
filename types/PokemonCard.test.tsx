
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import PokemonCard from '@/components/pokemon/PokemonCard';
import { useRouter } from 'expo-router';


jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

const mockPokemon = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
};

describe('PokemonCard', () => {
  it('renders the pokemon name and id correctly', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    
       expect(screen.getByText(/bulbasaur/i)).toBeTruthy();
    
      expect(screen.getByText(/001/)).toBeTruthy();
  });

  it('navigates to the detail screen on press', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<PokemonCard pokemon={mockPokemon} />);
    
    const card = screen.getByRole('button'); 
    fireEvent.press(card);

    expect(mockPush).toHaveBeenCalledWith('/pokemon/bulbasaur');
  });
});