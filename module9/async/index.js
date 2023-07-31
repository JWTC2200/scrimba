// document.querySelector('form').addEventListener('submit', e => {
//    e.preventDefault();
//    const data = new FormData(e.target);
//    const dataObject = (Object.fromEntries(data.entries()));
//    console.log(dataObject.one)
//  });




const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// function success(pos) {
//   const crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options)


navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude, pos.coords.longitude)
})