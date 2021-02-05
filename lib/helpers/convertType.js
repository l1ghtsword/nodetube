function stringToBoolean(string){
  // Take a string and look for explicit true of false
  switch(string.toLowerCase().trim()){
    case "true": case "yes": case "1": return true;
    case "false": case "no": case "0": case null: return false;
    
    //If string is empty, returns false, otherwise true.
    default: return Boolean(string);
  }
}

module.exports = {
  stringToBoolean
};