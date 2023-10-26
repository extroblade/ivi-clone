import { useTranslation } from 'react-i18next';

import { Carousel } from '@/entities/carousel';
import { ActivateCertificateButton, PromotionButton } from '@/features/buttons/profile/buttons';
import { useFetchAllFilmsQuery } from '@/shared/services';
import { Description, List, Text, Title } from '@/shared/ui';
import { CardWithProps } from '@/widgets/cards';
import { Promo } from '@/widgets/promo';
import { TopTenCarousel } from '@/widgets/top-10';

export const HomePage = () => {
  const { data: anime } = useFetchAllFilmsQuery({
    genres: 24,
    page: 1,
  });
  const { data: adventures } = useFetchAllFilmsQuery({
    page: 1,
    genres: 4,
  });

  const { t } = useTranslation();
  return (
    <>
      <Promo
        actions={
          <>
            <PromotionButton type={'rect_icon_purple'} />
            <ActivateCertificateButton type={'rect_icon'} />
          </>
        }
      />
      <Title tag={'h4'}>{t('descriptions.main-page-title')}</Title>

      <Description>
        <Text>{t('descriptions.main-page-cut')}</Text>
        <Text>{t('descriptions.main-page-text0')}</Text>
        <Text>{t('descriptions.main-page-text1')}</Text>
        <List>
          <Text>{t('descriptions.main-page-text2')}</Text>
          <Text>{t('descriptions.main-page-text3')}</Text>
          <Text>{t('descriptions.main-page-text4')}</Text>
          <Text>{t('descriptions.main-page-text5')}</Text>
          <Text>{t('descriptions.main-page-text6')}</Text>
          <Text>{t('descriptions.main-page-text7')}</Text>
          <Text>{t('descriptions.main-page-text8')}</Text>
          <Text>{t('descriptions.main-page-text9')}</Text>
        </List>
        <Text>{t('descriptions.main-page-text10')}</Text>
      </Description>
      <TopTenCarousel />
      <Carousel
        title={t('carousels.anime') || 'Аниме'}
        route={'/movies?genre=24'}
        showAll={!!anime?.total && anime.total > 15}
      >
        {(anime?.items || Array(15).fill(1)).map((card, index) => (
          <CardWithProps card={card} key={index} />
        ))}
      </Carousel>
      <Carousel
        title={t('carousels.adventures') || 'Приключения'}
        route={'/movies?genres=4'}
        showAll={!!adventures?.total && adventures.total > 15}
      >
        {(adventures?.items || Array(15).fill(1)).map((card, index) => (
          <CardWithProps card={card} key={index} />
        ))}
      </Carousel>
    </>
  );
};
