export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Cookies</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations sur les Cookies</h2>
          <p className="text-gray-700 mb-6">
            Ce site Web utilise des cookies pour vous assurer la meilleure expérience. 
            Nous utilisons des cookies essentiels pour le bon fonctionnement du site et pouvons utiliser des cookies d'analyse 
            pour comprendre comment les visiteurs interagissent avec notre site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de Cookies</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Cookies Nécessaires :</strong> Requis pour le bon fonctionnement du site Web</li>
            <li><strong>Cookies d'Analyse :</strong> Nous aident à comprendre l'utilisation du site Web</li>
            <li><strong>Cookies Marketing :</strong> Utilisés à des fins de publicité</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos Choix</h2>
          <p className="text-gray-700 mb-6">
            Vous pouvez gérer vos préférences en matière de cookies à tout moment en utilisant le bouton des paramètres de cookies 
            dans le coin inférieur droit de votre écran.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nous Contacter</h2>
          <p className="text-gray-700">
            Pour toute question concernant notre politique en matière de cookies, veuillez nous contacter à 
            <a href="mailto:info@asterakistudio.com" className="text-orange-500 ml-1">
              info@asterakistudio.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}