const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = [];
  this.journeys.map((journey) => {
    startLocations.push(journey.startLocation);
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = [];
  this.journeys.map((journey) => {
    endLocations.push(journey.endLocation);
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  let transport = [];
  this.journeys.map((journey) => {
    transport.push(journey.transport);
  });
  return transport;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeyByTransport = this.journeys.filter((journey) => journey.transport === transport);
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeyByMinDistance = this.journeys.filter((journey) => journey.distance > minDistance);
  return journeyByMinDistance;
};

// Traveller.prototype.calculateTotalDistanceTravelled = function () {

  // FIRST ATTEMPT USING REDUCE
  //   let totalDistance = this.journeys.reduce((accumulator, journey) => {
  //     return accumulator + journey.distance;
  //   });
  //  return totalDistance;
  // }

  // SECOND ATTEMPT USING FOREACH
  //   let totalDistance = 0;
  //   journeys.forEach((journey.distance) => {
  //     totalDistance += journey.distance;;
  //   })
  //   return totalDistance;
  // }

Traveller.prototype.getUniqueModesOfTransport = function () {

  let uniqueTransport = [];
  this.journeys.map((journey) => {
    if(!uniqueTransport.includes(journey.transport)){
      uniqueTransport.push(journey.transport)
    }
  })
  return uniqueTransport;
};


module.exports = Traveller;
