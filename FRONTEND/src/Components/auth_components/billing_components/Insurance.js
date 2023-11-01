import React from 'react'
import {useform} from 'react-hook-form'
import axios from 'axios';


function Insurance() {
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

                <label htmlFor='pcode'>Patient Code:</label>
                <input type='text'id='pcode' placeholder='enter your patient code 'className='form-control' />
                <br />
                <br/>

                <label htmlFor='isdate'>Insurance Start Date:</label>
                <input type='date'id= 'isdate'  placeholder='enter your account insurance start date'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='iedate'>Insurance End Date:</label>
                <input type='date'id='iedate'  placeholder='enter your insurance end date'className='form-control' />
                <br/>
                <br/>

                <label htmlFor='isecrd'>Insurance Sum Insured:</label>
                <input type='text'id='isecrd' name='branch_name' placeholder='enter insurance sum insured' className='form-control' />
                <br/>
                <br/>

                <label htmlFor='isp'>Is Primary:</label>
                <input type='text'id='isp'  placeholder='enter is primary'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='isr'>Is Rider:</label>
                <input type='text'id='isr'  placeholder='enter is rider'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='ipt'>Insurance Policy Term:</label>
                <input type='text'id='ipt' placeholder='enter your policy term'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='ipt'>Insurance Policy Term:</label>
                <input type='text'id='ipt' placeholder='enter your policy term'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='ipa'>Insurance Premium Ammount:</label>
                <input type='text'id='ipa' placeholder='enter your premium ammount'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='ipn'>Insurance Policy Name:</label>
                <input type='text'id='ipn' placeholder='enter your policy name'className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='iscashl'>Is Cashless:</label>
                <input type='text'id='iscashl' className='form-control'/>
                <br/>
                <br/>

                <label htmlFor='nd'>Nominee Details:</label>
                <input type='text'id='nd' placeholder='enter your nominee details' className='form-control'/>
                <br/>
                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Insurance;