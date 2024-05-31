import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5002/api",
    timeout: 1000,
});

apiClient.interceptors.request.use(
    (config) => {
            const userDetails = localStorage.getItem('user');

            if(userDetails) {
                const token = JSON.parse(userDetails).token;
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
    },
    err => {
        return Promise.reject(err)
    }
);

export const loginRequest = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception,
        }
    }
}

export const registerRequest = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (exception) {
        return {
            error: true,
            exception,
        }
    }
}

export const getChannelSettings = async () => {
    try {
        
        return await apiClient.get('settings/channel')
    } catch (exception) {
        return {
            error: true,
            exception,
        }
    }
}

export const updateChannelSettings = async (data) => {
     try {
       return await apiClient.put("settings/channel", data);
     } catch (exception) {
       return {
         error: true,
         exception,
       };
     }
}


export const changePasswordRequest = async (data) => {
    try {
        return await apiClient.patch("/settings/password", data)
    } catch (exception) {
         return {
           error: true,
           exception,
         };
    }
}


export const getFollowedChannelsRequest = async () =>  {
    try {
        return await apiClient.get('/channels/followed')
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
}

export const getChannelsRequest = async () => {
    try {
        return await apiClient.get("/channels")
    } catch (exception) {
         return {
           error: true,
           exception,
         };
    }
}

export const getChannelDetailsRequest = async (id) => {
    try {
        return await apiClient.get(`/channels/${id}`)
    } catch (exception) {
        return {
          error: true,
          exception,
        };
    }
}

export const followChannelRequest = async (channelId) => {
     try {
       return await apiClient.post('/channels/follow',{channelId});
     } catch (exception) {
       return {
         error: true,
         exception,
       };
     }
}

