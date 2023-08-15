import { Location } from 'react-router-dom';

function takePathto(filmId: number, location: Location) {
  return location.pathname === '/' ? `movies/${filmId}` : `${filmId}`;
}

export default takePathto;
