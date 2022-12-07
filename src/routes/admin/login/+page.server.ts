import type { Actions } from "./$types";
import { error, invalid, redirect } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email) {
      return invalid(400, { email, missing: true });
    }

    try {
      await event.locals.pb
        .collection("users")
        .authWithPassword(email as string, password as string);
      if (!event.locals.pb.authStore.isValid) {
        return { invalidLogin: true };
      }
    } catch (err) {
      if (err instanceof ClientResponseError && err.status === 400) {
        return { invalidCredentials: true };
      }
      console.error(err);
      throw error(500, "An error occurred while logging in.");
    }

    throw redirect(303, "/admin");
  },
};
