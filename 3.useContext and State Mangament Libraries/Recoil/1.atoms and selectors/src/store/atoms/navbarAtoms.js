import { atom,selector } from "recoil";
import { countAtom } from "./count";

export const networkAtom=atom({
    key:'networkAtom',
    default:50
})

export const notificationAtom=atom({
    key:'notificationAtom',
    default:102
})

