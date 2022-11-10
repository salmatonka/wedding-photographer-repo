import { useEffect } from "react";

const useSetTitle = title =>{
    useEffect(()=>{
     document.title = `${title} - wedding-photographer `;

            },[title])};

  export default useSetTitle;          