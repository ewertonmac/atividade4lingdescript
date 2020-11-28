//Exercício

// Função 1
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
async function umPorSegundo() {
  await delay(console.log("1s"));
  await delay(console.log("2s"));
  await delay(console.log("3s"));
}
umPorSegundo();

//Função2
import axios from "axios";
async function getUserFromGithub(user) {
  try {
    const resposta = await axios.get(`https://api.github.com/users/${user}`);
    console.log(resposta);
  } catch (error) {
    if (error.response.status === 404) {
      console.warn(`${user} não encontrado (erro: ${error.message})`);
    } else {
      console.warn(error.message);
    }
  }
}
getUserFromGithub("ewertonmac");

//Função 3
class Github {
  static async getRepositories(repo) {
    try {
      const resposta = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(resposta);
    } catch (error) {
      if (error.response.status === 404) {
        console.warn(`${user} não encontrado (erro: ${error.message})`);
      } else {
        console.warn(error.message);
      }
    }
  }
}
Github.getRepositories("ewertonmac/atividadelingscript");

//Função 4
const buscaUsuario = async (user) => {
  try {
    const resposta = await axios.get(`https://api.github.com/users/${user}`);
    console.log(resposta);
  } catch (error) {
    if (error.response.status === 404) {
      console.warn(`${user} não encontrado (erro: ${error.message})`);
    } else {
      console.warn(error.message);
    }
  }
};
buscaUsuario("ewertonmac");
buscaUsuario("iasdofijasodfjoas");
