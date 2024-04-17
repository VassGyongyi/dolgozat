import React, { useState } from "react";
import useAdatContext from "../Context/Context";
import Form from "react-bootstrap/Form";

export default function Urlap() {
  const { kategoriaLista, setKategoriaLista, tesztLista, setTesztLista } =
    useAdatContext();
const katLista=["Természettudomány", "Történelem"]
  return (
    <>
    
     <Form.Select aria-label="Default select example">
        onChange=
        {(event) => {
          setKategoriaLista(event.target.value);
        }}
        >
        <option value="valassz">Válassz kategóriát!</option>
        {kategoriaLista.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </Form.Select> 
    </>
  );
}
