import Link from 'next/link';
import React from 'react';

async function getTodos() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())

  return todos
}

export default async function Page() {

  const todos = await getTodos();
  console.log(todos)

  return (
    <ul>
      <div>{todos.map((todo: any) =>
        <li key={todo.id}><Link href={`todos/${todo.id}`}>{todo.title}</Link></li>)}
      </div>
    </ul>
  );
}
