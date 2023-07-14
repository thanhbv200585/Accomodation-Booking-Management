import React, { useState } from "react";
import axios from "axios";
import Modal from 'react-modal';
import { useParams } from "react-router-dom";
import customerApi from "../../api/customerApi";

const BookingForm = (props) => {
    const { setShowModal } = props
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams()
    let booking = props.booking;
    const handleSubmit = (event) => {
        event.preventDefault();
        booking = {
            ...booking,
            description
        }
        customerApi.createBooking(id, booking).then((res) => {
          console.log(res)
          setShowModal(true)
        }).catch((err) => console.error(err))

    };

  return (
    <form onSubmit={handleSubmit} className="w-5/6 mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          required
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          rows="4"
          placeholder="Enter a brief description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Book Now
        </button>
      </div>


    </form>  
  );
};

export default BookingForm;