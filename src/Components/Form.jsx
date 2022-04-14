import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [address, setAddress] = useState("");
    const [bio, setBio] = useState("");

    let Navigate = useNavigate ();

    const handlesubmit = (e) => {
        e.preventDefault();

        const personInfo = {
            firstName: fname,
            lastName: lname,
            email: email,
            address: address,
            bio: bio,
            female: female,
            male: male
        }

        // storing all the values from the form-input in the local storage.
        sessionStorage.setItem(fname, JSON.stringify(personInfo));

        setFname("");
        setLname("");
        setEmail("");
        setMale("");
        setFemale("");
        setAddress("");
        setBio("");

        Navigate("/RedirectPage");
    }


  return (
    <div className='container-fluid'>
        <div className="container shadow rounded-3 px-5">
            <div className='form-heading my-5 '>
                <h1 className='purple pt-5 text-center'>Kindly Fill The Form</h1>
            </div>

            <div className='form-container pb-5 mb-5'>
                <form  onSubmit={handlesubmit}>
                    <div className='form-group mb-3'>
                        <label htmlFor="fname" className='form-label'> First Name:</label>
                        <input type="text" name='fname'  placeholder='Enter your first name' className='form-control' required 
                        value={fname} onChange = {(e) => setFname(e.target.value)} />
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor="lname" className='form-label'> Last Name:</label>
                        <input type="text" name='lname'  placeholder='Enter your last name' className='form-control' required 
                        value={lname} onChange = {(e) => setLname(e.target.value)} />
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input type="email" name='email'  placeholder='email' className='form-control' required 
                        value={email} onChange = {(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className='gender-container mb-3'>
                        <p className=''>Gender:</p>
                        <div className='form-check form-check-inline'>
                            <input type="checkbox" name="male" id="male" className='form-check-input'
                            checked={male} onChange = {(e) => setMale(e.target.name)} />
                            <label htmlFor="male" className='form-check-label ps-2'>Male</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input type="checkbox" name="female" id="female" className='form-check-input'
                            checked={female} onChange = {(e) => setFemale(e.target.name)} />
                            <label htmlFor="female" className='form-check-label ps-2'>Female</label>
                        </div>
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor="address" className='form-label'>Address: </label>
                        <input type="text" name='address'  placeholder='Enter your address' className='form-control' required
                        value={address} onChange = {(e) => setAddress(e.target.value)} />
                    </div>

                    <div className='bio-container pb-4'>
                        <p className=''>Bio: </p>
                        <div className='form-floating'>
                            <textarea cols="30" rows="10" className='form-control'
                            value={bio} onChange = {(e) => setBio(e.target.value)}>add your biography</textarea>
                        </div>
                    </div>

                    <div className='my-4 d-flex justify-content-end'>
                        <input type="submit" value="Submit" className='btn text-white mb-4' id="bg-purple" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Form;