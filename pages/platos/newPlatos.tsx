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
    categoria: [],
    historia: "",
    descripcion: "",
    ingredientes: [],
    preparacion: "",
    lugar: "",
    huecas: [],
    calorias: "",
    file: null
  });

  const [message, setMessage] = useState([]);

  const handleFileChange = () => (e) => {
    setQuery((prevState) => ({
        ...prevState,
        files: e.target.files[0]
    }));
};

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

      const formData = new FormData();

      for(const name in form){
        formData.append(name, form[name])
      }
      
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: formData,
      });
      const data:any = await res.json;
      console.log(data);

      /* const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",   
        },
        body: JSON.stringify(form),
      });
      const data:any = await res.json;
      console.log(data); */

     /*  if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
        }

        router.push("/platos");
      } */
    } catch (error) {
      console.log(error);
      console.log("hola");
    }
  };

  const handleFileChanges = (e) => {
    const file = e.target.files.item(0)
    if(file){
      setForm({...form, file})
    }

  }

  return (
    <div>
      <Header />
      <h1> Formulario Catalogo </h1>
      <div className={style.container}>
        <form onSubmit={handleSubmit} acceptCharset="UTF-8" encType="multipart/form-data">
          <p>Nombre del plato:</p>
          <input
            autoComplete="off"
            name="nombre"
            className={style.box}
            type="text"
            placeholder="Ingrese el nombre del plato"
            value={form.nombre}
            onChange={handleChanege}
          />
          <p>URL de la imagen del plato:</p>

          <input type="file" accept="image/*" onChange={handleFileChanges} />

          <input
            autoComplete="off"
            name="imagen"
            className={style.box}
            type="text"
            placeholder="Ingrese la url de la Imagen "
            value={form.imagen}
            onChange={handleChanege}
          />
          <p>La categoria del plato:</p>

          <input
            autoComplete="off"
            name="categoria"
            className={style.box}
            type="text"
            placeholder="Ingrese la categoriadel plato "
            value={form.categoria}
            onChange={handleChanege}
          />
          <button type="submit" >+</button> 

          <p>Historia del plato:</p>

          <input
            autoComplete="off"
            name="historia"
            className={style.box}
            type="text"
            placeholder="Ingrese la historia dle plato "
            value={form.historia}
            onChange={handleChanege}
          />
          <p>Descripcion del plato:</p>

          <input
            autoComplete="off"
            name="descripcion"
            className={style.box}
            type="text"
            placeholder="Ingrese la descripcion del plato "
            value={form.descripcion}
            onChange={handleChanege}
          />
          <p>Ingredientes del plato:</p>

          <input
            autoComplete="off"
            name="ingredientes"
            className={style.box}
            type="text"
            placeholder="Ingrese los ingredientes del plato "
            value={form.ingredientes}
            onChange={handleChanege}
          />
          <p>Preparacion del plato:</p>
          <input
            autoComplete="off"
            name="preparacion"
            className={style.box}
            type="text"
            placeholder="Ingrese la preparacion del plato"
            value={form.preparacion}
            onChange={handleChanege}
          />
          <p>Lugar de proveniencia del plato:</p>
          <input
            autoComplete="off"
            name="lugar"
            className={style.box}
            type="text"
            placeholder="Ingrese el lugar del plato "
            value={form.lugar}
            onChange={handleChanege}
          />
          <p>huecas del plato:</p>
          <input
            autoComplete="off"
            name="huecas"
            className={style.box}
            type="text"
            placeholder="Ingrese la url de la Imagen "
            value={form.huecas}
            onChange={handleChanege}
          />
          <p>Valor calorico del plato:</p>
          <input
            autoComplete="off"
            name="calorias"
            className={style.box}
            type="text"
            placeholder="Ingrese la url de la Imagen "
            value={form.calorias}
            onChange={handleChanege}
          />
          <button className={style.boton} type="submit" > Guardar </button>
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
