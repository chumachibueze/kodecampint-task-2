import React from 'react';

const Redirectpage = () => {
    
    //  creating an empty array that will hold all the data stored in the local storage.
    const Data = [];

    //  To get items that is stored in the localstorage and loop through them.
    for(let i = 0; i< sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        
        const transValue = JSON.parse(value);
        // pushing all the data gotten from the local storage into the empty array(Data).
        Data.push(transValue);
    }

  return (
      <div className="container-fluid">
        <div className='container my-5'>
            {
            Data.map((personaldata) => (
                <div>
                    <h3 className='text-center purple mb-5'> Hello {personaldata.firstName}, this are your details</h3>
                    <div className='p-5 mb-5 shadow rounded-3'>
                        <p>First Name: {personaldata.firstName} </p>
                        <p>Last Name: {personaldata.lastName} </p>
                        <p>Email: {personaldata.email} </p>
                        <p>Address: {personaldata.address} </p>
                        <p>Bio: {personaldata.bio} </p>
                        <p>Gender: {personaldata.male} {personaldata.female} </p>
                    </div>
                </div>
                
            ))
            }
        </div>
      </div>
  )
}

export default Redirectpage;