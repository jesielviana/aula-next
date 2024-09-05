import Header from "@/components/Header";
import InputText from "@/components/InputText";

export default function Home() {
  return (
    <>
      <Header />

      <h1>Olá Next</h1>
      <p>Ola kkk</p>

      <InputText label="Nome" />
      <InputText label="Sobrenome" />
      <InputText label="Cidade" />
    </>
  );
}
