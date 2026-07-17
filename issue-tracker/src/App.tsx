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
   const [statusFilter , setStatusFilter ] = useState<string>("open");
   const filterIssues = useMemo(() => issues.filter(item=> item.status === statusFilter) ,[issues, statusFilter])
  return (
    <div>
   <h1>Issue Tracker</h1>
    </div>
  )
}

export default App

