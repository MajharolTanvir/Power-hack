import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';

const validate = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().min(10).max(10).required("Required"),
    amount: Yup.number().required("Required"),

})

const UpdateModal = ({ isOpen, closeModal, id, refetch }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            amount: ""
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            const bill = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                amount: values.amount,
            }
            closeModal()

            fetch(`http://localhost:5000/update-billing/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bill)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        toast.success("Your bill updated successfully")
                        refetch()
                    }
                })


        },
    })

    const { handleSubmit } = formik;

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="w-full">
                                        <FormikProvider value={formik}>
                                            <Form autoComplete='off' onSubmit={handleSubmit}>
                                                <div className="mb-6">
                                                    <input {...formik.getFieldProps('name')} id='name' type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name" />
                                                    <label className="label">
                                                        {formik.touched.name && formik.errors.name ? (
                                                            <p className='text-primary'>{formik.errors.name}</p>
                                                        ) : null}

                                                    </label>
                                                </div>
                                                <div className="mb-6">
                                                    <input {...formik.getFieldProps('email')} id='email' type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                                                    <label className="label">
                                                        {formik.touched.email && formik.errors.email ? (
                                                            <p className='text-primary'>{formik.errors.email}</p>
                                                        ) : null}

                                                    </label>
                                                </div>
                                                <div className="mb-6">
                                                    <input {...formik.getFieldProps('phone')} id='phone' type="number" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Phone" />
                                                    <label className="label">
                                                        {formik.touched.phone && formik.errors.phone ? (
                                                            <p className='text-primary'>{formik.errors.phone}</p>
                                                        ) : null}

                                                    </label>
                                                </div>
                                                <div className="mb-6">
                                                    <input {...formik.getFieldProps('amount')} id='amount' type="number" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Amount" />
                                                    <label className="label">
                                                        {formik.touched.amount && formik.errors.amount ? (
                                                            <p className='text-primary'>{formik.errors.amount}</p>
                                                        ) : null}

                                                    </label>
                                                </div>
                                                <div className="mb-6">
                                                    <button type="submit" onClose={closeModal} className="w-full bg-sky-700 py-2 rounded-md text-white font-medium" data-mdb-ripple="true" data-mdb-ripple-color="light">Submit</button>
                                                </div>
                                            </Form>
                                        </FormikProvider>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default UpdateModal;