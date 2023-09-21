export type ProfessionVariants =
  | 'ACTOR'
  | 'PRODUCER'
  | 'HIMSELF'
  | 'HRONO_TITR_MALE'
  | 'DIRECTOR'
  | 'WRITER';
interface iProfession {
  ruName: string;
  enName: string;
}

export const professionTypes: Record<ProfessionVariants, iProfession> = {
  ACTOR: {
    ruName: 'Актер',
    enName: 'Actor',
  },
  PRODUCER: {
    ruName: 'Продюсер',
    enName: 'Producer',
  },
  HIMSELF: {
    ruName: '????',
    enName: '????',
  },
  HRONO_TITR_MALE: {
    ruName: '????',
    enName: '????',
  },
  DIRECTOR: {
    ruName: 'Режиссер',
    enName: 'Director',
  },
  WRITER: {
    ruName: 'Сценарист',
    enName: 'Writer',
  },
};
