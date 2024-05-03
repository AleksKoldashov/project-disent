import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Modal } from 'antd';
const { Meta } = Card;

export default function Cart({item}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return(
        <>
<Card
    style={{
      width: 300,
      margin: 10,
    }}
    cover={
      <img
        alt="example"
        src={item.flags.svg}
      />
    }
    actions={[ 
      <EllipsisOutlined key="ellipsis" onClick={showModal}/>,
    ]}
  >
   
    <Meta
      avatar={<Avatar src={item.flags.svg} />}
      title={item.name.common}
      description={item.capital}
    />
  </Card>
      <Modal title={item.name.common} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Официальное название страны: {item.name.official}</p>
        <p>Население: {item.population}</p>
        <p>Континент: {item.region}</p>
      </Modal>
        </>
    )
}