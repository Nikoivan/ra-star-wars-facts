import { ChangeEvent, FormEvent } from 'react';
import { FactsType } from '../StarWars';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { factsActions } from '../../../store/slices/factsSlice';
import factsGenerator from '../../../assets/services/factsGenerator';

const StarWarsMain = ({ facts }: FactsType) => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store.facts);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.length <= 1 ? e.target.value : e.target.value[1];

    //if (/[1-5 ]/.test(e.target.value)) хотел использовать его но TS не понимает RegExp
    if (
      Number(value) === 1 ||
      Number(value) === 2 ||
      Number(value) === 3 ||
      Number(value) === 4 ||
      Number(value) === 5 ||
      value === ''
    ) {
      dispatch(factsActions.change(value === '' ? '' : Number(value)));
    }
  };

  const factsForReturn =
    typeof store.value === 'number' ? factsGenerator(facts, store.value) : [];

  return (
    <main className='StarWars-Main'>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
        }}
        className='Main-Form'
      >
        <input
          type='number'
          onChange={onChange}
          value={store.value}
          className='Form-Input_type_number'
        />
      </form>
      <div className='Main-Result'>
        <h3 className='Result-Title'>Факты об антологии фильмов Star Wars</h3>
        <ul className='Result-List'>
          {factsForReturn?.length > 0 &&
            factsForReturn.map((fact, idx) => <div key={idx}>{fact}</div>)}
        </ul>
      </div>
    </main>
  );
};

export default StarWarsMain;
