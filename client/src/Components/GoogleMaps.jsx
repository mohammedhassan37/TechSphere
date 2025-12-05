export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "450px", marginTop: "20px" }}>
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.0821742748612!2d-1.8969896239522979!3d52.47764783936515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc88b0a23981%3A0x2f48a9bcc2e96950!2sBullring!5e0!3m2!1sen!2suk!4v1764894183198!5m2!1sen!2suk&zoom=17"
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
