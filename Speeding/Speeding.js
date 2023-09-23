//Function to determine demerit points.
function getPoints(speed){
    const speedLimit= 70; //maximum speed
    const demeritPoint=5; //demerit points
    if (speed<=speedLimit){ // If function to determime if speed is ok, how many demerit points and if licencse is suspended
        console.log("Ok");
    } else if(speed>speedLimit){
        const points= Math.round((speed-speedLimit)/demeritPoint);
        console.log(points);
        if (points>12){
            console.log("License suspended")
        } else{
            console.log(`${points} demerit points`)
        }
    }
};
