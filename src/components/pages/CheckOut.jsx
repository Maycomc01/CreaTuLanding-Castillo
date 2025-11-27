import { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CheckOut.module.css";

function CheckOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { cart, totalPrice } = useCart();

  const whatsappNumber = "TuNumeroTelefonico";

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("POR FAVOR INGRESÁ TU NOMBRE Y APELLIDO.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert("INGRESÁ UN CORREO VÁLIDO.");
      return;
    }
    if (!/^\d{7,15}$/.test(phone)) {
      alert("INGRESÁ UN NÚMERO DE TELÉFONO VÁLIDO (SOLO NÚMEROS).");
      return;
    }

    const productLines = cart
      .map(
        (item) =>
          `- ${item.nombre} x${item.cantidad} ($${item.precio?.toLocaleString(
            "es-AR"
          )} C/U)`
      )
      .join("\n");

    const fecha = new Date().toLocaleString("es-AR", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const message = `
*PEDIDO: TIENDA.JUANITALIBRERIA.ONLINE*
(${fecha})

*CLIENTE:* ${name.toUpperCase()}
*EMAIL:* ${email}
*TELÉFONO:* ${phone}

*PRODUCTOS:*
${productLines}

*TOTAL:* $${totalPrice.toLocaleString("es-AR")}

*PAGO*
*ESTADO DEL PAGO:* NO PAGADO
*TOTAL A PAGAR:* $${totalPrice.toLocaleString("es-AR")}

ENVIANOS ESTE MENSAJE AHORA Y TE RESPONDEREMOS EN EL HORARIO DE *18HS A 22HS DE LUNES A SÁBADOS.*
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FINALIZAR PEDIDO</h2>

      <input
        type="text"
        placeholder="NOMBRE Y APELLIDO"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="CORREO ELECTRÓNICO"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="NÚMERO DE CONTACTO"
        className={styles.input}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleSubmit} className={styles.button}>
        ENVIAR PEDIDO POR WHATSAPP
      </button>
    </div>
  );
}
export default CheckOut;
