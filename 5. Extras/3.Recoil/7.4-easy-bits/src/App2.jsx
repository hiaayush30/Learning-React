
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo } from 'react'
import { jobsAtom, messagingAtom, networksAtom, notificationsAtom } from './atoms'
//RecoilRoot
function App(){
    return(
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    )
}
function MainApp() {
  const networkCount = useRecoilValue(networksAtom);
  const [jobsCount,setjobsCount] = useRecoilState(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const setnotificationsCount = useSetRecoilState(notificationsAtom);
  const notificationsCount=useRecoilValue(notificationsAtom);

  return <div>

      <button>Home</button>
      <button>My Networks ({networkCount>=100 ? "99+":networkCount})</button>
      <button>Jobs ({jobsCount>=100 ? "99+":jobsCount})</button>
      <button>Notifications {notificationsCount}</button>
      <button>Messaging</button>
      <button onClick={()=>{setjobsCount(c=>c+1)}}>Me</button>
      <button onClick={()=>{
        alert("you have a new notification!");
        setnotificationsCount(c=>c+1)}}>Click Me</button>
  </div>
}


export default App
