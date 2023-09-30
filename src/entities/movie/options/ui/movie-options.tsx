import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { badges } from '@/entities/movie/options/model/badges';
import { MovieOptionProps } from '@/entities/movie/options/model/props';
import { Badge, Button, Text } from '@/newui';
import { movieTypes } from '@/shared/constants';
import styles from '@/widgets/movie/ui/WatchPage.module.scss';

export const MovieOptions: FC<MovieOptionProps> = ({ movie }) => {
  const { t, i18n } = useTranslation();
  const [extended, setExtended] = useState<boolean>(false);
  const extend = () => {
    setExtended((val) => !val);
  };
  const { nameEn, nameRu, description, shortDescription, languages, subtitles, type } = movie;
  const getString = (arr: string[]): string => {
    return arr.reduce((res, next, index) => {
      if (!index) {
        return res + next;
      }
      return res + ', ' + next;
    }, '');
  };

  return (
    <div className={styles.movie_options}>
      <div className={styles.watch__description}>
        <Text>{shortDescription}</Text>
        {extended && (
          <div>
            {description && <Text>{description}</Text>}
            <Text>
              {i18n.language == 'en'
                ? movieTypes[type]?.enNameSingle
                : movieTypes[type]?.ruNameSingle}{' '}
              {i18n.language == 'en' ? nameEn : nameRu} доступен на сайте. Приятного просмотра!
            </Text>
          </div>
        )}
      </div>
      {extended && (
        <div className={styles.clause_bottom}>
          <div className={styles.watch_options}>
            <div className={styles.watch_options_container}>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title}>Языки</div>
                <div className={styles.watch_options__value}>
                  {languages ? getString(languages) : 'Информация отсутствует'}
                </div>
              </div>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title}>Субтитры</div>
                <div className={styles.watch_options__value}>
                  {subtitles ? getString(subtitles) : 'Информация отсутствует'}
                </div>
              </div>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title_narrow}>Качество</div>
                <div className={styles.watch_options__title_wide}>
                  Изображение и звук.{' '}
                  <span>
                    Фактическое качество зависит от устройства и ограничений правообладателя.
                  </span>
                </div>
                <div className={styles.watch_options__icons_list}>
                  {badges.map((badge) => (
                    <div key={badge} className={styles.badge}>
                      <Badge>{badge}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <span className={styles.clause_toggle}>
        <Button appearance={'gray'} onClick={extend}>
          {!extended ? t('buttons.open_details') : t('buttons.collapse_details')}
        </Button>
      </span>
    </div>
  );
};
