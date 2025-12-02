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
        label: "(11) 98888-7777",
        href: "https://wa.me/5511988887777",
        icon: FaWhatsapp, 
      },
    ],
  },

  email: {
    label: "lord.refrig@outlook.com",
    href: "mailto:lord.refrig@outlook.com",
    icon: Mail,
  },

  location: {
    title: "Localização",
    text: "Endereço\nRua Exemplo, 123 – Bairro\nCidade / UF",
  },
};
