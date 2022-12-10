declare namespace App {
  // interface Error {}
  interface Locals {
    pb: import("pocketbase").default;
  }
  interface PageData {
    config: import("$lib/common/types").Config;
  }
  // interface Platform {}
}
