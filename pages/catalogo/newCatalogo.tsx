import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import style from "../../styles/formulario.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { catalogoFormInteface } from "../../interfaces/dish-form.interface";
const New = () => {
  const router = useRouter();

  const { query } = router;

  console.log(query);

  useEffect(() => {}, []);

  const [form, setForm] = useState<catalogoFormInteface>({
    nombre: "",
    file: null,
  });
  const [message, setMessage] = useState([]);

  const handleChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form: any) => {
    console.log(form);
    try {
      console.log(form);

      const formData = new FormData();

      for (const name in form) {
        formData.append(name, form[name]);
      }

      const res = await fetch("/api/catalogo", {
        method: "POST",
        body: formData,
      });
      const data: any = await res.json;

      if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => ({
            ...oldMessage,
            message: error.message,
          }));
        }

        router.push("/platos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.item(0)) {
      setForm({ ...form, file: e.target.files.item(0) });
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
          <p>Selecione una images:</p>

          <input type="file" accept="image/*" onChange={handleFileChanges} />
          <p>La categoria del plato:</p>

          <button className={style.boton} type="submit" onClick={postData}>
            {" "}
            Guardar{" "}
          </button>
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
