import * as React from 'react';

import { Text } from '../../common/styled-fonts';
import { getCharacters } from './paginated-list.api';

type ListProps = {};

export const PaginatedList: React.FC<ListProps> = props => {
  const [items, setItems] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getCharacters()
      .then(response => {
        setItems(response);
      })
      .catch(error =>
        setError(() => {
          throw error;
        })
      );
  }, []);

  return <>{items && items.results && items.results.map((item, key) => <Text key={key}>{item.name}</Text>)}</>;
};
