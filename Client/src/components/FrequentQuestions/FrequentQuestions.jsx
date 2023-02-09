import React from "react";
import style from "./FrequentQuestions.module.css";
import flecha from "../../assets/flecha.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const FrequentQuestions = () => {
  return (
    <div>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <h3 className={style.h3}>Frecuenly Asked Questions</h3>
      <div className={style.container2}>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo se crea una cuenta en la pagina web?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Puede crear una cuenta en nuestro sitio web haciendo clic en el
                enlace "Crear una cuenta" en el área superior derecha de la
                pantalla.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo puedo cambiar la contraseña de mi cuenta?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Puede cambiar la contraseña de su cuenta haciendo clic en el
                enlace "Cambiar contraseña" en la configuración de su cuenta.
                pantalla.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo puedo cambiar la información de mi cuenta?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Puede cambiar la información de su cuenta haciendo clic en el
                enlace "Editar" en la configuración de su cuenta.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo puedo eliminar mi cuenta?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Puede eliminar su cuenta haciendo clic en el enlace "Eliminar
                cuenta" en la configuración de su cuenta.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Qué es el método de pago de Mercado Pago?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Mercado Pago es un método de pago seguro y fácil de usar. El
                dinero disponible en Mercado Pago se transfiere inmediatamente a
                la cuenta del receptor. Paga con Mercado Pago para obtener una
                protección total para tus compras y recibir el dinero de vuelta
                si el producto no es lo que esperabas.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cuáles son los costos de envío?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Los costos de envío variarán en función del lugar de entrega, el
                peso y el tamaño del paquete. Los costos de envío se calcularán
                automáticamente durante el proceso de pago. Ofrecemos tarifas de
                envío especiales para pedidos grandes y envíos internacionales.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Qué tipo de garantía ofrece la tienda?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Ofrecemos una garantía de 30 días para productos defectuosos. Si
                su producto sufre algún daño en los 30 días posteriores a la
                entrega, nos encargaremos de repararlo o reemplazarlo de forma
                gratuita.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo puedo solicitar una devolución por garantía?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Para solicitar una devolución por garantía, debe contactar con
                nuestro servicio al cliente enviando un correo electrónico a
                contacto@vibe.com con detalles sobre el producto defectuoso.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>
                ¿Qué hago si mi producto no está cubierto por la garantía?
              </h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Si su producto no está cubierto por la garantía, le recomendamos
                que contacte con nuestro servicio al cliente para obtener
                asesoramiento sobre los pasos a seguir para solucionar el
                problem
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Qué tipo de devoluciones acepta la tienda?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Aceptamos devoluciones dentro de los 30 días a partir de la
                fecha de entrega. Los productos devueltos deben estar sin usar y
                en buenas condiciones para que podamos aceptarlos.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Cómo puedo realizar una devolución?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Para realizar una devolución, debe contactar con nuestro
                servicio al cliente enviando un correo electrónico a
                contacto@tienda.com y seguir las instrucciones indicadas.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.face + " " + style.front}>
              <h3>¿Qué hago si mi producto fue entregado dañado?</h3>
            </div>
            <div className={style.face + " " + style.back}>
              <h3>
                Si el producto fue entregado dañado, le recomendamos que
                contacte con nuestro servicio al cliente para solicitar un
                reemplazo. También le reembolsaremos el dinero si el producto no
                se puede reparar o reemplazar.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default FrequentQuestions;
