import TarjetaArtista from '@/components/TarjetaArtista';
import { obtenerArtistas } from '@/libs/conexiones';
const VerRegistroPage = async () => {
  const artistas = await obtenerArtistas();
  console.log(artistas);

  return (
    <div>
      <div className='p-5'>
        {artistas.map((artista) => (
          <TarjetaArtista
            key={artista.id}
            artista={artista} 
          />
        ))}
      </div>
    </div>
  );
};

export default VerRegistroPage;
