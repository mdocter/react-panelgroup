// Type definitions for react-panelgroup 1.0.10
// Project: https://github.com/DanFessler/react-panelgroup, http://www.danfessler.com
// Definitions by: Quentin Golsteyn <https://github.com/qgolsteyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import * as React from 'react';

declare module 'react-panelgroup' {
  /**
   * Interface used to define a number of options for a panel.
   */
  export interface PanelWidth {
    size?: number;
    maxSize?: number;
    minSize?: number;
    resize?: 'fixed' | 'dynamic' | 'stretch';
    snap?: number[];
  }

  export interface PropTypes {
    spacing?: number;
    borderColor?: string;
    panelColor?: string;
    direction?: 'row' | 'column';
    panelWidths?: Array<PanelWidth | null>;
    onUpdate?: (data: PanelWidth) => void;

    // Callback fired when resizing started, receives state of panels
    onResizeStart: (panels: any) => void;

    // Callback fired when resizing ends, receives state
    onResizeEnd: (panels: any) => void;
  }

  /**
   * React component that allows for the creation of resizable panels.
   */
  export default class PanelGroup extends React.Component<PropTypes> {}
}
