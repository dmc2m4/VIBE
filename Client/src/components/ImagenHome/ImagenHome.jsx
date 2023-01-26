import React from 'react'
import style from './ImagenHome.module.css'

const ImagenHome = () => {
  return (
    <div className={style.container}>
        <section className={style.containerImg}>
            <div>
                <img src="https://previews.123rf.com/images/zodchiy/zodchiy1705/zodchiy170500032/79237262-new-arrivals-concept-for-internet-stores-promo-new-arrivals-web-baners-material-design-trendy-colors.jpg" alt="" className={style.imgPublicity} />
            </div>
            <div>
                <img src="https://w7.pngwing.com/pngs/530/396/png-transparent-armani-exchange-hd-logo.png" alt="" className={style.imgPublicity} />
            </div>
            <div>
                <img src="https://as1.ftcdn.net/v2/jpg/01/16/24/24/1000_F_116242418_ifZYTTWgImnUVPFLelJdJtSbHE5aaJf8.jpg" alt="" className={style.imgPublicity} />
            </div>
            <div >
                <img src="https://previews.123rf.com/images/bombaytattoo/bombaytattoo1803/bombaytattoo180300008/97045596-verano-colecci%C3%B3n-tropical-fondo-de-la-bandera-.jpg" alt="" className={style.imgPublicity} />
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0248/2202/2224/files/Mobile-NAV-sale.jpg?v=1656152711" alt="" className={style.imgPublicity}/>
            </div>
        </section>
    </div>
  )
}

export default ImagenHome