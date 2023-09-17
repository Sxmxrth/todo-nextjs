import Link from "next/link"
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData){
    "use server"
    
    const title = data.get("title")?.valueOf() as string;
    if(title.length === 0){
        throw new Error("Title cannot be empty");
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect("..");
}

export default function Page(){
    return(
        <>
        <header className="flex justify-between items-center mb-4 pb-5">
            <h1 className="text-5xl">New Todo</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-col">
            <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
            <div className="flex gap-2 flex-row mt-4 justify-center">
                <Link href=".." className="border border-slate-300 rounded px-2 py-1 hover:bg-slate-500 focus-within:bg-slate-700 text-2xl">Cancel</Link>
                <button type="submit" className="border border-slate-300 rounded px-2 py-1 hover:bg-slate-500 focus-within:bg-slate-700 text-2xl">Submit</button>
            </div>
        </form>
        </>
    )
}