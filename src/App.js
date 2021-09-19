import React from 'react';
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  PanelHeader
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';


const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout style={{ justifyContent: "center" }}
          header={ <PanelHeader separator={false} />} >
            <SplitCol 
            //width="560px"
              maxWidth="560px">
              <View activePanel='home'>
                <Home id='home' />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;

