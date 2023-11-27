// create component for whole foods market and link it to home page
// create search input
// component for find a store
// component for login
// component for cart
// components for browse-in store, weekly sales, grocery pickup & delivery, catering, Shipped to you, Lunch & Dinner to go and recipes
// Image and div with see all sales button
// replace grocery pickup & delivery, catering, Shipped to you and weekly sales
import './App.css';
import './style.css';
import Homepage from './components/Homepage';
import Findstore from './components/Findstore';
import Login from './components/Login';
import Cart from './components/Cart';
import BrowseInStore from './pages/BrowseInStore';
import Catering from './pages/Catering';
import GroceryPickup from './pages/GroceryPickup';
import LunchAndDinner from './pages/LunchAndDinner';
import Recipes from './pages/Recipes';
import ShippedtoYou from './pages/ShippedtoYou';
import WeeklySales from './pages/WeeklySales';
function App() {
  return (
    <div className="App">
      <div class='main'>
     <Homepage/> 
     <div class="searchBar"><input type='search' placeholder='Search In-Store Products'/><img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' alt='search image'/></div>
     <Findstore/>
     <Login/>
     <Cart/>
     </div>
     <div class='nav'>
      <BrowseInStore/>
      <WeeklySales/>
      <GroceryPickup/>
      <Catering/>
      <ShippedtoYou/>
      <LunchAndDinner/>
      <Recipes/>
     </div>
    </div>
  );
}

export default App;
