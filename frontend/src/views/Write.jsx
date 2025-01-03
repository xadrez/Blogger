import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new'
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import Upload from "../components/Upload";


const Write = () => {
    const { isLoaded, isSignedIn } = useUser();
    const { getToken } = useAuth()
    const [value, setValue] = useState('')
    const [cover, setCover] = useState("")
    const [img, setImg] = useState("")
    const [video, setVideo] = useState("")
    const [progress, setProgress] = useState(0)

    useEffect(() =>{
        img && setValue(prev=>prev+`<p><image src='${img.url}' /></p>`)
    },[img])

    useEffect(() =>{
        video && setValue(prev=>prev+`<p><iframe class='ql-video' src='${video.url}' /></p>`)
    },[video])

    const navigate = useNavigate()

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            img: cover.filePath || "",
            title: formData.get('title'),
            category: formData.get('category'),
            desc: formData.get('desc'),
            content: value,

        }
        console.log(data)
        mutation.mutate(data)
    };

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className="text-xl font-light">Create a new post</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6'>
            <Upload type='image' setProgress={setProgress} setData={setCover}>
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                    Add Cover Picture
                </button>
            </Upload>
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
                <div className="flex flex-1">
                    <div className="flex flex-col gap-2 mr-2">
                        <Upload type='img' setProgress={setProgress} setData={setImg}>🖼️</Upload>
                        <Upload type='video' setProgress={setProgress} setData={setVideo}>⏯️</Upload>
                    </div>
                    <ReactQuill 
                        theme="snow" 
                        className="flex-1 rounded-xl bg-white shadow-md"
                        value ={value}
                        onChange={setValue}
                    />
                </div>
            <button disabled={ mutation.isPending || (0 < progress && progress < 100)} 
                className="p-2 mt-4 w-36 bg-blue-800 text-white font-medium rounded-xl disabled:bg-blue-400 disabled:cursor-not-allowed">
                {mutation.isPending ? 'Loading...':'SEND'}
            </button>
            {'progress:' + progress}
            { mutation.isError && <span>{mutation.error.message}</span>}
        </form>
    </div>
  )
}

export default Write