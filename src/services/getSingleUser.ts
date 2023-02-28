import { GRAFBASE_API_KEY, GRAFBASE_API_URL } from "@/config/BASE_URL";

export const GetSingleUser = async (id: string) => {
  const res = await fetch(GRAFBASE_API_URL as string, {
    method: "POST",
    next: {
      revalidate: 1,
    },
    headers: {
      "content-type": "application/json",
      "x-api-key": GRAFBASE_API_KEY as string,
    },
    body: JSON.stringify({
      query: `query GetCustomerByID($id: ID!) {
        customer(by: { id: $id }) {
          lastName
          firstName
          rate
          photo
          phoneNumber
          title
          address
        }
      }`,
      variables: {
        id,
      },
    }),
  });
  return await res.json();
};
