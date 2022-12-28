function AddProductSourceForm(props) {
    return (
      <div className="">
        <form
          action=""
          className="flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.addProduct.handleSubmit}
        >
         <label htmlFor="name">שם מוצר:</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className=""
            name="name"
            values={props.addProduct.values.name}
            onChange={props.addProduct.handleChange}
          />
           <label htmlFor="productimg"> לינק לתמונה:</label>
          <input
            type="text"
            label="productimg"
            placeholder="productimg"
            className=""
            name="productimg"
            values={props.addProduct.values.productimg}
            onChange={props.addProduct.handleChange}
          />
          <label htmlFor="providersid">שם החברה:</label>
          <select
        className=""
        required
        max='300'
          values={props.addProduct.values.providersid}
          onChange={props.addProduct.handleChange}
          name="providersid"
          id="providersid"
        >
        {props.options.map((e)=>{
            return(
                <option key={e.id} value={e.id}>{e.name}</option>
             
            )
        })}
        </select>
  
          <label htmlFor="address">מחיר:</label>
  
          <input
          type='number'
          className=""
            values={props.addProduct.values.price}
            onChange={props.addProduct.handleChange}
            name="price"
            id="price"
          />
         
<label htmlFor="">סוג</label>
<select
        className=""
        required
        max='300'
          values={props.addProduct.values.producttype}
          onChange={props.addProduct.handleChange}
          name="producttype"
          id="producttype"
        >
          <option value="material">חומר גלם</option>
          <option value="product">מוצר מוגמר</option>
          
        </select>

  
          <button  className="btn" type="submit">send</button>
        </form>
      </div>
    );
  }
  
  export default AddProductSourceForm;
  