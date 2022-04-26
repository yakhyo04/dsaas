import React from 'react'
import { PageHeader, Tabs } from "antd"
import Box from '../../components/Box';

import classes from "./AdsPage.module.scss"
const { TabPane } = Tabs;

const Ads = () => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="ADS"
            // subTitle="This is a subtitle"
            />
            <Tabs defaultActiveKey="1">
                <TabPane tab="Facebook" key="1">
                    <Box>
                        <iframe className={classes.frame}
                            title="Facebook"
                            src="https://www.facebook.com/business/goals/build-awareness">
                        </iframe>
                    </Box>
                </TabPane>
                <TabPane tab="Instagram" key="2">
                    <Box>
                        <iframe className={classes.frame}
                            title="Instagram"
                            src="https://business.instagram.com/advertising">
                        </iframe>
                    </Box>
                </TabPane>
                <TabPane tab="Telegram" key="3">
                    <Box>
                        <iframe className={classes.frame}
                            title="Telegram"
                            src="https://promote.telegram.org/">
                        </iframe>
                    </Box>
                </TabPane>
            </Tabs>
        </>
    )
}

export default Ads