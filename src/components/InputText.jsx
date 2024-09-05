import style from "@/styles/InputText.module.css";

export default function InputText(props) {
  return (
    <>
      <label className={style.negrito}>{props.label}:</label>
      <input type="text" />
    </>
  );
}
