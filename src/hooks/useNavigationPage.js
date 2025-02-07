import { useLocation, useNavigate } from 'react-router-dom';

// 페이지를 전환할 때 호출하는 hooks 입니다. (쉽게 말하면 그냥 함수입니다.)
// routePage, state를 사용할 수 있습니다 사용 방법은 아래 순서를 따릅니다.
// 1. const { routePage, state } = useNavigationPage(); // 우선 사용하고자 하는 컴포넌트에 해당 hooks를 import해오고 hooks를 실행합니다.
// 2. 화면을 이동하고 싶다면 routePage("원하는 경로") 로 작성하고 데이터를 보내고 싶다면 routePage("원하는 경로", 데이터) 로 작성합니다.
// 3. 이동한 페이지에서 데이터를 가져오고 싶다면 state를 console.log(state)로 확인해보세요.
const useNavigationPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { state } = location;

  const routePage = (path, state) => {
    if (state) {
      navigation(path, { state: state });
    } else {
      navigation(path);
    }
  };

  return { routePage, state };
};

export default useNavigationPage;
