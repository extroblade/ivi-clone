export type ProfessionVariants =
  | 'ACTOR'
  | 'PRODUCER'
  | 'HIMSELF'
  | 'HRONO_TITR_MALE'
  | 'DIRECTOR'
  | 'WRITER';

export type languageVariants = 'ru' | 'en';

type ProfessionVariantsType = Record<ProfessionVariants, Record<languageVariants, string>>;

export const professionTypes: ProfessionVariantsType = {
  ACTOR: {
    ru: 'Актер',
    en: 'Actor',
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
