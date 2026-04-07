import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import Lottie from "lottie-react"
import editAnim from "../assets/edit.json"
import deleteAnim from "../assets/delete.json"
import copyAnim from "../assets/copy.json"
import { v4 as uuidv4 } from 'uuid'

const Manager = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
    
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "", id: null })
    const [passwordsArray, setPasswordArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Fetch all passwords
    const getPasswords = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`${API_BASE_URL}/passwords`)
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
            }
            
            const result = await response.json()
            
            if (result.success) {
                setPasswordArray(result.data || [])
            } else {
                throw new Error(result.message || 'Failed to fetch passwords')
            }
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to load passwords'
            setError(errorMsg)
            toast.error(errorMsg, { position: "top-right" })
            console.error('Error fetching passwords:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPasswords()
    }, [])

    const showPassword = () => {
        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text"
            ref.current.src = "icons/hidden.png"
        } else {
            passwordRef.current.type = "password"
            ref.current.src = "icons/eye.png"
        }
    }

    const savePassword = async () => {
        // Validate inputs
        if (!form.site || !form.username || !form.password) {
            toast.error('All fields are required!', { position: "top-right" })
            return
        }

        try {
            setLoading(true)
            setError(null)
            const newId = form.id || uuidv4()
            const newEntry = { 
                site: form.site, 
                username: form.username, 
                password: form.password, 
                id: newId 
            }

            if (form.id) {
                // Update existing password
                const response = await fetch(`${API_BASE_URL}/passwords/${form.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry)
                })
                
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
                }
                
                const result = await response.json()
                
                if (result.success) {
                    // Update local array
                    setPasswordArray((prev) =>
                        prev.map((item) => (item.id === form.id ? result.data : item))
                    )
                    toast.success('Password updated successfully!', { position: "top-right" })
                } else {
                    throw new Error(result.message || 'Failed to update password')
                }
            } else {
                // Create new password
                const response = await fetch(`${API_BASE_URL}/passwords`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry)
                })
                
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
                }
                
                const result = await response.json()
                
                if (result.success) {
                    // Add to local array
                    setPasswordArray((prev) => [...prev, result.data])
                    toast.success('Password saved successfully!', { position: "top-right" })
                } else {
                    throw new Error(result.message || 'Failed to save password')
                }
            }

            // Reset form
            setForm({ site: "", username: "", password: "", id: null })
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to save password'
            setError(errorMsg)
            toast.error(errorMsg, { position: "top-right" })
            console.error('Error saving password:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
        navigator.clipboard.writeText(text)
    }

    const EditAnimation = ({ onClick, width = 30, height = 30 }) => {
        return (
            <div onClick={onClick} style={{ width, height, cursor: "pointer" }}>
                <Lottie animationData={editAnim} loop={true} />
            </div>
        )
    }

    const DeleteAnimation = ({ onClick, width = 25, height = 25 }) => {
        return (
            <div onClick={onClick} style={{ width, height, cursor: "pointer" }}>
                <Lottie animationData={deleteAnim} loop={true} />
            </div>
        )
    }

    const CopyAnimation = ({ onClick, width = 25, height = 25 }) => {
        return (
            <div onClick={onClick} style={{ width, height, cursor: "pointer" }}>
                <Lottie animationData={copyAnim} loop={true} />
            </div>
        )
    }

    const deletePassword = async (id) => {
        const confirmed = window.confirm("Do you really want to delete this password?")
        if (!confirmed) return

        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`${API_BASE_URL}/passwords/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
            }
            
            const result = await response.json()
            
            if (result.success) {
                setPasswordArray((prev) => prev.filter((item) => item.id !== id))
                toast.success('Password deleted successfully!', { position: "top-right" })
            } else {
                throw new Error(result.message || 'Failed to delete password')
            }
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Failed to delete password'
            setError(errorMsg)
            toast.error(errorMsg, { position: "top-right" })
            console.error('Error deleting password:', err)
        } finally {
            setLoading(false)
        }
    }

    const editPassword = (id) => {
        const selected = passwordsArray.find(i => i.id === id)
        if (!selected) return
        setForm(selected)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="px-2 md:px-0 md:container mx-auto max-w-4xl my-2 flex-col">
                <div className='my-5 text-center'>
                    <div className="logo font-bold text-2xl">
                        <span className='text-green-500 font-bold'>&lt;</span>
                        Pass
                        <span className='text-green-500 font-bold'>OP/&gt;</span>
                    </div>
                    <p className='font-sm text-sm'>Your own password Manager</p>
                </div>

                {error && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                        Error: {error}
                    </div>
                )}

                <div className='flex gap-10 py-2 justify-center'>
                    <input 
                        value={form.site} 
                        onChange={handleChange} 
                        className='border border-green-500 rounded-sm p-2 py-0.5 w-150' 
                        type="text" 
                        placeholder='Enter website URL' 
                        name='site'
                        disabled={loading}
                    />
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-20 py-5'>
                    <input 
                        value={form.username} 
                        onChange={handleChange} 
                        className='border border-green-500 rounded-sm p-2 py-0.5 w-full md:w-50' 
                        type="text" 
                        placeholder='Enter Username' 
                        name='username'
                        disabled={loading}
                    />
                    <div className="relative">
                        <input 
                            ref={passwordRef} 
                            value={form.password} 
                            onChange={handleChange} 
                            className='border border-green-500 rounded-sm p-2 py-0.5 w-full md:w-50' 
                            type="password" 
                            placeholder='Enter Password' 
                            name='password'
                            disabled={loading}
                        />
                        <span className="absolute right-1 top-1.5" onClick={showPassword}>
                            <img ref={ref} className='w-5 cursor-pointer' src="icons/eye.png" alt="eye" />
                        </span>
                    </div>
                </div>
                <div className='flex justify-center py-3'>
                    <button 
                        onClick={savePassword} 
                        className='flex border border-green-800 px-5 py-1 bg-green-500 text-lg items-center rounded-full hover:bg-green-300 cursor-pointer gap-1 disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={loading}
                    >
                        <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
                        <span>{loading ? 'Processing...' : form.id ? 'Update' : 'Save'}</span>
                    </button>
                </div>

                <div className='passwords py-5 flex-direction-col'>
                    <h2 className='font-semibold text-xl py-2'>Your Passwords</h2>
                    
                    {loading && !passwordsArray.length && (
                        <div className='text-center text-xl py-2'>Loading passwords...</div>
                    )}
                    
                    {!loading && passwordsArray.length === 0 && (
                        <div className='text-center text-xl py-2'>No passwords to show you!</div>
                    )}
                    
                    {passwordsArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-700 text-white'>
                                <tr>
                                    <th className='py-1'>Site</th>
                                    <th className='py-1'>Username</th>
                                    <th className='py-1'>Password</th>
                                    <th className='py-1'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordsArray.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className='text-center py-2 border border-white'>
                                                <a href={item.site} target='_blank' rel="noreferrer">{item.site}</a>
                                            </td>
                                            <td className='text-center py-2 border border-white'>{item.username}</td>
                                            <td className='text-center py-2 border border-white'>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <span>{item.password}</span>
                                                    <CopyAnimation onClick={() => copyText(item.password)} />
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-white flex justify-center items-center gap-2'>
                                                <EditAnimation onClick={() => editPassword(item.id)} />
                                                <DeleteAnimation onClick={() => deletePassword(item.id)} />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
