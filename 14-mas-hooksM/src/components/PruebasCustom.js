
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
    const {mayusculas,minusculas,concatenar,estado} = useMayus('Daniel Bustos');
    //console.log(mayusculas.mayusculas('jkasdbkjas'));

  return (
    <>
    <div>Probando componentes personalizados</div>
    {estado}

    <button onClick={mayusculas}>Poner en mayusculas</button>
    <button onClick={minusculas}>Poner en mayusculas</button>
    <button onClick={()=>{concatenar(' - Curso en react Master')}}>Poner en mayusculas</button>
    </>
    
  )
}
