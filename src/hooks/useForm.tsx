import { ChangeEvent, useState } from 'react';

// export function useForm<T> (initialState: T){}

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form,
  };
};
