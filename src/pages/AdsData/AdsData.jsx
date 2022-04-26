import React from 'react'
import { PageHeader, Tabs } from "antd"
import AdsList from './AdsList'
import AdsCalculate from './AdsCalculate'
const { TabPane } = Tabs

const AdsData = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Ads Data"
      />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="ADS List" key="1">
          <AdsList />
        </TabPane>
        <TabPane tab="ADS Calculate" key="2">
          <AdsCalculate />
        </TabPane>
      </Tabs>
    </div>

  )
}

export default AdsData