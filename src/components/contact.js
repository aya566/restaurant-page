import './contact.css';
import pepper from '../img/pepper.jpg';

function Contact(){

   
    return (
      <div className='contact'>
       <div className='flix'>
        <div className='sid'>
            <h5>Ready to get started?</h5>
            <p>Whether you're looking for a delicious meal, a refreshing drink, or a night of live entertainment, Stay Tuned</p>
        </div>
        <div className='side'>
          <label>
            <input name='myname' type='email' className='inpt' placeholder='Email address' />
            </label>
            <input type='submit' className='btn' />
            
        </div>
        <img className='pepImg' src={pepper}></img>
       </div>
       
      </div>
    );
    };
  

  export default Contact;