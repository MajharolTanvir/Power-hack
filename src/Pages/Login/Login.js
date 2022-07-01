import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import login from '../../Uilities/login-form-template_123447-475.webp'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading'


const validate = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8).required(" Required"),

})

const Login = () => {
    const navigate = useNavigate()

    const { data: registers, isLoading, refetch } = useQuery('register', () => fetch('http://localhost:5000/registration').then(res => res.json()))

    console.log(registers);



    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        validationSchema: validate,
        onSubmit: async (values) => {
            const email = values.email
            const filter = registers.map(register => register.email)
            if (email === filter) {
                navigate('/')
                toast.success("Login successfully")
            }
        },
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const { handleSubmit } = formik;
    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src={login} className="w-full" alt="Phone img"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <FormikProvider value={formik}>
                            <Form autoComplete='off' onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input {...formik.getFieldProps('email')} id='email' type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                                    <label className="label">
                                        {formik.touched.email && formik.errors.email ? (
                                            <p className='text-primary'>{formik.errors.email}</p>
                                        ) : null}

                                    </label>
                                </div>
                                <div className="mb-6">
                                    <input {...formik.getFieldProps('password')} id='password' type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                                    <label className="label">
                                        {formik.touched.password && formik.errors.password ? (
                                            <p className='text-primary'>{formik.errors.password}</p>
                                        ) : null}

                                    </label>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <p className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Create an account?</p>
                                    </div>
                                    <a href="/registration" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Registration here.</a>
                                </div>

                                <button type="submit" className="p-1 h-10 bg-blue-700 text-white font-bold rounded-lg w-full" data-mdb-ripple="true" >Sign in</button>
                            </Form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;