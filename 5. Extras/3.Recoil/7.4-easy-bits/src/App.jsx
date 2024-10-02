
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo } from 'react'
import { jobsAtom, messagingAtom, networksAtom, notificationsAtom, sumSelector } from './atoms'
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
  
const sum=useRecoilValue(sumSelector);

//   const sum=useMemo(()=>{
//     return jobsCount+networkCount;
//   },[jobsCount,notificationsCount]);

  return <div>

      <button>Home</button>
      <button>My Networks ({networkCount>=100 ? "99+":networkCount})</button>
      <button>Jobs ({jobsCount>=100 ? "99+":jobsCount})</button>
      <button>Sum ({sum})</button>
  </div>
}


export default App
