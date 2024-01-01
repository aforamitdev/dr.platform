import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

type Props = {};

const TabContainer = (props: Props) => {
  return (
    <div>
      <Tabs
        defaultActiveKey='profile'
        id='justify-tab-example'
        className='mb-3'
        justify
      >
        <Tab eventKey='home' title='Home'>
          Tab content for Home
        </Tab>
        <Tab eventKey='profile' title='Profile'>
          Tab content for Profile
        </Tab>
        <Tab eventKey='longer-tab' title='Loooonger Tab'>
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey='contact' title='Contact' disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabContainer;
