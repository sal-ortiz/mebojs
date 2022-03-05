
const Session = require("./lib/session.js");
const Move = require("./lib/move.js")
const Turn = require("./lib/turn.js")
const Claw = require("./lib/claw.js")
const Arm = require("./lib/arm.js")
const Wrist = require("./lib/wrist.js")
const System = require("./lib/system.js");


class Mebo {

  constructor(sess) {
    this.session = sess
  }

  moveForward(speed, duration) {
    Move.forward(this.session, duration, speed);
  }

  moveBackward(speed, duration) {
    Move.backward(this.session, duration, speed);
  }

  moveLeft(speed, duration) {
    Move.left(this.session, durationi, speed);
  }

  moveRight(speed, duration) {
    Move.right(this.session, duration, speed);
  }

  stopMoving() {
    Move.stop(this.session);
  }

  turnLeft() {
    Turn.left(this.session);
  }

  turnRight() {
    Turn.right(this.session);
  }

  openClaw(duration) {
    Claw.open(this.session, duration);
  }

  closeClaw(duration) {
    Claw.close(this.session, duration);
  }

  stopClaw() {
    Claw.stop(this.session);
  }

  armUp(duration) {
    Arm.up(this.session, duration);
  }

  armDown(duration) {
    Arm.down(this.session, duration);
  }

  armStop() {
    Arm.stop(this.session);
  }

  wristRotateLeft() {
    Wrist.rotateLeft(this.session);
  }

  wristInchLeft() {
    Wrist.inchLeft(this.session);
  }

  wristRotateRight() {
    Wrist.rotateRight(this.session);
  }

  wristInchRight() {
    Wrist.inchRight(this.session);
  }

  wristRotateStop() {
    Wrist.rotateStop(this.session);
  }

  wristTurnLeft() {
    Wrist.up(this.session);
  }

  wristTurnRight() {
    Wrist.down(this.session);
  }

  wristTurnStop() {
    Wrist.stop(this.session);
  }

  static get Session() {
    return Session;
  }

}


module.exports = Mebo;
