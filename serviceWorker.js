if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('../public/sw.js', { scope: '/' })
      .then((reg)=>{console.log("service worker registered", reg)})
      .catch((err)=>{console.log("error while registering service worker", err)})
  })
}