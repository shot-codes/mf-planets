import type { PageServerLoad, Actions } from "./$types";
import { redirect, invalid, error } from "@sveltejs/kit";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// This is just here for demo purposes and is the reason PageData is not properly
// types on /admin/+page.svelte. Either remove this and rely solely on +layout.server.ts
// for data loading, or extend the PageData interface in app.d.ts
export const load: PageServerLoad = async (event) => {
  if (event.locals.pb.authStore.isValid) {
    try {
      const resultList = await pb
        .collection("solar_systems")
        .getOne("5slw951x0qurpdp");
      const config: Config = resultList.data;
      return { config };
    } catch (err) {
      throw error(500, "failed to get example data from pocketbase.");
    }
  } else {
    throw redirect(307, "/admin/login");
  }
};

export const actions: Actions = {
  logout: async (event) => {
    event.locals.pb.authStore.clear();
    throw redirect(307, "/admin/login");
  },

  update: async (event) => {
    const data = await event.request.formData();
    const config = data.get("config");

    // TODO: Config validation
    if (!config) {
      return invalid(400, { config, missing: true });
    }

    try {
      await pb
        .collection("solar_systems")
        .update("5slw951x0qurpdp", { data: { example: config } });
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: "Error updating config." };
    }
  },
};
