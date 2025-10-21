- Header component
- logo
- nav items (Home, About Us, Contact Us, Cart)
- Body component
- Search bar
- Restaurant container
- Restaurant card (image, name, cuisine, rating, delivery time)
- Footer component
- copyright notice
- links (Home, About Us, Contact Us, Cart)
- address
- contact information

// Traditional way of writing functional component with props
const RestaurantCard = (props) => {
console.log(props);
return (

<div className="restaurant-card">
<img
 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
alt="Restaurant"
className="card-image"
/>
<div className="card-body p-3 bg-light">
<h5 className="card-title">{props.resName}</h5>
<p className="card-text">{props.cuisine}</p>
<p className="card-text">{getStars(props.rating)}</p>
<p className="card-text">{props.deliveryTime}</p>
</div>
</div>
)
}

// Destructuring props in the function parameter
const RestaurantCard = (props) => {
const { resName, cuisine, rating, deliveryTime } = props; // Destructuring props
console.log(props);
return (

 <div className="restaurant-card">
 <img
 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
 alt="Restaurant"
 className="card-image"
 />
 <div className="card-body p-3 bg-light">
 <h5 className="card-title">{resName}</h5>
 <p className="card-text">{cuisine}</p>
 <p className="card-text">{getStars(rating)}</p>
 <p className="card-text">{deliveryTime}</p>
 </div>
 </div>
 )
 }

There are two types of Export and Imports in react

- default export and import

export default Component;
import Component from "path";

- named export and import

export const Component;
import {Component} from "path";


# React Hooks - (Normal JS Utility Functions)
- useState() 
    - use to generate super powerful states/variables in react
    - whenever a state variable updates react re-renders the component
- useEffect()