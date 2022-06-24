import { Formik, Form, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Radio from './components/Radio'
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
  if (!values.radio) {
    errors.radio = 'seleccione uno'
  }
  return errors
}
const App = () => {
  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '10px' }} >
      <h1> Componentes </h1>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          check: false,
          select: '',
          radio: ''
        }}
        validate={validate}
        onSubmit={values => console.log(values)}
      >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <TextInput name="name" label="Nombre" required></TextInput>
          <TextInput name="lastname" label="Apellido" ></TextInput>
          <TextInput name="email" label="Correo" type="email"></TextInput>
          <TextInput name="password" label="Contraseña" type="password"></TextInput>
          <Checkbox name="check">hola</Checkbox>
          <Select label="tipo" name="select">
            <option value=''>Seleccione</option>
            <option value="feliz">Feliz</option>
            <option value="triste">Triste</option>
            <option value="emocionado">Emocionado</option>
          </Select>
          <Radio name="radio" value="opcion1" label="opcion 1" />
          <Radio name="radio" value="opcion2" label="opcion 2" />
          <Radio name="radio" value="opcion3" label="opcion 3" />
          <ErrorMessage name="radio" />
          <button type='submit'>enviar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;

