import { requireSession } from "@clerk/nextjs/edge";

// The handler should return a Response object
const handler = async (req) => {
  return new Response(
    JSON.stringify({
      ...req.session,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export default requireSession(handler);
