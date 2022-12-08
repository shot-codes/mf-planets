declare namespace App {
  // interface Error {}
  interface Locals {
    pb: import("pocketbase").default;
  }
  interface PageData {
    root: import("$lib/common/types").Planet;
  }
  // interface Platform {}
}
