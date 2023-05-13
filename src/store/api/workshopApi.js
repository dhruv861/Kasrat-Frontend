import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

export const workshopApi = createApi({
  reducerPath: "workshopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/workshops/`,
  }),
  endpoints: (builder)=>({
    getRooms: builder.query({
        query(){
            return {
              url: "rooms/",
            };
        }
    }),
    getRoomCodeByRole: builder.query({
        query({role,roomId}){
            return {
              url: `room-code/${role}/${roomId}`,
            };
        }
    })
  })
});

export const {useGetRoomCodeByRoleQuery,useGetRoomsQuery} = workshopApi;