import { useRouter } from 'next/router';

import { Loader, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchAllPersonsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import { StaffList } from '../staff-list';

export const PersonsTab = () => {
  const router = useRouter();
  const { showWatchPageModal } = useAppSelector(selectModal);
  const { data: persons, isLoading } = useFetchAllPersonsQuery(
    { filmId: Number(router.query?.id) || 0 },
    { skip: !showWatchPageModal || !router.query?.id }
  );
  if (isLoading) return <Loader />;
  if (!persons?.length) return <Title>Актеры не указаны</Title>;
  return (
    <StaffList
      persons={[...persons]?.sort((a, b) => a.professionText.localeCompare(b.professionText)) || []}
    />
  );
};
