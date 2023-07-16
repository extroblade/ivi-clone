import React, { useLayoutEffect, useRef, useState } from 'react';
import { Portal } from '@/UI/Tooltip/Portal';
import styles from './Tooltip.module.scss';
import { TooltipProps } from '@/UI/Tooltip/Tooltip.props';

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tooltipEl = tooltipRef.current;

    if (!anchorEl || !tooltipEl) {
      return;
    }

    const anchorRect = anchorEl.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    const TOP_SPACE = 5;

    setPosition({
      top: anchorRect.top - tooltipRect.height - TOP_SPACE,
      left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
    });
  }, [anchorEl]);

  const propsGetter = (baseProps: Record<string, unknown>) => {
    const { onMouseEnter, onMouseLeave } = baseProps;

    return {
      ...baseProps,
      onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
        if (typeof onMouseEnter === 'function') {
          onMouseEnter(e);
        }
        setAnchorEl(null);
      },
      onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
        if (typeof onMouseLeave === 'function') {
          onMouseLeave(e);
        }
        setAnchorEl(e.currentTarget);
      },
    };
  };

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            ref={tooltipRef}
            className={styles.tooltip}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {text}
          </div>
        </Portal>
      )}
      {children(propsGetter as never)}
    </>
  );
};
