// register-web-components.ts
/* eslint-disable */

// Ref: WORKAROUND - https://github.com/ionic-team/stencil/issues/1636

import { defineCustomElements, Components, JSX as LocalJSX } from 'ae-d3-stencil/dist/loader';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type StencilProps<T> = { [P in keyof T]: Omit<T[P], "ref"> };

type ReactProps<T> = {
  [P in keyof T]: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>
};

type StencilToReact<
  T = LocalJSX.IntrinsicElements,
  U = HTMLElementTagNameMap
  > = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact { }
  }
}
defineCustomElements(window);
