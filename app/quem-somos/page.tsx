// app/quem-somos/page.tsx
import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import SectionContato from "../components/SectionContato";
import Header from "../components/Header";
import QuemSomosIn from "../components/QuemSomosIn";



export const metadata: Metadata = {
  title: "Quem Somos | Lord Tec",
  description:
    "Conheça a Lord Tec Refrigeração e Climatização, nossa história, missão, visão e valores.",
};

export default function QuemSomosPage() {
  return (
    <>
    <Header/>

      <PageHeader title="Quem Somos" />


        <QuemSomosIn />


        <SectionContato />

     
    </>
  );
}
