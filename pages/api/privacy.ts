import { NextApiRequest, NextApiResponse } from 'next';

// Fonction de gestion de la route API /api/privacy
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Contenu de la politique de confidentialité
  const privacyContent = `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p class="mb-4">
        Your privacy is important to us. This policy outlines how Facebook collects, uses, and protects your personal data.
      </p>

      <h2 class="text-2xl font-bold mb-2">1. Data Collection</h2>
      <p class="mb-4">
        We collect personal information you provide when you use Facebook, such as your name, email address, and profile information.
      </p>

      <h2 class="text-2xl font-bold mb-2">2. Use of Information</h2>
      <p class="mb-4">
        We use your information to provide, improve, and personalize Facebook services, including targeted ads and content.
      </p>

      <h2 class="text-2xl font-bold mb-2">3. Data Sharing</h2>
      <p class="mb-4">
        We do not share your personal data with third parties without your consent, except as required by law.
      </p>

      <h2 class="text-2xl font-bold mb-2">4. Data Security</h2>
      <p class="mb-4">
        We implement security measures to protect your data, but no online platform is completely secure.
      </p>

      <p class="text-gray-600">
        By using Facebook, you agree to this Privacy Policy.
      </p>
    </div>
  `;

  // Réponse en HTML
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(privacyContent);
}
