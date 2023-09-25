import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/shared/store';

export const renderWithRedux = (component: JSX.Element) => {
  return render(<Provider store={store}>{component}</Provider>);
};