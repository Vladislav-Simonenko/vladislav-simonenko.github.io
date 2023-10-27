import { ContentContainer } from "@molecules/ContentContainer";

export const Products = () => {
  return (
    <ContentContainer
      title={title}
      description={description}
      img={img}
      about={false}
      isZernovoz={true}
      isMain={true}
    />
  );
};

const title = "CRM Zernovoz";

const description =
  "Система автоматизированного сбора, управления и рассылки информации о заявках на транспортировку груза по определенному маршруту.";

const img = [
  {
    id: 1,
    src: "/zernovoz1.png",
    alt: "about us",
  },
];
