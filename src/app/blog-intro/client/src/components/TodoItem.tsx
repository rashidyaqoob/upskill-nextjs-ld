"use client";

import { Child } from "./Child";

export function TodoItem({
  completed,
  title,
}: {
  completed: boolean
  title: string
}) {
  return <>
    <Child/>
    <li onClick={() => alert(title)} className={completed ? "strike-through" : undefined}>{title}</li>
    </>
}
