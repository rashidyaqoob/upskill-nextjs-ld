import { getTodos } from "@/api/todos"
import { Form } from "@/components/Form"
import { MySelect } from "@/components/MySelect"
import RandomNumber from "@/components/RandomNumber"
import {cookies} from "next/headers"



export default async function HomePage() {
  
  const todos = await getTodos() 
  return <>
    <h1>This is my Next.js app</h1>
    <MySelect />
    <RandomNumber />
    <Form/>

  </> 

}
