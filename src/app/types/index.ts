// src/types/index.ts
export type Rep = {
    name: string;
    team: string;
    photoUrl: string;
    matchup: string;
    stats: {
      doorsKnocked: number;
      conversations: number;
      sales: number;
    };
    points: number;
  };
  