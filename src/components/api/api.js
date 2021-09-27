import RestClient from "../utils/restClient";
import {toast} from 'react-toastify';


class CountryApi {
    static async GetCountryRecords() {
      toast.configure();
        try {
            // const res = await RestClient.get(`all`);
            const res = await RestClient.get(`countries`);
            if (res.status === 200)
            { 
              toast.success("Fetched");
              return res.data;
            }
            else{
               throw res.message;
            }
          } catch (error) {
          throw error;
          }
    }

    static async SearchUser(search) {
        try {
            const res = await RestClient.get(`users?id=${search}`);
            if (res.status === 200) return res.data;
            else throw res.message;
          } catch (error) {
            console.log(alert(error));
            throw error;
          }
    }
    

}

export default CountryApi;