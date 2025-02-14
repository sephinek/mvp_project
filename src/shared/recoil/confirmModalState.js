import { atom } from "recoil";
export const confirmModalState = atom({
    key: "confirmModalState", // unique ID (with respect to other atoms/selectors)
    default: {
        isOpen: false,
        title: "",
        subTitle: "",
        cancleButtonName: "취소하기",
        confirmButtonName: "확인",
        callback: () => {},
    }, // default value (aka initial value)
});







