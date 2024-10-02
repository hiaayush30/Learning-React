import axios from "axios";
import { atom, selector, useRecoilValue } from "recoil";
  

// In Recoil, atoms with asynchronous default values, like the `notifications` 
// atom in your `atoms.js` file, resolve when their values are first accessed using a 
// Recoil hook like `useRecoilValue`. 

// So in your case, the `notifications` atom's default value, which is a selector, 
// will not be resolved immediately when `atoms.js` is imported by `App.jsx`. Instead, 
// it will be resolved when `useRecoilValue(notifications)` is called inside the `MainApp` 
// component in `App.jsx`.

// This lazy evaluation mechanism allows Recoil to defer fetching and calculating expensive
//  or asynchronous values until they are actually needed by the components that depend on 
//  them, which can improve performance and efficiency.
export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key:"fetchNotifications",
        get:async ()=>{
            // await new Promise((r)=>setTimeout((r),5000))  //waits for 5 seconds(r=resolve)
            await new Promise((r)=>setTimeout(()=>{console.log("resolved");r()},5000))
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

// export const notifications = atom({
//     key: "networkAtom",
//     default:()=>{
//         axios.get("https://sum-server.100xdevs.com/notifications").then((res)=>{
//             return res.data
//         })
//     }
// });
// the default value for an atom needs to be synchronous or it can have an async seletcor

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})