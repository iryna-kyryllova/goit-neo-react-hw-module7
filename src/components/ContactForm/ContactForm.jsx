import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { addContact } from '../../redux/contactsOps'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  const nameId = useId()
  const numberId = useId()
  const dispatch = useDispatch()

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('The field is required'),
    number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('The field is required')
  })

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then((res) => toast.success(`Contact ${res.name} successfully added!`))
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}>
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' id={nameId} name='name' />
          <ErrorMessage name='name' component='span' />
        </div>
        <div className={styles.field}>
          <label htmlFor={numberId}>Number</label>
          <Field type='tel' id={numberId} name='number' />
          <ErrorMessage name='number' component='span' />
        </div>
        <button type='submit' className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm
