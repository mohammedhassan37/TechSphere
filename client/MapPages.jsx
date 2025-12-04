import GoogleMap from "../components/GoogleMap";

export default function MapPage() {
  return (
    <div 
      style={{ 
        padding: "20px", 
        maxWidth: "900px", 
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Our Location</h1>
      <p style={{ marginBottom: "20px" }}>
        You can find us at the location shown on the map below.
      </p>

      {/* Google Maps embed */}
      <GoogleMap />

      <div style={{ marginTop: "25px" }}>
        <h2>Address</h2>
        <p>
          123 Example Street <br />
          London, United Kingdom
        </p>
      </div>
    </div>
  );
}
