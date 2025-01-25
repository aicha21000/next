import { NextApiRequest, NextApiResponse } from 'next';

// Fonction de gestion de la route API /api/terms
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Contenu des conditions d'utilisation (Terms of Service)
  const termsContent = `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">Terms of Service</h1>
      <p class="mb-4">
        Welcome to Facebook! By using our services, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 class="text-2xl font-bold mb-2">1. Usage of the Platform</h2>
      <p class="mb-4">
        You are responsible for your use of the platform. You must comply with all applicable laws and community standards while using Facebook.
      </p>

      <h2 class="text-2xl font-bold mb-2">2. User Conduct</h2>
      <p class="mb-4">
        Users must not post illegal content, harass others, or engage in any activities that violate our community guidelines.
      </p>

      <h2 class="text-2xl font-bold mb-2">3. Termination</h2>
      <p class="mb-4">
        We reserve the right to terminate accounts that violate our terms or engage in harmful activities.
      </p>

      <p class="text-gray-600">
        By continuing to use Facebook, you agree to these terms.
      </p>
    </div>
  `;

  // Réponse en HTML
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(termsContent);
}
