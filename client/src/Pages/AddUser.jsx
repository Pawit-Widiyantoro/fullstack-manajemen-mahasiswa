import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [universitas, setUniversitas] = useState("");
    const [jurusan, setJurusan] = useState("");

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault(); 
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                universitas,
                jurusan
            });
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex mt-5 justify-center'>
        <div className='flex w-1/2'>
            <form onSubmit={saveUser} className='w-full'>
                <div className="mb-4">
                    <label className="block text font-bold mb-2" htmlFor="username">
                        Nama
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text font-bold mb-2" htmlFor="universitas">
                        Universitas
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="universitas" 
                        type="text" 
                        placeholder="Universitas" 
                        value={universitas}
                        onChange={(e) => setUniversitas(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text font-bold mb-2" htmlFor="jurusan">
                        Jurusan
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="jurusan" 
                        type="text" 
                        placeholder="Jurusan" 
                        value={jurusan}
                        onChange={(e) => setJurusan(e.target.value)}
                    />
                </div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-800 text-white h-8 px-4 font-semibold rounded'>
                    Save
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddUser