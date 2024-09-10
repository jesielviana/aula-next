import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Formulario() {
  const router = useRouter();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function cadastro() {
    const usuario = {
      name: nome,
      email: email,
      password: senha
    };
    console.log("cadastro", usuario);
    fetch("https://hono-api-acyp.onrender.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    })
      .then((res) => {
        if (res.ok) {
          router.push("/usuarios");
        } else {
          console.error("error", res);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <Header />
      <h1>Cadastro de Usuário</h1>
      <form>
        <input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
          placeholder="Nome"
        />
        <br />
        <br />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          type="password"
          placeholder="Senha"
        />
        <br />
        <br />
        <button type="button" onClick={() => cadastro()}>
          Salvar
        </button>
      </form>
    </>
  );
}
