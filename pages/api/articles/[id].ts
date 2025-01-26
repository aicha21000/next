// server/pages/api/articles/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialisation de CORS
const cors = Cors({
  origin: (origin, callback) => {
    if (!origin || origin === 'http://localhost:3001') {
      callback(null, true);  // Autorise localhost:3001 et votre domaine de production
    } else {
      callback(new Error('CORS not allowed'), false);  // Refuse toutes les autres origines
    }
  },
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

// Liste des articles (tu pourrais les récupérer depuis une base de données)
const articles = [
  {
    id: 1,
    title: 'First Article',
    content: 'This is the content of the first article.',
    image: 'https://wikiclic.com/wp-content/uploads/2023/05/image-libre-de-droit-wikiclic.jpg',
    url: 'https://cinema7art.com//article/1',
  },
  {
    id: 2,
    title: 'Second Article',
    content: 'This is the content of the second article.',
    image: 'https://www.graphic-procede.fr/wp-content/uploads/2022/09/votre-carte-de-visite-haut-de-gamme-pour-vous-demarquer-400x250.jpg',
    url: 'https://cinema7art.com//article/2',
  },
  {
    id: 3,
    title: 'Third Article',
    content: 'This is the content of the third article.',
    image: 'https://hubfi.fr/wp-content/uploads/2023/09/sites-obtenir-images-libres-droits-gratuitement-1160x680.jpg',
    url: 'https://cinema7art.com//article/3',
  },
];

// Fonction handler pour une requête API dynamique
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runCors(req, res);  // Applique CORS

  const { id } = req.query;

  const article = articles.find((article) => article.id === Number(id));
  

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.status(200).json(article);
}
