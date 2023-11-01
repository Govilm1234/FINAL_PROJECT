import React from 'react'
import {useform} from 'react-hook-form'
import axios from 'axios';

function BankDetails() {
    const{register,handleSubmit} = useform();

    function SaveData(data)
    {
        //console.log(data)
        axios.post('', data)
    }
  return (
    <>
        <div className='container'>
            <form onSubmit={handleSubmit(SaveData)}>

                <label htmlFor='pnc'>Pan Card Number: </label>
                <input type='text'id='pnc'placeholder='enter your pancard number'className='form-control' />               
                <br />
                <br/>

                <label htmlFor='accn'>Account Number: </label>
                <input type='text'id='accn' placeholder='enter your account number'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='bn'>Bank Name: </label>
                <input type='text'id='bn' placeholder='enter your bank name'className='form-control' /> 
                <br/>
                <br/>

                <label htmlFor='branchn'> Branch Name: </label>
                <input type='text'id='branchn' placeholder='enter your branch name'className='form-control' />          
                <br/>
                <br/>

                <label htmlFor='ifsc'>IFSC Code: </label>
                <input type='text'id='ifsc'placeholder='enter your IFSC name' className='form-control'/>
                <br/>
                <br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default BankDetails