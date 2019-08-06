// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x: 5,
  y: 5,
  path: [{x:5,y:5}]
};

function turnLeft(theRover) {
    switch (theRover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
  }
  console.log(rover.direction)
}
// turnLeft(rover.direction);
// turnLeft(rover.direction);
// turnLeft(rover.direction);

function turnRight(theRover) {
    switch (theRover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'N';
        break;
  }
  console.log(rover.direction);
}

// Turning works
// turnLeft(rover); // => 'W'
// turnRight(rover); // => 'E'


// facing north and south changes x, east/west changes y
// if facing north, move forward x--
// if facing south, move forward x++
// if facing east, move forward y++
// if facing west, move forward y--
// need to check if at boundaries


function moveForward(theRover) {
  if(theRover.y > 0 && theRover.y < 10 && theRover.x > 0 && theRover.x < 10) {  
    switch (theRover.direction) {
        case 'N':
          rover.x--;
          break;
        case 'S':
          rover.x++;
          break;
        case 'E':
          rover.y++;
          break;
        case 'W':
          rover.y--;
          break;
    }
    // need to add/subtract the new position to the path like in the final exercise
    console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);

        let newPosition = {x: theRover.x, y: theRover.y};

        theRover.path.push(newPosition);
  } else {
    console.log("Rover will fall off the planet, please move back and turn");
  }
}

// facing north and south changes x, east/west changes y
// if facing north, move backward x++
// if facing south, move backward x--
// if facing east, move backward y--
// if facing west, move backward y++
// need to check if at boundaries

function moveBackward(theRover) {
  if(theRover.y > 0 && theRover.y < 10 && theRover.x > 0 && theRover.x < 10) {  
    switch (theRover.direction) {
        case 'N':
          rover.x++;
          break;
        case 'S':
          rover.x--;
          break;
        case 'E':
          rover.y--;
          break;
        case 'W':
          rover.y++;
          break;
    }
    // need to add/subtract the new position to the path like in the final exercise
    console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);

        let newPosition = {x: theRover.x, y: theRover.y};

        theRover.path.push(newPosition);
  } else {
    console.log("Rover will fall off the planet, please move back and turn");
  }
}

// Moving Backwards and Forwards works, still have an issue with boundaries
// when we get to the end, we 'fall off' and can't move back
// console.log(rover.x, rover.y);
// console.log(rover.direction);
// turnRight(rover);
// moveForward(rover);
// moveForward(rover);
// moveForward(rover);
// moveBackward(rover);
// moveBackward(rover);
// turnRight(rover);
// moveBackward(rover);
// moveBackward(rover);
// moveBackward(rover);
// moveBackward(rover);
// moveBackward(rover);
// moveForward(rover);
// moveForward(rover);

function command(theRover, orders){
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "f": // forward
        moveForward(theRover, order);
        break;
      case "b": // backward
        moveBackward(theRover, order);
        break;  
      case "r": // right
        turnRight(theRover, order);
        break; 
      case "l": // left
        turnLeft(theRover, order);
        break;
    }
  }
  console.log(theRover.path);
}

command(rover, 'rrfffb');


// ======================
// function turnLeft(rover){
//   console.log("turnLeft was called!");
// }

// function turnRight(rover){
//   console.log("turnRight was called!");
// }

// function moveForward(rover){
//   console.log("moveForward was called")
// }