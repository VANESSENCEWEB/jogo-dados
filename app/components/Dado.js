export default function Dado({ valor }) {
  return (
    <div style={{
      width: "80px",
      height: "80px",
      border: "2px solid #333",
      borderRadius: "10px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
      fontWeight: "bold"
    }}>
      {valor}
    </div>
  );
}