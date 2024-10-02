import { atom, selector } from "recoil";

export const networksAtom=atom({
    key:"networksAtom",
    default:143
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:95
})

export const notificationsAtom=atom({
    key:"notificationsAtom",
    default:12
})

export const sumSelector=selector({
    key:"sumselector",
    get:(props)=>{
        const jobs=props.get(jobsAtom);
        const networks=props.get(networksAtom);
        return jobs+networks
    }
})