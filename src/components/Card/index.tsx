import styled from "@emotion/styled";

const PhoneCard = ({ props }: any) => {
  const Card = styled.div`
    display: flex;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `;

  return <Card>{props}</Card>;
};

export default PhoneCard;
