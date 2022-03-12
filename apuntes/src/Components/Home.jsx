import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import api from '../api/info';

function Home() {
    const [info, setinfo] = useState([]);
    const [content, setcontent] = useState([]);
    const getInfo = async () => {
        const response = await api.get('/info');
        return response.data;
    }
    const getAllInfo = async () => {
        const allInfos = await getInfo();
        if (allInfos) setinfo(allInfos);
    }

    const MostrarInfo = (infor) => {
        let infoName = 'as';

        return (
            info.map((infos) => {
                if (infos.title !== infoName) {
                    infoName = infos.title;
                    return (
                        <Link to='/content' className='home-content' key={infos.id} state={{ title: infos.title }}>
                            {infos.title}
                        </Link>
                    )
                }
            })
        )
        /*info.map((infos) => {
            if (infos.title !== infoName) return (

                <Link to='/content' className='home-content' key={infos.id}>
                    {infos.title}
                </Link>            
            )
        })*/
    }

    useEffect(() => {
        getAllInfo();

    }, [])

    return (<div className='paper-container'>
        <div className='title'>
            <h1>Select Topic</h1>
        </div>
        <div className='home'>
            <MostrarInfo info={info} />
        </div>

    </div>
    )
}

export default Home