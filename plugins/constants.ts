import skills from "~/constants/skill";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      const: {
        skills
      }
    }
  }
});