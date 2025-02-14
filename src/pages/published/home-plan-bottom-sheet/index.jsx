import { useState } from "react"
import HomePlanBottomSheet from "../../../components/organisms/HomePlanBottomSheet"

const HomePlanBottomSheetPage = () => {
  const [isOpen, setIsOpen] = useState();

  return <>
    <button onClick={() => setIsOpen(true)}>열기</button>
    <HomePlanBottomSheet isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
  </>
}

export default HomePlanBottomSheetPage;