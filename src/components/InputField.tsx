import React, { useRef } from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;

}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='flex justify-center mt-5' onSubmit={(e) => { 
        
        handleAdd(e)
        inputRef.current?.blur
        }}>
        <input 
        ref={inputRef} 
        type="input" 
        value={todo} 
        onChange={(e)=> setTodo(e.target.value)} 
        placeholder='Enter TODO' 
        className='text-2xl rounded-lg w-80' />
        <button 
        type='submit' 
        className='bg-slate-300 rounded-lg w-10 '
        >Go</button>
    </form>
  )
}

export default InputField