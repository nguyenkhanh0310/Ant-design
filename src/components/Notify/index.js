import React from 'react';
import { Dropdown, Button, Badge } from 'antd';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import "./Notify.css";

function Notify() {
  const items = [
    {
      label:
        <div className='notify__item'>
          <div className='notify__item--icon'>
            <MailOutlined />
          </div>
          <div className='notify__item--content'>
            <div className='notify__item--title'>
              Item 1s
            </div>
            <div className='notify__item--time'>
              8 phút trước
            </div>
          </div>
        </div>,
      key: '0',
    },
    {
      label: '2nd menu item',
      key: '1',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      label: '4th menu item',
      key: '4',
    },
    {
      label: '5th menu item',
      key: '5',
    },
    {
      label: '6th menu item',
      key: '6',
    },
    {
      label: '7th menu item',
      key: '7',
    }
  ];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        dropdownRender={(menu) => (
          <>
            <div className='notify__dropdown'>
              <div className='notify__header'>
                <div className='notify__header--title'>
                  <BellOutlined />Notification
                </div>
                <Button type='link'>View All</Button>
              </div>
              <div className='notify__body'>
                {menu}
              </div>
            </div>
          </>
        )}
      >
        <Badge dot={true}>
          <Button type='text' icon={<BellOutlined />}></Button>
        </Badge>
      </Dropdown>
    </>
  );
}

export default Notify;
