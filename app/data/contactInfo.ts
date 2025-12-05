import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = {
  phoneGroup: {
    title: "Telefones",
    items: [
      {
        label: "(11) 92101-2861",
        href: "tel:+5511921012861",
        icon: Phone, 
      },
      {
  label: "(11) 92101-2861",
  href: "https://wa.me/5511921012861", 
  icon: FaWhatsapp, 
}

    ],
  },

  email: {
    label: "lord.refrig@outlook.com",
    href: "mailto:lord.refrig@outlook.com",
    icon: Mail,
  },

  location: {
    title: "Localização",
    text: "Endereço\n R. João Alfredo, 431  – Santo Amaro \nSão Paulo / SP",
  },
};
