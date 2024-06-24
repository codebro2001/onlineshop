import './App.css'
import Banner from './components/Banner'
import { useState } from 'react'
import Header from './components/Header'
import Fillter from './components/Fillter'
import shoes1 from './assets/shoes1.png'
import shoes2 from './assets/shoes2.png'
import shoes3 from './assets/shoes3.png'
import Products from './components/Products'

const shoesdata = [
  {
    id: 1,
    name: "Nike air",
    price : 199,
    image : shoes1,
    genre : "men"

  },
  {
    id: 2,
    name: "air jordan",
    price : 299,
    image : shoes2,
    genre : "women"
  },
  {
    id: 3,
    name: "nike runners",
    price : 399,  
    image : shoes3,
    genre : "men"

  },
  {
    id: 4,
    name: "Nike air",
    price : 199,
    image : shoes1,
    genre : "women"

  },
  {
    id: 5,
    name: "air jordan",
    price : 299,
    image : shoes2,
    genre : "men"
  },
  {
    id: 6,
    name: "nike runners",
    price : 399,  
    image : shoes3,
    genre : "women"


  },
  {
    id: 5,
    name: "air jordan",
    price : 299,
    image : shoes2,
    genre : "men"
  },
  {
    id: 6,
    name: "nike runners",
    price : 399,  
    image : shoes3,
    genre : "women"

  }

]

function App() {
  const [filter, setFilter] = useState(shoesdata)  
 const [value, setValue] = useState("")
 const [cart, setCart] = useState([])
 const filterinput = filter.filter(item =>{ 
  return item.name.toLowerCase().includes(value.toLowerCase())
 })
 const all = () => {
    setFilter(shoesdata)
  }

  const men = () => {
    setFilter(shoesdata.filter(item => item.genre === "men"))
  }

  const women = () => {
    setFilter(shoesdata.filter(item => item.genre === "women"))
  }

    const addtoCart = (item) => {
      
      setCart([...cart, item])
    }

    const removeCart = (item) => {
      setCart(cart.filter(i => i !== item))
    }
 
  return (
    <>
          <Header addtoCart={addtoCart} cart={cart} removeCart={removeCart} />
          <Banner />
          <Fillter  all={all} men={men} women={women} setValue={setValue} value={value}  />
          <Products filter={filter} filterinput={filterinput} addtoCart={addtoCart} />
    </>
  )
}

export default App
