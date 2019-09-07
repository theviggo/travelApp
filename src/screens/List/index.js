import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  ContainerColumn,
  ContainerRating,
  ContainerHeader,
  SearchText,
  Title,
  Avatar,
  Articles,
  RenderContainer,
  DestinationsText,
  RecommendedText,
  Scroll,
  DestinationView,
  UserImage,
  UserName,
  UserLocation,
  ItemRating,
  DestinationItemView,
  DestinationInfo,
  DBackground,
  DInfoTitle,
  DInfoDesc,
  RecommendedView,
} from './styles';

import { mocks } from './mocks';

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

  renderDestinations = () => {
    const { destinations } = this.props;
    return (
      <RenderContainer>
        <Scroll
          data={destinations}
          style={{ overflow: 'visible' }}
          keyExtractor={(item, index) => `${item.id}`}
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
    return (
      <RenderContainer>
        <RecommendedView>
          <RecommendedText>Recommended</RecommendedText>
        </RecommendedView>
      </RenderContainer>
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
