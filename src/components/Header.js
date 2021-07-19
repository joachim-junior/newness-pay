import React from 'react';
import { PageHeader, Button } from 'antd';

const Header = props => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={props.title}
        extra={[
          <Button key="1" type="primary">
            {props.button}
          </Button>
        ]}
      ></PageHeader>
    </div>
  );
};

export default Header;
