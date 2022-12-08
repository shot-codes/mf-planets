import type { PageServerLoad, Actions } from "./$types";
import { redirect, invalid } from "@sveltejs/kit";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: PageServerLoad = async (event) => {
  if (event.locals.pb.authStore.isValid) {
    try {
      const config = await pb
        .collection("solar_systems")
        .getOne("5slw951x0qurpdp");
      return config.data;
    } catch (err) {
      return {
        "No config?": "🤷‍♀️",
      };
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
        .update("5slw951x0qurpdp", { data: { root: config } });
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: "Error updating config." };
    }
  },
};
