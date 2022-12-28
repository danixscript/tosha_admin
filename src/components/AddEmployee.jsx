function AddEmployee(props) {
    return (
      <div className="">
        <form
          action=""
          className="flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.createEmployee.handleSubmit}
        >
         <label htmlFor="name">שם עובד:</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className="inputEmp"
            name="name"
            values={props.createEmployee.values.name}
            onChange={props.createEmployee.handleChange}
          />
          <label htmlFor="cat">טלפון:</label>
          <input
            type="number"
            label="description"
            placeholder="phone"
            className="inputEmp"
            name="phone"
            values={props.createEmployee.values.phone}
            onChange={props.createEmployee.handleChange}
          />
  
          <label htmlFor="password">סיסמה:</label>
  
          <input
          type='password'
          className="inputEmp"
            values={props.createEmployee.values.password}
            onChange={props.createEmployee.handleChange}
            name="password"
            id="password"
          />
         
          <div className="flexrow indivcheck">
          <label htmlFor="cat">הרשאות מנהל?</label>
          <input type="checkbox" className="checkbox"
           values={props.createEmployee.values.permissions}
           onChange={props.createEmployee.handleChange} name="permissions" id="permissions" />
          
          </div>
  
          <button  className="btn" type="submit">send</button>
        </form>
      </div>
    );
  }
  
  export default AddEmployee;
  