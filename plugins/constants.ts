import skills from "~/constants/skill";
import route_list from "~/constants/route";
import tag from "~/constants/tag";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      const: {
        skills,
        route_list,
        tag,
      }
    }
  }
});