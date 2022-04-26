import React from 'react'
import classes from './SMM.module.scss';
import {PageHeader, Tabs} from 'antd';
import Publication from './Publication';
import Autoposting from './Autoposting';

const { TabPane } = Tabs
function SMM() {
  return (
    <div>
        <PageHeader
            className="site-page-header"
            // onBack={() => window.history.back()}
            // title="SMM"
            >
            <h1 className={classes.smm__title}>Статистика</h1>
            <Tabs defaultActiveKey='1' centered>
                <TabPane className={classes.smm__tabpane} tab="Account" key="1">
                </TabPane>
                <TabPane className={classes.smm__tabpane} tab="Publication" key="2">
                    <Publication/>
                </TabPane>
                <TabPane className={classes.smm__tabpane} tab="Autoposting" key="3">
                    <Autoposting/>
                </TabPane>
            </Tabs>
        </PageHeader>
    </div>
  )
}

export default SMM