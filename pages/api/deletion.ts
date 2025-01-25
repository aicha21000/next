import { NextApiRequest, NextApiResponse } from 'next';

// Fonction de gestion de la route API /api/deletion
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Contenu de la politique de suppression de compte
  const deletionContent = `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">Account Deletion Policy</h1>
      <p class="mb-4">
        You have the right to delete your Facebook account at any time. This section explains the process and the consequences of deleting your account.
      </p>

      <h2 class="text-2xl font-bold mb-2">1. Deletion Process</h2>
      <p class="mb-4">
        To delete your account, go to your account settings and select the "Delete Account" option. You will receive a confirmation email.
      </p>

      <h2 class="text-2xl font-bold mb-2">2. Data Removal</h2>
      <p class="mb-4">
        Once your account is deleted, all your data, including posts, photos, and profile information, will be permanently removed from our servers.
      </p>

      <h2 class="text-2xl font-bold mb-2">3. Irreversible Action</h2>
      <p class="mb-4">
        Account deletion is permanent and cannot be undone. You will lose access to your account and all related data.
      </p>

      <p class="text-gray-600">
        By deleting your account, you acknowledge that this action is irreversible.
      </p>
    </div>
  `;

  // Réponse en HTML
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(deletionContent);
}
