const getIdFromURL = (url) => {
  if (typeof url !== "string") return "";
  const id = url
    .split("/")
    .filter((i) => i !== "")
    .at(-1);
  return id;
};

export const getData = async (url) => {
  const dataList = await fetch(`${process.env.NEXT_PUBLIC_APP_ENV}/${url}`, {
    method: "GET",
    headers: {
      "Origin": process.env.NEXT_PUBLIC_ORIGIN,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data["hydra:member"];
    });
  return dataList;
};

export const getDataByID = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_APP_ENV}/${id}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data["hydra:member"];
    });

  return data;
};

export const getCurrentUser = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/me`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
