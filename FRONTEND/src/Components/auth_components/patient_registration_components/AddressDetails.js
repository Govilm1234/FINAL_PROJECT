import React from 'react'
import {useform} from 'react-hook-form'
import axios from 'axios';

function AddressDetails() {
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
                <label htmlFor="adpl1"> Addpatients Line1:</label>
                <input type="text" id="adpl1" placeholder="enter addpatients line1" className="form-control" />               
                <br />
                <br/>

                <label htmlFor="adpcl2">Addpatients Line2:</label>
                <input type="text" id ="adpl2" placeholder="enter addpatients line2" className="form-control" />
                <br />
                <br/>

                <label htmlFor="ldm">Landmark:</label>
                <input type="text" id="ldm" placeholder="enter your landmark" className="form-control"/>
                <br />
                <br/>

                <label htmlFor="area">Area:</label>
                <input type="text" id ="area" placeholder="enter your area" className="form-control"/>
                <br />
                <br/>
                
                <label htmlFor="town">Town: </label>
                <input type="text" id="town" placeholder="enter your town name" className="form-contol"/>
                <br />
                <br/>

                <label htmlFor="city"> City:</label>
                <input type="text" id="city"  placeholder="enter your city name" className='form-control'/>
                <br />
                <br />

                <label htmlFor="state"> State: </label>
                <input type="text" id="state" placeholder="enter your state" className="form-control"/>
                <br />
                <br />

                <label htmlFor="pnc"> Pincode:
                <input type="number" id="pnc" placeholder="enter your pincode" className="form-control"/>
                </label>
                <br />
                <br />
                
          <button type="submit">Submit</button>
        </form>

        </div>
    </>

  )
}

export default AddressDetails