

export default function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/my-orders`, {
          credentials: "include"
        });

        const data = await res.json();

        if (res.status === 401) {
          navigate("/registration"); 
          return;
        }

        if (!data.success) throw new Error(data.message || "Failed to load previous orders");

        setOrders(data.orders || []);
      } catch (e) {
        setMsg(e.message || "Error loading your previous orders");
      }
    };

    loadOrders();
  }, [navigate]);

  if (msg) return <p>{msg}</p>;
  if (orders.length === 0) return <p>No previous orders yet.</p>;

  return (
    <div >
      <h1>My Orders</h1>

      {orders.map(order => (
        <div
          key={order.order_id}
         
        >
          <div >
            <strong>Order #{order.order_id}</strong>
            <span>{new Date(order.created_at).toLocaleString()}</span>
          </div>

          <div>
            <span>Status: {order.status}</span>
            <span >
              Total: £{Number(order.total_amount).toFixed(2)}
            </span>
          </div>

          <h3>Items</h3>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.product_name} — £{Number(item.unit_price).toFixed(2)} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

