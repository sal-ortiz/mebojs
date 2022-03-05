


class Move {

  static forward(session, speed, duration) {
    session.execute("move_forward", duration, speed);
  }

  static backward(session, speed, duration) {
    session.execute("move_backward", duration, speed);
  }

  static left(session, speed, duration) {
    session.execute("move_left", duration, speed);
  }

  static right(session, speed, duration) {
    session.execute("move_right", duration, speed);
  }

  static stop(session) {
    session.execute(session, "fb_stop");
  }

}


module.exports = Move;
