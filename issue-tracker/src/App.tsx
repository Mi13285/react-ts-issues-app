import { useState } from 'react'
import './App.css'
  
interface Issue {
 id : number
  title: string;
status :string
comments : Array<Comment>;
}

const myIssue : Issue = {
id : 1,
title : "React",
status : "open",
comments : []
}

interface Comment {
  id: number;
 name : string
  text: string;
   author: string;
  
}
const myComment : Comment = {
  text : "Привет",
  id : 2,
  name: "Алеша",
  author :"Админ",
}
function App() {
   const [issues, setIssue] = useState<Issue[]>([]);
  return (
    <div>
      {myComment.author}
    </div>
  )
}

export default App

