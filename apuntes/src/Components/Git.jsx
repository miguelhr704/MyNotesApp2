import React from 'react'
import '../style.css'
import Navbar from './Navbar'

function Git() {
    return (

        <div className='paper-container'>
            <div className='title'>
                <h1>🌖🌗🌘Git🌒🌓🌔</h1>
            </div>
            <div className='content'>
                <h1>git config --global</h1>
                <h4>Apica configuracion global y no por proyecto</h4>
            </div>
            <div className='content'>
                <h1>git config --global user.name "Nombre"</h1>
                <h4>Configura el nombre de Git</h4>
            </div>
            <div className='content'>
                <h1>git config --global user.email email</h1>
                <h4>Configura el correo de Git</h4>
            </div>
            <div className='content'>
                <h1>git config --global core.editor "code --wait"</h1>
                <h4>Configura el editor de texto pordefecto para git "la opcion de wait sirve para que la consola espere a que se ejecute la accion"</h4>
            </div>
            <div className='content'>
                <h1>git config --global -e</h1>
                <h4>Muestra el archivo de configuracion de Git</h4>
            </div>
            <div className='content'>
                <h1>git config --global core.autocrlf true</h1>
                <h4>Modifica el salto de linea dependiendo de que sitema operativo se utilice en windows es cr o lf "true" minetras que en mac o linus solo es ls "input" </h4>
            </div>
            <div className='content'>
                <h1>git config -h</h1>
                <h4>Muestra toda la configuracion desiponible de Git</h4>
            </div>
            <div className='content'>
                <h1>git init</h1>
                <h4>Inicializa el nuevo reporsitorio de git</h4>
            </div>
            <div className='content'>
                <h1>git status</h1>
                <h4>muestra el estado actual del repositorio</h4>
            </div>
            <div className='content'>
                <h1>git add nombre-archivo</h1>
                <h4>selecciona los archivos que va a estar usando git</h4>
            </div>
            <div className='content'>
                <h1>git commit -m "Mensaje"</h1>
                <h4>Prepara los archivos una vez seleccionados se agrega un mensaje para identificar el commit</h4>
            </div>
            <div className='content'>
                <h1>git restore --staged "nombre archivo"</h1>
                <h4>restaura los cambios en un archivo previamente en etapa de commit hacia la etapa de stage</h4>
            </div>
            <div className='content'>
                <h1>git restore "nombre archivo"</h1>
                <h4>restaura los cambios en un archivo</h4>
            </div>
            <div className='content'>
                <h1>Archovp .gitignore</h1>
                <h4>Sirve para ignorar los archivos que no se quieran anadir al commit</h4>
            </div>
            <div className='content'>
                <h1>git diff</h1>
                <h4>muestra los cambios en los archivos que aun no se encuentran en stage de una forma mas visual </h4>
            </div>
            <div className='content'>
                <h1>git diff --staged</h1>
                <h4>muestra los cambios en los archivos que se encuentran en stage de una forma mas visual </h4>
            </div>
            <div className='content'>
                <h1>git log</h1>
                <h4>muestra el historial del repositorio </h4>
            </div>
            <div className='content'>
                <h1>git log --oneline</h1>
                <h4>muestra el historial del repositorio de una mejor forma con un identificador para cada cambio</h4>
            </div>
            <div className='content'>
                <h1>git branch</h1>
                <h4>nos muestra en que rama del repositorio estamos trabajando</h4>
            </div>
            <div className='content'>
                <h1>git checkout -b nombre dela rama</h1>
                <h4>nos muestra en que rama del repositorio estamos trabajando</h4>
            </div>
            <div className='content'>
                <h1>git checkout nombre dela rama</h1>
                <h4>sirve para cambiar de rama</h4>
            </div>
            <div className='content'>
                <h1>git merge nombre de la rama</h1>
                <h4>sirve para recuperar los cambios de una rama a la ramamprincipal</h4>
            </div>
            <div className='content'>
                <h1>git push -u origin nombre de la rama</h1>
                <h4>sube el repositorio a github</h4>
            </div>
            <div className='content'>
                <h1>git push</h1>
                <h4>sube los cambios repositorio a github</h4>
            </div>


        </div>
    )
}

export default Git