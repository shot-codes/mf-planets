import type { LayoutServerLoad } from "./$types";
import PocketBase from "pocketbase";
import { error } from "@sveltejs/kit";
import type { Config } from "$lib/types";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: LayoutServerLoad = async () => {
  try {
    const resultList = await pb
      .collection("solar_systems")
      .getOne("9r8ymnfkl0veydb");
    const config: Config = resultList.data;
    return {
      config,
    };
  } catch (_) {
    throw error(500, "failed to get solar system from pocketbase.");
  }
};
