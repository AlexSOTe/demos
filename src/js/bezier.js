let animateTimer = 0;
class CreateBezier {
  constructor(canvas, points) {
    this.canvas = canvas;
    this.c = this.canvas.getContext('2d');
    this.pointsArr = points.split(' ').map(v => ({ x: v.split(',')[0], y: v.split(',')[1] }));
    this.n = 0

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
    if (this.n > 200) {
      this.n = 0;
    } else {
      this.n += 0.5;
    }

    this.pointsArr[1].y = Math.tan(this.n * 0.2) * 20 + 100;
    this.pointsArr[1].x = Math.sin(this.n + 5.5) * 20 + 300;

    this.pointsArr[2].y = Math.sin(this.n) * 10 + 200;
    this.pointsArr[2].x = Math.sin(this.n + 5) * 10 + 200;
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
