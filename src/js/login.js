import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://nummy.arthurwicky.fr')

try {
  if (typeof window !== 'undefined') {
    const storedAuthData = localStorage.getItem('pocketbase_auth');
    if (storedAuthData) {
      try {
        const parsedData = JSON.parse(storedAuthData);
        if (parsedData.token && parsedData.model) {
          pb.authStore.save(parsedData.token, parsedData.model);
          console.log("Session restaurée:", pb.authStore.isValid);
          
          if (pb.authStore.isValid) {
            console.log("Utilisateur connecté:", pb.authStore.model);
          } else {
            console.log("Token expiré, suppression des données");
            localStorage.removeItem('pocketbase_auth');
          }
        } else {
          console.error("Données d'authentification invalides");
          localStorage.removeItem('pocketbase_auth');
        }
      } catch (parseError) {
        console.error("Erreur de parsing des données d'authentification:", parseError);
        localStorage.removeItem('pocketbase_auth');
      }
    }
  }
} catch (error) {
  console.error("Erreur lors de la récupération des données d'authentification:", error);
}


export function initAuthentication() {
    try {
    if (typeof window === 'undefined') return false;

    const storedAuthData = localStorage.getItem('pocketbase_auth');
    if (!storedAuthData) return false;
    
    try {
      const parsedData = JSON.parse(storedAuthData);
      if (!parsedData.token || !parsedData.model) {
        console.error("Données d'authentification invalides");
        localStorage.removeItem('pocketbase_auth');
        return false;
      }
      
      pb.authStore.save(parsedData.token, parsedData.model);
      
      console.log("Session restaurée avec succès:", pb.authStore.isValid);
      console.log("Utilisateur connecté:", pb.authStore.model?.email);
      
      return pb.authStore.isValid;
    } catch (error) {
      console.error("Erreur lors de la restauration de l'authentification:", error);
      localStorage.removeItem('pocketbase_auth');
      return false;
    }
  } catch (error) {
    console.error("Erreur dans initAuthentication:", error);
    return false;
  }
}

// authentification

export async function loginUser(email, password) {
    try {
        console.log("Tentative de connexion avec:", email);
        const authData = await pb.collection('users').authWithPassword(email, password);
        
        // Stocker dans localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('pocketbase_auth', JSON.stringify({
                token: pb.authStore.token,
                model: pb.authStore.model
            }));
            window.location.href = "/";
        }
        
        console.log("Connexion réussie:", authData);
        return {success: true, user: authData.record};
    } catch (error) {
        console.error('Erreur de connexion:', error);
        return {success: false, error: error.message};
    }
}


export async function registerUser(userData) {
    try {
         console.log("Intentando registrar usuario con datos:", {
            email: userData.email,
            prenom_user: userData.prenom_user,
            nom_user: userData.nom_user,
        });

        // verification de champs vides
        if (!userData.email || !userData.password || !userData.nom_user) {
            return {success: false, error: "Todos los campos obligatorios deben estar completos"};
        }

        const formData = new FormData();
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('passwordConfirm', userData.password);
        formData.append('nom_user', userData.nom_user);

        // ajouter juste le prenom_user silest vide
        if (userData.prenom_user) {
            formData.append('prenom_user', userData.prenom_user);
        }
        
        formData.append('emailVisibility', 'true');

        const record = await pb.collection('users').create(formData);
        if (record) {
            return await loginUser(userData.email, userData.password);
        }
        return {success: true, user: record};
    }catch (error) {
        console.error('Error registering user:', error);

        let errorMessage = error.message;


        if (error.data && error.data.data) {
            try {

                const messages = [];
                
                Object.entries(error.data.data).forEach(([field, fieldError]) => {
 
                    if (fieldError && typeof fieldError === 'object' && fieldError.message) {
                        messages.push(`${field}: ${fieldError.message}`);
                    } 
 
                    else if (typeof fieldError === 'string') {
                        messages.push(`${field}: ${fieldError}`);
                    } 
                    else {
                        messages.push(`${field}: ${String(fieldError)}`);
                    }
                });
                
                if (messages.length > 0) {
                    errorMessage = messages.join('\n');
            }
        } catch (parseError) {
                console.error('Error parsing validation errors:', parseError);
            }
        }
        
        return {success: false, error: errorMessage};
    }
}


export function logoutUser() {
    pb.authStore.clear();
    if (typeof window !== 'undefined') {
        localStorage.removeItem('pocketbase_auth');
    }
    
    console.log("Déconnexion réussie");
}

export function getCurrentUser() {
  initAuthentication();
  return pb.authStore.model;
}

export function isLoggedIn() {
  initAuthentication();
  return pb.authStore.isValid;
}

// Pour mettre à jour le profil

export async function updateUserProfile(id, data) {
    try {
        const record = await pb.collection('users').update(id, data);
        return {success: true, user: record};
    } catch (error) {
        console.error('Error updating user profile:', error);
        return {success: false, error: error.message};
    }
}

// Avatar

export async function uploadAvatar(id, file){
    try {
        const formData = new FormData();
        formData.append('avatar',file);

        const record = await pb.collection('users').update(id, formData);
        return {success: true, user: record};
    } catch (error) {
        console.error('Error uploading avatar:', error);
        return {success: false, error: error.message};
    }
}