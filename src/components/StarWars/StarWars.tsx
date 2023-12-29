import StarWarsMain from './Main/StarWars-Main';
import StarWarsHeader from './Header/StarWars-Header';

export type FactsType = {
  facts: string[];
};

const StarWars = ({ facts }: FactsType) => {
  return (
    <div className='StarWars'>
      <StarWarsHeader />
      <StarWarsMain facts={facts} />
    </div>
  );
};

export default StarWars;
