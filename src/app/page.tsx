import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";

function getTodos(){
  return prisma.todo.findMany();
}

async function toggleComplete(id: string, complete: boolean){
  "use server"
  await prisma.todo.update({where: {id}, data: {complete}});
}

export default async function Homepage() {

  const todos = await getTodos();

  return (

    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-5xl">Todo App</h1>
        <Link href="/new" className=" border border-slate-300 text-slate-300 px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none text-3xl">New</Link>
      </header>

      <ul className="pl-4 text-3xl">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleComplete={toggleComplete}/>
        ))}
      </ul>
    </>

  );
}