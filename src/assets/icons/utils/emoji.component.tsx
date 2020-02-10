import * as React from 'react';

type EmojiProps = {
  label: string;
  symbol: string;
};

export const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => (
  <span className="emoji" role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
    {symbol}
  </span>
);
