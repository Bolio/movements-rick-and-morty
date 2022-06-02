type Character = {
  imagen: string;
  nombre: string;
  especie: string;
  id: number;
  status: string;
};

type ItemMovementsProps = {
  character: Character[];
};

export type { ItemMovementsProps };
