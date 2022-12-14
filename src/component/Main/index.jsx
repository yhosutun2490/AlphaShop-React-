import RegistForm from './RegistForm'
import ProgressControl from './ProgressControl'
import ShopCart from './ShopCart'
import MainStyle from '../Styles/Layout/MainStyle'

function Main(props) {
  return (
    <div className='main'>
      <MainStyle>
        <div className='main-container'>
          <RegistForm title='結帳' />
          <ShopCart />
          <ProgressControl />
        </div>
      </MainStyle>
    </div>
  )
}

export default Main
