import { renderPage } from '../..';
import { RaceAdress } from '../basic-page-info';
import { deleteWinner } from './changes-winlist';
import { drawsPagination } from './render-cars';

export async function deleteCar(id: string) {
  const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const paginationPage = await drawsPagination();
  if (!paginationPage.length) {
    RaceAdress.pageNumber -= 1;
  }
  await deleteWinner(id);
  await renderPage();
  return response;
}
