import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((clientItem) => (
        <div key={clientItem.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={clientItem.logo} alt="client" className="sm:w-[192] w-[130px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;