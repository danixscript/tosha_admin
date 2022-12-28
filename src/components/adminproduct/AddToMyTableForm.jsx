function AddToMyTableForm(props) {
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
            label="itemname"
            placeholder="item name"
            className=""
            name="itemname"
            values={props.addProductToMyTableOnFormik.values.itemname}
            onChange={props.addProductToMyTableOnFormik.handleChange}
          />
           <label htmlFor="productimg"> לינק לתמונה:</label>
          <input
            type="text"
            label="productimg"
            placeholder="productimg"
            className=""
            name="productimg"
            values={props.addProductToMyTableOnFormik.values.productimg}
            onChange={props.addProductToMyTableOnFormik.handleChange}
          />
          <label htmlFor="providersid">שם החברה:</label>
          <select
        className=""
          values={props.addProductToMyTableOnFormik.values.producttype}
          onChange={props.addProductToMyTableOnFormik.handleChange}
          name="producttype"
          id="producttype"
        >
                <option  value="מתוקים">מתוקים</option>
                                <option  value="prod">מוצר ארוז</option>
                                                <option  value="salt">מלוחים</option>


                <option  value="drink">שתיה</option>
                                <option  value="bred">לחם</option>

                <option  value="hotdrink">שתיה חמה</option>
        </select>
  
          <label htmlFor="address">מחיר:</label>
  
          <input
          type='number'
          className=""
            values={props.addProductToMyTableOnFormik.values.price}
            onChange={props.addProductToMyTableOnFormik.handleChange}
            name="price"
            id="price"
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
  
  export default AddToMyTableForm;
  