class Driver{
  
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date('95');
  }
 
  
 
  yearsExperienceFromBeginningOf(year){
    this.startDate=this.startDate.getFullYear();
    return year-this.startDate ;
  }
}
class Route{
   constructor(beginningLocation , endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
  //  return Number.parseInt(this.endingLocation.vertical)- //Number.parseInt(this.beginningLocation.vertical);
  }
  
}