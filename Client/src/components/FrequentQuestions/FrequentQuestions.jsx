import React from "react";
import style from "./FrequentQuestions.module.css"

const FrequentQuestions = () => {



function handleClick(e){

}

  return (
    <div className={style.fullcontainer}>
      <div className={style.container} value="active">
        <p className={style.title}>¿Cómo se crea una cuenta en la pagina web?</p> <button onClick={(e)=>handleClick(e)}>x</button>
        <p className={style.text}>
          Puede crear una cuenta en nuestro sitio web haciendo clic en el enlace
          "Crear una cuenta" en el área superior derecha de la pantalla.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Cómo puedo cambiar la contraseña de mi cuenta?</p>
        <p className={style.text}>
          Puede cambiar la contraseña de su cuenta haciendo clic en el enlace
          "Cambiar contraseña" en la configuración de su cuenta.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}> ¿Cómo puedo cambiar la información de mi cuenta?</p>
        <p className={style.text}>
          Puede cambiar la información de su cuenta haciendo clic en el enlace
          "Editar" en la configuración de su cuenta.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Cómo puedo eliminar mi cuenta?</p>
        <p className={style.text}>
          {" "}
          Puede eliminar su cuenta haciendo clic en el enlace "Eliminar cuenta"
          en la configuración de su cuenta.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Qué es el método de pago de Mercado Pago?</p>
        <p className={style.text}>
          Mercado Pago es un método de pago seguro y fácil de usar. El dinero
          disponible en Mercado Pago se transfiere inmediatamente a la cuenta
          del receptor. Paga con Mercado Pago para obtener una protección total
          para tus compras y recibir el dinero de vuelta si el producto no es lo
          que esperabas.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Cuáles son los costos de envío?</p>
        <p className={style.text}>
          Los costos de envío variarán en función del lugar de entrega, el peso
          y el tamaño del paquete. Los costos de envío se calcularán
          automáticamente durante el proceso de pago. Ofrecemos tarifas de envío
          especiales para pedidos grandes y envíos internacionales.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Qué tipo de garantía ofrece la tienda?</p>
        <p className={style.text}>
          Ofrecemos una garantía de 30 días para productos defectuosos. Si su
          producto sufre algún daño en los 30 días posteriores a la entrega, nos
          encargaremos de repararlo o reemplazarlo de forma gratuita.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Cómo puedo solicitar una devolución por garantía?</p>
        <p className={style.text}>
          {" "}
          Para solicitar una devolución por garantía, debe contactar con nuestro
          servicio al cliente enviando un correo electrónico a contacto@vibe.com
          con detalles sobre el producto defectuoso.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Qué hago si mi producto no está cubierto por la garantía?</p>
        <p className={style.text}>
          Si su producto no está cubierto por la garantía, le recomendamos que
          contacte con nuestro servicio al cliente para obtener asesoramiento
          sobre los pasos a seguir para solucionar el problema.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Qué tipo de devoluciones acepta la tienda?</p>
        <p className={style.text}>
          Aceptamos devoluciones dentro de los 30 días a partir de la fecha de
          entrega. Los productos devueltos deben estar sin usar y en buenas
          condiciones para que podamos aceptarlos.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Cómo puedo realizar una devolución?</p>
        <p className={style.text}>
          Para realizar una devolución, debe contactar con nuestro servicio al
          cliente enviando un correo electrónico a contacto@tienda.com y seguir
          las instrucciones indicadas.
        </p>
      </div>
      <div className={style.container}>
        <p className={style.title}>¿Qué hago si mi producto fue entregado dañado?</p>
        <p className={style.text}>
          Si el producto fue entregado dañado, le recomendamos que contacte con
          nuestro servicio al cliente para solicitar un reemplazo. También le
          reembolsaremos el dinero si el producto no se puede reparar o
          reemplazar.
        </p>
      </div>
    </div>
  );
};

export default FrequentQuestions;
