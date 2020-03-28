import { useEffect } from 'react'


export default function ScreenLock(){

  useEffect(()=>{
    let wakeLockObj;
    if ("keepAwake" in window.screen) {
      window.screen.keepAwake = true;
    } else if ("wakeLock" in navigator) {
      navigator.wakeLock.request('screen')
      .then((wakeLock) => {
        wakeLockObj = wakeLock;
      })
    }
    return () => {
      if(window.screen.keepAwake) window.screen.keepAwake = false;
      if(wakeLockObj) wakeLockObj.release();
    }
  },[])

  return null;

}