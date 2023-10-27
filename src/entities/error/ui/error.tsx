import { Title } from '@/shared/ui';

export const Error = ({ error }: { error: unknown }) => {
  return (
    <Title tag={'h1'} style={{ color: 'var(--color-danger)' }}>
      Error{' '}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        error?.status
      }
      :{' '}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        error?.data?.message
      }
    </Title>
  );
};
