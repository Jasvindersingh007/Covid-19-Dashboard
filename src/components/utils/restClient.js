import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://disease.sh/v3/covid-19/";
const timeout = 1000 * 10;

class RestClient {

  static async get(url) {
    return new Promise(function (resolve, reject) {
      axios
        .get(baseUrl + url, { timeout })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          toast.error("Something went wrong");
          reject(error);
        });
    });
  }

}

export default RestClient;
