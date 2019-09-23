import React from 'react';
import { View, Text } from 'react-native';
import { List, Icon } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface ListViewProps extends ComProps { }

export default class ListView extends React.Component<ListViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List extra="test">
              <List.Item extra={<Icon name="left" fill="#abb0b5" size={14} />} onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
              <List.Item extra={<Icon name="apple" size={14} />}>Protobuf 生成 Go代码指南</List.Item>
              <List.Item extra="说明">Git 版本控制的核心概念</List.Item>
              <List.Item extra={<Icon name="left" fill="#abb0b5" size={14} />}>HTTP Referer 和 Referrer Policy</List.Item>
              <List.Item>
                <Icon name="apple" size={14} />
                <View>
                  <Text>因为爱过，所以慈悲；因为懂得，所以宽容。</Text>
                </View>
              </List.Item>
            </List>
            <List extra={<Icon name="left" fill="#abb0b5" size={14} />} title="展示箭头">
              <List.Item onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
              <List.Item onPress={() => navigation.goBack()}>Protobuf 生成 Go代码指南</List.Item>
            </List>
            <List extra={<Icon name="left" fill="#abb0b5" size={14} />} title="单元格大小">
              <List.Item size="small" onPress={() => navigation.goBack()}>尺寸大小设置</List.Item>
              <List.Item size="default" onPress={() => navigation.goBack()}>Protobuf 生成 Go代码指南</List.Item>
              <List.Item size="large" onPress={() => navigation.goBack()}>Protobuf 生成 Go代码指南</List.Item>
            </List>
            <List size="small" extra={<Icon name="left" fill="#abb0b5" size={14} />} title="单元格大小">
              <List.Item onPress={() => navigation.goBack()}>尺寸大小设置</List.Item>
              <List.Item onPress={() => navigation.goBack()}>Protobuf 生成 Go代码指南</List.Item>
              <List.Item size="large" onPress={() => navigation.goBack()}>Protobuf 生成 Go代码指南</List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
