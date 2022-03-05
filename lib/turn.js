


class Turn {

  static left(session) {
    session.execute("inch_left");
  }

  static right(session) {
    session.execute("inch_right");
  }

}


module.exports = Turn;
