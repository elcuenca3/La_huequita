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
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
            type="text"
            placeholder="Ingrese la url de la Imagen "
            value={form.imagen}
            accept="image/*"
            onChange={handleChanege}
          />
          <button type="submit"> Guardar </button>
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
