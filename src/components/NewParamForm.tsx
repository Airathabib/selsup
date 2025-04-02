import React, { useCallback, useState } from 'react';
import Input from './Input';
import {
  NewParamFormProps,
  ParamType,
  ParamTypes,
} from '../interfaces/interfaces';
import makeId from '../handlers/makeId';

/* <----- Компонент добавления нового параметра -----> */
function NewParamForm({ addParam }: NewParamFormProps) {
  const [type, setType] = useState<ParamType>('string');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const types: ParamTypes = ['string', 'number', 'select'];

  const callBacks = {
    handleTypeChange: useCallback((type: ParamType) => {
      setType(type);
      setValue('');
    }, []),

    handleNameChange: useCallback((name: string) => {
      setName(name);
    }, []),

    handleValueChange: useCallback((value: string) => {
      setValue(value);
    }, []),

    submit: useCallback(() => {
      addParam({ id: makeId(), name, type, value });
    }, [name, value, type, addParam]),
  };

  const paramIsValid = () => {
    return Boolean(!name.trim() || !value.trim() || type === 'select');
  };

  return (
    <div className='l-container'>
      <div className='c-list'>
        <label>
          Type:
          <br />
          <select
            value={type}
            onChange={(e) =>
              callBacks.handleTypeChange(e.target.value as ParamType)
            }
          >
            {types.map((type, i) => (
              <option key={i} value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <>
          <Input
            name='Name'
            value={name}
            onChangeCb={callBacks.handleNameChange}
          />
          {type === 'select' ? (
            <Input name='Value' value={'только string по тз'} readOnly />
          ) : (
            <Input
              name='Value'
              type={type}
              value={value}
              onChangeCb={callBacks.handleValueChange}
            />
          )}
        </>
      </div>
      <button onClick={callBacks.submit} disabled={paramIsValid()}>
        Добавить
      </button>
    </div>
  );
}

export default NewParamForm;
