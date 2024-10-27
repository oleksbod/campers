import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './CamperContactForm.module.css';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Notifications from '../../Helpers/Notifications/Notifications';
import { useState } from 'react';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bookingDate: Yup.date().required('Booking date is required'),
  comment: Yup.string() // Optional field, no validation required
});

const CamperContactForm = () => {
  const [message, setMessage] = useState('');

  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm();
    setMessage('Your booking has been successful!');
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <h3 className={css.title}>Book your campervan now</h3>

            <div className={css.subTitle}>Stay connected! We are always ready to help you.</div>

            <div className={css.formGroup}>
              <Field
                name="name"
                className={`${css.input} ${touched.name && errors.name ? css.error : ''}`}
                placeholder="Name*"
              />
              <ErrorMessage name="name" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formGroup}>
              <Field
                name="email"
                type="email"
                className={`${css.input} ${touched.email && errors.email ? css.error : ''}`}
                placeholder="Email*"
              />
              <ErrorMessage name="email" component="div" className={css.errorMessage} />
            </div>

            <div className={css.formGroup}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue('bookingDate', date)}
                placeholderText="Booking Date*"
                dateFormat="yyyy-MM-dd"
                onBlur={() => setFieldTouched('bookingDate', true)}
                className={`${css.input} ${touched.bookingDate && errors.bookingDate ? css.error : ''}`}
              />

              {touched.bookingDate && errors.bookingDate && (
                <div className={css.errorMessage}>{errors.bookingDate}</div>
              )}
            </div>

            <div className={css.formGroup}>
              <Field
                name="comment"
                as="textarea"
                className={css.input}
                rows="4"
                placeholder="Comment"
              />
            </div>

            <button className={`${css.button} button`} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>

      <Notifications message={message} severity="success" />
    </div>
  );
};

export default CamperContactForm;
