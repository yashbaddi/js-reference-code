// import { useEffect, useState } from "react";

// function useGeolocation() {
//   // const [location, setLocation] = useState({
//   //   isLoaded: false,
//   // });
//   // const [first, setFirst] = useState(0);
//   // const [second, setSecond] = useState(0);

//   {
//     var [counter, setCounter] = useState(0);
//     let a = 5;
//     console.log("a", a);
//   }
//   // const [third, setThird] = useState(0);
//   // console.log("a", a);
//   // let counter = 0;

//   // a = 0
//   // a + 1 => 1
//   // a + 1 => 2
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCounter(counter + 1);
//       console.log("counter1:", counter);
//       setCounter(counter + 1);
//       console.log("counter2:", counter);

//       // counter = counter + 0.01;

//       // if ("geolocation" in navigator) {
//       //   navigator.geolocation.getCurrentPosition(
//       //     function (position) {
//       //       const { latitude, longitude } = position.coords;
//       //       console.log("counter:", counter);
//       //       console.log([latitude + counter, longitude + counter]);
//       //       setLocation({
//       //         isLoaded: true,
//       //         coordinates: [latitude + counter, longitude + counter],
//       //       });
//       //     },
//       //     function (error) {
//       //       setLocation({
//       //         isLoaded: true,
//       //         error: error.message,
//       //       });
//       //     }
//       //   );
//       // } else {
//       //   setLocation({
//       //     isLoaded: true,
//       //     error: "Geolocation is not supported in this browser.",
//       //   });
//       // }
//       // console.log("location:", location);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [counter]);
//   // return location;
//   return 1;
// }

// export default useGeolocation;

import { useEffect, useState } from "react";

let counter = 0;

function useGeolocation() {
  const [location, setLocation] = useState({
    isLoaded: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      counter = counter + 0.001;
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const { latitude, longitude } = position.coords;
            setLocation({
              isLoaded: true,
              coordinates: [latitude + counter, longitude + counter],
            });
          },
          function (error) {
            setLocation({
              isLoaded: true,
              error: error.message,
            });
          }
        );
      } else {
        setLocation({
          isLoaded: true,
          error: "Geolocation is not supported in this browser.",
        });
      }
    }, 5000);
  }, []);

  return location;
}

export default useGeolocation;
