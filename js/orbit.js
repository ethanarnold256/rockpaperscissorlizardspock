system = document.querySelector('.system');
starSize = getComputedStyle(document.documentElement).getPropertyValue('--size-star').slice(0,-2);
satelliteSize = getComputedStyle(document.documentElement).getPropertyValue('--size-satellite').slice(0,-2);

/*
 * generate satellite
 * takes in integer
*/
function createSatellite(i) {

    let satellite = document.createElement('div');
    satellite.className = 'satellite';
    satellite.onclick = function(){scoreboard(i)};

    let span = document.createElement('span');
    span.innerText = hands[i];
    span.id = `sattelite${i}`;
    satellite.appendChild(span);

    return satellite;
}

// Yes, Mr. York, I did do this without a guide...
for(element in hands) {

    let angle = -(Math.PI/2)+((2*Math.PI)*(element/hands.length));
    let radius = starSize/2;
    let left = radius*(Math.cos(angle));
    let top = (starSize/2)-(radius*(Math.sin(angle)));

    let satellite = createSatellite(element);
    satellite.style.left = `${left}px`;
    satellite.style.top = `${top}px`;
    system.prepend(satellite);
}