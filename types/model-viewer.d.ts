// types/model-viewer.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

interface HTMLModelViewerElement extends HTMLElement {
  exposure: number;
  // Add other model-viewer properties as needed
}

declare global {
  interface HTMLElementTagNameMap {
    'model-viewer': HTMLModelViewerElement;
  }
}

export {};