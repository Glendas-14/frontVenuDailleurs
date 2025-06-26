import axios from 'axios';

const api = axios.create({

  baseURL: 'https://venudailleurs-api.onrender.com' // Pour la production
    // baseURL: 'http://127.0.0.1:3333' // Pour le développement local
});

export const registerAccountInfo = async (formData: FormData) => {
  try {

    const response = await api.post('/signup', formData);
    return response.data;
  } catch (error) {
    alert('Erreur lors de la création du compte')
    console.error("Erreur lors de la création du compte", error);
    throw error;
  }
};

// Authentification de l'utilisateur
export const authenticateUser = async (formData: FormData) => {
  try {
    const response = await api.post('/signin', formData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'authentification", error);
    throw error;
  }
};