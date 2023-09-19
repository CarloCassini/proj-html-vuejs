import { createApp } from "vue";
import App from "./App.vue";

// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
// (ccn.ADD)
// questa parte importa una icona specifica. io scelgo di importare la busta della mailce il paperPlane
// questa operazione è da fare per ongni oggetto si FontAwesome
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
// ogni icona aggiunta alla libreria (ccn.ADD) va aggiunta a questa riga di co-dice.
library.add(faCartShopping, faPaperPlane);
// per usare font awerome devo agganciarmi a un componente al quale aggiungerò tutti gli elementi che mi serviranno

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
