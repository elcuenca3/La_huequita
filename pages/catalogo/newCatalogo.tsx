import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import style from "../../styles/formulario.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const New = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    imagen: "",
  });

  function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

  const [message, setMessage] = useState([]);

  const handleChanege = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      console.log(form);

      const res = await fetch("/api/catalogo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json;
      console.log(data);
      router.push("/catalogo");
      if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
        }

        router.push("/catalogo");
      }
    } catch (error) {
      console.log(error);
      console.log("hola");
    }
  };
  return (
    <div>
      <Header />
      <h1> Formulario Catalogo </h1>
      <div className={style.container}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <p>Nombre de la categoria:</p>
          <input
            autoComplete="off"
            name="nombre"
            className={style.box}
            type="text"
            placeholder="Ingrese el nombre de la categoria "
            value={form.nombre}
            onChange={handleChanege}
          />
          <p>Imagen de la categoria:</p>
          <input
            autoComplete="off"
            name="imagen"
            className={style.box}
            type="file"
            placeholder="Ingrese la url de la Imagen "
            value={form.imagen}
            defaultValue="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/Catalogo/bebidas.jpg"
            accept="image/*"
            onChange={handleChanege}
          />
          <button className={style.boton} type="submit" onClick={postData}> Guardar </button>
          {message.map(({ message }) => (
            <p key={message}> {message} </p>
          ))}
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default New;
