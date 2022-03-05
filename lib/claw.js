


class Claw {

  static open(session, duration) {
    session.execute("c_open", duration);
  }

  static close(session, duration) {
    session.execute("c_close", duration);
  }

  static stop(session) {
    session.execute("c_stop");
  }

}


module.exports = Claw;
