function AddMaterialForm(props) {
    return (
      <div className="">
        <form
          action=""
          className="flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.addProductToMyTableOnFormik.handleSubmit}
        >
         <label htmlFor="name">שם מוצר:</label>
          <input
            type="text"
            label="materialname"
            placeholder="item name"
            className=""
            name="materialname"
            values={props.addProductToMyTableOnFormik.values.materialname}
            onChange={props.addProductToMyTableOnFormik.handleChange}
          />
           <label htmlFor="materialimg"> לינק לתמונה:</label>
          <input
            type="text"
            label="materialimg"
            placeholder="materialimg"
            className=""
            name="materialimg"
            values={props.addProductToMyTableOnFormik.values.materialimg}
            onChange={props.addProductToMyTableOnFormik.handleChange}
          />
       
          <label htmlFor="address">מחיר:</label>
  
          <input
          type='number'
          className=""
            values={props.addProductToMyTableOnFormik.values.materialcoast}
            onChange={props.addProductToMyTableOnFormik.handleChange}
            name="materialcoast"
            id="materialcoast"
          />
         
<label htmlFor="">נקודת איזון</label>
<input
          type='number'
          className=""
            values={props.addProductToMyTableOnFormik.values.minimum}
            onChange={props.addProductToMyTableOnFormik.handleChange}
            name="minimum"
            id="minimum"
          />

<label htmlFor="">  כמות</label>
<input
          type='number'
          className=""
            values={props.addProductToMyTableOnFormik.values.quantity}
            onChange={props.addProductToMyTableOnFormik.handleChange}
            name="quantity"
            id="quantity"
          />

<label htmlFor=""> מיקום במחסן</label>
<input
          type='text'
          className=""
            values={props.addProductToMyTableOnFormik.values.place}
            onChange={props.addProductToMyTableOnFormik.handleChange}
            name="place"
            id="place"
          />

  
          <button  className="btn" type="submit">send</button>
        </form>
      </div>
    );
  }
  
  export default AddMaterialForm;
  