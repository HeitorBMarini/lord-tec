import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = {
  email: {
    label: "email@email.com",
    href: "mailto:email@email.com",
    icon: Mail,
  },

  phone: {
    label: "(11) 99999-9999",
    href: "tel:+5511999999999",
    icon: Phone,
  },

  whatsapp: {
    label: "(11) 98888-7777",
    href: "https://wa.me/5511988887777",
    icon: FaWhatsapp,
  },
};
