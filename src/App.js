import { useEffect, useRef, useState } from "react";
import Input from "./components/Input.js";
import {RiFacebookBoxFill} from "react-icons/ri";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const enable = username && password

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider(); //sayfa ilk açıldığında da foto gelsin diye
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="w-full h-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <div className="hidden md:block w-[380.31px] h-[581.15px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538.84px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="/img/screenshot1.png"
            alt="1"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="/img/screenshot2.png"
            alt="2"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="/img/screenshot3.png"
            alt="3"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="/img/screenshot4.png"
            alt="4"
          />
        </div>

       
      </div>
      <div className="w-[350px] grid-gap-y-3">

      <div className=" bg-white border px-[40px] pt-10 pb-6">

          <a href="#" className="flex  justify-center mb-8">
          <img className="w-[175] h-[51px]" src="img/Instagram_logo.svg.png" />
          </a>
          
          <form className="grid gap-y-1.5">
            <Input  type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username or email" ></Input>
            <Input  type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" ></Input>
            <button type="submit" disabled={!enable} className="h-[30px] mt-2 rounded font-medium bg-brand text-white text-sm disabled:opacity-50">Log In</button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a href="#" className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook ">
              <RiFacebookBoxFill size={20} />
              Log in with Facebook
            </a>
            <a href="#"className="flex justify-center items-center text-link ">
              Forgot password?
            </a>
          </form>
          </div> 

          <div className="bg-white border p-4 text-sm text-center">
            Don't have an account?<a href="#" className="font-semibold text-brand"> Sign up</a>
          </div>
          
        
      </div>
      
    </div>
  );
}

export default App;
