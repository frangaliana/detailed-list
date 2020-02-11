import * as React from 'react';
import { createSvgIcon } from './utils';

export const AvatarIcon = createSvgIcon(
  '0 0 512 512',
  <>
    <path d="M471 201H74v18l163 29v260h72V248l162-29z" />
    <path d="M56 257V39h36a18 18 0 100-36H20a18 18 0 100 36h18v128c-10 4-18 13-18 25v72a27 27 0 0032 27L38 436l156 72h25c0-167-90-241-163-251" />
    <path d="M470 165C462 62 386 3 273 3S83 62 75 165h395zm-71-89c0 9-3 18-11 25a38 38 0 01-51 0c-7-7-11-16-10-25 20 16 51 16 72 0M489 257c-72 10-162 84-162 251h24l156-72-18-179z" />
  </>
);
