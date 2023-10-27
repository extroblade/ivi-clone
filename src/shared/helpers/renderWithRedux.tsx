import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/shared/store';

export const renderWithRedux = (component: ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};
