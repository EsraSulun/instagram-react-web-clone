import { useEffect, useRef, useState } from "react";

export default function Input({label, type= "text", ...props}){

  const [show, setShow] = useState(false)
  const [inputType, setType] = useState(type) 
  const inputRef = useRef()

  useEffect(() => {
    if(show){
      setType('text')
      inputRef.current.focus()
    } else if(type  === "password"){
      setType("password")
      inputRef.current.focus()
    }
  },[show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-600">
        <input ref={inputRef} required={true} type={inputType} className=" px-2  outline-none text-xs  w-full h-[38px] valid:pt-[10px] peer" {...props}></input>
        <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid: text-[10px] peer-valid:top-2.5">{label}</small>
        {type === 'password' && props?.value  &&(
          <button type="button" onClick={() => setShow(show => !show)} className="h-full flex items-center">
            {show ? "Hide" : "Show"}

          </button>
        )}
      </label>
    );
}