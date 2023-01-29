import styles from '../../styles/Order.module.css';
import Image from 'next/image';
import axios from 'axios';

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status == 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Adrress</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order.id}</span>
              </td>
              <td>
                <span className={styles.Name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{order.address}</span>
              </td>
              <td>
                <span className={styles.total}>Ksh. {order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={30} height={30} alt="" />
            </div>
          </div>
          <div className={styles.statusClass(1)}>
            <Image src="/img/checked.png" width={20} height={20} alt="" />
          </div>
          <div className={styles.statusClass(2)}>
            <Image src="/img/checked.png" width={20} height={20} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal</b> {order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discout</b> ksh 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total</b> k{order.total}
          </div>
          <button disabled className={styles.button}>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    },
  };
};
export default Order;
