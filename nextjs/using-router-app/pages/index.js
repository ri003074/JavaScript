import { useContext } from 'react'
import Header from '../components/Header'
import { MyUserContext } from "../UserContext"

export default function Home() {

  const msg = useContext(MyUserContext)
  // const msg = [{a:'b'}] 

  return (
    <div>
      <Header />
      {/* <p>HOME PAGE is here!</p> */}
      {msg.map(ms =><div>{ms.a}</div>)}
    </div>
  )
}
