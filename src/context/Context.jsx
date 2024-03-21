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

   const delayPara=(index,nextWord)=>{
      setTimeout(function(){
         setresultData(prev=>prev+nextWord)
      },75*index)

   }

   const onSent=async(prompt)=>{
      setresultData("")
      setloading(true)
      setshowResult(true)
      setRecentPropmt(input)
      setprevPrompt(prev=>[...prev,input])
     const response=await runChat(input)
     let responseArray=response.split("**");
     let newResponse="";
     for (let index = 0; index < responseArray.length; index++){
      if(index==0 || index%2!==1){
         newResponse+=responseArray[index]
      }else{
         newResponse+="<b>"+responseArray[index]+"</b>"
      }
     }
     let newResponse2=newResponse.split("*").join("</br>")
     let newResponseArray=newResponse2.split(" ")
     for (let i = 0; i< newResponseArray.length; i++) 
     {
    const nextWord=newResponseArray[i]
    delayPara(i,nextWord+" ")
    
     }
    
     setloading(false)
     setInput("")

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