import React from 'react'
import {useform} from 'react-hook-form'
import axios from 'axios';

function InsurancePayerDetails() {
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

                <label htmlFor='inspn'>Insurance Payer Name:</label>
                <input type='text'id='inspn'placeholder='enter your insurancePayerName 'className='form-control' />
                <br />
                <br/>

                <label htmlFor='inspc'>Insurance Payer Code:</label>
                <input type='text'id='inspc'  placeholder='enter your account insurancePayerCode'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='addsd'>Address Details:</label>
                <input type='text'id='addsd'  placeholder='enter address_details'className='form-control' />
                <br/>
                <br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default InsurancePayerDetails;