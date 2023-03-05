import { createServer } from "miragejs";

const heroComponent = {
  name: "Edgar Gonzalez",
  profession: "Backend developer",
  button: {
    variant: "heroButton",
    buttonText: "Get Cv",
    url: "https://drive.google.com/file/d/1mFTbUjSFcJ-gwbdTixT7M6jMHruNXyFY/view?usp=sharing"
  }
};

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

    this.get("/heroComponent", (schema, request) => {
      return heroComponent;
    });
  }
});