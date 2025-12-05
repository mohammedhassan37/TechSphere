export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "450px", marginTop: "20px" }}>
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=https://www.google.com/maps/place/Bullring/@52.4776478,-1.8969896,17z/data=!3m2!4b1!5s0x4870bc88ee0ffd5b:0x7edf0a3a313a015b!4m6!3m5!1s0x4870bc88b0a23981:0x2f48a9bcc2e96950!8m2!3d52.4776446!4d-1.8944147!16zL20vMDE4eWR6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
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
