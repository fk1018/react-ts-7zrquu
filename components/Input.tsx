import React from 'react';
import { useListingsContext } from '../context/ListingsProvider';
import { Flyout } from './FlyOut';

export default function Input(props) {
  const listings = useListingsContext();

  return (
    <Flyout>
      <Flyout.Input />
      <Flyout.List>
        {listings.map((listing) => {
          return (
            <Flyout.Item key={listing.id} value={listing.name}>
              {listing.name}
            </Flyout.Item>
          );
        })}
      </Flyout.List>
    </Flyout>
  );
}
