export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "450px", marginTop: "20px" }}>
      <iframe
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
        width="100%"
        height="100%"
        style={{ 
          border: 0, 
          borderRadius: "10px" 
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
