import { selector } from "recoil";
import { networkAtom, notificationAtom } from "../atoms/navbarAtoms";
import { countAtom } from "../atoms/count";

export const totalSelector=selector({
    key:'totalSelector',
    get:({get})=>{
        const networks=get(networkAtom);
        const count=get(countAtom);
        const notifications=get(notificationAtom);
        return networks+count+notifications
    }
})