import acLogo from '../../icons/logo.svg'
import shopLogo from '../../icons/shop.svg'
import facebookIcon from '../../icons/facebook.svg'
import InstagramIcon from '../../icons/instagram.svg'
import whatsappIcon from '../../icons/whatsapp.svg'
import FooterWrapStyle from './FooterWrapStyle'
function Footer(props) {
  return (
    <footer className='footer'>
      <FooterWrapStyle>
        <div className='footer-container'>
          <div className='footer-logo-container'>
            <img src={acLogo} alt='ac-logo' />
            <img src={shopLogo} alt='ac-tittle' />
          </div>
          <section className='footer-section'>
            <h2 className='section-title'>客戶服務</h2>
            <div className='section-content'>
              <a className='page-link' href='#'>運送說明</a>
              <a className='page-link' href='#'>退換貨相關</a>
              <a className='page-link' href='#'>付款資訊</a>
              <a className='page-link' href='#'>FAQ</a>
            </div>
          </section>
          <section className='footer-section'>
            <h2 className='section-title'>關於我們</h2>
            <div className='section-content'>
              <a className='page-link' href='#'>品牌故事</a>
              <a className='page-link' href='#'>媒體聯繫</a>
              <a className='page-link' href='#'>Press kit</a>
            </div>
          </section>
          <section className='footer-section'>
            <h2 className='section-title'>資訊</h2>
            <div className='section-content'>
              <a className='page-link' href='#'>隱私權政策</a>
              <a className='page-link' href='#'>Cookie</a>
              <a className='page-link' href='#'>GDPR</a>
            </div>
          </section>
          <section className='footer-section'>
            <h2 className='section-title'>追蹤 ALPHA Shop</h2>
            <div className='section-content'>
              <div className='tel-info'>+886 02123-45678</div>
              <div className='social-icon-group'>
                <img src={facebookIcon} alt='facebook' />
                <img src={InstagramIcon} alt='instagram' />
                <img src={whatsappIcon} alt='whatsapp' />
              </div>
            </div>
          </section>
        </div>
      </FooterWrapStyle>
    </footer>
  )
}

export default Footer
