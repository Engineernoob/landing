import { ImageResponse } from "next/og";

export const runtime = "edge";

// Default values if query params are missing
const defaultTitle = "Veriscope – The Audit & Compliance Layer for AI";
const defaultSubtitle = "Audit. Comply. Trust.";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title") || defaultTitle;
    const subtitle = searchParams.get("subtitle") || defaultSubtitle;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            fontFamily: "sans-serif",
          }}
        >
          {/* Logo / Mark */}
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "black",
              marginBottom: 20,
            }}
          >
            Veriscope
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              maxWidth: "90%",
              marginBottom: 12,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "#4b5563",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            {subtitle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response("Failed to generate the image", { status: 500 });
  }
}
