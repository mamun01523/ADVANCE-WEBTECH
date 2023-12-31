import { useState } from 'react';
export default function SignUpForm () {
    
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [parentsName, setParentsName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    const handleChangeParesntsName = (e) => {
        setParentsName(e.target.value);
    };
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform form validation
        let genderSelected = false;
        genderInputs.forEach(input => {
            if (input.checked) {
            genderSelected = true;
            }
        });
        if (!genderSelected) {
            alert('Please select your gender');
            return;
        }


        if (name.trim() === '') {
            setError('Please enter your name');
            return;
          }

          if (classSelect.value === '0') {
            setError('Please select your class');
            return;
          }

          if (isNaN(ageInput) || ageInput <= 0) {
            setError('Please enter a valid age');
            return;
          }

          if (!dob) {
            setError('Please enter your date of birth');
            return;
          }
          const phoneRegex = /^\d{3}-\d{3}-\d{4}$|^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                setError('Please enter a valid phone number (XXX-XXX-XXXX or XXXXXXXXXX)');
                    return;
                }

    if (!email || !password) {
        setError('Email and password are required');
    } else if (!isValidEmail(email)) {
        setError('Invalid email address');
    } else {
        console.log({ email, password });
        setEmail('');
        setPassword('');
        setError('');
        }
    };
    const isValidEmail = (email) => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
    };
    return (
        <>
    <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name ="name" value={name} onChange={handleChangeName} />
            </div>

            <div>
                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value={gender} onChange={handleChangeGender} /> Male
                <input type="radio" id="female" name="gender" value={gender} onChange={handleChangeGender} /> Female
            </div>
            <div>
                <label for="class">Class:</label>
                <select id="class">
                    <option value={0}>Select Class</option>
                    <option value={1}>Class 6</option>
                    <option value={2}>Class 7</option>
                    <option value={3}>Class 8</option>
                    <option value={4}>Class 9</option>
                    <option value={5}>Class 10</option>
                </select>
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="number" id="age"></input>
            </div>
            <div>
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob"></input>
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone"></input>
            </div>
            <div>
              <label>Parent's Name:</label>
              <input type="text" name ="parentsName" value={parentsName} onChange={handleChangeParesntsName} />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name ="address" value={address} onChange={handleAddress} />
            </div>
            
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={handleChangeEmail} />
            </div>
        
        <div>
            <label>Password</label>
            <input type="password"name="password" value={password} onChange={handleChangePassword}/>
        </div>
        
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
        </form>
    </>
);};