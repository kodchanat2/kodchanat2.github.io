import skills from "~/constants/skill";
import route_list from "~/constants/route";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      const: {
        skills,
        route_list
      }
    }
  }
});