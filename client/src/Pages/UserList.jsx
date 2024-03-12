import React, { useEffect, useState } from 'react'
import Button from '../components/elements/Button'
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex justify-center mt-5'>
        <div className='w-1/2 mt-3'>
            <div className="flex justify-end mb-3">
                <Link to='/add' className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 font-semibold rounded ml-auto'>
                    Tambah Mahasiswa
                </Link>
            </div>
            <table className='table-auto w-100 mt-3'>
                <thead>
                    <tr className='border-collapse border-b border-slate-500'>
                        <th className='px-2 py-2'>No.</th>
                        <th className='px-5 py-2'>Nama</th>
                        <th className='px-5 py-2'>Email</th>
                        <th className='px-5 py-2'>Universitas</th>
                        <th className='px-5 py-2'>Jurusan</th>
                        <th className='px-5 py-2'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {users.map((user, index)=> (
                        <tr className='border-b' key={user.id}>
                            <td className='px-2 py-2'>{index+1}</td>
                            <td className='px-5 py-2'>{user.name}</td>
                            <td className='px-5 py-2'>{user.email}</td>
                            <td className='px-5 py-2'>{user.universitas}</td>
                            <td className='px-5 py-2'>{user.jurusan}</td>
                            <td className='px-5 py-2'>
                                <div className='flex gap-2'>
                                <Button href={`/edit/${user.id}`} type='submit' onclick="" color='green'>Update</Button>
                                <Button onclick={() => deleteUser(user.id)} type='submit' color='red'>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default UserList