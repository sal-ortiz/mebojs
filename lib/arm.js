


class Arm {

  static up(session, duration) {
    session.execute("s_up", duration);
  }

  static down(session, duration) {
    session.execute("s_down", duration);
  }

  static stop(session) {
    session.execute("s_stop");
  }

}


module.exports = Arm;
