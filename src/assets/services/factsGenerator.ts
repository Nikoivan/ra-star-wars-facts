import { FactsType } from '../../components/StarWars/StarWars';

export default function factsGenerator(facts: string[], length: number) {
  if (length === 0) {
    return [];
  }
  if (length === 1) {
    [facts[Math.floor(Math.random() * facts.length)]];
  }

  const factsForReturn: string[] = [];
  let filtredFacts = [...facts];
  for (let i = 0; i < length; i += 1) {
    const factForReturn =
      facts[Math.floor(Math.random() * filtredFacts.length)];
    factsForReturn.push(factForReturn);
    filtredFacts = filtredFacts.filter((fact) => fact !== factForReturn);
  }
  return factsForReturn;
}
