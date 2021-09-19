import React from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  RichCell,
  Avatar,
  Button

} from '@vkontakte/vkui';

const Home = ({ id }) => (
  <Panel id={id}>
    <PanelHeader>VK Mini Apps 10-30</PanelHeader>
    <Group>
      <Header mode="secondary">Почему NaN?</Header>
      <RichCell multiline disabled>Хороший вопрос. Отвечать на него я конечно не буду.</RichCell>
    </Group>
    <Group>
      <Header mode="secondary">Состав NaN</Header>
      <RichCell
        disabled
        multiline
        before={<Avatar size={72} src='https://sun9-23.userapi.com/s/v1/if1/GaTx8Cbd1ieNYEc88RqDW5IGlP_RXyup0qXUiJyuPVpsiChakcnFohpAl84Cs9SNMV0.jpg?size=50x50' />}
        text="Капитан, React, JS, Node JS"
        caption="(P.S. Это не баг, ава прозрачная)"
        after='№1'
        actions={
          <React.Fragment>
            <Button href='https://vk.com/serg.grig' target='_blank'>VK</Button>
            <Button href='https://github.com/NaNECSG' target='_blank' mode="secondary">GitHub</Button>
          </React.Fragment>
        }
      >
        Сергей Григорьев
      </RichCell>
      <RichCell
        disabled
        //after={<Icon28UserAddOutline />}
        before={<Avatar size={72} src='https://sun9-74.userapi.com/impg/HfnDD4DSz-22D4m5CFneyXKrg_Di9qe_9hFR9Q/f_-pgQqGSFE.jpg?crop=0.167,0,0.667,1&size=0x48&quality=95&sign=4623df06671f394989680441b3e7dda5' />}
        text="Группа поддержки"
        after='№2'
      >
        Персик
      </RichCell>
      <RichCell
        disabled
        //after={<Icon28UserAddOutline />}
        before={<Avatar size={72} src='https://sun9-63.userapi.com/impg/00kgZsxcpeyhtKP30lD6XpWcqWaPVu8gjG-y2w/lAOrUWcDFFc.jpg?crop=0.167,0,0.667,1&size=0x48&quality=95&sign=74b39cfa45b5cbb64bf1fc7202482382' />}
        text="Группа поддержки"
        after='№3'
      >
        Сеня
      </RichCell>
      <RichCell
        disabled
        //after={<Icon28UserAddOutline />}
        before={<Avatar size={72} src='https://sun9-25.userapi.com/impg/XQFY98mS7EdkpPxxd-sOebcDCCQ905f7ssGG7Q/1YWSLJUyyqY.jpg?crop=0.167,0,0.667,1&size=0x48&quality=95&sign=b92d625cb428509cd7a493b9173953e7' />}
        text="Группа поддержки"
        after='№4'
      >
        Спаркс
      </RichCell>
    </Group>
  </Panel>
);

export default Home;
