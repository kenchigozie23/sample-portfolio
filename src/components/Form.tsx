import './FormStyles.css'


function Form() {
  return (
    <div className='form'>
        <form action='https://getform.io/f/bf559128-abe6-4906-890d-29c673357287' method='POST' >
            <label htmlFor="nam">Name</label>
            <input type="text" name="Name" id="nam" />
            <label htmlFor="">Email</label>
            <input type="email" name="Email" id="" />
            <label htmlFor="">Subject</label>
            <input type="text" name="Subject" id="" />
            <label htmlFor="">Message</label>
           <textarea rows={6} name='Your Message' placeholder='Type your Message here'/>
           <button className='btn'>Submit</button>
            
        </form>
    </div>
  )
}

export default Form