export interface Profile {
  description: string;
  fii: number;
  acoesBR: number;
  acoesEUA: number;
  caixa: number;
}

interface Choice {
  title: string;
  value: string | number;
}

export class InvestorProfile {
  static profile1: Profile = {
    description: "100% RENDA VARIÁVEL",
    fii: 0.33,
    acoesBR: 0.33,
    acoesEUA: 0.33,
    caixa: 0.01,
  };

  static profile2: Profile = {
    description: "90% RENDA VARIÁVEL",
    fii: 0.3,
    acoesBR: 0.3,
    acoesEUA: 0.3,
    caixa: 0.1,
  };

  static profile3: Profile = {
    description: "75% RENDA VARIÁVEL",
    fii: 0.25,
    acoesBR: 0.25,
    acoesEUA: 0.25,
    caixa: 0.25,
  };

  static profile4: Profile = {
    description: "55% RENDA FIXA",
    fii: 0.15,
    acoesBR: 0.15,
    acoesEUA: 0.15,
    caixa: 0.55,
  };

  static profile5: Profile = {
    description: "70% RENDA FIXA",
    fii: 0.1,
    acoesBR: 0.1,
    acoesEUA: 0.1,
    caixa: 0.7,
  };

  static profileChoices: Choice[] = [
    { title: "Modelo 1", value: "profile1" },
    { title: "Modelo 2", value: "profile2" },
    { title: "Modelo 3", value: "profile3" },
    { title: "Modelo 4", value: "profile4" },
    { title: "Modelo 5", value: "profile5" },
  ];
}
