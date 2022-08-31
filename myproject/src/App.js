import React from "react";
import "./App.css";

function App() {
  const[formData, setFormData] = React.useState(
    {
      firstname:'',
      lastname:'',
      email:'',
      username:'',
      isChecked:false,
      employment: false
    }
    )

    // console.log(formData)

    function handleFormData(event){
      const{name, value, type, checked} = event.target
      setFormData(prevFormDate =>{
        return {
          ...prevFormDate,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    function submitFormData(event){
      event.preventDefault()
      console.log(formData )
    }


  return (
    <div className="App">
      <form className="form" onSubmit= {submitFormData}>
        <h2 className="heading">Personal Details</h2>
        <input 
            type="text" 
            placeholder="First Name"
            className="input"
            name="firstname"
            value={formData.firstname}
            onChange={handleFormData}

         />
        <br />
        <br />
        <input 
            type="text"
            placeholder="Last Name"
            className="input"
            name="lastname"
            value={formData.lastname}
            onChange={handleFormData}

         />
        <br />
        <br />
        <input 
          type="email"
          placeholder="qwerty@gmail.com"
          className="input"
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <br />
        <br />
        <input 
          type="text"
          placeholder="User Name"
          className="input"
          name="username"
          value={formData.username}
          onChange={handleFormData}

        />
        <br />
        <br />
      
          <input
            className="gender"
            type="checkbox"
            onChange={handleFormData}
            id ="human"  
            name="isChecked" 
            checked={formData.isChecked}        
          />
          <label htmlFor="human">Check If Human</label>
    
        <fieldset className="fieldset">
          <legend>Employment Details</legend>
          <input 
          type="radio"
          id="unemployed"
          className="input"
          name="employment"
          onChange={handleFormData}
          value ="unemployed"
          checked={formData.employment === "unemployed" }

        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <br />
        <input 
          type="radio"
          id="parttime"
          className="input"
          name="employment"
          onChange={handleFormData}
          value ="partTime"
          checked={formData.employment === "partTime" }

        />
        <label id="parttime">Part Time</label>
        <br />
        <br />
        <input 
          type="radio"
          id="fulltime"
          className="input"
          name="employment"
          onChange={handleFormData}
          value ="fullTime"
          checked={formData.employment === "fullTime" }

        />
        <label id="fulltime">Full Time</label>
        </fieldset>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
