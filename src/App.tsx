
import './App.css'
import { Nav } from './custom components/nav'
import { Services } from './custom components/services'

function App() {
 

  return (
    <>
    <div className='bg-neutral-800 h-lvh min-w-full'>
    <Nav  logotitle='niggrooo' title1='home' title2='services' title3='idk nigga' title4='about'>
    </Nav>
   <Services title='editing services' description='our advanced ai editing tools'></Services>
    </div>
   

    </>
  )
}

export default App
