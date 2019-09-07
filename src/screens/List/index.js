import React from 'react';
import { StyleSheet, Animated, Dimensions, View } from 'react-native';

import {
  Container,
  ContainerColumn,
  ContainerRating,
  ContainerHeader,
  ContainerDots,
  RecommendedContainer,
  SearchText,
  Title,
  Avatar,
  Articles,
  RenderContainer,
  DestinationsText,
  RTitle,
  RMore,
  Dots,
  RRView,
  Scroll,
  DestinationView,
  UserImage,
  UserName,
  UserLocation,
  ItemRating,
  DestinationItemView,
  DestinationInfo,
  DBackground,
  RBackground,
  DInfoTitle,
  DInfoDesc,
  ActiveDot,
  RecommendedView,
  RFooter,
  RContainer,
  RFooterDesc,
  RFooterTitle,
  RList,
  RFooterTemp,
  RFooterSave,
  RFooterRating,
} from './styles';

import { mocks } from './mocks';

const width = Dimensions.get('screen');

const styles = StyleSheet.create({
  activeDots: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#007bfa',
    backgroundColor: '#007bfa',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2.5,
    marginHorizontal: 6,
    backgroundColor: '#dce0e9',
    borderColor: 'transparent',
  },
});

export default class List extends React.Component {
  static navigationOptions = {
    header: (
      <ContainerHeader>
        <Container>
          <SearchText>Search for place</SearchText>
          <Title>Destination</Title>
        </Container>
        <Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
        />
      </ContainerHeader>
    ),
  };

  scrollX = new Animated.Value(0);

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <ContainerDots>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Dots
              key={`step-${item.id}`}
              style={item.id === 1 ? styles.activeDots : null}
            />
          );
        })}
      </ContainerDots>
    );
  }

  renderDestinations = () => {
    const { destinations } = this.props;

    return (
      <RenderContainer>
        <Scroll
          data={destinations}
          decelerationRate={0}
          style={{ overflow: 'visible' }}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } },
          ])}
          renderItem={({ item }) => this.renderDestination(item)}
        >
          <DestinationView>
            <DestinationsText>Destination 1</DestinationsText>
          </DestinationView>

          <DestinationView>
            <DestinationsText>Destination 2</DestinationsText>
          </DestinationView>

          <DestinationView>
            <DestinationsText>Destination 3</DestinationsText>
          </DestinationView>
        </Scroll>
        {this.renderDots()}
      </RenderContainer>
    );
  };

  renderDestination = item => {
    return (
      <DBackground source={{ uri: item.preview }}>
        <DestinationItemView>
          <Container>
            <UserImage source={{ uri: item.user.avatar }} />
          </Container>

          <ContainerColumn>
            <UserName>{item.user.name}</UserName>
            <UserLocation>{item.location}</UserLocation>
          </ContainerColumn>

          <ContainerRating>
            <ItemRating>{item.rating}</ItemRating>
          </ContainerRating>
        </DestinationItemView>
        <DestinationInfo>
          <DInfoTitle>{item.title}</DInfoTitle>
          <DInfoDesc>{item.description}</DInfoDesc>
        </DestinationInfo>
      </DBackground>
    );
  };

  renderRecommended = () => {
    const { destinations } = this.props;
    return (
      <RecommendedContainer>
        <RecommendedView>
          <RTitle>Recommended</RTitle>
          <RMore>More</RMore>
        </RecommendedView>
        <ContainerColumn>
          <RList
            data={destinations}
            style={{ overflow: 'visible' }}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => this.renderRecommendation(item)}
          />
        </ContainerColumn>
      </RecommendedContainer>
    );
  };

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;

    return (
      <RecommendedContainer
        styles={
          (index === 0 ? { marginLeft: 36 } : null,
          isLastItem === 0 ? { marginRight: 36 } : null)
        }
      >
        <RBackground source={{ uri: item.preview }}>
          <RRView>
            <RContainer>
              <RFooterTemp>{item.temperature}℃</RFooterTemp>
              <RFooterSave>{item.temperature}℃</RFooterSave>
            </RContainer>
          </RRView>
        </RBackground>

        <RFooter>
          <RFooterTitle>{item.title}</RFooterTitle>
          <RFooterDesc>{item.location}</RFooterDesc>
          <RFooterRating>{item.rating}</RFooterRating>
        </RFooter>
      </RecommendedContainer>
    );
  };

  render() {
    return (
      <Articles>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </Articles>
    );
  }
}

List.defaultProps = {
  destinations: mocks,
};
