function AddProviderForm(props) {
    return (
      <div className="">
        <form
          action=""
          className="flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.addProvider.handleSubmit}
        >
         <label htmlFor="name">שם חברה:</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className="inputEmp"
            name="name"
            values={props.addProvider.values.name}
            onChange={props.addProvider.handleChange}
          />
          <label htmlFor="cat">שם הסוכן:</label>
          <input
            type="text"
            label="description"
            placeholder="agent name"
            className="inputEmp"
            name="agentname"
            values={props.addProvider.values.agentname}
            onChange={props.addProvider.handleChange}
          />
  
          <label htmlFor="address">כתובת:</label>
  
          <input
          type='text'
          className="inputEmp"
            values={props.addProvider.values.address}
            onChange={props.addProvider.handleChange}
            name="address"
            id="address"
          />
         
          <label htmlFor="cat"> טלפון</label>
          <input type="number" className="inputEmp"
           values={props.addProvider.values.phone}
           onChange={props.addProvider.handleChange} 
           name="phone" id="phone" />
            <label htmlFor="address">אימייל:</label>
                
                <input
                type='email'
                className="inputEmp"
                    values={props.addProvider.values.email}
                    onChange={props.addProvider.handleChange}
                    name="email"
                    id="email"
                />

<label htmlFor="address">מיקוד:</label>
                
                <input
                type='number'
                className="inputEmp"
                    values={props.addProvider.values.zipcode}
                    onChange={props.addProvider.handleChange}
                    name="zipcode"
                    id="zipcode"
                />

<label htmlFor="address">קטגוריה:</label>
                
                <input
                type='text'
                className="inputEmp"
                    values={props.addProvider.values.cat}
                    onChange={props.addProvider.handleChange}
                    name="cat"
                    id="cat"
                />
<br />
  
          <button  className="btn" type="submit">send</button>
        </form>
      </div>
    );
  }
  
  export default AddProviderForm;
  