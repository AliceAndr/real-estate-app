import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': '68340a22bfmsh4cc31f75516ebd6p16f8edjsn9934568971bd'
// }

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}
