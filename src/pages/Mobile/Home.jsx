import React from 'react'
import TextField from '../../components/TextField'
import { useFormik } from 'formik'
import { personalInfoSchema } from '../../BaseSchema'

function Home() {
  const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
    initialValues:{
      name:'',
      email: '',
      phoneNumber: ''
    },
    onSubmit: () => {

    },
    validationSchema: personalInfoSchema
  })
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
      <h1 className='text-2xl text-marine-blue font-bold'>Personal Info</h1>
      <p className="text-cool-gray text-lg">Please provide your name, email address, and phone number.</p>
      </div>
      <div className="flex flex-col gap-3">
        <TextField
        label="Name"
        name="name"
        touched={touched.name}
        value={values.name}
        isError={touched.name && errors.name}
        placeholder={"e.g. Stephen King"}
        type={"text"}
        onBlur={handleBlur}
        onChange={handleChange}
        />
        <TextField
        label="Email Address"
        name={"email"}
        value={values.email}
        touched={touched.name}
        isError={touched.email && errors.email}
        placeholder={"e.g. stephenking@lorem.com"}
        type={"email"}
        onBlur={handleBlur}
        onChange={handleChange}
        />
        <TextField
        label="Phone Number"
        name={"phoneNumber"}
        onBlur={handleBlur}
        value={values.phoneNumber}
        touched={touched.phoneNumber}
        isError={touched.name && errors.name}
        placeholder={"e.g. +1 234 567 890"}
        type={"text"}
        onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default Home
