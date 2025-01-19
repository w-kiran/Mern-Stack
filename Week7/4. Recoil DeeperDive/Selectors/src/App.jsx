import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationsAtomCount})</button>
      <button onClick={() => {
      }}>Me ({totalNotificationCount})</button>
      <ButtonUpdater />
    </>
  )
}

function ButtonUpdater() {
  const setNotificationAtomCount = useSetRecoilState(notificationsAtom)
  return <button onClick={() => {
    setNotificationAtomCount(c => c + 1);
  }}>Notification++</button>
}

export default App
