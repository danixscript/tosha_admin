function EditProviderForm(props) {
  return (
    <div className="">
      <form
        action=""
        className="flexcol"
        noValidate
        autoComplete="off"
        onSubmit={props.EditProvider.handleSubmit}
      >
        <label htmlFor="name">שם חברה:</label>
        <input
          type="text"
          label="name"
          placeholder="name"
          className="inputEmp"
          name="name"
          values={props.EditProvider.values.name}
          value={props.EditProvider.values.name}
          onChange={props.EditProvider.handleChange}
        />
        <label htmlFor="cat">שם הסוכן:</label>
        <input
          type="text"
          label="description"
          placeholder="agent name"
          className="inputEmp"
          name="agentname"
          values={props.EditProvider.values.agentname}
          value={props.EditProvider.values.agentname}
          onChange={props.EditProvider.handleChange}
        />

        <label htmlFor="address">כתובת:</label>

        <input
          type="text"
          className="inputEmp"
          values={props.EditProvider.values.address}
          value={props.EditProvider.values.address}
          onChange={props.EditProvider.handleChange}
          name="address"
          id="address"
        />

        <label htmlFor="cat"> טלפון</label>
        <input
          type="number"
          className="inputEmp"
          values={props.EditProvider.values.phone}
          value={props.EditProvider.values.phone}
          onChange={props.EditProvider.handleChange}
          name="phone"
          id="phone"
        />
        <label htmlFor="address">אימייל:</label>

        <input
          type="email"
          className="inputEmp"
          values={props.EditProvider.values.email}
          value={props.EditProvider.values.email}
          onChange={props.EditProvider.handleChange}
          name="email"
          id="email"
        />

        <label htmlFor="address">מיקוד:</label>

        <input
          type="number"
          className="inputEmp"
          values={props.EditProvider.values.zipcode}
          value={props.EditProvider.values.zipcode}
          onChange={props.EditProvider.handleChange}
          name="zipcode"
          id="zipcode"
        />

        <label htmlFor="address">קטגוריה:</label>

        <input
          type="text"
          className="inputEmp"
          values={props.EditProvider.values.cat}
          value={props.EditProvider.values.cat}
          onChange={props.EditProvider.handleChange}
          name="cat"
          id="cat"
        />
        <br />

        <button className="btn" type="submit">
          send
        </button>
      </form>
    </div>
  );
}

export default EditProviderForm;
