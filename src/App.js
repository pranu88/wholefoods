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
     <div class="searchBar"><input type='search' placeholder='Search In-Store Products'/><img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' alt='search'/></div>
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
     <div class="image">
      <div class="text"><h1>Act Fast: Hot 18" Cheese Pizza, $10 Each </h1>
      <p>Prime members: Pounce on a sizzling whole pizza the whole family will love for just $10 through 11/28. Plus, save on seasonal ingredients and favorites to pair with your pie. </p>
      <button>See all Sales</button>
      </div>
      <img src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-cheese-pizza-food-transparent-on-white-background-png-image_6655742.png" alt='cheese pizza'/>
      </div>
      <div class='links'>        
        <GroceryPickup />
        <Catering/>
        <ShippedtoYou/>
        <WeeklySales/>
      </div>
      <div class='text'>
        <h1>Dinner? Done! Shop our mealtime shortcuts. </h1>
        <p>Chill out with meals that are ready to go and ready to heat, from chef-inspired solves to frozen faves. Even easier? Get it all with pickup or delivery. </p>
        <button>See all Sales</button>
      </div>
      <div class='dinnerSec'><img src='https://i0.wp.com/withtwospoons.com/wp-content/uploads/2019/01/whole-30-collage.png?ssl=1' alt = ''/>
      </div>
    </div>
  );
}

export default App;
