import axiosSecure from ".";

export const getAllRooms= async()=>{
    const {data}= await axiosSecure.get('/rooms')
    return data
}

export const getRoom= async(id)=>{
    const {data}= await axiosSecure.get(`/room/${id}`)
    return data
}