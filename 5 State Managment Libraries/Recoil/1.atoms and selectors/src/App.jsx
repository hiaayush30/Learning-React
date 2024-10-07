import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
import { notificationAtom } from './store/atoms/navbarAtoms';
import { networkAtom } from './store/atoms/navbarAtoms';
import { totalSelector } from './store/selectors/total';
function App() {
  // const [count,setCount]=useRecoilState(countAtom)
  //or
  const count = useRecoilValue(countAtom);
  const setCount = useSetRecoilState(countAtom);
  const notifications=useRecoilValue(notificationAtom)
  const network=useRecoilValue(networkAtom)

  // const total=useMemo(()=>count+notifications+network,[notifications,network,count])
  //better way=> use selectors
  const total=useRecoilValue(totalSelector);
  return (
    <div>
      <div>
        <h2>{count}</h2>
        <div>
          <button onClick={() => { setCount(count + 1) }}>Increase</button>
          <button onClick={() => { setCount(count - 1) }}>Decrease</button>
        </div>
      </div>
      <div>
        Notifications {notifications>=100 ? '99+':notifications}
      </div>
      <div>
        Network {network}
      </div>
      <div>
        Total:{total}
      </div>
    </div>
  )
}

export default App
