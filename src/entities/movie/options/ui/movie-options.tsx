import { useTranslation } from 'react-i18next';

import { getNameByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/helpers';
import { arrayToString } from '@/shared/helpers/array-to-string';
import { useBooleanState } from '@/shared/hooks';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { Badge, Button, Loader, Text } from '@/shared/ui';

import { badges } from '../model/badges';
import styles from './styles.module.scss';

export const MovieOptions = ({ movie }: { movie: iFilm }) => {
  const { t } = useTranslation();
  const [isExtended, { handleToggle }] = useBooleanState();
  const { description, shortDescription, languages, subtitles, type } = movie;
  const title = useLocalizeName(movie);
  if (!movie?.kinopoiskId) return <Loader />;
  return (
    <div className={styles.movie_options}>
      <div className={styles.watch__description}>
        <Text>{shortDescription}</Text>
        {isExtended && (
          <>
            {description && <Text>{description}</Text>}
            <Text>
              {getNameByType(type)} {title} доступен на сайте. Приятного просмотра!
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
