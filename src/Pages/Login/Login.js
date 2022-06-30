import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";


const validate = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8).required(" Required"),

})

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        validationSchema: validate,
        onSubmit: async (values) => {
            console.log(values);
        },
    })

    const { handleSubmit } = formik;


    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone img"
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
                                        <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                                    </div>
                                    <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <p className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Create an account?</p>
                                    </div>
                                    <a href="/registration" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Registration here.</a>
                                </div>

                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign in</button>
                            </Form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;