import fetch from "isomorphic-fetch";
import { API } from "../config";

// export const userPublicProfile = async (username) => {
//   try {
//     console.log(username);
//     const response = await fetch(`${API}/user/${username}`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     let data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

export const getProfile = async (token) => {
  try {
    console.log(token);
    const response = await fetch(`${API}/user`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return {
      "photo": "",
      "name": "",
      "email": "",
      "profile": "",
      "username": "",
    };
  }
};

export const update = async (user, token) => {
  try {
    console.log(user);
    // /user/update
    const response = await fetch(`${API}/user/update`, {
      method: "POST",
      headers: {
        // Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: user,
    });
    let data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
