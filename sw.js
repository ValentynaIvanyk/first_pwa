self.addEventListener('install', evt => {
console.log('Service worker zainstalowany')
});
self.addEventListener('iactivate', evt => {
    console.log('Service worker aktywowany')
    });
    self.addEventListener('fetch', evt => {
        console.log("Pobranie:", evt)
    })