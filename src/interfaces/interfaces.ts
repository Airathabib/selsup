export type ParamTypes = ['string', 'number', 'select'];

export type ParamType = ParamTypes[number];

export interface Param {
  id: number;
  name: string;
  type: ParamTypes[number];
}

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

export interface EditorParam extends Param {
  value: ParamValue['value'];
}

export interface ParamListProps {
  items: EditorParam[];
  updateParam: (id: number, val: string) => void;
  deleteParam: (id: number) => void;
}

export interface NewParamFormProps {
  addParam: (param: EditorParam) => void;
}

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  onChangeCb?: (val: string) => void;
}
