import ensureAuthenticated from '../../../backend/middleware/ensureAuthenticated';
import { Handler } from '../../../backend/model/http';

const Login: Handler = async (request, response) => {
  if (request.method === 'GET') {
    const mockedProducts = [
      { id: 'e2e8c367-517a-4a19-a1c8-6070eafaf665', name: 'Mesa', price: 249.9 },
      { id: 'f4b8bf43-d176-453b-ae16-68bf415ba867', name: 'Cadeira', price: 119.9 },
      { id: 'c59b7151-5d61-45f8-a655-3ede19b6d0a9', name: 'Poltrona', price: 349.9 },
      { id: '125f6829-4777-444a-a47c-12af47d7f2a3', name: 'Cabeceira', price: 99.9 },
      { id: 'af14dc3a-7ec0-44d5-976f-ba7fb7e7c3d1', name: 'Estante', price: 499.9 },
    ];

    return response.status(200).json(mockedProducts);
  } else {
    return response.status(404).end();
  }
};

export default ensureAuthenticated(['GET'])(Login);
