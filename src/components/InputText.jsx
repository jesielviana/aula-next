import style from "@/styles/InputText.module.css";

export default function InputText({ label, type }) {
  return (
    <>
      <label className={style.negrito}>{label}:</label>
      <input type={type} />
    </>
  );
}
