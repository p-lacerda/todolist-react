import React, { FormEvent, useState } from 'react';

type Props = {
  onSubmit: (event: FormEvent, task: string) => void;
};

export default function NewTask({ onSubmit }: Props) {
  const [taskMessage, setTaskMessage] = useState('');

  return (
    <form onSubmit={(event) => onSubmit(event, taskMessage)}>
      <input required={true} onChange={(e) => setTaskMessage(e.target.value)} type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar</button>
    </form>
  )
}