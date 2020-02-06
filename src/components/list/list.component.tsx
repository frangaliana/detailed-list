import * as React from 'react';

import { Text } from '../../common/styled-fonts';

type ListProps = {};

export const List: React.FC<ListProps> = props => {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    fetch('https://swapi.co/api/people', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(items => items.json())
      .then(items => {
        setItems(items);
      });
  }, []);

  return <>{items && items.results && items.results.map((item, key) => <Text key={key}>{item.name}</Text>)}</>;
};
