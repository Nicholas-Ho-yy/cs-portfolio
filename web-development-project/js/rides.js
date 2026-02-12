/* ---------- Rides Page Functionality  ---------- */

var rideInfoPanesCont = document.getElementById("ride-info-panes-cont");
var rideInfoPanes = document.querySelectorAll("#ride-info-panes-cont .ride-info-pane");

var rideWaitTimeTxts = document.querySelectorAll("#ride-info-panes-cont .ride-info-pane .ride-wait-time-txt");
var minRideWaitTimeInMins = 1;
var maxRideWaitTimeInMins = 120;

var rideStatusTxts = document.querySelectorAll("#ride-info-panes-cont .ride-info-pane .ride-status-txt");

var rideInfoPaneCollapseBtns = document.querySelectorAll("#ride-info-panes-cont .ride-info-pane .ride-info-pane-collapse-btn");

var themeParkMapImgCont = document.getElementById("themepark-map-img-cont");
var rideLocationPinIconBtns = document.querySelectorAll("#themepark-map-img-cont .ride-location-pin-icon");

var ridesArr = [
    {
        name: "Carousel of Feels",
        number: 1,
        description: "As you sit on the carousel that revolves, you experience fleeting feelings of happiness and fun accompanied by its adrenaline.",
        status: "OPEN",
        estWaitTimeInMins: "-",
        minDurationInMins: 2,
        maxDurationInMins: 3,
        minWeightReqInKg: 10,
        maxWeightReqInKg: 90,
        minHeightReqInMetres: 1.2,
        maxHeightReqInMetres: 1.9,
        maintenanceTime: "17:15:00"
    },
    {
        name: "Tower of Height",
        number: 2,
        description: "Experience a short rush of adrenaline as this ride bring you to the top and down!",
        status: "OPEN",
        estWaitTimeInMins: "-",
        minDurationInMins: 1,
        maxDurationInMins: 1,
        minWeightReqInKg: 10,
        maxWeightReqInKg: 90,
        minHeightReqInMetres: 1.2,
        maxHeightReqInMetres: 1.9,
        maintenanceTime: "14:30:00"
    },
    {
        name: "Circle of Life",
        number: 3,
        description: "Experience a ride that represents the ups and downs of life but everything will be better soon.",
        status: "OPEN",
        estWaitTimeInMins: 0,
        minDurationInMins: 10,
        maxDurationInMins: 20,
        minWeightReqInKg: 10,
        maxWeightReqInKg: 90,
        minHeightReqInMetres: 1.2,
        maxHeightReqInMetres: 1.9,
        maintenanceTime: "-"
    }
];

var rideMaintenanceTimesArr = ["14:30:00", "17:15:00"];

for(let i = 0, n = rideWaitTimeTxts.length; i < n; i++){
    // generate a random est. ride wait time from 1 (inclusive) to 120 (inclusive) in mins
    let randomRideWaitTime = Math.floor(Math.random() * (maxRideWaitTimeInMins - minRideWaitTimeInMins + minRideWaitTimeInMins)) + minRideWaitTimeInMins;

    ridesArr[i].estWaitTimeInMins = randomRideWaitTime;

    if(randomRideWaitTime >= 60){
        // convert random est. ride wait time to its equivalent in hours and minutes
        let randomRideWaitTimeInHours = Math.floor(randomRideWaitTime / 60);
        let randomRideWaitTimeInMins = randomRideWaitTime % 60;

        rideWaitTimeTxts[i].textContent = randomRideWaitTimeInHours + "h " + randomRideWaitTimeInMins + " mins";
    }
    else {
        rideWaitTimeTxts[i].textContent = randomRideWaitTime + " mins";
    }
}

for(let h = 0, n = ridesArr.length; h < n; h++){
    for(let j = 0, n = rideMaintenanceTimesArr.length; j < n; j++){
        // check if each ride's maintenance time matches any of the preset maintenance times
        if(ridesArr[h].maintenanceTime === rideMaintenanceTimesArr[j]){
            ridesArr[h].status = "CLOSED";

            // if a match is found aka the ride is due for maintenance, remove its default status and style i.e green text color for being open
            if(rideStatusTxts[h].classList.contains("txt-color-open")){
                rideStatusTxts[h].classList.remove("txt-color-open");
            }

            // after, update the ride's status to closed and set its style to i.e red text color for being closed
            rideStatusTxts[h].classList.add("txt-color-close");
            rideStatusTxts[h].textContent = "CLOSED";

            ridesArr[h].estWaitTimeInMins = 0;

            rideWaitTimeTxts[h].textContent = "-";

            // exit from inner loop once the if condition is met and return to outer loop to continue iterating
            break;
        }
    }
}

for(let k = 0, n = rideLocationPinIconBtns.length; k < n; k++){
    rideLocationPinIconBtns[k].addEventListener("click", () => {
        // set all ride location pins to inactive everytime the user clicks on a certain ride location pin
        for(let p = 0, n = rideLocationPinIconBtns.length; p < n; p++){
            rideLocationPinIconBtns[p].classList.remove("active");
        }

        // uncollapse AND hide all ride info panes (including the container storing them) everytime the user clicks on a certain ride location pin
        for(let q = 0, n = rideInfoPanes.length; q < n; q++){
            rideInfoPanesCont.classList.remove("collapse");
            
            rideInfoPanes[q].classList.remove("collapse");
            rideInfoPanes[q].classList.add("hide");
        }

        // set the clicked ride location pin to active
        rideLocationPinIconBtns[k].classList.add("active");

        // show the selected ride info pane
        rideInfoPanes[k].classList.remove("hide");

        // set theme park image container to its original state where its width is NOT 100%
        themeParkMapImgCont.classList.remove("collapse");
    });
}

for(let s = 0, n = rideInfoPaneCollapseBtns.length; s < n; s++){
    rideInfoPaneCollapseBtns[s].addEventListener("click", () => {
        // toggle the collapsing AND uncollapsing of the container storing all ride info panes
        rideInfoPanesCont.classList.toggle("collapse");
        
        // toggle the collapsing AND uncollapsing of the selected ride info pane
        rideInfoPanes[s].classList.toggle("collapse");

        // toggle the width of the selected theme park img container i.e its 100% or NOT
        themeParkMapImgCont.classList.toggle("collapse");
    });
}