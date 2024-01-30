import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

const MobileMenu = (props) => {
    const { openMobileMenu, buttons, close } = props;

    const nav = useNavigate();

  return (
    <>
    <IoClose className='IoClose' size={25} onClick={close}/>
    {buttons.map((btn, index) => {

        const click = () => {
            nav(btn.link);
            close();
        };
        
                return (
                    <button onClick={click} key={index} >{btn.title}</button>
                )
    })}
    </>
  )
}

export default MobileMenu