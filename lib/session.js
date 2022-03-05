
const Axios = require("axios");
const AxiosRetry = require("axios-retry");


const DEFAULT_URL = "http://192.168.222.1:80"
const DEFAULT_RETRIES = 15

class Session {

  constructor(targURL, retries) {
    this.address = targURL || DEFAULT_URL;
    this.retries = retries || DEFAULT_RETRIES;
  }

  execute(cmd, duration, speed, kwargs) {
    let url = new URL(this.address);

    url.searchParams.append("req", cmd);

    if (speed) {
      url.searchParams.append("value", speed);
    }

    if (duration) {
      url.searchParams.append("dur", duration);
    }

    if (kwargs) {

      for (let key in kwargs) {
        let val = kwargs[key];

        url.searchParams.append(key, val);
      }
    }

    AxiosRetry(Axios, { retries: this.retries });

    let promise = Axios.get(url.href)
      .then((res) => {
        console.log("success!");

        return res.data;
      })
      .catch((err) => {
        console.log(err.toString());
        //throw err
      });

    return promise;
  }

}


module.exports = Session;
