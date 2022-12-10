import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";
import { error } from "@sveltejs/kit";
import type { Config } from "$lib/types";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: PageServerLoad = async () => {
  try {
    const resultList = await pb
      .collection("solar_systems")
      .getOne("6j7e9wkghr4vxip");
    const config: Config = resultList.data;
    return {
      config,
    };
  } catch (_) {
    throw error(500, "failed to get solar system from pocketbase.");
  }
};
