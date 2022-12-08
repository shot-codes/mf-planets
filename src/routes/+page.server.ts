import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: PageServerLoad = async () => {
  try {
    const resultList = await pb
      .collection("solar_systems")
      .getOne("6j7e9wkghr4vxip");
    return resultList.data;
  } catch (err) {
    return {
      success: false,
    };
  }
};
