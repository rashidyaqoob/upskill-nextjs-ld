"use client"

import React from 'react'

async function getTodo(id: string) {
  const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
console.log(todos)
  return todos
}

const page =async ({params}: {params: {id: string}}) => {
  const todo = await getTodo(params.id)
  console.log(todo)
  return (
    <div>{ todo.title}</div>
  )
}

export default page