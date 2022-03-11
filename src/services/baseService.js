import Axios from "axios"
import {DOMAIN,TOKEN, TOKEN1} from '../util/settings/config'

export class baseService {
    post = (url,model) => {
        return Axios({
          url: `${DOMAIN}${url}`,
          method: "POST",
          data: model,
          headers: {
            TokenCyberSoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E",
          },
        }); 
    }

}