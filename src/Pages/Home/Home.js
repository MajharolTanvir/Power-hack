import React, { useState } from 'react';
import Modal from './Modal/Modal';
import Table from './Table/Table';

const Home = ({ bills, isLoading, refetch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [userInput, setUserInput] = useState("")

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleChange = e => {
        const searchValue = e.target.value.toLowerCase()
        const searchEmail = bills.filter(b => b.email.toLowerCase().includes(searchValue))
        setUserInput(searchEmail)
    }

    return (
        <div className='container mx-auto my-10 bg-gray-300 p-5'>
            <div className='md:flex items-center justify-between border-b-2'>
                <div className="flex justify-center items-center">
                    <p className='font-bold mx-2'>Billings</p>
                    <div className="mb-3 xl:w-96">
                        <input onChange={handleChange} type="search" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleSearch" placeholder="Type query" />
                    </div>
                </div>
                <div className="flex space-x-2 justify-center">
                    <div className="">
                        <button type="button" onClick={openModal} className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> Add New Bill
                        </button>
                        {isOpen && <Modal
                            closeModal={closeModal}
                            isOpen={isOpen}
                            refetch={refetch}
                        ></Modal>}
                    </div>
                </div>
            </div>
            <Table
                bills={bills}
                isLoading={isLoading}
                refetch={refetch}
                userInput={userInput}
            ></Table>
        </div>
    );
};

export default Home;