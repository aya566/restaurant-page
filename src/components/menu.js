import './menu.css';
import { useState } from 'react';
import burger from '../img/burger.jpg';
import pizza from '../img/pizza.jpg';
import salad from '../img/salad.jpg';
function Menu(){
     const [list, setList ] = useState([
        {
            title:'BURGER',img: burger ,body:'Burgers can be enjoyed in different styles and sizes, with a side of French fries or a salad',price:'24.00$',id:1
        },
        {
            title:'PIZZA',img: pizza ,body:'our pizza is a versatile and customizable dish that is enjoyed worldwide',price:'25.00$',id:2
        },
        {
            title:'SALAD',img: salad ,body:'our grilled chicken salad provid a balanced and delicious experience',price:'23.00$',id:3
        },
     ])
    return (
      <div className='menu'>
        <h3>menu</h3>
        <div className='xmenu'>
            <div className='lift'>
            {list.map((listt)=>(
                <div className='list' style={{width:"200px",height:"500px",display:"inline-grid",marginLeft:"200px"}} key={listt.id}>
                    <h4>{listt.title}</h4>
                    <img className='menuImg' src={listt.img} ></img>
                    <p>{listt.body}</p>
                    <span>{listt.price}</span>
                    <button>order now</button>

                </div>

            ))}
               </div>
        </div>
      </div>
    );
    };
  

  export default Menu;