import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new'
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";


const Write = () => {
    const { isLoaded, isSignedIn } = useUser();
    const [value, setValue] = useState('')

    const navigate = useNavigation()
    
    const { getToken } = useAuth()

    const mutation = useMutation({

        mutationFn: async (newPost) => {
            const token = await getToken()
            return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        },
        onSuccess: (res) => {
            toast.success('A post has been created!')
            navigate(`/${res.data.slug}`)
        }
    })
    if(!isLoaded) {
        return <div className="">Loading...</div>
    }

    if(isLoaded && !isSignedIn) {
        return <div className="">You must be logged in!</div>
    }

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            title: formData.get('title'),
            category: formData.get('category'),
            desc: formData.get('desc'),
            content: value,

        }
        console.log(data)
        mutation.mutate(data)
    }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className="text-xl font-light">Create a new post</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6' action="">
            <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add Cover Picture</button>
            <input name="title" type="text" placeholder="My Awesome Dream" className="text-4xl font-semibold bg-transparent outline-none" />
            <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm">Pick a category:</label>
                <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
                    <option value='travel'>Travel</option>
                    <option value='dare-devil'>Dare Devil</option>
                    <option value='luxury'>Luxury</option>
                </select>
            </div>
                <textarea 
                    className="p-4 rounded-xl bg-white shadow-md" 
                    name="desc" 
                    placeholder="A Short Description"
                />
                <ReactQuill 
                    theme="snow" 
                    className="flex-1 rounded-xl bg-white shadow-md"
                    value ={value}
                    onChange={setValue}
                />
            <button disabled={ mutation.isPending} 
                className="p-2 mt-4 w-36 bg-blue-800 text-white font-medium rounded-xl disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                {mutation.isPending ? 'Loading...':'SEND'}
            </button>
            { mutation.isError && <span>{mutation.error.message}</span>}
        </form>
    </div>
  )
}

export default Write