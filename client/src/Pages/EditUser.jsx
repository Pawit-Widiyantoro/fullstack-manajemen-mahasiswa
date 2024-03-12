import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [universitas, setUniversitas] = useState("");
    const [jurusan, setJurusan] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault(); 
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
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

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setUniversitas(response.data.universitas);
        setJurusan(response.data.jurusan);
        console.log(response.data);
    }

  return (
    <div className='flex mt-5 justify-center'>
        <div className='flex w-1/2'>
            <form onSubmit={updateUser} className='w-full'>
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
                    Edit
                </button>
            </form>
        </div>
    </div>
  )
}

export default EditUser