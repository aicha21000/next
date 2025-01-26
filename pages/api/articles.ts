import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialisation de CORS pour accepter localhost:3001 (frontend) et d'autres origines si nécessaire
const cors = Cors({
  origin: 'http://192.168.0.101:3001',  // Permet uniquement localhost:3001
  methods: ['GET', 'POST', 'OPTIONS'],
});

function runCors(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res);  // Applique CORS

  const articles = [
    {
      id: 1,
      title: 'First Article',
      content: 'This is the content of the first article.',
      image: 'https://wikiclic.com/wp-content/uploads/2023/05/image-libre-de-droit-wikiclic.jpg',
      url: 'https://example1.com/article/1',
    },
    {
      id: 2,
      title: 'Second Article',
      content: 'This is the content of the second article.',
      image: 'https://www.graphic-procede.fr/wp-content/uploads/2022/09/votre-carte-de-visite-haut-de-gamme-pour-vous-demarquer-400x250.jpg',
      url: 'https://example.com/article/2',
    },
    {
      id: 3,
      title: 'Third Article',
      content: 'This is the content of the third article.',
      image: 'https://hubfi.fr/wp-content/uploads/2023/09/sites-obtenir-images-libres-droits-gratuitement-1160x680.jpg',
      url: 'https://example.com/article/3',
    },
  ];

  res.status(200).json(articles);  // Retourne les articles au frontend
}
