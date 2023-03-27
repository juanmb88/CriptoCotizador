import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imgenesCriptos.png';
import Formularios from './componentes/Formularios';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner'

/*****************STYLED COMPONENTS / ESTILOS CSS****************/
const Contenedor = styled.div `
  width-max : 900px;
  width : 90%;
  margin : 0 auto; 
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }
`;
const Heading = styled.h1 `
  font-family: 'Montserrat', sans-serif; 
  text-align : center;
  color : rgb(212, 121, 2); 
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`;
const Imagen = styled.img `
  max-width: 700px;
  width: 90%;
  margin: 120px auto 0 auto;
  display: block;
  border-radius : 20px;
`;
/*****************The End / FIN ****************/


function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

/*****************Use Effect consulta a la api, mas carga del Snipper ****************/

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async ()=>{
        setCargando(true)
        setResultado({})

        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas]);

  return (
    <div className="App">
      <Contenedor>
         <Imagen src= {ImagenCripto} alt='Imagenes'/>
         <div>
           <Heading>Cotiza Criptomonedas</Heading>
           <Formularios setMonedas = {setMonedas}/>
           {cargando && <Spinner/>}
           {resultado.PRICE&&<Resultado resultado = {resultado}/>}  
         </div>
      </Contenedor>
    </div>
  )
}
export default App;
