
import type React from "react"

import { useState } from "react"
import {Link} from "react-router-dom"
import Header from "../header"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    motDePasse: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Données du formulaire soumises:", formData)
    // Logique pour envoyer les données à votre API
  }

  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <Header/>
      <form onSubmit={handleSubmit} className="space-y-4 w-3/4 flex flex-col justify-center">
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
          required
        />

        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
          required
        />

        <input
          type="password"
          name="motDePasse"
          placeholder="Mot de passe"
          value={formData.motDePasse}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
          required
        />

        <button
          type="submit"
          className="w-full rounded-full py-3 px-4 transition-colors duration-200 mt-6 bg-orange-700 hover:bg-orange-900"
        >
          Créer
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-700">
          Vous n'avez pas de compte?{" "}
          <Link to="/inscrition" className="font-medium text-black">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  )
}

