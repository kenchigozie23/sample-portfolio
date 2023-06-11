import './FormStyles.css'


function Form() {
  return (
    <div className='form'>
        <form action='https://getform.io/f/bf559128-abe6-4906-890d-29c673357287' method='POST' >
            <label htmlFor="nam">Name</label>
            <input type="text" name="Name"  required id='nam' />
            <label htmlFor='email'>Email</label>
            <input type="email" name="Email"  required id='email '/>
            <label htmlFor='subject'>Subject</label>
            <input type="text" name="Subject"  id='subject'/>
            <label htmlFor="Subject" >Message</label>
           <textarea rows={6} name='Your Message' placeholder='Type your Message here' required/>
           <button className='btn' >Submit</button>
            
        </form>
    </div>
  )
}

export default Form