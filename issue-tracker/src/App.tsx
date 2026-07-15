import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
  
interface Issue {
 id : number
  title: string;
status :string
comments : Array;
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
  
}
const myComment : Comment = {
  text : "Привет",
  id : 2,
  name: "Алеша",
}
function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  return (
    <div>
      {}
    </div>
  )
}

export default App

