import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/components/WatchPage/WatchPage.module.scss';
import { movieTypes } from '@/constants';
import { iFilm } from '@/types/kinopoiskTypes';
import { Badge, Button, P } from '@/UI';

interface iOptions {
  movie: iFilm;
}

const badges = ['FullHD', 'HD', '1080', '720'];

export const MovieOptions: FC<iOptions> = ({ movie }) => {
  const { t, i18n } = useTranslation();
  const [extended, setExtended] = useState<boolean>(false);
  const extend = () => {
    setExtended((val) => !val);
  };
  const { nameEn, nameRu, description, shortDescription, languages, subtitles, type } = movie;
  const getString = (arr: any[]): string => {
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
        <P>{shortDescription}</P>
        {extended && (
          <div>
            {description && <P>{description}</P>}
            <P>
              {i18n.language == 'en'
                ? movieTypes[type]?.enNameSingle
                : movieTypes[type]?.ruNameSingle}{' '}
              {i18n.language == 'en' ? nameEn : nameRu} доступен на сайте. Приятного просмотра!
            </P>
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
                      <Badge text={badge} />
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
