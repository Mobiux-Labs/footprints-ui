'use client';

import Form from '@/components/Form';

export default function Home() {
  const onSubmitHandler = () => {};

  return (
    <Form
      onSubmitHandler={e => onSubmitHandler(e)}
      items={{
        label: 'Name',
        errorText: 'This field is required',
        inputProps: {
          type: 'text',
          // value: values.name,
          // onChange: e => onChangeHandler('name', e.target.value),
          placeholder: 'Name',
          required: true
        },
        bodyClassName: 'col-span-2'
      }}
    />
  );
}
