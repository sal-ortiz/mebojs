


class System {

  static getVersion(session) {
    session.execute("get_version")
      .then((ver) => {
        console.log(ver); // TODO
      });
  }

  static getNetworks(session) {
    session.execute("get_rt_list")
      .then((list) => {
        console.log(list);  // TODO
      });
  }

  static setNetwork(session, auth, ssid, key, index) {
    session.execute("setup_wireless_save", {
      auth: auth,
      ssid: ssid,
      key: key,
      index: index,
    });
  }

  static setScanTimer(session, val) {
    session.execute("set_scan_timer", {
      value: val,
    });
  }

  static setTimerState(session, value) {
    session.execute("set_timer_state", {
      value: val,
    });
  }

  static restart(session) {
    session.execute("restart_system");
  }

  static getWifiCert(session) {
    session.execute("get_wifi_cert")
      .then((cert) => {
        console.log(cert);  // TODO
      });
  }

  static getBoundaryPosition(session) {
    session.execute("get_boundary_position")
      .then((state) => {
        console.log(state); // TODO
      });
  }

}


module.exports = System;
