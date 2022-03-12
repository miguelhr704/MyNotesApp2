import React, { useEffect, useState } from 'react'
import '../style.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import api from '../api/info';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Content() {
    const location = useLocation()
    const { title } = location.state



    const { register, handleSubmit, reset } = useForm();
    const [info, setInfo] = useState([]);
    const [info2, setinfo2] = useState([]);
    const onSubmit = data => addInfo(data);

    const addInfo = async (info) => {
        const request = {
            id: uuidv4(),
            title: title,
            ...info
        }
        const response = await api.post('/info', request);
        getAllInfo();
        reset();
    }

    const getInfo = async () => {
        const response = await api.get('/info');
        return response.data;
    }
    const getAllInfo = async () => {
        const allInfos = await getInfo();
        if (allInfos) setinfo2(allInfos);
    }

    const ShowInfo = (info) => {
        return (
            info2.map((infos) => {
                if (infos.title === title) {
                    return (
                        <div className='content' key={infos.id}>
                            <h1>{infos.subTitle}</h1>
                            <h4>{infos.content}</h4>
                        </div>
                    )
                }
            })
        )
    }

    useEffect(() => {
        getAllInfo();
    }, [])

    return (
        <div className='paper-container'>
            <div className='title'>
                <h1>🌖🌗🌘{title}🌒🌓🌔</h1>
            </div>
            <ShowInfo info={info2} />

            <div className='title'>
                <h1>Add Information</h1>
            </div>
            <form className='add-info' onSubmit={handleSubmit(onSubmit)}>
                <div className='add-content__info'>
                    <input type='text' className='add-content__input' placeholder='Title' {...register("subTitle")} autoComplete='off' />
                </div>
                <div className='add-content__info'>
                    <input type='text' className='add-content__input' placeholder='Information' {...register("content")} autoComplete='off' />
                </div>
                <div className='add-content__info'>

                    <button type='submit' style={{ background: 'none', color: 'inherit', border: 'none' }}><AddCircleIcon sx={{ fontSize: '50px', cursor: 'pointer' }} /></button>
                </div>
            </form>

        </div>
    )
}

export default Content