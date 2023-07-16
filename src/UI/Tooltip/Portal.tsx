import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export function Portal({ children }: { children: React.ReactNode }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    const portalRoot = document.getElementById('tooltip-root')!;
    return ReactDOM.createPortal(children, portalRoot);
  } else {
    return null;
  }
}
