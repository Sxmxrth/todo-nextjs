"use client"
type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleComplete: (id: string, complete: boolean) => void
}

export default function TodoItem({id, title, complete, toggleComplete} : TodoItemProps){
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleComplete(id, e.target.checked)}/>
            <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500 px-3">{title}</label>
        </li>
    )
}