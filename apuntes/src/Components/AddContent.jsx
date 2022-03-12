import React, { useState } from 'react'
import '../style.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import api from '../api/info';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

function AddContent() {
    const { register, handleSubmit, reset } = useForm();
    const [info, setInfo] = useState([]);

    const addInfo = async (info) => {
        const request = {
            id: uuidv4(),
            ...info,
            subTitle: '',
            content: ''
        }
        const response = await api.post('/info', request);
        reset();
        /* const request = {
             id: uuidv4(),
             ...info,
             subTitle: '',
             content: ''
         }
         const response = await api.post('/info', request);
         setInfo([...info, response.data]);
         /* */
    }
    const onSubmit = data => {
        addInfo(data);
    };

    return (
        <div className='paper-container'>
            <div className='title'>
                <h1>Add Topic</h1>
            </div>
            <form className='add-content' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className='add-content__input' {...register("title")} />
                <button type='submit' style={{ background: 'none', color: 'inherit', border: 'none' }}><AddCircleIcon sx={{ fontSize: '50px', cursor: 'pointer' }} /></button>
            </form>
        </div>
    )
}

export default AddContent