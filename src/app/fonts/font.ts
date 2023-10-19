import localFont from 'next/font/local';

export const iviSans = localFont({
  src: [
    {
      path: './iviSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './iviSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './iviSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './iviSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
