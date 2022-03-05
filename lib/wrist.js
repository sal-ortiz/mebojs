


class Wrist {

  static rotateLeft(session, duration) {
    session.execute("w_left", duration);
  }

  static inchLeft(session) {
    session.execute("inch_w_left");
  }

  static rotateRight(session, duration) {
    session.execute("w_right", duration);
  }

  static inchRight(session) {
    session.execute("inch_w_right");
  }

  static rotateStop(session) {
    session.execute(session, "w_stop");
  }

  static up(session, duration) {
    session.execute("h_up", duration);
  }

  static down(session) {
    session.execute("h_down", duration);
  }

  static stop(session) {
    session.execute(session, "h_stop");
  }

}


module.exports = Wrist;
