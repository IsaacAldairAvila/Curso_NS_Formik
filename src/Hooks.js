import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido'
  }
  if (values.name.length < 10) {
    errors.name = 'Nombre corto'
  }
  if (!values.lastname) {
    errors.lastname = 'Se necesita apellido'
  }
  if (!values.email) {
    errors.email = 'coloque su correo'
  }
  return errors
}


const Hooks = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '10px'}} >
      <h1>Hooks</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br />
        <label>Apellido</label>
        <input type="text" {...formik.getFieldProps('lastname')} />
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
        <br />
        <label>Correo</label>
        <input type="text" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <button type='submit'>enviar</button>
      </form>
    </div>
  );
}

export default Hooks;
