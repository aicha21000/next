import { NextApiRequest, NextApiResponse } from 'next';

// Fonction de gestion de la route API /api/deletion
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Contenu détaillant le processus de suppression des données utilisateur
  const deletionContent = `
<div className="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">Data Deletion</h1>
      <p class="mb-4">
        At Facebook, we value your privacy and are committed to ensuring the security and protection of your personal information. This page explains how you can request the deletion of your data.
      </p>

      <h2 class="text-2xl font-bold mb-2">1. What Is Data Deletion?</h2>
      <p class="mb-4">
        Data deletion refers to the process by which we permanently remove all personal information associated with your account, upon your request. This includes information such as your profile details, posts, photos, and any other data you’ve shared with us.
      </p>

      <h2 class="text-2xl font-bold mb-2">2. How to Request Data Deletion</h2>
      <p class="mb-4">
        You can request the deletion of your data through the following steps:
        <ol class="list-decimal ml-6">
          <li>Go to the <strong>Settings & Privacy</strong> section of your account.</li>
          <li>Select <strong>Settings</strong> and then click on <strong>Your Facebook Information</strong>.</li>
          <li>Under this section, select <strong>Deactivation and Deletion</strong>.</li>
          <li>Choose the option to <strong>Delete Account</strong> and follow the on-screen instructions.</li>
        </ol>
      </p>

      <h2 class="text-2xl font-bold mb-2">3. What Happens After Data Deletion?</h2>
      <p class="mb-4">
        Once you submit a data deletion request, we will process your request and permanently delete all relevant personal data from our systems. This process may take up to 90 days. After this period, your data will no longer be retrievable.
      </p>

      <h2 class="text-2xl font-bold mb-2">4. Legal Compliance</h2>
      <p class="mb-4">
        Facebook complies with applicable privacy laws, such as the General Data Protection Regulation (GDPR). You have the right to request the deletion of your data at any time, and we are obligated to honor such requests in accordance with the law.
      </p>

      <h2 class="text-2xl font-bold mb-2">5. Exceptions to Data Deletion</h2>
      <p class="mb-4">
        In certain cases, Facebook may retain data to comply with legal obligations, resolve disputes, or enforce agreements. This includes data necessary to meet financial record-keeping requirements, comply with regulatory obligations, or in response to legitimate legal claims.
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="userId" className="block text-lg mb-2">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          placeholder="Enter your user ID"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Deletion Request
        </button>
      </form>

      {message && (
        <p className="mt-4 text-lg font-semibold">{message}</p>
      )}
    </div>
  `;

  res.status(200).send(deletionContent);  // Envoi de la page HTML
}
