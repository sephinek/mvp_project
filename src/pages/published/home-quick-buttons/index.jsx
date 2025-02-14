import HomeQuickButtons from '../../../components/organisms/HomeQuickButtons'

const HomeQuickButtonsPage = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      padding: '0px 20px 24px',
      justifyContent:'flex-end',
      background:'rgba(0,0,0,0.4)',
      height:'100vh',
    }}>
      <HomeQuickButtons>
      </HomeQuickButtons>
    </div>
  )
}

export default HomeQuickButtonsPage;