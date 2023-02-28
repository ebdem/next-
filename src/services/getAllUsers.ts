import { GRAFBASE_API_KEY, GRAFBASE_API_URL } from "@/config/BASE_URL";

export const GetAllUser = async () => {
  const res = await fetch(GRAFBASE_API_URL as string, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": GRAFBASE_API_KEY as string,
    },
    body: JSON.stringify({
      query: `query {
  customerCollection(first: 10) {
    edges {
      node {
        id
        lastName
        firstName
        rate
        photo
      }
    }
  }
}`,
    }),
  });
  return await res.json();
};
