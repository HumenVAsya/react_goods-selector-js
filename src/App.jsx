import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');
  const toggleItem = item => {
    return value === item ? setValue('') : setValue(item);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? (
          <>
            {value} is selected
            <button
              onClick={() => setValue('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              key={item}
              data-cy="Good"
              className={value === item ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => toggleItem(item)}
                  data-cy={value === item ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={value === item ? 'button is-info' : 'button'}
                >
                  {value === item ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
