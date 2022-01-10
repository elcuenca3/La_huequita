const PlatoPage = ({plato}) => {

    return (<div> 
        {plato.ingredientes.map((ingrediente)=><li>{ingrediente}</li>)}
         { plato && JSON.stringify(plato)} </div>)
}


export async function getServerSideProps(context) {
    const {id} = context.params
    const res= await fetch(`http://localhost:3000/api/tasks/platos/${id}`)
    const plato=await res.json()
    return{
      props:{
        plato,
      }
    }
    
  };

export default PlatoPage