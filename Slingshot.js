class Slingshot{
constructor(BodyA,PointB){
var opt={
    bodyA : BodyA,
    pointB : PointB,
    stiffness : 0.1,
    length : 50
}
this.pointB=PointB;
this.slingshot=Constraint.create(opt);
World.add(world, this.slingshot);

}
display(){
   if(this.slingshot.bodyA){

   

   var pointA=this.slingshot.bodyA.position;
   var pointB=this.pointB;
   line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}
fly(){
    this.slingshot.bodyA=null;
}

}