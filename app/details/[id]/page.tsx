import React from "react";
import { GetSingleUser } from "@/services/getSingleUser";

async function DetailPage({ params: { id } }: { params: { id: string } }) {
  const { data } = await GetSingleUser(id);
  console.log(data, "user");
  return <div>DetailPage</div>;
}

export default DetailPage;
