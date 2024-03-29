import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import style from "../../styles/formulario.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { DishFormInteface } from "../../interfaces/dish-form.interface";

const New = () => {
  const router = useRouter();

  const {query} = router;

 console.log(query);

 useEffect(()=>{

 },[])

  const [form, setForm] = useState<DishFormInteface>({
    nombre: "",
    categoria: [],
    historia: "",
    descripcion: "",
    ingredientes: [],
    preparacion: "",
    lugar: "",
    huecas: [],
    calorias: "",
    file: null,
  });

  const ingredientsInputRef = useRef<HTMLInputElement>(null);
  const huecaInputRef = useRef<HTMLInputElement>(null);

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

      const res = await fetch("/api/tasks", {
        method: "POST",
        body: formData,
      });
      const data: any = await res.json;

      if (!data.success) {
        router.push("/platos");
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => ({
            ...oldMessage,
            message: error.message,
          }));
        }

        
      }
    } catch (error) {
      console.log(error);
      console.log("hola")
    }
  };

  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.item(0)) {
      setForm({ ...form, file: e.target.files.item(0) });
    }
  };

  const addIngredient = () => {
    if (ingredientsInputRef.current?.value) {
      const tempIngredients = [...form.ingredientes];
      tempIngredients.push(ingredientsInputRef.current?.value);
      setForm({ ...form, ingredientes: tempIngredients });
      ingredientsInputRef.current.value = "";
    }
  };

  const deleteIngredinet = (index: number) => {
    const tempIngredients = [...form.ingredientes];
    tempIngredients.splice(index, 1)
    setForm({ ...form, ingredientes: tempIngredients });
  };
  const addhuecas = () => {
    if (huecaInputRef.current?.value) {
      const tempIngredients = [...form.huecas];
      tempIngredients.push(huecaInputRef.current?.value);
      setForm({ ...form, huecas: tempIngredients });
      huecaInputRef.current.value = "";
    }
  };

  const deletehuecas = (index: number) => {
    const tempIngredients = [...form.huecas];
    tempIngredients.splice(index, 1)
    setForm({ ...form, huecas: tempIngredients });
  };


  return (
    <div>
      <Header />
      <h1> Formulario Catalogo </h1>
      <div className={style.container}>
        <form
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
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
          <p>Selecione una images:</p>

          <input  type="file" accept="image/*" onChange={handleFileChanges} />
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

          <div className={style.ingredientsContainer}>
            <input
              autoComplete="off"
              name="ingredientes"
              className={style.box}
              type="text"
              placeholder="Ingrese los ingredientes del plato "
              ref={ingredientsInputRef}
            />
            <button
              type="button"
              onClick={addIngredient}
              className={style.addButton}
            >
              +
            </button>
          </div>

          {form.ingredientes.map((ingrediente, idx) => (
            <li key={ingrediente+idx}>
              {ingrediente}{" "}
              <button onClick={() => deleteIngredinet(idx)}>X</button>
            </li>
          ))}

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
          
                 <div className={style.ingredientsContainer}>
            <input
              autoComplete="off"
              name="huecas"
              className={style.box}
              type="text"
              placeholder="Ingrese los huecas del plato "
              ref={huecaInputRef}
            />
            <button
              type="button"
              onClick={addhuecas}
              className={style.addButton}
            >
              +
            </button>
          </div>

          {form.huecas.map((huecas, idx) => (
            <li key={huecas+idx}>
              {huecas}{" "}
              <button onClick={() => deletehuecas(idx)}>X</button>
            </li>
          ))}
          <p>Valor calorico del plato:</p>
          <input
            autoComplete="off"
            name="calorias"
            className={style.box}
            type="text"
            placeholder="Ingrese las calorias de los platos "
            value={form.calorias}
            onChange={handleChanege}
          />
          <button className={style.boton} type="submit">
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
