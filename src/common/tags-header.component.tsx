import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme } from '../app.theme';

type TagsHeaderProps = {
  theme: Theme;
};

export const TagsHeader: React.FC<TagsHeaderProps> = ({ theme: { palette } }) => (
  <>
    <Helmet>
      <meta name="theme-color" content={palette.background} />
    </Helmet>
  </>
);
