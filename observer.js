function observerCounter() {
  var obj = {}
  observersList = [];
  count = 0;
  obj.addListener = function(event) {
    observersList.push(event);
  };
  obj.trigger = function() {
    for (var i = 0; i < observersList.length; i++) {
      observersList[i]();
    }
    count++;
    console.log("Number of triggers: " +  count);
  }
  return obj;
}

var observer = observerCounter();

var firstEvent = function () {
    console.log("Executing first event");
};
observer.addListener(firstEvent);

observer.trigger();

var secondEvent = function () {
    console.log("Executing second event");
};
observer.addListener(secondEvent);

observer.trigger();
observer.trigger();

var thirdEvent = function () {
    console.log("Executing third event");
};
observer.addListener(thirdEvent);

observer.trigger();
observer.trigger();
observer.trigger();
