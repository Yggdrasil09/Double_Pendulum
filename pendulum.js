var l1=180,l2=180;
var x1=400,y1=200;
var x2,y2;
var x3,y3;
var ang1=Math.PI/2,ang2=Math.PI/3;
var vel1=0,vel2=0;
var acc1=0,acc2=0;
var g=2;
var m1=20,m2=20;

function setup()
{
    var canvas=createCanvas(800, 600);
    background(255);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
}

function draw()
{
    background(255);
    x2=x1+l1*sin(ang1);
    y2=y1+l1*cos(ang1);
    x3=x2+l2*sin(ang2);
    y3=y2+l2*cos(ang2);
    acc1=(-g*(2*m1+m2)*sin(ang1)-m2*g*sin(ang1-2*ang2)-2*sin(ang1-ang2)*m2*(vel2*vel2*l2+vel1*vel1*l1*cos(ang1-ang2)))/(l1*(2*m1+m2-m2*cos(2*ang1-2*ang2)));
    acc2=(2*sin(ang1-ang2)*(vel1*vel1*l1*(m1+m2)+g*(m1+m2)*cos(ang1)+vel2*vel2*l2*m2*cos(ang1-ang2)))/(l2*(2*m1+m2-m2*cos(2*ang1-2*ang2)));
    strokeWeight(3);
    line(x1,y1,x2,y2);
    fill(0);
    ellipse(x2,y2,m1,m1);
    line(x2,y2,x3,y3);
    ellipse(x3,y3,m2,m2);
    vel1+=acc1;
    vel2+=acc2;
    ang1+=vel1;
    ang2+=vel2;
}