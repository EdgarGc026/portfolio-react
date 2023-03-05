import { createServer } from "miragejs";

const socialMediaButtonGroup = [
  { "id": 1, "name": "github", "url": "https://github.com/edgargc026" },
  {
    "id": 2, "name": "linkedin-in", "url": "https://www.linkedin.com/in/edgargc026/"
  },
  { "id": 3, "name": "twitter", "url": "https://twitter.com/edgargc026" },
  { "id": 4, "name": "instagram", "url": "https://instagram.com/edgargc026" }
];

export const mockServer = createServer({
  routes() {
    this.get("/buttons/:variant", (schema, request) => {
      return {
        data: {
          text: `${request.params.variant}`,
          variant: request.params.variant
        }
      };
    });
    this.get(`/socialMediaButtonGroup`, (schema, request) => {
      return {
        data: {
          socialMediaButtonGroup
        }
      };
    });
  }
});