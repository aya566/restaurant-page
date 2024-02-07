import './about.css';
import meal from '../img/meal.jpg';

function About(){

   
    return (
      <div className='about'>

        <img className='aboutImg' src={meal}></img>
        <div className='us'>
          <h2>ABOUT US </h2>
        <p>we pride ourselves on offering a one-of-a-kind dining experience that combines exceptional cuisine with a warm and inviting atmosphere. Our restaurant is the perfect destination for food enthusiasts and those seeking a memorable dining experience.

Our passionate team of chefs and culinary experts curate a menu that showcases the best of local and international flavors. From delectable appetizers to mouth-watering main courses and divine desserts, each dish is meticulously crafted using only the finest and freshest ingredients available. We strive to create innovative and unique flavor combinations that will leave your taste buds tantalized. We believe that great food and excellent service go hand in hand. Our attentive and knowledgeable staff is dedicated to delivering top-notch service, ensuring that every guest feels welcomed, valued, and well taken care of. From the moment you step through our doors, our team is committed to making your visit truly exceptional.</p>
      </div>
      </div>
    );
    };
  

  export default About;