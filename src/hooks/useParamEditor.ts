import { useState } from 'react';
import { EditorParam, Model, Param } from '../interfaces/interfaces';

/**
 * @param model - модель, хранящая значения параметров
 * @param initialParams - массив параметров без их значений
 * @returns объект со списком параметров и инструментов для работы с ним
 */

export const useParamEditor = (model: Model, initialParams: Param[]) => {
  const [params, setParams] = useState(() => {
    const values = model.paramValues;
    const params: EditorParam[] = [];

    initialParams.forEach((param) => {
      const paramValue = values.find((v) => v.paramId === param.id);
      if (paramValue) {
        params.push({
          id: param.id,
          name: param.name,
          type: param.type,
          value: paramValue.value,
        });
      }
    });

    return params;
  });

  const addParam = (param: EditorParam) => {
    setParams([...params, param]);
  };


  const deleteParam = (paramId: EditorParam['id']) => {
    setParams(params.filter((param) => param.id !== paramId));
  };

  const updateParam = (
    paramId: EditorParam['id'],
    value: EditorParam['value']
  ) => {
    setParams(
      params.map((param) =>
        param.id === paramId ? { ...param, value } : param
      )
    );
  };

  return {
    params,
    addParam,
    deleteParam,
    updateParam,
  };
};
