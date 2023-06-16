import * as yup from 'yup'

export const personalInfoSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required()
})