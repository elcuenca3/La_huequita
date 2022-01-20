import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import style from "../../styles/formulario.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const New = () => {

        const router = useRouter()

        const [form, setForm] = useState({
            nombre: '',
            logo:'',
            imagen: '',
            historia:'',
            descripcion:'',
            ubicacion:''
        })

        const [message, setMessage] = useState([])

        const handleChanege = (e) => {
            const { value, name } = e.target
            setForm({
                ...form,
                [name]: value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            postData(form)
        }

        const postData = async(form) => {
            try {
                console.log(form);


                const res = await fetch("/api/huecas", {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(form)
                })
                const data = await res.json;
                console.log(data)

                if (!data.success) {
                    for (const key in data.error.errors) {
                        let error = data.error.errors[key]
                        setMessage(oldMessage => [
                            ...oldMessage,
                            { message: error.message }
                        ])


                    }

                    router.push('/huecas');
                }
                router.push('/huecas');

            } catch (error) {
                console.log(error);
            }
        }
        return ( < div >
            <Header/>
            <h1> Formulario Catalogo </h1> 
             <div className = { style.container } >
            <form onSubmit = { handleSubmit } >
            <p >Nombre de la hueca:</p>
            <input autoComplete = "off"
            name = "nombre"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese el nombre de la categoria "
            value = { form.nombre }
            onChange = { handleChanege }
            />  
            <p >URL el logo :</p>
            <input autoComplete = "off"
            name = "logo"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese la url de la Imagen "
            value = { form.logo }
            onChange = { handleChanege }
            />
            <p >Imagen de la hueca:</p>
            <input autoComplete = "off"
            name = "imagen"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese la url de la Imagen "
            value = { form.imagen }
            onChange = { handleChanege }
            />
            <p >Historia de la Hueca:</p>
            <input autoComplete = "off"
            name = "historia"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese la url de la Imagen "
            value = { form.historia }
            onChange = { handleChanege }
            />
            <p >descripcion de la hueca:</p>
            <input autoComplete = "off"
            name = "descripcion"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese la url de la Imagen "
            value = { form.descripcion}
            onChange = { handleChanege }
            />
            <p >Ubicacion de la hueca:</p>
            <input autoComplete = "off"
            name = "ubicacion"
            className = { style.box }
            type = "text"
            placeholder = "Ingrese ubicacion de la hueca "
            value = { form.ubicacion }
            onChange = { handleChanege }
            />
             <button type = "submit" > Guardar </button> 
             {
                 
            message.map(({ message }) => ( < p key = { message } > { message } </p>))}



                </form>  
                </div >


                <Footer/>
                </div>

            );
        };
        export default New;