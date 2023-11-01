import React from 'react'
import {useform} from 'react-hook-form'
import axios from 'axios';

function ServiceProviderBill() {
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

                <label htmlFor='spc'>Service Provider Code:</label>
                <input type='text'id='spc' placeholder='enter your service provider code 'className='form-control' />
                <br />
                <br/>

                <label htmlFor='billn'>Bill Number:</label>
                <input type='text' id= 'billn' placeholder='enter your bill number'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='bdate'>Bill Date:</label>
                <input type='date'id='bdate'  placeholder='enter bill date'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='issub'>Inssued By:</label>
                <input type='text'id='issub' placeholder='enter inssued by name' className='form-control' />
                <br/>
                <br/>

                <label htmlFor='title'>Title:</label>
                <input type='text' id='title'  placeholder='enter your titel'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='amt'>Ammount:</label>
                <input type='text'id='amt'  placeholder='enter your ammount' className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='bimg'>Bill Image:</label>
                <input type='file' id='bimg' className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='sp'>Service Provider:</label>
                <input type='text' id='sp' placeholder='enter your provider name'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='clm'>Claim:</label>
                <input type='text'id='clm' placeholder='enter your claim'className='form-control'/>
                <br/>
                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default ServiceProviderBill;