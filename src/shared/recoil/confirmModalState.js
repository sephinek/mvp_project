import { atom } from 'recoil'

export const confirmModalState = atom({
    key: 'confirmModalState', // unique ID (with respect to other atoms/selectors)
    default: {
        isOpen: false,
    }, // default value (aka initial value)
})
