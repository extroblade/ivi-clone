import { LanguageVariants } from '@/shared/constants/languages';
import { ProfessionVariants } from '@/shared/types/kinopoiskTypes';

type ProfessionVariantsType = Record<ProfessionVariants, Record<LanguageVariants, string>>;

export const professionTypes: ProfessionVariantsType = {
  ACTOR: {
    ru: 'Актер',
    en: 'Actor',
  },
  TRANSLATOR: {
    ru: 'Переводчик',
    en: 'Translator',
  },
  VOICE_DIRECTOR: {
    ru: 'Режиссер дубляжа',
    en: 'Voice director',
  },
  COMPOSER: {
    ru: 'Композитор',
    en: 'Composer',
  },
  DESIGN: {
    ru: 'Художник',
    en: 'Designer',
  },
  OPERATOR: {
    ru: 'Оператор',
    en: 'Operator',
  },
  EDITOR: {
    ru: 'Монтажер',
    en: 'Editor',
  },
  PRODUCER: {
    ru: 'Продюсер',
    en: 'Producer',
  },
  HIMSELF: {
    ru: '????',
    en: '????',
  },
  HRONO_TITR_MALE: {
    ru: '????',
    en: '????',
  },
  DIRECTOR: {
    ru: 'Режиссер',
    en: 'Director',
  },
  WRITER: {
    ru: 'Сценарист',
    en: 'Writer',
  },
};
