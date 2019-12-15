let animateTimer = 0;
class CreateBezier {
  constructor(canvas, points) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
    this.pointsArr = points.split(' ').map(v => ({ x: v.split(',')[0], y: v.split(',')[1] }));

    this.Animation();
  }
  Draw() {
    const { c } = this;
    c.clearRect(0, 0, canvas.width, canvas.height);
    this.DrawLine(c);
    this.DrawPoints(c);
  }
  DrawPoints(c) {
    c.beginPath();
    this.pointsArr.map(v => {
      c.fillStyle = 'red';
      c.strokeStyle = 'transparent';
      c.arc(v.x, v.y, 5, 0, 2 * Math.PI);
      c.fill();
      c.stroke();
      c.moveTo(v.x, v.y);
    });
    c.closePath();
  }
  DrawLine(c) {
    let firstPoint = this.pointsArr[0];
    c.beginPath();
    c.strokeStyle = 'black';
    this.pointsArr.map(v => {
      c.lineTo(v.x, v.y);
    });
    c.lineTo(firstPoint.x, firstPoint.y);
    c.stroke();
    c.closePath();
  }
  Animation() {
    console.log('贝塞尔动画中');
    const { c } = this;
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (this.pointsArr[1].x >= 350) {
      this.pointsArr[1].x = 200;
    } else {
      this.pointsArr[1].x += 0.5;
    }
    if (this.pointsArr[2].y >= 320) {
      this.pointsArr[2].y = 200;
    } else {
      this.pointsArr[2].y += 0.5;
    }
    this.Draw();
    animateTimer = requestAnimationFrame(() => {
      this.Animation();
    });
  }
  BezierTimerDestory() {
    cancelAnimationFrame(animateTimer);
  }
}
export default CreateBezier;
