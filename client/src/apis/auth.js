import axiosSecure from ".";

export const saveUser= async user=>{
    const currentUser={
        email: user.email,
        role: 'guest',
        status: 'verified'
    }
    const {data}=axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data 
}

export const getToken= async(email)=>{
    const {data}=axiosSecure.post('/jwt', email)
    return data
}
export const clearCookie= async () =>{
    const {data}=axiosSecure.get('/logout')
    return data
}