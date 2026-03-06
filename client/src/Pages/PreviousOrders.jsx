
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

