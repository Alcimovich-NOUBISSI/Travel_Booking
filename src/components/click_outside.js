import { useEffect } from "react";

export default function useClickOutside (ref, handler) {
 
   useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true)
      })
    
      const handleClickOutside = (event) => {
        if(!ref?.current.contains(event.target)){
          console.log("clicked outside");
          handler()
        } else {
          console.log("clicked inside DIV");
          handler()
        }
      }
}