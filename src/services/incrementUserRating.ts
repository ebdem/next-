import { GRAFBASE_API_KEY, GRAFBASE_API_URL } from "@/config/BASE_URL";

export const UserRateIncrement = async (id: string) => {
  const res = await fetch(GRAFBASE_API_URL as string, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": GRAFBASE_API_KEY as string,
    },
    body: JSON.stringify({
      query: `mutation UpdatePostById($id: ID!, $rate: IntOperationsInput) {
  customerUpdate(by: { id: $id }, input: { rate: $rate }) {
    customer {
      firstName
      rate
    }
  }
}`,
      variables: {
        id,
        rate: {
          increment: 1,
        },
      },
    }),
  });
  return await res.json();
};
