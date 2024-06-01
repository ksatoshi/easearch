export function getPosition(){
    if(navigator === null) return null;

    navigator.geolocation.getCurrentPosition(
        (position) =>{
           // setUserLat(position.coords.latitude);
            console.log('user lat is:',position.coords.latitude);
           // setUserLon(position.coords.longitude);
            console.log('user lon:',position.coords.longitude);
        }
    );
}