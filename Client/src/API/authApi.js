import axios from "axios"; 

const AuthAPI = axios.create({baseURL:'http://localhost:1080/auth',
    withCredentials: true,
})

export const UserApi= axios.create({baseURL:'http://localhost:1080/user',
    withCredentials: true,
})
export const RecruitApi= axios.create({baseURL:'http://localhost:1080/company',
    withCredentials: true,
})

export const ApplicationApi= axios.create({baseURL:'http://localhost:1080/application',
    withCredentials: true,
})


export const JobApi= axios.create({baseURL:'http://localhost:1080/job',
    withCredentials: true,
})
export default AuthAPI;