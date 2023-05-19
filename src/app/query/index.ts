import axios from "axios";

export const getData = async (url) => {
  const dataList = await fetch(`${process.env.NEXT_PUBLIC_APP_ENV}/${url}`, {
    method: "GET",
    headers: {
      Origin: process.env.NEXT_PUBLIC_ORIGIN,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data["hydra:member"];
    });
  return dataList;
};

export const getDataByID = async (id) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APP_ENV}/${id}`, {
    method: "GET",
    headers: {
      Origin: process.env.NEXT_PUBLIC_ORIGIN,
    },
  }).then((res) => res.json());

  return data;
};

export const updateProfile = async (iri, firstName, lastName, email, phone) => {
  return axios({
    method: "PUT",

    url: `${process.env.NEXT_PUBLIC_API_HOST}/people/${iri}`,
    headers: {
      "content-type": "application/ld+json",
      Authorization: `Bearer ${
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : ""
      }`,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    },
  });
};

export const changePassword = async (currentPassword, password, rePassword) => {
	return axios({
	  method: "POST",
  
	  url: `${process.env.NEXT_PUBLIC_API_HOST}/change_password`,
	  headers: {
		"content-type": "application/ld+json",
		Authorization: `Bearer ${
		  typeof window !== "undefined"
			? window.localStorage.getItem("token")
			: ""
		}`,
	  },
	  data: {
		currentPassword: currentPassword,
		newPassword: password,
		reNewPassword: rePassword,
		
	  },
	});
  };

// export const getCurrentUser = async () => {
//   return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/me`, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };
