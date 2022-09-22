import React from 'react';
import { useListingsContext } from '../context/ListingsProvider';

const FlyoutContext = React.createContext(null);
const useFlyoutContext = () => React.useContext(FlyoutContext);

function Flyout(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyoutContext.Provider value={{ open, toggle, value, setValue }}>
      {props.children}
    </FlyoutContext.Provider>
  );
}

function Input(props) {
  const { toggle, value, setValue } = useFlyoutContext();
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter an address, city ,or ZIP code"
      {...props}
    />
  );
}

function List(props) {
  const { open } = useFlyoutContext();
  return (
    open && (
      <div className="flyout-list">
        <ul>{props.children}</ul>
      </div>
    )
  );
}

function Item(props) {
  const { setValue } = useFlyoutContext();
  return (
    <li
      onMouseDown={() => {
        setValue(props.value);
      }}
      className="flyout-list-item"
    >
      {props.children}
    </li>
  );
}

Flyout.Input = Input;
Flyout.List = List;
Flyout.Item = Item;

export { Flyout };
