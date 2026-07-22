import { useState,  useMemo } from 'react'
import './App.css'
 

interface Comment {
  id: number;
 name : string
  text: string;
   author: string;
  
}
interface Issue {
 id : number
  title: string;
status :string
comments : Array<Comment>;
}
 
const myComment : Comment = {
  text : "Привет",
  id : 2,
  name: "Алеша",
  author :"Админ",
}
const myIssue : Issue = {
id : 1,
title : "React",
status : "open",
comments : [myComment] 
}

function App() {
   const [issues, setIssue] = useState<Issue[]>([]);
   const [statusFilter, setstatusFilter] = useState<string>("open")
   const filterIssues = useMemo(() => issues.filter(item=> item.status === statusFilter ), [issues,statusFilter])
   const loadissues= async ()=>{
    try {
       const response =  await fetch("https://google.com")
       const data = await response.json();
        const  transformedIssues  = data.map((item: any) => {
  return {
    id: item.id,
    title: item.title,
    status: item.state, 
    comments: []
  };
});
  setIssue(transformedIssues);    
    } catch (error) {
      console.log(error)
    }
   }
function sortedIssues() {
 return filterIssues.slice().sort((a, b) => b.id- a.id); 
}
  return (
    <div>
   <h1>Issue Tracker</h1>
    </div>
  )
}

export default App

