import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { badges } from '@/entities/movie/options/model/badges';
import { MovieOptionProps } from '@/entities/movie/options/model/props';
import { Badge, Button, Text } from '@/newui';
import { LanguageVariants, movieTypes } from '@/shared/constants';
import { localizeName } from '@/shared/helpers';
import { arrayToString } from '@/shared/helpers/array-to-string';
import { useBooleanState } from '@/shared/hooks';

import styles from './styles.module.scss';

export const MovieOptions: FC<MovieOptionProps> = ({ movie }) => {
  const { t, i18n } = useTranslation();
  const [isExtended, { handleToggle }] = useBooleanState();
  const { description, shortDescription, languages, subtitles, type } = movie;
  return (
    <div className={styles.movie_options}>
      <div className={styles.watch__description}>
        <Text>{shortDescription}</Text>
        {isExtended && (
          <>
            {description && <Text>{description}</Text>}
            <Text>
              {movieTypes[type]?.[`${i18n.language as LanguageVariants}NameSingle`]}{' '}
              {localizeName(movie)} доступен на сайте. Приятного просмотра!
            </Text>
          </>
        )}
      </div>
      {isExtended && (
        <div className={styles.clause_bottom}>
          <div className={styles.watch_options}>
            <div className={styles.watch_options_container}>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title}>Языки</div>
                <div className={styles.watch_options__value}>{arrayToString(languages)}</div>
              </div>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title}>Субтитры</div>
                <div className={styles.watch_options__value}>{arrayToString(subtitles)}</div>
              </div>
              <div className={styles.watch_options__options}>
                <div className={styles.watch_options__title_narrow}>Качество</div>
                <div className={styles.watch_options__title_wide}>
                  Изображение и звук.&nbsp;
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
        <Button appearance={'gray'} onClick={handleToggle}>
          {!isExtended ? t('buttons.open_details') : t('buttons.collapse_details')}
        </Button>
      </span>
    </div>
  );
};
