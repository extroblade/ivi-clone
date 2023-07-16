import React from 'react';

interface TooltipChildProps {
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

type TooltipChildPropGetter = <Props extends object>(baseProps: Props) => Props & TooltipChildProps;

export interface TooltipProps {
  text: string;
  children: (props: TooltipChildPropGetter) => React.ReactElement;
}
