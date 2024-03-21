import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context=createContext();

 const contextProvider=(props)=>{


   const [input,setInput]=useState("")
   const [recentPromt,setRecentPropmt]=useState("")
   const [prevPrompt, setprevPrompt] = useState([])
   const [showResult, setshowResult] = useState(false)
   const [loading, setloading] = useState(false)
   const [resultData, setresultData] = useState("")

   const onSent=async(prompt)=>{
     await runChat(input)
   }
   
   const contestValue={
      prevPrompt,
      setprevPrompt,
      onSent,
      setRecentPropmt,
      recentPromt,
      showResult,
      loading,
      resultData,
      input,
      setInput,


   }
   return(
      <Context.Provider value={contestValue}>
         {props.children}
      </Context.Provider>
   )
}
export default contextProvider;